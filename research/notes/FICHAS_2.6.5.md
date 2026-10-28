### 1. Definición

* **Definición de caudal en alimentadores de tornillo**:
  * **Valor y unidades**: Dispositivo esencialmente volumétrico donde el caudal volumétrico y masivo está determinado por el volumen barrido por revolución, el paso (\\(s\\) o \\(P\\)), la velocidad de rotación (\\(n\\) o \\(\omega\\)), la densidad aparente (\\(\rho\\) o \\(W\\)) y el coeficiente de llenado (\\(\psi\\) o \\(K\\)). Se expresa en \\(\text{t/h}\\), \\(\text{lbs/h}\\), \\(\text{kg/s}\\) o \\(\text{partículas/s}\\) [26_2021_Karwat_ScrewFillingCoefficient], [26_2000_Bates_ScrewFeeders], [26_2014_Hou_DEMCohesiveScrew], [26_2021_Xu_VariablePitchScrewWheatFlour].
  * **Cita textual corta**: *"The currently used theoretical methods allow the determination of mass efficiency of a conveyor and the drive power"* [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2).
  * **Cita textual corta**: *"Feed screws are essentially volumetric devices, moving material according to the swept volume and direction of travel."* [26_2000_Bates_ScrewFeeders] (Sección 6.3).
  * **Cita textual corta**: *"As volumetric devices, screw feeders generally provide relatively precise throughput control"* [26_2014_Hou_DEMCohesiveScrew] (Sección 1).
  * **Cita textual corta**: *"Each pitch of the equal-pitch screw feeder has the same conveyor capacity."* [26_2021_Xu_VariablePitchScrewWheatFlour] (Sección Materials and Methods / Theoretical method).
  * **Ubicación**: Sección 2 [26_2021_Karwat_ScrewFillingCoefficient], Sección 6.3 [26_2000_Bates_ScrewFeeders], Sección 1 [26_2014_Hou_DEMCohesiveScrew], Sección Materials and Methods [26_2021_Xu_VariablePitchScrewWheatFlour].

---

### 2. Ecuaciones copiadas tal como aparecen

* **Ecuación (1)** [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 1):
  \\[\text{Q} = \frac{\pi (D_z^2 - d_w^2)}{4} \cdot s \cdot n \cdot \rho \cdot \psi \cdot k_n \cdot 60\\]
  * **Qué calcula**: *Mass efficiency* (caudal masivo o eficiencia de masa del transportador/alimentador).
  * **Variables, significado y unidades**:
    * \\(Q\\): *mass efficiency*, \\(\text{t/h}\\) [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 1).
    * \\(D_z\\): *external diameter of the screw*, \\(\text{m}\\) [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 1).
    * \\(d_w\\): *internal diameter / shaft diameter*, \\(\text{m}\\) [26_2021_Karwat_ScrewFillingCoefficient] (Tabla 1).
    * \\(s\\): *screw pitch*, \\(\text{m}\\) [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 1).
    * \\(n\\): *rotational speed of the screw*, \\(\text{rpm}\\) [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 1).
    * \\(\rho\\): *bulk density of the material*, \\(\text{t/m}^3\\) [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 1).
    * \\(\psi\\): *filling rate* (rango teórico \\(0.15-0.45\\); corregido a \\(0.9\\) en inundación/bajo tolva), adimensional [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2 y 4).
    * \\(k_n\\): *coefficient dependent on the angle of inclination of the conveyor* (\\(k_n = 1.0\\) para horizontal), adimensional [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 1).
    * \\(60\\): factor de conversión de minutos a horas.

* **Ecuación (3)** [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 3):
  \\[\text{C} = \frac{0.7854 \cdot (D_s^2 - D_p^2) \cdot P \cdot K \cdot n \cdot W \cdot 60}{1728}\\]
  * **Qué calcula**: *Mass efficiency* (caudal masivo según el método CEMA en unidades imperiales).
  * **Variables, significado y unidades**:
    * \\(C\\): *mass efficiency*, \\(\text{lbs/h}\\) [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 3).
    * \\(D_s\\): *external diameter of the screw*, \\(\text{in}\\) [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 3).
    * \\(D_p\\): *diameter of the shaft of the screw*, \\(\text{in}\\) [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 3).
    * \\(P\\): *screw pitch*, \\(\text{in}\\) [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 3).
    * \\(K\\): *filling rate percent* (teórico \\(0.3\\); corregido a \\(1.0\\) para \\(100\%\\)), adimensional/porcentaje [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2 y 4).
    * \\(n\\): *rotational speed of the shaft*, \\(\text{rpm}\\) [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 3).
    * \\(W\\): *bulk density of the material*, \\(\text{lbs/ft}^3\\) [26_2021_Karwat_ScrewFillingCoefficient] (Sección 2, Eq. 3).
    * \\(0.7854, 1728, 60\\): constantes de conversión geométrica e imperial.

* **Ecuación (3)** [26_2014_Hou_DEMCohesiveScrew] (Sección 4.1, Eq. 3):
  \\[\text{n} = \rho \omega L \pi (D_b^2 - D_s^2) / 4 / V_p t\\]
  * **Qué calcula**: *Solid flowrate* (tasa de flujo sólido en número de partículas por unidad de tiempo).
  * **Variables, significado y unidades**:
    * \\(n\\): *solid flowrate*, \\(\text{partículas/s}\\) (\\(1/\text{s}\\)) [26_2014_Hou_DEMCohesiveScrew] (Sección 4.1, Eq. 3).
    * \\(\rho\\): *packing fraction of particles (in the screw)*, adimensional [26_2014_Hou_DEMCohesiveScrew] (Sección 4.1, Eq. 3).
    * \\(\omega\\): *rotational speed of the screw*, \\(\text{rpm}\\) [26_2014_Hou_DEMCohesiveScrew] (Tabla 2).
    * \\(L\\): *screw pitch*, \\(\text{mm}\\) [26_2014_Hou_DEMCohesiveScrew] (Tabla 2).
    * \\(D_b\\): *blade diameter*, \\(\text{mm}\\) [26_2014_Hou_DEMCohesiveScrew] (Tabla 2).
    * \\(D_s\\): *shaft diameter*, \\(\text{mm}\\) [26_2014_Hou_DEMCohesiveScrew] (Tabla 2).
    * \\(t\\): *rotating time*, \\(\text{s}\\) [26_2014_Hou_DEMCohesiveScrew] (Sección 4.1, Eq. 3).
    * \\(V_p\\): *volume of individual spherical particles*, \\(\text{mm}^3\\) [26_2014_Hou_DEMCohesiveScrew] (Sección 4.1, Eq. 3).

* **Ecuación (4)** [26_2014_Hou_DEMCohesiveScrew] (Sección 4.2, Eq. 4):
  \\[\text{Q} = A e^{f_c / 2} + B\\]
  * **Qué calcula**: *Solid flowrate* (\\(Q\\)) en función de la fuerza cohesiva (\\(f_c\\)) y la velocidad de rotación (\\(\omega\\)).
  * **Variables, significado y unidades**:
    * \\(Q\\): *solid flowrate*, \\(10^3/\text{s}\\) (\\(\text{partículas/s}\\)) [26_2014_Hou_DEMCohesiveScrew] (Sección 4.2, Eq. 4).
    * \\(f_c\\): *magnitude of the cohesive force*, adimensional (en múltiplos del peso de partícula \\(m_p g\\)) [26_2014_Hou_DEMCohesiveScrew] (Sección 3 y Eq. 4).
    * \\(A\\): coeficiente ajustado \\(A = -(2.836 \times 10^{-4} \omega + 0.036)\\), adimensional [26_2014_Hou_DEMCohesiveScrew] (Sección 4.2, Eq. 4).
    * \\(B\\): coeficiente ajustado \\(B = 6.164 \omega + 851.6\\), adimensional [26_2014_Hou_DEMCohesiveScrew] (Sección 4.2, Eq. 4).
    * \\(\omega\\): *rotational speed of the screw feeder*, \\(\text{rpm}\\) [26_2014_Hou_DEMCohesiveScrew] (Sección 4.2, Eq. 4).

* **Ecuaciones (1) a (5)** [26_2021_Xu_VariablePitchScrewWheatFlour] (Sección Materials and Methods / Theoretical method, Eqs. 1–5):
  \\[\text{(1) } A_1 = k_1 S_1, A_2 = k_2 S_2, A_3 = k_3 S_3 \dots A_n = k_n S_n\\]
  \\[\text{(2) } A_1 = A_n, A_2 = A_{n-1}, A_3 = A_{n-2} \dots\\]
  \\[\text{(3) } S_2 - S_1 = S_3 - S_2 = S_4 - S_3 = \dots = S_n - S_{n-1}\\]
  \\[\text{(4) } S_2 = 2 S_1, S_3 = 3 S_1 \dots S_n = n S_1\\]
  \\[\text{(5) } k_1 S_1 + k_2 S_2 + k_3 S_3 + \dots + k_n S_n = L\\]
  * **Qué calcula**: Geometría de pasos variables (\\(S_1 \dots S_n\\)) en la sección sumergida bajo la tolva para lograr extracción uniforme y eliminar zonas muertas.
  * **Variables, significado y unidades**:
    * \\(S_1, S_2 \dots S_n\\): *pitch values of the screw feeding section*, \\(\text{mm}\\) [26_2021_Xu_VariablePitchScrewWheatFlour] (Eq. 1).
    * \\(k_1, k_2 \dots k_n\\): *number of turns corresponding to each pitch value*, adimensional [26_2021_Xu_VariablePitchScrewWheatFlour] (Eq. 1).
    * \\(A_1, A_2 \dots A_n\\): *lengths of dead sections*, \\(\text{mm}\\) [26_2021_Xu_VariablePitchScrewWheatFlour] (Eq. 1).
    * \\(L\\): *total length of the feed section*, \\(\text{mm}\\) [26_2021_Xu_VariablePitchScrewWheatFlour] (Eq. 5).

---

### 3. Valores típicos o tablas de referencia

* **Harina de trigo (*Wheat flour*)** [26_2021_Xu_VariablePitchScrewWheatFlour]:
  * **Humedad**: \\(13.5\%\\) [26_2021_Xu_VariablePitchScrewWheatFlour] (Sección Materials and Methods).
  * **Cenizas**: \\(0.51\%\\) [26_2021_Xu_VariablePitchScrewWheatFlour] (Sección Materials and Methods).
  * **Densidad aparente suelta (*loose density*)**: \\(0.52\text{ t/m}^3\\) (\\(520\text{ kg/m}^3\\)) [26_2021_Xu_VariablePitchScrewWheatFlour] (Sección Materials and Methods).
  * **Caudal medido a \\(80\text{ r/min}\\) con paso constante de \\(100\text{ mm}\\)**: promedio \\(0.573\text{ kg/s}\\), rango \\(0.502 - 0.673\text{ kg/s}\\), fluctuación de \\(\pm 17.5\%\\) [26_2021_Xu_VariablePitchScrewWheatFlour] (Sección Results and discussions).
  * **Caudal medido a \\(80\text{ r/min}\\) con paso variable de \\(2\\) zonas muertas (\\(S_1=27\text{ mm}\times 4, S_2=55\text{ mm}\times 2, S_3=82\text{ mm}\times 1\\))**: promedio \\(0.535\text{ kg/s}\\), rango \\(0.493 - 0.572\text{ kg/s}\\), fluctuación de \\(\pm 7.85\%\\) [26_2021_Xu_VariablePitchScrewWheatFlour] (Tabla 1 y Sección Results and discussions).

