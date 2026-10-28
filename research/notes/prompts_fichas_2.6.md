# Prompts de fichas para 2.6 (NotebookLM)

Actualizado el 28/10/2026 con los PDF disponibles. Faltan **Schulze** (cuaderno 1) y **Dongdong** (cuaderno 4), por conseguir en la UCB.

## Antes de empezar cada cuaderno

1. Crear el cuaderno y pegar las **instrucciones fijas** en «Configurar chat» → «Personalizado» (texto de abajo).
2. Cargar los PDF de la lista del cuaderno y la fuente `00_Contexto_San_Miguel` (§3.2 de `guia_capitulo2_notebooklm.md`).
3. Para cada ficha: marcar **solo** las fuentes indicadas más `00_Contexto_San_Miguel`, y pegar el prompt.
4. Al terminar el cuaderno, pegar todas las fichas a Claude con la primera línea `FICHAS 2.6.x` y la lista de archivos usados.

### Instrucciones fijas

```text
Eres asistente de extracción para el capítulo 2 de una tesis de Ingeniería Mecatrónica: dosificadora gravimétrica de ingredientes secos (harina, azúcar, sal y levadura en polvo) para una panadería pequeña. Entrega datos, no redactes texto de tesis.
Reglas:
1. Usa solo las fuentes marcadas. «00_Contexto_San_Miguel» describe el caso; no lo cites como fuente.
2. Junto a cada dato escribe el nombre del archivo entre corchetes, por ejemplo [26_2000_Bates_ScrewFeeders].
3. Cada dato lleva: valor y unidades tal como aparecen, cita textual corta (máximo 20 palabras, en el idioma original) y dónde está (sección, tabla, figura o ecuación). No des números de página salvo que estén impresos.
4. Si un dato no aparece, escribe «no reporta». No estimes, no conviertas unidades y no completes con conocimiento general.
5. Marca como INFERENCIA todo lo que no sea literal de la fuente.
6. Si dos fuentes se contradicen, muestra ambas.
7. Responde en español, en tablas o listas, sin introducción. Termina siempre con «VACÍOS»: lo que se preguntó y ninguna fuente responde.
```

# Cuaderno 1 — 2.6.5 Tolva, alimentación y corte

**Cargar:** Carpeta 26.5: Su, Xu, Bates, Karwat, Hou, Yu y Arnold, Beverloo, Hygienic Design. Carpeta 26.6: Bukreev y Handbook. Mañana: Schulze.

| Ficha | Concepto | Marcar | Estado |
|---|---|---|---|
| 1 | Bóveda y ángulo de tolva | Su, Bates | ⏸ Versión inicial. Repetir mañana con Schulze, Su y Bates. |
| 2 | Caudal del tornillo | Bates, Karwat, Xu, Hou | ✅ |
| 3 | Torque y potencia del tornillo | Yu y Arnold, Bates | ✅ |
| 4 | Caudal por un orificio | Beverloo | ✅ (complementar mañana con Schulze) |
| 5 | Diseño higiénico y materiales | Hygienic Design | ✅ |
| 6 | Material en caída tras el cierre | Bukreev, Handbook | ✅ Subir Bukreev y Handbook desde la carpeta 26.6 |
| 7 | Corte en dos etapas | Handbook | ✅ Handbook desde la carpeta 26.6 |

## Ficha 1. Bóveda y ángulo de tolva

**Marcar:** Su, Bates. **Estado:** ⏸ Versión inicial. Repetir mañana con Schulze, Su y Bates.

