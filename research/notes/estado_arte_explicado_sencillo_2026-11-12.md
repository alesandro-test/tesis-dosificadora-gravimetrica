# El capítulo 2 en palabras sencillas

La primera parte es una lectura acompañada de **2.1 de la tesis**, páginas impresas 27–30 de `main.pdf` (versión de 107 páginas, 12/11/2026). Sigue los once párrafos del texto: diez con citas y el cierre. «Por qué lo pusimos» explica la función de la cita en nuestro argumento; no atribuye una conclusión nueva al autor.

La segunda parte explica de qué trata cada fuente citada en **2.1, 2.2 y 2.3**, qué aprovechamos y dónde la usamos.

Cuaderno de estudio: https://notebook.google.com/notebook/6a274ae0-44b4-4b31-8a6c-fdee56679b68

Preparado mediante consulta al MCP de NotebookLM sobre `main.pdf` y revisión contra el texto LaTeX vigente. Se revisaron las simplificaciones de la respuesta para conservar los límites de la evidencia, especialmente en Rivera, Farihin, Joni y los resultados de control. Esta lectura no modifica la tesis.

## Párrafo 1 · ¿Cómo sabemos cuándo dejar de echar harina?

**Gebov (2023).**

**Qué estamos diciendo:** una máquina puede mirar cuánto pesa la harina que va entrando y usar esa información para decidir cuándo parar. Gebov cambió esa forma de decidir, sin cambiar las piezas mecánicas, y el llenado pasó de 15 a 6 segundos.

**Por qué lo pusimos:** para mostrar que la forma de ordenar la parada influye en el llenado. Nos ayuda a estudiar el corte de nuestra dosificadora; no significa que nuestro equipo vaya a tardar 6 segundos.

## Párrafo 2 · No basta con saber cuándo parar: también importa cómo sale la harina

**Budijono et al. (2021).**

**Qué estamos diciendo:** modificaron un tornillo y una pieza que mueve la harina dentro de la tolva para que saliera de forma más pareja. Eso es un **caudal más estable**: que la cantidad que sale en cada segundo cambie menos. Lo observaron en una simulación, sin medir cuánto se equivocaba la dosis final.

**Por qué lo pusimos:** porque necesitamos comparar mecanismos que entreguen harina de manera regular. Una salida pareja ayuda a estudiar el llenado, pero no demuestra por sí sola que la cantidad final sea correcta.

## Párrafo 3 · La forma del tornillo y la salida de la tolva afectan la entrega

**Xu et al. (2021).**

**Qué estamos diciendo:** compararon formas de tornillo. En el de **paso variable**, la separación entre las vueltas cambia a lo largo del tornillo. Con esa geometría lograron que la cantidad de harina que salía variara menos.

**Por qué lo pusimos:** para explicar que dos tornillos pueden entregar harina de manera distinta aunque ambos giren. Esto nos orienta al comparar los tornillos comerciales; todavía no determina cuál debemos comprar.

**Rivera et al. (2023).**

**Qué estamos diciendo:** estudiaron dejar salir la harina por su propio peso. Al calcular una salida para que se moviera todo el material —lo que se llama **flujo másico**— obtuvieron aberturas tan grandes como las de un silo.

**Por qué lo pusimos:** para advertir que una solución de descarga por gravedad puede ocupar demasiado espacio para nuestra panadería. No estamos diciendo que toda descarga por gravedad sea imposible.

## Párrafo 4 · Después de ordenar la parada todavía puede caer material

**Bulatov et al. (2021a).**

**Qué estamos diciendo:** estudiaron la dosificación con tornillo y el material que sigue cayendo después de ordenar la parada. También registraron que unas virutas formaban una **bóveda**: un puente de material que tapa la salida y detiene la descarga.

**Por qué lo pusimos:** para recordar que debemos comprobar tanto la parada como los posibles atascos. La prueba era con virutas; no demuestra que nuestra harina se atasque de la misma manera.

**Bulatov et al. (2021b).**

**Qué estamos diciendo:** en otro trabajo ensayaron sal en cantidades de 1 kg y reportaron errores de 6,5 a 7,3 %. Intentaron tener en cuenta lo que todavía caería después del corte.

**Por qué lo pusimos:** porque sí tenemos sal entre nuestros ingredientes y nos interesa cómo controlar su entrega. Pero nuestras recetas usan cantidades menores: esos porcentajes no son márgenes aceptados para San Miguel.

**Hadi et al. (2025).**

**Qué estamos diciendo:** con arroz, ordenaron parar antes de llegar al peso deseado para que el material que aún estaba cayendo completara la cantidad. Eso es el **adelanto de corte**. Reportaron un sobrepaso medio de 0,72 % en cantidades de 1 a 20 kg.

**Por qué lo pusimos:** para mostrar una forma de reducir el exceso que aparece después de parar. El resultado corresponde al arroz y a ese equipo; nosotros tendremos que comprobarlo con nuestros ingredientes.

## Párrafo 5 · Pesar ayuda, pero debemos mirar qué se probó realmente

**Acuña Moncada (2024).**

**Qué estamos diciendo:** comparó dos maneras de entregar azúcar. Una entrega un volumen, como llenar siempre la misma medida; la otra se apoya en el peso. Con la segunda, los promedios quedaron más cerca de la cantidad deseada.

**Por qué lo pusimos:** porque respalda nuestra idea de dosificar azúcar usando el peso. No es todavía una prueba de que nuestro prototipo mejore el procedimiento manual.

**Orozco Villa (2024).**

**Qué estamos diciendo:** construyó una máquina que mueve arroz por un canal vibratorio y lo pesa. Se equivocaba más al trabajar con la cantidad objetivo menor. La **consigna** es simplemente esa cantidad que le pedimos entregar.

**Por qué lo pusimos:** para justificar que no basta con probar una sola cantidad. Debemos comprobar también las dosis pequeñas, aunque su ensayo con arroz no valide el mismo mecanismo con harina.

**Challco Capajeiqui (2024).**

**Qué estamos diciendo:** presentó el diseño de una máquina para pan molido, pero no resultados de pruebas de dosificación. Podemos estudiar cómo organizó sus partes, sin afirmar cuánto de bien dosificaba.

