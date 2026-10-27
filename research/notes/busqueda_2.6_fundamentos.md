# Búsqueda para 2.6 Fundamentos teóricos (26/10/2026)

**Criterio (plantilla y `PROFESSOR_NOTES.md`):** solo la teoría, las ecuaciones y los métodos que se aplicarán en el capítulo 3 o en el marco práctico. Sin conceptos básicos de ciencias exactas. Patrón por concepto: definición con cita → figura → ecuación numerada → variables con unidades → uso en el diseño.

**Tipo de fuente:** libros del área, normas y artículos fundamentales, sin límite de año. Las tesis regionales (Orozco, Challco, Laime, Moya, Chiliguana, Murillo) sirven solo como patrón: su marco teórico cita páginas web y, como libros, Shigley, Mott y Perry.

**Herramientas:** OpenAlex y Crossref (DOI verificados). Consensus no tenía sesión abierta en el navegador interno.

## Fuentes por subsección

| Sub. | Concepto que se aplicará | Uso en el diseño | Fuente | DOI o acceso |
|---|---|---|---|---|
| 2.6.1 | Lista de requerimientos y matriz de selección ponderada | Objetivo 1 y selección de alternativas abiertas en `A-004` | Pahl, Beitz et al., *Engineering Design: A Systematic Approach* (3.ª ed., Springer, 2007) | 10.1007/978-1-84628-319-2 |
| 2.6.1 | Ídem, en español | Ídem | Ulrich y Eppinger, *Diseño y desarrollo de productos* (McGraw-Hill) | Biblioteca UCB, por confirmar |
| 2.6.2 | Porcentaje panadero y función de cada insumo | Objetivo 2: convertir la receta en consignas | Cauvain, *Technology of Breadmaking* (3.ª ed., Springer, 2015) | 10.1007/978-3-319-14687-4 |
| 2.6.2 | Efecto de la variación de la sal | Tolerancia de la sal | Lynch et al. (2009), *Food Res. Int.*; Belz et al. (2012), *Crit. Rev. Food Sci. Nutr.* | 10.1016/j.foodres.2009.03.014; 10.1080/10408398.2010.502265 |
| 2.6.2 | Efecto de la variación del azúcar | Tolerancia del azúcar | Dongdong et al. (2023), *Int. J. Food Sci. Technol.* | 10.1111/ijfs.16291 |
| 2.6.2 | Efecto de la levadura en la producción de gas | Tolerancia de la levadura | Verheyen et al. (2015), *Food Res. Int.* | 10.1016/j.foodres.2015.08.013 |
| 2.6.2 | Fluidez de la harina con la humedad | Criterio de tolva y alimentador en clima húmedo | Kamath et al. (1994), *Powder Technol.*; Guan et al. (2009), *J. Food Eng.*; Siliveru et al. (2016), *J. Sci. Food Agric.* | 10.1016/0032-5910(94)02888-5; 10.1016/j.jfoodeng.2009.03.013; 10.1002/jsfa.8038 |
| 2.6.2 | Fluidez y densidad de azúcar y sal | Ídem para insumos menores | dos Santos et al. (2017) y Suhag et al. (2024), ya en el `.bib` | — |
| 2.6.3 | Vocabulario: exactitud, error, repetibilidad, resolución | Definir las variables de evaluación | JCGM 200:2012 (VIM) | Gratuito, bipm.org |
| 2.6.3 | Incertidumbre de medición | Evaluar el prototipo | JCGM 100:2008 (GUM) | Gratuito, bipm.org |
| 2.6.3 | Clases de exactitud y desviación máxima admisible en llenado gravimétrico | Objetivo 2: tolerancia de referencia | OIML R 61-1 (2017) | Gratuito, oiml.org |
| 2.6.3 | Instrumentos de pesaje no automático | Balanza de referencia de las pruebas | OIML R 76-1 (2006) | Gratuito, oiml.org |
| 2.6.3 | Clases de celdas de carga | Selección de la celda | OIML R 60 (2017) | Gratuito, oiml.org |
| 2.6.4 | Galga, puente de Wheatstone, sensibilidad en mV/V y compensación térmica | Selección y montaje de la celda | Hoffmann, *An Introduction to Stress Analysis and Transducer Design using Strain Gauges* (HBM) | PDF gratuito de HBM |
| 2.6.4 | Acondicionamiento: amplificación, conversión A/D, filtrado | Diseño electrónico (HX711 u otro) | Pallás-Areny, *Sensores y acondicionadores de señal* (Marcombo); Fraden, *Handbook of Modern Sensors* (5.ª ed., Springer, 2016) | Biblioteca UCB; 10.1007/978-3-319-19303-8 |
| 2.6.4 | Filtrado de la señal de pesaje | Filtro del controlador | Choi (2017), Zengin (2025), Zhuang (2024), Richiedei (2018), ya en el `.bib` | — |
| 2.6.5 | Ensayo de corte, función de flujo y bóveda (método de Jenike) | Ángulo y salida de la tolva | Schulze, *Powders and Bulk Solids* (2.ª ed., Springer, 2021) | 10.1007/978-3-030-76720-4 |
| 2.6.5 | Caudal del tornillo: paso, llenado y velocidad | Dimensionar el tornillo | Bates, *Guide to the Design, Selection, and Application of Screw Feeders* (2000) | Libro, por conseguir |
| 2.6.5 | Torque y potencia del tornillo | Seleccionar el motor | Yu y Arnold (1997), *Powder Technol.* | 10.1016/s0032-5910(97)03265-8 |
| 2.6.5 | Eje, rodamientos y transmisión | Verificar los elementos | Budynas y Nisbett, *Diseño en ingeniería mecánica de Shigley* | Biblioteca UCB |
| 2.6.6 | Modelo del motor y función de transferencia, PID | Modelo y control (`D-011`) | Ogata, *Ingeniería de control moderna* (5.ª ed., Pearson); Åström y Murray, *Feedback Systems* (2.ª ed., 2021) | Biblioteca UCB; PDF gratuito de los autores |
| 2.6.6 | Celda como masa, resorte y amortiguador; columna en caída | Modelo del pesaje y del corte | Wang y Pan (2025); Bukreev et al. (2014), ya en el `.bib` | — |