```text
FICHA DE FUNDAMENTO 1 — VERSIÓN INICIAL CON SU Y BATES.
Concepto: Bóveda en polvos cohesivos, función de flujo y ángulo de tolva (método de Jenike).
Uso previsto en el diseño: Determinar el ángulo de las paredes y la abertura mínima de la tolva de harina para evitar la bóveda.
Fuentes: solo las marcadas (Su, Bates) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Distingue polvos cohesivos (harina) de granulares (azúcar, sal).
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No inventes ángulos ni aberturas. Indica qué debe verificarse cuando se agregue Schulze.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 2. Caudal del tornillo

**Marcar:** Bates, Karwat, Xu, Hou. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 2.
Concepto: Caudal de un alimentador de tornillo: paso, coeficiente de llenado y velocidad de giro.
Uso previsto en el diseño: Dimensionar el tornillo alimentador de harina y su caudal.
Fuentes: solo las marcadas (Bates, Karwat, Xu, Hou) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Distingue caudal volumétrico y másico.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No combines ecuaciones de fuentes distintas sin indicarlo ni inventes valores.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 3. Torque y potencia del tornillo

**Marcar:** Yu y Arnold, Bates. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 3.
Concepto: Torque y potencia requeridos por un alimentador de tornillo.
Uso previsto en el diseño: Seleccionar el motor y la relación de reducción del alimentador.
Fuentes: solo las marcadas (Yu y Arnold, Bates) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Considera fricción, llenado, material y arranque con la tolva llena.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No confundas potencia mecánica con potencia eléctrica. No selecciones un motor ni inventes coeficientes.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 4. Caudal por un orificio

**Marcar:** Beverloo. **Estado:** ✅ (complementar mañana con Schulze)

```text
FICHA DE FUNDAMENTO 4.
Concepto: Caudal de descarga de sólidos granulares a través de un orificio (Beverloo).
Uso previsto en el diseño: Estimar el caudal por gravedad del azúcar y la sal a través de una abertura controlada.
Fuentes: solo las marcadas (Beverloo) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Indica si vale para polvos cohesivos como la harina.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
Distingue los coeficientes publicados de los que deben medirse.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 5. Diseño higiénico y materiales

**Marcar:** Hygienic Design. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 5.
Concepto: Diseño higiénico y selección de materiales en contacto con alimentos secos.
Uso previsto en el diseño: Seleccionar el material y el acabado de la tolva, el tornillo y las superficies de contacto.
Fuentes: solo las marcadas (Hygienic Design) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Distingue recomendaciones de requisitos normativos.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No declares un material apto sin respaldo de la fuente.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 6. Material en caída tras el cierre

**Marcar:** Bukreev, Handbook. **Estado:** ✅ Subir Bukreev y Handbook desde la carpeta 26.6

```text
FICHA DE FUNDAMENTO 6.
Concepto: Masa de material en caída (en el aire) después del cierre del alimentador.
Uso previsto en el diseño: Estimar el adelanto de corte y el efecto de la altura de caída sobre la masa final.
Fuentes: solo las marcadas (Bukreev, Handbook) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Distingue el material en el aire del que queda en el conducto o el tornillo.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No supongas que el cierre detiene el flujo al instante. Separa ecuaciones documentadas de estrategias que habría que validar.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 7. Corte en dos etapas

**Marcar:** Handbook. **Estado:** ✅ Handbook desde la carpeta 26.6

```text
FICHA DE FUNDAMENTO 7.
Concepto: Dosificación por lotes en dos etapas: flujo grueso, flujo fino, peso de cambio y peso de corte.
Uso previsto en el diseño: Definir las dos velocidades del motor y la lógica de corte.
Fuentes: solo las marcadas (Handbook) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Incluye el retardo del actuador y el material en caída.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No inventes porcentajes de cambio de etapa ni tolerancias. Si la fuente no lo trata, indícalo.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

# Cuaderno 2 — 2.6.4 Celdas de carga

**Cargar:** Carpeta 26.4: Hoffmann, Fraden, Pallás-Areny, Choi, Richiedei, Zhuang, Zengin.

| Ficha | Concepto | Marcar | Estado |
|---|---|---|---|
| 1 | Galga y puente de Wheatstone | Hoffmann, Fraden | ✅ |
| 2 | Sensibilidad y compensación térmica | Hoffmann, Zhuang | ✅ |
| 3 | Amplificación y conversión A/D | Pallás-Areny, Fraden | ✅ |
| 4 | Ruido y filtrado | Choi, Richiedei, Zengin | ✅ |

## Ficha 1. Galga y puente de Wheatstone

