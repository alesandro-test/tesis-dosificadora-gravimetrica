# Fichas de estudio del capítulo 2

Versión: 12/11/2026. Base: `docs/thesis/main.pdf` (107 páginas) y su fuente activa `chapters/marcoteorico.tex`. Las páginas citadas son las impresas; en este PDF la posición física es una página mayor. Estas fichas explican lo escrito: no sustituyen una auditoría completa de las fuentes originales ni presentan resultados de San Miguel como ya demostrados.

Cuaderno: https://notebook.google.com/notebook/6a274ae0-44b4-4b31-8a6c-fdee56679b68

## Cómo estudiar

Primero leer «Qué citamos» y luego explicar «Para qué sirve» sin mirar. Terminar diciendo el límite de la evidencia. **Estado del arte:** qué hicieron otros y qué aportan. **Enfoques:** comparación de opciones. **Fundamentos:** principios y ecuaciones para diseñar. Citar una opción no significa haberla seleccionado.

## 2.1 Estado del arte — una ficha por referencia

### EA01 · Gebov (2023) — corte según el peso

- **Estudió:** embolsadoras industriales de harina.
- **Citamos:** ajuste del instante de corte a partir de la señal de peso; llenado de 15 a 6 s sin cambiar la mecánica.
- **Sirve:** estudiar cuándo detener el alimentador.
- **No confundir:** 6 s es el resultado de otro equipo; no es nuestro tiempo objetivo ni demuestra nuestro error final.
- **Ubicación:** 2.1, p. 27; detalle en 2.2.1.1. Clave: `gebov2023algorithmic`.

### EA02 · Budijono et al. (2021) — estabilidad del caudal

- **Estudiaron:** un tornillo y agitador para harina.
- **Citamos:** una modificación produjo flujo más constante en simulación, sin cuantificar el error final de dosificación.
- **Sirve:** comparar alimentadores por estabilidad de entrega.
- **No confundir:** caudal estable no garantiza una dosis correcta; simulación no equivale a ensayo del prototipo.
- **Ubicación:** 2.1, p. 27; 2.2.2. Clave: `budijono2021flour`.

### EA03 · Xu et al. (2021) — geometría del tornillo

- **Estudiaron:** geometrías de tornillo para harina.
- **Citamos:** el paso variable redujo la fluctuación del caudal.
- **Sirve:** revisar cómo la geometría distribuye la extracción y comparar tornillos comerciales.
- **No confundir:** no hemos adoptado un paso ni diámetro; reducir fluctuaciones no acredita tolerancia final.
- **Ubicación:** 2.1, p. 27; 2.2.2.2. Clave: `xu2021screw`.

### EA04 · Rivera et al. (2023) — límites de la gravedad

- **Estudiaron:** descarga de harina de trigo.
- **Citamos:** las aberturas calculadas para flujo másico por gravedad alcanzaban dimensiones de silo.
- **Sirve:** examinar si la descarga por gravedad cabe en una tolva de panadería.
- **No confundir:** no demuestra que toda tolva por gravedad falle ni fija nuestra abertura.
- **Ubicación:** 2.1, p. 27; 2.2.2.1. Clave: `rivera2023flour`.

### EA05 · Bulatov et al. (2021a) — descarga y bóvedas

- **Estudiaron:** dosificación por tornillo y material que sigue cayendo tras el corte.
- **Citamos:** formación de bóvedas con virutas.
- **Sirve:** incluir la continuidad de descarga entre las comprobaciones del alimentador.
- **No confundir:** las virutas no son harina de trigo; este trabajo es distinto del ensayo con sal de 2021b.
- **Ubicación:** 2.1, pp. 27–28; 2.2.4 y 2.3.7. Clave: `bulatov2021dosing`.

### EA06 · Bulatov et al. (2021b) — sal en kilogramos

