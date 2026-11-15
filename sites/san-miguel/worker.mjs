// The deployed Site's private access gate protects this Worker and its API.
import html from './index.html' with { type: 'text' };
import seed from './seed.json' with { type: 'json' };
export default {async fetch(request, env){
 const url=new URL(request.url),p=url.pathname;
 const json=(value,status=200)=>new Response(JSON.stringify(value),{status,headers:{'Content-Type':'application/json;charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
 try{
 if(['PUT','POST','DELETE'].includes(request.method)&&((request.headers.get('Origin')&&request.headers.get('Origin')!==url.origin)||request.headers.get('Sec-Fetch-Site')==='cross-site'))return json({error:'Origen no permitido'},403);
 if(p==='/api/estado'&&request.method==='GET'){
  const row=await env.DB.prepare('SELECT data, revision FROM project_state WHERE id = 1').first();
  return json(row?{data:JSON.parse(row.data),revision:row.revision}:{data:seed,revision:0});
 }
 if(p==='/api/estado'&&request.method==='PUT'){
  const text=await request.text();if(text.length>2000000)return json({error:'Registro demasiado grande'},413);
  const {data,revision}=JSON.parse(text);
  if(!Number.isSafeInteger(revision)||revision<0||!data||Object.keys(data).length!==Object.keys(seed).length)return json({error:'Registro inválido'},400);
  for(const k of Object.keys(seed)){if(!Array.isArray(data[k])||data[k].length>3000)return json({error:'Sección inválida'},400);const ids=new Set();for(const r of data[k]){if(!r||typeof r!=='object'||Array.isArray(r)||typeof r.id!=='string'||!r.id||ids.has(r.id)||!['Pendiente','Confirmado','Por verificar'].includes(r.estado))return json({error:'Fila inválida'},400);ids.add(r.id);for(const [key,v] of Object.entries(r)){if(!(key in seed[k][0])||!(v===null||typeof v==='string'||(typeof v==='number'&&Number.isFinite(v)&&v>=0)))return json({error:'Campo inválido'},400)}}}
  const row=await env.DB.prepare('INSERT INTO project_state (id,data,revision,updated_at) SELECT 1,?,1,? WHERE ? = 0 ON CONFLICT(id) DO UPDATE SET data=excluded.data, revision=project_state.revision+1, updated_at=excluded.updated_at WHERE project_state.revision = ? RETURNING revision').bind(JSON.stringify(data),new Date().toISOString(),revision,revision).first();
  // Existing records need an UPDATE when the requested revision is nonzero.
  const result=row || (revision>0?await env.DB.prepare('UPDATE project_state SET data=?, revision=revision+1, updated_at=? WHERE id=1 AND revision=? RETURNING revision').bind(JSON.stringify(data),new Date().toISOString(),revision).first():null);
  return result?json({revision:result.revision}):json({error:'Conflicto de versión'},409);
 }
 if(p==='/api/documentos'&&request.method==='POST'){
  if(Number(request.headers.get('Content-Length'))>21*1024*1024)return json({error:'Documento demasiado grande'},413);
  const form=await request.formData(),file=form.get('file');if(!file||typeof file.arrayBuffer!=='function'||file.size>20*1024*1024)return json({error:'Documento inválido o demasiado grande'},400);
  const key=crypto.randomUUID();await env.BUCKET.put(key,await file.arrayBuffer(),{customMetadata:{name:file.name.slice(0,200)}});return json({url:'/documentos/'+key},201);
 }
 if(p.startsWith('/documentos/')&&request.method==='GET'){
  const key=p.slice(12);if(!/^[a-f0-9-]{36}$/.test(key))return json({error:'Documento no encontrado'},404);
  const obj=await env.BUCKET.get(key);if(!obj)return json({error:'Documento no encontrado'},404);
  return new Response(obj.body,{headers:{'Content-Type':'application/octet-stream','Content-Disposition':"attachment; filename*=UTF-8''"+encodeURIComponent(obj.customMetadata?.name||'documento'),'X-Content-Type-Options':'nosniff','Cache-Control':'private,no-store'}});
 }
 if(request.method==='GET'&&p==='/')return new Response(html,{headers:{'Content-Type':'text/html;charset=utf-8','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff','Referrer-Policy':'same-origin'}});
 if(p.startsWith('/api/'))return json({error:'Ruta o método no disponible'},404);
 return new Response('No encontrado',{status:404});
 }catch(error){console.error('Error de solicitud',p,error.message);return json({error:'No se pudo completar la solicitud'},500)}
}};
