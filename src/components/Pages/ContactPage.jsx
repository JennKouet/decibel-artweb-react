import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
    return (
      <>
        <div id="contact" style={{ paddingTop: "100px" }}>
          <div class="pencil">
            <FontAwesomeIcon icon={faPencilAlt} size="3x" />
          </div>
          <h2>Contactez-nous</h2>
          <section className="formulaire">
            <form method="POST" action="" enctype="multipart/mixed">
              <input type="text" name="nom" placeholder="Votre nom" />
              <input type="text" name="prenom" placeholder="Votre prénom" />
              <input
                type="email"
                name="email"
                placeholder="Votre Email"
                required
              />
              <input type="text" name="objet" placeholder="Objet" />
              <textarea
                type="text"
                name="message"
                placeholder="Votre message"
                required
              ></textarea>
              <div>
                <h3>Joindre un fichier (Facultatif: jpeg ou pdf, max 10Mo)</h3>
                <input
                  type="file"
                  name="fichier"
                  className="addFile"
                  id="fichier"
                />
              </div>
              <button type="submit" name="btnContact" value="Envoyer">
                Envoyer
              </button>
            </form>
          </section>
        </div>
      </>
    );
}
 
export default ContactPage;