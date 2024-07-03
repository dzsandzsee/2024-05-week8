async function fetchData() {

const fetchResult = await fetch("https://swapi.dev/api/people/");
const data = await fetchResult.json();
console.log(data.results)
}
fetchData()


/* fetch("https://swapi.dev/api/people/")
    .then((response) =>  response.json())
    .then(data => console.log(data)) */
