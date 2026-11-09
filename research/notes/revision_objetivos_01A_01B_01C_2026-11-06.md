# Revisión 01A, 01B y 01C — 06/11/2026

**Estado:** enunciados aplicados el 06/11/2026 por solicitud del estudiante como versión de trabajo en `docs/thesis/chapters/marcoref.tex` (`D-020`); aprobación docente pendiente. Las matrices y observaciones siguientes documentan la revisión previa y sus asuntos abiertos. La instrucción docente de agrupar requerimientos y tolerancias fue confirmada por el estudiante. Fuente: `research/docente/observaciones_notebooklm_2026-11-06.md`.

## 01A — Diagnóstico y problema

La agrupación conserva las dos dimensiones del diagnóstico: tiempo e intervención del operario, y diferencias respecto de las cantidades objetivo de harina, azúcar, sal y levadura. El objetivo general mantiene el desarrollo del prototipo y el objetivo de evaluación conserva la comparación con el procedimiento manual bajo condiciones comparables. La agrupación no incorpora mediciones ni promete mejoras.

| Elemento revisado | Relación con el borrador | Resultado |
|---|---|---|
| Formulación y árbol de problemas de `marcoref.tex` y `images/marcoref/arbol_problemas.tex` | El primer objetivo integra la especificación del equipo; la evaluación sigue comprobando tiempo e intervención y diferencias por ingrediente. | Coherencia temática conservada; no equivale a aprobación docente del diagnóstico. |
| Requerimientos derivados del procedimiento registrado | Integran el primer objetivo junto con las tolerancias obtenidas de fuentes técnicas y normativas. | Se conservan las dos bases de evidencia y no se deducen tolerancias de las diferencias manuales. |
| Evaluación del prototipo | Pasa del número 6 al 5 en el borrador. | Conserva tiempo de dosificación, intervención del operario, diferencia y repetibilidad. |

Pendientes heredados que la agrupación no resuelve: la formulación contiene valores mensuales derivados de una proyección; azúcar, sal y levadura presentan balances netos; siguen pendientes la trazabilidad de sus fechas e instrumento y la aprobación académica del problema. Se mantienen los datos y la formulación existentes.

## 01B — Objetivos específicos propuestos

1. Determinar los requerimientos funcionales y técnicos del prototipo, incluidas las tolerancias de dosificación de harina, azúcar, sal y levadura en polvo, a partir del procedimiento manual registrado en la Panadería San Miguel y de fuentes técnicas y normativas.
2. Diseñar los subsistemas mecánico y de medición gravimétrica del prototipo mediante el dimensionamiento, la selección de componentes y la elaboración del modelo CAD y los planos, conforme a los requerimientos y tolerancias establecidos.
3. Diseñar el subsistema de control mediante el modelamiento matemático y la simulación del comportamiento dinámico de la alimentación y el pesaje.
4. Implementar el prototipo mediante la integración de los subsistemas mecánico, de medición gravimétrica y de control.
5. Evaluar el prototipo mediante pruebas de funcionamiento respecto de los requerimientos y tolerancias establecidos, y mediante la comparación con el procedimiento manual en tiempo de dosificación, intervención del operario, diferencia respecto de la cantidad objetivo y repetibilidad, bajo condiciones comparables.
6. Determinar el costo de fabricación del prototipo mediante un desglose documentado de materiales, componentes y procesos de fabricación y montaje, y evaluarlo respecto del retorno de la inversión.

Los objetivos 2 a 6 corresponden a los actuales 3 a 7. El primero agrupa los actuales 1 y 2. El borrador explicita el dimensionamiento, la selección, el CAD y los planos en el objetivo de diseño; también incorpora la simulación que figura en el cronograma de control. Estas precisiones permanecen sujetas a revisión docente. En el primer objetivo, el procedimiento manual sustenta los requerimientos; las fuentes técnicas y normativas sustentan las tolerancias.

| Numeración vigente | Borrador | Evidencia de cumplimiento prevista |
|---|---|---|
| 1 y 2 | 1 | Requerimientos trazables al procedimiento y estudio documentado de tolerancias por ingrediente. |
| 3 | 2 | Cálculos, selección y diseño de los subsistemas mecánico y de medición. |
| 4 | 3 | Modelo y diseño del control. |
| 5 | 4 | Prototipo integrado. |
| 6 | 5 | Pruebas y comparación experimental. |
| 7 | 6 | Desglose del costo de fabricación y evaluación económica. |

La secuencia mantiene especificación → diseño → implementación → evaluación. El costo de fabricación utiliza el desglose del prototipo implementado; el retorno depende de los resultados y supuestos económicos documentados. Seis objetivos coinciden con el rango orientativo de tres a seis de la plantilla; esto no constituye aprobación docente.

