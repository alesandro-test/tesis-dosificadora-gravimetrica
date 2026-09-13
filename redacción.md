# Guía de redacción y revisión de la tesis

**Aplicación actual:** Marco Referencial / Capítulo 1.  
**Uso posterior:** adaptar la ficha de revisión a cada capítulo sin imponerle la función del Marco Referencial.  
**Estado:** guía de trabajo y diagnóstico del borrador; no sustituye decisiones del proyecto ni una aprobación docente.

## 1. Fuentes y orden de consulta

1. Leer `AGENTS.md`, `context/PROJECT_CONTEXT.md`, `context/DECISIONS.md` y `context/STATUS.md` antes de revisar.
2. Para el Marco Referencial, consultar `context/PROFESSOR_NOTES.md`, `context/THESIS_STRUCTURE.md`, `docs/thesis/chapters/marcoref.tex`, `docs/thesis/main.tex`, `docs/thesis/preambles/imt_preamble.tex`, las figuras citadas y `docs/thesis/bibliography/referencias.bib`.
3. Abrir en `research/` únicamente el registro o la fuente original necesarios para comprobar una cifra, una atribución o una observación docente. Las tesis de referencia orientan la estructura; no fijan reglas obligatorias.
4. Ante discrepancias, aplicar la prioridad de `AGENTS.md`: instrucción actual del estudiante → decisiones vigentes → notas docentes → contexto canónico → fuente original → referencia estructural. Registrar las contradicciones sin resolverlas por suposición.

La revisión comprende **texto, tablas, figuras, ecuaciones, leyendas, citas y referencias cruzadas**. La plantilla institucional determina jerarquía de títulos, numeración, formato de figuras, bibliografía y presentación. Un cambio de estilo no justifica alterar cifras, objetivos, alcance ni decisiones abiertas.

## 2. Orden de trabajo recomendado

La guía `$thesis-writing` propone revisar primero el argumento y la estructura, y después la redacción de cada frase. En este proyecto, la secuencia operativa es:

1. **Función del apartado.** Comprobar que cada sección cumple el propósito descrito en `THESIS_STRUCTURE.md` y que la secuencia general es contexto → evidencia → formulación central → relaciones causales → objetivos → delimitación.
2. **Sustento.** Vincular cada afirmación cuantitativa con su registro, tabla, figura o fuente. Distinguir medición de campo, cálculo derivado, proyección e hipótesis o requisito propuesto. Mantener explícitos tamaño de muestra, condiciones y límites de inferencia.
3. **Coherencia transversal.** Comparar formulación, árbol, objetivo general, objetivos específicos, variables de evaluación y pruebas previstas. Una modificación de la formulación exige revisar todas esas piezas.
4. **Párrafos.** Identificar la idea principal de cada párrafo, su desarrollo con evidencia o razonamiento y un cierre técnico que conecte con el argumento. Dividir párrafos que mezclan funciones; unir fragmentos que no desarrollan una idea completa.
5. **Edición de frase.** Corregir sintaxis, léxico, semántica, puntuación, concordancia, referencias ambiguas y repetición. Aplicar las restricciones de estilo de la sección 3 sin perder precisión.
6. **Verificación final.** Revisar valores y unidades, consistencia entre texto y elementos gráficos, existencia de claves bibliográficas, referencias cruzadas y compilación de LaTeX si se modificó un `.tex`.

En cada ciclo de revisión conviene trabajar **una subsección** y registrar: hallazgo → ubicación → evidencia → propuesta de corrección → estado (`corregido`, `pendiente de fuente` o `pendiente de decisión`). Primero se presenta la propuesta de contenido y, tras verificarla, se incorpora al LaTeX.

## 3. Criterios de redacción aportados por el estudiante

Estas reglas se aplican a la **prosa redactada de la tesis**. Una búsqueda automática produce candidatos para revisión, no errores confirmados: debe distinguir texto propio, nombres de fuentes, citas literales, títulos institucionales, expresiones técnicas, símbolos y código LaTeX.

