# REFERENCIA ESTRUCTURAL — Desarrollo de máquina de transporte de panales de abeja para la asociación ADAPICRUZ

> Fuente: `03_Referencia_Maquina_Transporte_Panales - Copy.md` (Desktop), capítulo 1.

## Estructura del capítulo

1. **1.1 Antecedentes**
2. **1.2 Planteamiento del Problema**
   - Figura de causas (1.6) y Tabla 1.6 de causas e inconformidades.
3. **1.3 Objetivos**
   - 1.3.1 Objetivo General
   - 1.3.2 Objetivos Específicos
4. **1.4 Motivación**
5. **1.5 Justificación**
   - Social
   - Económica
6. **1.6 Delimitación**
   - 1.6.1 Límites
   - 1.6.2 Alcances

No existen apartados independientes de **Introducción**, **Formulación del problema** ni **Árbol de problemas**. Los antecedentes reemplazan a la introducción.

---

## Cómo construye cada sección

### 1.1 Antecedentes

**Función:** contextualizar el sector, cuantificar su situación y llegar a la necesidad del usuario del caso.

**Orden de ideas:**

**definición de la actividad → producción mundial → consumo → empleo → colmenas por apicultor → situación de la asociación → costo de transporte y lesiones → edad de los trabajadores → soluciones existentes (carretillas) → alternativas evaluadas con la asociación → condición del terreno → precios de equipos importados**

Funciona como un **embudo**: del sector mundial al caso de ADAPICRUZ.

**Evidencia:**

- estadísticas sectoriales (producción, consumo, colmenas por departamento);
- datos de la asociación (edades de los afiliados);
- entrevistas de otro autor a apicultores;
- sesiones con representantes de la asociación (lluvia de ideas, juicio de expertos, prototipado conceptual);
- precios internacionales con costo de importación.

**Recursos:**

- Tablas 1.1–1.5 (producción, consumo, empleos, colmenas, precios);
- Figuras 1.1–1.5 (clasificación de trabajadores, edades, transporte de colmenas, carretillas comerciales).

**Conexión:** termina mostrando que los equipos importados superan el presupuesto y no se adaptan al terreno, lo que prepara el problema.

**Profundidad:** **alta**; la sección más extensa del capítulo.

### Selección de la solución dentro de los antecedentes

**Función:** descartar alternativas antes de plantear el problema.

**Lógica:**

> alternativa → ventaja → inconveniente → descartada o aceptada

Se evalúan carretillas, exoesqueletos y carretillas elevadoras; se acepta la última.

**Particularidad:** la solución queda elegida **antes** del planteamiento del problema.

### 1.2 Planteamiento del Problema

**Función:** expresar el problema y sus efectos sobre el trabajador y la asociación.

**Orden:**

**problema (modelo de transporte inadecuado: importación, mantenimiento, presupuesto) → efecto secundario (lesiones de espalda) → figura de causas → tabla de causas, razones e inconformidades**

**Evidencia:** declaración del jefe de la asociación y bibliografía de ergonomía.

**Recursos:** Figura 1.6 (causas) y Tabla 1.6 (causa, razón e inconformidad).

**Conexión:** pasa directamente a los objetivos, sin formulación en una frase ni árbol de problemas.

**Profundidad:** **media-baja**.

### 1.3.1 Objetivo General

**Función:** expresar el producto principal.

**Estructura:**

**verbo de desarrollo + producto + beneficiario**

**Profundidad:** **muy baja**.

### 1.3.2 Objetivos Específicos

**Función:** dividir el trabajo en etapas.

**Orden:**

**contextualizar → determinar componentes → analizar fuerzas y suspensión → diseñar el modelo → verificar mediante software CAD**

**Particularidad:** la verificación es por simulación, no por construcción y ensayo.

**Profundidad:** **baja**.

### 1.4 Motivación

**Función:** motivo personal y académico.

**Profundidad:** **muy baja**; una oración.

