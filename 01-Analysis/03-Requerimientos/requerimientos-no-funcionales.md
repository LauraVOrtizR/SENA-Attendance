# Requerimientos No Funcionales (Non-Functional-Requirements)

## Rendimiento (Performance)

| Atributo NFR | Valor objetivo |
|--------------|----------------|
| Tiempo de procesamiento de transacciones (lectura/escritura) | 1 ~ 1.5 segundos |
| Tiempo de procesamiento para transacciones complejas | 4 segundos |
| Número total de usuarios (registrados) | 5,000 usuarios |
| Duración promedio de sesión de usuario | 8 minutos |
| Tiempo de procesamiento de consultas (solo lectura) | 1 segundo |
| Tiempo de procesamiento por lotes | 10 minutos |

## Escalabilidad (Scalability)

| Atributo NFR | Valor objetivo |
|--------------|----------------|
| Capacidad de escalar hasta **n** usuarios en un año (solo lectura) | 7,000 usuarios |
| Capacidad de escalar hasta **n** usuarios en un año (transacciones) | 600 usuarios |
| Número de usuarios concurrentes durante periodos pico | 150 usuarios |
| Tiempo de respuesta para búsquedas | 2 segundos |

## Disponibilidad (Availability)

| Atributo NFR | Valor objetivo |
|--------------|----------------|
| Tiempo requerido para recuperación normal | 5 minutos |
| Geografías y zonas horarias que impactan el sistema | Solo Colombia (UTC-5) |
| Requisitos de disponibilidad por geografía | Aplica únicamente para CEET |
| Frecuencia de interrupción planificada | Mensual (solo domingos 12:00 AM - 4:00 AM) |
| Disponibilidad del sistema crítico | 99.5% durante horarios de clase (6:00 AM - 8:00 PM) |
| Disponibilidad del sistema no crítico | 95% fuera de horarios de clase |
| Tiempo máximo de recuperación ante incidente | Crítico: 30 minutos / No crítico: 4 horas |

## Capacidad (Capacity)

| Atributo NFR | Valor objetivo |
|--------------|----------------|
| Número máximo de sesiones concurrentes | 200 sesiones |
| Número máximo de transacciones concurrentes | 50 transacciones |
| Número esperado de transacciones para procesamiento por lotes | 1,200 diarias |
| Número esperado de usuarios concurrentes | 150 usuarios |
| Número esperado de usuarios en hora pico | 150 usuarios |
| Número de registros (activos y archivo) | 900,000 anuales |
| Capacidad para almacenar y recuperar datos de negocio | 5 años |

## Seguridad (Security)

| Atributo NFR | Valor objetivo |
|--------------|----------------|
| Autorización y autenticación | • Roles definidos localmente (aprendiz, instructor, administrador)<br>• Autenticación con contraseñas encriptadas (bcrypt) |
| Cifrado | • HTTPS gestionado por plataforma de hosting (ej.: Firebase, AWS)<br>• Cifrado AES-256 **en la capa de aplicación** para archivos sensibles<br>• Claves de cifrado en variables de entorno (nunca en código) |
| Acceso y control | • Control de permisos mediante lógica de aplicación<br>• Validación de acceso en cada petición (ej.: "¿Puede este instructor ver esta ficha?") |
| Auditoría | • Retención de registros: 5 años (cumpliendo Ley 1581 de 2012) |

## Mantenibilidad (Maintainability)

| Atributo NFR | Valor objetivo |
|--------------|----------------|
| Tiempo promedio para resolver errores críticos | 4 horas |
| Cobertura de pruebas automatizadas | 70% en módulos críticos |
| Porcentaje de documentación técnica actualizada | 90% |
| Tiempo de onboarding para nuevos desarrolladores | 5 días |

## Gestionabilidad (Manageability)

| Atributo NFR | Valor objetivo |
|--------------|----------------|
| Alertas para interrupciones recuperables | • Notificación en < 5 minutos tras caída<br>• Canales: Email a administradores y SMS a líder técnico<br>|
| Alertas para procesamiento nocturno fallido | • Notificación si excede 10 minutos<br>• Canales: SMS/Email prioritario a equipo técnico|