| Aspecto | Revisión y acción |
|---|---|
| Adverbios y expresiones de cantidad | Señalar `absolutamente`, `apenas`, `mucho`, `bastante`, `casi`, `demasiado`, `extremadamente`, `justo`, `mitad`, `muy`, `nada`, `poco`, `tan`, `tanto`, `gran`, `altamente`, `suficiente`, `carece`, `no hay`, `no tiene`, `no existe`. Sustituir una valoración vaga por magnitud, criterio o descripción verificable. `Mitad` y otros vocablos de la lista pueden cumplir funciones gramaticales distintas; revisar el contexto. |
| Tiempo | Señalar `antes`, `después`, `luego`, `pronto`, `tarde`, `temprano`, `todavía`, `aún`, `aun`, `ya`, `ayer`, `hoy`, `mañana`, `anteayer`, `siempre`, `nunca`, `jamás`, `próximamente`, `prontamente`, `anoche`, `enseguida`, `ahora`, `anteriormente`. Cuando el orden del proceso importe, expresarlo con el nombre de las etapas o mediante una secuencia inequívoca. |
| Modo y duda | Señalar `así`, `bien`, `deprisa`, `de repente`, `súbitamente`, `despacio`, `difícilmente`, `especialmente`, `estupendamente`, `fácilmente`, `mal`, `mejor`, `peor`, `rápidamente`, `regular`, `sinceramente`, `solamente`, `probablemente`, `quizá`, `quizás`, `posiblemente`, `tal vez`, `acaso`, `a lo mejor`, `ojalá`, `creo`; revisar también `alto` y `bajo` cuando sean calificaciones vagas. Expresar alcance e incertidumbre mediante la evidencia y sus límites. |
| Modalidad, persona y posesión | Evitar `puede`, `debe`, `permite` y variantes modales; evitar `yo`, `tú`, `él`, `ella`, `nosotros`, `vosotros`, `ellos`, `ellas`, y posesivos como `mío`, `suyo`, `su`, `nuestro`. Nombrar el sistema, componente, procedimiento, registro o autor de la acción. No reemplazar una modalidad incierta con una afirmación categórica sin sustento. |
| Verbos y voz | Redactar en presente para descripción vigente y en pasado para observaciones y resultados registrados. Evitar futuro y gerundios. Priorizar sujeto técnico + verbo activo + objeto: «La balanza registró la cantidad final». La voz impersonal resulta admisible si identifica con claridad la acción y su alcance. |
| Calificativos | Eliminar elogios y publicidad (`revolucionario`, `innovador`, `el mejor del mercado`) y juicios como `elevado`, `excesivo`, `lento` o `deficiente` sin umbral o comparación. Conservar los adjetivos técnicos necesarios para identificar una variable o un componente. |
| Término «problema» | La regla compartida solicita evitarlo y usar `cumple/no cumple` o `conforme/no conforme`. **Existe un conflicto pendiente** con los títulos y criterios docentes del capítulo; ver sección 6. Esas parejas expresan el resultado de comparar con un requisito definido y no sustituyen automáticamente una condición central de investigación. |

La revisión léxica no consiste en cambiar una palabra prohibida por un sinónimo igual de vago. Se conserva el significado técnico: «Los siete ciclos registraron diferencias positivas» comunica un resultado; «el sistema no cumple» exigiría un criterio de aceptación que permanece abierto.

### Párrafos y conectores

Para cada párrafo de desarrollo, verificar tres movimientos: **oración principal → oraciones complementarias fundamentales → cierre técnico**. La oración principal enuncia una idea; el desarrollo aporta procedimiento, dato, fuente o relación; el cierre explica la consecuencia limitada por la evidencia o enlaza con la subsección. La conclusión no debe repetir la primera oración.

La indicación de aplicar esa estructura a párrafos de menos de ocho líneas se toma como **criterio de revisión**, no como una licencia para dejar párrafos más largos sin estructura. Las metas de 50–100 palabras con máximo cuatro líneas y de 100–200 palabras con máximo doce líneas dependen del ancho, tipo y espaciado de la plantilla; pueden ser incompatibles entre sí. Comprobar la legibilidad en el PDF compilado y decidir divisiones por unidad de idea, sin rellenar hasta alcanzar una cuota de palabras.

Usar conectores cuando expliciten una relación real. `De acuerdo con` introduce una fuente; `En consecuencia` expresa una inferencia sustentada; `Sin embargo` marca contraste; `A diferencia de` exige dos términos comparables. `Cabe destacar que` y `Esto implica que` pueden resultar redundantes: preferir la afirmación directa cuando el vínculo sea evidente. El ejemplo narrativo del «error» aportado por el estudiante ilustra la progresión idea → desarrollo → cierre, pero su tono personal y sus ejemplos literarios no constituyen modelo de prosa técnica para esta tesis.