**Por qué lo pusimos:** porque aporta una referencia de diseño mecánico y electrónico. Nos ayuda a pensar la máquina, pero no sirve como evidencia de un error ya medido.

## Párrafo 6 · Las cantidades pequeñas y los ingredientes distintos requieren atención propia

**David et al. (2024).**

**Qué estamos diciendo:** dosificaron azúcar, arroz y café con tornillo. Reconocieron problemas cuando cambiaban la humedad o la densidad: el mismo espacio ocupado puede contener una cantidad distinta de material.

**Por qué lo pusimos:** para explicar que no podemos ajustar la máquina con un ingrediente y dar por hecho que funcionará igual con los demás. Cada uno necesita comprobación.

**Zaenurrohman et al. (2023).**

**Qué estamos diciendo:** dosificaron pimienta y el error representaba una parte mayor de lo pedido a 30 g que a 150 g. Eso es el **error relativo**: cuánto pesa la equivocación en comparación con la cantidad que se quería entregar.

**Por qué lo pusimos:** para prestar atención a las dosis pequeñas, especialmente la levadura. La pimienta nos da una advertencia sobre la escala; no es una prueba del comportamiento de la levadura.

## Párrafo 7 · Varios ingredientes pueden reunirse en una misma balanza

**Farihin et al. (2021).**

**Qué estamos diciendo:** varias tolvas entregaban ingredientes a un punto de pesaje común. Reportaron 0,2 % con control PI en una condición y 0,8 % con control todo o nada en otra. PI ajusta la acción a partir del error; todo o nada actúa con dos estados, como encender y apagar.

**Por qué lo pusimos:** para mostrar que existe la opción de pesar varios ingredientes en una balanza. Como las condiciones cambiaron, los porcentajes no prueban por sí solos que un control fuera mejor.

**Joni et al. (2022).**

**Qué estamos diciendo:** también usaron tornillos y pesaje común para harina, azúcar y café. En cantidades pedidas de 10 g llegaron a tener diferencias de hasta 9 g: una equivocación grande frente a lo que querían entregar.

**Por qué lo pusimos:** para mostrar que reunir varias tolvas y una balanza no garantiza dosificar bien cantidades pequeñas. Ese punto importa para nuestra levadura.

## Párrafo 8 · Otra opción es pesar por separado y reunir después

**Laime Asistiri (2022).**

**Qué estamos diciendo:** cada tolva tenía su propio pesaje y después se recogía el material en un lugar común. Al comprobar la balanza con una pesa de 500 g se reportó un error de 0,8 g. Esa comprobación no es lo mismo que echar ingredientes y medir el error final.

**Por qué lo pusimos:** para considerar el pesaje separado como alternativa al común. Nos interesa la disposición, sin atribuirle un error de dosificación que no se demostró.

**Sánchez Villacis (2024).**

**Qué estamos diciendo:** organizó ingredientes por grupos de balanzas y permitió llenar en paralelo, es decir, realizar llenados al mismo tiempo. El trabajo no cuantificó cuánto tiempo se reducía.

**Por qué lo pusimos:** para explorar cómo repartir los ingredientes y organizar el ciclo. No podemos prometer un ahorro de tiempo solo porque varias operaciones puedan hacerse a la vez.

## Párrafo 9 · Los equipos de panadería se parecen más al caso, pero conservan diferencias

**Humaira et al. (2024).**

**Qué estamos diciendo:** integraron cámaras separadas, tornillos y un control PID, que ajusta la acción usando el error presente, el acumulado y su cambio. Reportaron poco error medio con harina, pero entregar 350 g tomó 197 segundos.

**Por qué lo pusimos:** para explicar que debemos mirar juntos el error y el tiempo. Un equipo puede acercarse mucho al peso pedido y aun así tardar demasiado para una determinada operación.

**Rumapea et al. (2026).**

**Qué estamos diciendo:** una compuerta dejaba pasar harina primero rápido y después más lento. Parte del error se atribuyó a harina que formaba un puente en la salida y dificultaba la descarga.

**Por qué lo pusimos:** para comparar mecanismos teniendo en cuenta los atascos. Dividir el llenado en dos velocidades no elimina por sí solo los problemas de salida de la harina.

**Afni et al. (2026).**

**Qué estamos diciendo:** compararon su dosificador de harina de arroz con el pesaje manual y reportaron mayor exactitud con la máquina. Aun así, observaron puentes de material y harina que seguía saliendo después de detener el tornillo.

**Por qué lo pusimos:** porque nos orienta a comparar el prototipo con el procedimiento manual y a observar esas fallas. Su resultado con harina de arroz no demuestra una mejora con nuestra harina de trigo.

**Bachtiar et al. (2026).**

**Qué estamos diciendo:** usaron compuertas movidas por servomotores. Al pedir 100 g de harina entregaron 95 g; al pedir 120 g de azúcar entregaron 51 g. El mismo mecanismo tuvo resultados muy diferentes según el ingrediente. La sal se ensayó a 1 g.

**Por qué lo pusimos:** para justificar pruebas por ingrediente. No basta un resultado favorable con harina, y esa cantidad de sal tampoco representa las dosis de nuestras recetas.

## Párrafo 10 · La rapidez, la lectura de peso y la parada deben estudiarse juntas

**Wang et al. (2025).**

**Qué estamos diciendo:** en una simulación, hacer más lenta la parte final del llenado aumentó el tiempo necesario para completar el lote. El **flujo fino** es esa entrega lenta usada cerca de la cantidad deseada.

**Por qué lo pusimos:** para mostrar el costo de tiempo de un ajuste final lento. Debemos estudiar cuánto ajuste necesitamos; no se trata de bajar la velocidad sin considerar la duración del ciclo.

**Zengin et al. (2025).**

**Qué estamos diciendo:** la lectura de la balanza puede variar y se puede suavizar promediando varias lecturas. Eso es **filtrar la señal**. La lectura se vuelve más pareja, pero tarda más en reflejar lo que está pasando.

