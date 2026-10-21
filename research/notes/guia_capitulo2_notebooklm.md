# Guía de trabajo del capítulo 2 con NotebookLM

**Fecha:** 2026-10-14
**Estado:** plan vigente, ajustado a la estructura adoptada el 14/10/2026 y, desde el 17/10/2026, a la búsqueda solo en inglés (`context/THESIS_STRUCTURE.md`). El perfil desarrolla los objetivos 1 a 3 (`D-014`).

Método: el capítulo se redacta por secciones. NotebookLM analiza los PDF, el estudiante pega la salida en Claude y Claude redacta en `docs/thesis/chapters/marcoteorico.tex`.

---

## 1. Estructura del capítulo

| Sección | Contenido | Cierre |
|---|---|---|
| 2.1 Estado del arte | Bases, cadenas, periodo y organización | — |
| 2.2 Dosificadoras de ingredientes | Soluciones integrales académicas y de mercado, de lo general a lo más cercano a San Miguel | Arquitecturas adoptadas o descartadas; aporte diferencial |
| 2.3 Área mecánica | 2.3.1 almacenamiento (tolvas); 2.3.2 mecanismos de alimentación | Mecanismos adoptados o descartados (objetivo 3) |
| 2.4 Área de medición gravimétrica | 2.4.1 principio de medición (volumétrico como contraste, por lotes, pérdida de peso); 2.4.2 sensores de peso | Principio y sensor adoptados (objetivo 3) |
| 2.5 Área de control | 2.5.1 estrategias de corte; 2.5.2 control realimentado | Estrategias candidatas para el objetivo 4 |
| 2.6 Fundamentos teóricos | 2.6.1 a 2.6.6 (sección 4) | — |
| 2.7 Conclusión | Enfoques adoptados y descartados, aporte diferencial | — |

Un antecedente se describe completo una sola vez (2.2); en 2.3 a 2.5 se toma solo lo que aporta a cada área.

---

## 2. Paso a paso

Claude ya hizo un primer filtro por título y resumen: `research/notes/cribado_cap2_titulo_resumen.md`. NotebookLM lo repite con el texto completo para confirmarlo, aplica el segundo filtro y hace las fichas y la síntesis.

### Paso 0. Preparación (una sola vez)

1. Crear **un cuaderno por sección**. El plan gratuito admite unas 50 fuentes por cuaderno, y un cuaderno pequeño responde con menos mezcla:

| Cuaderno | Fuentes |
|---|---|
| `Cap2-2.2 Dosificadoras` | Máquinas completas, tesis, patentes y productos de mercado |
| `Cap2-2.3 Mecánica` | Tolvas y alimentadores |
| `Cap2-2.4 Medición` | Principio de medición y celdas de carga |
| `Cap2-2.5 Control` | Estrategias de corte, control y pesaje dinámico |
| `Cap2-2.6 Fundamentos` | Libros, normas y artículos de base. Si pasa de 50 fuentes, dividir en 2.6A (2.6.1 a 2.6.3) y 2.6B (2.6.4 a 2.6.6) |

2. En cada cuaderno, abrir «Configurar chat», elegir personalizado y pegar las **Instrucciones fijas** (3.1).
3. Subir a cada cuaderno el texto de 3.2 con el nombre `00_Contexto_San_Miguel`.

### Paso 1. Descargar

1. Descargar las fuentes **A** de la sección en el archivo de cribado.
2. Nombrar cada PDF como `PP_AAAA_Autor_TituloCorto.pdf` (PP = 22, 23, 24 o 25). NotebookLM cita con ese nombre; Claude genera la clave BibTeX al redactar.
3. Si una fuente aporta a dos secciones, subirla a los dos cuadernos.
4. Páginas de fabricantes: imprimir a PDF con la fecha visible.
5. Guardar los PDF en una carpeta sincronizada con la nube.

### Paso 2. Analizar en NotebookLM

1. **Prompt 1, Cribado** con todas las fuentes nuevas: confirma el primer filtro y aplica el segundo. Borrar del cuaderno las que salgan «descartar».
2. **Prompt 2A, Ficha** (secciones 2.2 a 2.5) o **Prompt 2B, Ficha de fundamento** (2.6), con 3 a 5 fuentes marcadas por consulta.
3. **Prompt 3, Síntesis**, con todas las fuentes del cuaderno y las preguntas de la sección (sección 4).
4. Revisar en el PDF toda cifra que venga de una tabla o figura.

### Paso 3. Pegar en Claude

Pegar las fichas y la síntesis con esta primera línea:

```text
SECCIÓN: [2.x] | Fuentes: [lista de archivos] | Fecha: [dd/mm/aaaa]
```

### Paso 4. Redacción y auditoría

1. Claude redacta la sección en `marcoteorico.tex` y devuelve el texto plano con las claves entre corchetes.
2. En el mismo cuaderno, agregar el borrador como fuente («Texto copiado», nombre `99_Borrador_2.x`), correr el **Prompt 4, Auditoría** con todas las fuentes marcadas y pegar el resultado en Claude, que corrige y compila. Borrar la fuente del borrador al terminar.

Al terminar 2.2 a 2.6, Claude redacta 2.1 y 2.7 con las síntesis ya pegadas.