**Marcar:** Hoffmann, Fraden. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 1.
Concepto: Galga extensométrica y puente de Wheatstone en celdas de carga.
Uso previsto en el diseño: Seleccionar y montar la celda de carga.
Fuentes: solo las marcadas (Hoffmann, Fraden) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No elijas una celda concreta.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 2. Sensibilidad y compensación térmica

**Marcar:** Hoffmann, Zhuang. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 2.
Concepto: Sensibilidad (mV/V), capacidad nominal y compensación térmica de la celda de carga.
Uso previsto en el diseño: Seleccionar la capacidad y la sensibilidad de la celda.
Fuentes: solo las marcadas (Hoffmann, Zhuang) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No inventes valores de catálogo.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 3. Amplificación y conversión A/D

**Marcar:** Pallás-Areny, Fraden. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 3.
Concepto: Amplificación y conversión analógico-digital de la señal de la celda.
Uso previsto en el diseño: Diseñar el acondicionamiento de la señal (HX711 u otro).
Fuentes: solo las marcadas (Pallás-Areny, Fraden) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Incluye resolución, ruido y frecuencia de muestreo.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No asumas un módulo concreto si la fuente no lo menciona.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 4. Ruido y filtrado

**Marcar:** Choi, Richiedei, Zengin. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 4.
Concepto: Ruido y filtrado de la señal de pesaje (pasa bajos, FIR, Kalman, filtros por modelo).
Uso previsto en el diseño: Elegir el filtro de la lectura de peso.
Fuentes: solo las marcadas (Choi, Richiedei, Zengin) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Indica el compromiso entre suavizado y retardo.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No compares filtros con datos de fuentes distintas como si fueran del mismo ensayo.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

# Cuaderno 3 — 2.6.3 Metrología

**Cargar:** Carpeta 26.3: VIM, GUM, OIML R 61-1, R 76-1, R 60.

| Ficha | Concepto | Marcar | Estado |
|---|---|---|---|
| 1 | Vocabulario metrológico | VIM | ✅ |
| 2 | Incertidumbre | GUM | ✅ |
| 3 | Llenado gravimétrico automático | OIML R 61-1 | ✅ |
| 4 | Pesaje no automático | OIML R 76-1 | ✅ |
| 5 | Clases de celdas de carga | OIML R 60 | ✅ |

## Ficha 1. Vocabulario metrológico

**Marcar:** VIM. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 1.
Concepto: Exactitud, error, repetibilidad, resolución y otras definiciones del VIM.
Uso previsto en el diseño: Definir las variables con que se evaluará el prototipo.
Fuentes: solo las marcadas (VIM) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
Copia las definiciones con su número de entrada.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 2. Incertidumbre

**Marcar:** GUM. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 2.
Concepto: Evaluación de la incertidumbre de medición (tipos A y B, combinada y expandida).
Uso previsto en el diseño: Evaluar las mediciones del prototipo.
Fuentes: solo las marcadas (GUM) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No apliques la GUM a un caso que la fuente no trata.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 3. Llenado gravimétrico automático

**Marcar:** OIML R 61-1. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 3.
Concepto: Clases de exactitud y desviación máxima admisible en instrumentos de llenado gravimétrico automático.
Uso previsto en el diseño: Tomar la tolerancia de referencia del objetivo 2.
Fuentes: solo las marcadas (OIML R 61-1) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Indica el rango de masa de cada clase.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
Distingue los requisitos de la norma de los criterios de diseño del proyecto.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 4. Pesaje no automático

**Marcar:** OIML R 76-1. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 4.
Concepto: Requisitos de los instrumentos de pesaje no automático.
Uso previsto en el diseño: Elegir la balanza de referencia para las pruebas.
Fuentes: solo las marcadas (OIML R 76-1) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No apliques la R 76-1 a la dosificadora automática.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 5. Clases de celdas de carga

**Marcar:** OIML R 60. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 5.
Concepto: Clases de exactitud y requisitos metrológicos de las celdas de carga.
Uso previsto en el diseño: Seleccionar la clase de la celda.
Fuentes: solo las marcadas (OIML R 60) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
Copia las clases y sus límites tal como aparecen.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