* **Cemento Portland (*Portland cement*)** [26_2021_Karwat_ScrewFillingCoefficient]:
  * **Densidad aparente**: \\(1050\text{ kg/m}^3\\) [26_2021_Karwat_ScrewFillingCoefficient] (Tabla 2).
  * **Humedad**: \\(0.2\%\\) [26_2021_Karwat_ScrewFillingCoefficient] (Tabla 2).
  * **Ángulo de reposo**: \\(35.9^\circ\\) [26_2021_Karwat_ScrewFillingCoefficient] (Tabla 2).
  * **Coeficiente de fricción externa**: \\(0.52\\) [26_2021_Karwat_ScrewFillingCoefficient] (Tabla 2).
  * **Coeficiente de llenado corregido bajo tolva**: \\(\psi = 0.9\\) (método básico) y \\(K = 1.0\\) (\\(100\%\\), CEMA) [26_2021_Karwat_ScrewFillingCoefficient] (Sección 4, Fig. 8).
  * **Rango de velocidad de giro**: \\(20 - 70\text{ rpm}\\) (experimental) y \\(20 - 80\text{ rpm}\\) (simulación) [26_2021_Karwat_ScrewFillingCoefficient] (Tabla 1 y Sección 6).
  * **Caudal masivo resultantes (\\(D_z=160\text{ mm}, s=75\text{ mm}\\))**: \\(1.5\text{ Mg/h}\\) a \\(20\text{ rpm}\\) hasta \\(5.8\text{ Mg/h}\\) a \\(70\text{ rpm}\\) [26_2021_Karwat_ScrewFillingCoefficient] (Fig. 8).

* **Partículas esféricas (Modelo DEM)** [26_2014_Hou_DEMCohesiveScrew]:
  * **Diámetro de partícula**: \\(4\text{ mm}\\) (*bin*) y \\(5\text{ mm}\\) (*hopper*) [26_2014_Hou_DEMCohesiveScrew] (Tabla 2).
  * **Densidad de partícula**: \\(2500\text{ kg/m}^3\\) [26_2014_Hou_DEMCohesiveScrew] (Tabla 2).
  * **Rango de velocidad del tornillo**: \\(300 - 1200\text{ rpm}\\) [26_2014_Hou_DEMCohesiveScrew] (Tabla 2).
  * **Fuerza cohesiva (\\(f_c\\))**: \\(0 - 25\text{ mg}\\) [26_2014_Hou_DEMCohesiveScrew] (Sección 3).
  * **Caudal sólido a \\(f_c = 0\text{ mg}\\)**: \\(\approx 4.2 \times 10^3\text{ part/s}\\) (\\(600\text{ rpm}\\)), \\(\approx 6.4 \times 10^3\text{ part/s}\\) (\\(900\text{ rpm}\\)), \\(\approx 8.2 \times 10^3\text{ part/s}\\) (\\(1200\text{ rpm}\\)) [26_2014_Hou_DEMCohesiveScrew] (Fig. 4).

* **Parámetros recomendados de diseño general** [26_2000_Bates_ScrewFeeders]:
  * **Velocidades de trabajo típicas**: \\(15 - 100\text{ r/min}\\) [26_2000_Bates_ScrewFeeders] (Sección 1.2 y 6.3).
  * **Ratio máximo diámetro tubo/profundidad de ala**: \\(3:1\\) [26_2000_Bates_ScrewFeeders] (Sección 6.2).
  * **Ratio paso a profundidad de ala (*pitch-to-depth ratio*)**: \\(0.5\\) a \\(3\\) [26_2000_Bates_ScrewFeeders] (Sección 6.2).
  * **Eficiencia volumétrica estimada bruta**: \\(85\%\\) (\\(0.85\\)) [26_2000_Bates_ScrewFeeders] (Sección 6.3).

* **Azúcar, sal y levadura en polvo**:
  * **Valor y unidades**: «no reporta» en las fuentes marcadas [26_2000_Bates_ScrewFeeders], [26_2014_Hou_DEMCohesiveScrew], [26_2021_Karwat_ScrewFillingCoefficient], [26_2021_Xu_VariablePitchScrewWheatFlour].

---

### 4. Condiciones de validez y limitaciones

* **Limitación de métodos teóricos y material cohesivo**:
  * Los métodos teóricos clásicos asumen coeficientes de llenado reducidos (\\(\psi = 0.15 - 0.45\\)) y relaciones lineales simples. Subestiman el caudal real bajo tolva saturada (\\(\psi \approx 0.9 - 1.0\\)) y no predicen el comportamiento de materiales cohesivos o fuertemente aereados [26_2021_Karwat_ScrewFillingCoefficient] (Sección 1 y 4).
  * Para sólidos cohesivos se presentan \\(3\\) regímenes de flujo según la fuerza cohesiva (\\(f_c\\)):
    1. *Continuous flow regime*: \\(f_c < 15\text{ mg}\\), flujo continuo impulsado por gravedad y tornillo [26_2014_Hou_DEMCohesiveScrew] (Sección 4.2).
    2. *Intermittent flow regime*: \\(15\text{ mg} \le f_c < 20\text{ mg}\\), flujo discontinuo por formación y rotura dinámica de arcos/redes de fuerza [26_2014_Hou_DEMCohesiveScrew] (Sección 4.2).
    3. *Stable arch flow regime*: \\(f_c \ge 20\text{ mg}\\), bloqueo total del flujo (\\(Q = 0\\)) por formación de una bóveda o arco estable sobre el tornillo [26_2014_Hou_DEMCohesiveScrew] (Sección 4.2).
  * **Cita textual corta**: *"Three flow regimes including continuous, intermittent and stable arch are observed in screw feeders with cohesive particles"* [26_2014_Hou_DEMCohesiveScrew] (Sección 4.2).

* **Efecto de la geometría del contenedor**:
  * Las tolvas de paredes convergentes (*hopper*) favorecen la compresión del polvo y reducen el rango de flujo continuo de partículas cohesivas respecto a contenedores de fondo plano (*bin*) [26_2014_Hou_DEMCohesiveScrew] (Sección 4.4).
  * **Cita textual corta**: *"the hopper type with converging walls may enhance the effect of interparticle cohesion."* [26_2014_Hou_DEMCohesiveScrew] (Sección 5. Conclusions).

* **Velocidad de rotación y paso**:
  * A altas velocidades (\\(> 100\text{ r/min}\\)), se pierde la linealidad entre velocidad y caudal por dilatación del lecho e incapacidad del polvo de llenar las cavidades del álabes en el tiempo disponible [26_2000_Bates_ScrewFeeders] (Sección 1.2 y 6.3).
  * Cuando la relación paso/diámetro supera la unidad (\\(P/D > 1\\)), la eficiencia de transporte disminuye rápidamente debido a la rotación del material junto con el tornillo (*logging*) [26_2000_Bates_ScrewFeeders] (Sección 2.3.4).
  * **Cita textual corta**: *"Transfer efficiency deteriorates rapidly when the ratio between the pitch length and the screw diameter exceeds unity."* [26_2000_Bates_ScrewFeeders] (Sección 2.3.4).

* **Limitación del paso constante en harina de trigo**:
  * En alimentadores de paso constante (\\(S_1 = S_2 = S_3\\)) ubicados bajo tolva, la harina se extrae preferencialmente del extremo posterior, compactando el frente, generando zonas muertas (*dead zones*) y elevadas fluctuaciones masivas (\\(\pm 17.5\%\\)), requiriéndose tornillos de paso variable (\\(S_1 < S_2 < S_3\\)) para lograr alta precisión [26_2021_Xu_VariablePitchScrewWheatFlour] (Sección Materials and Methods / Theoretical method).
  * **Cita textual corta**: *"resulting in the phenomenon of compaction (dead zone) of the powder in the hopper"* [26_2021_Xu_VariablePitchScrewWheatFlour] (Sección Materials and Methods / Theoretical method).

---

### 5. Figura o tabla que explique el concepto

* **`[26_2021_Xu_VariablePitchScrewWheatFlour]`**:
  * **Fig. 1**: *"Equal pitch screw conveying"*.
  * **Fig. 2**: *"Equal diameter variable pitch screw"*.
  * **Fig. 9**: *"The mass flow curve of wheat flour at the outlet of the isometric screw feeder"*.
  * **Fig. 15**: *"The mass flow curve of wheat flour at the speed of 80r/min for the isometric and the screw feeder designed in this paper"*.
  * **Table 1**: *"Structural parameters of the four screw feed sections"*.
  * **Table 4**: *"Analysis of flow stability of screw feeders with different numbers of dead zones"*.

* **`[26_2021_Karwat_ScrewFillingCoefficient]`**:
  * **Fig. 5**: *"Mass efficiency as a function of the rotational speed of a screw shaft"*.
  * **Fig. 7**: *"Filling rate of the trough together with the distribution of the velocity of the material in the cross-section through the trough"*.
  * **Fig. 8**: *"Mass efficiency results for the corrected values of filling rate coefficients"*.
  * **Table 1**: *"Dimensions and exploitation parameters of the screw conveyor under study."*.
  * **Table 2**: *"Physical properties of the Portland cement"*.

* **`[26_2014_Hou_DEMCohesiveScrew]`**:
  * **Fig. 1**: *"Schematic of screw feeders with different container designs: (a) bin, and (b) hopper based on a laboratory scale rig"*.
  * **Fig. 4**: *"Solid flowrate under different cohesive forces and the rotational speed of the screw."*.
  * **Table 2**: *"Simulation parameters of the screw feeders with a bin/hopper."*.

* **`[26_2000_Bates_ScrewFeeders]`**:
  * **Fig. 2.3**: *"Flooded mode"*.
  * **Fig. 3.2**: *"Preferential extraction of uniform pitch screw"*.
  * **Fig. 4.3**: *"‘Mean’ path of motion for material in contact with the flight surface"*.

---

### 6. INFERENCIA

* **INFERENCIA**: Para aplicar las ecuaciones y criterios de dimensionamiento del alimentador de tornillo al caso San Miguel (dosificación de harina de trigo en panadería pequeña), se requieren los siguientes datos del caso:
  1. Caudal masivo objetivo o tasa de dosificación requerida por lote de harina de trigo (\\(\text{kg/min}\\), \\(\text{kg/h}\\) o \\(\text{g/s}\\)) y tiempo de ciclo disponible para la dosificación gravimétrica.
  2. Densidad aparente real (suelta y compactada) de la harina de trigo específica utilizada en la panadería San Miguel.
  3. Contenido de humedad y grado de fluidez de la harina local para definir el riesgo de formación de arcos/bóvedas y determinar si se requiere un tornillo de paso variable de \\(2\\) zonas muertas (\\(S_1 < S_2 < S_3\\)).
  4. Restricciones geométricas del alimentador en el prototipo: diámetro exterior máximo disponible (\\(D_z\\)), diámetro del eje del tornillo (\\(d_w\\)), y longitud de la interfaz con la tolva (\\(L\\)).
  5. Rango de velocidad de giro (\\(\text{rpm}\\)) del motor/motorreductor acoplado al tornillo dosificador.

---

### VACÍOS

* **VACÍOS**:
  1. Ninguna de las fuentes marcadas reporta datos de caudal, paso, coeficiente de llenado ni parámetros de diseño de alimentadores de tornillo para **azúcar, sal ni levadura en polvo** (`no reporta` para azúcar, sal y levadura en las fuentes marcadas).
  2. Ninguna de las fuentes marcadas reporta datos específicos, caudales requeridos ni restricciones físicas relativas al caso particular de la panadería San Miguel.

### 1. Definiciones de torque y potencia

* **Definición de Torque**:
  * **Valor y unidades**: El torque requerido (\\(T\\) o \\(T_{\text{arranque}} / T_{\text{marcha}}\\)) en el eje del alimentador de tornillo es la fuerza torsional necesaria para iniciar el movimiento (venciendo la resistencia al corte en confinamiento estático de la tolva) y mantener la rotación del tornillo impulsando el sólido a granel. Se expresa en \\(\text{N}\cdot\text{m}\\) o \\(\text{kg}\cdot\text{m}\\) [26_1997_YuArnold_ScrewConveyorTorque.pdf], [26_2000_Bates_ScrewFeeders.pdf].
  * **Cita textual corta**: *"In the design or selection of a screw feeder the torque requirement is a principal parameter which is related to the feeder loads"* [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Abstract, pág. 151).
  * **Cita textual corta**: *"It is normal to find that the running torque is less than half the torque required to first initiate movement"* [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.4.2, pág. 141).
  * **Ubicación**: Abstract (pág. 151) y Sección 1 (pág. 151) [26_1997_YuArnold_ScrewConveyorTorque.pdf]; Sección 6.4 (pág. 138) y Sección 6.4.2 (pág. 141) [26_2000_Bates_ScrewFeeders.pdf].

