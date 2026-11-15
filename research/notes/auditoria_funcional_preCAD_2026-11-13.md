# Auditoría funcional previa al CAD

Fecha: 13/11/2026. Alcance: árbol de objetivos del producto, caja negra, descomposición funcional y subfunciones de medición/corte. La edición no modifica RF/RNF, tolerancias, casa de calidad, morfología, arquitectura ni contexto.

## Criterios y referencias

Se consultaron AGENTS, contexto, decisiones D-019 a D-024, estado, notas docentes, THESIS_STRUCTURE, plantilla institucional y redacción.md. Se contrastaron visualmente las Figuras 3.4–3.6 de María Julia (posiciones físicas 28–29 del PDF, árbol/caja negra/funciones), los dibujos de árbol y caja transparente de V9 (imágenes originales 5 y 7 extraídas del DOCX) y la revisión documentada de la progresión narrativa de SySO en `revision_propuesta_maria_julia_2026-11-12.md`.

Las figuras de las referencias sirven para distinguir niveles: objetivo del producto → transformación exterior → funciones internas → detalle del lazo. El árbol de María Julia mezcla algunos resultados y componentes; esa mezcla no se traslada. V9 muestra una jerarquía por cualidades, pero sus variables hidrostáticas, ergonomía, estanqueidad y torque no se incorporan a San Miguel. El criterio de SySO se utiliza para introducir cada figura y explicar sus consecuencias en el diseño, sin duplicar extensamente todos los rótulos.

## Cambios aplicados

1. **Árbol:** conserva tres ramas y cuatro ingredientes. Dosificación conserva banda y repetibilidad. Operación distingue intervención manual, programación/estado y duración de ciclo; integración incluye espacio/recarga/retiro, limpieza/mantenimiento y protección. Se evita usar «informar» como único sustituto del objetivo temporal o introducir motores como metas. Se mantiene la trazabilidad RF/RNF al cierre del apartado.
2. **Caja negra:** aclara el límite funcional almacenamiento–alimentación–pesaje–entrega al balde. Identifica como entrada los ingredientes separados y el recipiente vacío; recarga y manipulación del recipiente corresponden al operario. Mezclado y amasado quedan fuera. No obliga a desplazamiento ni a inmovilidad del balde.
3. **Descomposición:** «reunir las dosis en el balde» sustituye «entregar al operario» para representar una función de material de la máquina. El retiro sigue siendo una acción externa. Se explicita la secuencia y la interrupción RF-07, la alimentación eléctrica de los grupos y la diferencia entre descarga directa y vaciado auxiliar. El dibujo es funcional y no fija un recipiente o sensor por bloque.
4. **Subfunciones:** se identifica el principio de aumento de peso de las configuraciones representadas; se distingue cero/tara del ciclo y referencia de cada ingrediente. Se usa `q_i=R-R_i` para cantidad recibida, evitando llamar entregada al balde a una cantidad que solo se midió en el auxiliar. La referencia siguiente depende de si hay acumulación o vaciado entre ingredientes; no se exige una calibración por etapa. La retención exige comprobación adicional.

## Archivos y límites de edición

- `docs/thesis/chapters/marcopractico/propuesta.tex`: desde «Diseño conceptual de los subsistemas» hasta antes de «Casa de calidad preliminar».
- `docs/thesis/images/marcopractico/subfunciones_dosificadora.tex`: etiquetas de cantidad recibida, incremento y referencia estable.

No se añaden paquetes, macros, bibliografía, criterios numéricos ni resultados experimentales. No se cambia el criterio confirmado de tornillos ni se selecciona entre A/B/C. La compilación y revisión visual de las páginas finales quedan a cargo del agente integrador para evitar escrituras simultáneas en los auxiliares de LaTeX.

## Pendientes que afectan el cierre funcional

- Se alineó el QFD del `.tex` con las nueve necesidades y catorce características del Excel en una segunda tarea autorizada; la compilación y revisión visual corresponden al integrador.
- La tabla RNF y las tolerancias se integran por separado por el agente raíz, preservando D-024 y la procedencia de las metas propuestas.
- La referencia antes de un ingrediente no demuestra que el instrumento resuelva esa diferencia sobre la carga previa. Hace falta caracterización con tara y carga reales, especialmente para 20 g de levadura.
- En un receptor auxiliar, cantidad pesada y cantidad finalmente entregada requieren comprobar transferencia/retención. No hay mecanismo de vaciado confirmado.
- No se incorpora pesaje por pérdida de peso a este lazo: si se integra como alternativa, requiere un esquema propio o aclaración adicional en la comparación correspondiente.

## Alineación adicional de la casa de calidad

- `propuesta.tex`, bloque «Casa de calidad preliminar» hasta antes de «Matriz morfológica preliminar»: nueve necesidades, pesos del diseñador, catorce características y fórmula de prioridad; se distinguen metas de diseño adoptadas de propuestas aún no verificadas.
- `images/marcopractico/casa_calidad_dosificadora.tex`: matriz 9×14, relaciones y techo contrastados con `complete-changes.json` del 12 de noviembre, nombres actualizados según `review-changes.json`, fuente de 8 pt y porcentajes redondeados a una cifra decimal.
- Prioridades comprobadas: intervención activa 10,5909 % y área ocupada 9,4398 %. Los pesos y las relaciones constituyen un juicio de diseño, no datos de una encuesta ni rendimiento demostrado.
- La comparación comercial será incorporada por el agente raíz con hechos publicados y datos no disponibles explícitos; esta tarea no asigna notas homogéneas a fichas con información distinta.
- Pendientes de campo: alturas, área y accesos del puesto; comprobar tiempos propuestos, acciones, limpieza, acceso de mantenimiento, capacidad útil y dispersión en condiciones definidas. La dispersión normalizada no presupone normalidad ni asegura cumplimiento individual.
