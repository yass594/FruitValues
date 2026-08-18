/* =========================================================
   CONVERSION DES VALEURS
========================================================= */

function valueToNumber(value) {

  if (!value || value === "N/A") {
    return 0;
  }

  const cleanValue = String(value)
    .replace(",", ".")
    .trim()
    .toUpperCase();

  if (cleanValue.endsWith("B")) {
    return parseFloat(cleanValue) * 1000000000;
  }

  if (cleanValue.endsWith("M")) {
    return parseFloat(cleanValue) * 1000000;
  }

  if (cleanValue.endsWith("K")) {
    return parseFloat(cleanValue) * 1000;
  }

  return Number(cleanValue) || 0;
}


/* =========================================================
   FORMATAGE
========================================================= */

function formatNumber(number) {
  return Number(number).toLocaleString("fr-FR");
}


/* =========================================================
   LISTE DES VALEURS
========================================================= */

const valuesList = document.getElementById("valuesList");
const searchInput = document.getElementById("searchInput");

let currentCategory = "fruit";


/* =========================================================
   IMAGE
========================================================= */

function createImage(item) {

  if (!item.image) {
    return `
      <div class="image-placeholder">
        🍎
      </div>
    `;
  }

  return `
    <img
      src="${item.image}"
      alt="${item.name}"
      loading="lazy"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
    >

    <div
      class="image-placeholder"
      style="display:none;">
      🍎
    </div>
  `;
}


/* =========================================================
   AFFICHER LES CARTES
========================================================= */

function displayValues() {

  if (!valuesList) return;

  const search = searchInput
    ? searchInput.value.toLowerCase().trim()
    : "";

  valuesList.innerHTML = "";

  const filteredItems = items.filter(function(item) {

    const correctCategory =
      item.category === currentCategory;

    const correctSearch =
      item.name.toLowerCase().includes(search);

    return correctCategory && correctSearch;
  });


  if (filteredItems.length === 0) {

    valuesList.innerHTML = `
      <div class="no-results">
        Aucun élément trouvé.
      </div>
    `;

    return;
  }


  filteredItems.forEach(function(item) {

    const card = document.createElement("div");

    card.className = "value-card";

    card.innerHTML = `
      <div class="value-image">
        ${createImage(item)}
      </div>

      <div class="value-info">
        <h3>${item.name}</h3>

        <span class="value-number">
          ${item.value}
        </span>
      </div>
    `;

    valuesList.appendChild(card);
  });
}


displayValues();


/* =========================================================
   CATÉGORIES
========================================================= */

const categoryButtons =
  document.querySelectorAll(".category-btn");


categoryButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    categoryButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    currentCategory =
      button.dataset.category;

    if (searchInput) {
      searchInput.value = "";
    }

    displayValues();
  });

});


/* =========================================================
   RECHERCHE
========================================================= */

if (searchInput) {

  searchInput.addEventListener(
    "input",
    function() {
      displayValues();
    }
  );

}


/* =========================================================
   AJOUTER UN FRUIT
========================================================= */

const fruitName =
  document.getElementById("fruitName");

const fruitValue =
  document.getElementById("fruitValue");

const addFruitButton =
  document.getElementById("addFruitButton");


if (addFruitButton) {

  addFruitButton.addEventListener(
    "click",
    function() {

      const name =
        fruitName.value.trim();

      const value =
        Number(fruitValue.value);


      if (
        name === "" ||
        fruitValue.value === ""
      ) {

        alert(
          "Remplis le nom et la valeur du fruit !"
        );

        return;
      }


      if (value < 0) {

        alert(
          "La valeur ne peut pas être négative !"
        );

        return;
      }


      items.push({
        name: name,
        value: formatNumber(value),
        category: "fruit",
        custom: true,
        image: null
      });


      currentCategory = "fruit";


      categoryButtons.forEach(function(button) {

        button.classList.remove("active");

        if (
          button.dataset.category === "fruit"
        ) {
          button.classList.add("active");
        }

      });


      displayValues();


      fruitName.value = "";
      fruitValue.value = "";

    }
  );

}


/* =========================================================
   TRADE CALCULATOR
========================================================= */

const yourTradeList =
  document.getElementById("yourTradeList");

const theirTradeList =
  document.getElementById("theirTradeList");

const yourTotal =
  document.getElementById("yourTotal");

const theirTotal =
  document.getElementById("theirTotal");

const addYourFruit =
  document.getElementById("addYourFruit");