* **Definición de Potencia mecánica requerida**:
  * **Valor y unidades**: Tasa de trabajo mecánico necesario para accionar el eje del alimentador a una velocidad de rotación dada, calculada a partir del torque del eje y la velocidad angular. Se expresa en kilowatts (\\(\text{kW}\\)) o watts (\\(\text{W}\\)). Difiere de la potencia eléctrica consumida por el motor, la cual incluye las pérdidas mecánicas y de eficiencia eléctrica [26_2000_Bates_ScrewFeeders.pdf].
  * **Cita textual corta**: *"The power required to drive a screw feeder is related to speed and torque taken by the screw shaft."* [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.4, pág. 138).
  * **Cita textual corta**: *"derived for the calculation of power consumption and capacity."* [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 1, pág. 151).
  * **Ubicación**: Sección 1 (pág. 151) [26_1997_YuArnold_ScrewConveyorTorque.pdf]; Sección 6.4 (pág. 138) y Sección 6.4.1 (pág. 140) [26_2000_Bates_ScrewFeeders.pdf].

---

### 2. Ecuaciones originales para calcular torque y potencia

* **Ecuación (38)** [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 5, pág. 156, Eq. 38):
  \\[T = K_s K_\sigma \sigma_o D^3\\]
  * **Qué calcula**: Torque requerido para un paso del tornillo en la sección de alimentación bajo tolva (*torque required for one pitch in the feed section*).
  * **Variables, significado y unidades**:
    * \\(T\\): *torque required for driving screw*, \\(\text{N}\cdot\text{m}\\) [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 11, pág. 160).
    * \\(K_s\\): *factor defined in Eq. (37)* (factor geométrico y de fricción del paso), adimensional [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 5, pág. 156, Eq. 37).
    * \\(K_\sigma\\): *factor defined in Eq. (32)* (\\(K_\sigma = \frac{4(k_u + k_c + k_l + k_t)}{\pi(1 - c_d^2)}\\)), adimensional [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 5, pág. 156, Eq. 32).
    * \\(\sigma_o\\): *stress exerted by bulk solid in hopper*, \\(\text{Pa}\\) (\\(\text{N/m}^2\\)) [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 2, pág. 152, Eq. 7).
    * \\(D\\): *screw diameter*, \\(\text{m}\\) [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 11, pág. 160).

* **Ecuación (40)** [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 5, pág. 156, Eq. 40):
  \\[T_{ft} = \sum_{i=1}^{n_f} T_{fi}\\]
  * **Qué calcula**: Torque total requerido para la sección de alimentación de \\(n_f\\) pasos (*torque required for all pitches in the feed section*).
  * **Variables, significado y unidades**:
    * \\(T_{ft}\\): *total torque required in feed section*, \\(\text{N}\cdot\text{m}\\) [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 5, pág. 156, Eq. 40).
    * \\(T_{fi}\\): *torque required for pitch i*, \\(\text{N}\cdot\text{m}\\) [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 5, pág. 156, Eq. 39).
    * \\(n_f\\): *number of pitches in the feed section*, adimensional [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 5, pág. 156).

* **Ecuación (42)** [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 6, pág. 156, Eq. 42):
  \\[T_c = K_s K_{\sigma c} \sigma_o D^3\\]
  * **Qué calcula**: Torque requerido para un paso en la sección de estrangulamiento o cierre (*torque required for a pitch in the choke section*).
  * **Variables, significado y unidades**:
    * \\(T_c\\): *torque required in choke section*, \\(\text{N}\cdot\text{m}\\) [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 6, pág. 156, Eq. 42).
    * \\(K_{\sigma c}\\): *factor defined in Eq. (41)* (\\(K_{\sigma c} = \frac{4(k_c + k_l + 2k_t)}{\pi(1 - c_d^2)}\\)), adimensional [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 6, pág. 156, Eq. 41).
    * \\(K_s, \sigma_o, D\\): mismas variables y unidades definidas en la Eq. (38).

* **Ecuaciones de Carga Axial, Torque y Potencia** [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.4.1, pág. 140, sin número impreso):
  \\[A = \pi D 2 P f \cos(\phi_f + \theta_{\min})\\]
  \\[T = \pi D 2 P f \sin(\phi_f + \theta_{\max})\\]
  \\[P_p = \frac{T \text{ (Newton metres)} \times \text{r/min}}{9550}\\]
  \\[\text{Total power kW} = \frac{T \times \text{number of flight pitches} \times \text{r/min}}{9550}\\]
  * **Qué calcula**: \\(A\\) calcula la fuerza de empuje axial (*axial load*); \\(T\\) calcula el torque o fuerza de giro requerida por paso (*required turning force per pitch length*); \\(P_p\\) calcula la potencia requerida por paso en \\(\text{kW}\\); y \\(\text{Total power kW}\\) calcula la potencia mecánica total requerida por el alimentador en \\(\text{kW}\\).
  * **Variables, significado y unidades**:
    * \\(A\\): *axial load*, \\(\text{N}\\) [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.4.1, pág. 140).
    * \\(T\\): *required turning force per pitch length / torque*, \\(\text{N}\cdot\text{m}\\) [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.4.1, pág. 140).
    * \\(P\\): *screw pitch*, \\(\text{m}\\) [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.4.1, pág. 140).
    * \\(D\\): *screw diameter*, \\(\text{m}\\) [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.4.1, pág. 140).
    * \\(f\\): *boundary shear strength*, \\(\text{kg/m}^2\\) (esfuerzo de corte límite en el contorno) [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.4.1, pág. 140).
    * \\(\theta\\): *screw helix angle*, \\(\theta = \tan^{-1}(P / \pi D)\\), grados (\\(^\circ\\)) [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.4.1, pág. 140).
    * \\(\phi_f\\): *angle of friction of the material on the face of the screw flight*, grados (\\(^\circ\\)) [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.4.1, pág. 140).
    * \\(\text{r/min}\\): *rotational speed*, \\(\text{rpm}\\) [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.4.1, pág. 140).
    * \\(9550\\): constante de conversión mecánica para obtener potencia en \\(\text{kW}\\) con torque en \\(\text{N}\cdot\text{m}\\) y velocidad en \\(\text{r/min}\\).

---

### 3. Valores típicos o tablas útiles para estimar las cargas

* **Propiedades de materiales de prueba** [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 8, pág. 159, Tabla 1):
  * **Sémola (*Semolina*)**: \\(d_m = 0.39\text{ mm}\\), \\(\rho_b = 736\text{ kg/m}^3\\), ángulo efectivo de fricción interna \\(\delta = 31.0^\circ\\), ángulo de fricción de pared sobre acero dulce \\(\phi_w = 27.5^\circ\\).
  * **Cemento (*Cement*)**: \\(d_m = 0.028\text{ mm}\\), \\(\rho_b = 791\text{ kg/m}^3\\), ángulo efectivo de fricción interna \\(\delta = 51.5^\circ\\), ángulo de fricción de pared sobre acero dulce \\(\phi_w = 27.0^\circ\\).

* **Parámetros de prueba y torques medidos** [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 8 y 9, pág. 159, Fig. 16, 17 y 18):
  * Diámetro del tornillo: \\(D = 150\text{ mm}\\).
  * Holguras radiales probadas: \\(c = 5\text{ mm}\\), \\(10\text{ mm}\\) y \\(20\text{ mm}\\).
  * Rango de velocidad de rotación: \\(10 - 80\text{ rpm}\\).
  * Rango de torques medidos experimentalmente: \\(11\text{ N}\cdot\text{m}\\) a \\(22\text{ N}\cdot\text{m}\\).

* **Distribución porcentual del torque por superficies confinantes** [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 7.1, pág. 157, Fig. 9):
  * Superficie de corte superior (\\(K_u\\)): \\(43\%\\) del torque total para \\(P/D = 0.3\\), y \\(50\%\\) para \\(P/D = 1.0\\).
  * Lado posterior/arrastre del hélice (\\(K_l\\)): \\(42\%\\) para \\(P/D = 0.3\\), reduciéndose a \\(20\%\\) para \\(P/D = 1.0\\).
  * Superficie de la artesa/tubo (\\(K_t\\)): \\(13\%\\) a \\(19\%\\).
  * Superficie del eje central (\\(K_c\\)): \\(3\%\\) a \\(11\%\\) (contribución baja incluso con \\(d/D = 0.5\\)).

* **Ratios de torque y factores de servicio de accionamiento** [26_2000_Bates_ScrewFeeders.pdf] (Sección 3.1, pág. 40 y Sección 6.4.2, pág. 141):
  * **Relación torque en marcha vs. arranque**: El torque en marcha es habitualmente menos del \\(50\%\\) del torque de arranque (\\(\text{running torque} < 0.5 \times \text{starting torque}\\)), y puede reducirse a menos del \\(10\%\\) (\\(< 0.1 \times \text{starting torque}\\)) tras la dilatación del lecho de polvo.
  * **Capacidad de sobrecarga de motores jaula de ardilla**: Desarrollan temporalmente de \\(200\%\\) a \\(300\%\\) del torque nominal a plena carga en el arranque.
  * **Eficiencia volumétrica estimada**: \\(85\%\\) (\\(0.85\\)) en condiciones normales.

* **Harina de trigo, azúcar, sal y levadura en polvo**:
  * «no reporta» valores numéricos de torque, potencia o fricción para harina, azúcar, sal ni levadura en polvo en las fuentes marcadas [26_1997_YuArnold_ScrewConveyorTorque.pdf], [26_2000_Bates_ScrewFeeders.pdf].

---

### 4. Condiciones de validez y limitaciones

* **Limitaciones por fricción y arrastre de material**:
  * La fricción entre el material y la cara del hélice debe ser menor que la fricción interna del sólido a granel; de lo contrario, el material girará junto con el tornillo sin avanzar axialmente [26_2000_Bates_ScrewFeeders.pdf] (Sección 4.1, pág. 64).
  * Un aumento del coeficiente de fricción con la pared de la artesa (\\(\mu_w\\)) eleva el torque total debido al incremento de la presión radial [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 7.3, pág. 157).
  * **Cita textual corta**: *"Transfer efficiency deteriorates rapidly when the ratio between the pitch length and the screw diameter exceeds unity."* [26_2000_Bates_ScrewFeeders.pdf] (Sección 3.1, pág. 41).

* **Limitaciones por geometría y llenado (\\(D\\) y \\(P/D\\))**:
  * El modelo analítico asume régimen de alimentación inundada/ahogada (*flooded mode*) al \\(100\%\\) de llenado en la boca de la tolva [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 2 y 6, pág. 152, 156).
  * El torque es proporcional al cubo del diámetro del tornillo (\\(T \propto D^3\\)). Incrementar el diámetro un \\(50\%\\) aumenta el torque total en un \\(500\%\\) [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 5, pág. 156 y Sección 10, pág. 160).
  * **Cita textual corta**: *"the torque requirement is proportional to... the third power of the screw diameter."* [26_1997_YuArnold_ScrewConveyorTorque.pdf] (Sección 10, pág. 160).

* **Limitaciones por tipo de material y régimen de operación**:
  * **Polvos finos**: El torque de arranque se rige por el esfuerzo de corte del polvo confinado bajo una altura de lecho equivalente a 3 veces el ancho de salida de la tolva [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.4.1, pág. 139).
  * **Gránulos duros e incompresibles**: Presentan picos de torque de arranque muy elevados por la imposibilidad de dilatación rápida en confinamiento rígido [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.4.1, pág. 139).
  * **Materiales que se apelmazan (*caking*)**: Forman capas rígidas en la holgura de la punta de los álabes (*flight tip clearance*), generando un drástico incremento del torque por fricción límite y riesgos de flexión del eje [26_2000_Bates_ScrewFeeders.pdf] (Sección 6.2.7, pág. 132).
  * **Velocidad de rotación**: A velocidades superiores a \\(100\text{ r/min}\\), la dilatación dinámica reduce el llenado estable del tornillo, perdiéndose la relación lineal entre velocidad y caudal [26_2000_Bates_ScrewFeeders.pdf] (Sección 1.2, pág. 6 y Sección 6.3, pág. 134).

---

### 5. Figuras o tablas pertinentes