---

## 3. Textos para NotebookLM

### 3.1 Instrucciones fijas (Configurar chat, en cada cuaderno)

```text
Eres asistente de extracción para el capítulo 2 de una tesis de Ingeniería Mecatrónica: dosificadora gravimétrica de harina para una panadería pequeña. Entrega datos, no redactes texto de tesis.
Reglas:
1. Usa solo las fuentes marcadas. «00_Contexto_San_Miguel» describe el caso; no lo cites como fuente.
2. Junto a cada dato escribe el nombre del archivo entre corchetes, por ejemplo [22_2026_Rumapea_FlourDosing].
3. Cada dato lleva: valor y unidades tal como aparecen, cita textual corta (máximo 20 palabras, en el idioma original) y dónde está (sección, tabla o figura). No des números de página salvo que estén impresos.
4. Si un dato no aparece, escribe «no reporta». No estimes, no conviertas unidades y no completes con conocimiento general.
5. Marca como INFERENCIA todo lo que no sea literal de la fuente.
6. Si dos fuentes se contradicen, muestra ambas.
7. Responde en español, en tablas o listas, sin introducción. Termina siempre con «VACÍOS»: lo que se preguntó y ninguna fuente responde.
```

### 3.2 Fuente `00_Contexto_San_Miguel`

```text
CASO (no es bibliografía): Panadería San Miguel, Santa Cruz de la Sierra, Bolivia. Panadería pequeña; la harina se dosifica a mano con balanza digital.
Medición de campo (7 ciclos, 02/09/2026 y 05/09/2026): 5,000 a 8,000 kg de harina por ciclo; 53,2 a 66,6 s por ciclo; diferencia neta de +143 g sobre 48,000 kg de cantidad objetivo.
Reportado por el estudiante (trazabilidad pendiente): azúcar de 150 a 600 g, sal de 100 a 150 g y levadura fresca prensada de 70 a 150 g por ciclo.
Solución adoptada: dosificación gravimétrica por lotes (almacenamiento, alimentación, pesaje, control, descarga).
Sin decidir: mecanismo de alimentación, sensores, controlador, estrategia de control, tolerancias y capacidad. No propongas cerrarlos.
```

### 3.3 Prompt 1, Cribado (primer y segundo filtro)

```text
CRIBADO. Para cada fuente marcada, una fila:
| Archivo | Tipo (artículo / congreso / tesis / patente / ficha de fabricante / libro / norma) | Año | ¿2016 a 2026? | ¿Dosifica o trata sólidos secos? | ¿Reporta un dato (exactitud, tiempo, rango o costo)? Cuál | Idioma del texto | ¿Texto completo legible? | Qué hace, en una línea | Insumo y escala | Usar o descartar | Motivo |
Regla: «usar» solo si cumple las tres primeras condiciones (año, sólidos secos, dato). Una fuente anterior a 2016 solo se usa como fundamento; indícalo en el motivo.
```

### 3.4 Prompt 2A, Ficha (secciones 2.2 a 2.5; 3 a 5 fuentes)

```text
FICHA. Una ficha por fuente marcada, separadas por «=== [archivo] ===»:
1. Referencia: autores, año, título, revista o institución, DOI o número de patente.
2. Qué construyó o estudió, y con qué evidencia (ensayo, simulación, diseño sin ensayo, catálogo).
3. Componentes: tolva, alimentador, accionamiento, sensor de peso, acondicionamiento de señal, controlador.
4. Principio de medición y estrategia de corte o control.
5. Insumo y escala (masa por lote o caudal).
6. Resultados: exactitud o error (a qué consigna y con cuántos ensayos), tiempo por lote, costo con moneda y fecha.
7. Ventajas y limitaciones que declaran los autores.
8. INFERENCIA: qué limita su uso en San Miguel (escala, insumo, costo).
```

### 3.5 Prompt 2B, Ficha de fundamento (sección 2.6)

```text
FICHA DE FUNDAMENTO. Tema: [TEMA]. Con las fuentes marcadas:
1. Definiciones de los conceptos del tema.
2. Ecuaciones, copiadas tal como aparecen: número, qué calcula, cada variable con su significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones.
4. Condiciones de validez y limitaciones.
5. Figura o tabla útil para explicar el tema (número y título).
```

### 3.6 Prompt 3, Síntesis de la sección

```text
SÍNTESIS DE LA SECCIÓN [2.x]. Con las fuentes marcadas:
A. Tabla: | Archivo | Qué hizo | Insumo y escala | Resultado numérico principal | Limitación declarada |
B. Alternativas que aparecen (tipos de tolva, alimentador, sensor o control): ventajas y desventajas según las fuentes.
C. INFERENCIA: cuáles convienen o no para San Miguel y por qué, con los archivos que lo respaldan.
D. Respuestas a estas preguntas, cada una con archivo, cita y ubicación:
[PREGUNTAS DE LA SECCIÓN]
E. VACÍOS.
```

### 3.7 Prompt 4, Auditoría

El chat de NotebookLM limita el largo del mensaje: el borrador entra como fuente `99_Borrador_2.x` y el prompt queda corto.

