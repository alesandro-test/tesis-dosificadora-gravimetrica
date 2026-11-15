# Auditoría de referentes comerciales para la casa de calidad de San Miguel

Fecha: 13/11/2026. Revisión documental e inspección visual de los 18 PDF de `C:/Users/Soam/OneDrive - UCB/universidad_catolica/2026-1-2/DH_gravimetrica_fuentes/MarcoTeorico/Fuentes sin revisar/Productos_Comerciales`. No se modificaron la tesis ni los libros de Excel durante esta auditoría.

## 1. Resultado de la revisión

Los referentes más próximos por función son IF-A (alimentación de polvos por tornillo y corrección mediante balanza), DF-B (dosificación de cantidades pequeñas por tornillo) y Drafpack HZF-A (dosificación de polvo declarada por celdas de carga). El Drafpack DSPB-1000 resulta pertinente por combinar tornillo y control por peso, pero su ficha contiene ambigüedades que impiden asignarle una precisión o un rango inequívocos.

Para una tabla breve conviene comparar **IF-A, DF-B y HZF-A**, conservando las limitaciones de cada uno. Para la discusión del concepto de pesaje conviene añadir DSPB-1000 como referencia pendiente de aclaración. No son soluciones equivalentes al prototipo completo: ninguna ficha demuestra dosificación automática de los cuatro ingredientes, con las cantidades registradas, hacia el balde de San Miguel. La prioridad de estos referentes no constituye selección de componentes ni de arquitectura.

La familia IND-AX tiene otra utilidad: es el referente visual más directo de **canales independientes que convergen en un embudo común**. Su descripción declara mezclas de hasta cuatro productos, pero esa afirmación corresponde a la familia y debe vincularse al modelo de cuatro balanzas. No se atribuye esa capacidad al AX2 solo por aparecer en el título del PDF. Las aplicaciones y el mecanismo vibratorio no demuestran aptitud para harina fina.

## 2. Regla de lectura y trazabilidad

- **Declarado:** información que publica el proveedor; no equivale a ensayo independiente ni a prestación comprobada con nuestros ingredientes.
- **Observado:** elemento visible en fotografía; permite describir disposición, piezas y accesos aparentes, sin certificar desempeño, higiene o seguridad.
- **Inferido:** consecuencia razonada de los datos; se identifica y no se convierte en requisito confirmado.
- **ND:** dato no documentado, ambiguo o no comparable. No equivale a cero ni a desempeño deficiente.

Las páginas citadas son las **páginas físicas del PDF recibido**, contando la primera como 1. Algunas capturas conservan pies de página de una impresión original más larga: por ejemplo, DF-B tiene cinco páginas físicas aunque el pie indique «/7». Para localizar una cifra se utiliza la paginación física de esta nota.

Base de comparación: harina 5–8 kg; azúcar 80–400 g; sal 100–150 g; levadura en polvo 20–30 g. D-024 adopta como metas de ingeniería ±30, ±3, ±2 y ±1 g por ingrediente, respectivamente, y MAE de harina ≤10 g. Son metas no ensayadas; la aceptación de receta para menores permanece pendiente. Una sola bolsa comercial no equivale a un ciclo completo de cuatro ingredientes.

## 3. Referentes prioritarios: datos verificables

