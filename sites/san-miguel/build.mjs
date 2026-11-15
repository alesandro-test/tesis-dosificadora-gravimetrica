import {readFileSync,writeFileSync,mkdirSync,readdirSync} from 'node:fs';
const seed=JSON.parse(readFileSync('seed.json','utf8'));
let worker=readFileSync('worker.mjs','utf8').replace("import html from './index.html' with { type: 'text' };",'const html = '+JSON.stringify(readFileSync('index.html','utf8'))+';').replace("import seed from './seed.json' with { type: 'json' };",'const seed = '+JSON.stringify(seed)+';');
const references=Object.fromEntries(readdirSync('references').map(n=>[n,readFileSync('references/'+n,'utf8')]));
worker='const references = '+JSON.stringify(references)+';\n'+worker;
worker=worker.replace("if(p.startsWith('/api/'))",`if(p.startsWith('/referencias/')&&request.method==='GET'){const name=decodeURIComponent(p.slice(13));if(Object.hasOwn(references,name))return new Response(references[name],{headers:{'Content-Type':'text/plain;charset=utf-8','Content-Disposition':"attachment; filename*=UTF-8''"+encodeURIComponent(name),'X-Content-Type-Options':'nosniff'}});}\n if(p.startsWith('/api/'))`);
mkdirSync('dist/server',{recursive:true});mkdirSync('dist/.openai',{recursive:true});writeFileSync('dist/server/index.js',worker);writeFileSync('dist/.openai/hosting.json',readFileSync('.openai/hosting.json'));
console.log('Sitio preparado: interfaz, API persistente y seis fuentes.');