**Por qué lo pusimos:** porque una lectura que llega tarde puede retrasar la orden de parar. Debemos elegir el filtrado junto con el corte, no solo buscar números que se vean estables.

**Bühler AG (2022).**

**Qué estamos diciendo:** una patente industrial describe llenar primero rápido, después lento y realizar correcciones. Una patente describe una solución técnica; sus prestaciones declaradas no son un ensayo independiente de nuestro equipo.

**Por qué lo pusimos:** para tener una referencia industrial de cómo ordenar las etapas del llenado. Nos ayuda a pensar la secuencia, sin garantizar sus resultados en San Miguel.

## Párrafo 11 · ¿Qué estamos concluyendo con todo lo anterior?

**Qué estamos diciendo:** encontramos trabajos que ayudan con el pesaje, la alimentación, las dosis pequeñas, las balanzas y el corte. Pero, dentro de los trabajos elegidos, no documentamos un equipo que reúna nuestros lotes de harina de 5–8 kg y los tres ingredientes menores de las recetas de San Miguel.

**Por qué cerramos así:** para explicar por qué necesitamos estudiar esa combinación concreta. No estamos afirmando que no exista ninguna máquina semejante en el mundo, ni que nuestras alternativas ya estén seleccionadas o probadas.

## La secuencia para recordarlo

**Cuándo parar → cómo hacer que salga parejo → cómo influyen tornillo y tolva → qué sigue cayendo → qué aporta pesar → qué pasa con dosis pequeñas → dónde pesar cada ingrediente → qué enseñan las panaderías → cómo combinar rapidez, lectura y corte.**

Para repasar cada cita, basta explicar sin mirar: **«Este autor nos muestra que… Lo citamos porque… Pero todavía no demuestra que…»**.

## De qué trata cada documento citado en el capítulo 2

Este catálogo complementa la lectura anterior y abarca **Estado del arte (2.1), Enfoques (2.2) y Fundamentos (2.3)**. Una fuente se explica una sola vez, aunque se cite en varios apartados. «De qué trata» resume el tema del documento; «Qué usamos» identifica la parte aprovechada en nuestra tesis.

Se consultaron mediante el MCP de NotebookLM los **49 originales disponibles**, en siete grupos con fuentes seleccionadas, y se revisaron los resúmenes. Los títulos y las etiquetas de autor/año siguen la bibliografía vigente; las ubicaciones se obtuvieron de las citas del LaTeX activo, incluidas las de figuras y tablas. No es una auditoría bibliográfica completa. Para **Cross** se deja explícita la falta del original y no se inventa un resumen del libro.

## Estado del arte · documentos

### Fuente 01 · Gebov (2023)

**Documento:** Algorithmic Method in Dynamic Dosing Systems Based on Weight Measuring Principles. **Tipo:** Artículo de congreso.

**De qué trata:** Estudia cómo aumentar la rapidez de una embolsadora industrial de harina cambiando la forma de procesar la señal de peso y decidir la parada. Presenta un método de control que aprovecha las mediciones durante el llenado, sin necesitar un cambio de la estructura mecánica.

**Qué usamos en la tesis:** El corte basado en el peso medido y su efecto sobre el tiempo de llenado.

**Dónde lo citamos:** 2.1, 2.2.1. Referencia: `gebov2023algorithmic`.

### Fuente 02 · Budijono et al. (2021)

**Documento:** Reverse Engineering Method to Build Automatic Flouring Gauge Machine. **Tipo:** Artículo de congreso.

**De qué trata:** Parte de una máquina existente para volver a estudiar su funcionamiento y rediseñar sus piezas. Revisa la tolva, el tornillo y el agitador, y usa modelos de computadora para examinar cómo esas modificaciones afectan la salida de harina.

**Qué usamos en la tesis:** La estabilidad de la entrega de harina al modificar tornillo y agitador; no un error final medido.

**Dónde lo citamos:** 2.1, 2.2.2. Referencia: `budijono2021flour`.

### Fuente 03 · Xu et al. (2021)

**Documento:** Design and Experimental Study of Equal-Area Variable-Pitch Screw Structure for Wheat Flour. **Tipo:** Artículo.

**De qué trata:** Estudia cómo cambiar la forma del tornillo para que la harina salga de manera más regular. Compara diseños en los que varía la separación entre vueltas y examina su funcionamiento con simulaciones y pruebas experimentales.

**Qué usamos en la tesis:** La influencia de la geometría del tornillo sobre la variación del caudal.

**Dónde lo citamos:** 2.1, 2.2.2. Referencia: `xu2021screw`.

### Fuente 04 · Rivera et al. (2023)

**Documento:** Significance of Storage Conditions on the Flow Properties of Wheat Flours. **Tipo:** Artículo.

**De qué trata:** Investiga cómo las condiciones de almacenamiento, la humedad del ambiente y las características de la harina cambian su facilidad para fluir. Estudia harinas mediante ensayos y relaciona sus propiedades con los problemas de descarga y el diseño de tolvas.

**Qué usamos en la tesis:** Las limitaciones de la descarga por gravedad y el efecto de las condiciones de almacenamiento.

**Dónde lo citamos:** 2.1, 2.2.2. Referencia: `rivera2023flour`.

### Fuente 05 · Bulatov et al. (2021a)

**Documento:** Research Results of Experimental Automated System for Dosing Bulk Materials. **Tipo:** Artículo de congreso.

**De qué trata:** Presenta pruebas de una dosificadora automática de tornillo con aserrín, harina de madera y virutas. Cambia ajustes de velocidad y de parada para estudiar cómo influyen en la cantidad entregada, y construye relaciones matemáticas a partir de los resultados.

**Qué usamos en la tesis:** Las bóvedas observadas, los ajustes de dos etapas y la compensación del material que sigue cayendo.

**Dónde lo citamos:** 2.1, 2.2.1, 2.2.4, 2.3.7. Referencia: `bulatov2021dosing`.

### Fuente 06 · Bulatov et al. (2021b)

**Documento:** Influence of Input Parameters Setting on the Operating Process of the Weighing System. **Tipo:** Artículo de congreso.

