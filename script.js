async function fetchData() {

const fetchResult = await fetch("https://swapi.dev/api/people/");
const data = await fetchResult.json();
const characters = data.results
const rootElement = document.querySelector("#root")
let charactersHtml = ""
/* for (let i = 0; i < characters.length; i++) {
    charactersHtml += `
    <div class="character">
    <p class="name">${characters[i].name}</p>
    <p class="height">${characters[i].height} cm</p>
    <p class="mass">${characters[i].mass} kg</p>
    </div>
    `
    
} */
characters.forEach((character) => {
    charactersHtml += `
    <div class="character">
    <p class="name">${character.name}</p>
    <p class="height">${character.height} cm</p>
    <p class="mass">${characters.mass} kg</p>
    </div>
    `
    
});
rootElement.insertAdjacentHTML("beforeend", charactersHtml)
}
fetchData()


/* fetch("https://swapi.dev/api/people/")
    .then((response) =>  response.json())
    .then(data => console.log(data)) */
