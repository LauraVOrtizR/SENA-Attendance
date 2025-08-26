# MARCO TEORICO

## Nombre del Proyecto

- SENA Attendance

## Objetivo General

- Desarrollar una aplicación segura y escalable que optimice la gestión de asistencia en el SENA, permitiendo a los instructores registrar asistencia y validar justificaciones de ausencias mediante evidencias digitales, garantizando transparencia, eficiencia y cumplimiento de políticas institucionales.

## Objetivos Especificos

- Diseñar y desarrollar un estándar para  el registro de asistencia que permita a los instructores llevar un control unificado.

- Implementar un sistema de carga y validación de justificaciones de inasistencia, donde los aprendices puedan adjuntar evidencias y los instructores validarlas de acuerdo con lo establecido en el reglamento del aprendiz.

- Integrar la gestión de asistencia y justificaciones en una única plataforma, para reducir la dependencia de aplicaciones externas.

- Desarrollar funcionalidades de apoyo a la toma de decisiones sobre la permanencia del aprendiz, mediante alertas que identifiquen patrones de inasistencia injustificada que puedan conducir a la deserción. 

- Permitir la consulta ágil y detallada del historial de asistencia y justificaciones, para asegurar que tanto los instructores como cada alumno pueda acceder a la información y llevar la trazabilidad de esta.

## Planteamiento del Problema

- Actualmente, en el SENA no existe una estandarización clara en los procesos de toma y control de asistencia de los aprendices. Cada instructor puede utilizar diferentes mecanismos (listas manuales, hojas de cálculo, aplicaciones externas, etc.), lo que genera inconsistencias, duplicidad de información y pérdida de trazabilidad en los registros. Esta falta de un sistema unificado afecta la gestión académica y administrativa, dificulta el seguimiento oportuno de la asistencia y limita la verificación de las justificaciones de inasistencia.

    Como consecuencia, se presenta una falta de control efectivo sobre la permanencia de los aprendices, lo cual puede influir directamente en problemas de deserción y en la aplicación de las normas contempladas en el Reglamento del Aprendiz SENA (Acuerdo 7 de 2012), que establece la obligación de reportar y justificar oportunamente las inasistencias

    Por lo anterior, surge la necesidad de diseñar y desarrollar una aplicación que centralice y estandarice el proceso de registro de asistencia y validación de justificaciones, permitiendo mayor eficiencia, transparencia y soporte para la toma de decisiones académicas.

## Pregunta Problema

- ¿Cómo diseñar una aplicación que permita a los instructores del SENA gestionar la asistencia en tiempo real y validar justificaciones de ausencias mediante evidencias digitales, garantizando cumplimiento normativo, accesibilidad y obtener una reducción en procesos manuales?

## Alcance

El aplicativo solo funcionará para el centro **CEET**.  
Solo se podrá utilizar en dispositivos: **Desktop, Tablet, Mobile**.

---

### FUNCIONALIDADES

#### INCLUIDAS

##### Gestión de Usuarios:
- Roles: aprendiz, instructor, administrador, anónimo.
- Formulario de creación, inicio y actualización del usuario.

##### Módulo de registro:
- Toma de asistencia cada clase (fecha/ficha/competencia), marcando: Asistió, Faltó, Justificó.

##### Sistema de justificaciones:
- Formulario para que los aprendices suban justificaciones, con carga de archivos (PDF, Imágenes).
- Panel para validación de las justificaciones, cambio (instructor) y consulta de estados (pendiente, aceptada, rechazada).

##### Consulta y reportes:
- Historial detallado de asistencia y justificaciones.
- Alertas automáticas dependiendo la cantidad y frecuencia de marcaciones negativas de cada aprendiz.

---

#### NO INCLUIDAS

- Gestión de horarios/cronogramas.
- Biometría o QR para asistencia.
- Descarga/Impresión de historial de asistencia.

---

### ENTREGABLES

- Aplicación web funcional.
- Aplicación móvil funcional.
- Base de datos.
- API.
- Documentación técnica.
- Manual de usuario.
- Sistema de control de versiones.

## Justificación

- Actualmente la ausencia de un estándar y de una plataforma tecnológica común que se use para la gestión de la asistencia de los aprendices, genera inconsistencias y dificulta el seguimiento académico de los mismos, de igual forma, le complica a los instructores el proceso de revisión y validación de las justificaciones enviadas por los aprendices, ya que tampoco hay una plataforma unificada para cargar esta documentación. El proceso actual depende netamente del instructor asignado a cada ficha, lo que le resta eficiencia y transparencia, que también puede generar repercusiones en la permanencia de los aprendices, incrementando la posibilidad de deserciones evitables.

    Como solución a esta problemática, es necesario el desarrollo de una aplicación segura y escalable, que centralice el registro de la asistencia de los aprendices y facilite la validación de justificaciones de manera digital. El sistema optimizará la labor de los instructores, garantizará la transparencia del proceso de toma de asistencia y de justificación de fallas. Con la implementación de este aplicativo se mejorará  la eficiencia administrativa, la trazabilidad de la información y la transparencia del proceso, alineándose directamente con la normativa estipulada en el manual del aprendiz, con potencial para desarrollarse como herramienta que se use a nivel institucional.