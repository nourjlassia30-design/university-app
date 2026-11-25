import "./App.css";
import Footer from "./assets/components/Footer.jsx";
import Header from "./assets/components/Header.jsx";
import Navbar from "./assets/components/Navbar.jsx";
import StudentCard from "./assets/components/StudentCard.jsx";
import image from "./assets/images.jpg";

const etudiants = [
  {
    prenom: "nour elhouda",
    nom: "jlassia",
    email: "nourjlassia30@gmail.com",
    telephone: "+216 99999999",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    ville: "Mahdia",
    image: image,
  },
  {
    prenom: "Sarra",
    nom: "Trabelsi",
    email: "sarra.trabelsi@gmail.com",
    telephone: "+216 22 345 678",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Sousse",
  },
  {
    prenom: "nour",
    nom: "jlassia",
    email: "nourjlassia30@gmail.com",
    telephone: "+216 99999999",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2ème année",
    groupe: "GLSI 2",
    
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main className="container">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;