const characterComponent = (name, height, mass) => `
    <div class="character">
    <h2> Character: </h2>
    <p class="name">${name}</p>
    <p class="height">${height} cm</p>
    <p class="mass">${mass} kg</p>
    </div>
    `

const charactersComponent = (charactersData) => `
<div class ="characters">
${charactersData
    .map(characterData => characterComponent(characterData.name, characterData.height, characterData.mass))
    .join(" ")}
</div>`
async function fetchData() {

const fetchResult = await fetch("https://swapi.dev/api/people/");
const data = await fetchResult.json();
const characters = data.results

const rootElement = document.querySelector("#root")

rootElement.insertAdjacentHTML("beforeend", charactersComponent(characters))
rootElement.insertAdjacentHTML("beforeend", `<button class="fetch"> Loading more... </button>`)

const fetchButtonElement = document.querySelector("button.fetch")
fetchButtonElement.addEventListener("click", () => {
    console.log("click")
})
}
fetchData()

