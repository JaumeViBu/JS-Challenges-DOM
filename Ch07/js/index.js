
//add on focus out event to input username
document.querySelector('.form__input-username').addEventListener('focusout', evt => {
  console.log('focusout');
  const element = evt.target;

  let danger = false;

  danger = checkInputUsername();

  if (danger) addDangerMsg(element.parentElement, "El nom d'usuari és obligatori.\nHa de tenir al menys 8 caràcters.\nNomés pot contenir caràcters alfanumèrics.");
  else clearDangerMsg(element.parentElement);
});

//add on focus out event to input password
document.querySelector('.form__input-password').addEventListener('focusout', evt => {
  console.log('focusout');
  const element = evt.target;

  let danger = false;
  danger = checkInputPassword();

  if (danger) addDangerMsg(element.parentElement, "La contrasenya és obligatòria.\nHa de tenir al menys 8 caràcters.");
  else clearDangerMsg(element.parentElement);
});

//add on click event to submit button
document.querySelector('.form__btn-submit').addEventListener('click', evt => {
  console.log('click');
  evt.preventDefault();
  const inputUsername = document.querySelector('.form__input-username');
  const inputPassword = document.querySelector('.form__input-password');
  const inputMsg = document.querySelector('.form__input-msg');

  let danger = false;
  danger = checkInputUsername();
  if (danger) addDangerMsg(inputUsername.parentElement, "El nom d'usuari és obligatori.\nHa de tenir al menys 8 caràcters.\nNomés pot contenir caràcters alfanumèrics.");
  else clearDangerMsg(inputUsername.parentElement);
  danger = false;
  danger = checkInputPassword();
  if (danger) addDangerMsg(inputPassword.parentElement, "La contrasenya és obligatòria.\nHa de tenir al menys 8 caràcters.");
  else clearDangerMsg(inputPassword.parentElement);

  console.log(inputPassword.classList.contains('form__input--danger'));
  if (inputUsername.classList.contains('form__input--danger')
    || inputPassword.classList.contains('form__input--danger')) {
    return;
  }
  alert(`${inputUsername.value} ha accedit satisfactoriament.
${inputMsg.value.trim().length > 0 ? 'Missatge: ' + inputMsg.value.trim() : ''}`)
});

/**
 * Checks if theres danger in username input
 *
 * @returns true if theres danger, false otherwise
 */
function checkInputUsername() {

  const element = document.querySelector('.form__input-username');
  let danger = false;

  danger |= element.value.trim() == '';
  danger |= element.value.trim().length < 8;
  danger |= !/[a-zA-Z0-9]{8}/g.test(element.value);

  return danger;
}

/**
 * Checks if theres danger in password input
 *
 * @returns true if theres danger, false otherwise
 */
function checkInputPassword() {

  const element = document.querySelector('.form__input-password');
  let danger = false;

  danger |= element.value.trim() == '';
  danger |= element.value.trim().length < 8;

  return danger;
}

/**
 * Adds danger msg to the given element
 *
 * @param {*} element
 * @param {*} msg
 */
function addDangerMsg(element, msg) {

  if (!element.children[1].classList.contains('form__input--danger')) {

    element.children[1].classList.add('form__input--danger');
  }
  element.setAttribute("danger-msg", msg)
}
/**
 * Clears danger msg from the given element
 *
 * @param {*} element
 */
function clearDangerMsg(element) {
  if (element.children[1].classList.contains('form__input--danger')) {

    element.children[1].classList.remove('form__input--danger')
  }
  element.setAttribute("danger-msg", '')
}