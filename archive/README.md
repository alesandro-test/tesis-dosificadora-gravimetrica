# Archivo general del proyecto

Este directorio conserva material que no utiliza la tesis ni la presentación
actuales. No contiene requisitos vigentes ni resultados nuevos.

Se mantiene la ruta de origen dentro de `archive/`, para localizar y recuperar
un archivo sin crear carpetas dispersas de copias o versiones.

- `docs/design/`: versiones anteriores de la casa de calidad.
- `docs/thesis/images/`: capturas reemplazadas, vistas previas, alternativas de
  figuras y originales de imágenes no utilizados en el documento actual.
- `docs/thesis/chapters/`: propuestas antiguas y ejemplos de plantilla, incluidos
  ejemplos de SySO que no pertenecen a la dosificadora.
- `archive/docs/thesis/bibliography/referencias_reserva.bib`: bibliografía de reserva,
  separada de la bibliografía cargada por la tesis.
- `research/notes/`: registros reemplazados y revisiones ya aplicadas; se
  conservan sus datos y la trazabilidad de las decisiones.
- `sites/datos_locales/`: respaldo del archivo de datos local del panel retirado.
  La aplicación y sus copias de documentos se eliminaron del proyecto.

El [inventario](inventario_2026-11-15.csv) relaciona ruta original, destino,
motivo y huellas de los archivos archivados. Las referencias documentales se
actualizan cuando cambia una ruta; no se alteran cifras ni mediciones.

Los auxiliares de LaTeX y los informes de inspección regenerables no se
archivan. La compilación concentra sus auxiliares en `docs/thesis/build/`
mediante `.latexmkrc`; `main.pdf` conserva su ubicación habitual.

Los archivos vigentes permanecen en `docs/`, `context/` y `research/`.
La casa de calidad activa es `docs/design/Casa_de_calidad_San_Miguel_revision.xlsx`.
Las fuentes originales, el diagnóstico de campo y las referencias estructurales
siguen disponibles en sus carpetas de trabajo. Para restaurar un archivo,
consultar el inventario y revisar sus dependencias antes de volver a cargarlo.

## Comprobación de la organización — 15/11/2026

- 73 archivos archivados, con origen, motivo y huellas verificadas.
- Enlaces de los índices principal, de investigación y del archivo comprobados.
- Sites eliminado del repositorio y sus procesos locales detenidos.
- Respaldo SQLite comprobado con `integrity_check`.
- Tesis compilada desde cero: 111 páginas. El texto coincide con el anterior
  al normalizar la fecha automática del 13 al 15 de noviembre; no se cambió
  el contenido académico. Se conserva el aviso anterior `Hfootnote.1`.
- Comando habitual verificado con los auxiliares en `docs/thesis/build/`.
