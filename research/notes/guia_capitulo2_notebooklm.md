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

### Paso 0. Preparación (una sola vez)

1. Crear dos cuadernos en NotebookLM: `Cap2-EstadoDelArte` (2.2 a 2.5) y `Cap2-Fundamentos` (2.6). El plan gratuito admite unas 50 fuentes por cuaderno.
2. En cada cuaderno, abrir «Configurar chat», elegir personalizado y pegar las **Instrucciones fijas** (sección 3.1). Si ya estaban las anteriores, reemplazarlas.
3. Subir a ambos cuadernos el texto de la sección 3.2 con el nombre `00_Contexto_San_Miguel`.
4. Abrir una hoja «Registro de búsquedas» con columnas: fecha, herramienta, cadena, resultados, guardados. Con ella se redacta 2.1.

### Paso 1. Buscar y descargar (se repite en cada sección)

1. Elegir la sección según el orden de la sección 5.
2. Buscar en inglés con la escalera de palabras clave y las cadenas de la sección 7, y anotar cada búsqueda en el registro.
3. Seguir los pasos A a E de la sección 7.1: pegar la cadena con sus filtros, aplicar el primer filtro (título y resumen), descargar, aplicar el segundo filtro (sección de interés) y anotar en el registro.
4. Renombrar cada PDF con el prefijo de su sección principal y la clave BibTeX (apellido, año, primera palabra del título):
   - `22_` dosificadoras de ingredientes (artículos, tesis, patentes); `22M_` productos de mercado;
   - `23_` mecánica; `24_` medición; `25_` control;
   - `261_` a `266_` fundamentos.
   - Ejemplos: `22_rumapea2026flour.pdf`, `22M_zonesun2026fm710.pdf`, `264_oiml2021r60.pdf`.
5. Páginas de fabricantes: imprimir a PDF con la fecha visible y archivar la URL en web.archive.org.
6. Libros: subir solo los capítulos que se usarán.
7. Sin PDF: probar Unpaywall o CORE, o pedirlo al autor por ResearchGate.
8. Guardar los PDF en una carpeta sincronizada con la nube y en la PC.

### Paso 2. Analizar en NotebookLM

1. Subir los PDF al cuaderno que corresponda.
2. Marcar solo las fuentes nuevas y correr el **Prompt 1, Cribado**. Quitar las que salgan como «descartar».
3. Marcar de 3 a 5 fuentes y correr el **Prompt 2, Fichas**. Repetir hasta cubrir la sección.
4. Marcar las fuentes de la sección (más `00_Contexto_San_Miguel`) y correr el **Prompt 3, Síntesis**, con las preguntas de esa sección (sección 4).
5. Revisar en el PDF toda cifra que provenga de una tabla o figura.

### Paso 3. Pegar en Claude

Pegar la síntesis y las fichas con esta primera línea:

```text
SECCIÓN: [2.x] | Fuentes marcadas: [lista de archivos] | Fecha: [dd/mm/aaaa]
```

### Paso 4. Redacción (Claude)

Claude redacta la sección en `marcoteorico.tex`, agrega al `.bib` solo las fuentes con ficha y devuelve el texto plano con las claves entre corchetes.

### Paso 5. Auditoría

1. En NotebookLM, con las mismas fuentes marcadas, correr el **Prompt 4, Auditoría** con el texto plano.
2. Pegar el resultado en Claude. Claude corrige y compila.

### Paso 6. Siguiente sección

Volver al paso 1. Al terminar 2.2 a 2.6 se redactan 2.1 y 2.7.

---

## 3. Textos para NotebookLM

### 3.1 Instrucciones fijas (Configurar chat)