```text
AUDITORÍA. «99_Borrador_2.x» es un borrador, no evidencia. Contrasta cada cifra y afirmación técnica del borrador con el archivo citado entre corchetes. Reporta SOLO las discrepancias:
| N.º | Afirmación del borrador | Archivo | La fuente dice (cita ≤15 palabras + ubicación) | Corrección |
Revisa valor, unidad, condición de ensayo (consigna, n.º de ensayos, insumo) y autor. Omite lo marcado [fuente comercial fuera del cuaderno]. No listes lo que coincide; no evalúes estilo. Cierra con «Sin observación: N afirmaciones».
```

---

## 4. Preguntas del Prompt 3 por sección

| Sección | Preguntas |
|---|---|
| 2.2 Dosificadoras | ¿Qué arquitectura usa cada máquina? ¿Con qué escala, exactitud, tiempo y costo? ¿Alguna dosifica harina entre 5 y 8 kg, o insumos menores entre 70 y 600 g? En productos: fabricante, país, rango, exactitud declarada, capacidad de tolva y precio con fecha. |
| 2.3 Mecánica | ¿Qué tolvas y alimentadores se usan con harina o polvos similares? ¿Qué caudal dan, qué fallas de flujo presentan (puentes, adherencia, pulsación) y cómo se limpian? |
| 2.4 Medición | ¿Cuánto error produce la variación de densidad aparente en la dosificación volumétrica? ¿Cuándo conviene pesar por lotes y cuándo por pérdida de peso? ¿Qué celdas de carga usan y qué errores reportan (vibración, impacto, ruido, temperatura)? |
| 2.5 Control | ¿Cómo deciden cuándo cortar la alimentación? ¿Cómo compensan el material que sigue cayendo? ¿Qué control usan (dos etapas, PID, aprendizaje iterativo) y qué error final logran? |
| 2.6 Fundamentos | Para la Ficha de fundamento, el [TEMA] es uno de: metodología de diseño; insumos y tolerancias; metrología y normativa de pesaje; celdas de carga y acondicionamiento; tolvas y alimentadores; modelamiento dinámico y control. |

---

## 5. Orden de las secciones

1. **2.2 Dosificadoras de ingredientes y mercado** (Rumapea, Humaira, Farihin y Venkataramanan ya identificados).
2. **2.6.2, 2.6.3 y 2.6.4** en paralelo: tolerancias (objetivo 2), metrología y celdas de carga (normas OIML y JCGM gratuitas; indicación directa del docente).
3. **2.3 Mecánica y 2.6.5** (objetivo 3).
4. **2.4 Medición gravimétrica** (después del curso de bibliotecas del 15/10/2026, por el acceso a Elsevier).
5. **2.6.1 Metodología de diseño** (objetivo 1).
6. **2.5 Control y 2.6.6** (objetivo 4, breve).
7. **2.1 y 2.7**.

---

## 6. Candidatos ya identificados

Metadatos (autor, año, revista, volumen) comprobados en Crossref el 13/10/2026; los agregados el 18/10/2026, en OpenAlex. **El contenido no está leído**: lo confirman las fichas. Cada fuente figura en su sección principal.

### 2.2 Dosificadoras de ingredientes

| Referencia | DOI o dato |
|---|---|
| Rumapea et al. (2026) — en el `.bib` | 10.30656/intech.v12i1.12030 |
| Humaira et al. (2024) — en el `.bib` | 10.33795/elkolind.v11i1.3298 |
| Farihin et al. (2021) — en el `.bib` | 10.12962/j23373539.v10i2.68131 |
| Venkataramanan et al. (2023), e-Prime 6 | 10.1016/j.prime.2023.100322 |
| Muhammad et al. (2025), JAIEA 5(1) | 10.59934/jaiea.v5i1.1222 |
| Mariam et al. (2024), JIKTIF 1(1) | 10.71466/jiktif.v1i1.25 |
| Bulatov et al. (2021), Eng. Rural Development 20 | 10.22616/ERDev.2021.20.TF043 |
| Challco Capajeiqui (2024), UMSA, dosificadora de pan molido | Verificada; confirmar la grafía en la portada |
| Moya y Ortiz (2016), UTN, dosificador semiautomático por tornillo sin fin para harina Uchu Jacu (registro 7487, 04 MEC 105; artículo en FICA 1(1)) | Por abrir: confirmar si pesa y si 2016 entra en el periodo |
| Orozco Villa (2024), UTN, dosificadora para arroz enfocada a microempresas (registro 15716, 04 MEC 539) | Por abrir: confirmar principio, alimentador y exactitud |
| Tesis de ESPOL (2016), rediseño de una dosificadora de cereal de volumétrica a gravimétrica (D-CD88349) | Por abrir |
| Klitschko, O. O. (2023), *Automated dosing system for loose components in the bakery industry*, Central Ukrainian National Technical University | En pausa: está en ucraniano |
| Galina, M. (2024), *Home Industrial-Based Automatic Granulated Food Weighing Machine*, Jurnal INFOTEL | 10.20895/infotel.v16i3.1168 |
| Valendi y Risfendra (2025), *Microcontroller-based Automatic Granule Weighing device with HMI*, JIAEE | 10.24036/jiaee.v2.i2.pp227-235 |
| Suryana et al. (2019), dosificador de arroz con celda de carga y NodeMCU, ICCED | 10.1109/icced46541.2019.9161142 |
| Widya et al. (2023), diseño metrológico de un dosificador de arroz con celda de carga, AIP Conf. Proc. | 10.1063/5.0120325 |
| Sansyah et al. (2024), pesaje y empaque automático de azúcar, AIP Conf. Proc. | 10.1063/5.0217691 |
| ZONESUN ZS-FM710 y ZS-FM750F | Con precio |
| Norma-SB, Agro-Simo-Mashbud | Sin precio publicado |
| Trust-Long y RUICHUAN (Alibaba) — en el `.bib` | Con precio |
| AZO, CEPI, Agriflex, Daxner, Zeppelin, Matcon | Industriales; pedir ficha y cotización |

