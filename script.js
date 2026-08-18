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

  { name: "Orange Portal", value: "N/A", category: "limited", image: "https://i.postimg.cc/RhvjdZB9/placeholder.png" },
  { name: "Nuclear Bomb", value: "610M", category: "limited", image: "https://i.postimg.cc/QNQdjNvs/Nuclear-Bomb.png" },
  { name: "Thermite Bomb", value: "580M", category: "limited", image: "https://i.postimg.cc/T2V3T2Bf/Thermite-Bomb.png" },
  { name: "Azura Bomb", value: "640M", category: "limited", image: "https://i.postimg.cc/PfW5df9K/Azura-Bomb.png" },
  { name: "Celebration Bomb", value: "10M", category: "limited", image: "https://i.postimg.cc/Jh4xrpf6/Celebration-Bomb.png" },
  { name: "Eagle Matrix", value: "250M", category: "limited", image: "https://i.postimg.cc/446xX4qD/Eagle-Matrix.png" },
  { name: "Eagle Glacier", value: "20M", category: "limited", image: "https://i.postimg.cc/qBsvpBWV/Eagle-Glacier.png" },
  { name: "Eagle Requiem", value: "160M", category: "limited", image: "https://i.postimg.cc/7P3ZqPjr/Eagle-Requiem.png" },
  { name: "Celestial Pain", value: "1.02B", category: "limited", image: "https://i.postimg.cc/RC7ZvC2r/Celestial-Pain.png" },
  { name: "Frustration Pain", value: "900M", category: "limited", image: "https://i.postimg.cc/26WCvwZP/Frustration.png" },
  { name: "Sadness Pain", value: "860M", category: "limited", image: "https://i.postimg.cc/C5VS4qCd/Sadness.png" },
  { name: "Torment Pain", value: "160M", category: "limited", image: "https://i.postimg.cc/T1qGN3Q0/Torment.png" },
  { name: "Super Spirit Pain", value: "3.3B", category: "limited", image: "https://i.postimg.cc/Xv7LjsRD/Super-Spirit-Pain.png" },
  { name: "Ecipse", value: "N/A", category: "limited", image: "https://i.postimg.cc/65MLTkG9/Eclipse.png" },
  { name: "Dragon Token", value: "N/A", category: "limited", image: "https://i.postimg.cc/hPYzkcd7/Dragon-Token.png" },
  { name: "Ruby Diamond", value: "160M", category: "limited", image: "https://i.postimg.cc/9XGMSFbY/Ruby.webp" },
  { name: "Topaz Diamond", value: "220M", category: "limited", image: "https://i.postimg.cc/VLgNfG3S/Topaz.webp" },
  { name: "Emerald Diamond", value: "220M", category: "limited", image: "https://i.postimg.cc/8zCzjdSZ/Emerald.webp" },
  { name: "Rose Quartz Diamond", value: "350M", category: "limited", image: "https://i.postimg.cc/02PQqRHR/Rose-Quartz.webp" },
  { name: "Werewolf", value: "1.06B", category: "limited", image: "https://i.postimg.cc/mr2jLmv5/Werewolf.png" },
  { name: "Green Lightning", value: "410M", category: "limited", image: "https://i.postimg.cc/MKcKbW5Z/Green-Lightning.png" },
  { name: "Yellow Lightning", value: "1.76B", category: "limited", image: "https://i.postimg.cc/cLwx2XPV/Yellow-Lightning.png" },
  { name: "Red Lightning", value: "2.88B", category: "limited", image: "https://i.postimg.cc/s2DmjTkH/Red-Lightning.png" },
  { name: "Parrot", value: "N/A", category: "limited", image: "https://i.postimg.cc/dt3ZNLLY/Parrot.png" },
  { name: "Purple Lightning", value: "5.34B", category: "limited", image: "https://i.postimg.cc/d0FsYGYD/Purple-Lightning.png" },
  { name: "Divine Portal", value: "1.67B", category: "limited", image: "https://i.postimg.cc/htF9sFwc/latest-cb-20251225222313.webp" },
  { name: "MEME-FRUIT", value: "4.61B", category: "limited", image: "https://i.postimg.cc/KYLd2W5J/latest-cb-20260402183037.webp" },
  { name: "Crimson Kitsune", value: "8.7B", category: "limited", image: "https://i.postimg.cc/dtg9fZh5/latest-cb-20251225145618.webp" },
  { name: "Ember West Dragon", value: "7.1B", category: "limited", image: "https://i.postimg.cc/k5JRY7vf/latest-cb-20251226164613.webp" },
  { name: "Galaxy Empyrean Kitsune", value: "11.96B", category: "limited", image: "https://i.postimg.cc/k5JRY7vf/latest-cb-20251226164613.webp" },
  { name: "Fiend Yeti", value: "960M", category: "limited", image: "https://i.postimg.cc/fbBmGbCv/latest-cb-20260214132352.webp" },
  { name: "Dog Blade", value: "580M", category: "limited", image: "https://i.postimg.cc/RhvjdZB9/placeholder.png" },
  { name: "Rabid Dog Blade", value: "6.24B", category: "limited", image: "https://i.postimg.cc/RhvjdZB9/placeholder.png" },
  { name: "Dog House (Frame Break)", value: "6.97B", category: "limited", image: "https://i.postimg.cc/RhvjdZB9/placeholder.png" },
  { name: "Permanent Dragon Token", value: "N/A", category: "limited", image: "https://i.postimg.cc/59nFmw9g/Permanent-Dragon-Token.png" }

];


