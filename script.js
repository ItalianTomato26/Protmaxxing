function updateTotalProtein() {
  const items = document.querySelectorAll(".row");
  let totalProtein = 0;

  items.forEach((item) => {
    const proteinPerItem = parseFloat(
      item.querySelector(".number").textContent
    );
    const quantity = parseFloat(
      item.querySelector(".itemQuantity").textContent
    ); // Konwertujemy na zmiennoprzecinkową liczbę
    totalProtein += proteinPerItem * quantity;
  });

  document.querySelector(".totalProtein").textContent =
    Math.floor(totalProtein) + "g";
}

// Wywołanie funkcji przy ładowaniu strony, aby zaktualizować początkową wartość
updateTotalProtein();

// Dodajmy obsługę zdarzeń kliknięcia na przyciski plus i minus
document.querySelectorAll(".minus").forEach((button) => {
  button.addEventListener("click", function () {
    const itemQuantity = this.nextElementSibling;
    let quantity = parseFloat(itemQuantity.textContent); // Konwertujemy na zmiennoprzecinkową liczbę
    if (quantity > 0) {
      itemQuantity.textContent = --quantity;
      updateTotalProtein();
    }
  });
});

document.querySelectorAll(".plus").forEach((button) => {
  button.addEventListener("click", function () {
    const itemQuantity = this.previousElementSibling;
    let quantity = parseFloat(itemQuantity.textContent); // Konwertujemy na zmiennoprzecinkową liczbę
    itemQuantity.textContent = ++quantity;
    updateTotalProtein();
  });
});