- **Estudiaron:** dosificación con tornillo y compensación del material en caída.
- **Citamos:** errores de 6,5–7,3 % con sal en lotes de 1 kg.
- **Sirve:** disponer de evidencia para sal y estudiar el adelanto del corte.
- **No confundir:** nuestras recetas usan cantidades menores; ese porcentaje no es una tolerancia aceptada para San Miguel.
- **Ubicación:** 2.1, pp. 27–28; 2.2.4. Clave: `bulatov2021weighing`.

### EA07 · Hadi et al. (2025) — adelanto del corte

- **Estudiaron:** pesaje de arroz entre 1 y 20 kg.
- **Citamos:** compensación del material en caída y sobrepaso medio de 0,72 %.
- **Sirve:** estudiar detener antes de alcanzar la cantidad objetivo.
- **No confundir:** sobrepaso medio no es error máximo ni resultado con harina o levadura.
- **Ubicación:** 2.1, p. 28; 2.2.4.1. Clave: `hadi2025weighing`.

### EA08 · Acuña Moncada (2024) — gravimétrico frente a volumétrico

- **Estudió:** dosificación de azúcar en una envasadora.
- **Citamos:** cantidades promedio más próximas al objetivo con dosificación gravimétrica.
- **Sirve:** sustentar la medición por peso para azúcar.
- **No confundir:** demuestra una comparación en aquella instalación, no una mejora ya medida en nuestro prototipo.
- **Ubicación:** 2.1, p. 28; 2.2.1.2 y 2.2.3.2. Clave: `acuna2024gravimetrico`.

### EA09 · Orozco Villa (2024) — desempeño según la consigna

- **Estudió:** una dosificadora de arroz con canal vibratorio y celda de carga.
- **Citamos:** menor exactitud en la consigna menor.
- **Sirve:** evaluar distintas cantidades objetivo, especialmente las bajas.
- **No confundir:** ensayar arroz no valida el mismo mecanismo con harina cohesiva.
- **Ubicación:** 2.1, p. 28; 2.2.1.2; 2.3.3 y 2.3.5. Clave: `orozco2024dosificadora`.

### EA10 · Challco Capajeiqui (2024) — diseño sin ensayo

- **Estudió:** diseño de una dosificadora de pan molido.
- **Citamos:** configuración mecánica y electrónica sin resultados experimentales de dosificación.
- **Sirve:** consultar una arquitectura de diseño.
- **No confundir:** un diseño no acredita desempeño medido ni permite compararlo como resultado experimental con San Miguel.
- **Ubicación:** 2.1, p. 28; 2.2.1.2, 2.2.3 y 2.3.6. Clave: `challco2024dosificadora`.

### EA11 · David et al. (2024) — cada ingrediente se comporta distinto

- **Estudiaron:** dosificación de azúcar, arroz y café mediante tornillo.
- **Citamos:** limitaciones frente a cambios de densidad y humedad.
- **Sirve:** exigir comprobación del alimentador con cada ingrediente.
- **No confundir:** utilizar el mismo tornillo o controlador no garantiza el mismo error con todos los insumos.
- **Ubicación:** 2.1, p. 28; 2.2.1.3, 2.2.2 y 2.2.3. Clave: `david2024granulated`.

### EA12 · Zaenurrohman et al. (2023) — dosis pequeñas

- **Estudiaron:** pimienta en polvo dosificada por tornillo.
- **Citamos:** mayor error relativo a 30 g que a 150 g.
- **Sirve:** justificar ensayos en las consignas pequeñas, como las de levadura.
- **No confundir:** la pimienta es evidencia indirecta; no caracteriza el flujo ni prueba el error de la levadura.
- **Ubicación:** 2.1, p. 28; 2.2.1.3. Clave: `zaenurrohman2023merica`.

### EA13 · Farihin et al. (2021) — pesaje común

