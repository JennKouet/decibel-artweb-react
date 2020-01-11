import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


const HomePage = () => {
    return (
      <>
        <div id="home" className="bg-dark">
          {/* /<!-- BACKGROUND PARALLAX1 - IMAGE TITRE --> */}
          <div className="parallax1">
            <div className="arrowp1">
              <a href="#main_services">
                <FontAwesomeIcon icon={faAngleDown} />
              </a>
            </div>
          </div>
          <div className="title_mobile">
            <img
              src="./images/bg-homepage8.jpg"
              alt="titre Decibel"
              style={{ width: "100%", margin: "auto" }}
            />
          </div>
          {/* <!-- BACKGROUND PARALLAX2 - PRESENTATION --> */}
          <article id="presentation">
            <h2>Présentation</h2>
            <h3>Bienvenue sur le site de Décibel Artweb!</h3>
            <p>
              Jennifer LAGARDE, intégratrice et développeuse web, passionnée par
              les nouvelles technologies et le webdesign, décide de lancer son
              projet en 2018 et créée une entreprise spécialisée dans la
              créaction de sites internet.{" "}
            </p>
            <p style={{ fontStyle: "italic", padding: "10px 0" }}>
              " Dans le soucis de toujours être à la hauteur des attentes
              clients, nous nous efforçons de maintenir un niveau d'exigence,
              pour offrir le meilleur en terme de communication. Nous utilisons
              les dernières techniques de conception, pour que le produit final
              soit moderne et efficace."
            </p>
            <p>
              Déja plusieurs clients nous ont fait confiance :{" "}
              <a href="www.thesoulphoenixs.com">The Soulphoenixs</a>,{" "}
              <a href="https://reseau-katalys.com">Réseau Katalys</a>,{" "}
              <a href="https://pharmidee.com">Pharmidée</a>,{" "}
              <a href="https://riad-dardar.com">Riad Dar Dar</a>,{" "}
              <a href="https://decibel-artweb.com/mediagraph13">Mediagraph</a>
              ...
            </p>
            <div className="arrowp1">
              <a href="#main_services">
                <i className="fas fa-angle-down"></i>
              </a>
            </div>
          </article>

          {/* <!-- BACKGROUND PARALLAX3 - SERVICES --> */}
          <section id="main_services">
            <h2 style={{ textAlign: "center" }}>Nos Services</h2>

            <section className="services">
              <article style={{ height: "610px" }} className="m-2">
                <img
                  src="./images/crea.jpg"
                  alt="logo services creations"
                  style={{ height: "175px", marginBottom: "10px" }}
                />
                <h3>Création de sites internet</h3>
                <p>
                  De la conception à la réalisation, peu importe votre milieu
                  (professionnel, artistique, associatif...), nous sommes à
                  l'écoute pour vous accompagnez dans votre projet. Langages et
                  framework utilisés : HTML5, CSS3, JS (Reactjs, JQuery),
                  Bootstrap, PHP7 (Symfony 5), MySQL, SASS, Wordpress.
                </p>
              </article>
              <article style={{ height: "610px" }} className="m-2">
                <img
                  src="./images/responsive.jpg"
                  alt="logo responsive"
                  style={{ height: "175px", marginBottom: "10px" }}
                />
                <h3>100% Responsive Design</h3>
                <p>
                  Afin de faciliter la visibilité de votre contenu, tous nos
                  sites s'adaptent au différents supports, tel que les
                  ordinateurs, les tablettes ou les smartphones.
                </p>
              </article>
              <article style={{ height: "610px" }} className="m-2">
                <img
                  src="./images/backoffice.jpg"
                  alt="logo responsive"
                  style={{ height: "175px", marginBottom: "10px" }}
                />
                <h3>Back-Office personnalisé</h3>
                <p>
                  Vous aurez peut être besoin d'un espace membre afin de
                  fidéliser vos clients, ou tout simplement vous souhaitez
                  agrémenter votre site régulièrement en y ajoutant des news.
                  Grâce au back-office vous pourrez le faire en toute autonomie.
                </p>
              </article>
              <article style={{ height: "610px" }} className="m-2">
                <img
                  src="./images/maintenance.jpg"
                  alt="logo responsive"
                  style={{ height: "175px", marginBottom: "10px" }}
                />
                <h3>Maintenance et modernisation de sites déjà créés</h3>
                <p>
                  Vous souhaitez mettre à jour votre site, alimenter son
                  contenu, modifier des pages mais vous ne savez pas comment
                  faire? Decibel Artweb est là pour vous accompagner dans cette
                  démarche.
                </p>
              </article>
            </section>
            {/* <!-- fleche vers le bas --> */}
            <div>
              <a href="#p4">
                <i className="fas fa-angle-down"></i>
              </a>
            </div>
          </section>
          {/* <!-- BACKGROUND PARALLAX 4 - ASSISTANCE--> */}
          <section id="p4">
            <article className="assistance">
              <div className="icondivp4">
                <img
                  src="./images/woman-with-headset.svg"
                  style={{ width: "30%" }}
                  alt="icon assistance"
                />
                <h2>Assistance 7J/7</h2>
              </div>
              <div className="para">
                <p>
                  Afin d'être plus proche de nos clients, nous sommes disponible
                  tout au long de la semaine pour répondre à toutes vos
                  questions.
                </p>
              </div>
            </article>
          </section>
          <section id="socialFb" style={{ textAlign: "center" }}>
            <h2 style={{ textTransform: "uppercase", textAlign: "center" }}>
              Fil d'Actus:
            </h2>
           
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdecibelartweb%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="500"
              style={{border:"none",overflow:"hidden"}}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="facebook-actu"
            ></iframe>
          </section>
          <div className="bas">
            <a href={"/"}>
              <img src="./images/up-arrow.svg" alt="fleche haut" />
            </a>
          </div>
        </div>
      </>
    );
}
 
export default HomePage;