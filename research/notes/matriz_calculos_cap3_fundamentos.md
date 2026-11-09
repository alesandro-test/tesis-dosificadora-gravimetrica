# Matriz de cálculos del capítulo 3 y fundamentos

Creada el 28/10/2026 a partir de la comparación de 10 tesis en NotebookLM (ESPOL 2016,
Moya 2016, EPN 2022, Laime 2022, Challco 2024, Orozco 2024, Murillo 2024,
UPS repotenciación 2018, UPS Sánchez 2024 y Acuña 2024) y de la búsqueda bibliográfica de Fundamentos.

La numeración 2.6 de las fichas y de esta matriz corresponde a la estructura anterior. En la tesis vigente, Fundamentos es 2.3.

Regla: entra a Fundamentos solo el fundamento de un cálculo, una selección o una
verificación del capítulo 3 (`PROFESSOR_NOTES.md`, referencia 03). Los
mecanismos siguen abiertos (`A-004`): las filas «condicional» dependen de esa
elección.

**Tesis similares:** «P+A» = cuántas lo presentan y lo aplican en el diseño /
cuántas lo presentan.

## Área mecánica (2.6.5)

| # | Cálculo del capítulo 3 | Fundamento | Tesis (P+A / P) | Fuente propuesta | En el `.tex` | Acción |
|---|---|---|---|---|---|---|
| M1 | Ángulo de pared y abertura mínima de la tolva de harina (sin bóveda) | Función de flujo y método de Jenike | 2/3 (como descarga) | Jenike (1964) vía Su (2017); Mehos y Morgan (2016); Lopes Neto (2017); Guan (2009) | Redactado (2.6.4.1) | Schulze (2021) puede reemplazar a Mehos y Morgan si se consigue |
| M2 | Capacidad de cada tolva | m = ρ_b·V, con la densidad de 2.6.2 | 7/10 | Sin ecuación propia (geometría) | — | Una frase, sin ecuación numerada |
| M3 | Diámetro, paso y velocidad del tornillo de harina | Caudal del tornillo | 2/7 | Karwat (2021); Bates (2000) como complemento | Redactado | Conservar |
| M4 | Potencia y torque del motor | Potencia por resistencia al avance; torque | 2/2 | Karwat (2021); arranque con Bates (2000) o CEMA 350 | Redactado | Conservar; Yu y Arnold (1997) pasa a complemento |
| M5 | Diámetro del eje del tornillo | Esfuerzo cortante por torsión (y flexión si aplica) | 1/1 (Moya, con Mott) | Mott o Shigley en edición reciente | Falta | **Agregar**: es el cálculo de esfuerzos que sí se usa |
| M6 | Abertura de descarga de azúcar y sal por gravedad (condicional) | Beverloo | 2/3 (como Jenike) | Schulze (2021), que la reproduce; Beverloo (1961) como original | Redactado con Beverloo | Citar a través de Schulze |
| M7 | Caudal del canal vibratorio (condicional) | Cinemática del alimentador vibratorio | 4/4 | Despotović (2017) | Falta | Solo si se elige vibrador |
| M8 | Espesor de la chapa de la tolva | Presiones de Janssen / EN 1991-4 y esfuerzo en pared delgada | 3–4/3–4 | EN 1991-4; Mott o Shigley | — | **Decisión del estudiante**: descartado antes porque no decide nada en una tolva pequeña (Orozco: factor de seguridad ≈ 174) |
| M9 | Pernos y columnas del bastidor | Cortante directo y pandeo | 1/1 (Challco) | Mott o Shigley | — | Solo si el bastidor se calcula |
| M10 | Material y acabado | Diseño higiénico | — | Mager (2016) | Redactado | Conservar |

## Área de medición (2.6.4)

| # | Cálculo del capítulo 3 | Fundamento | Tesis (P+A / P) | Fuente propuesta | En el `.tex` | Acción |
|---|---|---|---|---|---|---|
| E1 | Capacidad de la celda comercial | Carga total (harina + tara), reparto entre apoyos, margen de sobrecarga | 1/9 (Challco, Ec. 65) | Por definir con el Prompt 1 de Challco; OIML R 60 | Parcial (Ec. de salida) | **Rehacer** como criterio de selección |
| E2 | Clase de la celda y número de divisiones | OIML R 60 (n_max, v_min) | — | OIML R 60 | En 2.6.3 (pendiente) | Unir con 2.6.3 o remitir |
| E3 | Calibración: lectura → masa (tara y factor de escala) | Recta de calibración en dos puntos | 7/8 | Por definir con el Prompt 1 de Challco y EPN | Falta | **Agregar**: es lo que se usa con el HX711 |
| E4 | Masa por cuenta frente a la levadura | Resolución del convertidor y ruido | 0 | Fraden (2016) | Redactado | Conservar breve |
| E5 | — | Galga y puente de Wheatstone | 1/5 | Hoffmann (1989) | Redactado con figura | Reducir a un párrafo sin ecuaciones; evaluar retirar la figura |
| E6 | Lectura estable antes del corte | Promedio móvil | 0 | Zengin (2025) | Redactado con Kalman y SBF | Reducir al promedio móvil; Kalman y SBF fuera |

