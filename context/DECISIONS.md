# DECISIONS

> Registro compacto de decisiones del proyecto que afectan el trabajo futuro.
>
> No contiene datos experimentales detallados, estado de avance, notas del docente
> ni instrucciones operativas de los agentes.
>
> Estados utilizados:
>
> - **Confirmada:** decisión vigente.
> - **Reemplazada:** decisión anterior sustituida por otra.
> - **Descartada:** alternativa evaluada y rechazada.
> - **NO DECIDIDO:** asunto que no debe asumirse como resuelto.

---

## Decisiones vigentes

### D-001 — Función de las fuentes internas

**Estado:** Confirmada  
**Decisión:** Utilizar cada fuente según su función: `PROJECT_CONTEXT.md` como contexto canónico compacto; `research/notes/contexto_tesis_san_miguel.md` para registros y cálculos detallados; y el PDF presentado al docente como referencia de la versión académica efectivamente presentada.  
**Motivo:** Las fuentes tienen distinto nivel de detalle y fecha de elaboración.  
**Impacto:** Una fuente no debe sustituir automáticamente a otra fuera de su función. Si dos fuentes contienen datos incompatibles y no existe una corrección explícita, el conflicto debe señalarse y verificarse en lugar de resolverse por suposición.

---

### D-002 — Alcance técnico del proyecto

**Estado:** Reemplazada por `D-010`
**Decisión:** El desarrollo se delimita a la dosificación de harina previa al mezclado y amasado.  
**Motivo:** Es la operación específicamente seleccionada para el proyecto.  
**Impacto:** Mezclado, división, formado, fermentación, cocción y automatización integral de la panadería no forman parte del desarrollo principal. El proceso general de panificación puede utilizarse únicamente como contexto.

---

### D-003 — Versión académica de referencia

**Estado:** Confirmada  
**Decisión:** Para la formulación del problema, árbol de problemas y objetivos se toma como versión de referencia la presentada en el PDF del 11/09/2026.  
**Motivo:** Es la versión efectivamente preparada y presentada académicamente más reciente de estos apartados.  
**Impacto:** No regresar silenciosamente a formulaciones anteriores. Esta decisión establece precedencia de versión, pero NO implica que el contenido haya sido aprobado definitivamente por el docente.

---

### D-004 — Variable central de la formulación presentada

**Estado:** Reemplazada por `D-017` (2026-10-26)  
**Decisión:** En la versión académica actualmente presentada, la intervención directa del operario y el tiempo asociado al procedimiento manual constituyen la línea central del planteamiento. La diferencia de harina permanece como variable de evaluación, no como sustituto automático del problema central.  
**Motivo:** Así se encuentra estructurado el planteamiento, árbol y formulación presentados.  
**Impacto:** No redefinir el problema únicamente alrededor de exceso, error o diferencia de harina sin nueva evidencia o revisión académica.

**Revisión requerida:** La observación docente más reciente exige reconsiderar la formulación y el árbol integrando conjuntamente tiempo/intervención del operario y diferencia/exceso de harina. Esta anotación no reemplaza la decisión vigente: primero debe reconstruirse `01A — Diagnóstico y problema` y verificarse su coherencia con la evidencia; solo después corresponde registrar una decisión actualizada.

---

### D-005 — Concepto general de la solución

**Estado:** Confirmada  
**Decisión:** La solución propuesta será un prototipo automatizado de dosificación gravimétrica de ingredientes secos (harina, azúcar, sal y levadura; `D-015`), capaz de trabajar con una cantidad objetivo y medir la cantidad dosificada para controlar el proceso de alimentación.  
**Motivo:** Es el principio funcional adoptado para el proyecto.  
**Impacto:** Esta decisión define el concepto de solución, pero NO define todavía mecanismo de alimentación, accionamiento, sensores, controlador, actuadores ni estrategia de control.

---

### D-006 — Tratamiento de la evidencia

**Estado:** Confirmada  
**Decisión:** Distinguir siempre entre medición de campo, cálculo derivado, proyección e hipótesis o requisito propuesto.  
**Motivo:** Cada categoría posee distinto nivel de evidencia.  
**Impacto:** No inventar mediciones faltantes, reconstruir datos mediante supuestos ni presentar cálculos o proyecciones como observaciones reales.

---

### D-007 — Terminología e interpretación

