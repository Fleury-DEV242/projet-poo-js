class Todo {
  constructor(id, texte, estFait) {
    this.id = id;
    this.texte = texte;
    this.estFait = estFait;
  }
  tacheFaite() {
    this.estFait = true;
  }
}

class TodoList {
  #tableauTache = [];

  get lesTaches() {
    return this.#tableauTache;
  }

  ajouterTache(tache) {
    this.#tableauTache.push(tache);
  }
  sauvegarderListe() {
    localStorage.setItem("liste", JSON.stringify(this.lesTaches));
  }
}

const boutonAjouter = document.getElementById("ajouter");
const tableauDeTaches = new TodoList();
const input = document.getElementById("input");
const liste = document.querySelector(".liste-taches");

function chargerListe() {
  listeCharger = localStorage.getItem("liste");
  if (listeCharger != null) {
    const data = JSON.parse(listeCharger);
    return data;
  } else {
    return console.log("Il n'y a aucune tâche dans le repertoire");
  }
}

boutonAjouter.addEventListener("click", (e) => {
  if (input.value == "") {
    e.preventDefault();
    return console.error("Vous n'avez pas donné un nom pour votre tache");
  }

  tableauDeTaches.ajouterTache(new Todo(Date.now(), input.value, false));
  tableauDeTaches.sauvegarderListe();

  input.value = "";
  renderTache();
});

function renderTache() {
  liste.innerHTML = "";
  const taches = chargerListe();

  taches.forEach((tache) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox"> <p>${tache.texte}</p> <button>Supprimer</button>`;

    liste.appendChild(li);
  });
}