## Área de control (2.6.6, ya redactada)

| # | Cálculo | Fundamento | Tesis | Estado |
|---|---|---|---|---|
| C1 | Consignas de cambio de velocidad y de corte | Corte en dos etapas | 8/10 | Redactado (Handbook 1998) |
| C2 | Altura de caída y masa en vuelo | Columna en caída | 2/3 (como caída libre) | Redactado (Bukreev 2014) |

## Falta de NotebookLM

1. Prompt 1 abreviado para **Challco** (Ec. 65, Sec. 4.4.2a y b), **EPN** (Sec. 2.3.2 y 2.2.3) y **Moya** (Sec. 4.3.1 a 4.3.3): ecuación exacta y fuente citada con año.
2. Prompt 3 (antigüedad de fuentes).

## Datos de NotebookLM por verificar

- Laime aplica R = ρL/A «para la calibración en firmware»: dudoso; no usarlo sin ver el PDF.
- EPN, potencia «Pn = D·L/20»: revisar la ecuación y la fuente en el PDF.

## Antigüedad de fuentes (Prompt 3, 28/10/2026)

Las tesis similares citan en fundamentos libros de 1964 a 2024 (Jenike 1964,
Pisarenko 1979, Maloney 1983, Perry 1994, Shigley 8.ª ed. 2008, Mott 4.ª ed.
2006, EN 1991-4 2006), además de catálogos y sitios web (Ingemecanica,
Italvibras, Alibaba). Ninguna cita Schulze, CEMA ni OIML R 61 o R 76.
Conclusión: en fundamentos se aceptan libros clásicos; el criterio de 5 a 10
años rige para el estado del arte (`PROFESSOR_NOTES.md`). Aun así, se prefiere
la fuente reciente que reproduce la relación clásica.

| Fuente actual | Uso | Acción |
|---|---|---|
| Beverloo (1961) | Descarga por orificio | Citar con Schulze (2021) si la reproduce (verificar) |
| Yu y Arnold (1997) | Torque de arranque | Complemento de Karwat (2021) |
| Norden, Handbook (1998) | Corte en dos etapas | Libro del área; conservar |
| Bates (2000) | Tornillo | Libro del área; conservar |
| Hoffmann (1989), Pallás-Areny (2003) | Galga y acondicionamiento | Retirar: el párrafo de la galga se respalda con Fraden (2016) |

## Cambio de enfoque de 2.6.4 (28/10/2026)

La selección de la celda comercial se fundamenta con OIML R 60 (2017), ya en
`FICHAS_2.6.3.md` (ficha de clases de celdas): E_max, E_lim, n_LC por clase
(Tabla 1), Y = (E_max − E_min)/v_min y p_LC. Con eso no hace falta la Ec. 65
de Challco. Queda por fichar: la calibración lineal (función de
transferencia en dos puntos) en Fraden (2016) y el eje a torsión en Mott o
Shigley.

## Matriz completa de 2.6 (28/10/2026)

Filtro: entra solo lo que tiene una fila «cálculo o decisión del capítulo 3».
Las 20 páginas mínimas son de todo el marco teórico; el estado del arte ya
ocupa unas 17, de modo que 2.6 no se rellena para llegar a una cuota.