# Cuaderno 4 — 2.6.2 Insumos

**Cargar:** Carpeta 26.2: Cauvain, WMC, Lynch, Belz, Carcea, Timmermans, Verheyen, Struyf, Kamath, Guan, Siliveru, dos Santos, Suhag, Lanzerstorfer. Mañana: Dongdong.

| Ficha | Concepto | Marcar | Estado |
|---|---|---|---|
| 1 | Porcentaje panadero | Cauvain | ✅ |
| 2 | Variación de la sal | Lynch, Belz, Carcea | ✅ Carcea ya está |
| 3 | Variación del azúcar | Timmermans | ⏸ Versión inicial. Repetir mañana con Timmermans y Dongdong. |
| 4 | Variación de la levadura | Verheyen, Struyf | ✅ |
| 5 | Fluidez de la harina y humedad | Kamath, Guan, Siliveru, WMC | ✅ |
| 6 | Fluidez y densidad de azúcar y sal | dos Santos, Suhag, Lanzerstorfer | ✅ |

## Ficha 1. Porcentaje panadero

**Marcar:** Cauvain. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 1.
Concepto: Porcentaje panadero y función tecnológica de la harina, el azúcar, la sal y la levadura.
Uso previsto en el diseño: Convertir las recetas de San Miguel en consignas de masa por ingrediente.
Fuentes: solo las marcadas (Cauvain) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Distingue formulaciones de referencia de las recetas del caso.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No sustituyas las recetas del caso por valores de bibliografía. El agua y la manteca están fuera del alcance.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 2. Variación de la sal

**Marcar:** Lynch, Belz, Carcea. **Estado:** ✅ Carcea ya está

```text
FICHA DE FUNDAMENTO 2.
Concepto: Efecto de la variación de la cantidad de sal en la masa y el pan.
Uso previsto en el diseño: Fundamentar la tolerancia de dosificación de la sal.
Fuentes: solo las marcadas (Lynch, Belz, Carcea) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. No extrapoles entre recetas.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No conviertas un rango experimental en una tolerancia ni en un límite normativo.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 3. Variación del azúcar

**Marcar:** Timmermans. **Estado:** ⏸ Versión inicial. Repetir mañana con Timmermans y Dongdong.

```text
FICHA DE FUNDAMENTO 3 — VERSIÓN INICIAL CON TIMMERMANS.
Concepto: Efecto de la variación de la cantidad de azúcar en la fermentación, la masa y el pan.
Uso previsto en el diseño: Fundamentar la tolerancia de dosificación del azúcar.
Fuentes: solo las marcadas (Timmermans) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. No extrapoles entre recetas.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No inventes límites aceptables. Indica qué contrastar al agregar Dongdong.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 4. Variación de la levadura

**Marcar:** Verheyen, Struyf. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 4.
Concepto: Efecto de la variación de la cantidad de levadura en la fermentación y el pan.
Uso previsto en el diseño: Fundamentar la tolerancia de dosificación de la levadura.
Fuentes: solo las marcadas (Verheyen, Struyf) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Distingue tipos de levadura y condiciones de fermentación.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No inventes tolerancias.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 5. Fluidez de la harina y humedad

**Marcar:** Kamath, Guan, Siliveru, WMC. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 5.
Concepto: Influencia de la humedad en la fluidez de la harina.
Uso previsto en el diseño: Evaluar la tolva y el alimentador de harina en el clima húmedo de Santa Cruz.
Fuentes: solo las marcadas (Kamath, Guan, Siliveru, WMC) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Distingue la humedad de la harina de la humedad relativa del ambiente.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No transfieras valores entre harinas distintas sin indicarlo.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha 6. Fluidez y densidad de azúcar y sal

**Marcar:** dos Santos, Suhag, Lanzerstorfer. **Estado:** ✅

