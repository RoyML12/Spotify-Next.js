const topBar = document.querySelector('.topbar');

// Cambiar opacidad con Scroll
window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		topBar.classList.add('transparent');
	} else {
		topBar.classList.remove('transparent');
	}
});


// Fijar altura Topbar
function alturaTopbar(selector, offset) {
    const elemento = document.querySelector(selector);
    const topbarHeight = topBar.offsetHeight;
    elemento.style.paddingTop = `${topbarHeight + offset}px`;
  }
  
  // Llamar a la función para el elemento con la clase ".main-content"
  ajustarPaddingTop('.main-content', 20);
  



//Boton Play
function agregarBotonPlay(selector) {
    const elementos = document.querySelectorAll(selector);
  
    const createButton = (card) => {
      const button = document.createElement("button");
      button.innerHTML = '<i class="fa-solid fa-play"></i>';
  
      card.appendChild(button);
  
      button.style.display = "none";
      button.classList.add("btn-play");
  
      card.addEventListener("mouseover", () => {
        button.style.display = "block";
      });
  
      card.addEventListener("mouseout", () => {
        button.style.display = "none";
      });
    };
  
    elementos.forEach((card) => {
      createButton(card);
    });
  }
  
  // Llamar a la función para los elementos con la clase ".card-concentracion"
  agregarBotonPlay(".card-concentracion");
  
  // Llamar a la función para los elementos con la clase ".card-spotify-playlists"
  agregarBotonPlay(".card-spotify-playlists");
  


//Alert Reproduciendo Playlist
function reproducir(selector) {
	var divs = document.querySelectorAll(selector);
	divs.forEach(function (div) {
	  div.addEventListener("click", function () {
		alert("Estás reproduciendo esta Playlist");
	  });
	});
  }
  
  // Llamar a la función para los elementos con la clase ".card-concentracion"
  agregarClickListeners(".card-concentracion");
  
  // Llamar a la función para los elementos con la clase ".container-card-spotify-playlists"
  agregarClickListeners(".container-card-spotify-playlists");
  


// Api Spotify
const client_id = '39bef1ea9c544ef3bf7210a8eb54b0df';
const redirect_uri = 'http://127.0.0.1:5500/Programacion%20web/Spotify/index.html';

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
// Redirigir al usuario a la página de inicio de sesión de Spotify
window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=user-library-read&response_type=token`;
});

// Después de que el usuario haya iniciado sesión y Spotify lo redireccione de nuevo a tu sitio web
const handleRedirect = () => {
const accessToken = getAccessTokenFromURL();

if (accessToken) {
// Ahora puedes usar el accessToken para hacer llamadas a la API de Spotify
console.log('Token de acceso:', accessToken);
}
};

// Función para extraer el token de acceso de la URL después de la redirección
const getAccessTokenFromURL = () => {
const urlParams = new URLSearchParams(window.location.hash.substr(1));
return urlParams.get('access_token');
};

 // Llamar a la función de manejo de redireccionamiento al cargar la página
handleRedirect();