- **Estudiaron:** varias tolvas sobre una celda común para una premezcla de pan dulce.
- **Citamos:** errores reportados de 0,2 % con PI en materia prima y 0,8 % con todo o nada en producción.
- **Sirve:** estudiar varios ingredientes con un punto de pesaje.
- **No confundir:** cambiaron las condiciones; esos porcentajes no prueban por sí solos que PI sea superior.
- **Ubicación:** 2.1, p. 28; 2.2.3.1 y 2.2.4.2. Clave: `farihin2021premix`.

### EA14 · Joni et al. (2022) — límite del pesaje de dosis bajas

- **Estudiaron:** harina, azúcar y café con tornillos y pesaje común.
- **Citamos:** diferencias de hasta 9 g en dosis de 10 g.
- **Sirve:** advertir sobre el desempeño en consignas pequeñas.
- **No confundir:** integrar varias tolvas no demuestra capacidad para dosificar levadura dentro de una banda estrecha.
- **Ubicación:** 2.1, pp. 28–29; 2.2.3.1. Clave: `joni2022powder`; archivo identificado como Wahyudi.

### EA15 · Laime Asistiri (2022) — pesaje separado

- **Estudió:** tolvas de pesaje independientes con recolección común para snacks.
- **Citamos:** error de 0,8 g al calibrar con una pesa de 500 g.
- **Sirve:** plantear la alternativa de pesar por separado y reunir después.
- **No confundir:** calibrar con una pesa no equivale a dosificar material con ese error.
- **Ubicación:** 2.1, p. 29; 2.2.3.1. Clave: `laime2022dosificacion`.

### EA16 · Sánchez Villacis (2024) — pesaje por grupos

- **Estudió:** dosificación en una planta de alimento balanceado.
- **Citamos:** balanzas por grupos y llenado en paralelo, sin cuantificar la reducción del tiempo.
- **Sirve:** estudiar agrupación de ingredientes y organización del ciclo.
- **No confundir:** el paralelismo no demuestra un ahorro temporal transferible a San Miguel.
- **Ubicación:** 2.1, p. 29; 2.2.3.1, 2.2.4.2 y 2.3.7. Clave: `sanchez2024tolvas`.

### EA17 · Humaira et al. (2024) — tiempo y error juntos

- **Estudiaron:** cámaras independientes, helicoides y PID para ingredientes de panadería.
- **Citamos:** error medio de 0,08 % en harina por receta; 197 s para entregar 350 g.
- **Sirve:** evaluar conjuntamente tiempo y error de cada dosis.
- **No confundir:** error bajo no implica rapidez; sus consignas no son nuestros lotes de harina de 5–8 kg.
- **Ubicación:** 2.1, p. 29; 2.2.1.4, 2.2.3.1 y 2.2.4.2. Clave: `humaira2024optimalisasi`.

### EA18 · Rumapea et al. (2026) — compuerta y bóvedas

- **Estudiaron:** harina con alimentación gruesa y fina mediante compuerta.
- **Citamos:** parte del error atribuida a bóvedas.
- **Sirve:** comparar mecanismos considerando interrupciones de descarga.
- **No confundir:** no es un ensayo con tornillo; su configuración no selecciona nuestro alimentador ni garantiza flujo estable.
- **Ubicación:** 2.1, p. 29; 2.2.2.2 y 2.2.4.1. Clave: `rumapea2026flour`.

### EA19 · Afni et al. (2026) — comparación con el procedimiento manual

- **Estudiaron:** dosificación de harina de arroz frente al pesaje manual.
- **Citamos:** mayor exactitud reportada con el equipo, pero con bóvedas y salida tras detener el tornillo.
- **Sirve:** orientar nuestra comparación manual–prototipo y examinar fallas de descarga.
- **No confundir:** harina de arroz no equivale a harina de trigo; la mejora debe medirse en San Miguel.
- **Ubicación:** 2.1, p. 29; 2.2.1.4 y 2.2.2. Clave: `afni2026cake`.

### EA20 · Bachtiar et al. (2026) — comprobar por ingrediente

