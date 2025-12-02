**Proyecto Frontend — Instrucciones de Inicialización**

- **Descripción:**: Frontend implementado con React + Vite. Contiene la UI del proyecto SENA-Attendance.

**Prerequisitos**
- **Node.js:**: Instala `Node.js` (recomendado >= 18). Verifica con `node -v`.
- **Gestor de paquetes:**: Usa `npm`, `pnpm` o `yarn`. Verifica con `npm -v` o `pnpm -v`.

**Instalación**
- **Clonar repo:**: Asegúrate de tener el repositorio clonado y situarte en la carpeta raíz del proyecto.
- **Instalar dependencias (en la carpeta `03-Develop/Frontend`)**:

```
cd 03-Develop/Frontend
npm install
# o alternativamente:
# pnpm install
# yarn install
```

**Scripts útiles**
- **Iniciar servidor de desarrollo:**: `npm run dev` (por defecto Vite sirve en `http://localhost:5173`)
- **Construir para producción:**: `npm run build`
- **Previsualizar build:**: `npm run preview` (muestra el build localmente)
- **Ver scripts disponibles:**: Revisa `package.json` para confirmar scripts definidos.

Ejemplo rápido:

```
cd 03-Develop/Frontend
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

**Variables de entorno**
- **Archivos:**: Puedes usar `.env`, `.env.development` y `.env.production` en la raíz de la carpeta `Frontend`.
- **Prefijo Vite:**: Las variables que necesites exponer al cliente deben empezar por `VITE_` (ej.: `VITE_API_URL=https://api.example.com`).
- **Ejemplo `.env.development`**:

```
VITE_API_URL=http://localhost:3000/api
```

Después de cambiar variables de entorno reinicia el servidor de desarrollo.

**Estructura básica**
- **`index.html`**: Punto de entrada HTML de Vite.
- **`src/main.jsx`**: Entrada de la aplicación React.
- **`src/App.jsx`**: Componente raíz.
- **`src/assets/`**: Imágenes y recursos estáticos.

**Despliegue**
- **Build estático:**: Ejecuta `npm run build` y sube la carpeta `dist/` al proveedor de hosting estático (Netlify, Vercel, surge, S3 + CloudFront, etc.).
- **Variable de entorno para producción:**: Asegúrate de configurar `VITE_API_URL` en el entorno de hosting.

**Solución de problemas comunes**
- **Puerto ocupado:**: Si `http://localhost:5173` está ocupado, Vite ofrecerá otro puerto; también puedes forzar uno con `npm run dev -- --port 3000`.
- **Dependencias corruptas:**: Elimina `node_modules` y `package-lock.json` (o `pnpm-lock.yaml`) y vuelve a `npm install`.
- **Cambios en `.env` no aplican:**: Reinicia el servidor de desarrollo.

**Notas para desarrolladores**
- **Lint / Formato:**: Si existen scripts como `lint` o `format` en `package.json`, úsalos antes de crear PRs.
- **Revisar `package.json`:**: Confirma scripts y dependencias específicas antes de ejecutar comandos.

**Contacto / Mantenimiento**
- **Mantenedor:**: Revisa el `package.json` o el `README` del repositorio principal para información de contacto del equipo.

Si quieres, puedo también:
- añadir un archivo de ejemplo `.env.example` con variables comunes,
- verificar los `scripts` existentes en `03-Develop/Frontend/package.json` y añadir instrucciones específicas.