**De qué trata:** Estudia una dosificadora de tornillo con materiales diferentes, entre ellos sal, tiza, cebada y productos de madera. Realiza ensayos para ver qué ocurre al cambiar las velocidades de llenado y los ajustes de parada, buscando combinaciones adecuadas para cada material.

**Qué usamos en la tesis:** Los resultados con sal en lotes de 1 kg y los parámetros de adelanto del corte.

**Dónde lo citamos:** 2.1, 2.2.1, 2.2.4. Referencia: `bulatov2021weighing`.

### Fuente 07 · Hadi et al. (2025, según la cita vigente)

**Documento:** IoT-Based Digital Weighing System Using ESP32 and Load Cell for Rice Milling Operations. **Tipo:** Artículo.

**De qué trata:** Desarrolla un sistema digital para pesar arroz y enviar sus datos a una aplicación de seguimiento. Integra una celda de carga y un ESP32; además prueba el control del llenado con un servomotor que representa, a escala de prototipo, una válvula industrial.

**Qué usamos en la tesis:** El corte anticipado y el sobrepaso reportado; no toda la parte de conexión y aplicación móvil.

**Dónde lo citamos:** 2.1, 2.2.1, 2.2.4. Referencia: `hadi2025weighing`.

### Fuente 08 · Acuña Moncada (2024)

**Documento:** Implementación de sistema dosificador gravimétrico para la disminución de costos por mermas en envasado de azúcar Empresas Iansa. **Tipo:** Trabajo de titulación.

**De qué trata:** Evalúa la incorporación de un dosificador gravimétrico comercial en el envasado de azúcar de Iansa. El documento estudia tanto el peso de los envases como la operación y sus consecuencias económicas, comparándolo con el sistema volumétrico anterior.

**Qué usamos en la tesis:** La comparación de cantidades y dispersión entre dosificación volumétrica y gravimétrica de azúcar.

**Dónde lo citamos:** 2.1, 2.2.1, 2.2.3. Referencia: `acuna2024gravimetrico`.

### Fuente 09 · Orozco Villa (2024)

**Documento:** Dosificadora para arroz enfocada a microempresas. **Tipo:** Trabajo de grado.

**De qué trata:** Diseña y construye una dosificadora de arroz para microempresas. El material se almacena en una tolva, avanza por un canal vibratorio y se entrega mediante un sistema de pesaje y compuertas; el trabajo incluye selección de partes y pruebas de funcionamiento.

**Qué usamos en la tesis:** Una alternativa vibratoria, su desempeño según la consigna y referencias de capacidad y accionamiento.

**Dónde lo citamos:** 2.1, 2.2.1, 2.2.2, 2.2.3, 2.3.3, 2.3.5. Referencia: `orozco2024dosificadora`.

### Fuente 10 · Challco Capajeiqui (2024)

**Documento:** Diseño de una máquina dosificadora automática para pan molido en Industrias Alimenticias La Francesa. **Tipo:** Proyecto de grado.

**De qué trata:** Desarrolla el diseño de una máquina para dosificar pan molido en La Francesa. Incluye el conjunto mecánico, cálculos, representación en CAD y el control electrónico con PLC. Su alcance de diseño no debe confundirse con resultados experimentales de dosificación.

**Qué usamos en la tesis:** La arquitectura mecánica y electrónica y la consideración de la carga total sobre el pesaje.

**Dónde lo citamos:** 2.1, 2.2.1, 2.2.3, 2.3.6. Referencia: `challco2024dosificadora`.

### Fuente 11 · David et al. (2024)

**Documento:** Design and Implementation of Home Industrial-Based Automatic Granulated Food Weighing Machine. **Tipo:** Artículo.

**De qué trata:** Construye una máquina para pesar y preparar alimentos como azúcar, arroz y café antes de envasarlos. Integra tornillo, celda de carga, sensores y control electrónico, y realiza pruebas del prototipo para examinar el peso entregado según lo solicitado por el usuario.

**Qué usamos en la tesis:** El ejemplo con varios alimentos, la electrónica y los límites frente a cambios de densidad y humedad.

**Dónde lo citamos:** 2.1, 2.2.1, 2.2.2, 2.2.3. Referencia: `david2024granulated`.

### Fuente 12 · Zaenurrohman et al. (2023)

**Documento:** Rancang Bangun Sistem Pengisian Otomatis Merica Bubuk Berbasis Kontroler Arduino Nano. **Tipo:** Artículo.

**De qué trata:** Diseña una máquina para llenar automáticamente recipientes con pimienta en polvo. Integra transporte, tornillo, balanza y Arduino Nano, y evalúa la cantidad entregada y el tiempo de llenado para distintas cantidades solicitadas.

**Qué usamos en la tesis:** El mayor error relativo observado en las cantidades pequeñas; es evidencia indirecta para nuestra levadura.

**Dónde lo citamos:** 2.1, 2.2.1. Referencia: `zaenurrohman2023merica`.

### Fuente 13 · Farihin et al. (2021)

**Documento:** Sistem Penakar Bahan Baku Premix Roti Manis Menggunakan Metode PID. **Tipo:** Artículo.

**De qué trata:** Desarrolla un sistema para preparar una premezcla de ingredientes secos de pan dulce. Organiza varias tolvas alrededor de un pesaje común y estudia cómo controlar la entrega de ingredientes mediante motores y una señal de peso, con pruebas del sistema.

**Qué usamos en la tesis:** La configuración de pesaje común y los resultados de control, conservando la diferencia entre condiciones de ensayo.

**Dónde lo citamos:** 2.1, 2.2.3, 2.2.4. Referencia: `farihin2021premix`.

### Fuente 14 · Joni et al. (2022)

**Documento:** The Design of Automatic Powder Packaging Tools Based on Atmega 16 Microcontroller on Home Industry. **Tipo:** Artículo.

**De qué trata:** Diseña y construye un equipo automático para envasar harina, azúcar y café en una pequeña industria. El usuario indica el producto y el peso; el sistema entrega, pesa, descarga hacia la bolsa y la sella. Usa un microcontrolador ATmega16.

**Qué usamos en la tesis:** Los tornillos, el pesaje común y los problemas de error en dosis muy pequeñas.