## Fiabilidad (Reliability)

| Atributo NFR | Valor objetivo |
|--------------|----------------|
| Tiempo Medio Entre Fallos (MTBF) | 100 horas (en horarios de clase) |
| Tiempo Medio Para Recuperación (MTTR) | 30 minutos |
| Integridad de datos | • Transacciones multi-documento ACID en MongoDB 6.0<br>• Checksums para archivos de justificaciones |
| Integridad de la aplicación | • Rollbacks con Docker + Git<br>• Acceso externo solo mediante HTTPS y autenticación JWT |

## Extensibilidad (Extensibility) *

| Atributo NFR | Valor objetivo |
|--------------|----------------|
| Modularidad y separación de capas | • 3 capas claramente definidas: API REST (Express.js), servicios de negocio, repositorios de datos<br>• Capa de presentación separada (React Web + React Native Mobile) |
| Uso de patrones de diseño | • Factory Method para gestión de roles (aprendiz/instructor/admin)<br>• Observer para notificaciones de alertas de deserción<br>• Strategy para generación de reportes |
| Aplicación de principios SOLID | • 80% de cobertura en módulos críticos (asistencia, justificaciones)<br>• Bajo acoplamiento entre servicios (dependencias inyectadas) |
| Documentación para extensión | • 90% de documentación técnica actualizada para nuevos módulos<br>• Ejemplos de integración en la documentación (ej.: cómo añadir un nuevo tipo de justificación) |
| Flexibilidad para cambios normativos | • Sistema diseñado para actualizar reglas del Reglamento del Aprendiz en < 4 horas<br>• Configuración centralizada de políticas (ej.: porcentaje máximo de inasistencias) |

## Recuperación (Recovery)

| Atributo NFR | Valor objetivo |
|--------------|----------------|
| Objetivo del Punto de Recuperación (RPO) | • 1 hora durante horarios de clase |
| Objetivo del Tiempo de Recuperación (RTO) | • 30 minutos durante horarios de clase |
| Estrategia de respaldos | • Respaldo incremental cada **1 hora** (6:00 AM - 8:00 PM)<br>• Respaldo completo diario a las 2:00 AM |
| Retención de respaldos | • 5 años (cumpliendo Ley 1581 de 2012) |

## Interoperabilidad (Interoperability)

| Atributo NFR | Valor objetivo |
|--------------|----------------|
| Protocolos de comunicación estándar | • API RESTful con JSON|
| Integración entre dispositivos | • API versiónada (v1) con documentación OpenAPI |
| Cumplimiento de accesibilidad | • WCAG 2.1 Nivel AA en todas las interfaces<br>• Soporte para lectores de pantalla y navegación por teclado |
| Estándares para futuras integraciones | • Endpoints preparados para OAuth 2.0 si se requiere integración futura |

## Usabilidad (Usability)

| Atributo NFR | Valor objetivo |
|--------------|----------------|
| Diseño intuitivo con minimización de entrada manual | • Listas desplegables para fichas/competencias pre-cargadas |
| Adaptabilidad a dispositivos y resoluciones | • Diseño responsive para mobile (360x640), tablet (768x1024), desktop (1280+)<br>• Sin soporte para resoluciones obsoletas (ej.: 800x600) |
| Soporte para navegadores modernos | • Chrome, Firefox y Safari (últimas 2 versiones)<br>• Sin soporte para Internet Explorer (obsoleto) |
| Accesibilidad legalmente obligatoria | • Cumplimiento WCAG 2.1 Nivel AA (Ley 1618 de 2013)<br>• Soporte para lectores de pantalla y teclado|
| Sistema de ayuda contextual | • Tooltips explicativos en formularios críticos<br>• Manual interactivo accesible con F1 en cualquier pantalla |
| Gestión de idioma | • Español (es-CO) por defecto<br>• Detección automática del idioma del sistema (sin selección manual) |