## Consensus (27/10/2026, tres preguntas)

1. **Variación de sal, levadura y azúcar en el pan.** Fuentes útiles:
   - Struyf et al. (2017), revisión sobre levadura y masa, *Compr. Rev. Food Sci. Food Saf.*
   - Xie et al. (2023), sacarosa: el 2 % mejora el leudado y el 6 a 10 % inhibe la levadura.
   - Timmermans et al. (2022), azúcar y fermentación, *Foods*.
   - Carcea et al. (2020), sal en masa de trigo blando, *Foods*.
   - Chen et al. (2019), sal y gluten, *Food Chem.*
   - Lynch et al. (2009), reducción de sal de 1,2 a 0,6 % sin efecto significativo.

   Según la síntesis de Consensus, el intervalo usual de sal es de 1,0 a 2,0 % sobre harina y el de azúcar de 2 a 4 %. Verificar en los PDF.
2. **Tolerancia de pesaje en panificación.** La síntesis afirma «tolerancias menores a ±2 % para insumos menores», pero la cifra proviene de Rumapea (2026), una dosificadora, y no de una norma. **No usar.** Ninguna fuente fija la tolerancia por insumo. Útil: Lo Monaco et al. (2025), revisión del efecto del proceso y los ingredientes, *Ital. J. Food Sci.*
3. **Caudal, torque y potencia del tornillo con polvos cohesivos.** Fuentes útiles:
   - Yu y Arnold (1997), torque.
   - Karwat et al. (2021), caudal con coeficiente de llenado, *Eksploatacja i Niezawodność*.
   - Hou et al. (2014), DEM de partículas cohesivas en tornillo, *Powder Technol.*
   - Chen et al. (2024), acople tolva–tornillo, *Agriculture*.

**Consecuencia para 2.6.2:** la tolerancia por insumo se deriva, no se cita. Se combinan el intervalo admisible de cada insumo en la fórmula (Cauvain, Struyf, Lynch, Xie) y las clases de exactitud de OIML R 61-1. Es una derivación propia y queda abierta en `A-004`.

## Cuadernos de NotebookLM y PDF

| Cuaderno | PDF que ya tienes | PDF por descargar |
|---|---|---|
| `Cap2-2.6.2 Insumos` | Cauvain 2015 (`978-3-319-14687-4.pdf`), *Wheat and Flour Testing Methods* | Struyf 2017, Xie 2023, Timmermans 2022, Carcea 2020, Lynch 2009, Lo Monaco 2025, Kamath 1994, Guan 2009 |
| `Cap2-2.6.3 Metrología` | OIML R 61-1 (`r061-1-e17.pdf`) | OIML R 76-1, OIML R 60, JCGM 200 (VIM), JCGM 100 (GUM) |
| `Cap2-2.6.4 Celdas` | Choi 2017, Zhuang 2024, Richiedei 2018 (carpeta 24) | Hoffmann (HBM), Fraden 2016 (capítulos de galgas e interfaz), Zengin 2025 |
| `Cap2-2.6.5 Tolva y tornillo` | Xu 2021, Su 2017 (carpeta 23) | Schulze 2021 (capítulos de ensayo de corte y diseño de tolvas), Yu y Arnold 1997, Karwat 2021, Hou 2014 |
| `Cap2-2.6.6 Modelo y control` | Bukreev 2014, Wang 2025 (carpeta 25) | Åström y Murray, *Feedback Systems*; capítulos de modelado y PID de Ogata |

## Pendientes

- Descargar las normas OIML y JCGM y el PDF de HBM (gratuitos).
- Confirmar en la biblioteca de la UCB: Ogata, Shigley, Pallás-Areny, Ulrich y Eppinger, Schulze y Bates.
- Si se inicia sesión en Consensus o Elicit, repetir la búsqueda de 2.6.2 (tolerancia de sal, azúcar y levadura en panificación).
- La ecuación de la columna en caída (Bukreev) y la tolerancia de Bulatov 2021b (±0,1 a 2 % y ±3 %) pasan del estado del arte a 2.6.6 y 2.6.2.