Actividades del primer objetivo: caracterizar las necesidades a partir del procedimiento registrado; formular y justificar los requerimientos; analizar los criterios técnicos y normativos de dosificación; proponer límites de aceptación por ingrediente; documentar su relación con el diseño. No se fijan valores numéricos nuevos.

## Revisión específica del OE1

La formulación anterior unía «requerimientos» y «tolerancias» mediante una conjunción. El ajuste presenta las tolerancias como parte de los requerimientos técnicos y concentra el objetivo en un resultado: la especificación fundamentada del prototipo. Las tareas de relevamiento, análisis de fuentes y elaboración de tablas desarrollan ese resultado; no constituyen objetivos separados.

| Criterio SMART | Revisión del OE1 |
|---|---|
| Específico | Identifica el prototipo, los requerimientos funcionales y técnicos y las tolerancias de los cuatro ingredientes del caso de San Miguel. |
| Medible o verificable | El resultado se comprueba mediante una especificación con requerimientos identificados, fundamento y criterio de comprobación, junto con límites de aceptación expresados en valores y unidades para cada ingrediente o consigna, según corresponda. El documento de especificación es el entregable del objetivo. |
| Alcanzable | El procedimiento registrado y las fuentes revisadas constituyen la base disponible. La viabilidad del cierre depende de completar las condiciones de operación pendientes y justificar los límites; no se da por alcanzado el objetivo con las tablas preliminares actuales. |
| Relevante | La especificación orienta el diseño y la evaluación de tiempo, intervención del operario y diferencias de dosificación. No exige demostrar en esta etapa una reducción del tiempo ni una mejora experimental. |
| Temporal | Las actividades actuales de requerimientos terminan el 09/11/2026 y las de tolerancias el 14/11/2026. El cierre integrado del OE1 corresponde al 14/11 en esa planificación, sujeto a revisión docente. La entrega del enunciado unificado el lunes no acredita el cierre técnico del objetivo. |

La procedencia se distingue en el desarrollo: las condiciones del procedimiento manual sustentan las necesidades operativas; las fuentes técnicas y normativas respaldan los criterios de medición y la justificación de las tolerancias. Una desviación observada en el proceso manual no constituye un límite admisible. Una norma de instrumentos de pesaje tampoco establece por sí sola la tolerancia de una receta de panificación.

El cierre del OE1 requiere: requerimientos trazables a necesidades y fuentes; condiciones técnicas que sustenten el diseño; tolerancias fundamentadas para los cuatro ingredientes; y criterios de comprobación identificados. Los parámetros abiertos de D-009/A-004 permanecen pendientes hasta disponer de ese sustento. La versión de requerimientos en `propuesta.tex` es una propuesta inicial, no evidencia de cumplimiento completo del OE1.

El avance de diseño solicitado para el 13/11 precede al cierre previsto de tolerancias el 14/11. Ese avance requiere identificar como provisionales las decisiones dependientes de tolerancias; no corresponde presentar como definitivo el dimensionamiento afectado hasta cerrar la especificación. Resolver esta dependencia con el docente forma parte de la revisión del cronograma.

## Correspondencia con el cronograma y revisión SMART

La correspondencia siguiente utiliza el cronograma de actividades vigente al 06/11/2026. Las fechas son estimaciones de planificación; no acreditan aprobación docente ni cumplimiento de resultados. La tabla del cronograma y el Gantt ya aplican seis objetivos; el mapa anterior conserva la equivalencia con la numeración previa.

| Objetivo del borrador | Entregable verificable | Período actual de las actividades asociadas | Condición o desajuste |
|---|---|---|---|
| 1. Requerimientos y tolerancias | Requerimientos justificados y límites de aceptación fundamentados por ingrediente. | 27/10–14/11/2026, unión de los objetivos vigentes 1 y 2. | Unificar enunciados para el lunes no equivale a concluir el estudio de tolerancias. El modelo normativo y los límites finales permanecen abiertos. |
| 2. Diseño mecánico y de medición | Dimensionamiento, selección, modelo CAD y planos vinculados con los requerimientos. | Actividades agrupadas del 14/10/2026 al 29/01/2027. CAD preliminar hasta el 18/11/2026; detalle del 15 al 24/12/2026 y del 08 al 29/01/2027. | El período del grupo incluye redacción teórica. El diseño definitivo depende de requerimientos y tolerancias; el trabajo anterior a su cierre tiene carácter preliminar. |
| 3. Control | Modelo dinámico y diseño del control sustentado mediante simulación. | 15/12/2026–26/02/2027; simulación hasta el 19/02 y redacción hasta el 26/02. | La estrategia, el controlador y el método de modelamiento siguen abiertos. |
| 4. Implementación | Prototipo integrado y puesta a punto documentada. | 16/12/2026–14/03/2027; integración hasta el 07/03 y redacción hasta el 14/03. | La fabricación comienza el 18/01, con compras y CAD de detalle en curso. La actividad conjunta de electrónica y firmware termina el 21/02, dos días tras el cierre previsto de simulación. La viabilidad exige revisar esas dependencias. |
| 5. Evaluación | Registros de pruebas y comparación de tiempo, intervención, diferencia y repetibilidad. | 15/02–14/04/2027; protocolo en febrero, ensayos del 08/03 al 04/04 y análisis del 05 al 14/04. | El protocolo se prepara con los límites definidos; los ensayos requieren el prototipo integrado. Número de repeticiones e instrumentos por definir en el protocolo. |
| 6. Costo de fabricación y retorno | Desglose documentado y evaluación económica con datos y supuestos identificados. | 22/03–09/04/2027. | El cálculo del retorno termina antes del cierre del análisis experimental del 14/04. Los beneficios que dependan de ese análisis requieren comprobación antes de cerrar la evaluación económica. |