| Referente y PDF | Declaración verificable | Utilidad y límites para San Miguel |
|---|---|---|
| IF-A — `Dosificador de polvos p_tornillo sin fin IF-A _ Indurpack.pdf`, pp. 2–3 | Tornillo; conexión a balanza para comprobación del peso y corrección automática; accionamiento por pedal o señal externa; agitador interno; 5–5000 g; ±1 %; tolva 35 L; 1500 W; 5–20 bolsas/min; aire 0,4–0,6 MPa. Cambia el tornillo según intervalo de dosis. | Aporta tolva, tornillo, agitador y descarga hacia envase; harina aparece entre aplicaciones. Su máximo no cubre 8 kg en una dosis. El listado de tornillos pasa de 5–50 a 100–500 g: no documenta el tornillo para 80 g. Conexión a balanza para corrección no prueba pesaje continuo del recipiente durante la descarga. No demuestra receta de cuatro ingredientes. |
| DF-B — `Dosificador de polvos por tornillo sin fin DF-B _ Indurpack.pdf`, pp. 3–5 | Balanza para chequeo y corrección; pantalla; altura de salida ajustable; pedal; tornillo; rango 0,5–350 g con cambio de tornillo; ±1 %; una boquilla; tolva 30 L; 700 W; 580 × 380 × 800 mm; 70 kg. Tabla: 0–20 dosis/min; texto: 10–20. | Buen referente de módulo para cantidades pequeñas. Incluye 20–30 g de levadura y 100–150 g de sal en el rango general, pero no demuestra resultados con esos materiales ni un único tornillo para todo el intervalo. No cubre azúcar de 400 g ni harina. Las velocidades son declaraciones comerciales, no tiempos de receta. |
| HZF-A — `hzf-a____Drafpack _ Maquinaria de Empaque y Packaging Industrial.pdf`, p. 1 | Título: dosificador de polvos por celdas de carga. Rango 5–5000 g; precisión declarada ±0,1 %; 0,9 kW; 900 × 900 × 2000 mm; 250 kg. Altura de botella 60–300 mm; diámetro 20–150 mm. | Amplía la comparación a otro proveedor y a pesaje declarado por celdas. No cubre 8 kg en una dosis ni acredita cuatro ingredientes. El porcentaje carece de base y protocolo de prueba. La ficha muestra «10–430 botellas × minuto»: dato sospechoso que requiere aclaración; no se utiliza para demostrar ventaja temporal. El balde de San Miguel requiere comprobación geométrica propia. |
| DSPB-1000 — `Drafpack _ Maquinaria de Empaque y Packaging IndustrialDSB-1000.pdf`, p. 1 | Título: tornillo por celda de carga DSPB-1000; tabla: modelo DSLPB-1000; control «Por peso»; calibración electrónica; tolva 30 L; 15–25 BPM; 0,8 kW; 750 × 710 × 1850 mm; 130 kg. Rango escrito «5-10-100-1000g» y error «+/- 0.5g %». | Pertinente por principio, pero las expresiones de rango y error son ambiguas: no se interpreta el error como ±0,5 g ni como ±0,5 %. Tampoco se asume rango continuo de 5–1000 g. Debe aclararse el modelo. Puede incluirse cualitativamente con ND en esas magnitudes. |

Enlaces oficiales identificados en las capturas:

- [IF-A, Indurpack](https://www.indurpack.com/maquinas-envasadoras/dosificador-de-polvos-p-tornillo-sin-fin/).
- [DF-B, Indurpack](https://www.indurpack.com/maquinas-envasadoras/dosificador-de-polvos-por-tornillo-sin-fin-df-b/).
- [HZF-A, Drafpack](https://drafpack.com/producto/dosificador-de-polvos-por-celdas-de-carga-hzf-a/).
- [DSPB-1000, Drafpack](https://drafpack.com/producto/dosificador-de-polvos-con-tornillo-por-celda-de-carga-dspb-1000/).

Verificación web del 13/11/2026: la página de IF-A permite contrastar los datos del PDF. La extracción web de las páginas Drafpack devolvió principalmente navegación y pie de página; por tanto, las cifras de Drafpack de esta nota se respaldan en las capturas PDF y no se presentan como confirmación independiente de una ficha web actualizada. Los precios «S/ 0.00» de esas páginas son marcadores, no cotizaciones ni equipos gratuitos.

### Precisión porcentual: límite de la comparación

No se convierten los porcentajes publicados en garantías a cada consigna porque falta saber si se calculan respecto de la dosis, del fondo de escala u otra base, y bajo qué condiciones. Como cálculo **condicional**, si el ±1 % de IF-A o DF-B correspondiera a la consigna, representaría ±50 g a 5 kg, ±4 g a 400 g y ±0,3 g a 30 g. Esto muestra por qué una misma cifra porcentual no permite afirmar superioridad para todo el rango. No acredita que DF-B alcance 30 g con ±0,3 g ni que la meta de levadura del proyecto esté validada.

## 4. Inspección de fotografías: qué aporta al concepto

| Imagen y página física | Observación visual | Aporte a la propuesta; límite |
|---|---|---|
| IF-A, p. 1 | Tolva cónica elevada, motor superior, salida inferior; alimentador inclinado independiente desde tolva baja; indicador/balanza al costado. | Distinguir recarga/transporte de dosificación. El elevador inclinado no demuestra que el tornillo dosificador tenga la misma orientación. La fotografía no es una disposición de cuatro ingredientes. |
| DF-B, p. 2 | Tolva y salida vertical, recipiente debajo de la boquilla; segundo frasco en soporte lateral; pantalla y pulsador rojo visibles. | Estudiar módulo pequeño y diferencia entre verificación lateral y recipiente bajo salida. No deducir pesaje simultáneo continuo ni circuito de parada seguro a partir de la foto. |
| FLG-2000A, p. 1 | Tolva alta y una salida sobre espacio de recepción abierto, ruedas y pantalla. | Referencia geométrica de un módulo autónomo. La foto no revela el paso del tornillo ni pesaje del recipiente. |
| DSPB-1000, p. 1 | Una tolva, salida hacia plataforma de recepción, pantalla y bastidor. | Referente de estación de pesaje/descarga individual. La ubicación de celdas y aislamiento mecánico necesitan plano o manual. |
| HZF-A, p. 1 | Una tolva, salida inferior y transportador bajo la descarga. | El transportador corresponde a manipulación de envases; el proyecto puede estudiar recepción fija. No copiarlo como mecanismo necesario. |
| HZSF, p. 1 | Tolva compacta, boquilla vertical y plato de recepción pequeño. | Referencia visual para menores; no demuestra uso de balanza. La ficha lo llama servo volumétrico. |
| Familia IND-AX, p. 1 y tabla p. 2 | Se observan estaciones laterales y embudo inferior común. La descripción contempla variantes con hasta cuatro productos; la tabla distingue modelos. | Esquema útil para convergencia de varios canales, pero el AX2 de la foto no equivale a cuatro ingredientes. IND-AX4: cuatro balanzas y 50–2000 g; no cubre 20 g de levadura ni harina de 5–8 kg. |
| WL-P2H200, p. 1; WL-TP2H50, p. 1 | Dos zonas de alimentación/pesaje que convergen a una descarga inferior. | Referentes de embudo común; no demuestran cuatro canales ni tornillos para harina. |
| TECNOMACK, `Dosificadora de polvos por peso.pdf`, p. 2 | Primer plano de hélice vertical y elemento agitador, cono y uniones desmontables por abrazaderas. | Aporte directo al estudio de mecanismo y desmontaje. La foto no proporciona dimensiones, materiales certificados, tiempos de limpieza ni prestaciones del modelo. |

La disposición radial, tolvas compartimentadas o receptor auxiliar son conceptos propios por evaluar; estas fotografías no los seleccionan. La convergencia debe comprobar diámetro/altura del balde, separación entre salidas, transferencia completa y limpieza. La vista exterior no permite descartar retención ni contaminación cruzada.

## 5. Inventario completo y filtro de pertinencia

| Archivo/modelo | Dato distintivo de la ficha | Tratamiento propuesto |
|---|---|---|
| IND-AX2 / familia IND-AX | Vibratorio. Tabla p. 2: AX2 50–3000 g, dos balanzas; AXM2 1000–12000 g, dos; AX4 50–2000 g, cuatro; AXS 5–300 g, cuatro. «X(1)» en columna precisión; texto general del orden de 1 %. | Usar como referencia de convergencia y variantes, sin trasladar rango/precisión entre modelos. No interpretar X(1) como ±1 g. |
| IF-A | Tornillo, 5–5000 g, ±1 %, cambio de tornillos, pp. 2–3. | Comparador principal de módulo de polvos. |
| DF-B | Tornillo, 0,5–350 g, ±1 %, pp. 3–5. | Comparador principal de menores. |
| Multicabezal IND-A10 | Tabla p. 2: 10–1000 g para A10; X(0.5); diez balanzas. | Referencia secundaria de convergencia/combinación de pesos. Diez balanzas no equivalen a diez ingredientes. No interpretar X(0.5) como ±0,5 g. |
| FLG-2000A | Tornillo y agitador; 200–2000 **ml**, 900 W, p. 3. No precisión de masa. | Útil en geometría; no usar rango en gramos ni puntuar exactitud sin densidad y ensayos. |
| WL-P1H200 | Tabla pp. 2–3: 1–10 kg, 1–15 g; un producto. Texto también dice 500–15000 g. | Rango superior interesante, pero contradicción interna y aplicación a polvos gruesos/granos; no demuestra harina fina ni menores. |
| WL-P1H500G | Gravedad/vibración; tabla p. 2: 5–25 kg, 1–3 %; texto dice 1–25 kg. | Cubre masa de harina en ficha, sin demostrar material ni metas de error. No preferirlo solo por capacidad. |
| WL-P2H200 | Gravedad/vibración; 1–10 kg por cabezal, 1–20 g, máximo dos productos, pp. 2–3. | Referente de dos estaciones y transferencia común, no solución de cuatro menores/harina. |
| WL-TP2H50 | Tabla p. 2 lo denomina WL-DP2H50; 10–3000 g, «0,2–5 g», máximo dos productos. | Referente de convergencia dual; aclarar modelo y condiciones. El intervalo no demuestra ±0,2 g en cualquier dosis. |
| FZ-100 | Celda y dos velocidades; 1–100 g, ±0,3 %, p. 2; para granos/polvos gruesos. | Referente secundario de menores; no documenta aptitud de harina ni toda azúcar/sal. |
| FZ-500 | Celda y dos velocidades; 10–500 g, ±0,3 %, p. 2; para granos/polvos gruesos. | Cubre masas de menores en rango general, sin demostrar material ni precisión en cada receta; alimentación distinta de D-019. |
| TECNOMACK | Texto pp. 3–7 sobre tornillo y servomotor; sin modelo, rango o error cuantitativos identificados. | Usar detalle de hélice/agitador/desmontaje, no puntuación de prestaciones. El título «por peso» no suple documentación del sensor. |
| WL-P1H80 | Vibración; tabla p. 5: 10–5000 g, ±1–5 g, tolva 8000 ml; texto del orden del 1 %. | Referente de pesaje/vaciado, con condiciones y contradicción a aclarar; insuficiente para harina máxima. |
| KFG-3000 | Vasos volumétricos; 1000–3000 ml, p. 2. | Alternativa de principio ya diferente del adoptado; no convertir ml a g sin caracterización. |
| KFG-1000 | Volumétrico; tabla p. 2: 500–1000 g para granos de fácil caída. | No pertinente para menores ni harina de 5–8 kg; no prioridad documental. |
| HZSF (Drafpack) | Servo volumétrico, 1–100 g, ±0,2 g, p. 1. Campo «Volumen de la tolva» en kg. | Referente específico de dosis de 20–30 g; error es declaración sin protocolo. No asumir gravimetría y aclarar unidades de tolva/altura de envase. |
| DSPB-1000 (Drafpack) | Tornillo/celda; control por peso; rango y error ambiguos, p. 1. | Pertinente cualitativamente, pendiente de aclaración para comparación numérica. |
| HZF-A (Drafpack) | Celdas de carga, 5–5000 g, ±0,1 %, p. 1. | Comparador prioritario de otro proveedor, con límites ya indicados. |

## 6. Corrección metodológica de la comparación de la casa de calidad

La casa de calidad puede mantener sus nueve necesidades y catorce características técnicas sin completar artificialmente todas las casillas competitivas. Las prioridades técnicas provienen de relaciones y ponderaciones; no requieren inventar ensayos comerciales.

La valoración previa de «dosificación según receta» mezclaba **error observado manual**, **cobertura nominal comercial** y **perfil deseado del prototipo**. Esos tres elementos no pueden puntuarse como si midieran la misma magnitud. Además, una tolva fácil de recargar no demuestra facilidad de retirar el balde, y un pulsador rojo no demuestra protección integral. Los puntos derivados de esas equivalencias deben revisarse.

Propuesta para la sección competitiva:

1. Presentar una tabla documental de funciones, rangos, principio de pesaje y límites. Distinguir «declarado», «observado» y «ND».
2. Mantener las mediciones manuales en una columna identificada como línea base. No convertir un error de campo en una nota comparada con rango de catálogo.
3. Conservar el perfil objetivo del proyecto como meta sin ensayo, separado de los equipos existentes. No presentarlo como el competidor ganador ni sumarlo al ranking de prestaciones demostradas.
4. Si se conserva el gráfico 0–5, utilizar una rúbrica idéntica por necesidad para todos los sistemas, y puntos solo donde exista evidencia suficiente. ND debe quedar sin punto; no imputar cero ni calcular un promedio de disponibilidad desigual.
5. No sumar la comparación documental como prueba de superioridad. Los criterios críticos se verifican por separado; su incumplimiento no se compensa con otras características.

| Necesidad | Evidencia disponible | Dato que falta para una nota comparable |
|---|---|---|
| Dosificación según receta | Consignas/errores manuales y rangos/declaraciones de catálogo. | Error individual y distribución a las mismas consignas, con nuestros materiales; base del porcentaje; cuatro ingredientes conservados y transferidos. Separar cobertura de exactitud. |
| Menor atención del operario | Pedal, programación y descarga descritos. | Tiempo activo por receta, recargas, cambios de ingrediente/herramental y manipulación del recipiente. |
| Operación comprensible | Pantallas/programas visibles o declarados. | Protocolo de tareas comparable: acciones, errores, formación e interpretación de avisos. Una pantalla táctil no determina la nota. |
| Limpieza y retiro de residuos | Desmontaje o facilidad declarados; abrazaderas observadas. | Tiempo de desmontaje-limpieza-reinstalación y residuos tras un procedimiento común. |
| Recarga y retiro del balde | Accesos y plataformas visibles. | Alturas útiles y despejes bajo boquilla con balde real; esfuerzo; recorrido de extracción. Si se evalúan conjuntamente, ambos deben verificarse. |
| Equipo compacto | Dimensiones generales declaradas en varios equipos. | Límites del puesto y envolvente completa, con elevador, balde, extracción y accesos. Confirmar orden de ejes en IF-A. |
| Protección durante el uso | Algunas cubiertas y pulsadores visibles. | Función de parada, resguardos, acceso a tornillos y comprobación definida. No certificar por foto. |
| Mantenimiento accesible | Disposición exterior visible; adjetivos del proveedor. | Tiempo de acceso a componentes definidos, herramientas y desmontajes necesarios. |
| Dosificación sin retrasos | Bolsas/min o dosis/min comerciales. | Tiempo completo de la misma receta de cuatro ingredientes, con masa, cambio, estabilización y transferencia. |

## 7. Datos por solicitar o comprobar sin detener el desarrollo conceptual

- Fabricante: base y protocolo del error, producto ensayado, masa de ensayo, repeticiones, variación, condiciones de tolva y función exacta de la balanza.
- IF-A: tornillo apropiado para 80 g; si las medidas corresponden al conjunto de elevador y dosificador; necesidad efectiva de aire; capacidades con harina real.
- Drafpack: DSPB/DSLPB, rango «5-10-100-1000g», unidad «0.5g %»; HZF-A y «10–430»; confirmación de capacidades y despeje para recipiente. No hace falta esperar estas respuestas para explicar las alternativas de arquitectura, pero sí para atribuir prestaciones.
- Campo: diámetro, altura y tara del balde; espacio y accesos; alturas de recarga; limpieza admisible.
- Prototipo: caracterización de referencia y pesaje, retención, cola de caída y ensayos por ingrediente. La balanza SF-400 de división de 1 g no acredita por sí sola la banda de levadura de ±1 g.
- Economía posterior: cotización real y alcance de suministro, importación y soporte. El marcador de precio no es evidencia económica.

## 8. Segunda opinión con NotebookLM y control de sus límites

Se reutilizó el cuaderno existente «Mercado Indurpack» (`d936991e-426e-40fd-9162-5433011517a8`), sin subir duplicados. Consulta `e3123c0460d7`, conversación `3e6a7301-1722-4e05-94a1-c7cc792c3914`, completada el 13/11/2026. Fuentes seleccionadas:

| Fuente | ID original |
|---|---|
| IF-A | `6cdbdb30-7765-404a-b566-bceae27b0ae9` |
| DF-B | `05c105ce-a21a-404d-b91e-42b361d2dea2` |
| FLG-2000A | `5d1f8a83-222c-46e1-a736-4fbec5414f73` |
| WL-TP2H50 | `5210bba8-ab6a-41bc-99a4-be7783c57742` |
| Multicabezal | `48e15827-f2e7-46e6-908c-68d8e46dfdad` |

La respuesta coincidió en rangos principales, cambio de tornillos, diferencia entre número de balanzas e ingredientes y falta de métricas comunes para puntuaciones 0–5. Se contrastó con las páginas originales. **No se adoptaron** sus estimaciones de densidad para FLG, la sugerencia de realizar dos ciclos para alcanzar 8 kg ni generalizaciones sobre vibración: esas propuestas requieren evidencia y no aparecen verificadas en las fichas. Tampoco se adoptó su afirmación de que no existen datos manuales de error: el proyecto sí dispone de registros de campo. Las tolerancias de ingeniería vigentes se toman de D-024, no de la respuesta del cuaderno. Los PDF Drafpack no figuraban entre las fuentes de esa consulta; su revisión fue directa y visual.

La consulta complementa la auditoría; los originales y las decisiones del proyecto conservan prioridad.