### Modelo de párrafo ajustado al proyecto

> La dosificación de harina exigió intervención directa del operario durante los siete ciclos registrados. Los tiempos observados estuvieron entre 53,2 y 66,6 s por ciclo, de acuerdo con los registros de campo. Este intervalo caracteriza la muestra estudiada y constituye una referencia para la evaluación comparativa del prototipo.

El ejemplo usa mediciones ya documentadas; no afirma que el tiempo sea excesivo ni anticipa una mejora del prototipo. Al incorporarlo al documento, enlazar la afirmación con el registro, tabla o apéndice correspondiente.

## 4. Revisión inicial del Marco Referencial existente

**Archivo revisado:** `docs/thesis/chapters/marcoref.tex`, junto con `main.tex`, el preámbulo, las tres figuras `.tex` del capítulo, el croquis disponible y las claves de `referencias.bib`. Esta es una revisión del borrador presente, no una certificación de los datos originales ni de aprobación académica.

| Apartado | Hallazgo y acción de revisión |
|---|---|
| Introducción | Ubica la panadería, el proceso y la dosificación de harina. Revisar la extensión y función de los párrafos de antecedentes tecnológicos: la introducción debe contextualizar sin adelantar una justificación técnica ni repetir los antecedentes. Corregir el futuro `serán incorporadas` y revisar las formulaciones modales `permite` y `deben`. Las tres claves de las fuentes tecnológicas y la de panificación figuran en `referencias.bib`; verificar que cada fuente respalde exactamente la afirmación citada cuando se edite ese contenido. |
| Antecedentes: procedimiento y flujo | La secuencia manual aparece narrada y se acompaña de un diagrama. Reducir repetición de pasos entre los párrafos y la explicación de la figura. El archivo se llama `dfd_dosificacion.tex`, pero su contenido es un **diagrama de flujo del procedimiento**, como indica la leyenda; `PROFESSOR_NOTES.md` señala que un DFD formal no está confirmado. No presentarlo como flujo de datos sin esa validación. |
| Antecedentes: distribución | En el párrafo que precede al croquis se repite literalmente «De acuerdo con el croquis levantado» (`marcoref.tex`, alrededor de la línea 129). El texto menciona cotas de 3,20 m y 0,90 m; aclarar qué representa cada una mediante el croquis y el registro original antes de interpretar recorridos. |
| Antecedentes: mediciones | Se informa muestra de siete ciclos, 24 cargas, objetivos de 5,0–8,0 kg, tiempos, diferencias y anexos. Mantener identificadas las condiciones de cada jornada y la única dosificación de la masa común del sábado. Revisar que cada cifra citada en el cuerpo coincida con la tabla y los registros; no extrapolar los siete ciclos a toda la producción. |
| Antecedentes: interpretación | La separación entre tiempo observado, tiempo de actividades agrupadas y proyección mensual está explicitada. Conservar la aclaración de que 259,7 s incluye manipulación y desplazamiento, y que 7128,6 s es una proyección condicionada. La diferencia de harina no equivale por sí misma a desperdicio ni incumplimiento de una tolerancia. Revisar `únicamente` como equivalente de `solamente` y las formas modales, sin debilitar estas salvedades. |
| Formulación | La frase actual se centra en 53,2–66,6 s por ciclo, en línea con D-003 y D-004. La versión académica presentada el 11/09/2026 es la referencia vigente, pero falta la aprobación definitiva del docente. Revisar si la formulación expresa una condición central y no solo un dato descriptivo, sin reescribirla ni desplazarla hacia la diferencia de harina por iniciativa de estilo. |
| Árbol | El nodo central coincide con la formulación actual. Las dos cajas de «efectos» presentan el mismo tiempo agregado para la muestra y para un escenario mensual; revisar con el docente si son efectos causales o formas de cuantificar la condición central. Comprobar que cada causa y subcausa tenga respaldo en la caracterización, incluida la referencia a 3–4 cargas por ciclo. No incorporar soluciones al árbol. |
| Objetivos | La secuencia requerimientos → diseño → implementación → verificación → evaluación es comprobable en principio y mantiene el tiempo de intervención como variable comparativa. Precisar en la futura metodología cómo se registrará esa intervención bajo condiciones equivalentes. El objetivo general y los específicos continúan sujetos a la validación de la formulación central; no convertir valores técnicos históricos en requisitos. |
| Apartados restantes | El archivo actual termina en Objetivos. `THESIS_STRUCTURE.md` contempla Motivación, Justificación, Límites y Alcances; están pendientes de redacción o incorporación. Evitar redactarlos como repetición de antecedentes o como promesa de beneficios todavía no medidos. |
| Portada | `main.tex` presenta «bajo costo / panaderías artesanales», mientras que el título definitivo permanece `NO DECIDIDO` en `DECISIONS.md`. No ajustar la portada como parte de una corrección de estilo hasta que se resuelva el título. |