**Estado:** Confirmada  
**Decisión:** Para cada ingrediente utilizar preferentemente `cantidad objetivo`, `cantidad dosificada` o `incorporada` y `diferencia` (por ejemplo, `diferencia de harina`). Reservar `masa` para la masa de panificación cuando corresponda.  
**Motivo:** Evitar ambigüedad entre la harina dosificada y la masa elaborada posteriormente.  
**Impacto:** No denominar automáticamente `desperdicio` a una diferencia positiva de harina ni `tiempo perdido` al tiempo empleado por el operario sin evidencia que sustente esas interpretaciones.

---

### D-008 — Evaluación del prototipo

**Estado:** Confirmada  
**Decisión:** El desempeño del prototipo deberá evaluarse experimentalmente frente al procedimiento manual bajo condiciones comparables.  
**Motivo:** Las mejoras del sistema no pueden asumirse antes de construirlo y medirlo.  
**Impacto:** Tiempo, intervención del operario, diferencia respecto de la cantidad objetivo y repetibilidad deberán obtenerse mediante ensayos; no deben presentarse como mejoras garantizadas durante la etapa de diseño.

---

### D-009 — Parámetros técnicos todavía abiertos

**Estado:** Confirmada  
**Decisión:** Las selecciones técnicas y los requisitos numéricos que aún no estén fundamentados permanecen abiertos.  
**Motivo:** Deben derivarse del relevamiento, bibliografía, requerimientos de diseño y validación posterior.  
**Impacto:** No asumir como definitivos mecanismo de alimentación, accionamiento, capacidad de almacenamiento, rango final, sensores, controlador, actuadores, estrategia de control, tolerancia, tiempo objetivo, arquitectura mecánica/electrónica ni dimensiones.

Las referencias históricas de **5–15 kg**, **40–50 kg** y **+20 g** son únicamente antecedentes o propuestas previas y NO constituyen requisitos vigentes.

**Actualización 2026-10-26:** los valores de 5–15 kg, 5 g de resolución, ±0,5 % y 50 kg de tolva se retiraron de los Alcances de `marcoref.tex`. Los Alcances citan como referencia las cantidades registradas por ciclo (5 000–8 000 g de harina; 30–500 g de azúcar, sal y levadura) y remiten el rango final a los requerimientos y la resolución y tolerancias al estudio de tolerancias.

---
### D-010 — Insumos considerados

**Estado:** Reemplazada por `D-015` (2026-10-26)  
**Decisión:** La harina es el insumo principal de diseño, desarrollo y validación del prototipo. El sistema contemplará la posibilidad de dosificar otros insumos secos de panificación.  
**Motivo:** Observación del acta de evaluación del perfil; la harina se mantiene como insumo principal por decisión del estudiante.  
**Impacto:** Problema, árbol y diagnóstico permanecen basados en la evidencia de harina. Qué otros insumos y con qué nivel de demostración permanecen abiertos (`A-005`). Mezclado, división, formado, fermentación, cocción y automatización integral siguen fuera del desarrollo principal.

---

### D-011 — Modelamiento dinámico

**Estado:** Confirmada  
**Decisión:** Se desarrollará el modelamiento matemático del comportamiento dinámico del sistema de alimentación y pesaje como base para el diseño del control.  
**Motivo:** Observación del acta de evaluación del perfil. Reemplaza la exclusión del modelamiento registrada en Límites.  
**Impacto:** El tipo de modelo (físico, identificación experimental o combinado) y la estrategia de control permanecen abiertos (`A-004`).

---

### D-012 — Análisis económico

**Estado:** Confirmada  
**Decisión:** Se elaborará el análisis económico del costo de fabricación del prototipo respecto del retorno de la inversión.  
**Motivo:** Observación del acta de evaluación del perfil. Reemplaza la exclusión del análisis de rentabilidad y recuperación de la inversión registrada en Límites.  
**Impacto:** Indicadores, beneficios considerados, supuestos y moneda permanecen abiertos (`A-006`). Los beneficios no medidos deben declararse como proyección o hipótesis (`D-006`, `D-008`); la diferencia de harina no se valora como desperdicio (`D-007`).

---

### D-013 — Insumos secos adicionales

