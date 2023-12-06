const movieInput = document.querySelector('.container-search-input')
const buttonSearch = document.querySelector('.container-search-button')
const boxMovie = document.querySelector('.movie-box')


buttonSearch.addEventListener('click', () => {
    const movies = movieInput.value
    const key = 'aca9d35d'
    fetch(`https:www.omdbapi.com/?t=${movies}&apikey=${key}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            console.log()
            boxMovie.innerHTML =
                `
    <section class="grid gap-2 text-center place-items-center">
        <img class="w-1/2" src="${data.Poster}">
        <h1 class="font-bold text-3xl">${data.Title}</h1>
        <h3 class="font-bold">⭐ ${data.imdbRating}</h3>
    </section>
    
    <section class="flex gap-2 py-4 justify-center">
        <h3 class="data-info px-4">${data.Year}</h3>
        <h3 class="data-info px-4">${data.Runtime}</h3>
        <h3 class="data-info px-4">${data.Type}</h3>
    </section>
    
    <section class="grid gap-2">
        <article>
            <p class="font-bold text-xl">Plot</p>
            <p class="">${data.Plot}</p>
        </article>

        <article>
            <p class="font-bold text-xl">Cast</p>
            <p class="">${data.Actors}</p>
        </article>
    </section>
    <a class="button-go mt-4 rounded p-2 text-center w-1/2 font-bold" href="https://www.netflix.com/pe/" target="_blank">Comienza ya ></a>
    `
        })
})
