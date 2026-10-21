import "./App.css";
import FormationCard from "./components/FormationCard.jsx";
import campus from "./assets/campus.jpg";
import informatique from "./assets/informatique.jpg";
import reseaux from "./assets/reseaux.jpg";
import industrie from "./assets/industrie.jpg";
import gestion from "./assets/gestion.jpg";
import diplomeIcone from "./assets/icons/diplome.svg";
import ordiIcone from "./assets/icons/ordinateur.svg";
import reseauIcone from "./assets/icons/reseau.svg";
import industrieIcone from "./assets/icons/industrie.svg";
import gestionIcone from "./assets/icons/gestion.svg";
import flecheIcone from "./assets/icons/fleche.svg";
import mailIcone from "./assets/icons/courriel.svg";

function App() {
  return (
    <div>
      <header className="entete" id="accueil">
        <div className="conteneur entete-interieur">
          <a className="marque" href="#accueil" aria-label="Retour a l'accueil">
            <img className="marque-icone" src={diplomeIcone} alt="" />
            <span>
              <strong>INSTA</strong>
              <small>Projet pédagogique — Interfaces multimédias</small>
            </span>
          </a>
          <nav className="navigation" aria-label="Navigation principale">
            <a href="#accueil">Accueil</a>
            <a href="#formations">Formations</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="banniere" aria-labelledby="titre-accueil">
          <img className="banniere-photo" src={campus} alt="Étudiants dans un campus universitaire (illustration pédagogique)" />
          <div className="banniere-filtre"></div>
          <div className="conteneur banniere-contenu">
            <p className="surtitre">Bienvenue sur notre espace de démonstration</p>
            <h1 id="titre-accueil">Apprendre, créer, innover.</h1>
            <p>Un exemple de page d'accueil réalisé avec React, JSX et CSS dans le cadre du module Interfaces multimédias.</p>
            <a className="bouton-principal" href="#formations">
              Découvrir les formations
              <img src={flecheIcone} alt="" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section-formations conteneur" id="formations" aria-labelledby="titre-formations">
          <div className="titre-section">
            <h2 id="titre-formations">Nos domaines de formation</h2>
            <p>Quatre exemples de domaines présentés pour apprendre à mettre en page des cartes.</p>
          </div>
          <div className="grille-formations">
            <FormationCard titre="Informatique" description="Programmation et développement web." photo={informatique} icone={ordiIcone} couleur="bleu" />
            <FormationCard titre="Réseaux" description="Systèmes et télécommunications." photo={reseaux} icone={reseauIcone} couleur="vert" />
            <FormationCard titre="Génie industriel" description="Conception et production." photo={industrie} icone={industrieIcone} couleur="orange" />
            <FormationCard titre="Gestion" description="Organisation et management." photo={gestion} icone={gestionIcone} couleur="violet" />
          </div>
        </section>
</main>
        <section className="contact" id="contact" aria-labelledby="titre-contact">
          <div className="conteneur contact-interieur">
            <div>
              <h2 id="titre-contact">À propos de ce projet</h2>
              <p>Cette interface est un exercice d'apprentissage React et CSS. Elle ne constitue pas le site officiel de l'établissement.</p>
            </div>
            <div className="contact-lien" aria-label="Illustration du moyen de contact">
              <img src={mailIcone} alt="" />
              Espace de contact (exemple)
            </div>
          </div>
        </section>
      

      <footer className="pied">
        <div className="conteneur pied-interieur">
          <span>© 2026 — TP 03, Interfaces multimédias — Licence 3</span>
          <span>Maquette pédagogique INSTA</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
