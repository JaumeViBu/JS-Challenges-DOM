const filterInput = document.querySelector('#list__input-filter');

//on keyup event
filterInput.addEventListener('keyup', (evt) => {

  filterList(evt.target.value);
});

/**
 * Filters the contents of the list that include the given substring
 *
 * @param {*} substr
 */
function filterList(substr) {

  const content = document.querySelectorAll('#list>li');

  content.forEach(li => {
    if (li.innerText.toLowerCase().includes(substr.toLowerCase())) {
      li.style.display = 'list-item';
    } else {
      li.style.display = 'none';
    }
  });
}