const addTheirFruit =
  document.getElementById("addTheirFruit");

const calculateTrade =
  document.getElementById("calculateTrade");

const tradeResult =
  document.getElementById("tradeResult");


/* =========================================================
   AJOUTER UNE LIGNE
========================================================= */

function addTradeFruit(container) {

  if (!container) return;

  const row =
    document.createElement("div");

  row.className =
    "trade-fruit-row";


  row.innerHTML = `

    <input
      type="text"
      class="trade-fruit-name"
      placeholder="Nom du fruit"
      autocomplete="off"
    >

    <input
      type="text"
      class="trade-fruit-value"
      placeholder="Valeur"
      readonly
    >

    <button
      class="remove-trade-fruit"
      type="button">
      ✕
    </button>

  `;


  container.appendChild(row);


  const nameInput =
    row.querySelector(".trade-fruit-name");

  const valueInput =
    row.querySelector(".trade-fruit-value");

  const removeButton =
    row.querySelector(".remove-trade-fruit");


  /* =========================
     CHERCHER LE FRUIT
  ========================= */

  nameInput.addEventListener(
    "input",
    function() {

      const name =
        nameInput.value
          .trim()
          .toLowerCase();


      const item =
        items.find(function(item) {

          return item.name
            .toLowerCase() === name;

        });


      if (item) {

        valueInput.value =
          item.value;

      } else {

        valueInput.value = "";

      }


      updateTotals();

    }
  );


  /* =========================
     SUPPRIMER
  ========================= */

  removeButton.addEventListener(
    "click",
    function() {

      row.remove();

      updateTotals();

    }
  );

}


/* =========================================================
   BOUTON AJOUTER — TON CÔTÉ
========================================================= */

if (addYourFruit) {

  addYourFruit.addEventListener(
    "click",
    function() {

      addTradeFruit(
        yourTradeList
      );

    }
  );

}


/* =========================================================
   BOUTON AJOUTER — SON CÔTÉ
========================================================= */

if (addTheirFruit) {

  addTheirFruit.addEventListener(
    "click",
    function() {

      addTradeFruit(
        theirTradeList
      );

    }
  );

}


/* =========================================================
   CALCUL TOTAL
========================================================= */

function calculateTotal(container) {

  if (!container) return 0;

  let total = 0;


  const rows =
    container.querySelectorAll(
      ".trade-fruit-row"
    );


  rows.forEach(function(row) {

    const valueInput =
      row.querySelector(
        ".trade-fruit-value"
      );


    if (valueInput) {

      total +=
        valueToNumber(
          valueInput.value
        );

    }

  });


  return total;

}


/* =========================================================
   METTRE À JOUR LES TOTALS
========================================================= */

function updateTotals() {

  const yourValue =
    calculateTotal(
      yourTradeList
    );


  const theirValue =
    calculateTotal(
      theirTradeList
    );


  if (yourTotal) {

    yourTotal.textContent =
      formatNumber(
        yourValue
      );

  }


  if (theirTotal) {

    theirTotal.textContent =
      formatNumber(
        theirValue
      );

  }

}


/* =========================================================
   W / F / L
========================================================= */

if (calculateTrade) {

  calculateTrade.addEventListener(
    "click",
    function() {

      const offer =
        calculateTotal(
          yourTradeList
        );


      const receive =
        calculateTotal(
          theirTradeList
        );


      if (
        offer <= 0 ||
        receive <= 0
      ) {

        alert(
          "Ajoute au moins un élément de chaque côté !"
        );

        return;
      }


      /* =========================
         RESET
      ========================= */

      tradeResult.classList.remove(
        "win",
        "fair",
        "lose"
      );


      /* =========================
         W / F / L
      ========================= */

      if (receive > offer) {

        tradeResult.textContent = "W";

        tradeResult.classList.add("win");

      }

      else if (receive === offer) {

        tradeResult.textContent = "F";

        tradeResult.classList.add("fair");

      }

      else {

        tradeResult.textContent = "L";

        tradeResult.classList.add("lose");

      }

    }
  );

}


/* =========================================================
   PREMIÈRES LIGNES DE TRADE
========================================================= */

if (
  yourTradeList &&
  yourTradeList.children.length === 0
) {
  addTradeFruit(yourTradeList);
}


if (
  theirTradeList &&
  theirTradeList.children.length === 0
) {
  addTradeFruit(theirTradeList);
}


updateTotals();