Las tesis de UMSA, UTN y ESPOL vuelven a estar activas por la excepción para tesis regionales (sección 7.1). Humaira y Farihin (en indonesio) se mantienen porque ya se citan en el capítulo 1.

### 2.3 Mecánica

| Referencia | DOI |
|---|---|
| Xu et al. (2021), tornillo de paso variable para harina de trigo | 10.35633/inmateh-64-42 |
| Pezo et al. (2025), revisión de transportadores de tornillo | 10.1016/j.powtec.2025.121040 |
| Shen et al. (2022), electricidad estática en alimentación por tornillo | 10.1111/jfpe.14150 |
| Gitiaray et al. (2023), llenadora de tornillo (simulación con granos de pimienta) | 10.1080/02726351.2022.2029989 |
| Fathollahi et al. (2024), diseño de tolva | 10.1007/s12247-024-09858-2 |
| Hörmann-Kincses et al. (2022), alimentabilidad de polvos | 10.1016/j.ijpharm.2022.122364 |
| Bianchini et al. (2016), descarga de harina de maíz en tolva aireada | 10.1016/j.powtec.2016.05.009 |
| Díaz-Heras et al. (2026), propiedades de harina y azúcar en polvo y diseño de tolvas | 10.1007/s13367-026-00171-7 |
| Chandravanshi y Mukhopadhyay (2017), dinámica del alimentador vibratorio | 10.1016/j.measurement.2017.01.031 |
| Ruiz Carcel et al. (2018), caudal de polvo en alimentador de tornillo por emisión acústica | 10.1016/j.powtec.2018.05.029 |

### 2.4 Medición gravimétrica

| Referencia | DOI o número |
|---|---|
| Kruppa et al. (2023), densidad medida en línea en dosificación por tornillo | 10.1002/pts.2703 |
| Rusin et al. (2022), alimentador volumétrico de alta precisión | 10.1134/S0021894422030178 |
| Bostijn et al. (2019), comportamiento volumétrico y gravimétrico | 10.1016/j.ijpharm.2018.12.066 |
| Blackshields y Crean (2018), revisión de alimentación continua | 10.1080/10837450.2017.1339197 |
| Santamaría Alvarez et al. (2024), efecto de la recarga | 10.1016/j.powtec.2024.119501 |
| Schneider et al. (2024), selección de configuración gravimétrica | 10.1016/j.ijpharm.2024.124903 |
| Wang et al. (2017), desempeño según fluidez | 10.1016/j.powtec.2016.12.010 |
| Yadav et al. (2019); Li et al. (2020); Bekaert et al. (2021); Shier et al. (2022) | 10.1016/j.powtec.2019.01.071; 10.1007/s12247-019-09394-4; 10.1016/j.ijpharm.2021.120603; 10.1016/j.ijpharm.2022.122071 |
| Choi (2017), ruido de la celda de carga (pesadora de banda) | 10.1155/2017/1524782 |
| WO 2017/174367 A1 (Robert Bosch), sensor de densidad en el tornillo | Patente |
| US 10,473,513 B2 (Rockwool), pérdida de peso con tornillo | Patente |

Pérdida de peso: usar 3 o 4 como contraste, no las once.

### 2.5 Control

| Referencia | DOI o número |
|---|---|
| Alsayad et al. (2017), alimentación en dos etapas | 10.1063/1.5009882 |
| You y An (2018), aprendizaje iterativo en pesaje por lotes | 10.23919/ChiCC.2018.8483962 |
| Hanson (2018), control de alimentadores por pérdida de peso | 10.1016/j.powtec.2018.03.027 |
| EP 3 242 113 A1 (Tetra Laval, 2017), compensación del material en caída | Patente |
| US 9,327,850 B2 (3P Innovation, 2016; prioridad 2010), llenado grueso y fino | Patente; fecha en el límite |
| Huang et al. (2017), aprendizaje iterativo en pesaje por lotes de aleaciones, CCC | 10.23919/chicc.2017.8027860 |
| Shandybina et al. (2022), dosificador por peso de control automático | 10.1007/978-3-030-85233-7_32 |
| Niedźwiecki et al. (2016), pesaje dinámico por identificación de sistemas | 10.1016/j.ymssp.2016.04.007 |
| Niedźwiecki y Pietrzak (2016), pesaje dinámico con modelo FIR, IEEE TIM | 10.1109/tim.2016.2575180 |
| Pitawala (2020), pesaje dinámico con filtro de Kalman | 10.1088/1742-6596/1489/1/012017 |

