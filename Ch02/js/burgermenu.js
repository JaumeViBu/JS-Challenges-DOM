/**
 * Toogles the state of burger menu, between open or closed
 *
 * @param {event} event
 * @export
 */
export function toogleBurgerMenu(event) {

  if (this.classList.contains('burger--open')) {

    this.classList.remove('burger--open');
    document.querySelector('.burger__links').classList.remove('burger__links--open');

  }
  else {

    this.classList.add('burger--open');
    document.querySelector('.burger__links').classList.add('burger__links--open');
  }
}