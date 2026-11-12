# PROJECT_CONTEXT

> Contexto estable y compacto de la tesis.
>
> Su función es permitir que un agente nuevo comprenda rápidamente el proyecto,
> su alcance, la evidencia disponible y las principales restricciones de interpretación.
>
> Para registros, tablas y cálculos detallados consultar
> `research/notes/contexto_tesis_san_miguel.md`.

## 1. Proyecto

Proyecto de grado de Ingeniería Mecatrónica.

**Caso de estudio:** Panadería San Miguel, Santa Cruz de la Sierra, Bolivia.

**Título provisional:**

> Diseño de una dosificadora gravimétrica automatizada de ingredientes
> secos para panaderías artesanales.

El título todavía está sujeto a revisión académica (`D-018`, `A-001`).

La Panadería San Miguel presenta mecanización parcial: dispone de equipos como
amasadora, divisora/cortadora, horno y balanza digital, pero la dosificación de
ingredientes continúa realizándose manualmente.

El docente indicó completar primero el estudio de San Miguel antes de considerar
otros establecimientos.

## 2. Enfoque y alcance

El proyecto estudia la **dosificación de ingredientes secos**: harina, azúcar,
sal y levadura en polvo (`D-015`, `D-016`). La harina es el insumo principal de
diseño por ser la mayor cantidad por ciclo. Diagnóstico, problema, objetivos y
evaluación abarcan los cuatro ingredientes; manteca y agua quedan fuera.

Se pretende desarrollar un prototipo automatizado de dosificación gravimétrica
y posteriormente comparar su desempeño con el procedimiento manual bajo
condiciones equivalentes.

Las principales variables de evaluación son:

- tiempo de dosificación;
- intervención del operario;
- cantidad objetivo y cantidad dosificada de cada ingrediente;
- diferencia respecto de la cantidad objetivo;
- repetibilidad.

Quedan fuera del alcance principal el mezclado, división y formado,
fermentación, cocción y automatización integral de la panadería.

El proceso general de elaboración del pan se utiliza únicamente para contextualizar
la etapa estudiada.

## 3. Procedimiento manual observado

El ciclo actual comprende, de forma general:

`preparación y tara → desplazamiento → cargas de harina → ajuste final → comprobación → devolución del recipiente`

Durante el proceso, el operario transporta manualmente harina desde la zona de
almacenamiento hasta la balanza.

El recorrido registrado entre ambas zonas es de aproximadamente **3,20 m por trayecto**.

A continuación de la harina, el operario incorpora azúcar, sal y levadura sobre el
mismo recipiente receptor con un único envase plástico, una carga por ingrediente,
estimada por experiencia y sin lectura de la balanza ni ajuste:

`desplazamiento al saco de azúcar → llenado → retorno y vertido → sal desde la mesa → levadura desde la mesa`

El saco de azúcar está en la zona de almacenamiento, junto a la harina; la sal y la
levadura están sobre la mesa de ingredientes.

La dosificación manual no constituye por sí sola el problema.
El diagnóstico debe sustentarse en evidencia cuantificada de tiempo,
intervención, desplazamientos y diferencias de dosificación.

## 4. Relevamiento disponible

Se encuentran documentadas dos jornadas:

- **02/09/2026:** jornada ordinaria, 5 ciclos.
- **05/09/2026:** sábado, 2 ciclos.

Total de la muestra:

- **7 ciclos de dosificación**;
- **24 cargas principales**;
- **55 trayectos**;
- **176,0 m** de desplazamiento acumulado calculado;
- **48,000 kg** de harina objetivo;
- **48,143 kg** de harina dosificada;
- diferencia neta observada: **+143 g**;
- tiempo acumulado: **411,9 s (6 min 51,9 s)**;
- tiempos individuales observados: **53,2–66,6 s/ciclo**;
- cantidades objetivo observadas: **5,000–8,000 kg/ciclo**.

Azúcar, sal y levadura en los mismos 7 ciclos (`research/notes/levantamiento_dosificacion_san_miguel.md`):

- objetivo / incorporado: azúcar **1 590 / 1 615 g**, sal **850 / 864 g**,
  levadura **200 / 207 g**;
- diferencias por ciclo: azúcar **−7 a +21 g**, sal **−7 a +9 g**,
  levadura **−2 a +3 g**;
- tiempo acumulado: **154,3 s**; total con harina: **566,2 s**;
- cantidades objetivo observadas: **20–400 g/ciclo**;
- medición con una balanza propia del investigador, pesando el envase con cada carga;
- instrumento identificado por el estudiante el 11/11/2026: SF-400, capacidad indicada 10 kg y división de lectura 1 g; exactitud y calibración no acreditadas.

