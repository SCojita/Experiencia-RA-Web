# 🖼️ Experiencia AR - Palau Salort

Este proyecto fue desarrollado durante mis prácticas en la empresa **XRSEN**, como parte de mi formación en el ciclo de Desarrollo de Aplicaciones Multiplataforma. El objetivo fue crear una **experiencia de Realidad Aumentada accesible desde navegador** que permita al visitante escanear cuadros reales del **Palau Salort (Menorca)** para acceder a contenidos audiovisuales relacionados con cada personaje histórico representado.

## 🎯 ¿Cómo funciona?

- Cuando el usuario enfoca su cámara a uno de los cuadros reales (o imágenes que los representen), el sistema detecta el marcador visual usando **AR.js con NFT tracking**.
- Al detectar el cuadro, se reproduce un **sonido de confirmación** y se **redirige automáticamente** a un vídeo explicativo sobre ese personaje.
- La redirección se adapta automáticamente al idioma del visitante: español, inglés o francés.

## 🌐 Tecnologías utilizadas

- HTML + CSS + JavaScript
- [A-Frame](https://aframe.io/) + [AR.js (NFT tracking)](https://github.com/AR-js-org/AR.js)
- Redirección dinámica según idioma

## 🧪 Prueba la experiencia

Puedes probar el sistema desde un navegador compatible con WebXR (como Chrome en móvil). Abre la cámara y apunta a uno de los cuadros siguientes:

### 📌 Cuadro: Ignàsia Martorell
![Ignàsia Martorell](./img/cuadro_2.jpg)  
🔗 Redirige a: `/[idioma]/video-ignasia-martorell/`

### 📌 Cuadro: Tomàs J. Salort
![Tomàs J. Salort](./img/cuadro_3.jpg)  
🔗 Redirige a: `/[idioma]/video-tomas-j-salort/`

> 💡 Puedes descargar estas imágenes o mostrarlas en pantalla para simular la prueba.

---

## 🚀 Cómo probarlo

Por razones obvias, no puedo compartir aquí el enlace original de la aplicación web, ya que está alojada en el servidor real de la empresa **XRSEN** mediante acceso FTP. Esto implica una cuestión de seguridad y privacidad, por lo tanto, si quieres probar el sistema, tendrás que subirlo a tu propio entorno web. Aquí te explico cómo hacerlo:

### 🧭 Requisitos

- Un proveedor de hosting con **cPanel** y acceso FTP (puede ser gratuito o de pago).
- Un dominio o subdominio disponible para pruebas (por ejemplo: `tudominio.com/experiencia`).
- Un cliente FTP como **FileZilla** o el propio gestor de archivos de cPanel.

---

### 🔨 Pasos para desplegar la experiencia

1. **Crea una cuenta de hosting con cPanel**  
   Puedes usar proveedores como:
   - [Hostinger](https://www.hostinger.es/)
   - [InfinityFree](https://www.infinityfree.net/) (gratuito)
   - [AwardSpace](https://www.awardspace.com/) (gratuito)

2. **Accede a cPanel y entra en el “Administrador de Archivos”**  
   Crea una carpeta nueva dentro de `public_html`, por ejemplo: `experiencia`.

3. **Sube los archivos del proyecto**  
   Sube los siguientes archivos y carpetas a la nueva carpeta:
   - `experiencia.html`
   - `style.css`
   - `script.js`
   - `img/` (con las imágenes de los cuadros, como `cuadro_2.jpg` y `cuadro_3.jpg`)

4. **(Opcional) Usa FTP con FileZilla**  
   También puedes conectarte vía FTP usando:
   - Servidor: tu dominio (ej. `ftp.tudominio.com`)
   - Usuario/contraseña de FTP (los verás en cPanel)
   - Puerto: `21`

5. **Accede desde el navegador**  
   Abre el navegador en tu móvil y visita: https://tudominio.com/experiencia/experiencia.html (o tu ruta).
   
Acepta el permiso de cámara y apunta a uno de los cuadros mostrados en este README.
