# Alternativas de diseño para San Miguel

Fecha: 11/11/2026. Análisis de trabajo; no constituye aprobación de componentes, tolerancias ni reducción de alcance. D-015, D-019 y D-020 conservan cuatro ingredientes. El estudiante solicita evaluar harina, azúcar y sal, con levadura manual, y elaborará personalmente el CAD.

**Actualización 12/11/2026:** el estudiante solicita adoptar el desarrollo conceptual de María Julia y Diseño Superior, incluida una casa de calidad. La propuesta incorpora esa herramienta en forma preliminar; la sugerencia de esta nota de usar solo trazabilidad corresponde al análisis previo. Véase [revisión y adaptación](revision_propuesta_maria_julia_2026-11-12.md).

## 1. Qué enseñan las referencias sobre la propuesta

Se revisaron los objetivos, la secuencia de diseño y las secciones de propuesta de los archivos Markdown de la carpeta de referencias de OneDrive. Para los tres PDF se utilizaron las conversiones previas con MarkItDown. Esta revisión textual no acredita una inspección de todas las figuras de esos PDF.

| Referencia y ubicación | Relación entre objetivos y desarrollo | Aplicación a San Miguel y límite |
|---|---|---|
| **SySO**, 1.4.2 y 3.1–3.2 | Identificar RF/RNF → diseñar arquitectura → implementar → verificar tiempo. Entrevistas, requisitos, casos de uso, tecnologías, arquitectura y costos. | Conservar el enlace entre necesidad, función y elección técnica; redactar párrafos que expliquen las tablas. Los casos de uso de software no sustituyen los flujos de material y energía de una máquina. Evitar sus frases genéricas y repeticiones de filas. |
| **Panales**, 1.3 y 3.1–3.3 | Contextualización y requisitos, componentes mecánicos, fuerzas y CAD; requerimientos → árbol → morfología → descarte → conceptos A/B → cálculos. | Separar generación de opciones, compatibilidad y selección. No trasladar porcentajes, puntuaciones ni afirmaciones económicas sin cotizaciones. La transcripción tiene una discrepancia de carga de 40/60 kg: no es un dato trasladable. |
| **Proyecto1_DS**, 1.2.2 y 5–6 | Principios → presión/caudal/torque → arquitectura → prototipo → verificación. Árbol, caja negra, funciones, requisitos, QFD, morfología, conceptos y comparación. | Usar la cadena función → solución → conjunto compatible. No incluir todas sus herramientas solo por imitación ni tratar una puntuación de diseño como desempeño probado. |
| **Urriolagoitia**, 1.3, 3 y 4.4 | Contextualizar → requerimientos → modelo de control → verificación por simulación. Requisitos, árbol, funciones, QFD y conceptos preceden al modelamiento y selección. | Conectar parámetros del proceso con criterios de descarte. Su objetivo central es un modelo de torque; no acredita que San Miguel requiera el mismo nivel de simulación en Taller I. |
| **María Julia**, 1.3.2 y 3.1–3.10 | Necesidad física → dimensionamiento → cinemática → electrónica → comparación comercial/actuadores → CAD. Incluye árbol, caja negra, QFD, morfología, bosquejo y cálculos. | Elegir motores por demanda mecánica y dimensiones; comprobar montaje e interferencias. No copiar actuadores, materiales de contacto corporal ni articulaciones. |
| **Adriana**, 1.3.2 y 3.1–3.7 | Dimensionamiento, esquema eléctrico, CAD e interfaz. Caja negra, funciones, requisitos, QFD, combinaciones, evaluación, bosquejo, cálculo/selección y costo. | Es útil para ligar la lista de componentes al presupuesto. Su «CAD» es un P&ID; no sustituye el conjunto mecánico que San Miguel necesita. |

Archivos consultados en `C:/Users/Soam/OneDrive - UCB/universidad_catolica/2026-1-2/Stuffs/Desktop/`: `Proyecto1_DS.md`, `02_Referencia_Syso_Para_PGGST - Copy.md`, `03_Referencia_Maquina_Transporte_Panales - Copy.md`, `DS2T_Urriolagoitia.md`, `Presentacion Final - Maria Julia.md` y `Documento_Adriana.md`.

### Defensas consultadas con NotebookLM

