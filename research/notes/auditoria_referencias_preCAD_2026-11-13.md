# Auditoría de referencias estructurales para la propuesta previa al CAD

Fecha: 13/11/2026. Revisión de apoyo; no cambia requisitos, alcance ni arquitectura. Se contrastaron las decisiones vigentes, la estructura institucional, los criterios docentes y la propuesta de San Miguel en revisión. Los proyectos ajenos son referencias de método y presentación, no evidencia del desempeño de la dosificadora.

## Fuentes y comprobación visual

- María Julia: `C:/Users/Soam/OneDrive - UCB/universidad_catolica/2026-1-2/Stuffs/Presentacion Final - Maria Julia.pdf`. Se revisó el desarrollo textual de la propuesta hasta la posición física 50 del PDF. Se inspeccionaron directamente las imágenes de las posiciones 28, 29, 30, 33, 40, 42, 47, 48, 49 y 50. Las posiciones físicas se indican para evitar confundirlas con la numeración impresa.
- Diseño Superior V9: `C:/Users/Soam/OneDrive - UCB/universidad_catolica/2026-1-2/Diseño Superior/examples_project_ucb/V9 - Template Diseño Superior.docx`. Lectura de la extracción textual y de los recursos originales `word/media/image5.png`, `image7.png`, `image8.png` e `image10.png`: árbol, descomposición funcional, casa de calidad completa y ampliación de relaciones/comparación. No se atribuye una página al DOCX sin comprobar su paginación renderizada.
- SySO: `C:/Users/Soam/Desktop/Template_UCB_SySo-main/docs/thesis/main.pdf`. Lectura y comprobación visual de las posiciones físicas 64–66, numeradas 63–65 en la impresión: arquitectura, cadena de procesamiento, arquitectura cliente-servidor, módulos y comienzo de costos.
- San Miguel: `docs/thesis/chapters/marcopractico/propuesta.tex`, tablas morfológicas y de combinaciones relacionadas, `context/DECISIONS.md`, `context/STATUS.md`, reglas docentes, estructura y redacción. La revisión detecta la situación al comienzo de esta sesión; otros cambios paralelos pueden resolver los puntos indicados.

## Qué aporta realmente la secuencia de María Julia

El valor del ejemplo está en hacer visible el recorrido desde necesidades hasta conceptos completos: requerimientos → objetivos del producto → caja negra → funciones → subfunciones → prioridades técnicas → alternativas por función → cribado → funciones comunes y variables → combinaciones. Cada paso reduce una incertidumbre distinta. La casa de calidad prioriza características; la morfología genera conceptos; el cribado comprueba restricciones; la comparación posterior estudia los compromisos entre conceptos. Ninguna de esas herramientas, por sí sola, demuestra precisión, seguridad o viabilidad de fabricación.

| Etapa y ubicación verificada | Práctica útil | Corrección necesaria al trasladar el método a San Miguel |
| --- | --- | --- |
| Árbol, posición 28, Figura 3.4 | Presenta jerarquía y divide una necesidad amplia en aspectos manejables. | El ejemplo mezcla objetivos, medios y componentes: materiales, microcontroladores, sensores y actuadores. En San Miguel conviene expresar resultados deseados y reservar sus medios para la matriz morfológica. No copiar sus ramas mecánicamente. |
| Caja negra, posición 28, Figura 3.5 | Define la transformación principal antes del diseño detallado. | Las entradas del ejemplo no muestran explícitamente todos los flujos energéticos/informativos. Mantener en San Miguel material, energía e información; salida física en el balde y estado comunicado, con límite previo a la mezcla. |
| Desglose, posición 29, Figura 3.6 | Permite seguir la transformación y el retorno de medición. | Distinguir señal, energía y material mediante trazos y leyenda. No convertir aún el diagrama funcional en una lista de marcas o dispositivos. |
| Subfunciones, posición 30, Figura 3.7 | Profundiza donde es necesario comprender control y realimentación. | Su nivel de detalle y texto pequeño dificultan la lectura. San Miguel necesita la secuencia de referencia estable, incremento por ingrediente, corte y comprobación del material recibido; no necesita copiar bloques de cinemática inversa o transferencias de motor ajenos a su problema. |
| QFD, posición 33 | Reúne necesidades, características técnicas, direcciones de mejora, relaciones, techo, dificultad y comparación. | La figura completa es demasiado densa para leerla cómodamente. Separar matriz de relaciones, prioridades y comparación cuando sea necesario, conservando los mismos identificadores y remitiendo al Excel. |
| Morfología inicial, posición 40, Tabla 3.3 | Incluye la cadena completa y acepta filas con distinto número de opciones. | No forzar tres alternativas para cada función. No tratar divisor de tensión, driver, amplificador y transistor como equivalentes de regulación; tampoco confundir herramientas de programación con funciones de la máquina. |
| Cribado, posición 42, Tabla 3.4 | Hace visible que algunas opciones dejan de intervenir. | Una marca o color no sustituye un motivo verificable. San Miguel debe mostrar condición incumplida, fuente y estado: excluida, en reserva o pendiente de dimensionamiento. |
| Matriz reducida y separación, posiciones 47–48, Tablas 3.6–3.8 | Evita repetir funciones comunes al comparar configuraciones. | El ejemplo pierde trazabilidad: opciones de presión/peso reaparecen en una tabla posterior y cambian las alternativas de regulación. Mantener identificadores estables F01–F17 y comprobar que una opción descartada no reaparezca sin justificación. |
| Caminos, posiciones 49–50, Tablas 3.9–3.10 y continuación | Permite reconstruir una solución a partir de varias filas. | Un camino debe reunir opciones compatibles y añadir la base común. El color no demuestra compatibilidad geométrica, eléctrica o metrológica. Las opciones simultáneas de una misma función necesitan explicación. |

