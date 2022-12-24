const targetStates = {
  targetAState: {
    id: 'targetA',
    actualShape: 'sq',
    radius: 0,
    bgColor: '#6d3f84',
    isChanging: false,
    interval: undefined,
  },
  targetBState: {
    id: 'targetB',
    actualShape: 'sq',
    radius: 0,
    bgColor: '#6d3f84',
    isChanging: false,
    interval: undefined,
  },
};


function updateTransforming(state) {

  if (state.actualShape == 'sq' && state.radius >= 50) {
    state.isChanging = false;
    state.radius = 50;
    state.actualShape = 'cr'
    clearInterval(state.interval);
    console.log('Done transforming ' + state.id);
    return;
  }
  if (state.actualShape == 'cr' && state.radius <= 0) {
    state.isChanging = false;
    state.radius = 0;
    state.actualShape = 'sq'
    clearInterval(state.interval);
    console.log('Done transforming ' + state.id);
    return;
  }

  state.radius += state.actualShape == 'sq' ? 2 : -2;

  document.querySelector('#' + state.id).style.borderRadius = state.radius + '%';
}

function transformTarget(event) {

  const targetState = event.explicitOriginalTarget.id == 'targetA' ? targetStates.targetBState : targetStates.targetAState;

  if (targetState.isChanging) return;
  targetState.isChanging = true;
  targetState.interval = setInterval(updateTransforming, 100, targetState);
}

//hook event handlers for onClick to both targets
document.querySelector('#targetA').addEventListener('click', transformTarget);
document.querySelector('#targetB').addEventListener('click', transformTarget);