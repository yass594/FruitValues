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
   TRADE CALCULATOR — SELECTEUR AVEC IMAGES
========================================================= */

const yourTradeList = document.getElementById("yourTradeList");
const theirTradeList = document.getElementById("theirTradeList");

const yourTotal = document.getElementById("yourTotal");
const theirTotal = document.getElementById("theirTotal");

const addYourFruit = document.getElementById("addYourFruit");
const addTheirFruit = document.getElementById("addTheirFruit");

const calculateTrade = document.getElementById("calculateTrade");
const tradeResult = document.getElementById("tradeResult");


/* =========================================================
   COTE ACTUELLE
========================================================= */

let currentTradeContainer = null;


/* =========================================================
   CREER LE SELECTEUR
========================================================= */

const selectorOverlay = document.createElement("div");

selectorOverlay.className = "trade-selector-overlay";

selectorOverlay.style.display = "none";

selectorOverlay.innerHTML = `

  <div class="trade-selector">

    <div class="trade-selector-header">

      <div>
        <span>TRADE CALCULATOR</span>
        <h3>Choisir un élément</h3>
      </div>

      <button
        type="button"
        id="closeTradeSelector">
        ✕
      </button>

    </div>


    <div class="trade-selector-tabs">

      <button
        type="button"
        class="selector-tab active"
        data-selector-category="fruit">
        🍎 Fruits
      </button>

      <button
        type="button"
        class="selector-tab"
        data-selector-category="gamepass">
        🎟️ Game Pass
      </button>

      <button
        type="button"
        class="selector-tab"
        data-selector-category="limited">
        ⭐ Limiteds
      </button>

    </div>


    <div class="trade-selector-search">

      <span>🔎</span>

      <input
        type="text"
        id="tradeSelectorSearch"
        placeholder="Rechercher un élément...">

    </div>


    <div
      class="trade-selector-grid"
      id="tradeSelectorGrid">
    </div>


    <div
      class="trade-selector-selected"
      id="tradeSelectorSelected">

      <div class="selected-preview">

        <div
          class="selected-image"
          id="selectedTradeImage">
          🍎
        </div>

        <div class="selected-info">

          <strong id="selectedTradeName">
            Sélectionne un élément
          </strong>

          <span id="selectedTradeValue">
            Valeur : -
          </span>

        </div>

      </div>


      <button
        type="button"
        id="addSelectedTrade">
        Ajouter au trade
      </button>

    </div>

  </div>

`;


document.body.appendChild(selectorOverlay);


/* =========================================================
   ELEMENTS SELECTEUR
========================================================= */

const closeTradeSelector =
  document.getElementById("closeTradeSelector");

const tradeSelectorGrid =
  document.getElementById("tradeSelectorGrid");

const tradeSelectorSearch =
  document.getElementById("tradeSelectorSearch");

const selectorTabs =
  document.querySelectorAll(".selector-tab");

const selectedTradeName =
  document.getElementById("selectedTradeName");

const selectedTradeValue =
  document.getElementById("selectedTradeValue");

const selectedTradeImage =
  document.getElementById("selectedTradeImage");

const addSelectedTrade =
  document.getElementById("addSelectedTrade");


let selectorCategory = "fruit";
let selectedTradeItem = null;


/* =========================================================
   OUVRIR LE SELECTEUR
========================================================= */

function openTradeSelector(container) {

  currentTradeContainer = container;

  selectedTradeItem = null;

  selectorCategory = "fruit";

  tradeSelectorSearch.value = "";

  selectorTabs.forEach(function(tab) {

    tab.classList.remove("active");

    if (
      tab.dataset.selectorCategory === "fruit"
    ) {

      tab.classList.add("active");

    }

  });


  selectedTradeName.textContent =
    "Sélectionne un élément";

  selectedTradeValue.textContent =
    "Valeur : -";

  selectedTradeImage.innerHTML =
    "🍎";


  selectorOverlay.style.display = "flex";

  displayTradeSelector();

}


/* =========================================================
   FERMER
========================================================= */

function closeSelector() {

  selectorOverlay.style.display = "none";

  currentTradeContainer = null;

  selectedTradeItem = null;

}


closeTradeSelector.addEventListener(
  "click",
  closeSelector
);


selectorOverlay.addEventListener(
  "click",
  function(event) {

    if (event.target === selectorOverlay) {

      closeSelector();

    }

  }
);


