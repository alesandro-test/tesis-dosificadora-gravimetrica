# FICHA DE FUNDAMENTO 1.
**Concepto:** Galga extensométrica y puente de Wheatstone en celdas de carga.  
**Uso previsto en el diseño:** Seleccionar y montar la celda de carga.

---

### 1. Definición

| Concepto | Cita textual corta (idioma original, \\(\le\\) 20 palabras) | Ubicación | Fuente |
| :--- | :--- | :--- | :--- |
| **Galga extensométrica (Strain Gauge)** | "It converts the mechanical strain into a change in the electrical resistance." | Section 1.2 | [26_AAAA_Hoffmann_StrainGaugesHBM.pdf] |
| **Galga extensométrica (Strain Gauge)** | "A typical piezoresistive strain gauge is an elastic sensor whose resistance is function of the applied strain" | Section 10.2 | [26_2016_Fraden_HandbookModernSensors.pdf] |
| **Puente de Wheatstone** | "circuit which made the accurate measurement of electrical resistances possible." | Section 5 | [26_AAAA_Hoffmann_StrainGaugesHBM.pdf] |
| **Puente de Wheatstone** | "The resistive bridges are commonly used with strain gauges... when immunity against environmental factors is required." | Section 6.2 | [26_2016_Fraden_HandbookModernSensors.pdf] |
| **Celda de carga (Load Cell)** | "Load cells for use with equipment subject to official calibration head this field with a permissible error of less than 0.02%." | Section 9 | [26_AAAA_Hoffmann_StrainGaugesHBM.pdf] |
| **Celda de carga (Load Cell)** | "Examples of these sensors are strain gauges and load cells being used together with the appropriate interface circuits." | Section 10.1 | [26_2016_Fraden_HandbookModernSensors.pdf] |

---

### 2. Ecuaciones

#### Ecuación 1: Sensibilidad de la galga extensométrica (Gage factor) [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Número en la fuente:** (3.3-1)
* **Qué calcula:** El factor de galga \\(k\\) (sensibilidad de la galga extensométrica).
* **Ecuación:** \\(k = \frac{\Delta R / R_0}{\epsilon}\\)
* **Variables, significado y unidades:**
  * \\(k\\): factor de sensibilidad de la galga (gage factor) [adimensional].
  * \\(\Delta R / R_0\\): cambio relativo de resistencia eléctrica [\\(\Omega/\Omega\\) o \\(\text{m}\Omega/\Omega\\)].
  * \\(\epsilon\\): deformación unitaria (strain) [\\(\mu\text{m/m}\\) o \\(\text{mm/m}\\)].

#### Ecuación 2: Sensibilidad de elemento galga piezorresistivo [26_2016_Fraden_HandbookModernSensors.pdf]
* **Número en la fuente:** (4.63) y (10.3)
* **Qué calcula:** El cambio de resistencia incremental normalizado por unidad de deformación.
* **Ecuación:** \\(\frac{dR}{R} = S_e \cdot e\\)
* **Variables, significado y unidades:**
  * \\(dR / R\\): cambio relativo incremental de resistencia [adimensional].
  * \\(S_e\\): factor de galga o sensibilidad del elemento (gauge factor) [adimensional].
  * \\(e\\) (o \\(\epsilon\\)): deformación unitaria (unit deformation) [adimensional].

#### Ecuación 3: Tensión de salida del puente de Wheatstone desequilibrado [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Número en la fuente:** (5.2-1)
* **Qué calcula:** La tensión de salida del puente debido al desequilibrio de resistencias.
* **Ecuación:** \\(V_o = V_s \left( \frac{R_1}{R_1 + R_2} - \frac{R_4}{R_3 + R_4} \right)\\)
* **Variables, significado y unidades:**
  * \\(V_o\\): tensión de salida del puente / señal de medición [\\(\text{V}\\) o \\(\text{mV}\\)].
  * \\(V_s\\): tensión de excitación del puente [\\(\text{V}\\)].
  * \\(R_1, R_2, R_3, R_4\\): resistencias eléctricas de las ramas del puente [\\(\Omega\\)].

#### Ecuación 4: Salida del puente de Wheatstone completo para galgas [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Número en la fuente:** (5.2-14)
* **Qué calcula:** La relación desequilibrio/salida de tensión en un puente completo con cuatro galgas activas.
* **Ecuación:** \\(\frac{V_o}{V_s} = \frac{k}{4} (\epsilon_1 - \epsilon_2 + \epsilon_3 - \epsilon_4)\\)
* **Variables, significado y unidades:**
  * \\(V_o / V_s\\): desequilibrio del puente / señal de salida por voltio de excitación [\\(\text{mV/V}\\) o adimensional].
  * \\(k\\): factor de sensibilidad de las galgas [adimensional].
  * \\(\epsilon_1, \epsilon_2, \epsilon_3, \epsilon_4\\): deformaciones unitarias en las galgas activas 1 a 4 [\\(\mu\text{m/m}\\)].

#### Ecuación 5: Tensión de salida general del puente de impedancias [26_2016_Fraden_HandbookModernSensors.pdf]
* **Número en la fuente:** (6.20)
* **Qué calcula:** La tensión de salida en un puente general de cuatro ramas.
* **Ecuación:** \\(V_{out} = V_{ref} \left[ \left(1 + \frac{Z_2}{Z_1}\right)^{-1} - \left(1 + \frac{Z_4}{Z_3}\right)^{-1} \right]\\)
* **Variables, significado y unidades:**
  * \\(V_{out}\\): tensión de salida del puente [\\(\text{V}\\)].
  * \\(V_{ref}\\): tensión de referencia o excitación [\\(\text{V}\\)].
  * \\(Z_1, Z_2, Z_3, Z_4\\): impedancias (resistencias) de las ramas 1 a 4 [\\(\Omega\\)].

---

### 3. Valores típicos o tablas de referencia

* **Factores de galga (\\(k\\)) según la aleación de la rejilla [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]:**
  * Constantana (\\(57\%\ \text{Cu}, 43\%\ \text{Ni}\\)): \\(k = 2.05\\) [adimensional] (Table 3.3-1, "Average approx. gage factor, k"). Cita textual: "Average gage factors for strain gages with various measuring grid alloys.". Condición: temperatura ambiente.
  * Karma (\\(73\%\ \text{Ni}, 20\%\ \text{Cr}\\), res. \\(\text{Fe} + \text{Al}\\)): \\(k = 2.1\\) [adimensional] (Table 3.3-1).
  * Nichrome V (\\(80\%\ \text{Ni}, 20\%\ \text{Cr}\\)): \\(k = 2.2\\) [adimensional] (Table 3.3-1).
  * Platino-tungsteno (\\(92\%\ \text{Pt}, 8\%\ \text{W}\\)): \\(k = 4.0\\) [adimensional] (Table 3.3-1).
* **Sensibilidad (\\(S_e\\)) en alambres y semiconductores [26_2016_Fraden_HandbookModernSensors.pdf]:**
  * Alambres metálicos: \\(S_e\\) de \\(2\\) a \\(6\\) [adimensional] (Platino \\(S_e \approx 6\\)). Cita textual: "For metallic wires it ranges from 2 to 6." (Section 4.10 / 10.2).
  * Galgas de semiconductor: \\(S_e\\) entre \\(40\\) y \\(200\\) [adimensional] (o 50 a 60 veces superior al metálico).
* **Resistencia eléctrica nominal [26_AAAA_Hoffmann_StrainGaugesHBM.pdf] y [26_2016_Fraden_HandbookModernSensors.pdf]:**
  * \\(120\ \Omega\\): el valor más popular para análisis de esfuerzos (Section 3.2.4).
  * \\(350\ \Omega\\): producido en gran cantidad, utilizado ampliamente en transductores y celdas de carga (Section 3.2.4).
  * Rango general: \\(100\ \Omega\\) a varios miles de ohms [\\(\Omega\\)] (Section 10.2).
* **Rangos de temperatura y humedad [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]:**
  * Requerimientos de máxima precisión (celdas de carga): \\(-10\ ^\circ\text{C}\\) a \\(+40\ ^\circ\text{C}\\) con restricción de tiempo de 20 minutos (Section 3.2.5). Cita textual: "for load cells, down to -10°C to +40°C with a time restriction of 20 minutes.".
  * Calidad transductor: \\(-20\ ^\circ\text{C}\\) a \\(+70\ ^\circ\text{C}\\) (Section 3.2.5).
  * Rejilla de constantana: \\(-200\ ^\circ\text{C}\\) a \\(+200\ ^\circ\text{C}\\) (Section 3.2.5).
  * Condición de fabricación/almacenamiento estándar: \\(23\ ^\circ\text{C}\\) y \\(50\%\\) de humedad relativa según norma DIN 50014 (Section 3.4.7).
* **Límite de error en celdas de carga oficial [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]:**
  * Celdas de carga para calibración oficial: error permisible menor a \\(0.02\%\\) [porcentaje/adimensional]; constante de tiempo de sensibilidad nominal mejor que \\(1 \cdot 10^{-4}/\text{año}\\) (Section 9).

---

### 4. Condiciones de validez y limitaciones

* **Límite de deformación estática [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]:**
  * El uso general de galgas está restringido a deformaciones en el rango de \\(\pm 3000\ \mu\text{m/m}\\). Cita textual: "restricted to strains in the range of ±3000 µm/m." (Section 3.3.6).
  * Galgas de alta deformación soportan de \\(\pm 2\ \text{cm/m}\\) a \\(20\ \text{cm/m}\\) (\\(1\ \text{cm/m} = 10\,000\ \mu\text{m/m}\\)), pero la deformación plástica altera sus propiedades ductiles y destruye la repetibilidad de la medición.
