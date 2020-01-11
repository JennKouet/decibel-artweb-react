import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const CreationPage = () => {
    return (
      <>
        <div id="creations" style={{ paddingTop: "100px" }}>
          <section className="creations_header">
            <div className="icondiv">
              <FontAwesomeIcon icon={faPencilAlt} size="3x" />
            </div>
            <h2 style={{ textAlign: "center" }}>Nos Créations</h2>
            <article>
              <p>
                " Dans cette section vous allez voir un petit aperçu de nos
                dernières réalisations issues de milieux professionnels divers.
                "
              </p>
            </article>
          </section>

          <section>
            <article className="">
              <ul className="list-unstyled d-flex flex-wrap justify-content-around">
                <li style={{ width: "40%" }}>
                  <a
                    href="http://www.thesoulphoenixs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./images/thesoulphoenixs.png"
                      alt="site the soulphoenixs"
                      style={{ width: "100%", borderRadius: "100px 100px" }}
                    />
                  </a>

                  <h3>The Soulphoenixs</h3>
                  <p>
                    Pour commencer, voici la création d'un site spécialement
                    conçu pour un groupe de musique. Il a été fait entièrement,
                    de la conception à la réalisation puis la mise en ligne :
                    <a
                      href="https://www.thesoulphoenixs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.thesoulphoenixs.com
                    </a>
                  </p>
                </li>
                <li style={{ width: "40%" }}>
                  <a
                    href="https://riad-dardar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./images/riad.png"
                      alt="site Riad à Marrakech"
                      style={{ width: "100%", borderRadius: "100px 100px" }}
                    />
                  </a>

                  <h3>Riad DARDAR</h3>
                  <p>
                    Le Riad Dardar se situe à Marrakech, il est disponible à la
                    privatisation ou la réservation de chambres, c'est donc un
                    site vitrine avec néamoins un système de réservation,
                    permettant au client de réserver directement sur le site.
                    <a
                      href="https://riad-dardar.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      riad-dardar.com
                    </a>
                  </p>
                </li>
                <li style={{ width: "40%" }}>
                  <a
                    href="https://reseau-katalys.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="./images/katalys.png"
                      alt="site Réseau katalys"
                      style={{ width: "100%", borderRadius: "100px 100px" }}
                    />
                  </a>

                  <h3>Réseau Katalys</h3>
                  <p>
                    Réseau Katalys est dédié à la prestation de services pour
                    Pharmacie. Il a été conçu par nos soins, de A à Z. Une
                    application en back-office entièrement sécurisée, a
                    également été créée pour permettre à l'utilisateur
                    d'intéragir avec ses clients (mise à disposition de fichiers
                    à télécharger, news personnalisées, sections commentaires,
                    création de nouveaux clients dans la base de données...) :
                    <a
                      href="https://reseau-katalys.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      reseau-katalys.com
                    </a>
                  </p>
                </li>
                <li style={{ width: "40%" }}>
                  <a href="https://decibel-artweb.com/mediagraph">
                    <img
                      src="./images/mediagraph.jpg"
                      alt="site mediagraph"
                      style={{ width: "100%", borderRadius: "100px 100px" }}
                    />
                  </a>

                  <h3>Mediagraph</h3>
                  <p>
                    Mediagraph est une imprimerie . Un site vitrine existait
                    déjà mais notre client voulait un rendu plus moderne et
                    fonctionnel. Nous nous sommes basé sur la devanture du
                    magasin afin de garder une cohérence avec le code couleur et
                    avont épurés les informations pour une meilleure visibilité
                    (site Responsive).
                    <a
                      href="https://decibel-artweb.com/mediagraph"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      mediagraph.com
                    </a>
                  </p>
                </li>
              </ul>
              <p className="jumbotron w-50 m-auto">
                Bien sûr, tous nos sites sont Responsive et s'adpatent aux
                supports "Mobile", "Tablette" et "Desktop", pour vous donner le
                meilleur en therme de Communication.
                <img
                  src="./images/bg-homepage3.jpg"
                  alt="background"
                  style={{ width: "40%", margin: "10px" }}
                />
              </p>
            </article>
          </section>
        </div>
      </>
    );
}
 
export default CreationPage;