```text
Rol: asistente de extracción bibliográfica para el capítulo 2 (estado del arte y fundamentos) de una tesis de Ingeniería Mecatrónica: dosificadora gravimétrica de harina para una panadería pequeña. Otra persona redactará con tu salida; no redactes texto de tesis.

Reglas permanentes:
1. Responde en español y solo con lo que dicen las fuentes seleccionadas. «00_Contexto_San_Miguel» describe el caso; no es bibliografía y no se cita.
2. Identifica cada fuente por su nombre de archivo exacto entre corchetes, por ejemplo [22_rumapea2026flour]. Escríbelo junto a cada dato: los marcadores numéricos de cita se pierden al copiar.
3. Cada dato lleva: valor con sus unidades tal como aparece, cita textual corta en el idioma original (máximo 20 palabras) y ubicación (sección, tabla o figura). Si la fuente no está en español, añade la traducción de la cita.
4. No des números de página salvo que estén impresos en el texto; en otro caso escribe «pág. por localizar».
5. Si un dato no aparece, escribe «no reporta». No estimes, no promedies, no conviertas unidades y no completes con conocimiento general.
6. Marca como INFERENCIA todo lo que no sea literal de la fuente.
7. Clasifica cada fuente en estos ejes:
   - Principio de medición: volumétrico (no mide masa) / gravimétrico por lotes (pesa lo que recibe el recipiente hasta la consigna) / pérdida de peso (pesa la tolva que se vacía y regula un caudal) / mixto / no aplica.
   - Mecanismo de alimentación y almacenamiento: tornillo / vibratorio / compuerta / válvula rotativa / banda / otro; tipo de tolva.
   - Estrategia de corte o control: una etapa / dos etapas (grueso y fino) / compensación del material en caída / PID / otra / no reporta.
   - Sección a la que aporta: 2.2 dosificadoras de ingredientes / 2.3 mecánica / 2.4 medición / 2.5 control / 2.6 fundamentos.
8. Tipo de evidencia: ensayo experimental / simulación / diseño sin ensayo / revisión / norma o libro / afirmación comercial del fabricante.
9. Vigencia: estado del arte = 2016 a 2026. Una fuente anterior se marca «anterior» y solo se usa si esa línea tecnológica no cambió o como fundamento.
10. Si dos fuentes se contradicen, muestra ambas; no elijas.
11. Formato: tablas y listas en Markdown, sin introducción ni cierre. Termina siempre con la lista «VACÍOS»: lo que se preguntó y ninguna fuente responde.
```

### 3.2 Fuente `00_Contexto_San_Miguel`

```text
CASO (no es bibliografía): Panadería San Miguel, Santa Cruz de la Sierra, Bolivia. Panadería pequeña con mecanización parcial; la harina se dosifica a mano con balanza digital.
Medición de campo (7 ciclos, 02/09/2026 y 05/09/2026): 5,000 a 8,000 kg de harina por ciclo; 53,2 a 66,6 s por ciclo; diferencia neta de +143 g sobre 48,000 kg de cantidad objetivo.
Reportado por el estudiante (trazabilidad pendiente): azúcar de 150 a 600 g, sal de 100 a 150 g y levadura fresca prensada de 70 a 150 g por ciclo.
Solución adoptada: prototipo de dosificación gravimétrica por consigna (almacenamiento, alimentación, pesaje, control, descarga).
Sin decidir: mecanismo de alimentación, accionamiento, capacidad de tolva, rango, sensores, controlador, estrategia de control, tolerancias y tiempo objetivo. No propongas cerrarlos.
Etapa actual: requerimientos, tolerancias por insumo y diseño de los subsistemas mecánico y de medición gravimétrica.
```

### 3.3 Prompt 1, Cribado

```text
CRIBADO. Para cada fuente seleccionada, una fila:
| Archivo | Tipo (artículo / congreso / tesis / patente / norma o libro / ficha de fabricante / web) | Año | Principio de medición | Mecanismo y tolva | Estrategia de corte o control | Sección a la que aporta | Insumo dosificado | Escala (g o kg por lote, o kg/h) | Tipo de evidencia | Datos numéricos que reporta (exactitud, tiempo, costo) | Uso (estado del arte / solo fundamento / descartar) | Motivo en una línea |
Después lista: a) fuentes que no pudiste leer completas, escaneadas o con tablas ilegibles; b) fuentes que parecen duplicadas.
```