Proyección mensual (22 jornadas ordinarias + 4 sábados): **2 h 42 min**;
diferencia positiva de **1,976 kg** de harina, **280 g** de azúcar, **236 g** de sal y
**64 g** de levadura (balance neto en los tres últimos).

Las preparaciones registradas fueron pan casero, marraqueta, pan francés
y una masa común del sábado utilizada posteriormente para empanadas y rollos.

La masa común del sábado corresponde a **un solo ciclo de dosificación** y no debe
duplicarse al analizar los productos derivados.

El plan original contemplaba dos jornadas ordinarias y un sábado.
Actualmente están documentadas una jornada ordinaria y un sábado;
queda pendiente completar la segunda jornada o documentar una modificación del plan.

Estos resultados describen únicamente la muestra registrada y no deben
generalizarse automáticamente a toda la producción.

## 5. Interpretación de la evidencia

En los siete ciclos registrados, la cantidad final de harina quedó por encima
de la cantidad objetivo.

Esto muestra un **sesgo positivo en la muestra observada**, pero no demuestra que:

- el procedimiento siempre dosifique en exceso;
- exista desperdicio;
- exista una pérdida económica;
- toda operación manual sea ineficiente.

En el azúcar, la sal y la levadura, la cantidad incorporada quedó por encima de la
receta en unos ciclos y por debajo en otros; los totales y proyecciones son balances
netos y no representan la diferencia de cada preparación. No se midió el efecto de
estas diferencias sobre el producto.

Utilizar según corresponda los términos **diferencia**, **desviación**,
**exceso** o **déficit**.

La harina adicional no debe denominarse automáticamente desperdicio,
porque se incorpora posteriormente al producto.

Las proyecciones calculadas a partir de las jornadas observadas deben identificarse
siempre como escenarios o proyecciones, nunca como mediciones mensuales.

## 6. Concepto del prototipo

Conceptualmente, la solución considera:

`almacenamiento → dosificación → pesaje gravimétrico → control → descarga`

El operario deberá poder establecer una cantidad objetivo para cada ingrediente.
El sistema medirá la cantidad dosificada mediante un sistema gravimétrico y
controlará automáticamente la alimentación hasta alcanzar el valor programado.

La solución integrará componentes mecánicos, electrónicos y de control,
por lo que no se limita al diseño mecánico de una tolva o mecanismo de descarga.

Esta es una arquitectura conceptual; la selección definitiva de componentes
todavía no está cerrada.

## 7. Aspectos técnicos todavía abiertos

Todavía no se consideran definidos definitivamente:

- mecanismo de alimentación y accionamiento;
- capacidad de almacenamiento;
- rango final de dosificación;
- sensores;
- controlador;
- actuadores;
- estrategia de control;
- arquitectura mecánica y electrónica;
- tolerancia de aceptación;
- tiempo objetivo;
- dimensiones finales.

Las referencias conceptuales previas de **5–15 kg por lote**,
**40–50 kg de almacenamiento** y **+20 g** no constituyen requisitos definitivos y
se retiraron de los Alcances (`D-009`).

Los requerimientos deberán derivarse del relevamiento, la bibliografía,
las decisiones de diseño y la validación experimental.

## 8. Criterios metodológicos

Distinguir siempre entre:

**medición de campo → cálculo derivado → proyección → hipótesis/requisito propuesto**

No inventar mediciones faltantes ni reconstruirlas mediante supuestos.

No asumir mejoras del prototipo antes de su construcción y evaluación.

La repetibilidad debe evaluarse mediante mediciones comparables.

Para cada ingrediente utilizar preferentemente **cantidad objetivo**,
**cantidad dosificada** o **incorporada** y **diferencia** (`D-007`).

Reservar **masa** para la masa de panificación cuando corresponda.

## 9. Fuentes internas

- Datos y cálculos detallados: `research/notes/contexto_tesis_san_miguel.md`
- Levantamiento con azúcar, sal y levadura: `research/notes/levantamiento_dosificacion_san_miguel.md`
- Evidencia y observaciones docentes: `research/docente/`
- Decisiones vigentes: `context/DECISIONS.md`
- Estado actual del trabajo: `context/STATUS.md`
- Criterios docentes condensados: `context/PROFESSOR_NOTES.md`
- Estructura académica: `context/THESIS_STRUCTURE.md`
- Referencias estructurales: `research/referencias_estructurales/`
- Documento de tesis: `docs/thesis/`
- Bibliografía: `docs/thesis/bibliography/referencias.bib`