**Estado:** Reemplazada por `D-016` (2026-10-26)  
**Decisión:** Además de la harina, el diseño considera la dosificación de azúcar, sal y levadura. Se excluyen manteca (semisólida), agua (líquida), harina de malta y mejorador (no utilizado en la panadería).  
**Motivo:** Declaración del estudiante del 2026-10-05 sobre los insumos utilizados en San Miguel; cantidades medidas reportadas en `research/notes/insumos_secos_recetas.md`.  
**Impacto:** Las cantidades por preparación son mediciones reportadas por el estudiante, con trazabilidad pendiente (fecha, instrumento, procedimiento y repeticiones). La levadura utilizada es fresca; su dosificación desde tolva y el nivel de demostración permanecen abiertos (`A-005`).

---

### D-014 — Alcance del perfil (Taller de Grado I)

**Estado:** Confirmada  
**Actualización 2026-11-06:** la numeración de este registro corresponde a la versión anterior. D-020 agrupa requerimientos y tolerancias en el OE1 y sitúa el diseño mecánico y de medición en el OE2. Sigue pendiente precisar con el docente qué nivel de diseño acredita el cumplimiento del perfil; el CAD preliminar no equivale al diseño de detalle completo.
**Decisión:** El perfil desarrolla los objetivos específicos 1 a 3: requerimientos, tolerancias y diseño de los subsistemas mecánico y de medición gravimétrica. La evaluación experimental no se desarrolla en el perfil.  
**Motivo:** Declaración del estudiante del 2026-10-14. Es coherente con la división del primer objetivo específico: la indicación docente de demostrar «los objetivos 1 y 2» abarca los objetivos 1 a 3 de la numeración vigente.  
**Impacto:** El capítulo 3 demuestra los objetivos 1 a 3 y el capítulo 2 prioriza sus fundamentos. No modifica `D-008`: falta confirmar que la evaluación experimental (objetivo 6) se mantiene para Taller de Grado II.

---

### D-015 — Alcance: ingredientes secos

**Estado:** Confirmada  
**Decisión:** El proyecto abarca la dosificación de los ingredientes secos de cada preparación: harina, azúcar, sal y levadura en polvo. El diagnóstico, el problema, el árbol, los objetivos y los alcances se basan en los cuatro ingredientes. El prototipo dosifica los cuatro y se evalúa con ellos; la harina se mantiene como insumo principal de diseño por ser la mayor cantidad por ciclo.  
**Motivo:** Indicación docente de la clase del 21/10/2026 (ampliar título, objetivo general y problemática a ingredientes secos) e instrucción del estudiante del 2026-10-26.  
**Impacto:** Reemplaza `D-010` y resuelve `A-005`. Lo declarado en alcances debe demostrarse con los cuatro ingredientes. Mezclado, división, formado, fermentación, cocción y automatización integral siguen fuera del desarrollo principal.

---

### D-016 — Ingredientes secos y fuente de cantidades

**Estado:** Confirmada  
**Decisión:** Los ingredientes dosificados son harina, azúcar, sal y levadura en polvo. Se excluyen manteca (semisólida), agua (líquida), harina de malta y mejorador. Las cantidades objetivo provienen de la receta de referencia por preparación, y las cantidades incorporadas, del levantamiento del 02/09/2026 y 05/09/2026 (`research/notes/levantamiento_dosificacion_san_miguel.md`).  
**Motivo:** Levantamiento aportado por el estudiante el 2026-10-25. El azúcar, la sal y la levadura se registraron con una balanza propia del investigador, pesando el envase con cada carga.  
**Impacto:** Reemplaza `D-013` y las cantidades de `research/notes/insumos_secos_recetas.md` (levadura fresca, 2026-10-05). Trazabilidad pendiente: fecha real del registro de azúcar, sal y levadura, modelo y resolución de la balanza del investigador, origen de la receta y respaldo fotográfico.

---

### D-017 — Formulación del problema

**Estado:** Confirmada  
**Decisión:** La formulación integra el tiempo del operario y la diferencia positiva respecto de las cantidades objetivo, en proyección mensual (22 jornadas ordinarias y 4 sábados): 2 h 42 min y 1,976 kg de harina, 280 g de azúcar, 236 g de sal y 64 g de levadura (valores actualizados el 2026-10-28 con el levantamiento corregido; antes 2 h 43 min, 336 g y 76 g).  
**Motivo:** Revisión requerida en `D-004` y elección del estudiante del 2026-10-26.  
**Impacto:** Reemplaza `D-004`. Los valores de azúcar, sal y levadura son balances netos de excesos y déficits por ciclo; el texto debe aclararlo y no presentarlos como diferencia de cada preparación. La aprobación docente sigue abierta (`A-002`).

