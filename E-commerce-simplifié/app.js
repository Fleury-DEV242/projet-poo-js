class Produit {
  constructor(nom, prix, img) {
    this.nom = nom;
    this.prix = prix;
    this.img = img;
  }
}

class Panier {
  #produits = [];

  ajouterProduit(produit) {
    this.#produits.push(produit);
  }
  get mesProduits() {
    return this.#produits;
  }
}

const monPanier = new Panier();
monPanier.ajouterProduit(new Produit("Air Jordan 4", 10000, "images/1.jpg"));
monPanier.ajouterProduit(new Produit("Air Jordan 4", 10000, "images/2.jpg"));
monPanier.ajouterProduit(new Produit("Air Jordan 4", 10000, "images/3.jpg"));
monPanier.ajouterProduit(new Produit("Air Jordan 4", 10000, "images/1.jpg"));
monPanier.ajouterProduit(new Produit("Air Jordan 4", 10000, "images/2.jpg"));
monPanier.ajouterProduit(new Produit("Air Jordan 4", 10000, "images/3.jpg"));
monPanier.ajouterProduit(new Produit("Air Jordan 4", 10000, "images/1.jpg"));
monPanier.ajouterProduit(new Produit("Air Jordan 4", 10000, "images/2.jpg"));

function initialiserCatalogue(mesProduits) {
  mesProduits.forEach((produit) => {
    const div = document.createElement("div");
    div.classList.add("produit");

    const img = document.createElement("img");
    img.src = produit.img;

    const nom = document.createElement("p");
    nom.textContent = produit.nom;

    const prix = document.createElement("p");
    prix.textContent = produit.prix + " FCFA";

    const divInfo = document.createElement("div");
    divInfo.classList.add("info");
    divInfo.style.marginBottom = "10px";

    const bouton = document.createElement("button");
    bouton.id = "ajouter-panier";
    bouton.dataset.add = "ajouter";
    bouton.textContent = "Ajouter au panier";

    div.append(img);
    divInfo.append(nom);
    divInfo.append(prix);
    div.append(divInfo);
    div.append(bouton);

    const containerProduit = document.getElementById("produits");
    containerProduit.append(div);
  });
}
initialiserCatalogue(monPanier.mesProduits);

const ListeProduits = document.getElementById("produits");

ListeProduits.addEventListener("click", (event) => {
  const listePanier = document.getElementById("liste-panier");

  if (event.target.dataset.add == "ajouter") {
    const elementEnfant = event.target.parentNode.childNodes;

    const [image, text] = elementEnfant;

    const childNodesText = text.childNodes;
    const [first, second] = childNodesText;
    console.log(first.innerText);
    console.log(second.innerText);
 
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = image.src;

    const nom = document.createElement("p");
    nom.textContent = first.innerText;

    const prix = document.createElement("p");
    nom.textContent = second.innerText;

    li.append(img);
    li.append(nom);
    li.append(prix);
    listePanier.append(li);
  }

  const nombre = document.getElementById("nombre");
  console.log(nombre);
  nombre.textContent = listePanier.childElementCount;
  
});