- **Estudiaron:** compuertas con servomotor en un equipo para brownies.
- **Citamos:** 95 g frente a 100 g de harina y 51 g frente a 120 g de azúcar; sal ensayada a 1 g.
- **Sirve:** comparar el mecanismo mediante ensayos por ingrediente.
- **No confundir:** el resultado de harina no valida azúcar; sal a 1 g no respalda nuestras cantidades de receta.
- **Ubicación:** 2.1, p. 29; 2.2.1.4 y 2.2.2.2. Clave: `bachtiar2026brownies`.

### EA21 · Wang et al. (2025) — costo temporal del ajuste fino

- **Estudiaron:** dinámica y error del llenado mediante simulación.
- **Citamos:** reducir la velocidad fina aumenta la duración del lote.
- **Sirve:** analizar cuánto tiempo destinar al ajuste final.
- **No confundir:** es una simulación, no tiempo medido en nuestra máquina; un flujo más lento no garantiza por sí solo cumplir el margen.
- **Ubicación:** 2.1, p. 29; 2.2.4.1 y 2.3.6.4. Clave: `wang2025batching`.

### EA22 · Zengin et al. (2025) — lectura suave y retardo

- **Estudiaron:** filtrado de la señal de pesaje.
- **Citamos:** promediar muestras suaviza la lectura e introduce retardo.
- **Sirve:** seleccionar el tratamiento de señal junto con la decisión de parada.
- **No confundir:** una lectura visualmente estable puede llegar tarde; filtrar no elimina todos los errores de dosificación.
- **Ubicación:** 2.1, p. 29; 2.3.6.4. Clave: `zengin2025fir`.

### EA23 · Bühler AG (2022) — patente de dosificación

- **Describe:** alimentación gruesa y fina y correcciones de dosificación.
- **Citamos:** una referencia industrial para organizar las etapas del lote.
- **Sirve:** estudiar la secuencia de llenado y sus ajustes.
- **No confundir:** una patente y sus prestaciones declaradas no equivalen a un ensayo independiente ni a un resultado del proyecto.
- **Ubicación:** 2.1, pp. 29–30; 2.2.4. Clave: `buhler2022dosing`.

## 2.2 Enfoques — qué estamos comparando

### EN01 · Arquitectura completa y oferta comercial

- **Idea:** almacenamiento, alimentación, pesaje y control cumplen funciones distintas; una máquina con tornillo no es necesariamente gravimétrica en tiempo real.
- **Fuentes:** los antecedentes de EA01–EA23 aportan arquitecturas, escalas y resultados; Indurpack DF-B e IF-A aportan fichas comerciales.
- **Citamos:** DF-B, 0,5–350 g; IF-A, 5–5000 g. Ambas declaran ±1 %, usan tornillos intercambiables y una balanza de comprobación/corrección.
- **Sirve:** comparar oferta y límites frente a cuatro ingredientes y harina hasta 8 kg.
- **No confundir:** no cubren todo nuestro caso ni la ficha acredita que el peso detenga el tornillo en cada lote. Precisión declarada no es resultado independiente.
- **Ubicación:** 2.2.1, pp. 30–36. Claves adicionales: `indurpack2026dfb`, `indurpack2026ifa`.

### EN02 · Almacenamiento y alimentación

- **Idea:** la tolva almacena y debe descargar; el alimentador regula la entrega.
- **Fuentes:** Su y Rivera explican problemas de descarga; Budijono y Xu, tornillo y estabilidad; Orozco, vibración; Rumapea y Bachtiar, compuertas; Humaira, Joni, David y Sánchez, aplicaciones con tornillo.
- **Sirve:** comparar continuidad del flujo, regulación y corte según cada insumo.
- **No confundir:** D-019 conserva tornillos comerciales para cuatro ingredientes, pero no define sus diámetros, velocidades, motores ni la geometría final de las tolvas. Un agitador ayuda al flujo; no sustituye el pesaje.
- **Ubicación:** 2.2.2, pp. 36–39. Fuente técnica adicional: `su2017arching`.

### EN03 · Principio de medición y configuración de balanzas

