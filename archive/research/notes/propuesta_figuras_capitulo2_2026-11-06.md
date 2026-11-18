# Figuras del capítulo 2: inventario y propuesta de ubicación

**Fecha:** 06/11/2026. **Estado:** propuesta aplicada por autorización del estudiante (D-021). El inventario siguiente conserva las ubicaciones anteriores como registro de la revisión; los labels se mantienen salvo la figura comercial archivada. La numeración final del PDF requiere compilación.

## Base y criterio

Se revisaron AGENTS.md, PROJECT_CONTEXT.md, DECISIONS.md (D-019, D-020 y A-004), STATUS.md, PROFESSOR_NOTES.md, THESIS_STRUCTURE.md, redacción.md, la plantilla institucional y los bloques de figuras y sus párrafos en `docs/thesis/chapters/marcoteorico.tex`.

La aclaración docente aportada por el estudiante distingue 2.1 Estado del Arte narrativo sin figuras, 2.2 Enfoques con análisis técnico y figuras, y 2.3 Fundamentos con principios y ecuaciones aplicables. Esto coincide con los encabezados de la plantilla. La organización activa de THESIS_STRUCTURE.md conserva la estructura adoptada en octubre, con áreas en 2.2 a 2.5 y fundamentos en 2.6; su interpretación de los enfoques como secciones principales consecutivas requiere revisión. No se adopta la nueva jerarquía mediante este inventario.

La revisión clasifica por la función del contenido: una síntesis de resultados y aportes pertenece a 2.1; la comparación de alternativas y el argumento de adopción o descarte, a Enfoques; un principio general, una geometría de cálculo o una cadena de medición, a Fundamentos. La presencia de una cita no convierte por sí sola una figura teórica en un enfoque.

## Hallazgo estructural

Hay 20 entornos `figure` activos: ninguno en 2.1, ocho en 2.2, tres en 2.3, cuatro en 2.4, dos en 2.5 y tres en 2.6. La figura comercial contiene dos fotografías, pero constituye un solo entorno numerado.

El 2.1 actual, líneas 11–31, solo explica la organización del capítulo. No presenta la revisión narrativa requerida. Los antecedentes y sus resultados se desarrollan en 2.2 y las áreas de 2.3 a 2.5. Mover figuras sin reconstruir esa narración no completa 2.1.

## Jerarquía propuesta para revisar

```text
2.1 Estado del Arte
    Síntesis narrativa por temas: qué se hizo, resultado, aporte y límite.
    Perspectiva académica y de mercado conforme a la plantilla.
2.2 Enfoques
    2.2.1 Arquitecturas de dosificación y soluciones integrales
    2.2.2 Almacenamiento y alimentación de ingredientes secos
    2.2.3 Medición gravimétrica y electrónica
    2.2.4 Corte y control de la dosificación
2.3 Fundamentos teóricos
    Conservar las siete áreas teóricas vigentes, sin introducir teoría nueva.
```

La jerarquía conserva las áreas solicitadas por el docente y el desarrollo técnico existente. Un mismo trabajo puede aportar una síntesis en 2.1 y un análisis específico en 2.2; no corresponde reproducir el mismo párrafo ni repetir todos sus resultados en ambos apartados. Las cuatro subsecciones propuestas superan el mínimo de dos enfoques de la plantilla. No se fijan aún títulos finales ni se renumera el índice tentativo.

## Inventario completo

Todos los elementos se encuentran en `docs/thesis/chapters/marcoteorico.tex`. Los destinos son los de la jerarquía propuesta, no los números actuales.