/* =========================================================
   AFFICHER LES ELEMENTS
========================================================= */

function displayTradeSelector() {

  const search =
    tradeSelectorSearch.value
      .toLowerCase()
      .trim();


  tradeSelectorGrid.innerHTML = "";


  const filteredItems =
    items.filter(function(item) {

      return (
        item.category === selectorCategory &&
        item.name
          .toLowerCase()
          .includes(search)
      );

    });


  if (filteredItems.length === 0) {

    tradeSelectorGrid.innerHTML = `

      <div class="no-results">

        Aucun élément trouvé.

      </div>

    `;

    return;

  }


  filteredItems.forEach(function(item) {

    const card =
      document.createElement("button");

    card.type = "button";

    card.className =
      "trade-selector-item";


    card.innerHTML = `

      <div class="selector-item-image">

        ${
          item.image

          ?

          `
          <img
            src="${item.image}"
            alt="${item.name}"
            onerror="
              this.style.display='none';
              this.nextElementSibling.style.display='flex';
            "
          >

          <div
            class="image-placeholder"
            style="display:none;">
            🍎
          </div>
          `

          :

          `
          <div class="image-placeholder">
            🍎
          </div>
          `
        }

      </div>


      <div class="trade-selector-item-name">

        ${item.name}

      </div>


      <div class="trade-selector-item-value">

        ${item.value}

      </div>

    `;


    card.addEventListener(
      "click",
      function() {

        selectTradeItem(item);

      }
    );


    tradeSelectorGrid.appendChild(card);

  });

}


/* =========================================================
   RECHERCHE SELECTEUR
========================================================= */

tradeSelectorSearch.addEventListener(
  "input",
  function() {

    displayTradeSelector();

  }
);


/* =========================================================
   TABS
========================================================= */

selectorTabs.forEach(function(tab) {

  tab.addEventListener(
    "click",
    function() {

      selectorTabs.forEach(function(otherTab) {

        otherTab.classList.remove("active");

      });


      tab.classList.add("active");


      selectorCategory =
        tab.dataset.selectorCategory;


      tradeSelectorSearch.value = "";


      selectedTradeItem = null;


      selectedTradeName.textContent =
        "Sélectionne un élément";

      selectedTradeValue.textContent =
        "Valeur : -";

      selectedTradeImage.innerHTML =
        "🍎";


      displayTradeSelector();

    }
  );

});


/* =========================================================
   SELECTIONNER UN ELEMENT
========================================================= */

function selectTradeItem(item) {

  selectedTradeItem = item;


  selectedTradeName.textContent =
    item.name;


  selectedTradeValue.textContent =
    "Valeur : " + item.value;


  if (item.image) {

    selectedTradeImage.innerHTML = `

      <img
        src="${item.image}"
        alt="${item.name}"
        onerror="
          this.style.display='none';
          this.nextElementSibling.style.display='flex';
        "
      >

      <div
        class="image-placeholder"
        style="display:none;">
        🍎
      </div>

    `;

  } else {

    selectedTradeImage.innerHTML = `
      🍎
    `;

  }

}


/* =========================================================
   AJOUTER AU TRADE
========================================================= */

addSelectedTrade.addEventListener(
  "click",
  function() {

    if (
      !selectedTradeItem ||
      !currentTradeContainer
    ) {

      return;

    }


    addSelectedItemToTrade(
      currentTradeContainer,
      selectedTradeItem
    );


    closeSelector();

  }
);


/* =========================================================
   AJOUTER UN ELEMENT AU COTE
========================================================= */

function addSelectedItemToTrade(
  container,
  item
) {

  const row =
    document.createElement("div");

  row.className =
    "trade-fruit-row";


  row.innerHTML = `

    <div class="trade-selected-mini">

      ${
        item.image

        ?

        `
        <img
          src="${item.image}"
          alt="${item.name}"
          onerror="
            this.style.display='none';
            this.nextElementSibling.style.display='flex';
          "
        >

        <div
          class="image-placeholder"
          style="display:none;">
          🍎
        </div>
        `

        :

        `
        <div class="image-placeholder">
          🍎
        </div>
        `
      }

    </div>


    <input
      type="text"
      class="trade-fruit-name"
      value="${item.name}"
      readonly
    >


    <input
      type="text"
      class="trade-fruit-value"
      value="${item.value}"
      readonly
    >


    <button
      class="remove-trade-fruit"
      type="button">
      ✕
    </button>

  `;


  container.appendChild(row);


  const removeButton =
    row.querySelector(
      ".remove-trade-fruit"
    );


  removeButton.addEventListener(
    "click",
    function() {

      row.remove();

      updateTradeTotals();

    }
  );


  updateTradeTotals();

}