### 2.6 Fundamentos

| Subsección | Fuentes |
|---|---|
| 2.6.1 Metodología de diseño | Falta: VDI 2221, Pahl y Beitz |
| 2.6.2 Insumos y tolerancias | Cauvain (2015) y Siliveru et al. (2017), en el `.bib`; Juliano y Barbosa-Cánovas (2010), 10.1146/annurev.food.102308.124155; Bian et al. (2015), 10.1016/j.jcs.2015.03.010; Teunou et al. (1999), 10.1016/S0260-8774(98)00140-X. Falta: efecto de la variación de sal, azúcar y levadura |
| 2.6.3 Metrología y normativa | JCGM 200:2012 y OIML R 61-1:2017, en el `.bib`; OIML R 76-1:2006; OIML R 60:2021 |
| 2.6.4 Celdas de carga | OIML R 60:2021; manuales de HBK, Mettler Toledo y Rice Lake; hoja de datos HX711 |
| 2.6.5 Almacenamiento y alimentación | Schulze (2021), 10.1007/978-3-030-76720-4; Jenike (1964), Bulletin 123; Fitzpatrick et al. (2004), 10.1016/S0260-8774(03)00147-X; Roberts (1999), 10.1016/S0032-5910(99)00039-X; Yu y Arnold (1997), 10.1016/S0032-5910(97)03265-8 |
| 2.6.6 Modelamiento y control | Hopkins (2006), en el `.bib`; Tahir et al. (2020), 10.1016/j.powtec.2019.09.071; Engisch y Muzzio (2012), 10.1016/j.powtec.2012.05.058; Johnson et al. (2022), 10.1016/j.ijpharm.2022.121776 |

Lim y Antony (2019, en el `.bib`) servía para la evaluación experimental; queda sin uso en el perfil (`D-014`).

---

## 7. Búsqueda por sección (fase actual: solo en inglés)

**Cadenas probadas el 18/10/2026** en OpenAlex con búsqueda en el título, salvo las de levadura fresca y galgas extensométricas. En Google Scholar saldrán más resultados.

**Cómo usar este apartado.** 7.1 es el procedimiento que se repite en cada búsqueda: dónde entrar, dónde pegar, qué filtros poner y qué hacer con los resultados. De 7.2 a 7.6 están las cadenas listas para copiar, una sección del capítulo por apartado.

Para buscar: elige la sección según el orden de la sección 5, abre su apartado (7.2 a 7.6), copia una cadena y sigue los pasos de 7.1 en la herramienta indicada. Método adaptado de la infografía «Búsqueda de información científica y algunos tips de redacción» (ZGomez).

### 7.1 Cómo buscar (se repite en cada búsqueda)

#### Paso A. Abrir la herramienta y pegar la cadena

| Herramienta | Dirección | Dónde pegar | Filtros que hay que poner |
|---|---|---|---|
| Google Scholar | scholar.google.com | Caja de búsqueda principal | Menú izquierdo: «Intervalo específico» 2016–2026; desmarcar «incluir patentes» e «incluir citas» |
| Scopus | Biblioteca virtual de la UCB (confirmar acceso en el curso del 15/10) | «Advanced document search» | Document type: Article, Conference paper, Review. Language: English. El año ya va en la cadena |
| IEEE Xplore | ieeexplore.ieee.org | «Advanced Search» → pestaña «Command Search» | Year: 2016–2026 |
| ScienceDirect | sciencedirect.com | «Advanced search» → «Find articles with these terms» | Years: 2016–2026. No acepta `*` ni más de 8 operadores |
| OpenAlex | openalex.org | Caja de búsqueda | Año 2016–2026; acceso abierto para encontrar PDF gratuitos |
| Google Patents | patents.google.com | Caja de búsqueda | «Before/After»: Priority, after 2016-01-01. Language: English |
| OATD (tesis) | oatd.org | Caja de búsqueda | Años 2016–2026 |
| Google (mercado) | google.com | Caja de búsqueda | Ninguno; abrir solo sitios de fabricantes |

Pegar **una cadena por búsqueda**, no el bloque entero.

#### Paso B. Primer filtro: título y resumen

Leer solo el título y el resumen. Descargar si cumple las tres condiciones:

- es de 2016 a 2026 (o anterior si esa línea tecnológica no cambió, o es fundamento);
- dosifica sólidos secos (polvo o grano);
- reporta al menos un dato: exactitud, tiempo, rango o precio.

Si no hay PDF a la vista (en Google Scholar aparece a la derecha como «[PDF]»), probar la extensión Unpaywall, buscar el título en CORE (core.ac.uk) o pedirlo al autor por ResearchGate.

#### Paso C. Ajustar la búsqueda

En Google Scholar, usar `allintitle:` al inicio de la cadena. Sin él, Scholar busca en el texto completo y palabras como *dosing* o *bakery* traen artículos de medicina o de tecnología de alimentos que no tratan de máquinas.

