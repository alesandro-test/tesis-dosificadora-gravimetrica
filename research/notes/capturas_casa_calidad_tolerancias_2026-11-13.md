# Capturas de la casa de calidad y revisión de tolerancias

Fecha: 13/11/2026. Continuación solicitada por el estudiante después de la integración previa al CAD.

## Referencias y criterio de redacción

Se retomaron María Julia, posiciones físicas 31–39, y las Tablas 3.1–3.2 de SySO, posiciones físicas 59–60. María Julia separa partes de la casa para explicarlas. SySO introduce el origen de los requerimientos y sus consecuencias antes de profundizar en la arquitectura. Sus tablas usan nombres descriptivos y no imponen RNF-001 ni RNF-01. En San Miguel se conserva RNF-01 como convención de trazabilidad vigente; precisión y tolerancia son atributos de desempeño, mientras medir y controlar son funciones RF.

La revisión de tolerancias conserva los datos, D-024, tablas, citas y labels. Se presenta primero la diferencia respecto de la consigna, se identifica exceso/déficit y después se vincula el límite con RNF-01. El apartado de datos pasa a «Referencia del procedimiento manual», porque la tabla incluye los cuatro ingredientes. Los escenarios del 1 y 2 % siguen como sensibilidad, no sustituyen las metas adoptadas.

## Captura y composición

Fuente: `docs/design/Casa_de_calidad_San_Miguel_revision.xlsx`, hoja `House of Quality 1`. Exportación nativa con Microsoft Excel 16.0 en una copia temporal. Los datos del cuerpo de la casa, pesos, coeficientes, prioridades y límites no se redibujan. Los encabezados de plantilla se traducen al español en la copia de presentación. Se conservan colores, símbolos y disposición del Excel.

Las imágenes de la tesis están en `docs/thesis/images/marcopractico/casa_calidad_excel/`: ocho PDF vectoriales y sus vistas PNG. Los recortes repiten necesidades y encabezados al dividir columnas, sin alterar celdas ni coeficientes. La parte inferior repite los encabezados de las características para leer metas y prioridades sin la matriz intermedia. Las notas comerciales y el gráfico se separan para aumentar el tamaño de texto. Se omite la columna vacía de la plantilla.

| Captura | Región de origen / operación |
| --- | --- |
| Necesidades | B49:G59 |
| Relaciones H1–H7 | F47:AW59, recorte de B47:CM59 |
| Relaciones H8–H14 | AX47:CM59, con F:G repetidas para identificar necesidades |
| Techo | H1:CM48, sin la columna 15 no utilizada |
| Metas H1–H7 | Encabezados F47:AW50 y resultados F61:AW65 |
| Metas H8–H14 | Encabezados AX47:CM50 y resultados AX61:CM65, con etiquetas F:G repetidas |
| Notas comerciales | CT49:CX59, con etiquetas F49:G59 repetidas |
| Gráfico | Área nativa CZ:DE del bloque comercial, con etiquetas de necesidades repetidas |

La descripción del cálculo aclara que el Excel normaliza primero las importancias de las necesidades: `u_i = 100 w_i / sum(w)`, después calcula `W_j = sum(u_i r_ij)` y `p_j = 100 W_j / sum(W)`. Así los valores de importancia técnica de las capturas coinciden con la fórmula narrada. Usar pesos sin normalizar produce las mismas prioridades relativas, pero otra escala de W. La dificultad no interviene en esta fórmula.

## Corrección necesaria del gráfico del Excel

La comprobación nativa detectó dos fallos que la vista previa anterior no había revelado:

1. El gráfico reconstruido impedía abrir la revisión con Excel, aunque las partes XML fueran legibles y el motor de vista previa importara el libro. Se sustituyó únicamente el gráfico por una versión serializada por Excel a partir de la estructura nativa válida de la plantilla y las cuatro series actuales.
2. Varias notas comerciales numéricas estaban guardadas como texto. Con ND mezclado en los rangos, Excel utilizaba las posiciones 1–9 como abscisas en lugar de las calificaciones. Se tiparon como números sin cambiar sus valores y se agregaron auxiliares DH51:DK59 con `IF(ISNUMBER(nota),nota,NA())`. Esos auxiliares permiten representar ND sin punto. El perfil objetivo se distingue mediante trazo discontinuo.

La reparación del libro vigente conserva los encabezados originales, protección, validaciones, estilos, techo, hojas de apoyo y fórmulas de prioridad. Cambian solo `xl/worksheets/sheet1.xml` y `xl/charts/chart1.xml`; se amplía la dimensión de hoja a DK y los rangos de las filas afectadas para incluir los auxiliares. `#N/A` en esos auxiliares significa ausencia deliberada de punto y no un fallo del cálculo QFD. No se altera una nota ni se agregan valoraciones nuevas.

Respaldo anterior: `C:/Users/Soam/AppData/Local/Temp/san-miguel-capturas-qfd-20261113/revision-antes-capturas.xlsx`. Construcción, copia de presentación, exportaciones nativas y coordenadas de recortes permanecen en esa carpeta temporal. La copia reparada se abrió con Excel en modo de solo lectura antes de aplicarla al libro vigente. Serie objetivo comprobada: `5,5,4,4,4,ND,5,4,5`; importancia E51 = 10 y prioridad H6 = 10,5909439754 %, sin cambio.

Las líneas entre puntos comerciales no atribuyen puntuaciones a las filas ND. El perfil objetivo expresa metas, no ensayos; las notas de catálogos son valoraciones documentales y no una escala común de error en gramos.

## Verificación final

Compilación final correcta con MiKTeX/latexmk: 117 páginas. Inspección visual de las posiciones físicas 60–62 y 65–73 del PDF: tolerancias, tablas, capturas y sus explicaciones. Tras dividir la comparación, se volvieron a revisar las páginas 72–73; se eliminó la columna vacía para la captura de notas y se ajustó su ancho. El texto principal de las dos capturas de comparación queda alrededor de 9,6–9,7 pt; los bloques de relaciones y metas, alrededor de 8,5 pt. Los PDF vectoriales conservan nitidez al ampliar.

La comprobación del paquete Excel preserva las 260 fórmulas anteriores, protección, combinaciones de celdas y validaciones. Se añaden únicamente 36 fórmulas auxiliares del gráfico. Se confirma que solo cambian las dos partes indicadas. No hay citas o referencias cruzadas nuevas indefinidas. Persiste el aviso previo `Hfootnote.1` y advertencias anteriores fuera de estas secciones; no se modifican por esta tarea. `git diff --check` no detecta errores de espacios.