| Línea y label | Figura y fuente declarada | Apartado actual | Destino propuesto y argumento | Validación pendiente |
|---|---|---|---|---|
| 46 — `fig:arquitectura_funcional` | Arquitectura de dosificación por lotes; síntesis propia de antecedentes. | 2.2 Dosificadoras. | 2.2.1 Arquitecturas: introduce la relación entre material, pesaje y control para comparar soluciones. | Presentarla como arquitectura de referencia de la literatura, sin cerrar la configuración del prototipo. |
| 76 — `fig:budijono_llenadora` | Tornillo y agitador; Budijono (2021). | 2.2.1 Harina industrial. | 2.2.2 Almacenamiento y alimentación: explica el barrido de pared y la modificación del tornillo. | Mantener con el párrafo técnico que fundamenta su interés; no repetir la ficha completa del antecedente. |
| 156 — `fig:configuraciones_balanza` | Balanza común frente a balanza por insumo; Farihin (2021), Humaira (2024). | 2.2.3 Insumos en gramos. | 2.2.3 Medición: compara dos configuraciones de pesaje relevantes para los cuatro ingredientes. | La elección sigue abierta en A-004; el gráfico no acredita superioridad experimental entre ambas. |
| 181 — `fig:laime_tolvas` | Pesaje independiente y recolección común; Laime (2022). | 2.2.3 Insumos en gramos. | 2.2.3 Medición: caso concreto que explica la descarga común con pesaje independiente. | Conservar la distinción entre prueba de calibración y desempeño de dosificación; no adoptar la solución por la imagen. |
| 201 — `fig:humaira_dosificadora` | Tres cámaras y alimentadores helicoidales; Humaira (2024). | 2.2.4 Panadería pequeña. | 2.2.1 Arquitecturas: muestra integración de varios ingredientes y escalas menores. | Justificar qué aporta la fotografía frente al esquema de configuraciones; considerar recorte si ambos repiten información. |
| 221 — `fig:rumapea_lazo` | Lazo con alimentación gruesa y fina; Rumapea (2026). | 2.2.4 Panadería pequeña. | 2.2.4 Corte y control: ilustra la realimentación y el cambio de etapa. | Identificar el uso de compuerta como antecedente y no como selección de San Miguel; D-019 mantiene tornillos. |
| 241 — `fig:afni_dosificador` | Tolva, tornillo y plataforma de pesaje; Afni (2026). | 2.2.4 Panadería pequeña. | 2.2.1 Arquitecturas: permite analizar un equipo completo para pequeña panadería. | Mantener explícito el insumo estudiado, harina de arroz, y la diferencia de escala; no trasladar resultados al prototipo. |
| 282 — `fig:productos_comerciales` | Fotografías DF-B e IF-A; Indurpack. | 2.2.5 Productos comerciales. | 2.2.1 Arquitecturas, **condicionada**: conservar solo si el texto compara una disposición técnica visible y relevante. | Si solo identifica el producto, bastaría la narración del mercado y no se justifica trasladar la figura. Sigue pendiente la diversidad de proveedores exigida por la plantilla. |
| 452 — `fig:su_boveda` | Bóveda de harina observada en tolva; Su (2017). | 2.3 Mecánica. | 2.2.2 Almacenamiento: evidencia una limitación que afecta la elección de tolva y extracción. | Fuente anterior al período narrativo reciente; confirmar la excepción o su uso técnico. No confundir fotografía experimental con resultado de San Miguel. |
| 476 — `fig:alimentadores` | Tornillo, vibratorio y compuerta; síntesis de Budijono, Orozco y Rumapea. | 2.3 Mecánica. | 2.2.2 Alimentación: sirve a la comparación y al argumento de adopción o descarte. | Vincular con las limitaciones por ingrediente y D-019, sin reabrir por defecto la decisión vigente. |
| 493 — `fig:xu_zonas_muertas` | Flujo y zona muerta del tornillo; Xu (2021). | 2.3 Mecánica. | 2.2.2 Alimentación: muestra la limitación que motiva comparar geometrías de tornillo. | Separar el análisis del antecedente de la selección comercial aún pendiente. |
| 590 — `fig:principios_medicion` | Volumétrico, lotes y pérdida de peso; Blackshields (2018), Chiliguana (2016). | 2.4 Medición. | 2.2.3 Medición: comparación de alternativas que respalda D-005. | Conservar las diferencias funcionales y el argumento de selección; si se limita a definir principios, reevaluar su ubicación en Fundamentos. |
| 610 — `fig:densidad_esfuerzo` | Curvas de densidad relativa de cuatro polvos; Lanzerstorfer (2020). | 2.4 Medición. | 2.2.3 Medición: el resultado comparativo fundamenta la limitación del dosificado volumétrico. | No extenderlo a la levadura ni confundir azúcar impalpable con el insumo real. Fuente anterior al período reciente; confirmar su uso técnico. |
| 639 — `fig:respuesta_celda` | Respuesta típica al impacto; síntesis propia basada en Richiedei (2018) y Wang (2025). | 2.4 Medición. | **Fundamentos, medición gravimétrica:** explica pico, oscilación y asentamiento de una señal. Es un esquema conceptual, no una comparación de filtros. | Verificar que el gráfico se identifique como ilustrativo; dejar en Enfoques los resultados comparativos de las estrategias de tratamiento de señal. |
| 666 — `fig:arquitectura_electronica` | Celda, convertidor y controlador en antecedentes; David, Afni, Orozco y Humaira. | 2.4 Medición y electrónica. | 2.2.3 Medición y electrónica: sintetiza componentes usados y permite contrastar alternativas de integración. | No convertir el HX711 ni el microcontrolador del esquema en selección definitiva del prototipo. |
| 745 — `fig:secuencia_llenado` | Grueso, fino y adelanto; Hidalgo (2020), Hadi (2025), Bulatov (2021). | 2.5 Control. | 2.2.4 Corte: muestra la diferencia entre estrategias de alimentación y corte. | Mantener explicación comparativa; una definición general de las etapas corresponde a Fundamentos. Confirmar uso de la fuente de 2020. |
| 776 — `fig:columna_caida` | Geometría de material en vuelo; Bukreev (2014). | 2.5 Control. | **Fundamentos, material en caída:** acompaña el modelo y la ecuación geométrica que ya figuran en el apartado teórico. | Conservarla si ese modelo se aplica al diseño; el método final de modelamiento y control sigue abierto. No trasladarla a Enfoques solo por proceder de un paper. |
| 1042 — `fig:patrones_tolva` | Flujo másico, embudo y cuña; Su, Mehos y Morgan, Bates. | 2.6 Fundamentos: tolva. | Mantener en Fundamentos: explica patrones y geometría de diseño. | Sin cambio de función; conservar fuentes y vínculo con el dimensionamiento. |
| 1092 — `fig:tornillo_geometria` | Geometría del tornillo bajo tolva; Bates, Karwat. | 2.6 Fundamentos: tornillo. | Mantener en Fundamentos: variables empleadas para caudal y selección. | Vincular con la selección comercial de D-019; no inferir fabricación propia del eje. |
| 1233 — `fig:cadena_medicion` | Cadena de medición de celda comercial; Fraden. | 2.6 Fundamentos: medición. | Mantener en Fundamentos: explica conversión de señal y lectura de peso. | Distinguir el principio general del esquema de electrónica comparada en Enfoques. |