---

### D-018 — Objetivos y título vigentes

**Estado:** Confirmada  
**Actualización 2026-11-06:** D-020 sustituye exclusivamente la estructura de siete objetivos específicos por seis. El objetivo general y el título de esta decisión se conservan; su aprobación académica sigue abierta.
**Decisión:** Objetivo general: «Desarrollar un prototipo automatizado de dosificación gravimétrica de harina, azúcar, sal y levadura según la cantidad objetivo de cada preparación de la Panadería San Miguel». Se mantienen siete objetivos específicos con la numeración de `D-014`; el objetivo 6 compara tiempo de dosificación, intervención del operario, diferencia respecto de la cantidad objetivo y repetibilidad. Título en `main.tex`: «Diseño de una dosificadora gravimétrica automatizada de ingredientes secos para panaderías artesanales» (elección del estudiante del 2026-10-26; reemplaza «Diseño y construcción … para la Panadería San Miguel»).  
**Motivo:** Instrucción del estudiante del 2026-10-26; correspondencia entre título, objetivo general y problema.  
**Impacto:** Se retira «bajo costo» del título y se conserva «panaderías artesanales», aunque el objetivo general nombra a la Panadería San Miguel; verificar con el docente la correspondencia entre título y objetivo general. La aprobación docente del título y de los objetivos sigue abierta (`A-001`, `A-002`). Siete objetivos superan el rango usual de 3 a 6 de la plantilla; validar con el docente.


---

### D-019 — Alimentador de los cuatro insumos

**Estado:** Confirmada
**Decisión:** Los cuatro ingredientes (harina, azúcar, sal y levadura en polvo) se alimentan con tornillo: uno para la harina y tornillos menores para azúcar, sal y levadura. El tornillo (helicoidal y tubo) se selecciona entre productos comerciales; se diseñan las tolvas.
**Motivo:** Elección del estudiante del 2026-10-28, con base en la literatura revisada: el tornillo permite flujo grueso y fino regulando la velocidad y detiene el flujo al parar el motor; las compuertas fallaron con insumos secos (Bachtiar, Rumapea); los prototipos de varios insumos usaron tornillo (Humaira, Joni, David, Sánchez); la sal absorbe humedad y la levadura en polvo no tiene datos de flujo.
**Impacto:** Resuelve el mecanismo de alimentación de `A-004`. Beverloo (descarga por gravedad) y el cálculo del eje salen de los fundamentos. Falta verificar la disponibilidad de helicoidales comerciales en Santa Cruz o por importación; si hay que fabricarlo, vuelve el cálculo del eje. Diámetros, pasos, velocidades, accionamiento y la elección entre balanza común o por insumo siguen abiertos.

### D-020 — Agrupación de requerimientos y tolerancias

**Estado:** Confirmada como versión de trabajo; aprobación docente pendiente (`A-002`).
**Decisión:** Aplicar seis objetivos específicos: (1) requerimientos funcionales y técnicos, incluidas tolerancias para harina, azúcar, sal y levadura en polvo; (2) diseño mecánico y de medición mediante dimensionamiento, selección, CAD y planos; (3) diseño del control mediante modelamiento y simulación; (4) implementación; (5) evaluación frente a requisitos y comparación con el procedimiento manual; (6) costo de fabricación y retorno de inversión. Los enunciados completos se encuentran en `docs/thesis/chapters/marcoref.tex`.
**Motivo:** Indicación docente de agrupar los anteriores objetivos 1 y 2, confirmada por el estudiante, y solicitud explícita del 06/11/2026 de aplicar los objetivos revisados.
**Impacto:** Los anteriores OE1 y OE2 se integran en OE1; los anteriores OE3 a OE7 pasan a OE2 a OE6. Se alinean cronograma, Gantt y referencias activas; se conserva la numeración en registros históricos. El perfil aborda OE1 y el desarrollo de OE2, con nivel de diseño exigido pendiente de confirmación. Las fechas, parámetros abiertos y aprobación académica no quedan resueltos por este cambio. Se conservan las cuatro variables de comparación: tiempo de dosificación, intervención del operario, diferencia respecto de la cantidad objetivo y repetibilidad.