### 3.4 Prompt 2, Fichas (3 a 5 fuentes marcadas)

```text
FICHAS. Elabora una ficha por cada fuente seleccionada, separadas por una línea «=== [archivo] ===». Aplica las reglas permanentes en cada campo.
1. Referencia: autores, año, título, revista o institución, volumen, páginas, DOI o número de patente.
2. Objetivo y tipo de evidencia.
3. Principio de medición, mecanismo de alimentación y estrategia de corte o control, y cómo se aplican.
4. Componentes: almacenamiento (tolva), alimentador, accionamiento, sensor de peso (tipo y capacidad), acondicionamiento de señal, controlador, descarga.
5. Insumos ensayados y propiedades reportadas (densidad aparente, fluidez, humedad, cohesión, tamaño de partícula).
6. Rango o capacidad: masa por lote o caudal.
7. Exactitud, error, repetibilidad o desviación: valor, consigna a la que corresponde, número de ensayos y cómo se midió.
8. Tiempo por lote o velocidad.
9. Costo o precio, con moneda y fecha.
10. Ecuaciones o modelos que presenta: qué calculan y con qué variables y unidades.
11. Ventajas y limitaciones que declaran los autores.
12. Aporte por área: qué ofrece a mecánica, a medición y a control.
13. Figura o tabla más útil (número y título).
14. INFERENCIA: diferencias de escala, insumo y condiciones frente a 00_Contexto_San_Miguel.
```

### 3.5 Prompt 3, Síntesis de la sección

```text
SÍNTESIS DE LA SECCIÓN: [NÚMERO Y NOMBRE].
Usa solo las fuentes seleccionadas. Entrega, en este orden:
A. Tabla, una fila por fuente: | Archivo | Qué hicieron | Insumo y escala | Resultado numérico principal | Ventaja declarada | Limitación declarada | INFERENCIA: limitación frente a San Miguel |
B. Coincidencias: afirmaciones que respaldan dos o más fuentes, con los archivos entre corchetes.
C. Contradicciones o resultados no comparables entre sí, y por qué (escala, insumo, método de medición).
D. Respuestas a estas preguntas, cada una con archivo, cita textual y ubicación:
[PREGUNTAS DE LA SECCIÓN]
E. Alternativas que aparecen en las fuentes: para cada una, ventajas y desventajas declaradas, y si las fuentes permiten adoptarla o descartarla para el caso (INFERENCIA, con los archivos en que se apoya).
F. VACÍOS: preguntas sin respuesta y qué tipo de fuente haría falta.
```

### 3.6 Prompt 4, Auditoría

```text
AUDITORÍA DE BORRADOR. Abajo va un borrador redactado a partir de tus extracciones. Para cada oración con una afirmación técnica o una cifra, una fila:
| N.º | Afirmación | Archivo citado | Veredicto (respaldada / respaldada con matiz / no respaldada / la fuente dice otra cosa) | Cita textual que la sustenta o la contradice | Corrección propuesta |
Revisa en especial: cifras y unidades, a qué consigna o condición corresponde cada exactitud, atribución al autor correcto y generalizaciones que la fuente limita a un insumo o una escala. No evalúes el estilo.
BORRADOR:
[PEGAR]
```

---

## 4. Preguntas del Prompt 3 por sección

