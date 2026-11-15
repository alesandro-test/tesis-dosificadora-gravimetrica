# San Miguel · Proyecto de tesis

Panel en español con recetas, requisitos y tolerancias, comparación de alternativas, componentes, entrevistas, decisiones y fuentes. Los campos vacíos se conservan como valores desconocidos; las cantidades se expresan en gramos. Las bandas de diseño no equivalen a aceptación experimental.

## Contenido inicial

- Cuatro recetas del levantamiento corregido.
- Catorce respuestas transcritas del apéndice y una pregunta pendiente, identificada como propuesta.
- Tres alternativas de estudio A/B/C, sin selección definitiva ni costos inventados.
- Seis grupos de componentes, nueve requisitos y decisiones vigentes/abiertas.
- Seis copias documentales de referencia del proyecto al 15/11/2026.

## Uso

Cada sección permite buscar, filtrar, crear, editar y eliminar registros. En Documentos y fuentes se pueden adjuntar archivos de hasta 20 MB. Preparar redacción permite copiar y descargar Markdown, JSON y CSV; exporta también los pendientes y fuentes.

El servidor guarda los registros en D1 y los adjuntos en R2; no depende del almacenamiento del navegador. La revisión del registro evita sobrescribir un cambio guardado desde otra ventana. Si aparece un conflicto, conserva tu edición y recarga.

Editar el panel no modifica los documentos originales de la tesis. La copia de respaldo JSON es una exportación; no hay importación automática. El acceso de producción debe permanecer privado.

## Vista local

Desde esta carpeta, ejecutar `node build.mjs`, `node test.mjs` y `node dev.mjs`. La vista se sirve en http://127.0.0.1:4387. Los datos locales de prueba se guardan únicamente en `.local/`, que está excluida de la publicación.

## Estado de publicación

Site registrado con identidad en `.openai/hosting.json`. La publicación exige guardar y subir una versión del código en el repositorio independiente del Site; no se debe utilizar el repositorio principal de la tesis. Publicación privada autorizada expresamente por el usuario el 15/11/2026; el repositorio principal de la tesis se conserva sin commit ni push.

No se modificaron archivos LaTeX ni se requiere compilar la tesis para utilizar este panel.
