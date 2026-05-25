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
}

const boutonAjouter = document.getElementById("ajouter");
const tableauDeTaches = new TodoList();
const input = document.getElementById("input");
const liste = document.querySelector(".liste-taches");

boutonAjouter.onclick = (e) => {
  if (input.value == "") {
    e.preventDefault();
    return console.error("Vous n'avez pas donné un nom pour votre tache");
  }
  tableauDeTaches.ajouterTache(new Todo(Date.now(), input.value, false));
  console.log(tableauDeTaches.lesTaches);
  input.value = "";
  renderTache();
};

function renderTache() {
  liste.innerHTML = "";  
  tableauDeTaches.lesTaches.forEach((tache) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox"> <p>${tache.texte}</p> <button>Supprimer</button>`;

    liste.appendChild(li);
  });
}