- **Idea:** volumétrico entrega volumen; gravimétrico verifica masa. Pesaje común y separado son configuraciones, no principios de medición distintos.
- **Fuentes:** Blackshields y Chiliguana distinguen principios; Lanzerstorfer aporta variación de densidad; Acuña compara azúcar; Farihin/Joni y Laime/Sánchez muestran configuraciones; Richiedei y Tiboni, perturbaciones de la celda. Los prototipos de David, Afni, Orozco, Humaira y Challco ilustran electrónica.
- **Sirve:** comparar balanza común, auxiliar o por ingrediente, capacidad, resolución y electrónica.
- **No confundir:** pérdida de peso mide lo que sale de una tolva; pesaje por lotes mide lo que entra al receptor. Citar Arduino, ESP32 o PLC no selecciona el controlador.
- **Ubicación:** 2.2.3, pp. 39–44. Claves adicionales: `blackshields2018continuous`, `chiliguana2016rediseno`, `lanzerstorfer2020density`, `richiedei2018shaper`, `tiboni2020vibrations`.

### EN04 · Corte y control

- **Idea:** cambiar a flujo fino, detener antes de la consigna y corregir el lote siguiente son operaciones diferentes.
- **Fuentes:** Rumapea, dos etapas sin adelanto; Hadi/Bulatov, adelanto fijo; Hidalgo, material extra tras parar; Bukreev, columna en caída; Wang, tiempo de ajuste; Farihin/Humaira, PI/PID; Sánchez/Bühler, ajustes entre lotes y operación.
- **Sirve:** comparar estrategias según tiempo, cantidad final y dinámica.
- **No confundir:** dos etapas no exige PID. Una corrección del siguiente lote no corrige el que ya terminó. El resultado de Bukreev con polipropileno no prueba desempeño con alimentos de San Miguel.
- **Ubicación:** 2.2.4, pp. 44–46. Claves adicionales: `hidalgo2020llenado`, `bukreev2014accuracy`.

## 2.3 Fundamentos — qué necesitamos entender para diseñar

### FT01 · Propiedades de los insumos

- **Qué explica:** densidad aparente = masa a granel/volumen ocupado. Fluidez = facilidad de descarga; una bóveda puede detenerla.
- **Fuentes y aporte:** Lanzerstorfer, densidad y consolidación; Guan, harina y humedad; Siliveru, cohesión e índice de flujo; Dos Santos, azúcar y relación de Hausner; Suhag, influencia de propiedades y humedad.
- **Sirve:** estimar volumen de tolva y caudal y anticipar problemas de descarga.
- **No confundir:** densidad aparente no es densidad del material sólido. Hausner es un indicador, no un ensayo completo de tolva. Los valores bibliográficos no son mediciones de San Miguel; la tabla no reporta datos de levadura.
- **Ubicación:** 2.3.1, pp. 46–47. Claves: `lanzerstorfer2020density`, `guan2009flour`, `siliveru2017significance`, `dossantos2017sugar`, `suhag2024flowability`.

### FT02 · Metrología y OIML R 61

- **Qué explica:** error, exactitud, repetibilidad, resolución y error máximo permitido. OIML R 61 trata instrumentos automáticos de llenado gravimétrico.
- **Fuentes y aporte:** VIM, vocabulario; OIML R 61, límites de desviación de cargas respecto del promedio y del error promedio, según clase.
- **Sirve:** separar cercanía al objetivo, dispersión y capacidad de lectura, y organizar la evaluación.
- **No confundir:** tolerancia de receta no es error permitido del instrumento. Resolución de 1 g no acredita exactitud de ±1 g. Una serie puede ser repetible y estar desviada del objetivo. R 61 no determina por sí sola cuánto exceso acepta la propietaria.
- **Ubicación:** 2.3.2, pp. 47–48. Claves: `jcgm2012vim`, `oiml2017r61`.

### FT03 · Tolva: capacidad, pared y abertura

