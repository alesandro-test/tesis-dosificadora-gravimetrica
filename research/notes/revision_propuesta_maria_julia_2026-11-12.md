# Revisión de la propuesta de María Julia y adaptación a San Miguel

Fecha: 12/11/2026. Revisión textual y visual del PDF original, la plantilla de Diseño Superior y el PDF de SySO. Estas referencias orientan el diseño; la plantilla oficial de Taller I, las decisiones vigentes y las notas docentes conservan precedencia.

## Fuentes y alcance

- María Julia: C:/Users/Soam/OneDrive - UCB/universidad_catolica/2026-1-2/Stuffs/Presentacion Final - Maria Julia.pdf, 111 páginas. Capítulo 3 desde requerimientos hasta bosquejo, posiciones físicas 24–54. Se usa la posición física del PDF en la tabla siguiente: desde la página impresa 28 existe una diferencia de dos unidades.
- Diseño Superior: C:/Users/Soam/OneDrive - UCB/universidad_catolica/2026-1-2/Diseño Superior/Template Diseño Superior v2604.docx. Se extrajeron texto e imágenes originales. Se inspeccionaron caja negra/transparente, casa de calidad, matriz con caminos y matrices cualitativa/cuantitativa.
- SySO: C:/Users/Soam/Desktop/Template_UCB_SySo-main/docs/thesis/main.pdf, 124 páginas; propuesta en posiciones 58–66, contrastada con la transcripción Markdown del estudiante.

Los resaltados del PDF y las instrucciones ilustrativas del DOCX no se trataron como nuevas órdenes para San Miguel.

## Secuencia de María Julia

| Etapa y posición física | Qué hace el documento | Aplicación a San Miguel |
|---|---|---|
| Requerimientos, 24–26 | Establece cargas, peso, tiempo de colocación, costo, grados de libertad, mantenimiento y geometría; usa antropometría y rangos articulares. | Empezar con entradas identificables: recetas, carga con tara, tolerancias, recarga y acceso al balde. No trasladar límites del exoesqueleto. |
| Árbol, 27–28, fig. 3.4 | Relaciona transportabilidad, ergonomía, resistencia, carga, mantenimiento y seguridad con geometría y componentes. Algunas ramas mezclan objetivos y medios. | Conservar metas del producto en el árbol y trasladar motores/controladores a la morfología para evitar cierres prematuros. |
| Caja negra, 28, fig. 3.5 | Representa carga y movimiento del operario como entradas y objeto levantado como salida. | Identificar material, energía e información. Terminar en ingredientes dosificados; mezclado y calidad del pan quedan fuera de esa transformación. |
| Funciones internas, 29, fig. 3.6 | Conecta sujeción, movimiento, medición y realimentación. | Descomponer almacenamiento, alimentación, receptor, pesaje, mando y aviso. Distinguir recorrido del ingrediente, potencia y señal. |
| Subfunciones, 30, fig. 3.7 | Profundiza lectura, amplificación, procesamiento, comparación y actuación. | Separar peso, conversión, acondicionamiento, referencia por ingrediente, decisión de corte y mando. El control angular del robot no se traslada al control de dosis. |
| Casa de calidad, 31–39, figs. 3.8, 3.15 y 3.16 | Desarrolla necesidades, deseables/indispensables, relaciones, comparación comercial y rangos. | Incluir una casa legible con características medibles. Evitar pesos del cliente, metas y puntuaciones competitivas sin evidencia. |
| Morfología inicial, 40–41, tabla 3.3 | Reúne 15 funciones, con cantidades distintas de opciones: energía, activación, sensores, controlador, software, fijación, transmisión, materiales y actuación. | Cubrir la cadena completa. Las columnas no obligan a inventar opciones en todas las filas. Comparar medios funcionalmente equivalentes. |
| Cribado, 42–46, tabla 3.4 | Resalta descartes, explica motivos por función y compara torque/precio de motores. | Registrar opción, estado, requisito y evidencia. Diferenciar descarte, reserva y selección pendiente; contrastar curvas de par/velocidad, no solo par y precio. |
| Morfología reducida, 47–48, tablas 3.6–3.8 | Separa filas con una opción y filas con alternativas. | Distinguir base confirmada de variables abiertas. Una opción única por falta de búsqueda no equivale a una elección justificada. |
| Combinaciones, 49–51, tablas 3.9–3.12 | Colorea cuatro caminos en las funciones variables. | Mostrar de dónde sale cada elemento. Completar alimentación, pesaje, control, energía, descarga y limpieza. El color no demuestra compatibilidad. |
| Evaluación, 51–52, tablas 3.13–3.14 | Aplica pesos y notas: combinación 1, 7,69; combinación 4, 7,63. | La diferencia de 0,06 puntos justifica revisar sensibilidad a pesos y calificaciones. San Miguel no cuenta con esas entradas y no declara un ganador numérico. |
| Bosquejo, 52–54, figs. 3.17–3.20 | Revisa ubicación de poleas por contacto, ruido y restricción del movimiento. | Comprobar interferencias, acceso y apoyos del pesaje. El bosquejo orienta la geometría; no es una ilustración decorativa. |