* **`[26_1997_YuArnold_ScrewConveyorTorque.pdf]`**:
  * **Fig. 1**: *"Typical form of a hopper fitted with a screw feeder"*, pág. 152.
  * **Fig. 2**: *"Bulk material boundary within a pitch: (a) five boundary surfaces; (b) two basic regions"*, pág. 152.
  * **Fig. 3**: *"Stress on an element at the lower region of the screw"*, pág. 153.
  * **Fig. 8**: *"Forces on the driving side of a flight"*, pág. 155.
  * **Fig. 9**: *"Variation of factors with ratio P/D (\\(\mu_d=0.8, \mu_f=\mu_w=0.5, c_d=0.3\\))"*, pág. 157.
  * **Fig. 11**: *"Influence of \\(\mu_w\\) on K (\\(\mu_d=0.8, \mu_f=0.5, c_d=0.3\\))"*, pág. 157.
  * **Fig. 16**: *"Configuration of test screws"*, pág. 159.
  * **Fig. 17**: *"Comparison of torques for a screw feeder using the screw with a tapered shaft and stepped pitches"*, pág. 159.
  * **Fig. 18**: *"Comparison of torques for a screw feeder using the screw with a stepped shaft and stepped pitches"*, pág. 159.
  * **Table 1**: *"Physical properties of test materials"*, pág. 159.

* **`[26_2000_Bates_ScrewFeeders.pdf]`**:
  * **Fig. 2.3**: *"Flooded mode"*, pág. 20 (Tabla 2.1).
  * **Fig. 3.2**: *"Preferential extraction of uniform pitch screw"*, pág. 41.
  * **Fig. 3.3**: *"Stepped pitch construction"*, pág. 41.
  * **Fig. 4.1**: *"Helical path of material movement"*, pág. 65.
  * **Fig. 4.3**: *"‘Mean’ path of motion for material in contact with the flight surface"*, pág. 67.
  * **Fig. 6.7**: *"Resolution of forces acting on screw flight"*, pág. 141.
  * **Table 2.1**: *"The three main classes of screw for handling solids"*, pág. 20.

---

### 6. INFERENCIA

* **INFERENCIA**: Para seleccionar el motor eléctrico, el reductor de velocidad y la transmisión mecánica de la dosificadora gravimétrica de harina en la panadería San Miguel, se requieren los siguientes datos faltantes del caso:
  1. Caudal masivo pico de harina requerido (\\(\text{kg/min}\\) o \\(\text{kg/h}\\)) y tiempo de ciclo del proceso de dosificación gravimétrica por amasado.
  2. Parámetros geométricos definidos para el tornillo del prototipo San Miguel: diámetro del tornillo (\\(D\\)), diámetro del eje (\\(d\\)), paso (\\(P\\)), holgura radial (\\(c\\)) y longitud de la boca de la tolva (\\(L\\)).
  3. Propiedades físicas de la harina de trigo local empleada en San Miguel: densidad aparente suelta y compactada (\\(\rho_b\\)), esfuerzo cortante de corte estático en confinamiento (\\(f\\)), ángulo de fricción interna (\\(\delta\\)) y ángulo de fricción de pared sobre el acero del tornillo (\\(\phi_f\\) o \\(\mu_f\\)).
  4. Rendimiento mecánico global de la transmisión y del reductor (\\(\eta_{\text{trans}}\\)) para calcular la potencia eléctrica instalada a partir de la potencia mecánica en el eje.
  5. Tipo de alimentación eléctrica disponible en la panadería (monofásica \\(220\text{ V}\\) o trifásica) y si se empleará variador de frecuencia (inversor) para ajustar la velocidad del motor.

---

### VACÍOS

* **VACÍOS**:
  1. Ninguna de las fuentes marcadas (`26_1997_YuArnold_ScrewConveyorTorque.pdf` ni `26_2000_Bates_ScrewFeeders.pdf`) **reporta** datos numéricos de torque, potencia, fricción o propiedades reológicas específicas para **harina de trigo, azúcar, sal ni levadura en polvo**.
  2. Las fuentes marcadas **no reportan** los parámetros geométricos, masa por lote, tiempos de ciclo ni restricciones eléctricas particulares del proyecto o prototipo de la panadería San Miguel.
  3. Las fuentes marcadas **no reportan** catálogos comerciales ni curvas de selección para modelos específicos de motores o reductores mecánicos.


### 1. Definición del fenómeno

* **Descarga de sólidos granulares por orificio**:
  * **Valor y unidades**: Caudal masivo de descarga \\(W\\) expresado en \\(\text{g/min}\\) (o caudal volumétrico \\(V\\) en \\(\text{cm}^3/\text{min}\\)) por acción de la gravedad a través de un orificio circular o de forma geométrica definida [26_1961_Beverloo_FlowGranularOrifices.pdf].
  * **Cita textual corta**: *"The flow of all the seeds tested through the circular orifices used in the experiments, is represented by the equation"* [26_1961_Beverloo_FlowGranularOrifices.pdf] (Abstract, pág. 260).
  * **Cita textual corta adicional**: *"our formula can be used to make 'calculated estimations' for the majority of materials with a bulk density \\(\rho_B\\) of about 0.7."* [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 267).
  * **Ubicación**: Abstract (pág. 260) y Sección 2.2 (pág. 267) [26_1961_Beverloo_FlowGranularOrifices.pdf].

---

### 2. Ecuación original de Beverloo

* **Ecuación general de Beverloo para orificios circulares** [26_1961_Beverloo_FlowGranularOrifices.pdf] (Abstract, pág. 260; Sección 2.2, pág. 265, sin número impreso):
  \\[W = 35 \rho_B \sqrt{g} (D_0 - 1.4 d)^{2.5} \quad (\text{g/min})\\]
  * **Finalidad**: Estimar el caudal masivo de descarga por gravedad de sólidos granulares libres de cohesión a través de orificios circulares en el fondo plano de un contenedor.
  * **Variables, significado y unidades**:
    * \\(W\\): *weight discharged per unit time* (caudal masivo de descarga), \\(\text{g/min}\\) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Notation, pág. 268).
    * \\(35\\): constante empírica adimensional (prefactor promedio para semillas) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 265).
    * \\(\rho_B\\): *bulk density of packing* (densidad aparente del lecho), \\(\text{g/cm}^3\\) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Notation, pág. 268).
    * \\(g\\): *gravitational constant* (aceleración de la gravedad), \\(\text{cm/s}^2\\) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Notation, pág. 268).
    * \\(D_0\\): *diameter of circular orifice* (diámetro del orificio circular), \\(\text{cm}\\) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Notation, pág. 268).
    * \\(d\\): *average screen size of particles* (diámetro promedio de partícula obtenido por tamizado), \\(\text{cm}\\) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Notation, pág. 268).
    * \\(1.4\\): constante empírica adimensional \\(k\\) que representa la zona inefectiva o "borde inútil" en el perímetro del orificio [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 265).

* **Ecuación general para orificios de forma arbitraria** [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 266, sin número impreso):
  \\[W = 45 \rho_B A' \sqrt{g D_h'}\\]
  * **Finalidad**: Estimar el caudal masivo a través de orificios no circulares (cuadrados, rectangulares, triangulares) mediante el área efectiva y el diámetro hidráulico efectivo.
  * **Variables, significado y unidades**:
    * \\(W\\): *mass flow-rate*, \\(\text{g/min}\\) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 266).
    * \\(45\\): constante empírica para el área efectiva [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 266).
    * \\(\rho_B\\): *bulk density*, \\(\text{g/cm}^3\\) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Notation, pág. 268).
    * \\(A'\\): *effective orifice area calculated from \\(D_h'\\)* (área efectiva del orificio), \\(\text{cm}^2\\) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 266).
    * \\(g\\): *gravitational constant*, \\(\text{cm/s}^2\\) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Notation, pág. 268).
    * \\(D_h'\\): *effective hydraulic diameter* (\\(D_h' = D_h - 1.4d\\)), \\(\text{cm}\\) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 266).
    * \\(D_h\\): *hydraulic diameter* (\\(D_h = 4 \times \text{área} / \text{perímetro}\\)), \\(\text{cm}\\) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Notation, pág. 268).

---

### 3. Valores típicos o tablas de referencia para coeficientes y materiales

* **Azúcar cristalizada (*crystallized sugar*)** [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 265; Tabla 6, pág. 266):
  * **Diámetro de partícula publicado**: \\(d = 0.09\text{ cm}\\) (\\(0.9\text{ mm}\\)) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 265).
  * **Densidad aparente publicada**: \\(\rho_B = 0.83\text{ g/cm}^3\\) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 265).
  * **Caudales medidos vs. calculados en orificios circulares** [26_1961_Beverloo_FlowGranularOrifices.pdf] (Tabla 6, pág. 266):
    * \\(D_0 = 0.75\text{ cm}\\): \\(W_{\text{calc}} = 281\text{ g/min}\\), \\(W_{\text{obs}} = 293\text{ g/min}\\).
    * \\(D_0 = 1.03\text{ cm}\\): \\(W_{\text{calc}} = 719\text{ g/min}\\), \\(W_{\text{obs}} = 697\text{ g/min}\\).
    * \\(D_0 = 1.50\text{ cm}\\): \\(W_{\text{calc}} = 2010\text{ g/min}\\), \\(W_{\text{obs}} = 2080\text{ g/min}\\).
    * \\(D_0 = 2.03\text{ cm}\\): \\(W_{\text{calc}} = 4610\text{ g/min}\\), \\(W_{\text{obs}} = 4760\text{ g/min}\\).
    * \\(D_0 = 2.51\text{ cm}\\): \\(W_{\text{calc}} = 8050\text{ g/min}\\), \\(W_{\text{obs}} = 8415\text{ g/min}\\).

* **Sal (*Salt*)**:
  * «no reporta» datos de granulometría, densidad ni caudales para sal en Beverloo [26_1961_Beverloo_FlowGranularOrifices.pdf].

* **Coeficientes y constantes del modelo**:
  * Coeficiente de orificio \\(C\\) (prefactor): \\(35\\) para semillas en general; varía individualmente entre \\(33.2\\) (lino) y \\(38.5\\) (berro) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 265).
  * Coeficiente de zona inefectiva \\(k\\): \\(k = 1.4\\) para semillas (rango \\(1.3 - 1.5\\)); \\(k = 2.9\\) para arena [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 265).
  * Precisión esperada del modelo: desviación promedio del \\(5\%\\) y máxima del \\(12.5\%\\) respecto a datos experimentales [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 267).

* **Distinción de parámetros (Publicados vs. A medir experimentalmente)**:
  * **Parámetros publicados en la fuente**: Prefactor general \\(C = 35\\), constante del borde inefectivo \\(k = 1.4\\), y propiedades/caudales de azúcar cristalizada (\\(d = 0.09\text{ cm}\\), \\(\rho_B = 0.83\text{ g/cm}^3\\)) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 265, 266).
  * **Parámetros que tendrían que medirse experimentalmente**:
    1. Para la sal comercial utilizada en San Miguel: tamaño medio de partícula \\(d\\), densidad aparente \\(\rho_B\\) y verificación del prefactor \\(C\\) y constante \\(k\\).
    2. Para el azúcar comercial local de San Miguel: verificación de \\(d\\) y \\(\rho_B\\) reales si difieren del azúcar de prueba de Beverloo.

---

### 4. Condiciones de validez y limitaciones

* **Carácter granular y ausencia de cohesión**:
  * El modelo es válido únicamente para sólidos granulares libres de cohesión (*free-flowing*). No aplica a materiales con fuerzas interparticulares o alta humedad [26_1961_Beverloo_FlowGranularOrifices.pdf] (Abstract, pág. 260; Sección 2.2, pág. 267).
  * **Cita textual corta**: *"The flow of all the seeds tested through the circular orifices used in the experiments, is represented by the equation"* [26_1961_Beverloo_FlowGranularOrifices.pdf] (Abstract, pág. 260).

* **Inaplicabilidad a la harina cohesiva y contraste con Schulze**:
  * El modelo de Beverloo **no es válido** para la harina de trigo debido a su naturaleza cohesiva y tendencia a formar arcos/bóvedas estables.
  * Para analizar la descarga de harina cohesiva, deben contrastarse los supuestos de Beverloo con el modelo de consolidación de **Schulze**:
    * En lugar de asumir flujo libre por gravedad dependiente únicamente del tamaño del orificio (\\(D_0^{2.5}\\)), Schulze requiere determinar la función de fluidez (\\(FF = \sigma_1 / \sigma_c\\)), el esfuerzo principal de consolidación (\\(\sigma_1\\)), la resistencia no confinada (\\(\sigma_c\\)) y el ángulo de fricción de pared (\\(\phi_w\\)).
    * El tamaño crítico de abertura para evitar el bloqueo por arcos estables en la harina debe evaluarse mediante el criterio de Schulze (\\(D_{\text{crit}} = H(\theta) \sigma_c / \rho_B g\\)), y no mediante la ecuación de Beverloo.

