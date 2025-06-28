let redirected = false; // Declaramos una variable para controlar la redirección

// Función para reproducir el sonido.
function reproducirSonido() {
  const audio = document.querySelector("#sonido"); // Seleccionamos el elemento de audio y lo guardamos en una variable.
  audio.currentTime = 0; // Reiniciamos el tiempo de reproducción al inicio.
  audio.play().catch(err => {
    console.warn("Audio bloqueado por política del navegador.");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const cuadro2 = document.querySelector("#cuadro2"); // Seleccionamos el elemento con id "cuadro2"
  const cuadro3 = document.querySelector("#cuadro3"); // Seleccionamos el elemento con id "cuadro3"

  // Deducción del idioma sin usar localStorage
  let idioma = 'es'; // Valor por defecto
  const referrer = document.referrer;

  if (referrer.includes("/en/")) {
    idioma = 'en';
  } else if (referrer.includes("/fr/")) {
    idioma = 'fr';
  } else if (referrer.includes("/es/")) {
    idioma = 'es';
  } else {
    const langCompleto = document.documentElement.lang || 'es';
    idioma = langCompleto.split('-')[0]; // Ej: "en-US" → "en"
  }

  console.log("Idioma deducido:", idioma);

  // Redirección para cuadro2
  if (cuadro2) {
    cuadro2.addEventListener("markerFound", () => {
      if (!redirected) {
        redirected = true;
        reproducirSonido();
        setTimeout(() => {
          window.location.href = `/${idioma}/video-ignasia-martorell/`;
        }, 500);
      }
    });
  }

  // Redirección para cuadro3
  if (cuadro3) {
    cuadro3.addEventListener("markerFound", () => {
      if (!redirected) {
        redirected = true;
        reproducirSonido();
        setTimeout(() => {
          window.location.href = `/${idioma}/video-tomas-j-salort/`;
        }, 500);
      }
    });
  }
});