| Sección | Fuentes a marcar | Preguntas |
|---|---|---|
| 2.2 Dosificadoras de ingredientes | `22_`, `22M_` | ¿Qué arquitectura usan (tolvas, insumos, alimentador, sensor, controlador)? ¿Qué escala, exactitud, tiempo por lote y costo reportan? ¿Qué limitaciones declaran? ¿Alguna dosifica harina entre 5 y 8 kg o insumos menores entre 70 y 600 g? Para productos: fabricante y país, modelo, principio, rango, exactitud declarada y en qué condición, capacidad de tolva, precio con moneda y fecha, y qué no declara. |
| 2.3 Mecánica | `23_` y las `22_` con datos mecánicos | Tolvas: geometría, capacidad y fallas de flujo (puentes, adherencia, segregación). Alimentadores: con qué insumos se usó cada mecanismo, qué caudal y uniformidad dio, qué fallas presenta y cómo se limpia. |
| 2.4 Medición gravimétrica | `24_` y las `22_` con datos de pesaje | ¿Qué error atribuyen a la variación de densidad aparente en la dosificación volumétrica? ¿Cuándo conviene el pesaje por lotes frente a la pérdida de peso? ¿Qué celda de carga usan (tipo, capacidad), cómo acondicionan la señal, qué resolución y qué fuentes de error (vibración, impacto, ruido) reportan? |
| 2.5 Control | `25_` y las `22_` con datos de control | ¿Qué estrategia de corte usan, con qué parámetros y qué error final obtienen? ¿Cómo estiman el material en caída? ¿Qué controlador y algoritmo usan (PID, aprendizaje iterativo u otro) y con qué resultado? |
| 2.6.1 Metodología de diseño | `261_` | Pasos del método, cómo se elabora la lista de requerimientos, cómo se generan alternativas (matriz morfológica) y cómo se ponderan y evalúan. |
| 2.6.2 Insumos y tolerancias | `262_` | Porcentaje panadero y rangos típicos de sal, azúcar y levadura; efecto de su variación sobre la masa y el pan; propiedades de flujo y densidad aparente de harina, azúcar y sal; comportamiento de la levadura prensada. |
| 2.6.3 Metrología y normativa | `263_` | Definiciones (exactitud, repetibilidad, resolución, error máximo permitido); clases de exactitud y errores máximos según OIML R 61 y R 76; clases de celdas según R 60; jerarquía y alcance de cada documento. |
| 2.6.4 Celdas de carga | `264_` | Principio (galgas extensométricas, puente de Wheatstone), ecuación de salida, especificaciones (capacidad, sensibilidad, error combinado, fluencia), montaje, amplificación y conversión analógico-digital. |
| 2.6.5 Almacenamiento y alimentación | `265_` | Ecuaciones de diseño de tolvas (flujo másico y de embudo, ángulo, abertura mínima); caudal del tornillo o del alimentador vibratorio; torque y potencia. |
| 2.6.6 Modelamiento y control | `266_` | Modelo del caudal del alimentador; dinámica del pesaje; retardo y material en caída; estructura de dos etapas y PID. |
| 2.7 Aporte diferencial | Todas las de 2.2 a 2.5 | ¿Qué combinación de escala (5 a 8 kg), harina, insumos menores (70 a 600 g) y costo no cubre ninguna fuente? |

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

Metadatos (autor, año, revista, volumen) comprobados en Crossref el 13/10/2026. **El contenido no está leído**: lo confirman las fichas. Cada fuente figura en su sección principal.

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
| Klitschko (2023, Ucrania) | No encontrada; retirada |
| ZONESUN ZS-FM710 y ZS-FM750F | Con precio |
| Norma-SB, Agro-Simo-Mashbud | Sin precio publicado |
| Trust-Long y RUICHUAN (Alibaba) — en el `.bib` | Con precio |
| AZO, CEPI, Agriflex, Daxner, Zeppelin, Matcon | Industriales; pedir ficha y cotización |

Fase solo en inglés: las tesis de UMSA, UTN y ESPOL quedan en pausa, no descartadas. Humaira y Farihin (en indonesio) se mantienen porque ya se citan en el capítulo 1.

### 2.3 Mecánica

