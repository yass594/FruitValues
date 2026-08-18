/* =========================================================
   FRUITVALUES — DATABASE
========================================================= */

const items = [

  /* =========================
     ALL FRUITS
  ========================= */

  { name: "Rocket", value: "5K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/c/cb/Rocket_Fruit.png" },
  { name: "Spin", value: "7.5K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/8/88/Spin_Fruit.png/revision/latest?cb=20231027120258" },
  { name: "Blade", value: "50K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/0/01/Blade_Fruit.png/revision/latest?cb=20241215033604" },
  { name: "Spring", value: "60K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/8/8a/Spring_Fruit.png/revision/latest/scale-to-width-down/110?cb=20231027120418" },
  { name: "Bomb", value: "80K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/4/43/Bomb_Fruit.png/revision/latest/scale-to-width-down/110?cb=20240304195914" },
  { name: "Smoke", value: "100K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/7/7e/Smoke_Fruit.png/revision/latest/scale-to-width-down/110?cb=20231027120224" },
  { name: "Spike", value: "180K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/c/ce/Spike_Fruit.png/revision/latest/scale-to-width-down/110?cb=20231027120251" },
  { name: "Flame", value: "250K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/c/c4/Flame_Fruit.png/revision/latest/scale-to-width-down/110?cb=20250421150742" },
  { name: "Dark", value: "400K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/5/5c/Dark_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260806235544" },
  { name: "Sand", value: "420K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/7/72/Sand_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260806235551" },
  { name: "Ice", value: "550K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/c/c5/Ice_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260806235854" },
  { name: "Rubber", value: "700K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/5/5c/Rubber_Fruit.png/revision/latest/scale-to-width-down/110?cb=20231027120046" },
  { name: "Eagle", value: "800K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/5/53/Eagle_Fruit.png/revision/latest/scale-to-width-down/110?cb=20250418030931" },
  { name: "Ghost", value: "800K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/8/8c/Ghost_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260806235824" },
  { name: "Light", value: "800K", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/8/83/Light_Fruit.png/revision/latest/scale-to-width-down/110?cb=20231027115623" },
  { name: "Diamond", value: "1M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/8/88/Diamond_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260806235654" },
  { name: "Quake", value: "1M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/4/42/Quake_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260807000132" },
  { name: "Magma", value: "1.15M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/2/27/Magma_Fruit.png/revision/latest/scale-to-width-down/110?cb=20231027115640" },
  { name: "Love", value: "1.5M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/b/b3/Love_Fruit.png/revision/latest/scale-to-width-down/110?cb=20231027115630" },
  { name: "Spider", value: "1.5M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/6/61/Spider_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260806235623" },
  { name: "Sound", value: "2.5M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/b/ba/Sound_Fruit.png/revision/latest/scale-to-width-down/110?cb=20231027120231" },
  { name: "Phoenix", value: "2.75M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/f/fc/Phoenix_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260807000100" },
  { name: "Creation", value: "2.5M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/4/44/Creation_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260626022311" },
  { name: "Blizzard", value: "5M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/c/c9/Blizzard_Fruit.png/revision/latest/scale-to-width-down/110?cb=20231027115313" },
  { name: "Shadow", value: "6.5M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/5/58/Shadow_Fruit.png/revision/latest/scale-to-width-down/110?cb=20241229033053" },
  { name: "Buddha", value: "10M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/d/df/Buddha_Fruit.png/revision/latest/scale-to-width-down/110?cb=20231027115325" },
  { name: "Portal", value: "10M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/8/8a/Portal_Fruit.png/revision/latest/scale-to-width-down/110?cb=20231027115746" },
  { name: "Spirit", value: "10M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/6/66/Spirit_Fruit.png/revision/latest/scale-to-width-down/110?cb=20240304190559" },
  { name: "Mammoth", value: "10M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/9/95/Mammoth_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260806235956" },
  { name: "Gravity", value: "10M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/5/5f/Gravity_Fruit.png/revision/latest/scale-to-width-down/110?cb=20250418030958" },
  { name: "Pain", value: "10M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/4/40/Pain_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260807000029" },
  { name: "T-Rex", value: "20M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/d/d9/T-Rex_Fruit.png/revision/latest/scale-to-width-down/110?cb=20231226191220" },
  { name: "Venom", value: "20M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/d/d2/Venom_Fruit.png/revision/latest/scale-to-width-down/110?cb=20231027120425" },
  { name: "Dough", value: "30M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/0/02/Dough_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260806235727" },
  { name: "Lightning", value: "50M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/7/78/Lightning_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260806235926" },
  { name: "Gas", value: "60M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/e/ed/Gas_Fruit.png/revision/latest/scale-to-width-down/110?cb=20241223162315" },
  { name: "Yeti", value: "120M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/2/2f/Yeti_Fruit.png/revision/latest/scale-to-width-down/110?cb=20260806232444" },
  { name: "Tiger", value: "130M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/1/14/Tiger_Fruit.png/revision/latest/scale-to-width-down/110?cb=20251101005924" },
  { name: "Control", value: "160M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/1/19/Control_Fruit.png/revision/latest/scale-to-width-down/110?cb=20251223165924" },
  { name: "Kitsune", value: "640M", category: "fruit", image: "https://static.wikia.nocookie.net/roblox-blox-piece/images/6/65/Kitsune_Fruit.png/revision/latest/scale-to-width-down/110?cb=20241223162956" },
  { name: "East Dragon", value: "3.36B", category: "fruit", image: "https://i.postimg.cc/gkzHzzjS/East-Dragon.png" },
  { name: "West Dragon", value: "3.91B", category: "fruit", image: "https://i.postimg.cc/7LfBxxs8/West-Dragon.png" },


  /* =========================
     GAME PASS
  ========================= */

  { name: "Fast Boats", value: "300M", category: "gamepass", image: "https://i.postimg.cc/NjV6kR4S/Fast-Boats.png" },
  { name: "2x Boss Drops", value: "300M", category: "gamepass", image: "https://i.postimg.cc/HxMBy616/2x-Boss-Drops.png" },
  { name: "2x Money", value: "450M", category: "gamepass", image: "https://i.postimg.cc/rsLgC58M/2x-Money.png" },
  { name: "2x Mastery", value: "450M", category: "gamepass", image: "https://i.postimg.cc/0jdntrQm/2x-Mastery.png" },
  { name: "+1 Fruit Storage", value: "450M", category: "gamepass", image: "https://i.postimg.cc/hj7pmcdF/1-Fruit-Storage.png" },
  { name: "Legendary Scrolls", value: "680M", category: "gamepass", image: "https://i.postimg.cc/YqDYtQJ0/Legendary-Scrolls.png" },
  { name: "Mythical Scrolls", value: "1.59B", category: "gamepass", image: "https://i.postimg.cc/d3HktKNp/Mythical-Scrolls.png" },
  { name: "Dark Blade", value: "1.02B", category: "gamepass", image: "https://i.postimg.cc/fLYfLkYF/Dark-Blade.png" },
  { name: "Fruit Notifier", value: "4.79B", category: "gamepass", image: "https://i.postimg.cc/Zqdr70sR/Fruit-Notifer.png" },


  /* =========================
     LIMITEDS
  ========================= */

  { name: "Orange Portal", value: "N/A", category: "limited" },
  { name: "Nuclear Bomb", value: "610M", category: "limited" },
  { name: "Thermite Bomb", value: "580M", category: "limited" },
  { name: "Azura Bomb", value: "640M", category: "limited" },
  { name: "Celebration Bomb", value: "10M", category: "limited" },

  { name: "Eagle Matrix", value: "250M", category: "limited" },
  { name: "Eagle Glacier", value: "20M", category: "limited" },
  { name: "Eagle Requiem", value: "160M", category: "limited" },

  { name: "Celestial Pain", value: "1.02B", category: "limited" },
  { name: "Frustration Pain", value: "900M", category: "limited" },
  { name: "Sadness Pain", value: "860M", category: "limited" },
  { name: "Torment Pain", value: "160M", category: "limited" },
  { name: "Super Spirit Pain", value: "3.3B", category: "limited" },

  { name: "Ecipse", value: "N/A", category: "limited" },
  { name: "Dragon Token", value: "N/A", category: "limited" },

  { name: "Ruby Diamond", value: "160M", category: "limited" },
  { name: "Topaz Diamond", value: "220M", category: "limited" },
  { name: "Emerald Diamond", value: "220M", category: "limited" },
  { name: "Rose Quartz Diamond", value: "350M", category: "limited" },

  { name: "Werewolf", value: "1.06B", category: "limited" },

  { name: "Green Lightning", value: "410M", category: "limited" },
  { name: "Yellow Lightning", value: "1.76B", category: "limited" },
  { name: "Red Lightning", value: "2.88B", category: "limited" },

  { name: "Parrot", value: "N/A", category: "limited" },
  { name: "Purple Lightning", value: "5.34B", category: "limited" },

  { name: "Divine Portal", value: "1.67B", category: "limited" },

  { name: "MEME-FRUIT", value: "4.61B", category: "limited" },

  { name: "Crimson Kitsune", value: "8.7B", category: "limited" },
  { name: "Ember West Dragon", value: "7.1B", category: "limited" },
  { name: "Galaxy Empyrean Kitsune", value: "11.96B", category: "limited" },

  { name: "Fiend Yeti", value: "960M", category: "limited" },

  { name: "Dog Blade", value: "580M", category: "limited" },
  { name: "Rabid Dog Blade", value: "6.24B", category: "limited" },
  { name: "Dog House (Frame Break)", value: "6.97B", category: "limited" },

  { name: "Permanent Dragon Token", value: "N/A", category: "limited" }

];


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

const valuesList =
  document.getElementById("valuesList");

const searchInput =
  document.getElementById("searchInput");

let currentCategory = "fruit";


/* =========================================================
   AFFICHAGE IMAGE
========================================================= */

function createImage(item) {

  if (!item.image) {

    return `
      <div class="image-placeholder">
        🍎
      </div>
    `;

  }

  // Correction : Wikia exige /revision/latest pour servir l'image correctement
  const fixedSrc = item.image.includes("/revision/")
    ? item.image
    : item.image + "/revision/latest";

  return `
    <img
      src="${fixedSrc}"
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
   AFFICHAGE
========================================================= */

function displayValues() {

  if (!valuesList) return;

  const search =
    searchInput
      ? searchInput.value.toLowerCase().trim()
      : "";


  valuesList.innerHTML = "";


  const filteredItems =
    items.filter(function(item) {

      const correctCategory =
        item.category === currentCategory;

      const correctSearch =
        item.name
          .toLowerCase()
          .includes(search);

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

    const card =
      document.createElement("div");

    card.className =
      "value-card";


    card.innerHTML = `

      <div class="value-image">

        ${createImage(item)}

      </div>

      <div class="value-info">

        <h3>
          ${item.name}
        </h3>

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
   AJOUTER UNE LIGNE DE TRADE
========================================================= */

function addTradeFruit(container) {

  const row =
    document.createElement("div");

  row.className =
    "trade-fruit-row";


  row.innerHTML = `

    <input
      type="text"
      class="trade-fruit-name"
      placeholder="Nom du fruit"
      list="fruitSuggestions"
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
    row.querySelector(
      ".trade-fruit-name"
    );

  const valueInput =
    row.querySelector(
      ".trade-fruit-value"
    );


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


      if (
        item &&
        item.value !== "N/A"
      ) {

        valueInput.value =
          item.value;

      }

      else {

        valueInput.value = "";

      }


      updateTotals();

    }
  );


  row.querySelector(
    ".remove-trade-fruit"
  ).addEventListener(
    "click",
    function() {

      row.remove();

      updateTotals();

    }
  );

}


/* =========================================================
   BOUTONS TRADE
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


    total +=
      valueToNumber(
        valueInput.value
      );

  });


  return total;

}


/* =========================================================
   TOTALS
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


  yourTotal.textContent =
    formatNumber(
      yourValue
    );


  theirTotal.textContent =
    formatNumber(
      theirValue
    );

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


      if (receive > offer) {

        tradeResult.textContent = "W";

      }

      else if (receive === offer) {

        tradeResult.textContent = "F";

      }

      else {

        tradeResult.textContent = "L";

      }

    }
  );

}