### 1.5 Justificación

**Función:** presentar los beneficios esperados.

**Orden:**

- **Social:** reducción del esfuerzo físico y del riesgo de lesiones.
- **Económica:** equipo fabricado en Bolivia con costos de mantenimiento adecuados frente a equipos importados.

**Evidencia:** retoma los precios de la Tabla 1.5.

**Profundidad:** **baja**.

### 1.6.1 Límites

**Función:** fijar restricciones cuantitativas y de contexto.

**Incluye:**

- carga máxima con factor de seguridad;
- materiales y fabricación con oferta nacional;
- techo de precio derivado de la tabla de precios y validado por los apicultores;
- tipo de colmena estandarizado;
- periodo del proyecto.

**Profundidad:** **media**.

### 1.6.2 Alcances

**Función:** declarar capacidades de la máquina.

**Incluye:** ergonomía, cronograma, capacidad de carga, mecanismo de plegado, suspensión.

**Profundidad:** **baja**.

---

## Recursos utilizados

| Recurso | Función estructural |
|---|---|
| Estadísticas mundiales y nacionales | Relevancia del sector |
| Datos de la asociación | Caracterizar al usuario |
| Entrevistas y sesiones con la asociación | Evidencia del problema y selección de solución |
| Tabla de precios con importación | Justificación económica y límite de costo |
| Figura de causas | Síntesis del problema |
| Tabla causa–razón–inconformidad | Relación causal con respaldo bibliográfico |

---

## Patrones estructurales útiles

### 1. Antecedentes tipo embudo

**sector mundial → país → asociación → trabajador → necesidad**

### 2. Precios con costo de importación

La comparación económica suma precio, envío y conversión a moneda local.

### 3. Límite de costo derivado de datos

El techo presupuestario se toma del equipo de menor precio de la tabla y se valida con los usuarios.

### 4. Tabla causa–razón–efecto

Cada causa se respalda con una cita y se vincula con una inconformidad del usuario.

### 5. Límites cuantitativos

Carga, factor de seguridad, presupuesto y tipo de colmena expresados con valores.

---

## Particularidades de esta tesis

- No presenta **introducción** separada de los antecedentes.
- No presenta **formulación del problema** ni **árbol de problemas**.
- La solución se selecciona **antes** del planteamiento del problema.
- El problema se plantea como insuficiencia del equipo disponible, cercano a «falta de una máquina».
- Los objetivos terminan en verificación por **CAD**, no en ensayo experimental.
- Algunos alcances son tareas de gestión (cronograma).

---

## Contraste con criterios del proyecto

Varios rasgos de esta tesis contradicen criterios vigentes de la dosificadora (`PROFESSOR_NOTES.md`): problema expresado como carencia de un equipo, ausencia de árbol de problemas y alcances redactados como actividades. Su utilidad está en la cuantificación del contexto y en la comparación de precios con importación, no en la formulación del problema.

---

## Esquema estructural condensado

```text
CAPÍTULO 1

ANTECEDENTES
├── Sector (producción, consumo, empleo)
├── Situación del usuario
├── Problema laboral (lesiones, edad)
├── Soluciones existentes y alternativas evaluadas
└── Precios internacionales con importación

PLANTEAMIENTO DEL PROBLEMA
├── Problema
├── Efecto
├── Figura de causas
└── Tabla causa–razón–inconformidad

OBJETIVOS
├── General
└── Específicos (contextualizar → determinar → analizar → diseñar → verificar)

MOTIVACIÓN

JUSTIFICACIÓN
├── Social
└── Económica

DELIMITACIÓN
├── Límites cuantitativos
└── Alcances
```

---

# CAPÍTULO 2 — MARCO TEÓRICO

> Fuente: `03_Referencia_Maquina_Transporte_Panales - Copy.md` (Desktop), capítulo 2.  
> Tesis: **Desarrollo de máquina de transporte de panales de abeja para la asociación ADAPICRUZ**.

