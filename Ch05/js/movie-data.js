export const movies = [
  {
    title: 'Avatar: The way of water',
    image: './media/avatar-way-of-water.jpg',
  },
  {
    title: 'Detective Knight Rogue',
    image: './media/detective-knight-rogue.jpg',
  },
  {
    title: 'Matilda: The musical',
    image: './media/matilda-the-musical.jpg',
  },
  {
    title: 'Prey for the devil',
    image: './media/prey-for-the-devil.jpg',
  },
  {
    title: 'Puss in boots: The last wish',
    image: './media/puss-in-boots-the-last-wish.jpg',
  },
  {
    title: 'Strange world',
    image: './media/strange-world.jpg',
  },
  {
    title: 'The woman king',
    image: './media/the-woman-king.jpg',
  },
  {
    title: 'Violent night',
    image: './media/violent-night.jpg',
  },
];

/**
 * Render the given array of movie objects into the current view
 *
 * @export
 * @param {[movie]} list
 */
export function renderMovies(movieList) {

  const movieContainer = document.querySelector('#movie-container');

  for (const movie of movieList) {

    const card = document.createElement('div');
    card.classList.add('movie-container__movie-card');
    const poster = document.createElement('img');
    poster.classList.add('movie-container__movie-card__poster');
    poster.src = movie.image;
    poster.alt = 'Poster of the movie ' + movie.title;
    const title = document.createElement('h2');
    title.classList.add('movie-container__movie-card__title');
    title.innerText = movie.title;
    card.appendChild(poster);
    card.appendChild(title);

    movieContainer.appendChild(card);
  }
}