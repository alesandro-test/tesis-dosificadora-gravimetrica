# Propuesta de tolerancias y comparación con el procedimiento manual

Fecha: 12/11/2026. Solicitud del estudiante: proponer límites y forma de evaluación a partir de los registros, comparando el criterio de ±1 %. Este análisis no aprueba tolerancias de receta ni acredita desempeño del prototipo. D-022 conserva ±30 g de harina; las tolerancias de los ingredientes menores siguen abiertas.

Actualización posterior del 12/11/2026: el estudiante aprobó estas metas de ingeniería y pidió aplicarlas a la casa de calidad. D-024 registra la aprobación y `docs/design/Casa_de_calidad_San_Miguel.xlsx` incorpora los límites y la meta de media absoluta de harina. Continúan pendientes la aceptación de receta y la comprobación técnica; las formulaciones de propuesta siguientes documentan el análisis que dio origen a esa decisión.

## Fuente y cálculo

Fuente: `levantamiento_dosificacion_san_miguel.md`, tablas 1, A.2 y 9. Siete registros por ingrediente. Para cada dosis: `e = cantidad medida − cantidad objetivo`; error relativo `100 e / cantidad objetivo`; media absoluta `MAE = sum(abs(e))/n`. El porcentaje medio absoluto es la media de los porcentajes absolutos individuales, y no el balance neto dividido entre el total de ingredientes.

| Ingrediente | Diferencias individuales (g) | MAE manual (g) | Máxima absoluta (g) | Media porcentual absoluta |
|---|---|---:|---:|---:|
| Harina | 20, 18, 16, 13, 11, 38, 27 | 20,43 | 38 | 0,315 % |
| Azúcar | 14, 6, −6, −7, 3, 21, −6 | 9,00 | 21 | 4,750 % |
| Sal | 8, −7, 8, −3, 4, 9, −5 | 6,29 | 9 | 5,381 % |
| Levadura | 3, −2, 2, 1, −2, 3, 2 | 2,14 | 3 | 7,619 % |

Los decimales de los cálculos no aumentan la resolución de las lecturas ni resuelven los pendientes de trazabilidad del registro.

## Comparación con ±1 %

| Ingrediente | Consignas registradas | Margen de ±1 % |
|---|---:|---:|
| Harina | 5 000–8 000 g | ±50–80 g |
| Azúcar | 80, 150 y 400 g | ±0,8; ±1,5; ±4 g |
| Sal | 100 y 150 g | ±1 y ±1,5 g |
| Levadura | 20 y 30 g | ±0,2 y ±0,3 g |

Una banda general de ±1 % no asegura mejora: para harina es más amplia que D-022 y que todas las diferencias observadas. Para levadura demanda un control y una referencia de ensayo de fracciones de gramo; la SF-400 de división 1 g no permite respaldar por sí sola esa exigencia. No se adopta ese porcentaje como regla común.

## Propuesta de ingeniería para discusión

| Ingrediente | Límite individual por lote | Meta de MAE del prototipo | Reducción objetivo frente al MAE de la muestra |
|---|---:|---:|---:|
| Harina | ±30 g, criterio vigente | ≤10 g | 51,0 % |
| Azúcar | ±3 g, propuesta existente | ≤3 g | 66,7 % |
| Sal | ±2 g, propuesta existente | ≤2 g | 68,2 % |
| Levadura | ±1 g, propuesta existente | ≤1 g | 53,3 % |

La meta de 10 g para harina es una elección de diseño redondeada próxima a la mitad del MAE manual. No se obtiene de una norma ni de una aceptación de la propietaria. Las metas de los menores conservan las hipótesis ya estudiadas; no se presentan como valores técnicamente alcanzados. Las reducciones son objetivos aritméticos, no resultados experimentales. El límite máximo y el MAE cumplen funciones distintas: entregar siempre +29 g de harina respetaría ±30 g y empeoraría el MAE manual de 20,43 g.

Los porcentajes equivalentes de las bandas dependen de la consigna: harina 0,375–0,600 %; azúcar 0,750–3,750 %; sal 1,333–2,000 %; levadura 3,333–5,000 %. Para la dosis de 20 g, ±1 g de levadura admite 19–21 g. Este margen debe contrastarse con la aceptación de la receta.

## Aplicación por receta