En Scopus, `AND NOT` se aplica al final de toda la cadena: el filtro de años va antes de `AND NOT`; si va después, queda anulado. En Google Scholar, `allintitle:` falla cuando mezcla frases entre comillas con `OR`: usar palabras sueltas.

| Situación | Qué hacer |
|---|---|
| Más de 200 resultados | Bajar al nivel específico de la escalera, agregar un término o buscar solo en el título (`allintitle:` en Scholar) |
| Menos de 10 resultados | Subir un nivel de la escalera, quitar comillas o agregar sinónimos con `OR` |
| Muchos resultados farmacéuticos | Excluir: `-pharmaceutical` en Scholar; `AND NOT pharmaceutical` en Scopus |
| Encontraste uno muy útil | Abrir «Citado por» (Scholar) o «Cited by» (Scopus) y revisar sus referencias |

#### Paso D. Descargar, renombrar y segundo filtro (qué leer)

1. Renombrar el PDF con su clave BibTeX (sección 2, paso 1). Ese nombre ya contiene año, autor y una palabra del título.
2. Guardarlo en una carpeta sincronizada con la nube y en la PC. Los PDF bibliográficos no se suben a Git.
3. Segundo filtro: no leer el artículo completo. Revisar en este orden y detenerse si no aporta:
   1. **Resumen:** qué máquina o método, qué insumo, qué escala (gramos o kilogramos).
   2. **Figura del sistema** (diagrama o foto): tolva, alimentador, celda de carga, controlador.
   3. **Tabla o gráfica de resultados:** exactitud o error, a qué consigna y con cuántos ensayos.
   4. **Conclusiones:** limitaciones que declaran los autores.
4. Si los puntos 2 o 3 dan un dato para la sección del capítulo, el PDF pasa a NotebookLM. Anotar en el registro, en una línea, qué aporta. Si no, se anota como descartado.

#### Paso E. Anotar en el registro

Pegar esta fila en la celda A1 de la hoja «Registro de búsquedas» y separarla con «Datos → Dividir texto en columnas» (separador: coma):

```text
Fecha,Sección,Herramienta,Cadena,Filtros,Resultados,Descargados (1er filtro),Aceptados (2do filtro),Archivos
```

Con ese registro se redacta la sección 2.1.

#### Operadores (solo para modificar una cadena)

Las cadenas de 7.2 a 7.6 ya traen los operadores. Esta tabla sirve si quieres cambiarlas o armar una propia:

| Operación | Scopus | IEEE Xplore | Google Scholar |
|---|---|---|---|
| Frase exacta | `"load cell"` | `"load cell"` | `"load cell"` |
| Y | `AND` | `AND` | espacio |
| O | `OR` | `OR` | `OR` (en mayúsculas) |
| Excluir | `AND NOT pharmaceutical` | `NOT pharmaceutical` | `-pharmaceutical` |
| Truncar | `weigh*` (weigh, weighing, weigher) | `weigh*` | no trunca: escribir las variantes con `OR` |
| Solo en el título | `TITLE(...)` | campo «Document Title» | `allintitle:` |
| Años | `AND PUBYEAR > 2015` | filtro 2016–2026 | «Intervalo específico» |

#### Qué herramienta usar para cada sección

| Herramienta | Mejor para | Por qué |
|---|---|---|
| Google Scholar (`allintitle:`) | 2.2 dosificadoras | Indexa revistas pequeñas y congresos, donde se publican las máquinas parecidas a la tuya |
| Scopus | 2.3, 2.4 y 2.5 | Revistas indexadas (Powder Technology, Measurement, congresos IEEE). Muchas revistas de 2.2 no están en Scopus: es normal que traiga pocas máquinas |
| IEEE Xplore | 2.4 y 2.5 | Celdas de carga, pesaje dinámico, control y congresos de automatización |
| ScienceDirect | 2.3, 2.4 y 2.6.2 | Powder Technology, Journal of Food Engineering, Journal of Cereal Science |
| OpenAlex | Comprobar una cadena gratis | Busca en título y resumen como Scopus, sin suscripción |
| Connected Papers o ResearchRabbit | Ampliar desde un buen artículo | Semillas: Rumapea (2026), Venkataramanan (2023), Alsayad (2017) |
| Google Patents | 2.2 y 2.5 | Patentes de dosificación por peso desde 2016 |

En Scopus, ordenar por citas sube artículos famosos pero ajenos al tema (redes neuronales, fármacos). Ordenar por relevancia y exigir `"load cell"` o el nombre de la máquina en la cadena.

#### Fuentes en pausa

**Excepción (18/10/2026):** las tesis y proyectos de grado de Bolivia y Latinoamérica se buscan también en español; el docente pidió tesis y las bases en inglés no las indexan. Para los artículos, mientras se busque solo en inglés quedan en pausa SciELO, Dialnet, Redalyc, Garuda, LA Referencia y los repositorios de UMSA, UTN y ESPOL. Microsoft Academic cerró en 2021; su sucesor es OpenAlex. Academia.edu y ResearchGate sirven solo para conseguir el PDF: se cita la versión publicada en la revista.

---

### 7.2 Dosificadoras de ingredientes (2.2) — meta: 10 a 15 académicas y 8 o más fabricantes