## Estructura del capítulo

1. **2.1 Proyectos académicos, comerciales y patentes relacionadas con los elevadores de colmenas**
   - 2.1.1 Proyectos académicos similares (cuatro patentes: Corea del Sur y Estados Unidos)
   - 2.1.2 Tesis similar (Estados Unidos)
   - 2.1.3 Productos comerciales o industriales similares (cuatro productos)
2. **2.2 Apicultura en Bolivia**
   - 2.2.1 Situación de la asociación ADAPICRUZ
3. **2.3 Biomecánica del traslado de objetos**
4. **2.4 Ergonomía**
   - 2.4.1 Prevenciones para el traslado de objetos
5. **2.5 Diseño de máquina** (14 subsecciones)
   - Diagrama esfuerzo-deformación; esfuerzo axial; cortante directo; de apoyo; torsional; flexión; cortante transversal
   - Diagramas de cortante y momento; factores de Marín; diseño de ejes; criterios de esfuerzo
   - Dimensionamiento de columnas; Von Mises; cables y poleas
6. **2.6 Diseño de amortiguación y suspensión**

No usa el título «Estado del arte», pero la sección 2.1 cumple esa función. No hay **conclusión del capítulo**.

---

## Cómo construye cada sección

### 2.1 Proyectos académicos, comerciales y patentes

**Función:** revisar las soluciones existentes y extraer de cada una lo que no sirve para el caso, de modo que quede definido qué debe resolver la máquina propia.

**Orden de ideas:**

**alcance de la revisión (qué se descarta) → patentes → tesis → productos comerciales → criterio de selección de los casos estudiados**

**Patrón por antecedente:**

> figura → descripción de componentes → dato técnico (capacidad, precio) → limitación frente al caso → consecuencia para el diseño

Ejemplos de limitaciones registradas: sin capacidad de transporte, altura de levantamiento insuficiente, cuatro ruedas que encarecen la suspensión, ruedas fijas que dificultan los giros, acceso de camión imposible, no levanta la última caja, diámetro de rueda insuficiente para el suelo local.

**Evidencia:**

- patentes (bases de datos de patentes);
- una tesis;
- sitios de fabricantes, YouTube y foros de apicultores;
- precios publicados en USD con tipo de cambio en nota al pie.

**Recursos:** Figuras 2.1–2.11, cada una con descripción por subfigura.

**Conexión:** las limitaciones se convierten en criterios de diseño (por ejemplo, rueda mayor a 200 mm por el tipo de suelo).

**Profundidad:** **alta**; cubre las perspectivas académica y de mercado.

### 2.2 Apicultura en Bolivia

**Función:** caracterizar el sector y al usuario del caso de estudio.

**Orden:** crecimiento del sector → formación de los apicultores → organización en asociaciones → situación de ADAPICRUZ.

**Evidencia:** estudios universitarios y documentos institucionales.

**Recursos:** Tablas 2.1–2.2 (formación apícola; miel para autoconsumo y venta por departamento).

**Conexión:** justifica que el usuario necesita equipo sencillo y de bajo costo.

**Profundidad:** baja-media.

### 2.3 Biomecánica y 2.4 Ergonomía

**Función:** fundamentar el efecto del trabajo manual sobre el operario y las condiciones ergonómicas que la máquina debe respetar.

**Orden:** definición → lesiones por tipo de movimiento → zonas de riesgo por sector → posturas correctas e incorrectas.

**Evidencia:** OIT, artículos de salud laboral, guías de ergonomía.

**Recursos:** Tabla 2.3 (lesiones), Figura 2.12 (zonas de riesgo), Tabla 2.4 con ilustraciones de posturas.

**Conexión:** las posturas correctas se traducen en requisitos de manejo (empuje, agarre).

**Profundidad:** media.

### 2.5 Diseño de máquina