| Receta | Registros disponibles | Harina: intervalo (g) | Azúcar: intervalo (g) | Sal: intervalo (g) | Levadura: intervalo (g) |
|---|---:|---:|---:|---:|---:|
| Casero | 3 | 6 470–6 530 | 397–403 | 98–102 | 29–31 |
| Marraqueta | 2 | 7 970–8 030 | 77–83 | 148–152 | 29–31 |
| Francés | 1 | 7 470–7 530 | 77–83 | 148–152 | 29–31 |
| Masa común del sábado | 1 | 4 970–5 030 | 147–153 | 98–102 | 19–21 |

Estas cantidades resultan de aplicar las bandas propuestas a las consignas existentes, sin cambiar las recetas. La media absoluta manual por receta es, respectivamente, harina 23,67/14,50/16/27 g; azúcar 14/4,50/6/6 g; sal 6,67/5,50/8/5 g; levadura 2,33/2/2/2 g. Con uno a tres registros por receta, estas cifras solo describen los datos disponibles; no caracterizan estadísticamente la producción.

## Forma de evaluación propuesta

1. La unidad de aceptación es cada ingrediente de cada lote. Registrar consigna, cantidad recibida medida con referencia independiente, error en gramos, error porcentual y cumplimiento de la banda. La indicación de la propia máquina no constituye por sí sola la referencia de verificación. Si se usa pesaje acumulativo, comprobar el incremento de cada ingrediente y considerar la incertidumbre de la diferencia de lecturas.
2. Agrupar los resultados por ingrediente y receta o consigna; informar número de repeticiones, MAE, media con signo, desviación estándar y máximo absoluto. El objetivo de mejora se comprueba con MAE; el límite individual se comprueba con cada dosis y con el máximo absoluto. No afirmar mejora de todas las recetas solo por una media global.
3. Preparar una serie piloto propuesta de al menos diez repeticiones por consigna relevante para observar sesgo y dispersión, incluyendo los extremos de cantidad y distintos niveles de producto en tolva. Este número es una propuesta exploratoria del proyecto, no un plan de certificación ni una demostración de confiabilidad poblacional. El tamaño del ensayo comparativo final debe justificarse con la variabilidad y los recursos disponibles. Incluir en la planificación nuevos registros manuales comparables; la muestra actual es pequeña y desigual por receta.
4. En la serie de comprobación exigir el cumplimiento de las bandas individuales propuestas y reportar toda dosis fuera de banda, sin ocultarla al promediar. Si se permiten reintentos o correcciones, registrar también el resultado inicial, la frecuencia y el tiempo adicional.
5. Para comparar métodos conservar consignas, ingredientes, condiciones y ponderación de recetas equivalentes. Registrar separadamente duración del ciclo e intervención activa; las metas de error no sustituyen esos criterios.
6. El resumen diario es complementario: presentar error neto y suma de errores absolutos por ingrediente. Ejemplo: +6 y −6 g producen un balance de 0 g y una desviación absoluta acumulada de 12 g. No sumar gramos de distintos ingredientes para declarar que la receta cumple.

La OIML R 61-1:2017, apartados 4.3.1 y 4.3.3, distingue desviación de cada llenado respecto de la media y error de la media respecto de la consigna. Orienta la separación entre dispersión y sesgo; no establece un margen universal de ±1 % para estas recetas. Las bandas aquí propuestas son criterios del proyecto frente a la consigna, no una declaración de clase OIML ni de conformidad normativa.

Fuente técnica consultada: [OIML R 61-1:2017](https://www.oiml.org/en/files/pdf_r/r061-1-e17.pdf).

## Pendientes

- Validar con la propietaria los márgenes de los ingredientes menores, especialmente 1 g sobre una dosis de 20 g de levadura.
- Comprobar viabilidad de alimentación, corte y pesaje con fichas y ensayos; no garantizar las bandas antes de estas pruebas.
- Caracterizar los instrumentos de referencia y su incertidumbre. La división de lectura de la SF-400 no equivale a exactitud de ±1 g.
- Revisar con el tutor el protocolo, tamaño de muestra y regla de decisión considerando incertidumbre.
- Si se aceptan estas metas, alinear el RNF, la casa de calidad y las entradas del CAD. Este análisis conserva el Excel y la tesis sin cambios de requisitos.