* **Límite de variación de resistencia para aproximación lineal [26_2016_Fraden_HandbookModernSensors.pdf]:**
  * La aproximación lineal \\(dR/R\\) en alambres metálicos es válida únicamente para variaciones pequeñas de resistencia no superiores al \\(2\%\\). Cita textual: "For small variations in resistance not exceeding 2 %" (Section 10.2).
* **Limitación por carga eléctrica y temperatura [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]:**
  * Exceder la tensión de excitación o la temperatura límite genera sobrecalentamiento, histeresis, fluencia (creep), inestabilidad en el punto cero y empeoramiento de la compensación de temperatura (Section 3.3.8).
* **Limitación por humedad e infiltración [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]:**
  * La penetración de humedad disminuye la resistencia de aislamiento. Una caída de \\(1000\ \text{M}\Omega\\) a \\(1\ \text{M}\Omega\\) genera un desplazamiento del punto cero de \\(-60\ \mu\text{m/m}\\) en galgas de \\(120\ \Omega\\), \\(-175\ \mu\text{m/m}\\) en \\(350\ \Omega\\) y \\(-350\ \mu\text{m/m}\\) en \\(700\ \Omega\\) (Section 3.4.2).
* **Error por desalineación angular [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]:**
  * Un error de alineación de \\(\alpha = 5^\circ\\) respecto al eje principal de esfuerzo hace que el valor medido sea un \\(1.6\%\\) menor que el real (reducido a \\(-0.4\%\\) en puente completo) (Section 8.4). Cita textual: "mounted with a directional error of α = 5°, the measured value will be 1.6% too small.".

---

### 5. Figura o tabla que explique el concepto