**Qué buscar:** máquinas completas que dosifican ingredientes por peso, tesis en inglés, patentes desde 2016 y productos de distintos fabricantes.

**Al leer, fíjate en:** insumo y masa por lote, componentes (tolva, alimentador, celda, controlador), exactitud y a qué consigna, tiempo por lote y costo.

**Escalera de palabras clave** (empezar arriba y bajar):

| Nivel | Términos |
|---|---|
| General | `"batch weighing system"`, `"ingredient dosing system"` |
| Medio | `"automatic dosing" bakery`, `"weighing and dosing" "food powder"` |
| Específico | `"flour dosing" "load cell"`, `"ingredient weighing" bakery automation`, `"micro ingredient dosing"` |

Sinónimos: dosing / metering / batching / weighing; flour / powder / bulk solids; bakery / bread / dough.

**Google Scholar** («Intervalo específico» 2016–2026; una cadena por búsqueda):

```text
allintitle: "load cell" dispenser OR dosing OR weighing OR filling
```
```text
allintitle: dosing flour OR powder OR bakery
```
```text
allintitle: "automatic weighing" rice OR sugar OR flour OR granular OR powder
```
```text
allintitle: "weighing machine" OR "weighing system" rice OR sugar OR flour OR granulated
```
```text
"automated dosing system" bakery
```

**Scopus** (Advanced document search; ordenar por «Relevance», no por citas; filtro Subject area: Engineering):

```text
TITLE-ABS-KEY("load cell" AND (dosing OR dispenser OR "weighing machine" OR "weighing system" OR batching OR filling) AND (flour OR sugar OR rice OR grain OR granular OR powder OR bakery)) AND PUBYEAR > 2015 AND NOT TITLE-ABS-KEY(pharmaceutical OR tablet OR drug)
```
```text
TITLE-ABS-KEY(("weighing and dosing" OR "dosing machine" OR "dosing system" OR "batch weighing" OR "weigh feeder") AND (food OR flour OR bakery OR granular OR "bulk solids")) AND PUBYEAR > 2015 AND NOT TITLE-ABS-KEY(pharmaceutical OR patient OR drug)
```

**OATD** (tesis en inglés):

```text
dosing system load cell powder
```

**Google Patents** (Priority after 2016-01-01; Language: English):

```text
(flour OR powder) dosing "load cell" hopper
```

**Google** (mercado; abrir solo sitios de fabricantes):

```text
"flour dosing system" bakery
```
```text
"ingredient weighing system" bakery
```
```text
"auger filler" weighing powder
```
```text
"micro dosing system" bakery ingredients
```
```text
"weigh batching system" powder
```

---

### 7.3 Mecánica (2.3) — meta: 2 o 3 por mecanismo y 3 o 4 sobre tolvas

**Qué buscar:** tolvas para harina y polvos alimentarios (geometría, fallas de flujo) y mecanismos de alimentación (tornillo, vibratorio, compuerta, válvula rotativa) con insumo, caudal, fallas y limpieza.

**Al leer, fíjate en:** geometría y capacidad de la tolva, fallas de flujo (puentes, adherencia), caudal del alimentador y cómo varía con el insumo.

| Nivel | Términos |
|---|---|
| General | `"bulk solids" hopper feeder` |
| Medio | `"hopper design" "food powder"`, `"screw feeder" powder` |
| Específico | `"wheat flour" hopper arching`, `"screw feeder" flour "flow rate"`, `"vibratory feeder" powder dosing`, `"rotary valve" flour` |

**Google Scholar** («Intervalo específico» 2016–2026; una cadena por búsqueda):

```text
allintitle: "screw feeder" OR "screw conveyor" OR auger flour OR powder
```
```text
allintitle: hopper flour OR sugar OR "food powder"
```
```text
allintitle: "vibratory feeder" OR "vibrating feeder" OR "vibratory feeding"
```
```text
allintitle: "auger filler" OR "auger filling" OR "auger dosing"
```

**Scopus** (Advanced document search; ordenar por «Relevance», no por citas; filtro Subject area: Engineering):

```text
TITLE(("screw feeder" OR "screw conveyor" OR auger OR "vibratory feeder" OR hopper) AND (flour OR powder OR granular OR "bulk solids")) AND PUBYEAR > 2015 AND NOT TITLE-ABS-KEY(pharmaceutical)
```

---

### 7.4 Medición gravimétrica (2.4) — meta: 6 a 8 y una revisión de pérdida de peso

**Qué buscar:** error de la dosificación volumétrica por densidad aparente; comparación entre pesaje por lotes y pérdida de peso; celdas de carga en dosificadoras (ruido, vibración, impacto del material).

**Al leer, fíjate en:** cuánto error produce la variación de densidad aparente, en qué condiciones conviene pesar y qué fuentes de error tiene la celda de carga.

| Nivel | Términos |
|---|---|
| General | `"gravimetric feeding"`, `"volumetric feeding"` |
| Medio | `volumetric gravimetric "powder feeder"`, `"loss-in-weight" review` |
| Específico | `"bulk density" "dosing accuracy"`, `"load cell" batching vibration OR noise` |