## Qué corregir al adaptar el método

1. **Se descartan medios de solución.** La expresión «funciones para descartar» del ejemplo elimina opciones de componentes. Medir, accionar, proteger e interrumpir siguen siendo funciones necesarias.
2. **Comparar funciones equivalentes.** El ejemplo agrupa reguladores, drivers y amplificadores y dedica filas a programas/entornos. San Miguel distingue acondicionamiento de energía, conversión del peso, procesamiento y potencia del motor.
3. **Fundamentar los descartes por modelo.** Consumo, software, disponibilidad y precio requieren configuración y fuente. Los juicios de la referencia no se adoptan como hechos transferibles.
4. **Distinguir movimiento y cantidad.** El encoder revisa giro o velocidad; contar vueltas como única medida no satisface la realimentación gravimétrica vigente.
5. **Trazar pesos y notas.** Cada peso requiere criterio documentado y cada calificación una evidencia comparable. Una suma ponderada no demuestra desempeño.
6. **Verificar legibilidad.** La casa del ejemplo es extensa y sus rótulos son pequeños. San Miguel emplea H1–H8 con tabla de lectura y divide la morfología por grupos. No se traslada el sombreado de tablas, restringido por la plantilla oficial.

## Aporte de la plantilla de Diseño Superior

La plantilla distingue árbol, caja negra/transparente y requisitos, seguidos de casa de calidad, morfología con caminos, bloques, estudio cualitativo/cuantitativo y definición de componentes. El método sirve como herramienta interna de la propuesta de Taller I sin sustituir el índice institucional.

Las imágenes muestran combinaciones por función. El ejemplo cualitativo usa una referencia y signos; el cuantitativo usa pesos y notas. En San Miguel se comparan cantidades deducibles de la arquitectura y se identifican los campos pendientes de desempeño y costo. Las normas, dimensiones y metas del brazo robótico del DOCX son ejemplos de otro caso.

## Redacción y figuras de SySO

SySO introduce la fuente de los requisitos, presenta las tablas y explica sus consecuencias. La figura general de arquitectura precede a la cadena de procesamiento y al detalle por módulos. Cada nivel identifica entradas, procesamiento y salida; el texto explica conexiones y responsabilidades.

Se aplica oración principal sobre la función del apartado → referencia a tabla/figura → explicación de conexiones o criterios → consecuencia para la elección. Se evitan introducciones genéricas, promesas de éxito y repetición completa de filas. La redacción del proyecto prevalece cuando el ejemplo usa futuro, gerundios o calificativos.

## Adaptación realizada