**Función:** reunir todas las ecuaciones que se usarán en el dimensionamiento del marco práctico.

**Orden:** propiedades del material → esfuerzos simples → esfuerzos combinados → fatiga → elementos de máquina (ejes, columnas, cables, poleas).

**Patrón por concepto:**

> definición con cita → figura → ecuación numerada → variables con unidades → criterio de aplicación

**Evidencia:** libros de resistencia de materiales y diseño (Beer, Hibbeler, Mott, Budynas, Gere).

**Recursos:** Figuras 2.13–2.34, Tablas 2.4–2.10, Ecuaciones 2.1–2.37.

**Conexión:** cada ecuación corresponde a un cálculo del capítulo de desarrollo.

**Profundidad:** **muy alta**; es la sección dominante del capítulo.

### 2.6 Diseño de amortiguación y suspensión

**Función:** fundamentar el subsistema de suspensión.

**Orden:** función de la suspensión → frecuencias tolerables → amortiguación crítica → energía por carrera → resorte.

**Recursos:** Tablas 2.12–2.13, Figuras 2.35–2.36, Ecuaciones 2.38–2.43.

**Profundidad:** media.

---

## Recursos utilizados

| Recurso | Función estructural |
|---|---|
| Patentes y tesis con figura | Perspectiva académica del estado del arte |
| Productos comerciales con precio | Perspectiva de mercado y referencia de costo |
| Crítica de cada antecedente | Derivar criterios de diseño |
| Tablas sectoriales | Contexto del usuario |
| Tablas y figuras ergonómicas | Requisitos de manejo |
| Ecuaciones con variables y unidades | Base de cálculo del diseño |
| Tablas de coeficientes | Selección de factores de diseño |

---

## Patrones estructurales útiles

### 1. Estado del arte con dos perspectivas

**académica (patentes, tesis) + mercado (productos, precios)**, tal como pide la plantilla.

### 2. Cada antecedente termina en una limitación

La revisión no es descriptiva: cada caso deja un criterio que la máquina propia debe cumplir.

### 3. Fundamentos ordenados por subsistema

Los fundamentos siguen el orden en que se dimensiona la máquina.

### 4. Ecuación siempre acompañada

Figura explicativa + ecuación numerada + lista de variables con unidades.

### 5. Usuario y ergonomía antes del diseño mecánico

Primero se fundamenta a quién sirve la máquina y cómo la usará.

---

## Particularidades de esta tesis

- La sección 2.1 no se titula «Estado del arte».
- Usa fuentes no académicas (YouTube, foros) para productos sin ficha técnica.
- Incluye precios en USD con tipo de cambio y fecha de cotización.
- Numeración irregular: dos Tablas 2.4, falta la Tabla 2.11, patente «Nº5» sin Nº4.
- No hay conclusión del capítulo.

---

## Contraste con la plantilla oficial

Cubre las dos perspectivas del estado del arte y un fundamento teórico extenso. No incluye conclusión del capítulo y no se verifica que alcance las 30 referencias requeridas.

---

## Esquema estructural condensado

```text
CAPÍTULO 2

ESTADO DEL ARTE (2.1)
├── Patentes
├── Tesis
├── Productos comerciales (con precio)
└── Limitaciones → criterios de diseño

CONTEXTO DEL SECTOR (2.2)
└── Situación del usuario del caso

FACTOR HUMANO (2.3–2.4)
├── Biomecánica / lesiones
└── Ergonomía / posturas

FUNDAMENTOS DE DISEÑO (2.5–2.6)
├── Material y esfuerzos
├── Fatiga
├── Elementos de máquina
└── Subsistemas específicos
```

**Utilidad para la dosificadora:** es la referencia más cercana para el capítulo 2. El patrón antecedente → limitación → criterio, junto con los precios de productos comerciales, permite sustentar el criterio de bajo costo (`A-001`) y ordenar los fundamentos por subsistema (mecánico, medición gravimétrica, control).