## Qué aporta y qué no conviene copiar de V9

El árbol V9 utiliza fiabilidad, rendimiento y costo como ejes y despliega estanqueidad, pérdidas, fabricación, montaje y uso. Es útil su intención de unir objetivos con variables técnicas. Su organización visual incluye, sin embargo, medios de solución y una duplicación de ergonomía en ramas distintas; no constituye una jerarquía que deba copiarse.

La descomposición original muestra filtrar, comparar y calcular dentro del controlador, seguida de transformación de energía, transmisión, acoplamiento y realimentación. Aporta la idea de identificar la cadena y el retorno de medición. Para San Miguel las ramas relevantes son almacenar, alimentar, conducir, recibir/pesar, comparar, interrumpir e informar. El diagrama hidroestático no constituye evidencia para escoger un controlador, tornillo o balanza.

La casa de calidad de V9 contiene nueve necesidades y doce características técnicas utilizadas. Se ven direcciones de mejora, prioridades relativas, relaciones, techo y comparación 0–5. Sus necesidades incluyen precio, mantenimiento, instalación, fabricación local, seguridad, rapidez y compatibilidad con piezas comerciales: muestra que no deben limitarse al rendimiento principal. No obstante:

- La imagen conserva una serie vacía «Competitor 5» y valoraciones sin rúbrica visible en la propia figura. No llenar desconocidos para completar el gráfico. En San Miguel corresponde ND y no dibujar puntos donde falta evidencia.
- «Material del prototipaje» y «material estructural» son categorías de solución; resultan menos claros como medidas que una propiedad, masa, acceso o tiempo verificable. No llenar las columnas técnicas con nombres de componentes.
- Los pesos explicados como impacto en el diseño no equivalen automáticamente a prioridades declaradas por la propietaria. Conservar la atribución al diseñador y la revisión pendiente.
- La comparación incluye tecnologías de aplicaciones distintas. Para San Miguel, comparar por necesidad y condición documentada, sin asumir que compartir un principio de funcionamiento implica igual escala, limpieza, precio o precisión.
- La conclusión de la casa no debe afirmar que el producto propuesto ya logró el desempeño. Una meta y un perfil previsto siguen siendo hipótesis de diseño.

La matriz V9 muestra otra advertencia útil: funciones como comparar/calcular pueden compartir el mismo controlador. Elegir microcontrolador o PLC en dos filas no implica dos dispositivos. Asimismo, acople directo, rodamiento lineal y acople magnético no constituyen necesariamente alternativas equivalentes para transmitir el mismo giro. En San Miguel cada fila necesita una función inequívoca y opciones comparables.

## Enfoque de redacción de SySO aplicable

Las posiciones 64–66 presentan una figura general y, a continuación, describen el recorrido de entradas y procesamiento; la figura siguiente profundiza un nivel; la última aclara módulos incluidos y excluidos. Ese orden funciona para San Miguel: presentar qué resuelve la figura, recorrer los flujos relevantes y explicar su límite antes de pasar a mayor detalle.

No conviene repetir todos los rótulos en un párrafo ni afirmar «garantiza», «asegura» o «mejora la eficiencia» sin medición. Un cierre útil indica qué decisión se prepara o qué comprobación falta. Costos puede seguir al concepto preliminar y sus interfaces; no obliga a cerrar una lista definitiva de piezas antes del CAD del estudiante.

## Correcciones concretas de San Miguel detectadas