**Google Scholar** («Intervalo específico» 2016–2026; una cadena por búsqueda):

```text
allintitle: volumetric OR gravimetric feeder OR feeding OR dosing powder
```
```text
allintitle: "loss-in-weight" feeder OR feeding
```
```text
allintitle: "load cell" weighing accuracy OR error OR noise OR vibration
```
```text
allintitle: "bulk density" dosing OR filling accuracy
```

**Scopus** (Advanced document search; ordenar por «Relevance», no por citas; filtro Subject area: Engineering):

```text
TITLE((volumetric OR gravimetric OR "loss-in-weight") AND (feeder OR feeding OR dosing)) AND PUBYEAR > 2015
```
```text
TITLE("load cell" AND (weighing OR dosing OR batching)) AND PUBYEAR > 2015
```

---

### 7.5 Control (2.5) — meta: 5 a 8

**Qué buscar:** dos etapas (grueso y fino), compensación del material en caída, predicción del corte, pesaje dinámico, PID y aprendizaje iterativo.

**Al leer, fíjate en:** cómo deciden cuándo cortar la alimentación, cómo corrigen el material que sigue cayendo y cuánto error final logran.

| Nivel | Términos |
|---|---|
| General | `"batch weighing" control` |
| Medio | `"filling control" "load cell"`, `"dynamic weighing" filling` |
| Específico | `"in-flight" compensation`, `"two-stage feeding"`, `"coarse and fine" feeding`, `"iterative learning" weighing` |

**Google Scholar** («Intervalo específico» 2016–2026; una cadena por búsqueda):

```text
allintitle: "batch weighing" OR "batching weighing" OR "weighing batcher"
```
```text
allintitle: "dynamic weighing" model OR filter OR compensation OR identification
```
```text
allintitle: "weight feeding" OR "weighing feeding" bulk OR powder
```
```text
allintitle: "iterative learning" weighing
```

**Scopus** (Advanced document search; ordenar por «Relevance», no por citas; filtro Subject area: Engineering):

```text
TITLE("batch weighing" OR "dynamic weighing" OR "weighing control" OR "weight feeding" OR "quantitative weighing") AND PUBYEAR > 2015
```

**IEEE Xplore** (Command Search):

```text
("batch weighing" OR "dynamic weighing") AND (control OR compensation)
```

---

### 7.6 Fundamentos (2.6) — sin límite de año

**Qué buscar:** libros, normas y artículos de referencia. Aquí no se pone filtro de años.

**Descarga directa** (gratuitas):

| Documento | Para | Dónde |
|---|---|---|
| OIML R 61-1:2017 | 2.6.3 | https://www.oiml.org/en/files/pdf_r/r061-1-e17.pdf |
| OIML R 60:2021, parte 1 | 2.6.3 y 2.6.4 | https://www.oiml.org/en/files/pdf_r/r060-1-e21.pdf |
| OIML R 76-1 | 2.6.3 | oiml.org → Publications → Recommendations → R 76 |
| JCGM 200:2012 (VIM) | 2.6.3 | https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf |

**Google** (manuales y hojas de datos para 2.6.4):

```text
"Weigh Module Systems Handbook" Mettler Toledo
```
```text
"Load Cell and Weigh Module Handbook" Rice Lake
```
```text
HX711 datasheet
```

**Google Scholar** (sin filtro de años; ordenar por citas para ver los artículos de referencia):

```text
allintitle: salt bread quality OR dough OR reduction
```
```text
allintitle: yeast level OR concentration bread OR dough
```
```text
allintitle: sugar bread OR dough fermentation OR quality
```
```text
allintitle: "wheat flour" flowability OR "flow properties" OR "bulk density"
```
```text
allintitle: "compressed yeast" OR "fresh yeast" baking OR bakery
```
```text
allintitle: "screw feeder" model OR "mass flow rate" OR torque
```
```text
allintitle: "load cell" "strain gauge" weighing
```

**Biblioteca de la UCB** (libros):

| Libro | Para |
|---|---|
| Pahl y Beitz, *Engineering Design: A Systematic Approach*; VDI 2221 | 2.6.1 |
| Cauvain, *Technology of Breadmaking* (ya en el `.bib`) | 2.6.2 |
| Schulze, *Powders and Bulk Solids* | 2.6.5 |
| Ogata, *Modern Control Engineering*; Åström y Hägglund, *PID Controllers* | 2.6.6 |

---

### 7.7 Al terminar cada sección

1. Opcional: correr el prompt de ChatGPT, cambiando la línea de idiomas por «Busca solo fuentes en inglés».
2. Pasar a Claude la lista de DOI para comprobarlos en Crossref.
3. Subir los PDF al cuaderno de la sección y empezar con el Prompt 1 (Cribado).

---

## 8. Preguntas para el docente

- Si acepta patentes y fichas de fabricantes como referencias (la clase del 09/10/2026 no las mencionó).
- Dónde va la tabla de precios para «bajo costo»: capítulo 2 o parte económica.
- Si 2.6.6 (modelamiento y control) entra en el perfil, dado que el objetivo 4 corresponde a Taller de Grado II.
- Qué se entrega el 26/10/2026 y qué el 20/11/2026.
