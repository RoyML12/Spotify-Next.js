import React, { useEffect } from 'react';
import Link from 'next/link'
import Script from 'next/script'



export const MainContent = () => {
    useEffect(() => {
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
        let topbarHeight = topBar.offsetHeight;
        const mainContent = document.querySelector('.main-content');
        mainContent.style.paddingTop = `${topbarHeight + 20}px`;

               //Boton Play
        const containerConcentracion = document.querySelectorAll(
            '.card-concentracion'
        );
        const containerSpotifyPlaylists = document.querySelectorAll(
            '.card-spotify-playlists'
        );

        const createButton = card => {
            const button = document.createElement('button');
            button.innerHTML = '<i class="fa-solid fa-play"></i>';

            card.appendChild(button);

            button.style.display = 'none';
            button.classList.add('btn-play');

            card.addEventListener('mouseover', () => {
                button.style.display = 'block';
            });

            card.addEventListener('mouseout', () => {
                button.style.display = 'none';
            });
        };

        containerConcentracion.forEach(card => {
            createButton(card);
        });

        containerSpotifyPlaylists.forEach(card => {
            createButton(card);
        });

               //Alert Reproduciendo Playlist
        var divs = document.querySelectorAll(".card-concentracion");
        divs.forEach(function(div) {
            div.addEventListener("click", function() {
                alert("Estas reproduciendo esta Playlist");
            });
        });

        var divs = document.querySelectorAll(".container-card-spotify-playlists");
        divs.forEach(function(div) {
            div.addEventListener("click", function() {
                alert("Estas reproduciendo esta Playlist");
            });
        });

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

      }, []); 


return (
<><main className="main container">
    {/*-- TopBar -->*/}
    <div className="topbar">
        <div className="container-arrows">
            <div className="container-arrow-left">
                <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="container-arrow-right">
                <i className="fa-solid fa-chevron-right"></i>
            </div>
        </div>
        <div className="buttons-user">
            <Link href="#" className="btn-register">Registrarte</Link>
            <Link href="#" className="btn-login btn-full" id="login-button">Iniciar sesión</Link>
        </div>
    </div>
    {/*<!-- SideBar -->*/}
    <nav className="navbar">
        <div className="container-logo">
            <a href="#" className="link-logo">
                <svg viewBox="0 0 1134 340" className="logo-svg">
                    <title>Spotify</title>
                    <path
                        fill="currentColor"
                        d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
                    ></path>
                </svg>
            </a>
        </div>
        <ul className="nav-main">
            <li>
                <a href="#"> <i className="fa-solid fa-house"></i>Inicio </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa-solid fa-magnifying-glass"></i>Buscar</a>
            </li>
            <li>
                <a href="#"
                ><i className="fa-solid fa-bookmark"></i>Tu biblioteca</a>
            </li>
        </ul>
        <div className="extra-options">
            <button className="btn-create-list">
                <i className="fa-solid fa-plus"></i>
                Crear Lista
            </button>
            <button className="btn-favorite-songs">
                <i className="fa-solid fa-heart"></i>
                Canciones que te gustan
            </button>
        </div>
        <div className="container-links">
            <div className="container-links-legal">
                <a href="https://www.spotify.com/ec/legal/">Legal</a>
                <a href="https://www.spotify.com/ec/privacy/"
                >Centro de Privacidad</a>
                <a href="https://www.spotify.com/ec/legal/privacy-policy/"
                >Política de Privacidad</a>
                <a href="https://www.spotify.com/ec/legal/cookies-policy/"
                >Cookies</a>
                <a
                    href="https://www.spotify.com/ec/legal/privacy-policy/#s3"
                >Información sobre los anuncios
                </a>
            </div>
            <button className="btn-language">
                <i className="fa-solid fa-globe"></i>
                Español Latinoamerica
            </button>
        </div>
    </nav>
    {/*<!-- Contenido Principal -->*/}
    <section className="main-content">
        {/*<!-- 1 Fila -->*/}
        <div className="container-name-concentracion">
            <h1 className="title-playlist">Concentración</h1>
            <div className="container-card-concentracion">
                <div className="card-concentracion">
                    <div className="card">
                        <div className="card-img">
                            <img
                                src="img/concentracion/peacefulpiano.jpg"
                                alt="Peaceful piano" />
                        </div>
                        <h2>Peaceful Piano</h2>
                        <p>Relax and indulge with beautiful piano pieces</p>
                    </div>
                </div>
                <div className="card-concentracion">
                    <div className="card">
                        <div className="card-img">
                            <img
                                src="img/concentracion/deep focus.jpg"
                                alt="Deep Focus" />
                        </div>
                        <h2>Deep Focus</h2>
                        <p>
                            Keep calm and focus with ambient and post-rock
                            music.
                        </p>
                    </div>
                </div>
                <div className="card-concentracion">
                    <div className="card">
                        <div className="card-img">
                            <img
                                src="img/concentracion/instrumental study.jpg"
                                alt="Instrumental study" />
                        </div>
                        <h2>Instrumental Study</h2>
                        <p>Focus with soft study music in the background.</p>
                    </div>
                </div>
                <div className="card-concentracion">
                    <div className="card">
                        <div className="card-img">
                            <img
                                src="img/concentracion/coding mode.jpg"
                                alt="Jazz Vibes" />
                        </div>
                        <h2>Jazz Vibes</h2>
                        <p>The original chill instrumental beats playlist.</p>
                    </div>
                </div>
                <div className="card-concentracion">
                    <div className="card">
                        <div className="card-img">
                            <img
                                src="img/concentracion/focus flow.jpg"
                                alt="Focus Flow" />
                        </div>
                        <h2>Focus Flow</h2>
                        <p>Uptempo instrumental hip hop beats.</p>
                    </div>
                </div>
                <div className="card-concentracion">
                    <div className="card">
                        <div className="card-img">
                            <img
                                src="img/concentracion/workday lounge.jpg"
                                alt="Workday Lounge" />
                        </div>
                        <h2>Workday Lounge</h2>
                        <p>Lounge and chill out music for your workday.</p>
                    </div>
                </div>
                <div className="card-concentracion">
                    <div className="card">
                        <div className="card-img">
                            <img
                                src="img/concentracion/beats to think.jpg"
                                alt="Beats to think to" />
                        </div>
                        <h2>Beats to think to</h2>
                        <p>Focus with deep techno and tech house.</p>
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- 2 Fila -->*/}
        <div className="container-name-spotify-playlists">
            <h1 class="title-playlist">
                Spotify Playlists
            </h1>
            <div className="container-card-spotify-playlists">
                <div className="card-spotify-playlists">
                    <div className="card">
                        <div className="card-img">
                            <img src="img/spotify playlists/today top hits.jpg" alt="" />
                        </div>
                        <h2>Today's Top Hits</h2>
                        <p>Miley Cyrus is on top of the Hottest 50!</p>
                    </div>
                </div>
                <div className="card-spotify-playlists">
                    <div className="card">
                        <div className="card-img">
                            <img
                                src="img/spotify playlists/rap caviar.jpg"
                                alt="RapCaviar" />
                        </div>
                        <h2>RapCaviar</h2>
                        <p>
                            New music from Metro Boomin, NLE Choppa and Rae
                            Sremmurd.
                        </p>
                    </div>
                </div>
                <div className="card-spotify-playlists">
                    <div className="card">
                        <div className="card-img">
                            <img
                                src="img/spotify playlists/all out.jpg"
                                alt="All Out 2010s" />
                        </div>
                        <h2>All Out 2010s</h2>
                        <p>The biggest songs of the 2010s.</p>
                    </div>
                </div>
                <div className="card-spotify-playlists">
                    <div className="card">
                        <div className="card-img">
                            <img
                                src="img/spotify playlists/rock classics.jpg"
                                alt="Rock Classics" />
                        </div>
                        <h2>Rock Classics</h2>
                        <p>
                            Rock legends & epic songs that continue to inspire
                            generations. Cover: Foo Fighters
                        </p>
                    </div>
                </div>
                <div className="card-spotify-playlists">
                    <div className="card">
                        <div className="card-img">
                            <img
                                src="img/spotify playlists/chill hits.jpg"
                                alt="Chill Hits" />
                        </div>
                        <h2>Chill Hits</h2>
                        <p>Kick back to the best new and recent chill hits</p>
                    </div>
                </div>
                <div className="card-spotify-playlists">
                    <div className="card">
                        <div className="card-img">
                            <img
                                src="img/spotify playlists/viva latino.jpg"
                                alt="Viva Latino" />
                        </div>
                        <h2>Viva Latino</h2>
                        <p>
                            Today's top Latin hits, elevando nuestra música.
                            Cover: Yandel & Feid
                        </p>
                    </div>
                </div>
                <div className="card-spotify-playlists">
                    <div className="card">
                        <div className="card-img">
                            <img
                                src="img/spotify playlists/mega hit mix.jpg"
                                alt="" />
                        </div>
                        <h2>Mega Hit Mix</h2>
                        <p>
                            A mega mix of 75 favorites from the last few years!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*<!-- 1Parte final -->*/}
    <footer className="footer">
        <div className="container-links-footer">
            <div className="links-footer">
                <h3>Empresa</h3>
                <a href="#">Acerca de</a>
                <a href="#">Empleo</a>
                <a href="#">For the Record</a>
            </div>
            <div className="links-footer">
                <h3>Comunidades</h3>
                <a href="#">Para artistas</a>
                <a href="#">Desarrolladores</a>
                <a href="#">Publicidad</a>
                <a href="#">Inversores</a>
                <a href="#">Proveedores</a>
            </div>
            <div className="links-footer">
                <h3>Enlaces útiles</h3>
                <a href="#">Asistencia</a>
                <a href="#">App gratis para móvil</a>
            </div>
        </div>
    </footer>
</main>
<Script src="https://kit.fontawesome.com/81581fb069.js"/> </>
)}