1. **Sincronizar casa de calidad y requisitos.** La propuesta inicial todavía mostraba siete necesidades y H1–H8, mientras el Excel vigente contiene nueve necesidades y catorce características. Alinear rótulos, símbolos, cálculo, techo y texto. Mantener D-024: harina ±30 g individual y media absoluta ≤10 g; azúcar/sal/levadura ±3/±2/±1 g individuales como metas adoptadas para diseño, con comprobación técnica y aceptación de receta pendientes. No presentarlas como medidas del prototipo.
2. **Completar la trazabilidad del árbol sin agregar componentes.** Hacer explícitas las necesidades de operación/ciclo y mantenimiento cuando corresponda; no convertir el árbol en una copia de la lista RF/RNF. Tres ramas amplias pueden ser suficientes si sus hojas se relacionan con medidas verificables.
3. **Respetar el límite de la caja negra.** «Entregar al operario» puede interpretarse como manipulación automática del balde. Preferir «reunir ingredientes en el recipiente» o «entregar ingredientes al balde»; la colocación y el retiro siguen a cargo del operario.
4. **Precisar F12 y la convergencia.** «Salidas independientes» no explica cómo llegan cuatro ingredientes al mismo recipiente. Usar «salidas directas orientadas a la abertura» frente a «colector corto desmontable». La disposición radial es una variante geométrica que debe contrastarse con la abertura, altura y accesibilidad reales; no demuestra por sí misma que las cuatro boquillas quepan.
5. **Definir F05-C antes de combinar.** «Pesaje por ingrediente» puede significar receptores de ganancia de peso o pérdida de peso de tolvas/alimentadores. La F06 actual («soportar el receptor pesado») corresponde a ganancia; la pérdida de peso exigiría soportar y aislar cada módulo. Especificar el principio o mantener esa familia fuera de los conceptos desarrollados hasta definirlo.
6. **Precisar el cribado de F13.** La ausencia de pesaje auxiliar no demuestra que cualquier receptor intermedio carezca de función: podría servir para converger descargas. La exclusión debe limitarse al concepto A tal como se plantea, porque allí se busca evitar transferencia y retención adicionales; no convertirla en una prohibición universal.
7. **Separar parada del motor y corte del polvo.** F16 reúne opciones de interrupción del accionamiento. Ni software ni habilitación demuestran que cese instantáneamente la caída. Mantener la prueba de material en vuelo/descarga residual y, si se requiere, estudiar un elemento de cierre como función diferente. No agregarlo como selección decidida.
8. **Comparar conceptos e interfaces.** A/B/C modifican más de una variable; su comparación global no permite atribuir toda diferencia al número de balanzas. Distinguir el efecto de pesaje, geometría, transferencia, control y limpieza. Un PLC no es una condición inherente al tornillo vertical ni una garantía de precisión.
9. **Mantener los identificadores hasta el bosquejo.** Toda combinación debe reconstruirse con Fxx y la opción correspondiente; explicar qué opciones comunes se han omitido por brevedad y cuáles no aplican. No reintroducir una opción excluida ni afirmar seleccionada una familia por falta de ficha de otra.

## Paquete mínimo útil antes del CAD preliminar del estudiante

No hace falta añadir más herramientas por cantidad. La secuencia existente ya contiene lo esencial si se cierran sus vínculos: necesidades respaldadas → metas verificables → funciones → prioridades QFD → opciones compatibles → cribado → conceptos y bosquejos → entradas para predimensionamiento y presupuesto.

Para desarrollar los conceptos faltan principalmente dimensiones/tara/abertura del balde, superficie y altura disponible, masas/capacidades útiles por receta, propiedades de alimentación de los ingredientes reales y viabilidad del pesaje de los menores con carga previa. La resolución nominal de una balanza no reemplaza la caracterización bajo condiciones de dosificación. No estimar exactitud de levadura a partir de una pantalla de 1 g sin estudiar incertidumbre y repetición.

La entrega previa al CAD puede terminar con dos o tres conceptos completos, sus ventajas/dificultades, un esquema de convergencia al balde fijo y una tabla de comprobaciones pendientes. El predimensionamiento y la lista preliminar de piezas deben expresar capacidades, interfaces y referencias candidatas; el modelo comercial definitivo requiere comprobar disponibilidad, dimensiones, par, material y respuesta. El método de María Julia orienta el recorrido, pero no autoriza cerrar decisiones que en San Miguel continúan abiertas.

## Alcance de esta auditoría

Esta nota documenta revisión de fuentes estructurales y observaciones de consistencia. No sustituye una auditoría de las fichas comerciales ni una prueba de la máquina. No se modificaron archivos de la tesis, datos de campo, requisitos ni decisiones por esta subtarea. Los puntos comunicados al agente principal deben verificarse contra la versión final integrada antes de compilar.