```text
FICHA DE FUNDAMENTO 6.
Concepto: Fluidez y densidad aparente del azúcar y la sal.
Uso previsto en el diseño: Dimensionar la tolva, la abertura y el alimentador de los insumos menores.
Fuentes: solo las marcadas (dos Santos, Suhag, Lanzerstorfer) y «00_Contexto_San_Miguel» para el caso.
1. Definición, con cita textual corta (máximo 20 palabras, idioma original) y ubicación (sección, tabla, figura o ecuación).
2. Ecuaciones copiadas tal como aparecen: número en la fuente, qué calcula, cada variable con significado y unidades.
3. Valores típicos o tablas de referencia, con sus condiciones (material, humedad, rango).
4. Condiciones de validez y limitaciones. Distingue densidad aparente de densidad real.
5. Figura o tabla que explique el concepto (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No atribuyas a todo azúcar o sal los valores de una muestra.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

# Mañana, con los PDF de la UCB

| PDF | Cuaderno | Qué repetir |
|---|---|---|
| Schulze | 1 | Ficha 1 marcando Schulze, Su y Bates (cambiar el encabezado a «versión con Schulze»). Ficha 4 marcando Beverloo y Schulze |
| Dongdong | 4 | Ficha 3 marcando Timmermans y Dongdong (encabezado «versión con Dongdong») |

No se rehacen las demás fichas. Al pegarlas a Claude, conservar el número de ficha para reemplazar la versión inicial.
# Fichas pendientes para cerrar 2.6.4 y 2.6.5 (28/10/2026)

Mismas **instrucciones fijas** de arriba. Cada ficha pide solo lo que usa el
capítulo 3 (`matriz_calculos_cap3_fundamentos.md`): si la fuente trae más,
no hace falta copiarlo.

| Ficha | Cuaderno | Marcar | Cierra |
|---|---|---|---|
| S1 | 1 (2.6.5) | Schulze, Su, Bates | Tolva de harina sin bóveda |
| S2 | 1 (2.6.5) | Schulze, Beverloo | Descarga de azúcar y sal por gravedad |
| F1 | 2 (2.6.4) | Fraden | Calibración cuentas → masa |
| M1 | 1 (2.6.5) | Mott o Shigley | Eje del tornillo (solo si se diseña el tornillo) |

## Ficha S1. Tolva sin bóveda (versión con Schulze)

**Marcar:** Schulze, Su, Bates. **Reemplaza** la Ficha 1 inicial.

```text
FICHA DE FUNDAMENTO 1 — VERSIÓN CON SCHULZE.
Concepto: Diseño de una tolva cónica o en cuña para un polvo cohesivo sin bóveda ni chimenea (método de Jenike).
Uso previsto en el diseño: Fijar el ángulo de pared y la abertura mínima de la tolva de harina.
Fuentes: solo las marcadas (Schulze, Su, Bates) y «00_Contexto_San_Miguel» para el caso.
1. Definiciones, con cita textual corta y ubicación: flujo másico, flujo en embudo, bóveda (arching), chimenea (ratholing), función de flujo, índice de flujo ffc y sus clases (rangos numéricos), factor de flujo ff, ángulo efectivo de fricción interna φe y ángulo de fricción con la pared φx.
2. Procedimiento de diseño de Schulze, paso a paso y en orden: qué ensayo da cada dato, cómo se obtiene el ángulo de la tolva para flujo másico y cómo se obtiene la abertura mínima sin bóveda.
3. Ecuaciones copiadas tal como aparecen: número, qué calcula, cada variable con significado y unidades. En particular, la abertura mínima (por ejemplo b_min o d_crit en función de σc,crit, ρb, g y la función H(θ)) y la expresión o el valor de H(θ) para tolva cónica y en cuña.
4. Diagramas de diseño: número y título de la figura que da el ángulo de pared a partir de φe y φx, y cómo se lee.
5. Valores típicos para harina de trigo, si los hay: ffc, φe, φx sobre acero inoxidable, σc. Con sus condiciones (humedad, esfuerzo, material de pared).
6. Condiciones de validez y limitaciones (escala, consolidación en el tiempo, humedad).
7. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
8. VACÍOS.
No inventes ángulos ni aberturas. Si Su o Bates contradicen a Schulze, muestra ambos.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha S2. Descarga por gravedad de granulares (complemento con Schulze)