**Dónde lo citamos:** 2.1, 2.2.2, 2.2.3. Referencia: `joni2022powder`.

### Fuente 15 · Laime Asistiri (2022)

**Documento:** Diseño de un sistema de dosificación y control de pesaje para empaquetamiento de chips de papas fritas para la empresa de alimentos Industrias Majota. **Tipo:** Proyecto de grado.

**De qué trata:** Desarrolla un sistema de dosificación y control de pesaje para empaquetar chips de papa de Industrias Majota. Integra tolvas, celdas de carga, compuertas e interfaz de operación, e incluye el diseño del prototipo y su evaluación técnica y económica.

**Qué usamos en la tesis:** El pesaje independiente con recolección común; la comprobación con una pesa no se trata como error de dosificación.

**Dónde lo citamos:** 2.1, 2.2.3. Referencia: `laime2022dosificacion`.

### Fuente 16 · Sánchez Villacis (2024)

**Documento:** Integración de tolvas de productos medios para la dosificación de materia prima en una planta de balanceado. **Tipo:** Trabajo de titulación.

**De qué trata:** Integra tolvas para ingredientes de cantidades intermedias en una planta de alimento balanceado. El sistema coordina grupos de ingredientes con control industrial e interfaces de supervisión para permitir dosificación en paralelo con otros insumos de la planta.

**Qué usamos en la tesis:** El pesaje por grupos, las operaciones en paralelo y los ajustes de corte y de lotes siguientes.

**Dónde lo citamos:** 2.1, 2.2.2, 2.2.3, 2.2.4, 2.3.7. Referencia: `sanchez2024tolvas`.

### Fuente 17 · Humaira et al. (2024)

**Documento:** Optimalisasi Sistem Penakar Bahan Baku Roti Otomatis Menggunakan Kontrol PID. **Tipo:** Artículo.

**De qué trata:** Construye un equipo para dosificar ingredientes de panadería, como harina, azúcar y leche en polvo. Cada compartimento entrega material mediante una espiral accionada por motor; las celdas de carga informan al control PID para ajustar la entrega de acuerdo con una receta o cantidad indicada.

**Qué usamos en la tesis:** La integración de varios ingredientes, sus balanzas y el análisis conjunto del tiempo y el error.

**Dónde lo citamos:** 2.1, 2.2.1, 2.2.2, 2.2.3, 2.2.4. Referencia: `humaira2024optimalisasi`.

### Fuente 18 · Rumapea et al. (2026)

**Documento:** Design and Development of An Optimized Automatic Flour Dosing Machine for SME Bakeries. **Tipo:** Artículo.

**De qué trata:** Diseña y desarrolla una dosificadora de harina para panaderías pequeñas. Combina una tolva, una compuerta con servomotor, una celda de carga y Arduino; entrega primero más rápido y después más lento, y examina el funcionamiento del equipo y sus errores.

**Qué usamos en la tesis:** La compuerta con dos etapas y las bóvedas observadas; no un ensayo de alimentador de tornillo.

**Dónde lo citamos:** 2.1, 2.2.1, 2.2.2, 2.2.4. Referencia: `rumapea2026flour`.

### Fuente 19 · Afni et al. (2026)

**Documento:** Design and Evaluation of an ESP32-Based Automatic Cake Ingredient Dosing System Using Load Cell Control. **Tipo:** Artículo.

**De qué trata:** Diseña y evalúa dosificación automática para una pequeña panadería: un sistema con tornillo para harina de arroz y otro con bomba para leche de coco. Usa ESP32 y medición de peso, y compara aspectos del desempeño automático con el procedimiento manual.

**Qué usamos en la tesis:** La parte de harina de arroz, su electrónica y las fallas de descarga; no el sistema de líquidos.

**Dónde lo citamos:** 2.1, 2.2.1, 2.2.2, 2.2.3. Referencia: `afni2026cake`.

### Fuente 20 · Bachtiar et al. (2026)

**Documento:** Rancang Bangun Mixer Otomatis Pengatur Takaran Adonan Brownies Kukus Berbasis Arduino Mega 2560. **Tipo:** Artículo.

**De qué trata:** Construye un equipo automático para dosificar y mezclar ingredientes de brownies al vapor. Usa Arduino Mega, compuertas accionadas por servomotores, medición de peso, bombas para líquidos y un motor de mezclado. El documento estudia un proceso más amplio que solo entregar ingredientes secos.

**Qué usamos en la tesis:** Los resultados de dosificación de secos y sus diferencias por ingrediente; el mezclado queda fuera de nuestro alcance.

**Dónde lo citamos:** 2.1, 2.2.1, 2.2.2. Referencia: `bachtiar2026brownies`.

### Fuente 21 · Wang et al. (2025)

**Documento:** Dynamic Modeling and Error Mechanism Analysis of a Laboratory Drilling Fluid Automatic Batching System. **Tipo:** Artículo.

**De qué trata:** Estudia un sistema de preparación de materiales para fluidos de perforación de laboratorio. Construye un modelo del tornillo, del impacto del material y del sensor de peso para analizar errores y oscilaciones durante la dosificación y al cambiar de velocidad.

**Qué usamos en la tesis:** La relación entre velocidad fina y duración del lote, y la respuesta dinámica del pesaje.

**Dónde lo citamos:** 2.1, 2.2.4, 2.3.6. Referencia: `wang2025batching`.

### Fuente 22 · Zengin et al. (2025)

**Documento:** Combination of FIR and Kalman Filters to Increase Measurement Accuracy in Dynamic Weighing. **Tipo:** Artículo.

**De qué trata:** Estudia cómo tratar las señales de una balanza mientras ocurre el pesaje dinámico. Propone combinar un filtro FIR con otro de Kalman y los evalúa mediante procesamiento de señales para reducir ruido y mejorar la estimación del peso.

**Qué usamos en la tesis:** El promedio de muestras y su compromiso entre suavizado y retardo; no significa que adoptamos Kalman.

**Dónde lo citamos:** 2.1, 2.3.6. Referencia: `zengin2025fir`.

### Fuente 23 · Bühler AG (2022)

**Documento:** Intelligente Anlagesteuerung und Dosiervorrichtung. **Tipo:** Patente.

