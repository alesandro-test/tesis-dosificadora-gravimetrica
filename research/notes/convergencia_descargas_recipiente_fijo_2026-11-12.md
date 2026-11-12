# Alternativas de convergencia hacia un recipiente fijo

Fecha: 12/11/2026. Investigación solicitada para discutir bosquejos con el tutor y solicitar ideas complementarias a Gemini. No selecciona arquitectura, motor ni dimensiones y conserva los cuatro ingredientes.

## Fuentes primarias consultadas

- [Flexicon, Weigh Batching Systems](https://flexicon.com/bulk-handling-equipment-and-systems/weigh-batching-systems/): alimentación desde varias fuentes hacia un receptor central sobre celdas; dosificación secuencial gruesa/fina y consideración del material en tránsito. El fabricante distingue receptores pequeños para menores. Referente industrial; no acredita las tolerancias de San Miguel.
- [Flexicon, configuración de cuatro transportadores hacia tolva central](https://flexicon.com/wp-content/uploads/2025/10/Q-0893.pdf): cuatro transportadores flexibles conducen producto a un receptor de pesaje común. Es evidencia de convergencia geométrica, no de conveniencia de transportadores largos para dosis de 20 g.
- [AZO, COMPONENTER circular](https://www.azo.com/en-gb/solutions/azo-componenter-in-circular-design): estaciones independientes, pesajes por ingrediente y recipientes giratorios/basculantes que descargan al colector común. No confundir la disposición circular con un único pesaje central.
- [AZO, COMPONENTER Step](https://www.azo.com/en-gb/solutions/azo-componenter-step): el contenedor se desplaza automáticamente entre estaciones. Sirve como alternativa industrial de referencia; añade posicionamiento y transporte.
- [AZO, dosing screw](https://www.azo.com/en-de/product/dosing-screw/): regulación gruesa/fina y cierre de salida para limitar goteo posterior. No asumir que detener el tornillo garantiza ausencia de descarga residual.
- [WAMGROUP, macro y microalimentadores](https://bulkhandling.wamgroup.com/en/bulk-solids-handling-and-processing/feeding-microfeeding-and-metering/macro-and-micro-screw-feeders): distingue familias para caudales grandes y pequeños y contempla agitadores para materiales de flujo difícil. Agitación sujeta a pruebas con el ingrediente real.
- [KWS, tipos de alimentadores](https://www.kwsmfg.com/engineering-guides/screw-conveyor/types-of-screw-feeders/): selección dependiente de flujo, densidad, caudal y geometría de alimentación. No se fijan pendientes o velocidades universales.

## Aplicación al proyecto: hipótesis para discutir

«Helicoidal» describe la hélice del tornillo; horizontal, inclinado y vertical describen su orientación. No son opciones excluyentes. La disposición vertical descendente debe revisar el flujo por gravedad y el corte, además del accionamiento. Una boquilla descendente no implica que todo el tornillo esté orientado verticalmente.

Cuatro depósitos separados no obligan a mover el balde: las salidas se pueden orientar radialmente hacia la misma abertura o conectarse mediante bajantes cortas a un colector fijo. La cantidad de depósitos, el recorrido de transferencia y el número de pesajes son decisiones diferentes.

1. **Cuatro módulos en disposición radial y un receptor común:** tornillos cortos orientados hacia un punto central. Descargas directas sobre la boca del recipiente si caben; colector desmontable si hace falta. Pesaje común secuencial, sujeto a caracterización con carga y tara. La geometría resuelve alcance de boquillas, no la resolución para levadura.
2. **Harina directa y menores en receptor auxiliar:** harina al balde sobre pesaje principal; tres alimentadores convergen en un recipiente pequeño pesado y vaciable sobre el mismo balde fijo. Se comparan basculante y apertura inferior. Dos alternativas internas: acumular los menores y vaciar una vez, o pesar/vaciar cada uno por separado. La segunda añade ciclos y exige controlar remanentes entre ingredientes; la primera requiere medir incrementos con producto previo en el receptor.
3. **Tolva de harina y bloque de tres compartimentos desmontables:** variante de almacenamiento de la alternativa 2. Cada compartimento conserva su salida, tornillo y accionamiento; no es una mezcla previa. La limpieza de divisiones y las rutas cortas de descarga condicionan el bosquejo.
4. **Pesaje por pérdida de peso en cada módulo:** cuatro fuentes sobre pesaje independiente dosifican hacia el mismo balde fijo. La pérdida en la fuente no demuestra por sí sola recepción de todo el producto; revisar tránsito, adherencia, derrames y conexiones. Añade cuatro sistemas de pesaje y montaje de alimentadores aislados; se mantiene como comparación técnica.
5. **Contenedor desplazado automáticamente o vasos pesados basculantes:** referentes de AZO. Evitan el desplazamiento manual entre boquillas, pero añaden mecanismos, comprobación de posición, accesos y control. Para cuatro ingredientes se comparan frente a convergencia fija antes de adoptarlos.

## Cantidades que condicionan el bosquejo

Consignas: harina 5 000–8 000 g; azúcar 80–400 g; sal 100–150 g; levadura 20–30 g. Metas D-024: ±30/±3/±2/±1 g, y MAE de harina ≤10 g; pendientes de comprobación técnica y aceptación de receta de menores.

Máximo total registrado por receta: 8 260 g en marraqueta, más tara para dimensionar el pesaje principal. Máximo conjunto de menores: 530 g en casero, más tara del auxiliar. No sumar máximos independientes de recetas diferentes como si fueran una preparación registrada. Los extremos no establecen por sí solos la capacidad nominal de una celda.

Medir primero la levadura en un receptor auxiliar vacío es una variante de secuencia para ensayar; no soluciona por sí sola resolución, incertidumbre, caudal mínimo ni retención. La cantidad final entregada al balde se debe verificar, además de la cantidad pesada antes de transferir. Un conducto rígido apoyado sobre el receptor puede introducir una vía de carga ajena al pesaje: prever separación o conexiones cuya influencia se caracterice.

## Puntos para el tutor

- Priorizar comparación entre convergencia directa con pesaje común y convergencia de menores en receptor auxiliar, manteniendo el balde fijo.
- Decidir qué ensayo mínimo permite descartar un pesaje común para 20 g con capacidad de lote de harina y tara.
- Revisar vaciado basculante/apertura inferior, remanentes y altura adicional del auxiliar.
- Obtener diámetro interior, altura y tara del balde; espacio y altura de recarga; densidades de ingredientes; disponibilidad de tornillos y accionamientos.
- Probar alimentación gruesa/fina, cierre residual y necesidad real de agitador. No incorporar agitación, transporte neumático o mecanismo móvil solo por semejanza industrial.

No se modifican CAD, tesis ni decisiones técnicas vigentes. Las configuraciones son propuestas para análisis y no prestaciones demostradas.

## Guía visual preparada para el tutor

Archivo: `docs/design/Bosquejos_para_tutor_San_Miguel.pdf`, tres páginas, con PNG correspondientes. Incluye planta de cuatro alimentadores radiales hacia un balde fijo; elevación proyectada de harina directa y receptor auxiliar de menores; comparación esquemática de eje horizontal con bajante y eje vertical descendente. Motores, recorrido, apoyos de pesaje y vaciado están identificados. Son bosquejos originales sin escala ni cotas, no el CAD del estudiante. Se revisaron las tres páginas y se corrigieron rótulos y solapamientos.

Para mostrar un equipo real: [foto oficial AZO circular](https://www.azo.com/PIM_neu/1826/image-thumb__1826__pimContent/AZ050953.jpg). Su uso es ilustrar la disposición alrededor del colector; el equipo industrial emplea pesajes por ingrediente y no demuestra las bandas del prototipo. La [ficha visual de Flexicon Q-0893](https://flexicon.com/wp-content/uploads/2025/10/Q-0893.pdf) muestra otro recorrido de varias fuentes a un receptor central, a escala industrial.