| Sub. | Concepto | Cálculo o decisión del capítulo 3 | Ficha | Entra |
|---|---|---|---|---|
| 2.6.1 | Método de diseño (lista de requerimientos, selección de alternativas) | Objetivo 1, si se aplica un método formal | Sin ficha | Decidir |
| 2.6.2 | Porcentaje panadero | Cantidad objetivo de cada insumo por preparación | 2.6.2 F1 (Cauvain) | Sí |
| 2.6.2 | Efecto de variar sal, azúcar y levadura | Respaldo cualitativo de la tolerancia por insumo (objetivo 2) | 2.6.2 F2–F4 | Sí, sin ecuaciones reológicas ni cinéticas |
| 2.6.2 | Fluidez y humedad de la harina; densidad de azúcar y sal | Bóveda, volumen de tolva y caudal | 2.6.2 F5–F6; Lanzerstorfer | Sí |
| 2.6.3 | VIM: exactitud, repetibilidad, resolución | Definir tolerancia y variables de evaluación | 2.6.3 F1 | Sí, breve |
| 2.6.3 | OIML R 61: clases X(x) y desviación máxima permitida | Tolerancia de referencia (objetivo 2) | 2.6.3 F3 | Sí, central |
| 2.6.3 | OIML R 76: clase y escalón de la balanza de referencia | Balanza de las pruebas | 2.6.3 F4 | Breve |
| 2.6.3 | GUM: incertidumbre combinada | Evaluación experimental (objetivo 6, TG II) | 2.6.3 F2 | No en el perfil, salvo uso en el objetivo 2 |
| 2.6.4 | OIML R 60, resolución A/D, promedio móvil | Selección de la celda y del módulo | 2.6.4 y 2.6.3 F5 | Redactado |
| 2.6.4 | Calibración en dos puntos | Cuentas → masa | Redactado con Fraden; verificar con ficha F1 | Sí |
| 2.6.5 | Tolva sin bóveda (Jenike) | Ángulo y abertura de la tolva de harina | Redactado en 2.6.4.1 | Sí |
| 2.6.5 | Caudal, potencia y torque del tornillo; higiénico | Tornillo y motor | 2.6.5 F2, F3, F5 | Redactado |
| 2.6.5 | Beverloo | Azúcar y sal por gravedad (condicional) | 2.6.5 F4 | Redactado; citar con Schulze |
| 2.6.5 | Eje a torsión | Diámetro del eje, si se diseña el tornillo | Falta (Mott o Shigley) | Si se diseña |
| 2.6.6 | Corte en dos etapas, columna en caída | Consignas y altura de caída | 2.6.5 F6–F7 | Redactado |
| 2.6.6 | Función de transferencia con retardo, PID discreto | Objetivo 4 (TG II) | Sin ficha | No en el perfil, salvo indicación docente |

## Guía de internet pegada el 28/10/2026: qué no se adopta

- La ley de propagación de incertidumbres está en la GUM (JCGM 100), no en el VIM.
- OIML R 60 no trae una «ecuación de dimensionamiento» de E_max con carga muerta y viva: define E_max, E_lim y clases; la suma harina + tara es cálculo del diseño.
- Densidades «≈500–600 y 800–900 kg/m³» sin fuente: se usan las de Lanzerstorfer, Kamath, Guan y Siliveru.
- Deducción completa del puente (Doebelin) y PID discreto con Padé: no se usan en el perfil con celda comercial.
- El ángulo de Jenike sale de diagramas de diseño de Schulze, no de una ecuación trigonométrica simple.
- Coincide con lo adoptado: porcentaje panadero, R 61, R 76, calibración en dos puntos, promedio móvil, tornillo.

## Aplicado el 28/10/2026

`D-019`: tornillos comerciales para los cuatro insumos. Retirados de 2.6:
metodología de diseño, OIML R 76, Beverloo. Ya no hacen falta las fichas S2
(Beverloo con Schulze) ni M1 (eje), salvo que el tornillo deba fabricarse.
Siguen pendientes S1 (tolva) y F1 (calibración).

## Cierre de 2.6 (28/10/2026, tarde)

- **2.6.4.1 Flujo en la tolva y abertura de descarga:** patrones de flujo y fallas (Su), $\phi_w = \arctan\mu_w$ (Søgaard), diagramas de Jenike con margen de 3° y cuña 10–12° menos empinada con ranura ≥ 3 veces el ancho (Mehos y Morgan 2016), $B_{\min} = H\sigma_{c,crit}/(
ho_b g)$ (Jenike 1964, reproducida por Su), datos de harina de Lopes Neto (φw hasta 31°, δ 50–53°) y Guan (86–122 mm), interfaz tolva–tornillo y regla de 4 veces la partícula (Bates). Figura `tolva_patrones.tex`.
- **Uso en el capítulo 3:** semiángulo de cada tolva con φw medido en mesa inclinable; comparar la boca del tornillo comercial de harina con $B_{\min}$ (si es menor, agitador o vibrador); regla de 4 veces para azúcar y sal; volumen con m/ρ_b.
- **Tesis latinoamericanas revisadas para la tolva:** Chiliguana y Villavicencio (ESPOL 2016: ángulos medidos y diagrama de Jenike), Orozco (2024: μ de EN 1991-4 y diagrama de flujo másico), Challco (2024) y Moya (2016) solo geometría y espesor (no se adoptan).
- **Calibración en dos puntos** (Ec. de calibración) redactada en 2.6.3.2 con Fraden; queda el comentario VERIFICAR hasta tener la ficha F1.
- **Conclusión del capítulo (2.7):** comentada en el `.tex` por indicación del estudiante.
- **Por verificar:** volumen y páginas de Mehos y Morgan (Chemical Engineering, enero 2016) y de Søgaard (Powder Technology 2017).