### Diseño preliminar frente a cumplimiento del objetivo de diseño

El objetivo de diseño corresponde al resultado completo del proyecto: dimensionamiento, selección, CAD y planos. El CAD preliminar del perfil es un hito de avance dentro de ese objetivo. Una representación geométrica inicial no demuestra por sí sola que el dimensionamiento y la medición satisfacen los requerimientos.

La observación recibida pide un avance de diseño preliminar para el viernes 13/11/2026; el cronograma reúne dimensionamiento, selección y CAD preliminar hasta el 18/11. Una forma de conciliar ambos es distinguir una revisión de avance el 13/11 de la consolidación preliminar el 18/11. Esta interpretación requiere confirmación docente; no se añade como plazo aprobado. La entrega del perfil del 20/11 no equivale al cierre del diseño de detalle programado para enero. D-014 requiere revisión para aclarar ese nivel de cumplimiento.

### Criterios SMART aplicados al borrador

| Criterio | Aplicación | Estado |
|---|---|---|
| Específico | Cada objetivo identifica un resultado: especificación, diseño, control, prototipo, evaluación o costo. El alcance sigue referido a los cuatro ingredientes. | Definido en el borrador; sujeto a revisión docente. |
| Medible o verificable | El cumplimiento se demuestra con los entregables de la matriz. La evaluación utiliza las cuatro variables vigentes y los límites fundamentados en el primer objetivo. | No requiere inventar porcentajes de mejora. Faltan límites, protocolo e instrumentos para cerrar la comprobación experimental. |
| Alcanzable | Los resultados se contrastan con tiempo, componentes, capacidad de fabricación y disponibilidad para ensayos. | No confirmado: persisten solapamientos de diseño, compra, fabricación y firmware. |
| Relevante | La secuencia conserva tiempo e intervención del operario y diferencias de dosificación como dimensiones del caso de San Miguel. | Coherencia conservada; los beneficios siguen sujetos a evaluación. |
| Temporal | Cada resultado tiene actividades y fechas asociadas en el cronograma. | Parcial: renumeración aplicada; falta resolver los hitos del diseño y confirmar la defensa pública. |

Las fechas se documentan en el cronograma y los hitos, sin recargar cada enunciado académico con una fecha. La plantilla exige objetivos verificables y una planificación por actividades; no establece que la fecha aparezca dentro de cada objetivo. La revisión SMART no convierte las estimaciones del calendario en compromisos confirmados.

## 01C — Justificación y delimitación

La revisión de las secciones Justificación y Delimitación de `marcoref.tex` no encontró menciones explícitas a números de objetivos. No se requieren sustituciones numéricas en esas secciones por esta agrupación.

La justificación tecnológica conserva alimentación, pesaje, control y evaluación de las cuatro variables de desempeño. La social mantiene la intervención del operario como beneficio esperado sujeto a comparación. La económica conserva el costo de fabricación y el retorno de la inversión. Los límites mantienen fuera agua, manteca, otras etapas del proceso y validación en otros establecimientos. Los alcances mantienen harina, azúcar, sal y levadura en polvo y las cuatro preparaciones registradas.

El alcance expresa cantidades de las recetas como intervalo de dosificación; D-009 y A-004 mantienen abierto el rango final. Es una tensión previa que requiere validar la redacción del alcance, sin modificarla mediante esta revisión ni convertir los extremos observados en capacidad continua demostrada.

## Aplicación y validación pendiente

- Validar el primer enunciado y la secuencia completa; conservar abierto A-002.
- D-020 registra la aplicación y actualiza la lectura de D-014 y D-018; aprobación docente pendiente.
- Enunciados incorporados en `marcoref.tex`; cronograma, Gantt y diapositiva de objetivos alineados. El índice tentativo organiza contenidos por etapas y no requiere sustituciones numéricas. Los registros históricos conservan la numeración anterior.
- Confirmar el nivel de diseño preliminar requerido para el viernes 13 y la fecha del plazo indicado como «lunes».
