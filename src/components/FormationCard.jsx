// Ce composant reutilise les props etudiees au TP 02.
function FormationCard({ titre, description, photo, icone, couleur }) {
  return (
    <article className="carte-formation">
      <div className="formation-entete">
        <div className={`formation-icone ${couleur}`}>
          <img src={icone} alt="" aria-hidden="true" />
        </div>
        <div>
          <h3>{titre}</h3>
          <p>{description}</p>
        </div>
      </div>
      <img className="formation-photo" src={photo} alt={`Illustration : ${titre}`} />
    </article>
  );
}

export default FormationCard;
