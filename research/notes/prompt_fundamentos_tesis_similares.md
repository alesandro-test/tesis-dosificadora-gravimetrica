# Prompt: fundamentos teóricos en tesis similares (NotebookLM)

Creado el 28/10/2026. Objetivo: ver qué fundamentos (teoría y ecuaciones)
presentan las tesis de dosificadoras parecidas, cuáles usan después en el
diseño y con qué fuentes, para decidir el contenido de 2.6.4 y 2.6.5.

## Cuaderno

Crear `Cap2-2.6 Tesis similares` y cargar los PDF completos de las tesis
(no solo el resumen):

| Tesis | Por qué |
|---|---|
| Challco (UMSA, 2024), dosificadora de pan molido | Bolivia, celda comercial, tornillo |
| Laime (UMSA, 2022), dosificación y pesaje de chips | Bolivia, tolvas de pesaje |
| Murillo Torres (USFX, 2024), dosificación de papas por peso | Bolivia, pesaje |
| Remache (EPN, 2022), dosificador por peso de cebada | Pesaje con celda comercial |
| Hidalgo (TEC, 2020), llenado según masa de cereales | Pesaje |
| Chiliguana (ESPOL, 2016), volumétrico a gravimétrico | Pesaje por lotes |
| Moya (2016), dosificador por tornillo sin fin | Tornillo y tolva |
| Lema (2026), dosificadora de chochos | Diseño mecánico y simulación |
| Orozco (2024), dosificadora de arroz | Microempresa |
| Acuña (UdeC, 2024), dosificador gravimétrico de azúcar | Pesaje industrial |
| Referencia 03, máquina de transporte de panales (si está el PDF) | Modelo de fundamentos con ecuaciones |

Agregar también `00_Contexto_San_Miguel`.

## Instrucciones fijas (Configurar chat → Personalizado)

```text
Eres asistente de análisis para el capítulo 2 de una tesis de Ingeniería Mecatrónica: dosificadora gravimétrica de harina, azúcar, sal y levadura en polvo para una panadería pequeña. Se usará una celda de carga comercial con su módulo de conversión, un alimentador de tornillo para la harina y tolvas. Analizas cómo otras tesis redactan sus FUNDAMENTOS TEÓRICOS (marco teórico con teoría y ecuaciones). Entrega datos, no redactes texto de tesis.
Reglas:
1. Usa solo las fuentes marcadas. «00_Contexto_San_Miguel» describe el caso; no lo analices como tesis.
2. Junto a cada dato escribe el nombre del archivo entre corchetes.
3. Cada dato lleva su ubicación (capítulo, sección, número de ecuación, tabla o figura). No des números de página salvo que estén impresos.
4. Las citas textuales son cortas (máximo 20 palabras, idioma original).
5. Si algo no aparece, escribe «no reporta». No completes con conocimiento general.
6. Marca como INFERENCIA todo lo que no sea literal.
7. Responde en español, en tablas, sin introducción. Termina siempre con «VACÍOS».
```

## Prompt 1. Inventario de fundamentos por tesis

Marcar una tesis a la vez (o de dos en dos) para que no mezcle.

```text
Para la tesis marcada, haz el inventario de su marco teórico o fundamentos teóricos.
Tabla A — Estructura: título de cada sección y subsección de fundamentos, en orden, con su extensión aproximada (párrafos o páginas impresas si figuran).
Tabla B — Ecuaciones: una fila por ecuación de los fundamentos con: número, qué calcula, área (tolva, tornillo o alimentador, esfuerzos o elementos de máquina, motor, celda de carga, acondicionamiento o conversión, filtrado, control, otra), fuente citada para la ecuación con su AÑO, y si la tesis la APLICA después en el diseño o cálculo (sí/no; capítulo y sección donde la aplica, y qué dimensiona con ella).
Tabla C — Celda de carga: ¿explica la teoría de galgas y puente de Wheatstone, o solo los criterios para seleccionar una celda comercial? Lista los criterios de selección que usa (capacidad, sensibilidad, clase, número de divisiones, factor de seguridad, número de celdas, otro), con la ecuación si la hay, y el modelo de celda y de módulo (por ejemplo HX711) que selecciona.
Tabla D — Mecánica: qué fundamentos de tolva, tornillo, motor y esfuerzos presenta (flexión, torsión, eje, pernos, soldadura, pandeo, fatiga, otro) y qué pieza calcula con cada uno.
Tabla E — Conceptos presentados que NO se usan en el diseño.
VACÍOS.
```

## Prompt 2. Comparación entre tesis

Marcar todas las tesis.

```text
Con todas las tesis marcadas, arma una matriz: filas = fundamento o ecuación (agrupa las equivalentes aunque cambie la notación), columnas = tesis; en cada celda «P» si se presenta, «P+A» si se presenta y se aplica en el diseño, vacío si no aparece.
Debajo:
1. Fundamentos presentes en 3 o más tesis.
2. Fundamentos que se presentan y casi nunca se aplican.
3. Cómo tratan la celda de carga comercial: cuántas desarrollan la teoría de galgas y cuántas solo la selección.
4. Qué esfuerzos o elementos de máquina calculan las tesis con tolva y tornillo.
VACÍOS.
```

## Prompt 3. Antigüedad de las fuentes de los fundamentos

Marcar todas las tesis.

```text
Lista los libros, normas y artículos que cada tesis cita en sus fundamentos teóricos: autor, título, año y edición (si figura), y qué concepto respalda. Luego indica:
1. Año más antiguo y más reciente citado en fundamentos por cada tesis.
2. Cuántas citan trabajos originales anteriores a 2000 (por ejemplo Jenike, Beverloo) y si los citan directamente o a través de un libro reciente.
3. Libros que se repiten entre tesis (por ejemplo Mott, Budynas/Shigley, Hibbeler, CEMA, Schulze), con edición y año.
VACÍOS.
```

## Prompt 4. Modelo de redacción de un fundamento

Marcar las dos tesis con fundamentos más completos según el Prompt 2.

```text
Elige en cada tesis marcada un fundamento con ecuación que luego se aplica en el diseño. Describe su secuencia de presentación (por ejemplo: definición con cita → figura → ecuación numerada → variables con unidades → criterio de aplicación → remisión al diseño), con citas cortas de máximo 20 palabras como ejemplo de cada paso. Indica cómo presentan las variables y unidades, y si incluyen tablas de coeficientes o valores típicos.
VACÍOS.
```

## Después

Pegar las salidas a Claude con la primera línea `FUNDAMENTOS TESIS SIMILARES`.
Con eso se arma la matriz «cálculo del capítulo 3 → fundamento» y se
reescriben 2.6.4 y 2.6.5.