- Se conservaron RF/RNF, tolerancias y árbol existentes.
- La caja negra continúa con funciones y un desglose de medición/corte. La referencia se establece con lecturas estables por ingrediente.
- La casa de calidad es preliminar: 9/3/1 son relaciones técnicas propuestas; el techo contiene hipótesis de interacción. No se inventaron pesos del cliente ni clasificación comercial.
- La matriz comprende 17 funciones. El principio de tornillo conserva D-019.
- Se incorporaron cribado, base común, variables y tres caminos completos A/B/C. Sus componentes son hipótesis de combinación, no compras o selecciones definitivas.
- Se propone B para predimensionamiento: tolvas independientes, tornillos horizontales, pesaje principal y auxiliar y receptor basculante. La separación de cargas y los accesos orientan la propuesta; transferencia y retención requieren comprobación.
- A conserva pesaje común. C estudia disposición vertical descendente, compartimentación y mando industrial. Los tres mantienen cuatro ingredientes.
- La alternativa de tres ingredientes se mantiene aparte porque modifica el alcance y la intervención manual.
- El esquema de B orienta el bosquejo sin fijar dimensiones. El estudiante elabora el CAD.

## Entradas para cerrar la elección

La mayor carga previa a levadura en A es 8.230 g más tara; en B/C es 500 g más tara del auxiliar. Son máximos calculados a partir de las recetas registradas, no mediciones del prototipo. El máximo total del auxiliar es 530 g más tara. La carga menor no garantiza por sí sola menor error.

Faltan medidas de balde/puesto, capacidad por recarga, propiedades del ingrediente real, fichas de alimentadores/accionamientos, caracterización del pesaje y descarga residual, criterios de receta y cotizaciones. Con esas entradas corresponde completar la comparación y revisar su sensibilidad con la propietaria y el tutor. No se declara optimalidad por conteo de piezas o preferencia visual.

## Revisión específica de la casa de calidad frente al Excel actualizado

Revisión posterior del 12/11/2026, solicitada después de aplicar D-024. Se contrastaron la sección 3.4 del original, la Tabla 3.2 y las Figuras 3.8, 3.15 y 3.16, revisadas visualmente. Las páginas impresas 29–37 corresponden a las posiciones físicas 31–39 del PDF. Se inspeccionaron también valores y fórmulas del Excel actual de San Miguel; no se modificó el libro en esta revisión.

### Cómo la desarrolla María Julia

1. Explica diez necesidades con palabras del usuario y las relaciona con el contexto del apicultor: comodidad, ergonomía, limpieza, peso, economía, control, transporte, seguridad, ajuste y fuerza.
2. Separa deseables e indispensables en la Tabla 3.2. Esa clasificación es específica del exoesqueleto; no autoriza considerar opcionales la seguridad o el acceso de limpieza de una dosificadora de alimentos.
3. Presenta la casa completa, con importancias numéricas y porcentajes, relaciones, techo, metas, dificultad y comparación de productos (Figura 3.8). La figura muestra los valores, pero las páginas de esta sección no explican un procedimiento reproducible para obtener todas las importancias. No presentar esos pesos como una encuesta validada ni trasladarlos a San Miguel.
4. Explica las calificaciones comerciales según el entorno de uso, en vez de dejar solo el gráfico (Figuras 3.9–3.14). Esta explicación es una pauta útil; la evidencia de cada nota debe poder verificarse.
5. Amplía las relaciones entre necesidades y características técnicas (Figura 3.15) y luego las metas, dificultad y pesos técnicos resultantes (Figura 3.16). La característica de mayor peso de esa figura es el mecanismo de transmisión de fuerza, con 15,4 %. Es un resultado de aquella matriz, no una prioridad para dosificación.
6. Continúa con morfología, descartes y combinaciones. La casa organiza la atención técnica; la elección de una combinación requiere después comprobar restricciones, compatibilidad, desempeño y costos.

Hay detalles del ejemplo que deben revisarse al adaptar: la flecha de maximización sobre «Precisión del equipo» acompaña un objetivo expresado como error ±1°, aunque un error se minimiza. En San Miguel las columnas nombran explícitamente error absoluto y llevan minimización. No mezclar una magnitud de calidad con su medida de error.

### Auditoría del Excel de San Miguel

La primera casa tiene siete necesidades y once características técnicas. Las metas de error ya reflejan D-024. Las importancias E51:E57 y todas las dificultades de la fila 62 están vacías. Las metas de duración, intervención, acciones, limpieza, altura y superficie todavía no son numéricas. La seguridad remite al RNF-05 y necesita una condición de comprobación explícita. Las comparaciones comerciales no tienen notas.