- **Qué explica:** volumen útil V = masa máxima/densidad aparente; flujo másico mueve todo el contenido, flujo en embudo deja zonas quietas.
- **Fuentes y aporte:** Orozco, volumen; Su, bóvedas; Mehos y Morgan, geometría y criterios de flujo; Sogaard, fricción de pared; Guan y Lopes Neto, propiedades medidas de harina; Bates, descarga hacia tornillo y ayudas al flujo.
- **Sirve:** definir capacidad y geometría compatible con el material y el alimentador.
- **No confundir:** capacidad en kg no es volumen en litros. Ángulo de fricción, ángulo de reposo y ángulo de pared no son intercambiables. Las aberturas bibliográficas de 74 o 86–122 mm no son nuestras dimensiones definitivas.
- **Ubicación:** 2.3.3, pp. 48–50. Claves: `orozco2024dosificadora`, `su2017arching`, `mehos2016hopper`, `sogaard2017jenike`, `guan2009flour`, `lopesneto2017flow`, `bates2000screw`.

### FT04 · Tornillo: caudal, potencia, torque e higiene

- **Qué explica:** caudal según diámetro, paso, giro, llenado y densidad; potencia P = c₀·caudal·g·longitud; torque T = P/(2πn).
- **Fuentes y aporte:** Bates, geometría, funcionamiento y mayor torque de arranque; Karwat, relaciones de caudal, potencia y llenado; Mager, superficies, materiales y limpieza.
- **Sirve:** contrastar un tornillo comercial y su motor con la entrega requerida y la limpieza.
- **No confundir:** caudal es cantidad por tiempo; dosis es cantidad del lote. Torque no es potencia. Las relaciones descritas para tornillo horizontal no deben trasladarse sin comprobación a uno vertical. Una recomendación de inoxidable no selecciona el material final.
- **Ubicación:** 2.3.4, pp. 50–51. Claves: `bates2000screw`, `karwat2021screw`, `mager2016hygienic`.

### FT05 · Accionamiento del tornillo

- **Qué explica:** paso a paso: frecuencia de pulsos y pasos por vuelta determinan velocidad. Motor CC: torque ligado a corriente y velocidad a tensión, con ecuación escrita para régimen permanente.
- **Fuentes y aporte:** Orozco, aplicación de motor paso a paso; Nidec, funcionamiento y curvas de arranque/marcha; Ogata, relaciones del motor CC.
- **Sirve:** comparar accionamientos con el torque de arranque y marcha del tornillo.
- **No confundir:** torque de retención no garantiza arrancar a cualquier velocidad. Un paso ordenado no acredita que se ejecutó bajo carga. La ecuación estacionaria del motor CC no es todavía el modelo dinámico completo del sistema.
- **Ubicación:** 2.3.5, pp. 51–52. Claves: `orozco2024dosificadora`, `nidec2026stepping`, `ogata2010control`.

### FT06 · Celda, calibración y filtrado

- **Qué explica:** celda → amplificación/conversión → lectura; ajuste de dos puntos convierte cuentas en gramos; promedio móvil promedia N muestras y retrasa la señal.
- **Fuentes y aporte:** Fraden, galgas, señal y calibración; OIML R 60, clases y parámetros de celda; Challco, carga útil y muerta; Richiedei/Wang, respuesta dinámica; Zengin, filtrado.
- **Sirve:** comprobar capacidad total, sensibilidad y rapidez de lectura antes de decidir el corte.
- **No confundir:** tara no retira físicamente la carga ni recupera capacidad. Más bits no garantizan resolución útil. Dos puntos ajustan cero y pendiente bajo linealidad, pero no verifican todo el rango. R 60 caracteriza celdas, no certifica la dosificadora completa.
- **Ubicación:** 2.3.6, pp. 52–54. Claves: `fraden2016handbook`, `oiml2017r60`, `challco2024dosificadora`, `richiedei2018shaper`, `wang2025batching`, `zengin2025fir`.