| Referencia | DOI |
|---|---|
| Xu et al. (2021), tornillo de paso variable para harina de trigo | 10.35633/inmateh-64-42 |
| Pezo et al. (2025), revisión de transportadores de tornillo | 10.1016/j.powtec.2025.121040 |
| Shen et al. (2022), electricidad estática en alimentación por tornillo | 10.1111/jfpe.14150 |
| Gitiaray et al. (2023), llenadora de tornillo (simulación con granos de pimienta) | 10.1080/02726351.2022.2029989 |
| Fathollahi et al. (2024), diseño de tolva | 10.1007/s12247-024-09858-2 |
| Hörmann-Kincses et al. (2022), alimentabilidad de polvos | 10.1016/j.ijpharm.2022.122364 |

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

| Situación | Qué hacer |
|---|---|
| Más de 200 resultados | Bajar al nivel específico de la escalera, agregar un término o buscar solo en el título (`allintitle:` en Scholar) |
| Menos de 10 resultados | Subir un nivel de la escalera, quitar comillas o agregar sinónimos con `OR` |
| Muchos resultados farmacéuticos | Excluir: `-pharmaceutical` en Scholar; `AND NOT pharmaceutical` en Scopus |
| Encontraste uno muy útil | Abrir «Citado por» (Scholar) o «Cited by» (Scopus) y revisar sus referencias |

#### Paso D. Descargar, renombrar y segundo filtro

1. Renombrar el PDF con prefijo y clave BibTeX (sección 2, paso 1). Ese nombre ya contiene año, autor y una palabra del título.
2. Guardarlo en una carpeta sincronizada con la nube y en la PC. Los PDF bibliográficos no se suben a Git.
3. Segundo filtro: leer solo métodos, resultados o conclusiones. Si aporta un dato a la sección del capítulo, se sube a NotebookLM; si no, se anota como descartado.

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

#### Fuentes en pausa

Mientras se busque solo en inglés quedan en pausa SciELO, Dialnet, Redalyc, Garuda, LA Referencia y los repositorios de UMSA, UTN y ESPOL. Microsoft Academic cerró en 2021; su sucesor es OpenAlex. Academia.edu y ResearchGate sirven solo para conseguir el PDF: se cita la versión publicada en la revista.

---

### 7.2 Dosificadoras de ingredientes (2.2) — meta: 10 a 15 académicas y 8 o más fabricantes

**Qué buscar:** máquinas completas que dosifican ingredientes por peso, tesis en inglés, patentes desde 2016 y productos de distintos fabricantes.

**Escalera de palabras clave** (empezar arriba y bajar):

| Nivel | Términos |
|---|---|
| General | `"batch weighing system"`, `"ingredient dosing system"` |
| Medio | `"automatic dosing" bakery`, `"weighing and dosing" "food powder"` |
| Específico | `"flour dosing" "load cell"`, `"ingredient weighing" bakery automation`, `"micro ingredient dosing"` |

Sinónimos: dosing / metering / batching / weighing; flour / powder / bulk solids; bakery / bread / dough.

**Google Scholar** (una cadena por búsqueda; «Intervalo específico» 2016–2026):

```text
"flour dosing" OR "ingredient dosing" bakery "load cell"
```
```text
allintitle: dosing flour OR bakery OR ingredients
```
```text
"automatic weighing" "food powder" "load cell"
```
```text
"micro ingredient" OR "minor ingredient" dosing bakery
```

**Scopus** (Advanced document search):