**Balance propuesto:** 15 figuras para Enfoques, incluida una comercial condicionada; cinco para Fundamentos. Si la comercial no aporta análisis técnico, quedarían 14 y cinco, con su fotografía fuera del cuerpo principal. Ninguna se propone para 2.1. No se autoriza una eliminación mediante este recuento.

## Texto y tablas vinculados

| Ubicación actual | Hallazgo | Tratamiento propuesto | Fundamento y pendiente |
|---|---|---|---|
| 2.1, «La revisión avanza desde las máquinas completas…» | Párrafo de organización; no desarrolla todavía la revisión narrativa. | Conservar una introducción breve y construir la narración con la síntesis de las fuentes vigentes de 2.2–2.5. | Por trabajo: resultado y aporte al caso, con transiciones temáticas. Confirmar selección temporal antes de redactar. |
| 2.2, descripciones de máquinas y figuras asociadas | Mezcla síntesis del antecedente con detalles de arquitectura y control. | Síntesis en 2.1; detalle que fundamenta una comparación en el área correspondiente de 2.2. | El traslado incluye párrafo introductorio, análisis y remisiones; no solo el entorno gráfico. |
| Tablas `tab:dosificadoras_resumen`, `tab:dosificadoras_enfoques`, `tab:mecanica_enfoques`, `tab:medicion_enfoques`, `tab:control_enfoques` | Cumplen funciones de comparación técnica y selección. | Revisar para Enfoques; no incorporar al 2.1 planteado como texto narrativo. | Labels comprobados en el fuente; preservar métricas, unidades y condiciones al reorganizar. |
| Fundamentos actuales 2.6 | Contienen principios, cálculos y figuras teóricas. | Conservar su contenido y proponer la renumeración a 2.3 tras confirmar la jerarquía. | No aplicar por defecto el límite de cinco años a libros y documentos fundamentales. |