* **Fig. 1.0-6:** "The characteristic design of a strain gage with its wire measuring grid." [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Fig. 1.0-7:** "The characteristic design of a strain gage with etched metal foil measuring grid." [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Fig. 3.3-1:** "Characteristic for a metal strain gage and the definition of the gage factor" [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Fig. 5.1-1:** "Different representations of the Wheatstone bridge circuit." [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Fig. 5.2-2:** "Forms of the Wheatstone bridge circuit used in strain gage techniques a) quarter bridge b) half bridge c) double quarter or diagonal bridge d) full bridge" [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Table 3.3-1:** "Average gage factors for strain gages with various measuring grid alloys." [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Table 8.4-1:** "Circuits that could be used for the tension/compression bar with their results." [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Fig. 6.16:** "General circuit of Wheatstone bridge (a) and half-bridge (b)" [26_2016_Fraden_HandbookModernSensors.pdf]

---

### 6. INFERENCIA

Para aplicar la selección y el montaje de la celda de carga al caso de la Panadería San Miguel (Santa Cruz de la Sierra, Bolivia), hacen falta los siguientes datos específicos del caso:

1. **INFERENCIA:** Geometría y dimensiones de la tolva o recipiente de pesaje de harina, para determinar si se requiere 1, 3 o 4 puntos de apoyo y definir el tipo de montaje (tracción, compresión o flexión/cizalladura).
2. **INFERENCIA:** Peso muerto (tara) de la estructura y tolva vacía, para sumarlo a la masa de harina por ciclo (\\(5,000\\) a \\(8,000\ \text{kg}\\)) y definir la capacidad nominal total necesaria sin saturar el rango dinámico de la celda.
3. **INFERENCIA:** Valores máximos reales de temperatura ambiente y humedad relativa dentro del área de trabajo de la panadería San Miguel, para verificar si la medición opera en el rango de alta precisión (\\(-10\ ^\circ\text{C}\\) a \\(+40\ ^\circ\text{C}\\)) o si requiere encapsulamiento hermético especial para prevenir la caída de resistencia de aislamiento.
4. **INFERENCIA:** Nivel de vibraciones mecánicas generadas por la maquinaria cercana o por el mecanismo de alimentación de harina, para calcular el filtrado/amortiguamiento y prevenir errores de cero o fatiga dinámica.
5. **INFERENCIA:** Tolerancia o error máximo admisible de pesaje por lote de harina, para determinar la clase de precisión requerida en la celda de carga (por ejemplo, error \\(<0.02\%\\)).

---

### VACÍOS

1. Ninguna de las fuentes marcadas (Hoffmann, Fraden) reporta modelos comerciales específicos o especificaciones de catálogo de celdas de carga para uso alimenticio o dosificación de harina.
2. Ninguna fuente reporta ecuaciones de diseño mecánico o cálculo de deformaciones específicas para tolvas cónicas o cilíndricas de almacenamiento de polvos.
3. Ninguna fuente reporta datos ni límites sobre el efecto del polvo suspendido de harina en la pérdida de aislamiento eléctrico del puente de Wheatstone.

# FICHA DE FUNDAMENTO 2.
**Concepto:** Sensibilidad (mV/V), capacidad nominal y compensación térmica de la celda de carga.  
**Uso previsto en el diseño:** Seleccionar la capacidad y la sensibilidad de la celda.

---

### 1. Definición

| Concepto | Cita textual corta (idioma original, \\(\le\\) 20 palabras) | Ubicación | Fuente |
| :--- | :--- | :--- | :--- |
| **Sensibilidad (mV/V)** | "The level of the calibration signal can either be given in the strain dimension of µm/m or in terms of the bridge unbalance in mV/V." | Section 6.2 | [26_AAAA_Hoffmann_StrainGaugesHBM.pdf] |
| **Sensibilidad (mV/V)** | "1 mV/V ˆ 2000 µm/m for k = 2.0." | Section 6.2 | [26_AAAA_Hoffmann_StrainGaugesHBM.pdf] |
| **Sensibilidad (disminución térmica)** | "within a certain temperature range, the output voltage, output linearity, and sensitivity of the load cell decrease with increasing temperature" | Section 1 | [26_2024_Zhuang_TemperatureLoadCell.pdf] |
| **Capacidad nominal (Measuring Range)** | "The measuring range of the sensor is 220Kg, so 2200 N force and fixed support are applied to it" | Section 3.1 | [26_2024_Zhuang_TemperatureLoadCell.pdf] |
| **Capacidad nominal (Precisión)** | "Load cells for use with equipment subject to official calibration head this field with a permissible error of less than 0.02%." | Section 9 | [26_AAAA_Hoffmann_StrainGaugesHBM.pdf] |
| **Compensación térmica (Resistencia Ni)** | "The Ni is the nickel sheet used to compensate the TCR" | Section 2, Fig. 1 | [26_2024_Zhuang_TemperatureLoadCell.pdf] |
| **Compensación térmica (Galgas autocompensadas)** | "Through the adoption of certain production methods, it is possible to influence the strain gage such that its temperature response within a limited temperature range is minimized." | Section 3.3.4.1 | [26_AAAA_Hoffmann_StrainGaugesHBM.pdf] |
| **Compensación térmica (Efecto en punto cero)** | "Temperature variations mainly affect the zero point, i.e. the measurement's reference point." | Section 3.2.5 | [26_AAAA_Hoffmann_StrainGaugesHBM.pdf] |

---

### 2. Ecuaciones

#### Ecuación 1: Equivalencia de señal de desequilibrio del puente en mV/V a deformación [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Número en la fuente:** Texto en Section 6.2
* **Qué calcula:** La deformación equivalente \\(\epsilon\\) a partir de la señal de desequilibrio del puente en \\(\text{mV/V}\\) para un factor de galga \\(k = 2.0\\).
* **Ecuación:** \\(1\ \text{mV/V} \hat{=} 2000\ \mu\text{m/m} \quad (\text{para } k = 2.0)\\)
* **Variables, significado y unidades:**
  * \\(V_o / V_s\\): desequilibrio del puente / señal de salida por voltio de excitación [\\(\text{mV/V}\\)].
  * \\(\epsilon\\): deformación unitaria equivalente [\\(\mu\text{m/m}\\)].
  * \\(k\\): factor de galga (gage factor) [adimensional].

#### Ecuación 2: Respuesta a la temperatura (deformación aparente) de la galga montada [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Número en la fuente:** (3.3-5)
* **Qué calcula:** La deformación aparente producida por la variación de temperatura (\\(\epsilon_\vartheta\\)).
* **Ecuación:** \\(\epsilon_\vartheta = \left[ \frac{\Delta R / R_0}{\Delta \vartheta} \right] \cdot \frac{1}{k} = \left[ \frac{\alpha_R}{k} + (\alpha_C - \alpha_M) \right] \Delta \vartheta\\)
* **Variables, significado y unidades:**
  * \\(\epsilon_\vartheta\\): deformación aparente o respuesta a la temperatura [\\(\mu\text{m/m}\\)].
  * \\(\Delta R / R_0\\): cambio relativo de resistencia eléctrica [adimensional o \\(\text{m}\Omega/\Omega\\)].
  * \\(\Delta \vartheta\\): variación de temperatura [\\(\text{K}\\) o \\(^\circ\text{C}\\)].
  * \\(\alpha_R\\): coeficiente de temperatura de la resistencia eléctrica del material de la rejilla [\\(\text{K}^{-1}\\)].
  * \\(\alpha_C\\): coeficiente de expansión térmica del material del elastómero/componente [\\(\text{K}^{-1}\\)].
  * \\(\alpha_M\\): coeficiente de expansión térmica del material de la rejilla de la galga [\\(\text{K}^{-1}\\)].
  * \\(k\\): factor de galga [adimensional].

#### Ecuación 3: Condición de autocompensación de temperatura en galgas extensométricas [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Número en la fuente:** (3.3-6)
* **Qué calcula:** El valor requerido del coeficiente \\(\alpha_R\\) para anular la respuesta térmica de la galga sobre un material específico.
* **Ecuación:** \\(\alpha_R = (\alpha_M - \alpha_C) k\\)
* **Variables, significado y unidades:**
  * \\(\alpha_R\\): coeficiente de temperatura de la resistencia eléctrica [\\(\text{K}^{-1}\\)].
  * \\(\alpha_M\\): coeficiente de expansión térmica de la rejilla de medición [\\(\text{K}^{-1}\\)].
  * \\(\alpha_C\\): coeficiente de expansión térmica del material de soporte/elastómero [\\(\text{K}^{-1}\\)].
  * \\(k\\): factor de galga [adimensional].

#### Ecuación 4: Cancelación de deformaciones térmicas en puente completo de Wheatstone [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]
* **Número en la fuente:** (7.1-1) y (7.1-6) / (8.4-7)
* **Qué calcula:** La deformación total indicada por el puente completo cancelando componentes térmicas idénticas en ramas opuestas.
* **Ecuación:** \\(\epsilon_0 = \epsilon_1 - \epsilon_2 + \epsilon_3 - \epsilon_4\\)
* **Variables, significado y unidades:**
  * \\(\epsilon_0\\): deformación indicada total por el puente [\\(\mu\text{m/m}\\)].
  * \\(\epsilon_1, \epsilon_2, \epsilon_3, \epsilon_4\\): deformaciones en las ramas 1 a 4 del puente [\\(\mu\text{m/m}\\)].

#### Ecuación 5: Conducción de calor interna en el elastómero de la celda de carga [26_2024_Zhuang_TemperatureLoadCell.pdf]
* **Número en la fuente:** (1)
* **Qué calcula:** La distribución espacial y temporal de la temperatura en la celda debido al autocalentamiento de la PCB y galgas.
* **Ecuación:** \\(\frac{\partial T}{\partial t} = \alpha \nabla^2 T + \frac{q}{\rho c}\\)
* **Variables, significado y unidades:**
  * \\(T\\): temperatura [\\(^\circ\text{C}\\) o \\(\text{K}\\)].
  * \\(t\\): tiempo [\\(\text{s}\\)].
  * \\(\alpha\\): coeficiente de difusión térmica [\\(\text{m}^2/\text{s}\\)].
  * \\(\nabla^2\\): operador laplaciano [\\(\text{m}^{-2}\\)].
  * \\(q\\): tasa de generación de calor por unidad de volumen [\\(\text{W/m}^3\\)].
  * \\(\rho\\): densidad del material elastómero [\\(\text{kg/m}^3\\)].
  * \\(c\\): capacidad calorífica específica [\\(\text{J/(kg}\cdot\text{^\circ C)}\\)].

#### Ecuación 6: Transferencia de calor por convección en la superficie de la celda [26_2024_Zhuang_TemperatureLoadCell.pdf]
* **Número en la fuente:** (2) y (3)
* **Qué calcula:** El flujo de calor conducido a la superficie y disipado por convección hacia el ambiente.
* **Ecuación:** \\(q_{\text{flux}} = -\lambda \nabla T = h(T - T_\infty)\\)
* **Variables, significado y unidades:**
  * \\(q_{\text{flux}}\\) (denotado \\(a\\) en la fuente): flujo de calor por unidad de área [\\(\text{W/m}^2\\)].
  * \\(\lambda\\): conductividad térmica del elastómero [\\(\text{W/(m}\cdot\text{K)}\\)].
  * \\(\nabla T\\): gradiente de temperatura [\\(\text{K/m}\\)].
  * \\(h\\): coeficiente de transferencia de calor por convección [\\(\text{W/(m}^2\cdot\text{K)}\\)].
  * \\(T\\): temperatura superficial [\\(^\circ\text{C}\\)].
  * \\(T_\infty\\): temperatura del aire ambiente [\\(^\circ\text{C}\\)].

#### Ecuación 7: Resistencia en función de la temperatura para termistor Pt1000 [26_2024_Zhuang_TemperatureLoadCell.pdf]
* **Número en la fuente:** (6)
* **Qué calcula:** La resistencia eléctrica del termistor Pt1000 para el rango \\(0\ ^\circ\text{C} < t < 850\ ^\circ\text{C}\\).
* **Ecuación:** \\(R_t = R_0 \cdot (1 + A \cdot t + B \cdot t^2)\\)
* **Variables, significado y unidades:**
  * \\(R_t\\): resistencia eléctrica a la temperatura \\(t\\) [\\(\Omega\\)].
  * \\(R_0\\): resistencia a \\(0\ ^\circ\text{C}\\) (\\(1000\ \Omega\\)) [\\(\Omega\\)].
  * \\(t\\): temperatura real [\\(^\circ\text{C}\\)].
  * \\(A\\): coeficiente de temperatura de primer orden (\\(3.9083 \times 10^{-3}\ \text{^\circ C}^{-1}\\)) [\\(\text{^\circ C}^{-1}\\)].
  * \\(B\\): coeficiente de temperatura de segundo orden (\\(-5.775 \times 10^{-7}\ \text{^\circ C}^{-2}\\)) [\\(\text{^\circ C}^{-2}\\)].

---

### 3. Valores típicos o tablas de referencia

* **Potencias de autocalentamiento en celdas de carga [26_2024_Zhuang_TemperatureLoadCell.pdf]:**
  * Tensión de excitación aplicada al puente: \\(5\ \text{V}\\) (Section 2).
  * Potencia nominal de calentamiento de la PCB con electrónicos: \\(0.3\ \text{W}\\) (volumétrica: \\(1 \times 10^{-3}\ \text{W/mm}^3\\)) (Section 2, Section 3.1).
  * Potencia nominal de calentamiento de las galgas: \\(0.07\ \text{W}\\) (superficial: \\(2.1875 \times 10^{-4}\ \text{W/mm}^2\\)) (Section 2, Section 3.1).
  * Espesor de la galga extensométrica: \\(20\ \mu\text{m}\\) (Section 3).
* **Propiedades mecánicas y térmicas del elastómero (Acero Inoxidable) [26_2024_Zhuang_TemperatureLoadCell.pdf]:**
  * Conductividad térmica (\\(\lambda\\)): \\(20\ \text{W/(m}\cdot\text{K)}\\) (Section 2).
  * Capacidad calorífica específica (\\(c\\)): \\(460\ \text{J/(kg}\cdot\text{^\circ C)}\\) (Section 2).
  * Densidad (\\(\rho\\)): \\(7850\ \text{kg/m}^3\\) (Section 2).
* **Temperaturas de prueba de compensación térmica según OIML R60 [26_2024_Zhuang_TemperatureLoadCell.pdf]:**
  * Temperaturas estándar de evaluación: \\(-10\ ^\circ\text{C}\\), \\(20\ ^\circ\text{C}\\) y \\(40\ ^\circ\text{C}\\) (Section 1).
  * Rango span de prueba: \\(50\ ^\circ\text{C}\\) (Section 5, Concl. 1).
* **Límites de precisión y constante de tiempo en celdas de carga [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]:**
  * Error permisible en celdas para calibración oficial: menor a \\(0.02\%\\) [porcentaje/adimensional] (Section 9).
  * Estabilidad temporal de sensibilidad nominal: mejor que \\(1 \cdot 10^{-4}/\text{año}\\) (Section 9).
* **Variación del factor de galga (\\(k\\)) con la temperatura [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]:**
  * Constantana: variación lineal de \\(+0.5\%\\) a \\(+1\%\\) por cada \\(100\ \text{K}\\) de incremento de temperatura (Fig. 3.3-15).
  * Karma: variación insignificante en el rango \\(-50\ ^\circ\text{C}\\) a \\(+100\ ^\circ\text{C}\\) (Fig. 3.3-15).
  * Nichrome V: \\(-1.5\%\\) por \\(100\ \text{K}\\) (Fig. 3.3-15).
  * Platino-tungsteno (Pt8W): \\(-3\%\\) por \\(100\ \text{K}\\) (Fig. 3.3-15).
* **Comportamiento del Módulo de Young con la temperatura [26_2024_Zhuang_TemperatureLoadCell.pdf]:**
  * En el rango de \\(-10\ ^\circ\text{C}\\) a \\(40\ ^\circ\text{C}\\), el módulo de Young del elastómero de acero es casi constante, por lo que la deformación a plena carga es casi constante (Section 5, Concl. 1).

---

### 4. Condiciones de validez y limitaciones

* **Limitación por gradientes térmicos inestables por autocalentamiento [26_2024_Zhuang_TemperatureLoadCell.pdf]:**
  * El calor generado por las galgas (\\(0.07\ \text{W}\\)) y la PCB (\\(0.3\ \text{W}\\)) crea gradientes térmicos internos inestables. Si la resistencia de níquel (Ni) se coloca en un punto no constante térmicamente respecto a las galgas (ej. Posición 1 o 3), la compensación presenta imprecisiones fluctuantes al cambiar la temperatura ambiente (Section 2, Section 4.2).
  * La posición óptima de la lámina de níquel (Posición 2 o 4) exige que la diferencia de temperatura entre la lámina y la galga permanezca constante (menor RMSE, \\(\approx 1.103 \times 10^{-3}\ \text{^\circ C}\\) en simulación y \\(4.61 \times 10^{-3}\ \text{^\circ C}\\) en experimento) (Table 4, Table 9, Section 5).
* **Límite de temperatura para máxima precisión [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]:**
  * El rango de aplicación para máxima precisión en celdas de carga está limitado a \\(-10\ ^\circ\text{C}\\) hasta \\(+40\ ^\circ\text{C}\\) con una restricción de tiempo de 20 minutos (Section 3.2.5). Cita textual: "for load cells, down to -10°C to +40°C with a time restriction of 20 minutes.".
* **Deriva térmica irreversible (Thermal drift) [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]:**
  * Cambios microestructurales y oxidación del alambre conducen a modificaciones irreversibles en el punto cero (thermal drift), lo cual invalida las curvas de compensación reversible (Section 3.3.4.2).
* **Efecto de la tensión de excitación e instalación [26_AAAA_Hoffmann_StrainGaugesHBM.pdf]:**
  * Exceder la tensión de excitación máxima permisible causa sobrecalentamiento local, histeresis, fluencia (creep) y deterioro de la compensación térmica (Section 3.3.8).
  * Las galgas autocompensadas están diseñadas para montajes sobre superficies planas; el montaje en superficies curvas altera la compensación térmica en función del radio de curvatura y espesor del adhesivo (Section 3.3.4.1).

---

### 5. Figura o tabla que explique el concepto

* **Figure 1:** "Load cell circuit." (Muestra el circuito con las galgas SG1-SG4, la lámina de níquel Ni para compensar el TCR y la resistencia en paralelo P) [26_2024_Zhuang_TemperatureLoadCell.pdf].
* **Figure 3:** "Schematic diagram of heat conduction between PCB board and strain gauge." (Esquema de conducción de calor desde la PCB hacia las posiciones 1, 2, 3, 4 de la resistencia de compensación) [26_2024_Zhuang_TemperatureLoadCell.pdf].
* **Figure 18:** "Root mean square error of temperature difference at each position with respect to the strain gauge at different temperatures." (Gráfica de RMSE demostrando la estabilidad térmica superior de la posición 2) [26_2024_Zhuang_TemperatureLoadCell.pdf].
* **Fig. 3.3-8:** "Temperature response of strain gages with identical parameters bonded to component materials having different coefficients of thermal expansion" [26_AAAA_Hoffmann_StrainGaugesHBM.pdf].
* **Fig. 3.3-10:** "Residual temperature responses of temperature compensated strain gages with optimum matching to the thermal expansion coefficients of various component materials in the temperature range 10 to 130° C." [26_AAAA_Hoffmann_StrainGaugesHBM.pdf].
* **Fig. 3.3-15:** "Relative gage factor changes in relationship to temperature for four normal measuring grid alloys" [26_AAAA_Hoffmann_StrainGaugesHBM.pdf].
* **Fig. 6.1-1:** "Operating characteristics of a measuring amplifier a) amplifier alone b) amplifier with tare signal T c) amplifier with tare signal compensated d) amplifier with gain adjusted" [26_AAAA_Hoffmann_StrainGaugesHBM.pdf].

---

### 6. INFERENCIA

Para seleccionar la capacidad nominal y sensibilidad (mV/V) y verificar la compensación térmica de la celda de carga en la Panadería San Miguel, hacen falta los siguientes datos del caso:

1. **INFERENCIA:** Masa muerta (tara) de la tolva vacía, accesorios y estructura de montaje, para sumarla a la masa máxima de harina por ciclo (8,000 kg) y definir la capacidad nominal total sin saturar la celda.
2. **INFERENCIA:** Número de celdas de carga y distribución de apoyos bajo la tolva (ej. 1 celda central vs. 3 o 4 celdas en paralelo), para determinar la capacidad nominal requerida por cada celda individual.
3. **INFERENCIA:** Tensión de excitación del puente suministrada por el acondicionador de señal o controlador (ej. 5 V o 10 V), para determinar el voltaje de salida máximo en milivoltios.
4. **INFERENCIA:** Rango real de fluctuación de la temperatura ambiente dentro de la planta panificadora en Santa Cruz de la Sierra durante los turnos de trabajo, para confirmar si se mantiene dentro del intervalo normativo OIML R60 (\\(-10\ ^\circ\text{C}\\) a \\(+40\ ^\circ\text{C}\\)).
5. **INFERENCIA:** Resolución y sensibilidad del convertidor analógico-digital (ADC) o módulo de pesaje, para asegurar que la señal en mV/V generada por la celda permita discriminar los ingredientes con menor masa en la receta (sal de 100 a 150 g y levadura de 30 a 50 g).

---

### VACÍOS

1. Ninguna de las fuentes marcadas (Hoffmann, Zhuang) reporta valores de sensibilidad nominal estandarizados de catálogo (por ejemplo, 2.0 mV/V o 3.0 mV/V) para celdas de carga comerciales.
2. Ninguna fuente reporta ecuaciones directas para el cálculo de capacidad nominal requerida (\\(F_{\text{nom}}\\)) considerando factores de seguridad dinámicos o distribución de carga no uniforme en apoyos múltiples.
3. Ninguna fuente reporta los coeficientes de deriva térmica de cero (TKzero) o de escala (TKspan) expresados en \\(\%/\text{^\circ C}\\) o \\(\text{ppm/^\circ C}\\) para celdas comerciales de pesaje.
4. Las fuentes no reportan la tensión de excitación máxima o recomendada para celdas de pesaje en ambientes de producción panificadora.

---
💡 *¿Te gustaría que elabore la Ficha de Fundamento 3 sobre acondicionamiento de señal, amplificación y filtrado para celdas de carga?*

# FICHA DE FUNDAMENTO 3.
**Concepto:** Amplificación y conversión analógico-digital de la señal de la celda.  
**Uso previsto en el diseño:** Diseñar el acondicionamiento de la señal (HX711 u otro).

---

### 1. Definición

| Concepto | Cita textual corta (idioma original, \\(\le\\) 20 palabras) | Ubicación | Fuente |
| :--- | :--- | :--- | :--- |
| **Acondicionador de señal (Signal Conditioner)** | "Amplification of the sensor output signals has to be made with a voltage gain up to 10,000" | Section 6.1 | [26_2016_Fraden_HandbookModernSensors.pdf] |
| **Acondicionador de señal (Signal Conditioner)** | "hacer falta un acondicionador de señal entre el sensor... y el convertidor A/D." | Apartado 1.1.3 | [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf] |
| **Amplificador de instrumentación (Instrumentation Amplifier)** | "Se denomina amplificador de instrumentación a todo circuito que posea simultáneamente: alta impedancia de entrada; alto rechazo del modo común;" | Apartado 3.5.2 | [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf] |
| **Amplificador de instrumentación (Bridge Amplifier)** | "The bridge amplifiers for resistive sensors are probably the most frequently used front stages of signal conditioners." | Section 6.2.5 | [26_2016_Fraden_HandbookModernSensors.pdf] |
| **Conversor Analógico-Digital (ADC)** | "The ADCs transform continuous analog data—usually voltage—into an equivalent discrete digital format" | Section 6.4 | [26_2016_Fraden_HandbookModernSensors.pdf] |
| **Medida Ratiométrica (Ratiometric Measurement)** | "se compara la entrada con la tensión de referencia... Se les denomina medidas ratiométricas o medidas por relación." | Apartado 3.4.5 | [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf] |
| **Medida Ratiométrica (Ratiometric Technique)** | "both the sensor and ADC are powered from the same voltage source (battery) that does not have to be regulated" | Section 6.4.7 | [26_2016_Fraden_HandbookModernSensors.pdf] |

---

### 2. Ecuaciones

#### Ecuación 1: Ganancia en modo diferencial de un amplificador de instrumentación de 3 AO [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]
* **Número en la fuente:** (5.20)
* **Qué calcula:** La ganancia en modo diferencial \\(G_d\\) del amplificador de instrumentación de tres amplificadores operacionales.
* **Ecuación:** \\(G_d = k(1 + G)\\)
* **Variables, significado y unidades:**
  * \\(G_d\\): ganancia en modo diferencial [adimensional].
  * \\(G\\): parámetro de ganancia de la primera etapa (\\(2R_1/R_2 = 2R_3/R_2 = G\\)) [adimensional].
  * \\(k\\): relación de resistencias de la segunda etapa diferencial (\\(R_5/R_4 = R_7/R_6 = k\\)) [adimensional].

#### Ecuación 2: Tensión de salida de amplificador diferencial [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]
* **Número en la fuente:** (5.4)
* **Qué calcula:** La tensión de salida \\(V_s\\) en función de las tensiones en modo común (\\(E_c\\)) y modo diferencial (\\(E_d\\)).
* **Ecuación:** \\(V_s = G_c E_c + G_d E_d\\)
* **Variables, significado y unidades:**
  * \\(V_s\\): tensión de salida del amplificador [\\(\text{V}\\)].
  * \\(G_c\\): ganancia en modo común [adimensional].
  * \\(E_c\\): tensión de entrada en modo común [\\(\text{V}\\)].
  * \\(G_d\\): ganancia en modo diferencial [adimensional].
  * \\(E_d\\): tensión de entrada en modo diferencial [\\(\text{V}\\)].

#### Ecuación 3: Factor de Rechazo del Modo Común (CMRR) por tolerancia de resistencias [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]
* **Número en la fuente:** (5.27)
* **Qué calcula:** El CMRR total del amplificador de instrumentación debido a la tolerancia \\(\alpha\\) en las resistencias de la etapa diferencial.
* **Ecuación:** \\(\text{CMRR}_{\text{TOTAL}} \approx (G + 1) \frac{k + 1}{4\alpha}\\)
* **Variables, significado y unidades:**
  * \\(\text{CMRR}_{\text{TOTAL}}\\): rechazo del modo común total [adimensional o \\(\text{dB}\\)].
  * \\(G\\): ganancia de la primera etapa [adimensional].
  * \\(k\\): relación de resistencias de la segunda etapa [adimensional].
  * \\(\alpha\\): tolerancia porcentual/fraccional de las resistencias [adimensional].

#### Ecuación 4: Salida digital de un ADC ratiométrico [26_2016_Fraden_HandbookModernSensors.pdf]
* **Número en la fuente:** (6.52) y (6.53)
* **Qué calcula:** El recuento o código digital \\(n\\) a la salida del ADC alimentado en configuración ratiométrica.
* **Ecuación:** \\(n = \frac{V_r}{V_{\text{bat}}} N_{\text{FS}} = \frac{r}{r + R} N_{\text{FS}}\\)
* **Variables, significado y unidades:**
  * \\(n\\): recuento digital de salida (digital count) [cuentas o adimensional].
  * \\(V_r\\): tensión de entrada medida proveniente del sensor [\\(\text{V}\\)].
  * \\(V_{\text{bat}}\\): tensión de alimentación y referencia común [\\(\text{V}\\)].
  * \\(N_{\text{FS}}\\): recuento digital máximo a fondo de escala (\\(2^n - 1\\) o \\(2^n\\)) [cuentas].
  * \\(r, R\\): resistencias del circuito divisor o puente del sensor [\\(\Omega\\)].

#### Ecuación 5: Resolución de un ADC en voltios por bit (LSB) [26_2016_Fraden_HandbookModernSensors.pdf]
* **Número en la fuente:** (6.47)
* **Qué calcula:** La resolución de entrada \\(R_0\\) (peso del bit menos significativo LSB) de un conversor A/D de \\(n\\) bits.
* **Ecuación:** \\(R_0 = \frac{E}{2^n - 1}\\)
* **Variables, significado y unidades:**
  * \\(R_0\\): resolución en voltios por bit [\\(\text{V/bit}\\) o \\(\text{mV/bit}\\)].
  * \\(E\\): tensión de fondo de escala (Full Scale) [\\(\text{V}\\)].
  * \\(n\\): número de bits de resolución del conversor [bits].

#### Ecuación 6: Extensión de resolución por sobremuestreo (Oversampling) [26_2016_Fraden_HandbookModernSensors.pdf]
* **Número en la fuente:** (6.50)
* **Qué calcula:** La frecuencia de sobremuestreo \\(f_{os}\\) requerida para extender la resolución en \\(n\\) bits adicionales.
* **Ecuación:** \\(f_{os} > 2^{2+n} f_m\\)
* **Variables, significado y unidades:**
  * \\(f_{os}\\): frecuencia de sobremuestreo [\\(\text{Hz}\\)].
  * \\(n\\): número de bits de extensión requeridos [bits].
  * \\(f_m\\): frecuencia espectral máxima de la señal de entrada [\\(\text{Hz}\\)].

#### Ecuación 7: Tensión de ruido térmico de Johnson en resistencias [26_2016_Fraden_HandbookModernSensors.pdf]
* **Número en la fuente:** Texto en Section 6.6
* **Qué calcula:** La tensión media de ruido térmico \\(e_n\\) a temperatura ambiente.
* **Ecuación:** \\(e_n \approx 0.13 \sqrt{R \cdot \Delta f}\\)
* **Variables, significado y unidades:**
  * \\(e_n\\): tensión de ruido térmico [\\(\text{nV}\\)].
  * \\(R\\): resistencia eléctrica [\\(\Omega\\)].
  * \\(\Delta f\\): ancho de banda de medición [\\(\text{Hz}\\)].

---

### 3. Valores típicos o tablas de referencia

* **Impedancia de entrada y ganancias requeridas [26_2016_Fraden_HandbookModernSensors.pdf] y [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]:**
  * Impedancia de entrada de amplificadores de instrumentación: del orden de \\(\text{G}\Omega\\) o \\(10\ \text{M}\Omega\\) o superior (Section 6.1.4, Apartado 3.4.6).
  * Ganancia de tensión típica para acondicionar salidas pequeñas de sensores: hasta \\(10\,000\\) (Section 6.1).
* **Peso de bit (LSB) y resolución según número de bits para fondo de escala \\(E = 5\ \text{V}\\) [26_2016_Fraden_HandbookModernSensors.pdf]:**
  * ADC de 10 bits (\\(2^{10} = 1024\\)): LSB \\(\approx 5\ \text{mV}\\) (Section 6.6).
  * ADC de 12 bits (\\(2^{12} = 4096\\)): LSB \\(= 1.22\ \text{mV/bit}\\) (Section 6.4.6, Eq. 6.47).
  * ADC de 16 bits (\\(2^{16} = 65\,536\\)): LSB \\(= 77\ \mu\text{V}\\) (Section 6.6).
  * ADC de 16 bits con entrada de \\(5\ \text{mV}\\) a fondo de escala: LSB \\(= 77\ \text{nV}\\) (Section 6.6).
  * Table 6.3 ("Binary bit weights and resolutions"): 8 bits (0.39%), 10 bits (0.097%), 12 bits (0.024%), 16 bits (0.0015% / 15 ppm), 20 bits (0.95 ppm).
* **Frecuencias de muestreo y conversión [26_2016_Fraden_HandbookModernSensors.pdf]:**
  * ADC por aproximación sucesiva: tasas de muestreo de hasta \\(1\ \text{MHz}\\) (Section 6.4.5).
  * ADC integrador V/F: frecuencia a fondo de escala de \\(32\ \text{kHz}\\) a \\(8\ \text{muestras/s}\\) proporciona \\(4000\\) cuentas (\\(\approx 12\ \text{bits}\\)) (Section 6.4.2). Rango de frecuencia V/F: \\(1\ \text{Hz}\\) a \\(1\ \text{MHz}\\) (Section 6.4.2).
  * Rechazo de ruido de red por integración V/F: tiempo de integración \\(T = 16.67\ \text{ms}\\) elimina totalmente interferencias de \\(60\ \text{Hz}\\) y sus armónicos (\\(120, 180, 240\ \text{Hz}\\)) (Section 6.4.2).
* **CMRR típico en amplificadores de instrumentación [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]:**
  * Integrados de 3 AO (ej. INA101, INA104, INA110, AD524): \\(\text{CMRR} \ge 90\ \text{dB}\\) a \\(50\ \text{Hz}\\) con ganancia en modo diferencial de 1 (Apartado 3.5.3).
* **Estabilidad de referencias de tensión [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]:**
  * LM399A: deriva térmica \\(0.6 \times 10^{-6}/\text{K}\\), ruido \\(6\ \mu\text{V p-p}\\) en la banda de \\(0.1\ \text{a}\ 10\ \text{Hz}\\) (Cuadro 3.3).
  * REF102CM: deriva térmica \\(2.5 \times 10^{-6}/\text{K}\\), ruido \\(5\ \mu\text{V p-p}\\) en la banda de \\(0.1\ \text{a}\ 10\ \text{Hz}\\) (Cuadro 3.3).

---

### 4. Condiciones de validez y limitaciones

* **Limitación por ruido en conversiones de alta resolución [26_2016_Fraden_HandbookModernSensors.pdf]:**
  * No es técnicamente válido utilizar un conversor de alta resolución (ej. 16 bits) si el ruido combinado del circuito excede el valor del bit menos significativo LSB (ej. ruido combinado de \\(300\ \mu\text{V}\\) invalida un LSB de \\(77\ \mu\text{V}\\) o \\(77\ \text{nV}\\)) (Section 6.6).
* **Limitación por aliasing y criterio de Nyquist [26_2016_Fraden_HandbookModernSensors.pdf]:**
  * La frecuencia de muestreo \\(f_s\\) debe cumplir estrictamente \\(f_s > 2 f_m\\) (donde \\(f_m\\) es la frecuencia espectral máxima de la señal) para evitar aliasing (Section 6.4.6).
  * En sobremuestreo, la señal debe variar entre muestras; si es constante, requiere agregar un ruido artificial (jitter) de \\(0.5\\) a \\(2\ \text{LSB}\\) para habilitar la extensión de resolución (Section 6.4.6).
* **Degradación del CMRR por desemparejamiento de resistencias y frecuencia [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]:**
  * Una tolerancia \\(\alpha = 5\%\\) en las resistencias de la etapa diferencial con ganancia \\(G = 1000\\) degrada el CMRR a \\(80\ \text{dB}\\) (o \\(74\ \text{dB}\\) si \\(k = 10\\)) (Apartado 3.5.3, Eq. 5.27).
  * El CMRR decrece con la frecuencia a razón de \\(20\ \text{dB/década}\\) a partir de la frecuencia de corte \\(\omega_r\\) (Apartado 3.5.3, Eq. 5.30).
* **Límite de tensión en modo común [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]:**
  * Los amplificadores de instrumentación estándar no soportan tensiones de modo común elevadas (límite típico del orden de \\(10\ \text{V}\\)); para tensiones mayores se requiere un amplificador de aislamiento (AA) (Apartado 3.6.4).
* **Riesgo de saturación en estructuras de 2 AO [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]:**
  * En AI de 2 AO, las ganancias bajas tienen un mayor riesgo de saturar el primer AO cuando la tensión de modo común es alta (Apartado 3.5.2, Eq. 5.13).

---

### 5. Figura o tabla que explique el concepto

* **Figura 3.33:** "Medidas por relación empleando un convertidor A/D. La fuente de alimentación del puente no hace falta ahora que sea muy estable." [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]
* **Figura 3.36:** "Amplificador diferencial simple basado en un único amplificador operacional." [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]
* **Figura 3.39:** "Amplificador de instrumentación realizado mediante dos amplificadores operacionales." [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]
* **Figura 3.40:** "Amplificador de instrumentación realizado mediante tres amplificadores operacionales." [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]
* **Cuadro 3.3:** "Estabilidad de algunos componentes que ofrecen una tensión de salida constante." [26_AAAA_PallasAreny_SensoresAcondicionadores.pdf]
* **Fig. 6.19:** "Bridge amplifiers with operational amplifiers: d) grounded resistive sensor with amplifier gain n" [26_2016_Fraden_HandbookModernSensors.pdf]
* **Fig. 6.25:** "Charge-balance V/F converter" [26_2016_Fraden_HandbookModernSensors.pdf]
* **Fig. 6.30:** "Block Diagram of successive-approximation DAC" [26_2016_Fraden_HandbookModernSensors.pdf]
* **Fig. 6.32:** "Resolution enhancement circuit with DAC (a); adding artificial noise to input signal for oversampling (b)" [26_2016_Fraden_HandbookModernSensors.pdf]
* **Fig. 6.33:** "Powering the sensor circuit with constant voltage (a), constant current (b), and ratiometric voltage (c)" [26_2016_Fraden_HandbookModernSensors.pdf]
* **Table 6.3:** "Binary bit weights and resolutions" [26_2016_Fraden_HandbookModernSensors.pdf]

---

### 6. INFERENCIA

Para diseñar la etapa de amplificación y conversión analógico-digital de la celda de carga en la Panadería San Miguel, hacen falta los siguientes datos específicos del caso:

1. **INFERENCIA:** Tensión máxima de salida en mV/V generada por la celda de carga bajo la masa total del lote (8,000 kg de harina + tara), para fijar la ganancia diferencial (\\(G_d\\)) requerida y aprovechar el rango de entrada del ADC sin saturar.
2. **INFERENCIA:** Sensibilidad y resolución mínima necesaria por ingrediente en la receta de menor masa (ej. levadura de 30 g frente a un total del lote de 8,000 kg), para definir el número de bits efectivos (ENOB) o resolución nominal del ADC (ej. \\(8000 / 0.030 = 266\,667\\) divisiones, lo que demanda un ADC de al menos 19 bits efectivos o 24 bits nominales).
3. **INFERENCIA:** Ancho de banda dinámico y velocidad del proceso de vertido/caída de harina en la tolva, para seleccionar la frecuencia de muestreo del ADC y dimensionar el filtro de paso bajo de antialiasing.
4. **INFERENCIA:** Frecuencia exacta y nivel de ruido/interferencia eléctrica ambiental en la planta (50 Hz o 60 Hz), para ajustar el tiempo de integración o tasa de salida del ADC y garantizar el rechazo de red.
5. **INFERENCIA:** Distancia física entre la celda de carga y la tarjeta del controlador, para determinar si se requiere un montaje de 4 o 6 hilos (conexión Kelvin) o situar el digitalizador directamente en la celda.

---

### VACÍOS

1. Ninguna de las fuentes marcadas (Pallás-Areny, Fraden) menciona ni reporta datos sobre el módulo comercial específico HX711 ni sus parámetros de catálogo (ganancias seleccionables 32/64/128, tasa de muestreo de 10 Hz / 80 Hz, ADC Sigma-Delta de 24 bits).
2. Ninguna fuente reporta especificaciones técnicas detalladas de convertidores ADC del tipo Sigma-Delta (\\(\Sigma-\Delta\\)) enfocados en aplicaciones de pesaje industrial.
3. Ninguna fuente reporta datos sobre la inmunidad o acoplamiento electromagnético en entornos de panadería con motores e influyentes inductivos.
4. Ninguna fuente reporta la degradación cuantitativa del LSB debida a la resistencia de cables en tiradas largas para celdas de carga.

# FICHA DE FUNDAMENTO 4.
**Concepto:** Ruido y filtrado de la señal de pesaje (pasa bajos, FIR, Kalman, filtros por modelo).  
**Uso previsto en el diseño:** Elegir el filtro de la lectura de peso.

---

### 1. Definición

| Concepto | Cita textual corta (idioma original, \\(\le\\) 20 palabras) | Ubicación | Fuente |
| :--- | :--- | :--- | :--- |
| **Filtro Pasa Bajos (LPF)** | "The input signal was filtered through LPF having variable cutoff frequency and slope controlling capability" | Section 3.1 | [26_2017_Choi_NoiseLoadCellWeighing.pdf] |
| **Filtro basado en modelos (Shaper-Based Filter, SBF)** | "a model-based filtering technique is proposed to ensure accurate, robust and rapid estimation of the mass" | Abstract | [26_2018_Richiedei_ShaperFiltersLoadCell.pdf] |
| **Filtro basado en modelos (SBF en línea)** | "SBFs are online signal processing schemes employed to quickly retrieve the steady state value of the load cell signal" | Section 1 | [26_2018_Richiedei_ShaperFiltersLoadCell.pdf] |
| **Filtro FIR (Finite Impulse Response)** | "The Finite Impulse Response (FIR) filter is a filtering method used to process digital signals." | Section 2.1 | [26_2025_Zengin_FIRKalmanDynamicWeighing.pdf] |
| **Filtro FIR (Preprocesamiento)** | "FIR filtering is employed to preprocess the data, effectively removing low-frequency noise." | Abstract | [26_2025_Zengin_FIRKalmanDynamicWeighing.pdf] |
| **Filtro de Kalman (KF)** | "The Kalman filter is a state estimation algorithm that is widely used because it makes predictions" | Section 1 | [26_2025_Zengin_FIRKalmanDynamicWeighing.pdf] |
| **Híbrido FIR-Kalman** | "combining a Finite Impulse Response (FIR) filter for preliminary noise attenuation with a Kalman filter" | Section 4 | [26_2025_Zengin_FIRKalmanDynamicWeighing.pdf] |

---

### 2. Ecuaciones

#### Ecuaciones de [26_2017_Choi_NoiseLoadCellWeighing.pdf]

* **Ecuación 1: Señal total medida con ruido de vibración y ambiental**
  * **Número en la fuente:** (1)
  * **Qué calcula:** La señal total medida \\(Y_X(t,x)\\) compuesta por la vibración de operación del transportador \\(S_X(t,x)\\) y el ruido ambiental \\(N_X(t,x)\\).
  * **Ecuación:** \\(Y_X(t, x) = S_X(t, x) + N_X(t, x)\\)
  * **Variables, significado y unidades:**
    * \\(Y_X(t, x)\\): señal total de salida medida del transductor [mV].
    * \\(S_X(t, x)\\): componente de ruido por vibración de operación del sistema [mV].
    * \\(N_X(t, x)\\): ruido ambiental (proceso estocástico o ruido blanco) [mV].
    * \\(t\\): tiempo transcurrido [s].
    * \\(x\\): posición angular del eje del motor [adimensional o mm].

* **Ecuación 2: Relación de ancho de pulso (\\(R_{\text{PW}}\\))**
  * **Número en la fuente:** (7)
  * **Qué calcula:** El parámetro de mérito \\(R_{\text{PW}}\\) (Pulse width ratio) para evaluar la distorsión del perfil de peso filtrado.
  * **Ecuación:** \\(R_{\text{PW}} = \frac{L_{\text{Top}}}{L_{\text{Bot}}}\\)
  * **Variables, significado y unidades:**
    * \\(R_{\text{PW}}\\): relación de ancho de pulso [porcentaje % o adimensional].
    * \\(L_{\text{Top}}\\): ancho del pulso en la meseta superior (nivel del \\(80\%\\) de la señal) [s o ms].
    * \\(L_{\text{Bot}}\\): ancho del pulso en la base inferior (nivel del \\(20\%\\) de la señal) [s o ms].

* **Ecuación 3: Regla empírica para la frecuencia de corte del LPF primario**
  * **Número en la fuente:** Texto en Section 3.2, 4.2 y Section 5
  * **Qué calcula:** La frecuencia de corte \\(f_{\text{co}}\\) del filtro pasa bajos primario para lograr atenuación mayor a \\(-40\text{ dB}\\) sobre el pico principal de ruido por resonancia.
  * **Ecuación:** \\(1.75 f_{\text{co}} = f_{\text{peak}}\\)
  * **Variables, significado y unidades:**
    * \\(f_{\text{co}}\\): frecuencia de corte del filtro elíptico primario [Hz].
    * \\(f_{\text{peak}}\\): frecuencia del pico principal de ruido por resonancia mecánica [Hz].

---

#### Ecuaciones de [26_2018_Richiedei_ShaperFiltersLoadCell.pdf]

* **Ecuación 4: Modelo dinámico de la celda de carga**
  * **Número en la fuente:** (1)
  * **Qué calcula:** La respuesta temporal de la celda de carga de un Grado de Libertad (1-DOF) ante una masa medida.
  * **Ecuación:** \\(\ddot{\epsilon}(t) + 2\xi \omega_N \dot{\epsilon}(t) + \omega_N^2 \epsilon(t) = c \omega_N^2 M(t)\\)
  * **Variables, significado y unidades:**
    * \\(\epsilon(t)\\): respuesta/señal medida de la celda de carga [g, kg, mV o \\(\mu\text{m/m}\\)].
    * \\(\dot{\epsilon}(t)\\): velocidad de cambio de la respuesta [señal/s].
    * \\(\ddot{\epsilon}(t)\\): aceleración de la respuesta [señal/\\(\text{s}^2\\)].
    * \\(\omega_N\\): frecuencia natural angular del sistema [rad/s].
    * \\(\xi\\): factor de amortiguamiento (damping ratio) [adimensional].
    * \\(c\\): ganancia estática de la celda de carga [señal/kg].
    * \\(M(t)\\): masa del objeto medido [kg o g].

* **Ecuación 5: Función de transferencia del filtro Shaper-Based (SBF)**
  * **Número en la fuente:** (4) y (5)
  * **Qué calcula:** La función de transferencia \\(F(s)\\) en el dominio de Laplace formada por una secuencia discreta de impulsos.
  * **Ecuación:** \\(F(s) = \sum_{i=1}^{N} A_i e^{-s t_i}\\)
  * **Variables, significado y unidades:**
    * \\(F(s)\\): función de transferencia del filtro SBF [adimensional].
    * \\(A_i\\): amplitud del \\(i\\)-ésimo impulso del filtro [adimensional].
    * \\(t_i\\): instante de tiempo de aplicación del \\(i\\)-ésimo impulso [s].
    * \\(N\\): número total de impulsos del filtro (típicamente \\(N \in\\)) [adimensional].

* **Ecuación 6: Parámetros del filtro Zero Vibration (ZV SBF de 2 impulsos)**
  * **Número en la fuente:** (12) y (19)
  * **Qué calcula:** Las amplitudes y tiempos exactos de los 2 impulsos para lograr cancelación completa de la vibración residual en el modelo nominal.
  * **Ecuación:** 
    \\[A_1 = \frac{1}{1 + K}, \quad t_1 = 0\\]
    \\[A_2 = 1 - A_1, \quad t_2 = \frac{\pi}{\omega_N \sqrt{1 - \xi^2}} = \frac{\pi}{\omega_D}\\]
    \\[\text{donde } K = \exp\left( -\frac{\pi \xi}{\sqrt{1 - \xi^2}} \right)\\]
  * **Variables, significado y unidades:**
    * \\(A_1, A_2\\): amplitudes de los impulsos 1 y 2 [adimensionales, \\(A_1 + A_2 = 1\\)].
    * \\(t_1, t_2\\): tiempos de retardo de los impulsos 1 y 2 [s].
    * \\(K\\): factor de atenuación exponencial por amortiguamiento [adimensional].
    * \\(\omega_D\\): frecuencia natural amortiguada del sistema [rad/s].
    * \\(\omega_N\\): frecuencia natural angular [rad/s].
    * \\(\xi\\): factor de amortiguamiento [adimensional].

* **Ecuación 7: Algoritmo SBF en tiempo discreto**
  * **Número en la fuente:** (15)
  * **Qué calcula:** La salida filtrada de pesaje en tiempo real mediante la convolución discreta con \\(N\\) impulsos.
  * **Ecuación:** \\(\epsilon_F(n) = \sum_{i=1}^{N} A_i \epsilon\left(n - \frac{t_i}{T_S}\right)\\)
  * **Variables, significado y unidades:**
    * \\(\epsilon_F(n)\\): señal de peso filtrada en la muestra discreta \\(n\\) [g, kg o mV].
    * \\(\epsilon(n)\\): señal de entrada de la celda de carga en la muestra \\(n\\) [g, kg o mV].
    * \\(A_i\\): amplitud del impulso \\(i\\) [adimensional].
    * \\(t_i\\): tiempo de retardo del impulso \\(i\\) [s].
    * \\(T_S\\): periodo de muestreo del sistema [s].

---

#### Ecuaciones de [26_2025_Zengin_FIRKalmanDynamicWeighing.pdf]

* **Ecuación 8: Salida del filtro digital FIR**
  * **Número en la fuente:** (1)
  * **Qué calcula:** La respuesta del filtro de respuesta impulsional finita (FIR) mediante suma de convolución.
  * **Ecuación:** \\(y(n) = \sum_{k=0}^{N} b(k) x(n - k)\\)
  * **Variables, significado y unidades:**
    * \\(y(n)\\): valor de salida filtrado en la muestra \\(n\\) [g o cuentas digitalizadas].
    * \\(x(n - k)\\): señal de entrada retardada \\(k\\) muestras [g o cuentas].
    * \\(b(k)\\): coeficiente de ponderación del filtro FIR en el índice \\(k\\) [adimensional].
    * \\(N\\): número de elementos de retardo unitario / orden del filtro [adimensional].

* **Ecuaciones 9 a 13: Algoritmo recursivo del Filtro de Kalman**
  * **Número en la fuente:** Figure 5 y texto en Section 2.2
  * **Qué calcula:** La estimación óptima del estado de peso en dos fases (predicción y actualización).
  * **Ecuaciones:**
    1. Predicción de estado: \\(x_k = A x_{k-1} + B u_k + w_{k-1}\\)
    2. Predicción de covarianza del error: \\(\tilde{h}_k = A \hat{h}_{k-1} A^T + Q\\)
    3. Ganancia de Kalman: \\(K_k = \tilde{h}_k H^T (\tilde{h}_k + R)^{-1}\\)
    4. Actualización de estado: \\(\hat{x}_k = \hat{x}_{k-1} + K_k (z_k - H \hat{x}_{k-1})\\)
    5. Actualización de covarianza del error: \\(\tilde{h}_k = (1 - H K_k) \hat{h}_k\\)
  * **Variables, significado y unidades:**
    * \\(x_k, \hat{x}_k\\): vector/valor de estado de peso estimado en la muestra \\(k\\) [g].
    * \\(A, B\\): matriz/valor de transición de estado e integración de entrada (\\(A=1, B=1\\) para 1D) [adimensional].
    * \\(u_k\\): señal de control/entrada al sistema [adimensional].
    * \\(w_{k-1}\\): ruido de proceso [g].
    * \\(\tilde{h}_k, \hat{h}_k\\): covarianza estimada del error [\\(\text{g}^2\\)].
    * \\(Q\\): covarianza del ruido de proceso [\\(\text{g}^2\\)].
    * \\(R\\): covarianza del ruido de medición [\\(\text{g}^2\\)].
    * \\(K_k\\): ganancia de Kalman en el paso \\(k\\) [adimensional].
    * \\(z_k\\): dato de medición observado en la muestra \\(k\\) [g].
    * \\(H\\): matriz/valor de observación de medición (\\(H=1\\)) [adimensional].

---

### 3. Valores típicos o tablas de referencia

*(Nota: Los datos se presentan agrupados estrictamente por fuente y ensayo experimental independiente).*

#### Parámetros y ensayo 1: Pesaje dinámico en cinta transportadora [26_2017_Choi_NoiseLoadCellWeighing.pdf]
* **Condiciones del ensayo:**
  * Transportador de cinta (ancho \\(200\text{ mm}\\), longitud de cinta \\(l_C = 300\text{ mm}\\), radio de polea \\(r_p = 9\text{ mm}\\), dientes de poleas \\(n_p = 20, n_m = 40\\)).
  * Celda de carga de capacidad nominal \\(3\text{ kg}\\), amplificación \\(1000\times\\) previa al ADC.
  * Masa de prueba: \\(50\text{ g}\\).
  * Rango de velocidad de cinta: \\(10\text{ m/min}\\) a \\(80\text{ m/min}\\) (\\(167\text{ mm/s}\\) a \\(1333\text{ mm/s}\\)).
* **Valores medidos de ruido y filtro:**
  * Frecuencia pico por resonancia: \\(\approx 36\text{ Hz}\\) a velocidad de cinta de \\(47\text{ m/min}\\) (Section 2.2).
  * Tasa de incremento de frecuencia de ruido con la velocidad: \\(\sim 0.7\text{ Hz/(m/min)}\\) en la banda de \\(40\text{ a } 55\text{ m/min}\\) (Section 2.2).
  * LPF primario: Filtro elíptico de 8.º orden (LTC1066-1) ajustado a \\(f_{\text{co}} = 20\text{ Hz}\\) para \\(f_{\text{peak}} \approx 36\text{ Hz}\\) (atenuación \\(> -40\text{ dB}\\)) (Section 3.2, 4.2).
  * LPF secundario: 6 etapas Sallen-Key con frecuencias de corte en \\(13\text{ Hz}, 22\text{ Hz}, 11\text{ Hz}, 6\text{ Hz}, 3\text{ Hz}\\) (Section 3.2, Fig. 6).
  * Criterio de diseño: \\(R_{\text{PW}} > 50\%\\) para \\(f_{\text{co}} \ge 5\text{ Hz}\\) entre \\(10\text{ y } 80\text{ m/min}\\). \\(f_{\text{co}} < 5\text{ Hz}\\) degrada \\(R_{\text{PW}}\\) por debajo de \\(50\%\\) (Section 4.2, Section 5).

#### Parámetros y ensayo 2: Balde de pesaje de ensacadora multicabezal [26_2018_Richiedei_ShaperFiltersLoadCell.pdf]
* **Condiciones del ensayo:**
  * Balde de pesaje (weigh bucket) instrumentado con celda de carga de punto único de aluminio.
  * Frecuencia natural con balde vacío: \\(\omega_N = 21.8\text{ Hz}\\), amortiguamiento \\(\xi = 0.05\\) (Section 4).
  * Masa de prueba: \\(100\text{ g}\\) caída desde tolva superior.
  * Adquisición de datos: Tarjeta National Instruments de 32 bits a tasa de muestreo de \\(2000\text{ Hz}\\) (Section 4). Pre-filtro Bessel de 2.º orden a \\(45\text{ Hz}\\) para ruido de cuantificación (Section 4).
* **Tiempos de asentamiento (\\(t_s\\)) comparativos (10 repeticiones):**
  * **Criterio de umbral de precisión \\(\pm 3\text{ g}\\) [Table 2]:**
    * SBF ZVD (3 impulsos): Media \\(t_s = 0.2750\text{ s}\\), desviación estándar \\(\sigma = 0.0406\text{ s}\\).
    * SBF ZVDD (4 impulsos): Media \\(t_s = 0.2857\text{ s}\\), \\(\sigma = 0.0424\text{ s}\\).
    * SBF ZVDDD (5 impulsos): Media \\(t_s = 0.2978\text{ s}\\), \\(\sigma = 0.0417\text{ s}\\).
    * Bessel 4.º orden (\\(\omega_b = 0.1 \omega_N\\)): Media \\(t_s = 0.5648\text{ s}\\), \\(\sigma = 0.0145\text{ s}\\).
    * Bessel 4.º orden (\\(\omega_b = 0.2 \omega_N\\)): Media \\(t_s = 0.4755\text{ s}\\), \\(\sigma = 0.0133\text{ s}\\).
    * Bessel 6.º orden (\\(\omega_b = 0.2 \omega_N\\)): Media \\(t_s = 0.4005\text{ s}\\), \\(\sigma = 0.0360\text{ s}\\).
    * Bessel 2.º orden (\\(\omega_b = 0.1 \omega_N\\)): Media \\(t_s = 0.4475\text{ s}\\), \\(\sigma = 0.0186\text{ s}\\).
  * **Criterio de umbral de precisión estricto \\(\pm 1\text{ g}\\) [Table 3]:**
    * SBF ZVD: Media \\(t_s = 0.3304\text{ s}\\), \\(\sigma = 0.0376\text{ s}\\).
    * SBF ZVDD: Media \\(t_s = 0.3179\text{ s}\\), \\(\sigma = 0.0401\text{ s}\\).
    * SBF ZVDDD: Media \\(t_s = 0.3324\text{ s}\\), \\(\sigma = 0.0373\text{ s}\\).
    * Bessel 4.º orden (\\(\omega_b = 0.1 \omega_N\\)): Media \\(t_s = 0.6151\text{ s}\\), \\(\sigma = 0.0142\text{ s}\\).
    * Bessel 4.º orden (\\(\omega_b = 0.2 \omega_N\\)): Media \\(t_s = 0.5716\text{ s}\\), \\(\sigma = 0.0394\text{ s}\\).
    * Bessel 6.º orden (\\(\omega_b = 0.2 \omega_N\\)): Media \\(t_s = 0.4779\text{ s}\\), \\(\sigma = 0.0560\text{ s}\\).
    * Bessel 2.º orden (\\(\omega_b = 0.1 \omega_N\\)): Media \\(t_s = 0.5738\text{ s}\\), \\(\sigma = 0.0319\text{ s}\\).

#### Parámetros y ensayo 3: Sistema de pesaje dinámico con celda y HX711 [26_2025_Zengin_FIRKalmanDynamicWeighing.pdf]
* **Condiciones del ensayo:**
  * Celda de carga conectada al amplificador HX711 (ADC \\(\Sigma-\Delta\\) de 24 bits), datos procesados en MATLAB con adición de ruido blanco.
* **Tasas de error porcentual promedio según la arquitectura de filtrado [Table 1]:**
  * Filtro de Kalman solo (KF): Tasa de error = \\(3.35\%\\) (Table 1, Section 3).
  * Algoritmo KF-FIR (Kalman primero, luego FIR): Tasa de error = \\(0.802\%\\) (Table 1, Section 3).
  * Algoritmo FIR-KF (FIR primero, luego Kalman): Tasa de error = \\(0.134\%\\) (Table 1, Section 3).

---

### 4. Condiciones de validez y limitaciones

* **Compromiso entre suavizado y retardo (Trade-off):**
  * **Filtros Pasa Bajos convencionales (LPF / Bessel):** Reducir la frecuencia de corte para eliminar ruido mecánico incrementa directamente el tiempo de subida y el tiempo de asentamiento (\\(t_s\\)), ralentizando el proceso de pesaje (Section 3 [Choi]; Section 1 [Richiedei]). En el filtro LPF, frecuencias de corte inferiores a \\(5\text{ Hz}\\) provocan distorsiones severas en la forma de onda, reduciendo la relación de ancho de pulso \\(R_{\text{PW}}\\) por debajo del \\(50\%\\) [Choi].
  * **Filtros FIR:** El incremento en el número de coeficientes de retardo (\\(N\\)) aumenta el "delta delay" (tiempo de retardo de transferencia entre la entrada y la salida). Los parámetros deben seleccionarse para minimizar el delta delay garantizando la estabilidad dinámica [Zengin].
  * **Filtros Shaper-Based (SBF):** El tiempo de asentamiento ideal está limitado por el tiempo del último impulso (\\(t_N\\)). Diseños con mayor número de impulsos para aumentar la robustez (ej. ZVDDD de 5 impulsos con retardo \\(4\pi/\omega_D\\)) incrementan ligeramente el tiempo de respuesta frente al ZV de 2 impulsos (\\(t_2 = \pi/\omega_D\\)), pero eliminan las oscilaciones residuales causadas por errores en la estimación de la frecuencia o el amortiguamiento [Richiedei].
  * **Filtro de Kalman:** Aplicado en solitario presenta un desempeño limitado para seguir fluctuaciones de peso instantáneas y rápidas, y sufre errores significativos cuando se introduce ruido blanco de entrada no filtrado. Su validez óptima exige la arquitectura en cascada FIR-KF [Zengin].
* **Sensibilidad a la variación de parámetros del modelo:**
  * El filtro SBF básico (ZV) es inviable en entornos reales con variaciones de frecuencia o amortiguamiento asociadas al peso de la carga. Se requiere aplicar restricciones de derivada (filtros robustos ZVD, ZVDD o ZVDDD) [Richiedei].

---

### 5. Figura o tabla que explique el concepto

* **Figure 4:** "Definition of parameters in pulse width ratio." (Definición geométrica de \\(L_{\text{Top}}\\) y \\(L_{\text{Bot}}\\) para medir la distorsión del filtro) [26_2017_Choi_NoiseLoadCellWeighing.pdf].
* **Figure 6:** "Block diagram of variable \\(f_{\text{co}}\\) and slope LPF." (Diagrama en bloques del filtro elíptico primario de 8.º orden y las 6 etapas Sallen-Key con interruptores S1-S4) [26_2017_Choi_NoiseLoadCellWeighing.pdf].
* **Fig. 2:** "Principle of the ZV SBF." (Gráfica de respuesta temporal mostrando la interferencia destructiva de dos impulsos \\(A_1\\) y \\(A_2\\) para anular la oscilación) [26_2018_Richiedei_ShaperFiltersLoadCell.pdf].
* **Fig. 5:** "Residual signal oscillations of SBFs." (Curvas de sensibilidad de oscilación residual \\(V[\%]\\) versus frecuencia normalizada \\(\omega/\omega_n\\) y amortiguamiento normalizado \\(\xi/\xi_n\\) para ZV, ZVD, ZVDD y ZVDDD) [26_2018_Richiedei_ShaperFiltersLoadCell.pdf].
* **Table 1:** "Robust SBFs." (Tabla con expresiones analíticas de amplitudes \\(A_i\\) e instantes \\(t_i\\) para filtros ZVD, ZVDD y ZVDDD) [26_2018_Richiedei_ShaperFiltersLoadCell.pdf].
* **Table 2 y Table 3:** "3-g settling time: summary of the results" y "1-g settling time: summary of the results" (Comparativa de tiempos de asentamiento entre SBF y filtros Bessel) [26_2018_Richiedei_ShaperFiltersLoadCell.pdf].
* **Figure 1:** "Flow diagram for the study" (Diagrama de flujo del experimento comparativo entre KF, KF-FIR y FIR-KF) [26_2025_Zengin_FIRKalmanDynamicWeighing.pdf].
* **Figure 4:** "Structure of the FIR filter" (Estructura de diagrama de bloques del filtro FIR con elementos de retardo \\(z^{-1}\\), multiplicadores de coeficientes \\(b_0..b_N\\) y sumadores) [26_2025_Zengin_FIRKalmanDynamicWeighing.pdf].
* **Figure 5:** "KF Estimation algorithm and mathematical equation" (Ecuaciones y ciclo recursivo de predicción y actualización del filtro de Kalman) [26_2025_Zengin_FIRKalmanDynamicWeighing.pdf].
* **Table 1:** "Algorithm results" (Comparación de error porcentual entre KF, KF-FIR y FIR-KF) [26_2025_Zengin_FIRKalmanDynamicWeighing.pdf].

---

### 6. INFERENCIA

Para seleccionar e implementar el filtro digital de la lectura de peso en el sistema de dosificación gravimétrica de la Panadería San Miguel, hacen falta los siguientes datos específicos del caso:

1. **INFERENCIA:** Frecuencia natural (\\(\omega_N\\)) y factor de amortiguamiento (\\(\xi\\)) de la estructura mecánica de pesaje (tolva de harina vacía y cargada con \\(8,000\text{ kg}\\)), para calcular los retardos de tiempo (\\(t_i\\)) y amplitudes (\\(A_i\\)) de un filtro SBF (ZVD/ZVDD) o la matriz de estado del filtro de Kalman.
2. **INFERENCIA:** Espectro de frecuencias de las vibraciones mecánicas y del ruido ambiental presente en la planta panificadora (ej. vibraciones de amasadoras, mezcladoras o impacto de la caída de harina), para fijar la frecuencia de corte (\\(f_{\text{co}}\\)) del filtro FIR/LPF o definir las covarianzas de ruido (\\(Q\\) y \\(R\\)) del filtro de Kalman.
3. **INFERENCIA:** Tiempo de asentamiento máximo admisible (\\(t_s\\)) requerido por el ciclo de control de dosificación (considerando que la dosificación de harina dura entre \\(53.2\text{ s}\\) y \\(66.6\text{ s}\\) por ciclo), para asegurar la detección precisa de los ingredientes de menor masa (levadura en polvo de \\(30\text{ g}\\) a \\(50\text{ g}\\)) sin generar retardos que causen sobrepaso en el corte de alimentación.
4. **INFERENCIA:** Frecuencia de muestreo o tasa de adquisición de datos (\\(f_s = 1/T_S\\)) del microcontrolador o módulo de pesaje seleccionado, para determinar el número de muestras de retardo (\\(n = t_i / T_S\\)) en la convolución discreta de los algoritmos FIR, SBF o Kalman.

---

### VACÍOS

1. Ninguna de las fuentes marcadas (Choi, Richiedei, Zengin) reporta caracterizaciones de ruido ni frecuencias de perturbación asociadas al flujo o caída de polvos alimenticios como la harina de trigo.
2. Ninguna fuente reporta datos sobre el impacto del ruido electromagnético de red (50 Hz / 60 Hz) en la sintonización conjunta de filtros de modelo (SBF) o algoritmos Kalman.
3. Ninguna fuente reporta algoritmos de filtrado adaptativo en tiempo real que reajusten automáticamente la frecuencia natural del filtro (\\(\omega_N\\)) conforme la masa de harina se acumula dinámicamente en el recipiente durante el llenado.

---
💡 *¿Deseas que prepare una comparativa en tabla para resumir las 4 Fichas de Fundamento desarrolladas?*