**De qué trata:** Describe una forma de controlar y ajustar dosificadoras industriales usando mediciones y análisis de los datos de operación. Incluye el reconocimiento de comportamientos anómalos y la corrección de parámetros de dosificación; su alcance es más amplio que llenar en dos velocidades.

**Qué usamos en la tesis:** Las etapas gruesa y fina y las correcciones; no adoptamos todo el sistema inteligente descrito en la patente.

**Dónde lo citamos:** 2.1, 2.2.4. Referencia: `buhler2022dosing`.

## Fuentes adicionales de Enfoques · documentos

### Fuente 24 · Indurpack DF-B

**Documento:** Dosificador de polvos por tornillo sin fin DF-B. **Tipo:** Ficha comercial.

**De qué trata:** Presenta una máquina de tornillo para fraccionar pequeñas cantidades de polvos. El fabricante describe la tolva, la operación y la balanza para comprobar y corregir el peso. La ficha comunica prestaciones comerciales declaradas, no resultados de un ensayo independiente.

**Qué usamos en la tesis:** El rango, la arquitectura y sus límites frente a las recetas y los cuatro ingredientes de San Miguel.

**Dónde lo citamos:** 2.2.1. Referencia: `indurpack2026dfb`.

### Fuente 25 · Indurpack IF-A

**Documento:** Dosificador de polvos p/tornillo sin fin IF-A. **Tipo:** Ficha comercial.

**De qué trata:** Describe una dosificadora de polvos con tornillo, agitador y tolva, preparada para diferentes cantidades mediante tornillos intercambiables. El fabricante informa las conexiones, capacidades y condiciones de uso del equipo, incluida la comprobación y corrección de peso con balanza.

**Qué usamos en la tesis:** El rango hasta 5 kg, los tornillos intercambiables y los límites de una máquina comercial de un solo insumo.

**Dónde lo citamos:** 2.2.1. Referencia: `indurpack2026ifa`.

### Fuente 26 · Su (2017)

**Documento:** A New Constitutive and Numerical Model for Arching of Cohesive Powders in Hoppers. **Tipo:** Tesis doctoral.

**De qué trata:** Investiga por qué los polvos cohesivos forman puentes que impiden la salida de una tolva. Desarrolla un modelo matemático y simulaciones para estudiar los esfuerzos del material y las condiciones en que ese puente se mantiene o colapsa, especialmente en tolvas en cuña.

**Qué usamos en la tesis:** Las bóvedas y los criterios de geometría y abertura; no aplicamos todo el modelo desarrollado en la tesis.

**Dónde lo citamos:** 2.2.2, 2.3.3. Referencia: `su2017arching`.

### Fuente 27 · Blackshields y Crean (2018)

**Documento:** Continuous Powder Feeding for Pharmaceutical Solid Dosage Form Manufacture: A Short Review. **Tipo:** Artículo de revisión.

**De qué trata:** Revisa cómo alimentar continuamente polvos en la fabricación de medicamentos sólidos. Compara mecanismos y explica especialmente los sistemas que controlan lo que sale de una tolva pesando su pérdida de masa, junto con los efectos del polvo y la recarga.

**Qué usamos en la tesis:** La diferencia entre volumétrico, pesaje por lotes y pérdida de peso, y los límites de la recarga.

**Dónde lo citamos:** 2.2.3. Referencia: `blackshields2018continuous`.

### Fuente 28 · Chiliguana y Villavicencio (2016)

**Documento:** Rediseño de una dosificadora de cereal de tipo volumétrico a una de tipo gravimétrico. **Tipo:** Proyecto de titulación.

**De qué trata:** Propone transformar una dosificadora que entrega por volumen en otra que entrega por peso para envasar cereal o galletas de chocolate. Desarrolla el rediseño mecánico de alimentación, pesaje y descarga para reducir el exceso de producto en cada envase.

**Qué usamos en la tesis:** La comparación de principios y la referencia al pesaje por lotes para cantidades discretas.

**Dónde lo citamos:** 2.2.3. Referencia: `chiliguana2016rediseno`.

### Fuente 29 · Lanzerstorfer (2020)

**Documento:** Apparent Density of Compressible Food Powders under Storage Conditions. **Tipo:** Artículo.

**De qué trata:** Estudia cómo se compactan diferentes alimentos en polvo cuando soportan presión durante el almacenamiento. Mide la densidad aparente y la fricción con la pared, y relaciona esos cambios con propiedades del polvo y condiciones del material almacenado.

**Qué usamos en la tesis:** La variación de densidad por compresión y los datos bibliográficos de los insumos.

**Dónde lo citamos:** 2.2.3, 2.3.1. Referencia: `lanzerstorfer2020density`.

### Fuente 30 · Richiedei y Trevisani (2018)

**Documento:** Shaper-Based Filters for the Compensation of the Load Cell Response in Dynamic Mass Measurement. **Tipo:** Artículo.

**De qué trata:** Estudia la lectura oscilante de las celdas de carga cuando se pesa material en movimiento. Propone filtros digitales basados en un modelo de la respuesta del sensor para que la indicación llegue antes a un valor estable, y examina su comportamiento.

**Qué usamos en la tesis:** El efecto de la dinámica de la celda y la necesidad de tratar la señal; no seleccionamos ese filtro específico.

**Dónde lo citamos:** 2.2.3, 2.3.6. Referencia: `richiedei2018shaper`.

### Fuente 31 · Tiboni et al. (2020)

**Documento:** Experimental and Model-Based Study of the Vibrations in the Load Cell Response of Automatic Weight Fillers. **Tipo:** Artículo.

**De qué trata:** Investiga las vibraciones de una celda de carga durante el llenado automático de líquidos. Combina experimentos y un modelo del sistema para entender cómo el movimiento de la máquina y del fluido altera la lectura de peso.

**Qué usamos en la tesis:** La advertencia de que la vibración perturba el pesaje; el estudio original es de líquidos.

**Dónde lo citamos:** 2.2.3. Referencia: `tiboni2020vibrations`.

### Fuente 32 · Hidalgo (2020)

