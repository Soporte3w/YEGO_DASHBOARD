# 🚀 Sistema de Dashboards - Power BI

Una plataforma React profesional para visualizar dashboards de Power BI con un diseño corporativo elegante.

## ✨ Características

- 🎨 **Diseño Corporativo**: Interfaz profesional con paleta rojo, blanco y negro
- 🌟 **Animaciones Elegantes**: Transiciones suaves y profesionales
- 📱 **Responsive**: Optimizado para todos los dispositivos
- 🎯 **Navegación Intuitiva**: Acceso directo a todos los dashboards
- ⚡ **Rendimiento Optimizado**: Carga rápida y experiencia fluida
- 🎪 **Efectos Visuales**: Elementos interactivos con efectos sutiles

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **React Router** - Navegación entre páginas
- **Framer Motion** - Animaciones y transiciones
- **Styled Components** - Estilos CSS-in-JS
- **Lucide React** - Iconos modernos

## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd DashboardWeb
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm start
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

## 📊 Dashboards Incluidos

- **Yego Lima** 🏙️ - Dashboard operativo de Lima
- **Yego Quito** 🏔️ - Análisis de Quito
- **Yego Barranquilla** 🌊 - Métricas de Barranquilla
- **Yego Bogotá** 🏢 - Dashboard de Bogotá
- **Yego Medellín** 🌸 - Análisis de Medellín
- **Yego Cali** 🌴 - Métricas de Cali

## 🔧 Configuración de Dashboards

Para agregar o modificar dashboards, edita el archivo `src/context/DashboardContext.js`:

```javascript
{
  id: 'tu_dashboard_id',
  nombre: 'Nombre del Dashboard',
  descripcion: 'Descripción del dashboard',
  url: 'https://app.powerbi.com/view?r=TU_EMBED_URL',
  color: '#6366f1',
  icono: '🏙️',
  categoria: 'Operaciones',
  ultimaActualizacion: '2024-01-15'
}
```

## 🎨 Personalización

### Colores y Temas
Los colores se definen en `src/index.css` usando variables CSS:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
  --background-dark: #0f0f23;
  /* ... más variables */
}
```

### Animaciones
Las animaciones se configuran usando Framer Motion en los componentes.

## 📱 Funcionalidades

### Página de Inicio
- Hero section con título animado
- Estadísticas con efectos hover
- Grid de dashboards con tarjetas interactivas

### Vista de Dashboard
- Header con información del dashboard
- Estadísticas en tiempo real
- Iframe de Power BI integrado
- Controles de pantalla completa y actualización
- Indicador de carga

### Navegación
- Navbar fijo con efecto glassmorphism
- Menú móvil responsive
- Navegación fluida entre páginas

## 🚀 Despliegue

### Build para Producción
```bash
npm run build
```

### Despliegue en Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `build`

### Despliegue en Vercel
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es una app React
3. Despliegue automático en cada push

## 🔒 Seguridad

- Las URLs de Power BI deben tener permisos de embed configurados
- Asegúrate de que los dashboards sean públicos o tengan autenticación configurada

## 📈 Optimización

- Lazy loading de componentes
- Optimización de imágenes
- Compresión de assets
- Caching de recursos estáticos

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes problemas o preguntas:

1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue con detalles del problema

## 🎯 Roadmap

- [ ] Autenticación de usuarios
- [ ] Favoritos de dashboards
- [ ] Notificaciones en tiempo real
- [ ] Exportación de datos
- [ ] Temas personalizables
- [ ] Modo oscuro/claro
- [ ] Integración con más fuentes de datos

---

**¡Disfruta explorando tus dashboards con esta aplicación alucinante! 🚀✨** 