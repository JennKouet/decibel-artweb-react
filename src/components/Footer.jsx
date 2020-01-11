import React from 'react';

const Footer = () => {
    return (
      <>
        <footer className="bg-light jumbotron fixed m-0">
          <div>
            <ul>
              <li>
                <h3>Informations</h3>
              </li>
              <li>
                Pour toutes demandes de devis, veuillez nous contacter par le
                formulaire suivant :{" "}
                <a href="index.php?page=contact">Cliquez-ici.</a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Nos Clients</h3>
              </li>
              <li>
                -{" "}
                <a
                  href="https://reseau-katalys.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réseau Katalys
                </a>
              </li>
              <li>
                -{" "}
                <a
                  href="https://www.thesoulphoenixs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The SoulPhoenixs
                </a>
              </li>
              <li>
                -{" "}
                <a
                  href="https://www.decibel-artweb.com/mediagraph13"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mediagraph
                </a>
              </li>
              <li>
                -{" "}
                <a
                  href="https://pharmidee.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pharmidée
                </a>
              </li>
              <li>
                -{" "}
                <a
                  href="https://riad-dardar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Riad Dardar
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Contact</h3>
              </li>
              <li>
                <i className="fas fa-phone"></i> Tél: 06 60 28 57 02
              </li>
              <li>
                <i className="fas fa-envelope"></i> Mail:{" "}
                <a href="mailto:infos@decibel-artweb.com">
                  infos@decibel-artweb.com
                </a>{" "}
              </li>
            </ul>
          </div>
        </footer>
      </>
    );
}
 
export default Footer;