**Documento:** Diseño de un sistema de llenado según masa para productos tipo cereales. **Tipo:** Proyecto de grado.

**De qué trata:** Diseña un sistema para llenar bolsas con productos de tipo cereal, particularmente granola, según su peso. Integra un tornillo, un motor paso a paso, celda de carga y control electrónico, e incluye pruebas de entrega del producto.

**Qué usamos en la tesis:** La masa adicional tras detener el alimentador y la selección de la velocidad de ajuste fino.

**Dónde lo citamos:** 2.2.4. Referencia: `hidalgo2020llenado`.

### Fuente 33 · Bukreev et al. (2014)

**Documento:** Accuracy Enhancement of Electrotechnical System for Bulk Material Batching. **Tipo:** Artículo.

**De qué trata:** Estudia el error que causa el material que todavía está en el aire cuando una dosificadora ordena parar. Propone estimar esa cantidad mediante la geometría y la densidad, y comprueba una corrección en simulación y en una instalación experimental.

**Qué usamos en la tesis:** El modelo de columna en caída y un ejemplo de compensación; su resultado no demuestra desempeño con nuestros ingredientes.

**Dónde lo citamos:** 2.2.4, 2.3.7. Referencia: `bukreev2014accuracy`.

## Otras fuentes de Fundamentos · documentos

### Fuente 34 · Siliveru et al. (2017)

**Documento:** Significance of Composition and Particle Size on the Shear Flow Properties of Wheat Flour. **Tipo:** Artículo.

**De qué trata:** Investiga cómo la composición, la humedad y el tamaño de las partículas de harina de trigo afectan su facilidad para fluir. Usa ensayos que fuerzan el movimiento del polvo para comparar su resistencia y reconocer condiciones de mayor cohesión.

**Qué usamos en la tesis:** El índice de flujo y la influencia de humedad y granulometría sobre la harina.

**Dónde lo citamos:** 2.3.1. Referencia: `siliveru2017significance`.

### Fuente 35 · Dos Santos et al. (2017)

**Documento:** Flow Properties of Coarse and Fine Sugar Powders. **Tipo:** Artículo.

**De qué trata:** Compara azúcares de diferentes tamaños de partícula para conocer cómo fluyen y se acomodan al moverlos o asentarlos. Mide características de las partículas, densificación y distintos indicadores de flujo para explicar diferencias entre azúcar granular y fina.

**Qué usamos en la tesis:** La relación de Hausner y los datos de fluidez de azúcar cristal e impalpable.

**Dónde lo citamos:** 2.3.1. Referencia: `dossantos2017sugar`.

### Fuente 36 · Guan et al. (2009)

**Documento:** The Effect of Moisture Content and Compaction on the Strength and Arch Formation of Wheat Flour in a Model Bin. **Tipo:** Artículo.

**De qué trata:** Estudia experimentalmente cómo la humedad y la compactación modifican la resistencia de la harina y la formación de puentes en una tolva modelo. Relaciona esas condiciones con la abertura necesaria para que el material pueda salir sin bloquearse.

**Qué usamos en la tesis:** Densidad de harina, fricción y aberturas bibliográficas; no dimensiones definitivas de nuestra tolva.

**Dónde lo citamos:** 2.3.1, 2.3.3. Referencia: `guan2009flour`.

### Fuente 37 · Suhag et al. (2024)

**Documento:** Factors Influencing Food Powder Flowability. **Tipo:** Artículo de revisión.

**De qué trata:** Reúne y explica factores que cambian la facilidad de movimiento de los polvos alimentarios: tamaño y forma de partículas, humedad, composición y almacenamiento. También revisa formas de medir ese comportamiento para entender dificultades en su manejo industrial.

**Qué usamos en la tesis:** La dependencia de la fluidez respecto de las propiedades y condiciones del insumo.

**Dónde lo citamos:** 2.3.1. Referencia: `suhag2024flowability`.

### Fuente 38 · JCGM — VIM

**Documento:** International Vocabulary of Metrology: Basic and General Concepts and Associated Terms. **Tipo:** Vocabulario técnico de metrología.

**De qué trata:** Organiza y define los conceptos utilizados para hablar de mediciones. Explica magnitudes, resultados, instrumentos, calibración, errores e incertidumbre, entre otros términos. Es una referencia de vocabulario para distintas áreas científicas y técnicas; no es un manual específico de dosificación.

**Qué usamos en la tesis:** Las definiciones de error, exactitud, repetibilidad, resolución y error máximo permitido.

**Dónde lo citamos:** 2.3.2. Referencia: `jcgm2012vim`.

### Fuente 39 · OIML R 61

**Documento:** Automatic Gravimetric Filling Instruments. Part 1: Metrological and Technical Requirements. **Tipo:** Recomendación internacional.

**De qué trata:** Establece requisitos técnicos, metrológicos y de comprobación para instrumentos automáticos que llenan recipientes con una cantidad de masa prefijada. Trata las clases de desempeño, las desviaciones permitidas y las pruebas necesarias para evaluar el instrumento.

**Qué usamos en la tesis:** Los límites y conceptos de evaluación de llenado; no fija los márgenes de receta que acepta la panadería.

**Dónde lo citamos:** 2.3.2. Referencia: `oiml2017r61`.

### Fuente 40 · Mehos y Morgan (2016)

**Documento:** Hopper Design Principles. **Tipo:** Artículo técnico.

**De qué trata:** Explica cómo diseñar tolvas a partir de las propiedades reales del material. Relaciona la fricción y la cohesión con la inclinación de las paredes y el tamaño de salida, buscando evitar zonas inmóviles, puentes y canales de descarga problemáticos.

**Qué usamos en la tesis:** Los patrones de flujo, ángulos de pared y criterios de abertura y ranura sobre el tornillo.

**Dónde lo citamos:** 2.3.3. Referencia: `mehos2016hopper`.

### Fuente 41 · Bates (2000)

**Documento:** Guide to the Design, Selection, and Application of Screw Feeders. **Tipo:** Libro técnico.

**De qué trata:** Es una guía sobre alimentadores de tornillo: cómo funcionan, cómo se conectan con la tolva y qué características afectan su entrega. Aborda la forma del tornillo, el flujo de materiales, las fuerzas de operación y las dificultades con polvos cohesivos.

