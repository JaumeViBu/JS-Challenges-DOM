const targetStates = {
  targetAState: {
    id: 'targetA',
    actualShape: 'square',
    isChanging: false,
  },
  targetBState: {
    id: 'targetB',
    actualShape: 'square',
    isChanging: false,
  },
};

/**
 * If is not already changing, change the class of the other 
 * target starting off the css transition
 *
 * @param {event} event
 * @returns undefined
 */
function transformTarget(event) {

  const targetState = event.explicitOriginalTarget.id == 'targetA' ? targetStates.targetBState : targetStates.targetAState;

  if (targetState.isChanging) return;

  targetState.isChanging = true;
  const element = document.querySelector('#' + targetState.id);
  const newShape = targetState.actualShape == 'square' ? 'circle' : 'square';
  console.log(`new Shape: ${newShape}`);
  element.classList.add(newShape);
  element.classList.remove(targetState.actualShape);
  targetState.actualShape = newShape;
}

//hook event handlers for onClick to both targets
document.querySelector('#targetA').addEventListener('click', transformTarget);
document.querySelector('#targetB').addEventListener('click', transformTarget);

//on transition end, reflect that is not changing anymore in the state object
document.querySelector('#targetA').addEventListener('transitionend', () => targetStates.targetAState.isChanging = false);
document.querySelector('#targetB').addEventListener('transitionend', () => targetStates.targetBState.isChanging = false);