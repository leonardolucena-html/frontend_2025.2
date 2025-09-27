const nameEl = document.getElementById("pokeName");
const imgEl = document.getElementById("pokeImg");

const nextBtn = document.getElementById("nextBtn");
const detailsBtn = document.getElementById("detailsBtn");
const detailsEl = document.getElementById("details");

const api = "https://pokeapi.co/api/v2/pokemon/";
let currentId = 1;
let currentData = null;

async function loadPokemon(id){
  const res = await fetch(api + id);
  const data = await res.json();
  currentData = data;
  // Meu pokemon
  console.log(data);

  nameEl.textContent = data.name;
  imgEl.src = data.sprites.front_default;
  detailsEl.classList.add("hidden");
}

function showDetails(){
  if(!currentData) return;
  
  detailsEl.innerHTML = `
    <p><strong>ID:</strong> ${currentData.id}</p>
    <p><strong>Tipos:</strong> ${currentData.types.map(t=>t.type.name).join(", ")}</p>
    <p><strong>HP:</strong> ${currentData.stats[0].base_stat}</p>
    <p><strong>Ataque:</strong> ${currentData.stats[1].base_stat}</p>
  `;
  detailsEl.classList.toggle("hidden");
}

nextBtn.addEventListener("click", ()=>{
  currentId++;
  loadPokemon(currentId);
});

detailsBtn.addEventListener("click", showDetails);

window.addEventListener("DOMContentLoaded", ()=> loadPokemon(currentId));