```text
TITLE-ABS-KEY((dosing OR metering OR batching OR weigh*) AND (flour OR bakery OR "food powder" OR ingredient*) AND ("load cell" OR gravimetric OR automat*)) AND PUBYEAR > 2015
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

| Nivel | Términos |
|---|---|
| General | `"bulk solids" hopper feeder` |
| Medio | `"hopper design" "food powder"`, `"screw feeder" powder` |
| Específico | `"wheat flour" hopper arching`, `"screw feeder" flour "flow rate"`, `"vibratory feeder" powder dosing`, `"rotary valve" flour` |

**Google Scholar** («Intervalo específico» 2016–2026):

```text
"hopper design" flour OR "food powder" arching OR bridging
```
```text
"screw feeder" flour "flow rate"
```
```text
"vibratory feeder" powder dosing accuracy
```
```text
"rotary valve" flour dosing
```

**Scopus:**

```text
TITLE-ABS-KEY((hopper OR "screw feeder" OR "vibratory feeder" OR "rotary valve" OR auger) AND (flour OR "food powder" OR "cohesive powder") AND (flow OR dosing OR feeding)) AND PUBYEAR > 2015
```

---

### 7.4 Medición gravimétrica (2.4) — meta: 6 a 8 y una revisión de pérdida de peso

**Qué buscar:** error de la dosificación volumétrica por densidad aparente; comparación entre pesaje por lotes y pérdida de peso; celdas de carga en dosificadoras (ruido, vibración, impacto del material).

| Nivel | Términos |
|---|---|
| General | `"gravimetric feeding"`, `"volumetric feeding"` |
| Medio | `volumetric gravimetric "powder feeder"`, `"loss-in-weight" review` |
| Específico | `"bulk density" "dosing accuracy"`, `"load cell" batching vibration OR noise` |

**Google Scholar** («Intervalo específico» 2016–2026):

```text
volumetric gravimetric "powder feeder" accuracy "bulk density"
```
```text
"loss-in-weight feeder" review
```
```text
"load cell" batching OR dosing vibration OR noise
```

**Scopus:**

```text
TITLE-ABS-KEY(("volumetric feed*" OR "gravimetric feed*" OR "loss-in-weight" OR "gain-in-weight") AND (powder OR flour) AND (accuracy OR "bulk density")) AND PUBYEAR > 2015
```
```text
TITLE-ABS-KEY("load cell" AND (batching OR dosing OR filling) AND (vibration OR noise OR "dynamic weighing")) AND PUBYEAR > 2015
```

---

### 7.5 Control (2.5) — meta: 5 a 8

**Qué buscar:** dos etapas (grueso y fino), compensación del material en caída, predicción del corte, pesaje dinámico, PID y aprendizaje iterativo.

| Nivel | Términos |
|---|---|
| General | `"batch weighing" control` |
| Medio | `"filling control" "load cell"`, `"dynamic weighing" filling` |
| Específico | `"in-flight" compensation`, `"two-stage feeding"`, `"coarse and fine" feeding`, `"iterative learning" weighing` |

**Google Scholar** («Intervalo específico» 2016–2026):

```text
"in-flight" compensation batching "load cell"
```
```text
"two-stage" OR "coarse and fine" feeding weighing accuracy
```
```text
"dynamic weighing" filling "load cell"
```

**Scopus:**

```text
TITLE-ABS-KEY(("batch weigh*" OR "weigh* fill*" OR dosing) AND ("in-flight" OR "two-stage" OR "coarse and fine" OR "cut-off" OR PID OR "iterative learning")) AND PUBYEAR > 2015
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

**Google Scholar** (sin filtro de años):

```text
"baker's percentage" salt sugar yeast dough
```
```text
"salt content" bread dough quality
```
```text
"yeast level" bread volume fermentation
```
```text
"sugar level" dough fermentation bread quality
```
```text
"wheat flour" "flow properties" bulk density
```
```text
"compressed yeast" properties moisture
```
```text
"screw feeder" "mass flow rate" model
```
```text
"screw feeder" torque model
```
```text
"feed factor" screw feeder
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
3. Subir los PDF a NotebookLM y empezar con el Prompt 1 (Cribado).

---

## 8. Preguntas para el docente

- Si acepta patentes y fichas de fabricantes como referencias (la clase del 09/10/2026 no las mencionó).
- Dónde va la tabla de precios para «bajo costo»: capítulo 2 o parte económica.
- Si 2.6.6 (modelamiento y control) entra en el perfil, dado que el objetivo 4 corresponde a Taller de Grado II.
- Qué se entrega el 26/10/2026 y qué el 20/11/2026.