* **Relación entre tamaño de abertura y diámetro de partícula**:
  * El diámetro del orificio circular debe ser al menos \\(6\\) veces mayor que el diámetro de partícula (\\(D_0 / d \ge 6\\)) para evitar bloqueos mecánicos [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 264).
  * Para eliminar por completo el efecto de las paredes en la descarga, la relación debe ser \\(D_0 / d \ge 20\\) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 262).

* **Independencia de la altura de lecho y del contenedor**:
  * El caudal es independiente de la altura del material sobre el orificio (\\(H\\)) cuando la altura es suficiente (verificado entre \\(20\text{ cm}\\) y \\(60\text{ cm}\\)) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 262, Tabla 4).
  * El caudal no depende del diámetro del cilindro o contenedor (\\(D = 5, 10, 15\text{ cm}\\)) [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 263, Tabla 5).

* **Geometría del orificio**:
  * A igual área efectiva, el caudal masivo disminuye progresivamente según la geometría del orificio en el orden: circular > cuadrado > rectangular > triangular [26_1961_Beverloo_FlowGranularOrifices.pdf] (Sección 2.2, pág. 264, Fig. 4 y 5).

---

### 5. Figuras y tablas relevantes

* **`[26_1961_Beverloo_FlowGranularOrifices.pdf]`**:
  * **Table 1**: *"Details of orifices used in flow experiments"*, pág. 261.
  * **Table 2**: *"Physical properties of the materials used in the flow experiments"*, pág. 261.
  * **Table 4**: *"Influence of head of packing"*, pág. 262.
  * **Table 5**: *"Influence of container diameter"*, pág. 263.
  * **Table 6**: *"Comparison between calculated and observed rate of flow for various granular materials"*, pág. 266.
  * **Fig. 1**: *"Seeds used in the flow experiments"*, pág. 261.
  * **Fig. 2**: *"Sketch of apparatus used for the determination of the angle of repose"*, pág. 261.
  * **Fig. 3**: *"Influence of orifice area on flow-rate of sand fractions"*, pág. 264.
  * **Fig. 4**: *"Influence of orifice area on flow-rate of rapeseed"*, pág. 264.
  * **Fig. 5**: *"Influence of orifice area on flow-rate of watercress"*, pág. 265.
  * **Fig. 6**: *"Plot of \\(D_0\\) against \\(W^{0.4}\\) for various seeds"*, pág. 266.
  * **Fig. 7**: *"Comparison of observed flow-rate of rapeseed with Fowler’s formula"*, pág. 267.

---

### 6. INFERENCIA

* **INFERENCIA**: Para aplicar el modelo de Beverloo en la estimación del caudal de descarga por gravedad de azúcar y sal en la dosificadora gravimétrica de la panadería San Miguel, se requieren los siguientes datos del caso:
  1. Masa requerida por lote (\\(\text{g}\\) o \\(\text{kg}\\)) y tiempo de dosificación permitido dentro del ciclo de amasado para el azúcar y la sal.
  2. Granulometría real (diámetro medio de partícula \\(d\\)) y densidad aparente (\\(\rho_B\\)) de la sal común/fina comercial y del azúcar estándar/refinado que se emplean en la panadería San Miguel.
  3. Dimensiones y geometría de la abertura/orificio de descarga controlada de la tolva (diámetro \\(D_0\\) o área \\(A\\) y perímetro).
  4. Humedad relativa del ambiente en la panadería y condición higroscópica del azúcar y la sal para asegurar que se mantengan en estado granular de libre fluidez sin aglomeración.
  5. Tipo de mecanismo de corte/obturación (compuerta, guillotina o V-port) y su velocidad de accionamiento para la interrupción exacta del flujo al alcanzar la masa objetivo en la balanza.

---

### VACÍOS

* **VACÍOS**:
  1. La fuente marcadas (`26_1961_Beverloo_FlowGranularOrifices.pdf`) **no reporta** datos numéricos de densidad, diámetro de partícula, coeficientes ni caudales de descarga para **sal**.
  2. La fuente marcadas **no reporta** los requerimientos de masa por lote, tiempos de dosificación ni restricciones geométricas de las tolvas de la dosificadora para la panadería San Miguel.
  3. La fuente marcadas **no reporta** ecuaciones, parámetros de consolidación ni criterios de flujo para polvos cohesivos como la **harina de trigo**.

### 1. Definiciones y principios de diseño higiénico

* **Principios de diseño higiénico en equipos para alimentos**:
  * **Valor y unidades**: Principios esenciales para prevenir la contaminación de alimentos por sustancias que afecten la salud del consumidor. Requieren superficies de contacto lisas, ausencia de áreas muertas (*dead areas*) y evitar la condensación en el equipo [26_2016_HygienicDesignDryMaterials.pdf].
  * **Cita textual corta**: *"Adopting correct hygienic design principles is essential to prevent the contamination of food products"* [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.1, pág. 317).
  * **Cita textual corta adicional**: *"Smooth product contact surfaces; No dead areas; The avoidance of condensation in the equipment, etc."* [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.1, pág. 318).
  * **Ubicación**: Sección 21.1 (pág. 317–318) [26_2016_HygienicDesignDryMaterials.pdf].

* **Comportamiento de polvos e ingredientes secos en superficies**:
  * **Valor y unidades**: Los polvos e ingredientes secos tienden a adherirse y permanecer en las superficies de contacto en mayor medida que los líquidos. El incremento de la humedad del polvo aumenta la adhesión y el riesgo de proliferación microbiana [26_2016_HygienicDesignDryMaterials.pdf].
  * **Cita textual corta**: *"Powders tend to remain on surfaces to a greater extent than liquids do."* [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.4, pág. 318).
  * **Ubicación**: Sección 21.2 (pág. 318) y Sección 21.4 (pág. 318) [26_2016_HygienicDesignDryMaterials.pdf].

---

### 2. Requisitos, ecuaciones o criterios de selección

* **Ecuaciones de diseño higiénico**:
  * **Valor y unidades**: «no reporta» ecuaciones matemáticas explícitas en la fuente marcadas [26_2016_HygienicDesignDryMaterials.pdf].

* **Criterio de rugosidad superficial (\\(R_a\\))**:
  * **Valor y unidades**: Rugosidad estándar recomendada de \\(R_a \le 0.8\,\mu\text{m}\\) en superficies de contacto donde exista riesgo de crecimiento microbiano asociado a humedad o limpieza húmeda [26_2016_HygienicDesignDryMaterials.pdf].
  * **Cita textual corta**: *"A roughness standard of Ra <= 0.8 um is recommended where there is a risk of microbial growth"* [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.4.2, pág. 319).
  * **Ubicación**: Sección 21.4.2 (pág. 319) [26_2016_HygienicDesignDryMaterials.pdf].

* **Criterio de geometría de esquinas internas**:
  * **Valor y unidades**: Evitar esquinas internas agudas con un radio \\(r \le 6\text{ mm}\\) e intersticios donde se acumule el material seco [26_2016_HygienicDesignDryMaterials.pdf].
  * **Cita textual corta**: *"product contact on sharp internal corners (r <= 6 mm) and recesses... needs to be avoided."* [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.4.2, pág. 319).
  * **Ubicación**: Sección 21.4.2 (pág. 319) [26_2016_HygienicDesignDryMaterials.pdf].

* **Criterio de actividad de agua (estabilidad microbiana)**:
  * **Valor y unidades**: Actividad de agua \\(a_w < 60\%\\) (\\(0.60\\)). Por debajo de este umbral, el crecimiento microbiano es escaso o nulo, aunque patógenos como *Salmonella* pueden sobrevivir [26_2016_HygienicDesignDryMaterials.pdf].
  * **Cita textual corta**: *"when the water activity is below 60%, little to no microbial growth will occur"* [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.2, pág. 318).
  * **Ubicación**: Sección 21.2 (pág. 318) [26_2016_HygienicDesignDryMaterials.pdf].

* **Criterios de limpieza seca vs. húmeda**:
  * **Limpieza en seco (*dry cleaning*)**: Preferida para polvos secos (mediante aspiradoras, cepillos, rascadores o enjuague con agentes neutros como sal o almidón). Permite criterios de diseño menos estrictos siempre que el material sea no higroscópico y no pegajoso [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.3, pág. 318–319).
  * **Limpieza húmeda (*wet cleaning*)**: Si se aplica, exige cumplimiento estricto de los requisitos para líquidos de EHEDG Document No. 8 (2004), drenabilidad (superficies inclinadas no horizontales) y secado completo e inmediato posterior para evitar puntos húmedos y proliferación microbiana [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.3 y 21.4.2, pág. 318–319).

* **Criterios para juntas, sellos y ejes**:
  * **Sellos dinámicos en ejes**: Los sellos purgados por líquido generan problemas operacionales en sólidos secos; se recomiendan sellos de labio purgados con aire o nitrógeno filtrado [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.5, pág. 321).
  * **Juntas estáticas (bridas)**: Deben ser de elastómero no poroso, montadas a tope (*flush*) sin generar grietas ni desalineaciones [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.4.3, pág. 320).

---

### 3. Tablas de materiales, propiedades o acabados

| Material / Clasificación | Grados / Tipos especificados en la fuente | Condiciones de aplicación y compatibilidad alimentaria | Ubicación en la fuente |
| :--- | :--- | :--- | :--- |
| **Acero Inoxidable (Metales)** | SS 304, SS 304L (EN 1.4301/1.4306), SS 316, SS 316L (EN 1.4401/1.4404) | Material preferido para contacto con polvos secos. Los grados 316/316L ofrecen mayor resistencia a soluciones con cloruros (ej. sal), especialmente en caliente/húmedo. | Sección 21.4.1.1, pág. 319 [26_2016_HygienicDesignDryMaterials.pdf] |
| **Aluminio y Aleaciones** | Con o sin recubrimiento (*coated/noncoated*) | Apto **únicamente** si se aplica limpieza en seco (*dry cleaning*). Riesgo de corrosión severa si se somete a limpieza húmeda y susceptibilidad al desgaste por polvos abrasivos. | Sección 21.4.1.1, pág. 319 [26_2016_HygienicDesignDryMaterials.pdf] |
| **Acero al Carbono** | Acero al carbono estándar | Apto **únicamente** para procesamiento y limpieza en seco. Su rugosidad natural no cumple \\(R_a \le 0.8\,\mu\text{m}\\), requiriendo evaluación de limpiabilidad. | Sección 21.4.1.1 y 21.4.2, pág. 319 [26_2016_HygienicDesignDryMaterials.pdf] |
| **Plásticos / Polímeros** | Policarbonato (PC), PEEK, PVDF, Poliacrilamida (PA), PTFE | Requieren aprobación de grado alimentario (FDA, EFSA o equivalente). Minimizar área de contacto por desgaste abrasivo y generación de cargas electrostáticas. | Sección 21.4.1.2, pág. 319 [26_2016_HygienicDesignDryMaterials.pdf] |
| **Elastómeros / Cauchos** | NBR, Viton (DuPont), EPDM, Caucho de Silicona | Requieren aprobación de grado alimentario (FDA, EFSA o equivalente). No porosos. Espuma de celda cerrada solo para limpieza en seco; celda abierta prohibida. | Sección 21.4.1.2 y 21.4.3, pág. 319–320 [26_2016_HygienicDesignDryMaterials.pdf] |
| **Vidrio** | Vidrio estándar / Vidrio templado (*shatterproof*) | Vidrio estándar **no permitido** por riesgo de rotura. Vidrio templado/inastillable es aceptable solo en componentes pequeños (mirillas). | Sección 21.4.1.2, pág. 319 [26_2016_HygienicDesignDryMaterials.pdf] |

---

### 4. Limitaciones y condiciones de validez