---

### D-021 — Organización del capítulo 2 y función de las figuras

**Estado:** Confirmada como versión de trabajo por el estudiante (06/11/2026).
**Decisión:** Organizar el capítulo en 2.1 Estado del Arte narrativo sin figuras ni tablas, 2.2 Enfoques por áreas y 2.3 Fundamentos. La revisión reciente se concentra en trabajos de 2021–2026. Las fuentes anteriores se mantienen para análisis técnico explícito o bases teóricas; no se presentan como literatura reciente ni se eliminan figuras solo por su año.
**Motivo:** Aclaración docente y autorización del estudiante de aplicar la propuesta de inventario del 06/11/2026.
**Impacto:** Arquitecturas, alimentación, medición y control se reúnen bajo Enfoques. Respuesta conceptual de la celda y columna en caída pasan a Fundamentos. Las fotografías comerciales DF-B e IF-A se reincorporan en Productos comerciales por instrucción expresa posterior del estudiante del 06/11/2026; permanecen el análisis y las citas de las fichas, identificadas como declaraciones del fabricante. La conformidad docente del uso de fichas y fuentes antiguas y la diversidad de proveedores siguen pendientes; no se registra una aprobación académica inexistente. Se conservan las selecciones abiertas de A-004.

---

## Decisiones abiertas

Los siguientes asuntos están **NO DECIDIDOS** y ningún agente debe cerrarlos sin nueva evidencia, decisión del estudiante o indicación docente.

### A-001 — Título definitivo

**Estado:** NO DECIDIDO

El título vigente en `main.tex` está registrado en `D-018`; falta la aprobación docente.

La expresión `bajo costo` se retiró del título
(2026-10-26); sigue abierto si `bajo costo` formará parte de los requerimientos.

La revisión docente más reciente no aprueba definitivamente el título. Si se conserva
`bajo costo`, debe definirse previamente un criterio comparativo defendible frente a
soluciones comerciales de funcionalidad comparable, considerando prestaciones y precio.

---

### A-002 — Aprobación definitiva del problema, árbol y objetivos

**Estado:** NO DECIDIDO

El PDF del 11/09/2026 constituye la versión académica presentada de referencia,
pero no existe evidencia suficiente para registrarla como aprobación definitiva del docente.

La revisión docente más reciente requiere correcciones sustanciales en problema,
árbol y objetivos; por tanto, estos apartados deben permanecer abiertos.

---

### A-003 — Cobertura final del relevamiento

**Estado:** NO DECIDIDO

El plan previo contemplaba dos jornadas ordinarias y un sábado, mientras que la
versión presentada del objetivo específico utiliza una jornada ordinaria y una jornada
de sábado.

No asumir que el segundo día ordinario fue eliminado formalmente hasta disponer
de una confirmación o decisión explícita.

---

### A-004 — Selecciones y requisitos técnicos finales

**Estado:** NO DECIDIDO

Continúan abiertos, entre otros:

- mecanismo de alimentación (resuelto por `D-019`: tornillo para los cuatro insumos);
- tipo de accionamiento;
- capacidad de almacenamiento;
- rango final de dosificación;
- sensores;
- controlador;
- actuadores;
- estrategia de control;
- tolerancia de aceptación;
- tiempo objetivo;
- arquitectura mecánica;
- arquitectura electrónica;
- dimensiones finales.
- tipo de modelo dinámico;
- tolerancias por insumo;

Una propuesta, ejemplo bibliográfico, valor observado o valor utilizado en un
borrador no convierte automáticamente ninguno de estos elementos en requisito.

El ejemplo docente de `50 kg` fue únicamente pedagógico y no constituye un
requerimiento del prototipo. El rango deberá derivarse de los datos de campo y del diseño.

### A-005 — Insumos adicionales y nivel de demostración

**Estado:** Resuelto por `D-015` (2026-10-26)

El prototipo dosifica y se evalúa con harina, azúcar, sal y levadura en polvo. La duda sobre la levadura fresca quedó sin efecto porque el levantamiento registra levadura en polvo (`D-016`).

---

### A-006 — Método del análisis económico

**Estado:** NO DECIDIDO

Pendiente definir indicador (TIR, VAN, período de recuperación u otro), beneficios y supuestos considerados, y moneda (el template indica moneda local).