### FT07 · Dos etapas, material en caída y PID

- **Qué explica:** un umbral cambia de flujo rápido a lento y otro detiene. El adelanto descuenta material que todavía caerá. La ecuación de columna estima esa masa por geometría, altura y densidad. PID combina error actual, acumulado y variación.
- **Fuentes y aporte:** Sánchez y Bulatov, umbrales/compensación; Bukreev, columna en caída; Ogata, todo o nada y PID.
- **Sirve:** diseñar y luego evaluar una estrategia de corte.
- **No confundir:** no son tres nombres para el mismo control. El modelo de columna es una aproximación dependiente de la geometría; no representa automáticamente toda la retención. Explicar PID no significa que haya sido seleccionado ni sintonizado.
- **Ubicación:** 2.3.7, pp. 54–56. Claves: `sanchez2024tolvas`, `bulatov2021dosing`, `bukreev2014accuracy`, `ogata2010control`.

### FT08 · Herramientas de diseño conceptual

- **Qué explica:** árbol organiza metas; caja negra delimita entradas/salidas; descomposición identifica funciones; morfología propone medios; casa de calidad vincula necesidades y características; evaluación compara conceptos.
- **Fuente y aporte:** Cross (2021), secuencia y función de esas herramientas.
- **Sirve:** organizar la propuesta del capítulo 3 y justificar alternativas.
- **No confundir:** casa de calidad no es selección automática de arquitectura. Un puntaje propuesto no es opinión medida de la propietaria. Las herramientas no sustituyen cálculos, fichas técnicas, CAD ni ensayos.
- **Ubicación:** 2.3.8, p. 56. Clave: `cross2021design`. El original no figura en la carpeta proporcionada; esta ficha resume el uso en la tesis, sin atribuir una nueva verificación al libro.

## Repaso — diez preguntas para distinguir conceptos

1. **¿Flujo constante garantiza dosis correcta?** No: todavía importan el corte, la lectura y el material que sigue cayendo.
2. **¿0,8 g al calibrar significa 0,8 g al dosificar?** No: son pruebas diferentes (Laime).
3. **¿0,2 % con PI frente a 0,8 % con todo o nada prueba superioridad?** No sin condiciones comparables (Farihin).
4. **¿Un ensayo de pimienta valida levadura?** No: orienta la comprobación de dosis pequeñas (Zaenurrohman).
5. **¿Un diseño sin pruebas demuestra exactitud?** No (Challco).
6. **¿Un porcentaje de «exactitud» de un autor es comparable con cualquier otro?** No: revisar definición, consigna, insumo y número de pruebas.
7. **¿Tara y calibración son lo mismo?** No: tara establece el cero con el recipiente; calibración relaciona indicación y referencia.
8. **¿Pesaje común exige PLC y pesaje separado exige Arduino?** No: configuración de balanzas y controlador son decisiones diferentes.
9. **¿±30 g de harina demuestra mejora frente al procedimiento manual?** No: es un criterio de diseño; requiere comparación experimental. D-024 añade una meta de media absoluta ≤10 g.
10. **¿La revisión prueba que no existe ningún equipo semejante?** No: el cierre se limita a los antecedentes seleccionados y a la combinación de ingredientes/escala estudiada.

## Alcance y pendientes de este material

- Se cubren las 23 referencias distintas de 2.1, las cuatro áreas de 2.2 y las ocho subsecciones de 2.3. El conjunto de claves bibliográficas cubre las 50 referencias distintas del capítulo.
- Son fichas para comprender lo escrito, no aprobación de parámetros abiertos ni nueva evidencia experimental.
- La carpeta de OneDrive contiene copias/enlaces de 49 fuentes citadas; no contiene Cross. Su índice todavía declara 49 fuentes porque no incorpora esta referencia posterior.
- Se conserva la formulación de cada resultado como reportado en el documento. La revisión exhaustiva de cálculos, métricas y fidelidad de cada cita a su fuente original es una tarea diferente.