/* =========================================================
   CONVERSION
========================================================= */

function valueToNumber(value) {

  if (!value || value === "N/A") {
    return 0;
  }

  let cleanValue = String(value)
    .replace(/\s/g, "")
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


function formatNumber(number) {
  return Number(number).toLocaleString("fr-FR");
}


/* =========================================================
   VALUES
========================================================= */

const valuesList = document.getElementById("valuesList");
const searchInput = document.getElementById("searchInput");

let currentCategory = "fruit";


function createImage(item) {

  if (!item.image) {
    return `<div class="image-placeholder">🍎</div>`;
  }

  return `
    <img
      src="${item.image}"
      alt="${item.name}"
      loading="lazy"
      onerror="
        this.style.display='none';
        if(this.nextElementSibling)
          this.nextElementSibling.style.display='flex';
      "
    >
    <div class="image-placeholder" style="display:none;">🍎</div>
  `;
}


function displayValues() {

  if (!valuesList) return;

  const search = searchInput
    ? searchInput.value.toLowerCase().trim()
    : "";

  valuesList.innerHTML = "";

  const filteredItems = items.filter(item =>
    item.category === currentCategory &&
    item.name.toLowerCase().includes(search)
  );

  if (filteredItems.length === 0) {

    valuesList.innerHTML = `
      <div class="no-results">
        Aucun élément trouvé.
      </div>
    `;

    return;
  }

  filteredItems.forEach(item => {

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
   CATEGORIES PRINCIPALES
========================================================= */

const categoryButtons =
  document.querySelectorAll(".category-btn");


categoryButtons.forEach(button => {

  button.addEventListener("click", () => {

    categoryButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    currentCategory =
      button.dataset.category;

    if (searchInput) {
      searchInput.value = "";
    }

    displayValues();

  });

});


if (searchInput) {

  searchInput.addEventListener("input", displayValues);

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


if (addFruitButton && fruitName && fruitValue) {

  addFruitButton.addEventListener("click", () => {

    const name = fruitName.value.trim();
    const value = Number(fruitValue.value);

    if (name === "" || fruitValue.value === "") {

      alert("Remplis le nom et la valeur du fruit !");

      return;
    }

    if (value < 0) {

      alert("La valeur ne peut pas être négative !");

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

    categoryButtons.forEach(button => {

      button.classList.remove("active");

      if (button.dataset.category === "fruit") {
        button.classList.add("active");
      }

    });

    displayValues();

    fruitName.value = "";
    fruitValue.value = "";

    updateTradeCounters();

  });

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
   COMPTEURS
========================================================= */

function updateTradeCounters() {

  const fruitCount =
    items.filter(item => item.category === "fruit").length;

  const gamepassCount =
    items.filter(item => item.category === "gamepass").length;

  const limitedCount =
    items.filter(item => item.category === "limited").length;

  const fruitCounter =
    document.getElementById("fruitCount");

  const gamepassCounter =
    document.getElementById("gamepassCount");

  const limitedCounter =
    document.getElementById("limitedCount");

  if (fruitCounter) {
    fruitCounter.textContent = fruitCount;
  }

  if (gamepassCounter) {
    gamepassCounter.textContent = gamepassCount;
  }

  if (limitedCounter) {
    limitedCounter.textContent = limitedCount;
  }

}


/* =========================================================
   SELECTEUR TRADE
========================================================= */

let currentTradeContainer = null;
let selectorCategory = "fruit";
let selectedTradeItem = null;


/* =========================================================
   CREER LE SELECTEUR
========================================================= */

const selectorOverlay =
  document.createElement("div");

selectorOverlay.className =
  "trade-selector-overlay";

selectorOverlay.style.display =
  "none";

selectorOverlay.innerHTML = `

  <div class="trade-selector">

    <div class="trade-selector-header">

      <div>

        <small>TRADE CALCULATOR</small>

        <h2>
          Choisir un élément
        </h2>

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
        <b id="fruitCount">0</b>

      </button>


      <button
        type="button"
        class="selector-tab"
        data-selector-category="gamepass">

        🎟️ Game Pass
        <b id="gamepassCount">0</b>

      </button>


      <button
        type="button"
        class="selector-tab"
        data-selector-category="limited">

        ⭐ Limiteds
        <b id="limitedCount">0</b>

      </button>

    </div>


    <div class="trade-selector-search">

      <span>🔎</span>

      <input
        type="text"
        id="tradeSelectorSearch"
        placeholder="Rechercher un élément..."
        autocomplete="off">

    </div>


    <div
      class="trade-selector-grid"
      id="tradeSelectorGrid">
    </div>


    <div class="trade-selector-selected">

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


updateTradeCounters();


/* =========================================================
   AFFICHER LE SELECTEUR
========================================================= */

function displayTradeSelector() {

  if (!tradeSelectorGrid) {
    return;
  }

  const search =
    tradeSelectorSearch
      ? tradeSelectorSearch.value.toLowerCase().trim()
      : "";

  tradeSelectorGrid.innerHTML = "";

  const filteredItems = items.filter(item => {

    return (
      item.category === selectorCategory &&
      item.name.toLowerCase().includes(search)
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


  filteredItems.forEach(item => {

    const card =
      document.createElement("button");

    card.type = "button";

    card.className =
      "trade-selector-item";


    let imageHTML;


    if (item.image) {

      imageHTML = `
        <img
          src="${item.image}"
          alt="${item.name}"
          loading="lazy"
          onerror="
            this.style.display='none';
            if(this.nextElementSibling)
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

      imageHTML = `
        <div class="image-placeholder">
          🍎
        </div>
      `;

    }


    card.innerHTML = `

      <div class="selector-item-image">
        ${imageHTML}
      </div>

      <div class="trade-selector-item-name">
        ${item.name}
      </div>

      <div class="trade-selector-item-value">
        ${item.value}
      </div>

    `;


    card.addEventListener("click", event => {

      event.preventDefault();
      event.stopPropagation();

      selectTradeItem(item);

    });


    tradeSelectorGrid.appendChild(card);

  });

}


/* =========================================================
   OUVRIR SELECTEUR
========================================================= */

function openTradeSelector(container) {

  if (!container) {
    return;
  }

  currentTradeContainer = container;

  selectedTradeItem = null;

  selectorCategory = "fruit";


  if (tradeSelectorSearch) {
    tradeSelectorSearch.value = "";
  }


  selectorTabs.forEach(tab => {

    tab.classList.remove("active");

    if (
      tab.dataset.selectorCategory === "fruit"
    ) {
      tab.classList.add("active");
    }

  });


  if (selectedTradeName) {
    selectedTradeName.textContent =
      "Sélectionne un élément";
  }


  if (selectedTradeValue) {
    selectedTradeValue.textContent =
      "Valeur : -";
  }


  if (selectedTradeImage) {
    selectedTradeImage.innerHTML = "🍎";
  }


  selectorOverlay.style.display =
    "flex";


  displayTradeSelector();

}


/* =========================================================
   FERMER
========================================================= */

function closeSelector() {

  selectorOverlay.style.display =
    "none";

  currentTradeContainer =
    null;

  selectedTradeItem =
    null;

}


if (closeTradeSelector) {

  closeTradeSelector.addEventListener(
    "click",
    event => {

      event.preventDefault();
      event.stopPropagation();

      closeSelector();

    }
  );

}


selectorOverlay.addEventListener(
  "click",
  event => {

    if (event.target === selectorOverlay) {
      closeSelector();
    }

  }
);


/* =========================================================
   RECHERCHE SELECTEUR
========================================================= */

if (tradeSelectorSearch) {

  tradeSelectorSearch.addEventListener(
    "input",
    displayTradeSelector
  );

}


/* =========================================================
   ONGLETS SELECTEUR
========================================================= */

selectorTabs.forEach(tab => {

  tab.addEventListener(
    "click",
    event => {

      event.preventDefault();
      event.stopPropagation();

      selectorTabs.forEach(otherTab =>
        otherTab.classList.remove("active")
      );

      tab.classList.add("active");

      selectorCategory =
        tab.dataset.selectorCategory;

      if (tradeSelectorSearch) {
        tradeSelectorSearch.value = "";
      }

      selectedTradeItem = null;

      if (selectedTradeName) {
        selectedTradeName.textContent =
          "Sélectionne un élément";
      }

      if (selectedTradeValue) {
        selectedTradeValue.textContent =
          "Valeur : -";
      }

      if (selectedTradeImage) {
        selectedTradeImage.innerHTML = "🍎";
      }

      displayTradeSelector();

    }
  );

});


/* =========================================================
   SELECTIONNER ITEM
========================================================= */

function selectTradeItem(item) {

  selectedTradeItem = item;


  if (selectedTradeName) {
    selectedTradeName.textContent =
      item.name;
  }


  if (selectedTradeValue) {
    selectedTradeValue.textContent =
      "Valeur : " + item.value;
  }


  if (!selectedTradeImage) {
    return;
  }


  if (item.image) {

    selectedTradeImage.innerHTML = `

      <img
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
        onerror="
          this.style.display='none';
          if(this.nextElementSibling)
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

    selectedTradeImage.innerHTML = "🍎";

  }

}


/* =========================================================
   AJOUTER ITEM AU TRADE
========================================================= */

if (addSelectedTrade) {

  addSelectedTrade.addEventListener(
    "click",
    event => {

      event.preventDefault();
      event.stopPropagation();

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

}


/* =========================================================
   AJOUTER LIGNE
========================================================= */

function addSelectedItemToTrade(
  container,
  item
) {

  if (!container || !item) {
    return;
  }


  const row =
    document.createElement("div");

  row.className =
    "trade-fruit-row";


  let imageHTML;


  if (item.image) {

    imageHTML = `
      <img
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
        onerror="
          this.style.display='none';
          if(this.nextElementSibling)
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

    imageHTML = `
      <div class="image-placeholder">
        🍎
      </div>
    `;

  }


  row.innerHTML = `

    <div class="trade-selected-mini">
      ${imageHTML}
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
    row.querySelector(".remove-trade-fruit");


  if (removeButton) {

    removeButton.addEventListener(
      "click",
      event => {

        event.preventDefault();
        event.stopPropagation();

        row.remove();

        updateTradeTotals();

      }
    );

  }


  updateTradeTotals();

}


/* =========================================================
   BOUTON + — TON COTE
========================================================= */

if (addYourFruit && yourTradeList) {

  addYourFruit.addEventListener(
    "click",
    event => {

      event.preventDefault();
      event.stopPropagation();

      openTradeSelector(yourTradeList);

    }
  );

}


/* =========================================================
   BOUTON + — SON COTE
========================================================= */

if (addTheirFruit && theirTradeList) {

  addTheirFruit.addEventListener(
    "click",
    event => {

      event.preventDefault();
      event.stopPropagation();

      openTradeSelector(theirTradeList);

    }
  );

}


/* =========================================================
   TOTAL
========================================================= */

function calculateTotal(container) {

  if (!container) {
    return 0;
  }


  let total = 0;


  const rows =
    container.querySelectorAll(
      ".trade-fruit-row"
    );


  rows.forEach(row => {

    const valueInput =
      row.querySelector(
        ".trade-fruit-value"
      );


    if (valueInput) {

      total += valueToNumber(
        valueInput.value
      );

    }

  });


  return total;

}


/* =========================================================
   UPDATE TOTALS
========================================================= */

function updateTradeTotals() {

  const yourValue =
    calculateTotal(yourTradeList);

  const theirValue =
    calculateTotal(theirTradeList);


  if (yourTotal) {
    yourTotal.textContent =
      formatNumber(yourValue);
  }


  if (theirTotal) {
    theirTotal.textContent =
      formatNumber(theirValue);
  }

}


/* =========================================================
   W / F / L
========================================================= */

if (calculateTrade) {

  calculateTrade.addEventListener(
    "click",
    event => {

      event.preventDefault();

      const offer =
        calculateTotal(yourTradeList);

      const receive =
        calculateTotal(theirTradeList);


      if (
        offer <= 0 ||
        receive <= 0
      ) {

        alert(
          "Ajoute au moins un élément de chaque côté !"
        );

        return;
      }


      if (!tradeResult) {
        return;
      }


      tradeResult.classList.remove(
        "win",
        "fair",
        "lose"
      );


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
   ESC
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      selectorOverlay.style.display === "flex"
    ) {

      closeSelector();

    }

  }
);


/* =========================================================
   STYLE DU SELECTEUR
========================================================= */

const tradeSelectorStyle =
  document.createElement("style");

tradeSelectorStyle.textContent = `

.trade-selector-overlay {

  position: fixed;
  inset: 0;
  z-index: 99999;

  display: none;

  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(0,0,0,.75);

  backdrop-filter: blur(8px);

}


.trade-selector {

  width: min(900px, 100%);
  max-height: 90vh;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  background: #10101b;

  border: 1px solid #29293e;
  border-radius: 18px;

  box-shadow: 0 25px 80px rgba(0,0,0,.65);

}


.trade-selector-header {

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 22px;

  border-bottom: 1px solid #29293e;

}


.trade-selector-header small {

  color: #8b5cf6;

  font-weight: 800;

  font-size: 11px;

}


.trade-selector-header h2 {

  margin: 5px 0 0;

  color: white;

}


#closeTradeSelector {

  width: 38px;
  height: 38px;

  border: 1px solid #303047;
  border-radius: 9px;

  background: #181824;

  color: white;

  font-size: 18px;

  cursor: pointer;

}


.trade-selector-tabs {

  display: flex;

  gap: 8px;

  padding: 15px 22px;

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


.selector-tab.active {

  background: #7c4dff;

  border-color: #7c4dff;

  color: white;

}


.selector-tab b {

  margin-left: 5px;

}


.trade-selector-search {

  display: flex;

  align-items: center;

  gap: 10px;

  margin: 15px 22px;

  padding: 0 14px;

  height: 45px;

  border: 1px solid #303047;
  border-radius: 10px;

  background: #151522;

}


.trade-selector-search input {

  width: 100%;
  height: 100%;

  border: none;
  outline: none;

  background: transparent;

  color: white;

  font-size: 14px;

}


.trade-selector-grid {

  display: grid;

  grid-template-columns:
    repeat(auto-fill, minmax(145px, 1fr));

  gap: 12px;

  padding: 0 22px 20px;

  overflow-y: auto;

  min-height: 180px;

}


.trade-selector-item {

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 8px;

  padding: 12px;

  border: 1px solid #29293e;
  border-radius: 12px;

  background: #151522;

  color: white;

  cursor: pointer;

}


.trade-selector-item:hover {

  transform: translateY(-2px);

  border-color: #7c4dff;

}


.selector-item-image {

  width: 75px;
  height: 75px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: #0d0d16;

  border: 1px solid #29293e;

}


.selector-item-image img {

  width: 65px;
  height: 65px;

  object-fit: contain;

}


.trade-selector-item-name {

  width: 100%;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;

  text-align: center;

  font-weight: 700;

}


.trade-selector-item-value {

  color: #a78bfa;

  font-size: 13px;

  font-weight: 800;

}


.trade-selector-selected {

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

  padding: 15px 22px;

  border-top: 1px solid #29293e;

  background: #0c0c14;

}


.selected-preview {

  display: flex;

  align-items: center;

  gap: 12px;

}


.selected-image {

  width: 55px;
  height: 55px;

  display: flex;

  align-items: center;
  justify-content: center;

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

}


.trade-selected-mini {

  width: 42px;
  height: 42px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

}


.trade-selected-mini img {

  width: 38px;
  height: 38px;

  object-fit: contain;

}


.image-placeholder {

  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  font-size: 25px;

}


.remove-trade-fruit {

  cursor: pointer;

  z-index: 10;

}


@media (max-width: 700px) {

  .trade-selector {

    max-height: 95vh;

  }

  .trade-selector-tabs {

    overflow-x: auto;

    padding-left: 15px;
    padding-right: 15px;

  }

  .trade-selector-grid {

    padding-left: 15px;
    padding-right: 15px;

    grid-template-columns:
      repeat(2, minmax(0, 1fr));

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


/* =========================================================
   FIN
========================================================= */

updateTradeTotals();
