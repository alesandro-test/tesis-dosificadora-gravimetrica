# Integración de la propuesta antes del CAD

Fecha: 13/11/2026. Alcance autorizado: revisar las referencias y desarrollar la propuesta de San Miguel hasta las entradas del CAD; el estudiante elabora el CAD.

## Evidencia revisada y criterio de aplicación

Se contrastaron texto y figuras de María Julia hasta la posición física 50, imágenes originales del DOCX V9 y páginas 64–66 del PDF SySO. El método se adapta sin copiar componentes ni repetir inconsistencias de las referencias. Las auditorías específicas están en `auditoria_referencias_preCAD_2026-11-13.md`, `auditoria_funcional_preCAD_2026-11-13.md` y `auditoria_comerciales_QFD_2026-11-13.md`.

Se revisaron 18 PDF de productos comerciales, con comprobación visual y contraste de cinco originales existentes en NotebookLM. Se excluyeron sugerencias de densidades y operaciones multidosis que el servicio propuso sin respaldo. La página vigente de Indurpack confirma los modelos de la familia IND-AX y la posibilidad declarada de reunir hasta cuatro productos. La URL HZF-A conservada en la captura local ya no expone las especificaciones al consultarla en la sesión; los datos se sustentan en el PDF guardado, p. 1, identificado en la auditoría comercial. No se atribuye fecha de publicación a los dos nuevos registros bibliográficos.

## Aplicación por sección

| Sección | Cambio aplicado | Límite conservado |
| --- | --- | --- |
| RNF y tolerancias | Alineación con D-024: límites individuales de 30/3/2/1 g y media absoluta de harina ≤10 g. | Metas de diseño; aceptación de receta y comprobación pendientes. |
| Árbol | Resultados de dosificación, intervención/duración y operación en el puesto, con mantenimiento y programación. | Los medios se comparan en morfología, sin imponer dispositivos en el árbol. |
| Caja negra y descomposición | Flujos de material, energía e información; salida al recipiente; colocación/retiro por el operario. | No implica traslado automático del recipiente. |
| Subfunciones | Referencia por ingrediente e incremento recibido; distinción entre tara, referencia de etapa y calibración. | La cantidad del auxiliar no equivale automáticamente a la entregada a la canoa. |
| Casa de calidad | Nueve necesidades y catorce H, pesos y relaciones del diseñador, techo, direcciones de mejora y prioridades del Excel vigente. | No atribuir pesos a encuesta; restricciones no compensables con una puntuación alta en otra característica. |
| Comparación comercial | IF-A, HZF-A e IND-AX4; fotografía publicada como AX2, sin confundir modelos. | Datos de catálogo, bases porcentuales no verificadas y ND explícitos. No superioridad experimental del prototipo. |
| Morfología y cribado | Funciones F01–F17 estables; ganancia de peso en receptores F05-C, convergencia F12, exclusión auxiliar limitada al concepto A y parada del accionamiento F16. | La interrupción del motor no demuestra cese instantáneo del polvo. |
| Conceptos | A/B/C conservados; geometría, pesaje y mando se comparan como elecciones distintas. | B es referencia de predimensionamiento; no selección definitiva. Levadura manual permanece alternativa de alcance sin adoptar. |
| Convergencia y CAD | Esquema en planta de cuatro alimentadores hacia un receptor ovalado fijo; identificación de la canoa real. | Sin escala ni cotas de fabricación; faltan abertura útil, tara, apoyos y medidas del puesto. |

## Cálculo de la casa de calidad

Excel de referencia: `docs/design/Casa_de_calidad_San_Miguel_revision.xlsx`, hoja `House of Quality 1`; no modificado durante esta sesión. Importancias: 10/10/8/9/8/8/10/7/9. Relaciones: 9 fuerte, 3 media, 1 débil. Suma de pesos técnicos: 1303. Prioridades H1–H14: 6,9071 / 6,9071 / 6,9071 / 6,9071 / 6,2164 / 10,5909 / 7,8281 / 7,8281 / 6,2932 / 9,4398 / 6,9071 / 4,8350 / 6,9071 / 5,5257 %. El redondeo de la figura no sustituye los valores calculados.

La comparación documental añadida a la tesis no modifica ni valida las notas comerciales ordinales anteriores del Excel. Cada criterio exige la misma definición y condiciones equivalentes antes de usarse para una clasificación final. ND no equivale a cero.

## Dato nuevo del recipiente

El estudiante comunicó que el receptor es una canoa ovalada de 20 L, «Canoa Mediana» de La Papelera Plásticos, con exteriores aproximados 51,5 × 35,3 × 18,2 cm. Se registran como dimensiones comunicadas, no como medición realizada por el asistente ni ficha verificada del fabricante. No tiene diámetro único. La distribución usa largo/ancho de abertura útil y altura, junto con la base de apoyo y la tara por medir. Se sustituyó «balde» por «recipiente» en las secciones y diagramas activos de la propuesta; no se alteran registros históricos de campo ni el capítulo 1.

## Pendientes que condicionan el cierre

1. Contrastar necesidades, pesos, techo y metas operativas propuestas con propietaria/tutor.
2. Confirmar márgenes de receta de menores; la meta técnica adoptada no equivale a esa aceptación.
3. Medir abertura interior, base de apoyo y tara de la canoa; ancho/fondo del puesto y altura de recarga.
4. Caracterizar ingredientes reales y fijar cantidad por recarga; no dimensionar tolvas únicamente con densidad bibliográfica.
5. Obtener fichas y precios de tornillos, accionamientos y pesaje; comprobar capacidad con tara, respuesta bajo carga y montaje.
6. Medir descarga residual y retención de transferencia para contrastar A/B/C; conservar elección final abierta.

## Verificación

Compilación final correcta con MiKTeX/LaTeX Workshop y Biber: `docs/thesis/main.pdf`, 111 páginas. Se inspeccionaron visualmente las posiciones físicas 59–60, 63–71, 73–74, 78 y 80–81: RF/RNF, árbol, caja negra, descomposición, subfunciones, QFD, tabla de características, contraste comercial/fotografía, morfología, cribado, convergencia, combinaciones, canoa y esquema B. Tras añadir las direcciones de mejora, se volvió a renderizar y revisar la página 66; también se comprobó a tamaño completo la convergencia de la página 73. No se detectaron cortes o superposiciones en las figuras modificadas. Las imágenes de revisión quedan en la carpeta temporal `san-miguel-auditoria-20261113`.

Se corrigió un error de composición del porcentaje con el módulo español de Babel introducido al integrar el nuevo texto. La compilación conserva advertencias anteriores de destinos duplicados, algunas líneas de bibliografía y `Hfootnote.1` sin destino. No hay citas ni referencias cruzadas nuevas sin resolver. El acceso inicial restringido a AppData impidió leer la configuración de MiKTeX; la ejecución autorizada del mismo comando estándar resolvió ese bloqueo, sin cambiar la instalación.