* **Diferenciación entre Requisitos Normativos y Recomendaciones de Guía**:
  * **Requisitos Normativos / Regulatorios** (mencionados en la fuente):
    1. Aprobación obligatoria de grado alimentario (*food grade*) por FDA, EFSA o equivalente nacional para todos los materiales poliméricos, elastómeros y adhesivos en contacto con alimentos [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.4.1, pág. 319).
    2. Cumplimiento estricto con los criterios de equipos para líquidos de EHEDG Document No. 8 (2004) si se aplica limpieza húmeda (*wet cleaning*) [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.3, pág. 318).
    3. Prohibición explícita de materiales de empaquetadura de celda abierta (*open foam material is not allowed*) [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.4.3, pág. 320).
    4. Filtración de aire de proceso mediante filtros EU clase F-7 (aire calentado) y EU clase H-11 (aire ambiente de transporte) [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.5, pág. 321).
  * **Recomendaciones Generales de Guía / Buenas Prácticas** (EHEDG):
    1. Recomendación de acabado superficial \\(R_a \le 0.8\,\mu\text{m}\\) en presencia de humedad o riesgo microbiano [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.4.2, pág. 319).
    2. Recomendación de evitar radios internos agudos \\(r \le 6\text{ mm}\\) [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.4.2, pág. 319).
    3. Preferencia de la limpieza en seco sobre la limpieza húmeda en sistemas de manipulación de polvos [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.3, pág. 318).
    4. Realización de un estudio previo HACCP (*pre-HACCP study*) en la fase de diseño [26_2016_HygienicDesignDryMaterials.pdf] (Sección 21.6, pág. 321).

---

### 5. Figuras y tablas relevantes

* **`[26_2016_HygienicDesignDryMaterials.pdf]`**:
  * **FIGURE 21.1**: *"Examples of static flange seals for dry products: (a) seal creating a gap and misalignment; (b) metal-to-metal flange joint (only for dry cleaning); (c) hygienically designed seal usable for wet cleaning."*, pág. 320.
  * **FIGURE 21.2**: *"Examples of flexible connection duct ends (right). One ring clamp close to the pipe end used for smaller diameters; crevice not totally avoidable (left). Application of two clamps, one of which is mounted directly at the pipe end to avoid any crevice (middle)."*, pág. 321.
  * **FIGURE 21.3**: *"Hygienic design feature in a powder discharge cabinet."*, pág. 322.
  * **FIGURE 21.4**: *"Principle design of dynamic seals for a rotary valve: shaft seals are without (detail A, a) and with air purge (detail A, b). Impellers are sealed by two air-purged seals (detail B)."*, pág. 322.

---

### 6. INFERENCIA

* **INFERENCIA**: Para aplicar los criterios de diseño higiénico y selección de materiales al prototipo de la dosificadora gravimétrica en la panadería San Miguel, se requieren los siguientes datos del caso:
  1. **Protocolo de limpieza previsto**: Definición explícita de si la panadería San Miguel empleará únicamente limpieza en seco (aspirado y cepillado) o si realizará lavado húmedo con agua o agentes químicos. Si se lava con agua, el diseño requiere obligatoriamente pendientes para drenaje, secado rápido y acero inoxidable SS 304/316 con \\(R_a \le 0.8\,\mu\text{m}\\).
  2. **Humedad ambiental y control de higroscopicidad**: Humedad relativa ambiente y temperatura en la zona de trabajo de la panadería San Miguel para evaluar la absorción de agua por el azúcar y la sal, evitando apelmazamiento y corrosión.
  3. **Corrosión por cloruros (sal)**: Dado que la sal comercial contiene cloruros que causan picaduras en el acero y que el grado SS 316/316L es más resistente a soluciones con cloruros que el SS 304 [26_2016_HygienicDesignDryMaterials.pdf] (pág. 319), se requiere inferir si la tolva y el tornillo destinados a la sal deben fabricarse en SS 316L en lugar de SS 304.
  4. **Aprobación documental de plásticos y sellos**: Certificados de grado alimentario (FDA / EFSA / CE 1935/2004) de los elastómeros (NBR, silicona o EPDM) y plásticos (PTFE) disponibles comercialmente para las empaquetaduras y conexiones flexibles del prototipo.
  5. **Capacidad de fabricación local**: Disponibilidad de procesos de soldadura continua y pulido en talleres mecánicos locales para garantizar acabados de \\(R_a \le 0.8\,\mu\text{m}\\) y radios de acuerdo \\(r > 6\text{ mm}\\) en la tolva y el tornillo sin dejar intersticios.
  6. **Presupuesto asignado**: Evaluación del costo diferencial entre acero inoxidable SS 304 y SS 316/316L para la adquisición de láminas y barras del prototipo San Miguel.

---

### VACÍOS

* **VACÍOS**:
  1. La fuente marcada (`26_2016_HygienicDesignDryMaterials.pdf`) **no reporta** ecuaciones numéricas de dimensiones, espesores de lámina, ni costos de materiales para la dosificadora.
  2. La fuente marcada **no reporta** las especificaciones técnicas, disponibilidad de materiales en el mercado local ni las restricciones presupuestarias del proyecto San Miguel.
  3. La fuente marcada **no reporta** valores numéricos de rugosidad medida ni ensayos de abrasión específicos para la harina de trigo, azúcar o sal particulares que se procesan en la panadería San Miguel.

### 1. Definición

* **Masa de material en caída / columna de material en el aire (*In-flight material / dropping column of material*)**:
  * **Valor y unidades**: Masa de sólido a granel que ha salido del alimentador u obturador pero permanece suspendida en el aire cayendo hacia la tolva o recipiente de pesaje antes de depositarse sobre la balanza. Se expresa en \\(\text{kg}\\) o \\(\text{g}\\) [26_2014_Bukreev_FallingColumnCompensation.pdf], [26_1998_HandbookElectronicWeighing.pdf].
  * **Cita textual corta**: *"The overshoot consists principally of material "in flight" into the weigh hopper after the feeder or valve is shut-off."* [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260).
  * **Cita textual corta adicional**: *"If the weight of the dropping column of material, which is in the air, is not taken into account, a significant total batching error can be obtained"* [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
  * **Ubicación**: Section 5.2.2, pág. 260 [26_1998_HandbookElectronicWeighing.pdf]; Section 2 [26_2014_Bukreev_FallingColumnCompensation.pdf].

* **Adelanto de corte / corrección de flujo posterior (*Preact / After flow*)**:
  * **Valor y unidades**: Masa o valor de consigna anticipado (\\(P\\) o \\(F\\)) en el que se envía la señal de parada al alimentador antes de alcanzar el peso deseado (\\(S\\)), a fin de compensar el material en vuelo. Se expresa en \\(\text{kg}\\) o \\(\text{g}\\) [26_1998_HandbookElectronicWeighing.pdf], [26_2014_Bukreev_FallingColumnCompensation.pdf].
  * **Cita textual corta**: *"shuts off the material feeder in advance (preact), before the desired weight (set point) is reached."* [26_1998_HandbookElectronicWeighing.pdf] (Section 5.1.3, pág. 258).
  * **Cita textual corta adicional**: *"Compensation of the mass of dropping column should be carried out at reference forming for the control system."* [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
  * **Ubicación**: Section 5.1.3, pág. 258 y Section 5.2.2, pág. 260 [26_1998_HandbookElectronicWeighing.pdf]; Section 2 [26_2014_Bukreev_FallingColumnCompensation.pdf].

---

### 2. Ecuaciones copiadas tal como aparecen

#### A. Ecuaciones documentadas de balance y control de corte (*Handbook of Electronic Weighing*)

* **Ecuación (3)** [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260, Eq. 3):
  \\[W_B = (S - P) \quad \text{kg}\\]
  * **Qué calcula**: Condición de parada o corte instantáneo de la alimentación al alcanzar el peso de consigna menos el adelanto (*preact*).
  * **Variables, significado y unidades**:
    * \\(W_B\\): *current weight reading on the scale* (lectura actual de peso en la balanza al instante del corte), \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260, Eq. 3).
    * \\(S\\): *preset weight / set point* (peso consigna o valor deseado), \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260, Eq. 3).
    * \\(P\\): *preact weight* (peso de adelanto de corte para compensar el sobredisparo), \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260, Eq. 3).

* **Ecuaciones (4), (5), (6) y (10)** [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eqs. 4, 5, 6, 10):
  \\[\Theta_\alpha = \pm (\alpha R \cdot T) \quad \text{kg} \quad \text{(Eq. 4)}\\]
  \\[\Theta_\beta = \pm (\beta T \cdot R) \quad \text{kg} \quad \text{(Eq. 5)}\\]
  \\[\Theta_A = (n \cdot A) \quad \text{kg} \quad \text{(Eq. 6)}\\]
  \\[\Theta_{\text{TOT}} = \Theta_{W1} \pm \Theta_{W2} \pm (\alpha R \cdot T) \pm (\beta T \cdot R) + (n \cdot A) \quad \text{kg} \quad \text{(Eq. 10)}\\]
  * **Qué calcula**: Componentes de error de dosificación por variación de caudal (\\(\Theta_\alpha\\)), retardo en el tiempo de cierre del actuador (\\(\Theta_\beta\\)), presencia de partículas grandes en vuelo (\\(\Theta_A\\)) y error total de la masa dosificada (\\(\Theta_{\text{TOT}}\\)).
  * **Variables, significado y unidades**:
    * \\(\Theta_\alpha\\): *error in the compensation of the preact weight due to flowrate variation*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 4).
    * \\(\alpha R\\): *variation in flowrate after shut-off*, \\(\text{kg/s}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 4).
    * \\(T\\): *compensating time*, \\(\text{s}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260–261).
    * \\(\Theta_\beta\\): *variation in in-flight weight due to actuator response time*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 5).
    * \\(\beta T\\): *variation in response time of the feeder or valve for shut-off*, \\(\text{s}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 5).
    * \\(R\\): *flow rate*, \\(\text{kg/s}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260–261).
    * \\(\Theta_A\\): *additional error due to larger particles in flight*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 6).
    * \\(n\\): *number of larger particles in flight after cut off*, adimensional [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 6).
    * \\(A\\): *average weight of larger particles*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 6).
    * \\(\Theta_{\text{TOT}}\\): *total weight error in the batch*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 10).
    * \\(\Theta_{W1}, \Theta_{W2}\\): *weight reading errors on scale at cut-off and after standstill*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261).

* **Ecuaciones (13), (14) y (15)** [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.4, pág. 451, Eqs. 13, 14, 15):
  \\[F = A_B - S_P \quad \text{kg} \quad \text{(Eq. 13)}\\]
  \\[S_F = S_P - F \quad \text{kg} \quad \text{(Eq. 14)}\\]
  \\[\sigma_{SF} = S_{P \text{ SET}} - S_{F \text{ AVE}} \quad \text{kg} \quad \text{(Eq. 15)}\\]
  * **Qué calcula**: Determinación experimental del flujo posterior (\\(F\\)), reajuste del valor consigna de corte anticipado (\\(S_F\\)) y error en el punto de corte.
  * **Variables, significado y unidades**:
    * \\(F\\): *material flow / after flow after shut off*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.4, pág. 451, Eq. 13).
    * \\(A_B\\): *actually batched material weight*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.4, pág. 451, Eq. 13).
    * \\(S_P\\): *set point weight*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.4, pág. 451, Eq. 13).
    * \\(S_F\\): *pre-act set point for after flow correction*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.4, pág. 451, Eq. 14).
    * \\(\sigma_{SF}\\): *error in the pre-act set point*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.4, pág. 451, Eq. 15).

* **Ecuación de Fuerza de Impacto por Retardación** [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 262, sin número impreso):
  \\[F = m \cdot g \cdot \left(1 + \frac{H}{h}\right)\\]
  * **Qué calcula**: Fuerza dinámico-transitoria de impacto sobre la balanza durante la desaceleración del material al caer en el recipiente de pesaje.
  * **Variables, significado y unidades**:
    * \\(F\\): *impact force on the weighbridge / load cells*, \\(\text{N}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 262).
    * \\(m\\): *particle mass / falling piece mass*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 262).
    * \\(g\\): *gravitational acceleration*, \\(\text{m/s}^2\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 262).
    * \\(H\\): *falling height*, \\(\text{m}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 262).
    * \\(h\\): *retardation distance in the material in the weigh hopper*, \\(\text{m}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 262).

