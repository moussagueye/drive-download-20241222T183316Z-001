// Sélection des éléments nécessaires
const totalPriceElement = document.querySelector('.total');
const productCards = document.querySelectorAll('.card');
let totalPrice = 0;

// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
totalPriceElement.textContent = `${totalPrice} $`;
}

// Fonction pour gérer l'ajout d'un produit
function addProduct(card) {
const unitPrice = parseInt(card.querySelector('.unit-price').textContent);
const quantityElement = card.querySelector('.quantity');
let quantity = parseInt(quantityElement.textContent);
quantity++;
quantityElement.textContent = quantity;
totalPrice += unitPrice;
updateTotalPrice();
}

// Fonction pour gérer le retrait d'un produit
function removeProduct(card) {
const unitPrice = parseInt(card.querySelector('.unit-price').textContent);
const quantityElement = card.querySelector('.quantity');
let quantity = parseInt(quantityElement.textContent);
if (quantity > 0) {
quantity--;
quantityElement.textContent = quantity;
totalPrice -= unitPrice;
updateTotalPrice();
}
}

// Ajout des événements aux boutons "+" et "-"
productCards.forEach(card => {
const addButton = card.querySelector('.fa-plus-circle');
const removeButton = card.querySelector('.fa-minus-circle');

addButton.addEventListener('click', () => addProduct(card));
removeButton.addEventListener('click', () => removeProduct(card));
});
document.addEventListener("DOMContentLoaded", () => {
    // Fonction pour supprimer des articles
    const trashIcons = document.querySelectorAll(".fa-trash-alt");
    trashIcons.forEach((trashIcon) => {
      trashIcon.addEventListener("click", (event) => {
        const productCard = event.target.closest(".card-body");
        if (productCard) {
          productCard.remove(); // Supprime la carte de l'article
          updateTotalPrice(); // Met à jour le prix total
        }
      });
    });
  
    // Fonction pour aimer/desaimer des articles
    const heartIcons = document.querySelectorAll(".fa-heart");
    heartIcons.forEach((heartIcon) => {
      heartIcon.addEventListener("click", () => {
        // Basculer la classe "liked" et la couleur du cœur
        heartIcon.classList.toggle("liked");
        heartIcon.style.color = heartIcon.classList.contains("liked")
          ? "red"
          : "black";
      });
    });
  
    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
      const productCards = document.querySelectorAll(".card-body");
      let totalPrice = 0;
  
      productCards.forEach((card) => {
        const unitPrice = parseFloat(
          card.querySelector(".unit-price").textContent.replace(" $", "")
        );
        const quantity = parseInt(
          card.querySelector(".quantity").textContent
        );
        totalPrice += unitPrice * quantity;
      });
  
      // Mise à jour du texte du prix total
      document.querySelector(".total").textContent = `${totalPrice} $`;
    }
  
    // Gestion des boutons plus et moins
    const plusIcons = document.querySelectorAll(".fa-plus-circle");
    const minusIcons = document.querySelectorAll(".fa-minus-circle");
  
    plusIcons.forEach((plusIcon) => {
      plusIcon.addEventListener("click", (event) => {
        const quantityElement = event.target.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice(); // Met à jour le prix total après modification de la quantité
      });
    });
  
    minusIcons.forEach((minusIcon) => {
      minusIcon.addEventListener("click", (event) => {
        const quantityElement = event.target.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantity--;
          quantityElement.textContent = quantity;
          updateTotalPrice(); // Met à jour le prix total après modification de la quantité
        }
      });
    });
  });
  