**Qué usamos en la tesis:** Geometría, caudal, arranque y ayudas a la descarga; seleccionaremos un tornillo comercial según D-019.

**Dónde lo citamos:** 2.3.3, 2.3.4. Referencia: `bates2000screw`.

### Fuente 42 · Søgaard et al. (2017)

**Documento:** An Experimental Evaluation of Powder Flow Predictions in Small-Scale Process Equipment Based on Jenike's Hopper Design Methodology. **Tipo:** Artículo.

**De qué trata:** Comprueba si el método de Jenike predice bien la descarga de polvos en equipos pequeños. Compara predicciones de laboratorio con lo que ocurre en una tolva para producción farmacéutica, usando celulosa microcristalina y distintas condiciones del material.

**Qué usamos en la tesis:** La importancia de la fricción de pared para el patrón de flujo; no es un ensayo de harina.

**Dónde lo citamos:** 2.3.3. Referencia: `sogaard2017jenike`.

### Fuente 43 · Lopes Neto et al. (2017)

**Documento:** Flow Properties and Pattern Flow Prediction of Food Industrial Powders. **Tipo:** Artículo.

**De qué trata:** Mide propiedades de distintos polvos alimentarios y las utiliza para prever cómo descargarán de tolvas cónicas. Contrasta características medidas con referencias normativas y estudia cómo esas diferencias afectan la geometría y la abertura de descarga.

**Qué usamos en la tesis:** La fricción medida de la harina y su diferencia frente a valores de referencia.

**Dónde lo citamos:** 2.3.3. Referencia: `lopesneto2017flow`.

### Fuente 44 · Karwat et al. (2021)

**Documento:** Optimization of a Screw Conveyor's Exploitation Parameters. **Tipo:** Artículo.

**De qué trata:** Estudia cómo elegir los parámetros de operación de un transportador de tornillo. Compara cálculos teóricos, ensayos de laboratorio y simulaciones para analizar cuánta masa transporta y cuánta potencia necesita, buscando un funcionamiento favorable en ambos aspectos.

**Qué usamos en la tesis:** Las relaciones de caudal, llenado y potencia utilizadas como base de cálculo del tornillo.

**Dónde lo citamos:** 2.3.4. Referencia: `karwat2021screw`.

### Fuente 45 · Mager (2016)

**Documento:** Hygienic Design of Equipment in Handling Dry Materials. **Tipo:** Capítulo de libro.

**De qué trata:** Explica cómo diseñar equipos que manipulan materiales secos sin favorecer la contaminación de alimentos. Trata la elección de materiales, las superficies, las uniones y los componentes mecánicos, y distingue las condiciones de limpieza en seco de las de limpieza húmeda.

**Qué usamos en la tesis:** Los materiales y criterios higiénicos para superficies en contacto con los ingredientes.

**Dónde lo citamos:** 2.3.4. Referencia: `mager2016hygienic`.

### Fuente 46 · Nidec

**Documento:** 2-4-3 Characteristics of Stepping Motors. **Tipo:** Página técnica del fabricante.

**De qué trata:** Explica cómo cambia la capacidad de un motor paso a paso según su velocidad y la frecuencia de los pulsos. Distingue el torque que permite arrancar, el disponible durante la marcha y el de retención, mediante curvas de funcionamiento.

**Qué usamos en la tesis:** La relación entre pulsos y velocidad y las curvas de torque para contrastar arranque y marcha.

**Dónde lo citamos:** 2.3.5. Referencia: `nidec2026stepping`.

### Fuente 47 · Ogata (2010)

**Documento:** Ingeniería de control moderna. **Tipo:** Libro.

**De qué trata:** Es un libro general sobre cómo describir, analizar y diseñar sistemas de control automático. Explica modelos matemáticos, respuestas de sistemas y formas de regularlos, incluidos controladores PID y sistemas electromecánicos. Su contenido va mucho más allá de una dosificadora.

**Qué usamos en la tesis:** Las relaciones del motor de corriente continua y las acciones todo o nada y PID.

**Dónde lo citamos:** 2.3.5, 2.3.7. Referencia: `ogata2010control`.

### Fuente 48 · Fraden (2016)

**Documento:** Handbook of Modern Sensors: Physics, Designs, and Applications. **Tipo:** Libro.

**De qué trata:** Es una referencia amplia sobre sensores: qué fenómeno detectan, cómo lo convierten en una señal y cómo se usa esa señal. Incluye distintas tecnologías, características de medición y electrónica de acondicionamiento para aplicaciones como fuerza, presión y temperatura.

**Qué usamos en la tesis:** Galgas y puente, conversión de señal y relación de calibración de dos puntos bajo linealidad.

**Dónde lo citamos:** 2.3.6. Referencia: `fraden2016handbook`.

### Fuente 49 · OIML R 60

**Documento:** Metrological Regulation for Load Cells. **Tipo:** Recomendación internacional.

**De qué trata:** Establece requisitos y procedimientos para evaluar las características metrológicas de las celdas de carga. Trata su clasificación, errores y respuesta ante condiciones como carga mantenida, temperatura y humedad. Se ocupa del componente de medición, no de toda la dosificadora.

**Qué usamos en la tesis:** Las clases y parámetros para seleccionar la celda según capacidad e intervalos de verificación.

**Dónde lo citamos:** 2.3.6. Referencia: `oiml2017r60`.

### Fuente 50 · Cross (2021)

**Documento:** Engineering Design Methods: Strategies for Product Design. **Tipo:** Libro — original no disponible en la colección.

**De qué trata:** El original no está cargado en este cuaderno ni localizado en la carpeta proporcionada. No se presenta un resumen verificado del documento completo. La tesis lo cita para herramientas de diseño de productos y desarrollo de conceptos; eso solo describe el uso que hicimos de la referencia.

**Qué usamos en la tesis:** Árbol de objetivos, análisis funcional, morfología, casa de calidad y comparación de conceptos, según el texto de la tesis.

**Dónde lo citamos:** 2.3.8. Referencia: `cross2021design`.