## Confirmaciones necesarias antes de editar el capítulo

1. Adoptar o ajustar la jerarquía 2.1 narrativo, 2.2 Enfoques por áreas y 2.3 Fundamentos, en lugar de la estructura activa de octubre.
2. Confirmar la ubicación de respuesta de la celda y columna en caída en Fundamentos, atendiendo a su función conceptual.
3. Resolver el uso técnico de fuentes anteriores a cinco años y mantener diferenciada la revisión reciente de las bases teóricas. No se descartan automáticamente figuras por su año.
4. Decidir si las fotografías comerciales aportan comparación técnica; confirmar además la diversidad de proveedores y la admisión de fichas de fabricantes, asuntos ya pendientes.

## Verificación y siguiente paso

El recuento se contrastó con los 20 entornos de figura del fuente. No se auditaron de nuevo los resultados de los papers ni se inspeccionó el diseño visual de cada imagen: esta revisión determina ubicación y función con el texto y las atribuciones existentes. No fue necesario consultar NotebookLM para localizar las figuras; sí sería útil en la futura redacción narrativa para contrastar las afirmaciones seleccionadas con las fuentes originales.

Tras confirmar el límite entre apartados: preparar la narración de 2.1; reorganizar el análisis técnico y sus figuras como bloques completos; preservar los labels, actualizar remisiones y orden del índice; comprobar las citas y compilar. No modificar datos ni completar selecciones técnicas abiertas para acomodar la narración.

## Resultado de aplicación — 06/11/2026

**Actualización posterior:** por instrucción expresa del estudiante se reincorpora la figura DF-B/IF-A en Productos comerciales. El recuento vigente es 20 figuras activas: 15 en Enfoques y cinco en Fundamentos. La reserva conserva el bloque como archivo histórico; la retirada descrita a continuación corresponde al paso anterior.

Se aplican 2.1 Estado del Arte, 2.2 Enfoques con cuatro áreas y 2.3 Fundamentos. La síntesis narrativa contiene 27 claves bibliográficas de 2021–2026; no incluye figuras ni tablas. Se conservan todas las claves citadas antes de la reorganización. La diversidad de proveedores y la admisión de fichas y fuentes técnicas antiguas siguen pendientes; el recuento de 27 referencias narrativas no acredita por sí solo el mínimo institucional de 30 referencias de la revisión.

Se mantienen 19 figuras activas: 14 en Enfoques y cinco en Fundamentos. La respuesta de la celda se integra en filtrado y la columna en caída acompaña la ecuación correspondiente. La propuesta inicial dejaba las fotografías comerciales en reserva. La figura DF-B/IF-A se reincorporó al capítulo el 06/11/2026. El índice tentativo se alinea con la nueva jerarquía.

Verificación: claves bibliográficas existentes, labels únicos, referencias cruzadas resueltas y conservación de citas anteriores. La compilación se intentó y MiKTeX la detuvo por configuración inicial incompleta; la maquetación queda pendiente. Esta reorganización no certifica de nuevo las cifras de los papers.