**Marcar:** Schulze, Beverloo. **Complementa** la Ficha 4.

```text
FICHA DE FUNDAMENTO 4 — COMPLEMENTO CON SCHULZE.
Concepto: Caudal de descarga por gravedad de un sólido granular de flujo libre a través de la abertura de una tolva.
Uso previsto en el diseño: Estimar la abertura de descarga del azúcar y la sal si se alimentan por gravedad.
Fuentes: solo las marcadas (Schulze, Beverloo) y «00_Contexto_San_Miguel» para el caso.
1. ¿Schulze presenta la ecuación de Beverloo u otra equivalente? Cópiala tal como aparece, con número, variables, unidades y valores de las constantes (C, k).
2. Si Schulze usa constantes o forma distintas de las de Beverloo (1961), muestra ambas lado a lado.
3. Condiciones de validez según Schulze: tamaño de partícula mínimo, relación abertura/partícula, polvos finos o cohesivos, efecto del aire.
4. Figura o tabla que lo explique (número y título).
5. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
6. VACÍOS.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha F1. Calibración de un sensor lineal (Fraden)

**Marcar:** Fraden.

```text
FICHA DE FUNDAMENTO 5.
Concepto: Función de transferencia lineal de un sensor y calibración en dos puntos (cero o desplazamiento, y pendiente o ganancia).
Uso previsto en el diseño: Convertir las cuentas del convertidor A/D de una celda de carga en gramos (tara y factor de escala).
Fuentes: solo las marcadas (Fraden) y «00_Contexto_San_Miguel» para el caso.
1. Definiciones, con cita textual corta y ubicación: función de transferencia, sensibilidad, desplazamiento (offset), calibración, error de no linealidad, histéresis, error de cero.
2. Ecuaciones copiadas tal como aparecen: la función de transferencia lineal y la obtención de sus dos coeficientes a partir de dos puntos de calibración, con número, variables y unidades.
3. Qué recomienda Fraden sobre los puntos de calibración (cuántos, dónde ubicarlos en el rango) y sobre la recalibración o el ajuste de cero.
4. Condiciones de validez: cuándo deja de bastar una recta (no linealidad), deriva con la temperatura o el tiempo.
5. Figura o tabla que lo explique (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

## Ficha M1. Eje a torsión (solo si se diseña el tornillo)

**Marcar:** Mott o Shigley (la edición más reciente disponible en la UCB). Si el
tornillo se compra armado, esta ficha no hace falta.

```text
FICHA DE FUNDAMENTO 8.
Concepto: Diámetro mínimo de un eje sometido a torsión, con flexión si corresponde.
Uso previsto en el diseño: Dimensionar el eje del tornillo de harina a partir del torque del motor.
Fuentes: solo las marcadas y «00_Contexto_San_Miguel» para el caso.
1. Definiciones, con cita textual corta y ubicación: esfuerzo cortante por torsión, esfuerzo admisible, factor de diseño o de seguridad.
2. Ecuaciones copiadas tal como aparecen: esfuerzo cortante máximo en un eje macizo a torsión; diámetro mínimo despejado; y, si el libro la da, la ecuación de diseño con torsión y flexión combinadas. Con número, variables y unidades.
3. Valores típicos: factores de diseño recomendados para cargas estables o con arranque, y resistencia a la fluencia y a la tracción del acero inoxidable AISI 304 y 316 si aparecen en las tablas del libro.
4. Condiciones de validez: eje macizo frente a hueco, concentradores de esfuerzo (chaveteros), cuándo se exige análisis por fatiga.
5. Figura o tabla que lo explique (número y título).
6. INFERENCIA: qué dato del caso San Miguel haría falta para aplicarlo.
7. VACÍOS.
Anota autor, título, edición, editorial y año del libro usado.
No des números de página salvo que estén impresos. Si un dato no aparece, escribe «no reporta».
```

Al pegarlas a Claude: primera línea `FICHAS 2.6 PENDIENTES` y el código de
cada ficha (S1, S2, F1, M1).