**Comprobaciones de plantilla:** `main.tex` incorpora `marcoref.tex` y los apéndices de registros y tablas; el preámbulo usa `biblatex` con `referencias.bib`. Las figuras del proceso y del árbol se integran desde archivos TikZ. Mantener los comandos de cita, `\label`, `\ref`, leyendas y fuentes ya utilizados. La revisión del texto no exigió cambios de paquetes ni compilación.

## 5. Lista de aceptación para cada subsección

- [ ] Cumple la función y profundidad previstas en `THESIS_STRUCTURE.md`.
- [ ] El lector identifica la idea principal y su relación con la subsección siguiente.
- [ ] Cada afirmación técnica o cuantitativa tiene respaldo localizable y una interpretación proporcional a la evidencia.
- [ ] Mediciones, cálculos, proyecciones y requisitos propuestos están rotulados de manera distinta.
- [ ] Se mantienen coherentes terminología, cantidades, unidades, tabla, figura, leyenda, apéndice y texto.
- [ ] El párrafo contiene idea, desarrollo y cierre; no acumula hechos inconexos.
- [ ] Se revisaron adverbios, gerundios, modalidad, posesivos, persona, futuro, calificativos y repeticiones según la sección 3.
- [ ] Las citas respaldan las frases concretas a las que se adjuntan; las claves bibliográficas existen.
- [ ] Los títulos y referencias cruzadas siguen la plantilla; el documento compila si se cambió LaTeX.
- [ ] Los asuntos `NO DECIDIDO` permanecen abiertos y se anotan para validación.

## 6. Decisiones de estilo que requieren validación

1. **Uso de «problema».** La prohibición aportada por el estudiante entra en conflicto con la nomenclatura vigente del capítulo y los criterios del docente, que exigen formulación y árbol de problemas. `Cumple/no cumple` o `conforme/no conforme` solo describen una evaluación frente a un criterio explícito. Hasta aclarar el alcance de la prohibición, **conservar los títulos y conceptos estructurales actuales**, y evitar usos redundantes de la palabra en la prosa cuando la precisión no se pierda. Esta pauta de conservación es provisional; no registra una decisión académica nueva.
2. **Extensión en líneas y palabras.** Las cantidades facilitadas son metas editoriales que se deben contrastar con el PDF institucional. La prioridad de edición es la unidad argumental y la comprensión del lector. Si el docente exige un umbral formal, registrar el criterio exacto antes de aplicarlo a todo el capítulo.
3. **Neutralidad y voz activa.** La neutralidad se obtiene con afirmaciones verificables, no con la supresión de términos técnicos necesarios. La voz activa con sujeto técnico y la tercera persona son compatibles: «El registro consignó…», «La balanza indicó…».

## 7. Instrucción reutilizable para próximas revisiones

> Revisa la subsección indicada de la tesis con `redacción.md`, `AGENTS.md`, las decisiones vigentes, las notas docentes, la estructura del capítulo, el LaTeX y sus figuras, tablas, apéndices y bibliografía relacionados. Primero informa los hallazgos de argumento, evidencia y coherencia; después presenta una propuesta de redacción en el formato existente. Conserva cifras, fuentes, decisiones abiertas, alcance, citas y referencias. Distingue medición, cálculo, proyección e hipótesis o requisito. Aplica las restricciones de estilo del estudiante con revisión contextual. Señala cada contradicción que requiera decisión y verifica la compilación si modificas LaTeX.

Para otros capítulos, reemplazar `THESIS_STRUCTURE.md` por la función aprobada del capítulo correspondiente y ajustar la revisión macro: marco teórico por síntesis de ideas y fuentes, metodología por reproducibilidad y justificación de decisiones, resultados por reporte verificable, y discusión por interpretación y límites. La plantilla y las decisiones del proyecto permanecen como referencias comunes.