[Cuaderno de las tres transcripciones](https://notebook.google.com/notebook/6b0166c2-f05f-4cf3-a249-2e21debd5333), consulta del 11/11/2026. Originales: `G:/Downloads/GrabacionesTG12025/audio1734489782.txt`, `audio2734489782.txt` y `audio3734489782.txt`.

- **Visión artificial:** se presentaron selección de tecnologías, matriz, CAD preliminar y presupuesto. La discusión cuestiona el salto entre detección, rotación y respuesta física. Para San Miguel: cerrar la cadena medir → cortar → entregar, incluyendo material residual. La exposición no acredita una caja negra formal.
- **Órtesis activa:** comparación directa de componentes y montaje en CAD; observaciones sobre sustento matemático y actividades omitidas en el cronograma. Para San Miguel: incluir motor, adquisición del peso, alimentación eléctrica y montaje en la preselección. La transcripción no demuestra que se haya presentado matriz morfológica o casa de calidad.
- **Cilindros hidráulicos:** requisitos → descomposición funcional → morfología → conceptos → comparación → CAD preliminar → presupuesto. Las observaciones exigen coherencia entre requisitos, dimensiones, cargas y alcance. Es el enlace metodológico más próximo a la propuesta mecánica de San Miguel.

La respuesta de NotebookLM aporta localización, no autoridad normativa. Sus sugerencias de materiales y prioridades no se adoptan sin evidencia específica. Tampoco se adopta como regla la exclusión de licencias: el perfil distingue adquisición, acceso institucional documentado y costo de fabricación. Las críticas de otras defensas no se incorporan a PROFESSOR_NOTES como instrucciones directas a este proyecto.

## 2. Casa de calidad y secuencia necesaria

No se encontró exigencia explícita de QFD en la plantilla o las notas docentes consultadas. Se propone usar la tabla requisito → decisión → comprobación que se añadió al capítulo 3. Una casa de calidad tendría valor si se obtienen prioridades del cliente, métricas y conflictos técnicos que cambien una decisión. Rellenarla con pesos supuestos no resuelve las tolerancias pendientes.

Secuencia aplicada: RF/RNF → tolerancias → árbol del producto → caja negra → bloques funcionales → matriz morfológica → conceptos compatibles y criterios → predimensionamiento → preselección → CAD del estudiante → presupuesto actualizado. El presupuesto empieza con cantidades conceptuales y se corrige con geometrías y cotizaciones.

Se añadió un fundamento breve sobre herramientas de diseño conceptual en 2.3, apoyado en Cross; no se atribuye al proyecto la aplicación íntegra de una metodología o de QFD.

## 3. Referencia para las tolerancias

Fuente: tablas A.2 y 9 de [levantamiento](levantamiento_dosificacion_san_miguel.md). Siete ciclos por ingrediente; no son series suficientes para caracterizar cada receta por separado.

Se calculó `e = lectura − consigna`; media con signo `sum(e)/7`; media absoluta `sum(abs(e))/7`; máximo absoluto `max(abs(e))`.

| Ingrediente | Diferencias individuales (g) | Media con signo (g) | Media absoluta (g) | Máximo absoluto (g) |
|---|---|---:|---:|---:|
| Harina | +20, +18, +16, +13, +11, +38, +27 | +20,43 | 20,43 | 38 |
| Azúcar | +14, +6, −6, −7, +3, +21, −6 | +3,57 | 9,00 | 21 |
| Sal | +8, −7, +8, −3, +4, +9, −5 | +2,00 | 6,29 | 9 |
| Levadura | +3, −2, +2, +1, −2, +3, +2 | +1,00 | 2,14 | 3 |

**Propuesta para explorar, no requisito aprobado:** azúcar ±3 g; sal ±2 g; levadura ±1 g. Son bandas de estudio inferiores a las medias absolutas observadas, elegidas como objetivos de ingeniería para evaluar viabilidad. No provienen de una ecuación que convierta el error manual en tolerancia alimentaria. La aceptación por receta exige criterio de la propietaria y verificación; no se demuestra ausencia de efecto sobre el pan con estos registros.

SF-400: el estudiante informó `10000gX1g/353ozX0.1oz`. Capacidad indicada 10 kg, división 1 g. No confundirla con exactitud de ±1 g ni con incertidumbre conocida. Para verificar ±1 g de levadura hace falta una referencia mejor caracterizada; mostrar décimas sería útil, pero tampoco basta por sí solo. La banda de harina ±30 g sigue D-022. Una máquina que entrega siempre +29 g cumple esa banda y puede superar la media absoluta manual de 20,43 g: cumplimiento y mejora son evaluaciones distintas.

### Evidencia de 20 g

[Humaira et al. (2024), tabla 6, p. 93](https://jurnal.polinema.ac.id/index.php/elkolind/article/download/3298/3482) incluye una receta personalizada de 20 g de cada uno de tres ingredientes: harina, azúcar y leche en polvo. La fila reporta 20 g y 0 % en esa prueba. No prueba error nulo general, repetibilidad a esa consigna, capacidad para 8 kg ni desempeño con levadura. El promedio de error de una tabla no es un error máximo garantizado.

## 4. Configuración que conviene estudiar primero

**Recomendación de trabajo:** estudiar tolvas independientes, tornillos horizontales desmontables y dos escalas de pesaje: harina en el balde; ingredientes menores en un recipiente auxiliar descargable al balde. Es una hipótesis para comparar, no una selección definitiva ni una garantía de precisión.

| Opción | Ventaja que motiva estudiarla | Costo o limitación por comprobar |
|---|---|---|
| Cuatro tornillos, balanza común | Un solo receptor; evita transferencia auxiliar. Conserva alcance. | Discriminar incrementos pequeños con tara y carga acumulada; vibración y material en caída. |
| Cuatro tornillos, pesaje separado | Separa la capacidad de harina de la de menores; conserva los cuatro ingredientes. | Segundo pesaje, actuador de vaciado, retención y limpieza. La levadura sigue exigiendo comprobación. |
| Tres tornillos, pesaje separado | Retira el canal de 20–30 g y un alimentador completo. | Levadura manual, cambio de alcance y permanencia de su tiempo y diferencia. Dos pesajes y vaciado siguen presentes. |
| Tres tornillos, balanza común | Menor número conceptual de conjuntos. | Sigue necesitando comprobar ±2 g de sal y ±3 g de azúcar; no queda viable solo por eliminar levadura. |

En la muestra, la levadura ocupó 43,3 s de los 566,2 s de las cuatro operaciones (7,65 %). Harina, azúcar y sal acumularon 522,9 s (92,35 %). Esto expresa participación en el tiempo registrado, **no ahorro esperado**. Excluir levadura exige revisar objetivos, diagnóstico proyectado, RF/RNF, pruebas y presupuesto sin borrar su registro histórico. No se aplicó esa reducción.

Otra variante para la balanza común es dosificar menores antes que harina. Reduce la carga previa, pero no aumenta la resolución intrínseca ni elimina la carga física al tarar. Su utilidad requiere ensayos. Si los menores se pesan juntos en recipiente auxiliar, el cálculo usa diferencias entre lecturas estables de ingredientes sucesivos; cada incremento hereda efectos de ambas lecturas.

## 5. Tornillos, motores y materiales

- **Horizontal:** primera distribución propuesta para estudiar acceso lateral, extracción y desacoplamiento del motor. Exige espacio de planta y trazado corto hacia el receptor. **Vertical descendente:** alternativa sobre el receptor, sujeta a altura de recarga, extracción del eje y descarga residual. No confundirlo con elevación vertical; las penalizaciones de transporte ascendente no justifican descartarlo. [KWS, guía de alimentadores](https://www.kwsmfg.com/engineering-guides/screw-conveyor/types-of-screw-feeders/).
- **Harina:** comparar paso a paso con reducción y motorreductor CC con encoder. **Menores:** comenzar la comparación con paso a paso y controlador de corriente, conservando motorreductor como alternativa. No seleccionar NEMA 17/23 por intuición: tamaño de brida no demuestra par útil. Usar par de arranque bajo tolva cargada, velocidad, curva del motor, corriente y régimen de trabajo. [Oriental Motor](https://www.orientalmotor.com.sg/sg/products/stepping-motors/spec-guide).
- **Contacto alimentario:** AISI 304 como candidato y AISI 316 para contrastar exposición a sal húmeda y agentes de limpieza. El acabado y las juntas también importan; no declarar aptitud solo por el nombre del acero. Separar estructura externa y piezas de contacto. [BSSA](https://bssa.org.uk/bssa_articles/stainless-steels-for-the-food-processing-industries/).
- **Medición:** elegir capacidad con recipiente, soportes y carga; no tomar los bits del convertidor como exactitud del conjunto. [NI, exactitud del sistema](https://www.ni.com/en/support/documentation/supplemental/18/calculating-absolute-accuracy-or-system-accuracy.html).

## 6. Datos que desbloquean la selección y el CAD

1. Decisión de tres o cuatro ingredientes y consulta de bandas admisibles por receta.
2. Medidas y tara del balde; espacio y altura de recarga; energía disponible.
3. Cantidad por recarga, presentación comercial y densidad aparente de los ingredientes reales.
4. Dos alternativas comerciales de tornillo por escala, con material, diámetro, paso, longitud, conexiones y condiciones de caudal/par; verificar disponibilidad y precio.
5. Curvas de motor y ficha de pesaje acordes a la demanda; comprobación de incrementos bajo carga. Definir la referencia de verificación.
6. CAD realizado por el estudiante con envolventes reales y acceso de desmontaje. No usar motores o celdas de dimensiones arbitrarias como selección cerrada.
7. Cotizaciones y desglose en bolivianos: alimentadores, pesaje, electrónica, estructura, fabricación, montaje, pruebas, traslados y licencias/acceso institucional. No hay costo total sustentado en esta revisión.

No se elaboró CAD, no se compraron componentes y no se declararon resultados del prototipo.
