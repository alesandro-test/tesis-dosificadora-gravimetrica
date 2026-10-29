# Guion de presentación al posible tutor (máximo 5 minutos)

> Destinatario: ingeniero electromecánico, docente de Control Continuo y Discreto
> (Ing. Mario Borda, nombre por confirmar).
> Objetivo de la reunión: explicar el problema y la idea de solución, resolver
> dudas de control y pedirle que acepte la tutoría.
> Fuentes: `main.pdf`, `PROJECT_CONTEXT.md`, `DECISIONS.md`,
> `levantamiento_dosificacion_san_miguel.md` y `FICHAS_2.6.5.md`, analizadas en el
> cuaderno de NotebookLM «Tutor - presentación 5 min (dosificadora San Miguel)».

## Tiempos

| Bloque | Diapositivas | Tiempo |
|---|---|---|
| Presentación y caso | 1–2 | 0:30 |
| Problema | 3–5 | 1:30 |
| Solución propuesta | 6–7 | 1:30 |
| Dudas de control y cierre | 8–9 | 1:30 |

## Diapositiva 1 — Presentación
Buenos días, ingeniero. Soy Alesandro Paredes Zenteno, estudiante de Ingeniería
Mecatrónica en Taller de Grado I. Mi proyecto es el diseño de una dosificadora
gravimétrica automatizada de ingredientes secos para panaderías artesanales, con
la Panadería San Miguel de Santa Cruz como caso de estudio.

## Diapositiva 2 — El caso
San Miguel ya tiene amasadora, divisora, horno y balanza digital, pero los
ingredientes secos se dosifican a mano: harina, azúcar, sal y levadura en polvo.
Esa etapa, justo antes del amasado, es la que estudia el proyecto.

## Diapositiva 3 — Procedimiento actual
El operario tara la balanza y va al saco de harina, a 3,20 m de distancia. Hace
de 3 a 4 cargas por ciclo con un recipiente y termina con un ajuste final. Después
agrega azúcar, sal y levadura con un mismo envase plástico, una carga por
ingrediente, a ojo y sin mirar la balanza.

## Diapositiva 4 — Lo medido
Registré 7 ciclos: 5 en una jornada ordinaria y 2 un sábado. En la harina, el
objetivo acumulado fue 48,000 kg y se cargaron 48,143 kg. Los 7 ciclos quedaron
por encima del objetivo, entre 11 y 38 g por ciclo. En azúcar, sal y levadura hubo
diferencias positivas y negativas según el ciclo. El tiempo total medido fue de
566 segundos.

## Diapositiva 5 — Problema
Con esos registros proyecté un mes de 22 jornadas ordinarias y 4 sábados. En ese
escenario, el operario destina 2 horas 42 minutos al mes a dosificar, con una
diferencia positiva de 1,976 kg de harina, 280 g de azúcar, 236 g de sal y 64 g de
levadura respecto de las cantidades objetivo. Las causas son los traslados, el
ajuste final de la harina y la carga sin lectura de los ingredientes menores.

## Diapositiva 6 — Idea de solución
La propuesta es un prototipo por lotes. Cada ingrediente tiene su tolva y su
tornillo alimentador: uno grande para la harina y tornillos menores para azúcar,
sal y levadura. El material cae a un recipiente sobre celda de carga y el
controlador detiene cada tornillo al llegar a la cantidad objetivo que programa
el operario. Hay que cubrir de 5 a 8 kg de harina y de 20 a 400 g de los otros
ingredientes.

## Diapositiva 7 — Cómo se corta la dosificación
Para el corte, la literatura usa dos etapas: flujo grueso a alta velocidad y
flujo fino cerca del objetivo. El motor se detiene antes de llegar, con un
adelanto que compensa el material que todavía está cayendo y el retardo del
actuador. Algunos autores corrigen ese adelanto de un lote al siguiente con el
error final. El tornillo ya está decidido. El modelo dinámico, la estrategia de
control y el controlador siguen abiertos, y ahí necesito su orientación.

## Diapositiva 8 — Dudas para el ingeniero
1. **Modelo.** ¿Me conviene un modelo físico del tornillo y de la columna en
   caída, o identificar la planta con respuestas al escalón de la velocidad del
   motor? ¿Qué nivel de modelo es razonable para el alcance de Taller de Grado?
2. **Estrategia.** ¿Bastan las dos etapas con corte anticipado y corrección
   entre lotes ($P_{k+1} = P_k + \gamma e_k$), o hace falta un lazo cerrado sobre
   el caudal (por ejemplo, PI discreto sobre la velocidad del tornillo)?
3. **Muestreo y filtrado.** El HX711 entrega 10 u 80 muestras por segundo y el
   promedio móvil añade retardo. ¿Cómo elijo la frecuencia de muestreo y el
   filtro para no detectar tarde el corte en el flujo fino?
4. **Controlador.** Para ese lazo, ¿un microcontrolador como el ESP32 alcanza, o
   recomienda un PLC?

## Diapositiva 9 — Cierre
En resumen, el problema está medido en San Miguel y la arquitectura mecánica está
definida, pero el diseño del control todavía está abierto. Me gustaría contar con
usted como tutor del proyecto. Muchas gracias.

## Preguntas de reserva (solo si sobra tiempo)

- Para cubrir de 20 g a 8 kg, ¿una sola celda de carga es suficiente o conviene
  una balanza por insumo? (Sigue abierto entre balanza común y balanza por insumo).
- Para la corrección entre lotes, ¿un promedio ponderado (EWMA) o aprendizaje
  iterativo, y cómo evito que un lote anómalo desajuste el siguiente?
- ¿Cómo represento la zona muerta de arranque del tornillo y la variación de
  densidad de la harina dentro del modelo?

## Precauciones

- Llamar «proyección» o «escenario mensual» a las 2 h 42 min y a las diferencias
  mensuales; no son mediciones mensuales.
- No llamar «desperdicio» a la harina adicional; se incorpora al producto.
- No prometer mejoras: el desempeño se evaluará con ensayos frente al
  procedimiento manual.
- Las diferencias de azúcar, sal y levadura son balances netos de excesos y
  déficits por ciclo.
