function StudentCard(props) {

  const ville = props.ville || "Non renseignée";
  const initiales = (props.prenom?.[0] || "") + (props.nom?.[0] || "");

  return (
    <div className="card">
      {props.image ? (
        <img src={props.image} alt={`Photo de ${props.prenom} ${props.nom}`} />
      ) : (
        <div className="avatar" aria-hidden="true">{initiales}</div>
      )}

      <h2>Fiche étudiant</h2>

      <p><strong>Nom & Prénom :</strong> {props.prenom} {props.nom}</p>
      <p><strong>Email :</strong> {props.email}</p>
      <p><strong>Téléphone :</strong> {props.telephone}</p>
      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {ville}</p>

      <a className="btn" href={`mailto:${props.email}`}>Contacter</a>
    </div>
  );
}

export default StudentCard;