- **Prioridades del usuario:** la pregunta 13 de la entrevista identifica como principales medir bien y ahorrar trabajo. Permite justificar prioridad cualitativa, pero no asigna puntuaciones numéricas. Se propone usar una escala de 1 a 10 con anclajes y registrar quién valora, cuándo y con qué criterio. Si el diseñador propone un borrador, identificarlo así y no atribuirlo a la propietaria.
- **Condiciones indispensables y mejoras deseables:** separar mínimos que eliminan una alternativa de los atributos que se optimizan. Las bandas adoptadas, las protecciones y la compatibilidad con el puesto no deberían compensarse con notas altas en otros atributos. Por encima del mínimo pueden priorizarse menos acciones, menos atención, limpieza más rápida o acceso más sencillo.
- **Mantenimiento:** RNF-07 y la pregunta 13 de la entrevista no tienen una representación específica en las siete necesidades. La limpieza cubre solo parte del acceso. Proponer una octava fila «Mantenimiento accesible» y una característica de tiempo de acceso a componentes de ajuste o calibración, con procedimiento y meta pendientes. No confundir ese tiempo con confiabilidad o número de averías.
- **Repetibilidad:** RNF-08 no tiene una característica explícita. Proponer la dispersión de dosis repetidas, medida por ingrediente y consigna, con límites por establecer. La media absoluta y el máximo no sustituyen la desviación estándar.
- **Metas operativas:** duración e intervención se deben medir por separado. Hay 566,2 s para siete ciclos con los límites documentados, equivalentes a 80,89 s/ciclo; esa media de recetas mezcladas no es un límite automático para cada receta ni el tiempo activo futuro del operario. Programación, limpieza, altura y planta requieren procedimientos y medidas del puesto. El área por sí sola no comprueba que la geometría deje paso y permita retirar el balde.
- **Protecciones:** proponer como condición de revisión cero puntos peligrosos accesibles sin protección, con puntos y condiciones de inspección definidos. El número cero por sí solo no demuestra seguridad integral.
- **Relaciones y techo:** justificar los 9/3/1 con el mecanismo de influencia. Un símbolo débil no significa que se pueda eliminar esa función. Revisar los conflictos de reducción de error frente a tiempo, y acceso de limpieza frente a espacio, como hipótesis dependientes de la arquitectura.
- **Comparación:** seleccionar dos o tres referentes pertinentes del capítulo 2 y, si sirve a la comparación, el procedimiento manual como referencia separada. DF-B e IF-A son candidatos existentes, no equivalentes completos del sistema de cuatro ingredientes. Definir anclajes de la escala, unidades y evidencia; marcar información no disponible sin convertirla en cero. No calificar al prototipo como desempeño observado.
- **Dificultad:** la fila 62 es un juicio de ingeniería sobre implementación y verificación, que debe justificarse por alimentación, pesaje, carga, fabricación y disponibilidad. Es distinta de la importancia del usuario. Las fórmulas actuales de peso técnico no incluyen esa dificultad.

### Lectura de las fórmulas y salida para diseño

E51:E57 contiene las importancias que se introducirán. D51:D57 normaliza esas entradas; C51:C57 calcula la relación máxima de cada fila y no es otra prioridad que deba completarse. La fila 64 suma importancia relativa por relación 9/3/1; la fila 65 normaliza los pesos técnicos. Los resultados permanecen vacíos sin importancias. La escala de importancias, las relaciones y su procedencia deben quedar documentadas antes de interpretar esos porcentajes.

Después de completar las entradas, identificar las características prioritarias y los conflictos para orientar ensayos, fichas y predimensionamiento. Revisar la sensibilidad de la jerarquía ante cambios razonables en pesos o relaciones. La priorización técnica no selecciona por sí sola motor, sensor o disposición del tornillo. Se mantienen la morfología y la comparación de combinaciones A/B/C de D-023. La correspondencia con RF/RNF y la figura de la tesis se actualizará cuando se consolide la casa.