/* =========================================================
   BOUTONS + DU TRADE
========================================================= */

if (addYourFruit) {

  addYourFruit.addEventListener(
    "click",
    function() {

      openTradeSelector(
        yourTradeList
      );

    }
  );

}


if (addTheirFruit) {

  addTheirFruit.addEventListener(
    "click",
    function() {

      openTradeSelector(
        theirTradeList
      );

    }
  );

}


/* =========================================================
   CALCULER TOTAL
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
   TOTALS
========================================================= */

function updateTradeTotals() {

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


      tradeResult.classList.remove(
        "win",
        "fair",
        "lose"
      );


      if (receive > offer) {

        tradeResult.textContent = "W";

        tradeResult.classList.add(
          "win"
        );

      }

      else if (receive === offer) {

        tradeResult.textContent = "F";

        tradeResult.classList.add(
          "fair"
        );

      }

      else {

        tradeResult.textContent = "L";

        tradeResult.classList.add(
          "lose"
        );

      }

    }
  );

}


/* =========================================================
   ESC POUR FERMER
========================================================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Escape" &&
      selectorOverlay.style.display === "flex"
    ) {

      closeSelector();

    }

  }
);


/* =========================================================
   CSS DU SELECTEUR AJOUTE PAR JS
========================================================= */

const tradeSelectorStyle =
  document.createElement("style");


tradeSelectorStyle.textContent = `

  .trade-selector-tabs {

    display: flex;

    gap: 8px;

    padding: 0 22px 15px;

    border-bottom: 1px solid #29293e;

  }


  .selector-tab {

    padding: 10px 16px;

    border: 1px solid #303047;

    border-radius: 9px;

    background: #151522;

    color: #aaaabd;

    font-weight: 700;

    cursor: pointer;

  }


  .selector-tab:hover {

    color: white;

    border-color: #7c4dff;

  }


  .selector-tab.active {

    background: #7c4dff;

    border-color: #7c4dff;

    color: white;

  }


  .trade-selector-selected {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 15px;

    padding: 15px 22px;

    border-top: 1px solid #29293e;

    background: #0f0f19;

  }


  .selected-preview {

    display: flex;

    align-items: center;

    gap: 12px;

    min-width: 0;

  }


  .selected-image {

    width: 55px;

    height: 55px;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    border-radius: 10px;

    background: #151522;

    border: 1px solid #29293e;

  }


  .selected-image img {

    width: 45px;

    height: 45px;

    object-fit: contain;

  }


  .selected-info {

    display: flex;

    flex-direction: column;

    gap: 5px;

  }


  .selected-info strong {

    color: white;

  }


  .selected-info span {

    color: #a78bfa;

    font-size: 13px;

    font-weight: 800;

  }


  #addSelectedTrade {

    padding: 12px 18px;

    border: none;

    border-radius: 9px;

    background: #7c4dff;

    color: white;

    font-weight: 800;

    cursor: pointer;

    white-space: nowrap;

  }


  #addSelectedTrade:hover {

    background: #936fff;

    transform: translateY(-1px);

  }


  .selector-item-image {

    width: 70px;

    height: 70px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 12px;

    background: #0f0f19;

    border: 1px solid #29293e;

  }


  .selector-item-image img {

    width: 60px;

    height: 60px;

    object-fit: contain;

  }


  .trade-selected-mini {

    width: 38px;

    height: 38px;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

  }


  .trade-selected-mini img {

    width: 36px;

    height: 36px;

    object-fit: contain;

  }


  @media (max-width: 700px) {

    .trade-selector-tabs {

      overflow-x: auto;

      padding-left: 15px;

      padding-right: 15px;

    }


    .trade-selector-selected {

      flex-direction: column;

      align-items: stretch;

      padding: 15px;

    }


    #addSelectedTrade {

      width: 100%;

    }

  }

`;


document.head.appendChild(
  tradeSelectorStyle
);