#### B. Estrategia analítico-geométrica de la columna en caída a validar (*Bukreev et al.*)

* **Ecuaciones de volumen, altura de lecho y altura de columna** [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2, sin número impreso):
  \\[V = \frac{m}{\rho}\\]
  \\[h_m = \frac{V}{a \cdot b}\\]
  \\[h_{st} = h_0 + h_b - h_m\\]
  * **Qué calcula**: Volumen acumulado (\\(V\\)), altura instantánea del lecho en la tolva (\\(h_m\\)) y altura libre de la columna en caída libre (\\(h_{st}\\)).
  * **Variables, significado y unidades**:
    * \\(V\\): *volume of material in the bin*, \\(\text{m}^3\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(m\\): *measured mass of batched material in the bin*, \\(\text{kg}\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(\rho\\): *density of batching material*, \\(\text{kg/m}^3\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(h_m\\): *height of the material in the bin*, \\(\text{m}\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(a \cdot b\\): *base area of the bin*, \\(\text{m}^2\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(h_{st}\\): *height of dropping column*, \\(\text{m}\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(h_0\\): *height between the screw and the bin*, \\(\text{m}\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(h_b\\): *bin height*, \\(\text{m}\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).

* **Ecuaciones de masa de la columna en caída (Tolva cúbica y tolva en trapecio trunco)** [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2, sin número impreso):
  \\[S_{st} = \frac{\pi (D^2 - d^2)}{4}\\]
  \\[m_{st} = \frac{\pi (D^2 - d^2)}{4} \cdot \left(h_0 + h_b - \frac{m}{\rho \cdot a \cdot b}\right) \cdot \rho_{nas}\\]
  \\[m_{st} = \frac{\pi (D^2 - d^2)}{4} \cdot \left(h_0 + h_b - \frac{3 m}{\rho (c \cdot d_e + a \cdot b + \sqrt{c \cdot d_e \cdot a \cdot b})}\right) \cdot \rho_{nas}\\]
  * **Qué calcula**: Masa de la columna de material en el aire (\\(m_{st}\\)) para tolva de sección constante (cúbica/cilíndrica) y para tolva de base trapezoidal/piramidal truncada.
  * **Variables, significado y unidades**:
    * \\(m_{st}\\): *mass of dropping column*, \\(\text{kg}\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(S_{st}\\): *area of dropping column*, \\(\text{m}^2\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(D\\): *screw diameter*, \\(\text{m}\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(d\\): *shaft diameter*, \\(\text{m}\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(\rho_{nas}\\): *apparent density of batched material*, \\(\text{kg/m}^3\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(c \cdot d_e\\): área de la base menor de la tolva truncada, \\(\text{m}^2\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).

* **Ecuación de error de dosificación** [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2, sin número impreso):
  \\[\sigma_s = m_{zad} - m_{sm}\\]
  * **Qué calcula**: Error residual entre la consigna y la señal real de pesaje.
  * **Variables, significado y unidades**:
    * \\(\sigma_s\\): *batching error*, \\(\text{kg}\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(m_{zad}\\): *reference mass of material*, \\(\text{kg}\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
    * \\(m_{sm}\\): *mass value according to feedback signal*, \\(\text{kg}\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).

---

### 3. Valores típicos o tablas de referencia

* **Polipropileno (*Polypropylene*)** [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2):
  * **Masa objetivo de prueba**: \\(1\text{ kg}\\) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
  * **Humedad**: «no reporta» [26_2014_Bukreev_FallingColumnCompensation.pdf].
  * **Error sin algoritmo de corrección**: \\(0.0859\text{ kg}\\) (\\(8.59\%\\)) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
  * **Error con algoritmo de corrección de columna**: \\(0\text{ kg}\\) (\\(0\%\\)) en modelo/simulación [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).
  * **Sistemas industriales (piensos compuestos / *combined feed*)**: La columna en caída puede alcanzar varios cientos de kilogramos (*up to several hundreds kilograms*) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).

* **Sistema de dosificación de prueba** [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261–262):
  * **Rango (\\(W_R\\)) y resolución (\\(d\\))**: \\(6000\text{ kg}\\), \\(d = 2\text{ kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261).
  * **Parámetros**: Carga \\(4500\text{ kg}\\), \\(P = 300\text{ kg}\\), caudal \\(R = 10\text{ kg/s}\\), tiempo de compensación \\(T = 30\text{ s}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261).
  * **Sensibilidad a variaciones de caudal (\\(10\%\\), \\(\alpha R = 1\text{ kg/s}\\))**: error \\(\Theta_\alpha = 30\text{ kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261).
  * **Sensibilidad a variaciones de retardo (\\(\beta T = 0.3\text{ s}\\))**: error \\(\Theta_\beta = 3\text{ kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261).
  * **Efecto de grumos/partículas grandes (\\(A = 1.5\text{ kg}\\), \\(n = 4\\))**: error \\(\Theta_A = 6\text{ kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261).
  * **Error total calculado (\\(\Theta_{\text{TOT}}\\))**: \\(51\text{ kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 262).

* **Partícula en caída libre e impacto** [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 262):
  * Masa \\(m = 300\text{ g}\\) (\\(0.3\text{ kg}\\)), altura \\(H = 0.5\text{ m}\\), distancia de desaceleración \\(h = 2\text{ mm}\\): fuerza de impacto instantánea \\(F = 66\text{ N}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 262).

* **Harina de trigo, azúcar y sal**:
  * «no reporta» valores de masa en caída, tiempos de corte ni *preact* para harina, azúcar ni sal en las fuentes marcadas [26_2014_Bukreev_FallingColumnCompensation.pdf], [26_1998_HandbookElectronicWeighing.pdf].

---

### 4. Condiciones de validez y limitaciones

* **Diferenciación entre el material en el aire y el material retenido en el conducto/tornillo**:
  1. **Material en el aire / en vuelo (*In-flight material / dropping column*)**: Es la masa que ya ha traspasado el orificio u obturador pero sigue cayendo libremente por gravedad antes de golpear el lecho en la balanza. Su masa depende de la altura libre de caída (\\(h_{st}\\)) [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2) o del caudal y tiempo de tránsito (\\(R \cdot T\\)) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260).
  2. **Material retenido en el conducto, tornillo u obturador**: Es el sólido que permanece atrapado en el hélice del tornillo o detrás de la compuerta. El cierre **no interrumpe el flujo al instante** debido a la inercia del motor y al retardo de respuesta del actuador (\\(\beta T\\)) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261). Este volumen no debe confundirse con la columna que cae por gravedad.

* **Requisito de estabilidad y reproducibilidad del caudal**:
  * La efectividad del adelanto de corte (\\(P = R \cdot T\\)) depende de que el caudal (\\(R\\)) permanezca constante. Fluctuaciones en la fluidez del material (\\(\alpha R\\)) o variaciones en el tiempo de retardo del mecanismo (\\(\beta T\\)) generan errores proporcionales e incontrolados en la masa batida [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260–261).
  * **Cita textual corta**: *"provided that there are reproducible flow conditions for the material with the flowrate (R) kg/sec during the compensating time (T) sec."* [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260).

* **Efectos dinámicos y picos de impacto sobre la balanza**:
  * La energía cinética del choque del material genera un pico dinámico de fuerza (\\(F\\)) en las celdas de carga que sobrepasa temporalmente el peso estático. Si el sistema de pesaje carece de filtrado digital o constantes de tiempo apropiadas, el pico puede gatillar un falso disparo de parada antes de alcanzar la masa requerida [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 262).
  * **Cita textual corta**: *"This sudden increase in weight reading will have a very short duration, but it might shut off the material flow"* [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 262).

* **Limitaciones del modelo geométrico de Bukreev**:
  * El modelo analítico de Bukreev asume que la columna en el aire conserva la sección transversal del tornillo (\\(S_{st} = \pi(D^2-d^2)/4\\)) y mantiene densidad aparente uniforme (\\(\rho_{nas}\\)), lo cual es una simplificación que requiere validación experimental para polvos que se expanden o dispersan en la caída [26_2014_Bukreev_FallingColumnCompensation.pdf] (Section 2).

---

### 5. Figuras o tablas que expliquen el concepto

* **`[26_2014_Bukreev_FallingColumnCompensation.pdf]`**:
  * **Figure 1**: *"Functional diagram of automatic system for batching and mixing components of combined feed"* (diagrama funcional con la tolva de pesaje `Batching bin`, celdas de carga `WSG 1 - WSG 3` y el alimentador de tornillo `SF1`).
  * **Figure 2**: *"Experimental testbench of the batching system of bulk materials: (a) control cabinet; (b) mechanics of testbench with flexible helical screw, batching bin and shutter"*.
  * **Figure 3**: *"Batching transients without algorithm of the error compensation"*.
  * **Figure 4**: *"Batching transients with compensation algorithm of the error caused by mass of dropping column of material"*.

* **`[26_1998_HandbookElectronicWeighing.pdf]`**:
  * **Figure 5.1**: *"Batching principles: (a) Positive batching; (b) Negative batching"*, pág. 258.
  * **Figure 5.2**: *"Cumulative batching principle"*, pág. 259.
  * **Figure 5.3**: *"Batching several materials into one weighhopper"*, pág. 267.
  * **Figure 5.4**: *"Microcomputer controlled batchweighing system"*, pág. 268.

---

### 6. INFERENCIA

* **INFERENCIA**: Para aplicar los modelos de adelanto de corte (*preact*) y compensación de columna en caída libre a la dosificadora gravimétrica de la panadería San Miguel, se requieren los siguientes datos del caso:
  1. Altura física de caída libre (\\(h_0 + h_b\\)) desde la salida del alimentador (tornillo o compuerta) hasta el fondo del recipiente sobre la balanza.
  2. Tiempo de retardo físico y eléctrico de cierre (\\(\beta T\\)), correspondiente a la inercia del motor reductor del tornillo y la velocidad de accionamiento del obturador de corte.
  3. Caudal de ajuste fino (*dribble feed rate*, \\(R_{\text{fine}}\\)) operando a baja velocidad previo al instante de corte.
  4. Geometría interna y área de la base (\\(a \cdot b\\)) del recipiente receptor sobre la balanza para calcular la altura progresiva del lecho (\\(h_m\\)).
  5. Densidad aparente en caída libre (\\(\rho_{nas}\\)) de la harina de trigo, azúcar y sal.
  6. Frecuencia de muestreo y constante de filtrado digital del microcontrolador/indicador de peso para atenuar los picos de fuerza de impacto (\\(F\\)) y prevenir falsos cierres prematuros.

---

### VACÍOS

* **VACÍOS**:
  1. Ninguna de las fuentes marcadas (`26_2014_Bukreev_FallingColumnCompensation.pdf` ni `26_1998_HandbookElectronicWeighing.pdf`) **reporta** datos numéricos de masa en vuelo, tiempos de retardo de corte ni coeficientes de adelanto (*preact*) para **harina de trigo, azúcar, sal ni levadura en polvo**.
  2. Las fuentes marcadas **no reportan** alturas de caída, caudales de dosificación, tiempos de ciclo ni especificaciones de las celdas de carga del prototipo de la panadería San Miguel.
  3. Ninguna de las fuentes marcadas **reporta** modelos teóricos sobre la dispersión o ensanchamiento aerodinámico del chorro de harina en el aire durante la caída libre.

### 1. Definición

* **Dosificación por lotes en dos etapas (Flujo grueso / Flujo fino / Peso de cambio / Peso de corte)**:
  * **Valor y unidades**: Sistema de dosificación por pesaje de lotes que utiliza dos señales de parada para controlar el flujo de material. La primera señal (\\(A\\) o \\(S_D\\)) cambia el flujo de material de caudal grueso (*coarse feedrate*) a caudal fino (*fine feedrate / dribble*). La segunda señal (\\(B\\) o \\(S_F\\)) interrumpe anticipadamente (*preact*) la alimentación antes de alcanzar el peso deseado (*set point*) para compensar el material en vuelo (*overshoot / in-flight material*). Se expresa en unidades de masa (\\(\text{kg}\\)) y tiempo (\\(\text{s}\\)) [26_1998_HandbookElectronicWeighing.pdf].
  * **Cita textual corta**: *"The first signal (A) changes the material flow from coarse feedrate to fine feedrate (dribble)."* [26_1998_HandbookElectronicWeighing.pdf] (Section 5.1.3, pág. 258).
  * **Cita textual corta adicional**: *"the second signal (B) shuts off the material feeder in advance (preact), before the desired weight (set point) is reached."* [26_1998_HandbookElectronicWeighing.pdf] (Section 5.1.3, pág. 258).
  * **Ubicación**: Section 5.1.3 (pág. 258), Section 5.1.4 (pág. 259), Section 5.2.2 (pág. 260), Section 3.1 (pág. 276–277) y Section 11.5.3–11.5.4 (pág. 450–451) [26_1998_HandbookElectronicWeighing.pdf].

---

### 2. Ecuaciones copiadas tal como aparecen

* **Ecuación (3)** [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260, Eq. 3):
  \\[W_B = (S - P) \quad \text{kg}\\]
  * **Qué calcula**: Condición de parada o corte instantáneo del alimentador para compensar el sobrepaso de material (*overshoot*).
  * **Variables, significado y unidades**:
    * \\(W_B\\): *current weight reading on the scale* (lectura actual de peso en la balanza al instante de corte), \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260, Eq. 3).
    * \\(S\\): *preset weight / set point* (peso deseado o valor de consigna), \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260, Eq. 3).
    * \\(P\\): *preact weight* (peso de adelanto o corte anticipado), \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260, Eq. 3).

* **Ecuación (11)** [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.3, pág. 450, Eq. 11):
  \\[(S_D) = (S_P) - (D) \quad \text{kg}\\]
  * **Qué calcula**: Punto o peso de cambio de etapa (*dribble set point*) de flujo grueso a flujo fino (*dribble feed*).
  * **Variables, significado y unidades**:
    * \\(S_D\\): *dribble set point* (peso o punto de cambio a flujo fino), \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.3, pág. 450, Eq. 11).
    * \\(S_P\\): *set point weight* (peso de consigna final), \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.3, pág. 450, Eq. 11).
    * \\(D\\): *weight value factor before final shut off* (reducción de peso / margen previo al peso de corte), \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.3, pág. 450, Eq. 11).

* **Ecuaciones (13) y (14)** [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.4, pág. 451, Eqs. 13, 14):
  \\[(F) = (A_B) - (S_P) \quad \text{kg} \quad \text{(Eq. 13)}\\]
  \\[(S_F) = (S_P) - (F) \quad \text{kg} \quad \text{(Eq. 14)}\\]
  * **Qué calcula**: Masa de flujo posterior (*after flow*, \\(F\\)) tras el corte del alimentador, y reajuste del punto de corte anticipado (*pre-act set point*, \\(S_F\\)).
  * **Variables, significado y unidades**:
    * \\(F\\): *material flow / after flow after shut off* (material en vuelo / flujo posterior tras el corte), \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.4, pág. 451, Eq. 13).
    * \\(A_B\\): *actually batched material weight* (peso real de material obtenido en el lote), \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.4, pág. 451, Eq. 13).
    * \\(S_P\\): *set point weight* (peso consigna programado), \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.4, pág. 451, Eq. 13).
    * \\(S_F\\): *pre-act set point for after flow correction* (punto de corte anticipado corregido), \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 11.5.4, pág. 451, Eq. 14).

* **Ecuaciones (4), (5) y (10)** [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eqs. 4, 5, 10):
  \\[\Theta_\alpha = \pm (\alpha R \cdot T) \quad \text{kg} \quad \text{(Eq. 4)}\\]
  \\[\Theta_\beta = \pm (\beta T \cdot R) \quad \text{kg} \quad \text{(Eq. 5)}\\]
  \\[\Theta_{\text{TOT}} = \Theta_{W1} \pm \Theta_{W2} \pm (\alpha R \cdot T) \pm (\beta T \cdot R) + (n \cdot A) \quad \text{kg} \quad \text{(Eq. 10)}\\]
  * **Qué calcula**: Componentes de error de dosificación por variación de caudal en flujo fino (\\(\Theta_\alpha\\)), por retardo de respuesta del actuador (\\(\Theta_\beta\\)), y error total acumulado en la masa del lote (\\(\Theta_{\text{TOT}}\\)).
  * **Variables, significado y unidades**:
    * \\(\Theta_\alpha\\): *error in compensation of preact weight due to flowrate variation*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 4).
    * \\(\alpha R\\): *variation in flowrate after shut-off*, \\(\text{kg/s}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 4).
    * \\(T\\): *compensating time*, \\(\text{s}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260–261).
    * \\(\Theta_\beta\\): *variation in in-flight weight due to actuator response time*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 5).
    * \\(\beta T\\): *variation in response time of feeder or valve for shut-off*, \\(\text{s}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 5).
    * \\(R\\): *flow rate*, \\(\text{kg/s}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260–261).
    * \\(\Theta_{\text{TOT}}\\): *total weight error in batch*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 10).
    * \\(\Theta_{W1}, \Theta_{W2}\\): *weight reading errors on scale at cut-off and after standstill*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261).
    * \\(n \cdot A\\): *error due to n larger particles in flight of average weight A*, \\(\text{kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261, Eq. 6).

---

### 3. Valores típicos o tablas de referencia

* **Ejemplo ilustrativo de cambio de etapa en dosificación acumulativa** [26_1998_HandbookElectronicWeighing.pdf] (Section 5.1.4, pág. 259):
  * **Punto de cambio a flujo fino**: Flujo grueso inicial a alta velocidad hasta aproximadamente el \\(90\%\\) del peso preestablecido (\\(90\%\text{ of preset weight}\\)), seguido de flujo fino a baja velocidad [26_1998_HandbookElectronicWeighing.pdf] (Section 5.1.4, pág. 259).
  * **Condiciones de aplicación**: Dosificación acumulativa (*cumulative batching*) de múltiples componentes en una misma tolva de pesaje [26_1998_HandbookElectronicWeighing.pdf] (Section 5.1.4, pág. 259).

* **Parámetros de software industrial y niveles de resolución (\\(d\\))** [26_1998_HandbookElectronicWeighing.pdf] (Section 3.1, pág. 276–277, y Section 5.2.2, pág. 261–262):
  * **Punto de cambio a flujo fino en menú de software**: \\((B_w - 15d)\\), donde \\(B_w\\) es el peso consigna (*batch weight*) y \\(d\\) es la resolución externa de la balanza [26_1998_HandbookElectronicWeighing.pdf] (Section 3.1, pág. 276–277, Fig. Flowsheet - batching cycle).
  * **Punto de corte anticipado (*preact*) en software**: \\((B_w - 6d)\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 3.1, pág. 276–277).
  * **Tolerancias típicas de calibración/verificación**: \\(\pm 1d\\) (punto cero), \\(\pm 3d\\) (calibración y diferencia entre peso real y consigna) [26_1998_HandbookElectronicWeighing.pdf] (Section 3.1, pág. 277).
  * **Valores de ejemplo en escala de \\(6000\text{ kg}\\) (\\(d = 2\text{ kg}\\))**: Carga \\(4500\text{ kg}\\), \\(P = 300\text{ kg}\\), caudal \\(R = 10\text{ kg/s}\\), tiempo de compensación \\(T = 30\text{ s}\\), variación de caudal \\(\alpha R = 1\text{ kg/s}\\) (\\(10\%\\)), variación de tiempo de respuesta \\(\beta T = 0.3\text{ s}\\); error resultante en compensación \\(\Theta_\alpha = 30\text{ kg}\\), \\(\Theta_\beta = 3\text{ kg}\\), error total de dosificación \\(\Theta_{\text{TOT}} = 51\text{ kg}\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261–262).

* **Harina de trigo, azúcar y sal**:
  * «no reporta» porcentajes de cambio, caudales, tiempos de retardo ni tolerancias específicas para harina, azúcar ni sal en la fuente marcada [26_1998_HandbookElectronicWeighing.pdf].

---

### 4. Condiciones de validez y limitaciones

* **Retardo del actuador y material en caída libre (*In-flight material*)**:
  * **Requisito de reproducibilidad del caudal**: El modelo de compensación por adelanto de corte (\\(P = R \cdot T\\)) exige condiciones de flujo altamente reproducibles con un caudal constante \\(R\text{ (kg/s)}\\) durante el tiempo de compensación \\(T\text{ (s)}\\). Si el caudal fluctúa (\\(\pm \alpha R\\)), se genera un error sistemático directo en la masa del lote \\(\Theta_\alpha = \pm (\alpha R \cdot T)\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260–261).
  * **Inercia y retardo de cierre del actuador**: Las variaciones en el tiempo de respuesta del alimentador o válvula al recibir la señal de parada (\\(\pm \beta T\\)) alteran la masa de material en vuelo, introduciendo un error \\(\Theta_\beta = \pm (\beta T \cdot R)\\) [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261).
  * **Cita textual corta**: *"provided that there are reproducible flow conditions for the material with the flowrate (R) kg/sec during the compensating time (T) sec."* [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 260).

* **Estabilidad de la lectura y ruidos dinámicos**:
  * La señal de peso al momento del corte (\\(W_B\\)) no debe ser perturbada por vibraciones del alimentador ni por picos de impacto transitorios derivados del choque de las partículas sobre el recipiente de pesaje. El sistema electrónico debe asegurar la estabilidad del valor medido antes de procesar las señales de parada o verificar la tolerancia [26_1998_HandbookElectronicWeighing.pdf] (Section 5.2.2, pág. 261–262).

---

### 5. Figura o tabla que explique el concepto

* **`[26_1998_HandbookElectronicWeighing.pdf]`**:
  * **Figure 5.1**: *"Batching principles: (a) Positive batching; (b) Negative batching"*, pág. 258. (Diagrama de masa vs. tiempo que ilustra las dos etapas de alimentación con la señal A para el cambio de flujo grueso a fino y la señal B para el corte anticipado por *preact*).
  * **Figure 5.2**: *"Cumulative batching principle"*, pág. 259. (Muestra la conmutación de velocidad al \\(90\%\\) del peso consigna en la dosificación de ingredientes).
  * **Flowsheet (sin número impreso)**: *"Software menu - batching cycle"*, pág. 276. (Diagrama de flujo del algoritmo de control industrial con los umbrales de cambio a flujo fino `BW - 15d` y corte del alimentador `BW - 6d`).

---

### 6. INFERENCIA

* **INFERENCIA**: Para definir las dos velocidades del motorreductor y programar la lógica de corte del microcontrolador en la dosificadora gravimétrica de la panadería San Miguel, se requieren los siguientes datos del caso:
  1. Masa objetivo (\\(S_P\\)) requerida por lote para cada ingrediente (harina de trigo, azúcar y sal) según las recetas de la panadería.
  2. Caudales masivos alcanzables en flujo grueso (\\(R_{\text{coarse}}\\)) y flujo fino (\\(R_{\text{fine}}\\)) mediante el ajuste de frecuencias en el variador de velocidad del motor del tornillo (o grados de apertura del actuador de corte).
  3. Tiempo de retardo mecánico y eléctrico de cierre (\\(\beta T\\)), considerando la inercia del motorreductor y el tiempo de respuesta del relé o triac.
  4. Resolución efectiva de la celda de carga (\\(d\\)) y altura libre de caída desde la salida del alimentador hasta la balanza, necesarias para establecer los márgenes de cambio de velocidad (\\(S_D\\)) y el corte anticipado (\\(S_F\\)).

---

### VACÍOS

* **VACÍOS**:
  1. La fuente marcada (`26_1998_HandbookElectronicWeighing.pdf`) **no reporta** valores numéricos de masa por lote, recetas de panificación ni tiempos de ciclo del proceso de amasado para la panadería San Miguel.
  2. La fuente marcada **no reporta** los porcentajes de cambio de velocidad ni las tolerancias de dosificación requeridas para **harina de trigo, azúcar, sal ni levadura en polvo**.
  3. La fuente marcada **no reporta** las especificaciones técnicas, potencias ni tiempos de respuesta de los motores o variadores de velocidad del prototipo San Miguel.

---

¿Te gustaría que preparemos una propuesta de estructura o índice detallado para el Capítulo 2 de la tesis basándonos en estas 7 fichas de fundamento?