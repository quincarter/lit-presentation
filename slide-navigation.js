const slideCount = document.querySelectorAll('section').length;

const controls = function controls(event) {
  const isCover =
    window.location.hash === '' || window.location.hash === '#start';

  if (isCover) {
    start(event);
  } else {
    navigate(event);
  }
};

const start = function start(event) {
  if (
    event.code === 'Space' ||
    event.code === 'ArrowRight' ||
    event.code === 'Period'
  ) {
    window.location.hash = '#slide1';
  }
};

const navigate = function navigate(event) {
  const isFirstSlide = window.location.hash === '#slide1';
  const isLastSlide = window.location.hash === '#slide' + (slideCount - 1);
  const activeSlide = document.querySelector('[id^="slide"]:target');
  const slideNum = parseInt(activeSlide.getAttribute('id').substring(5));

  if (
    activeSlide &&
    !isLastSlide &&
    (event.code === 'Space' ||
      event.code === 'ArrowRight' ||
      event.code === 'PageDown')
  ) {
    window.location.hash = 'slide' + (slideNum + 1);
  }

  if (
    !isFirstSlide &&
    (event.code === 'ArrowLeft' || event.code === 'PageUp')
  ) {
    window.location.hash = 'slide' + (slideNum - 1);
  }

  if (isLastSlide && event.code === 'KeyR') {
    window.location.hash = '#start';
  }

  if (activeSlide && event.code === 'Period') {
    const winHash = window.location.hash;
    const activeList = document.querySelector(winHash + ' .revealable');

    if (activeList) {
      const listArray = _toConsumableArray(
        document.querySelectorAll(winHash + ' .revealable .fragment')
      );

      if (listArray[0]) {
        listArray[0].classList.remove('fragment');
      }
    }
  }

  if (activeSlide && event.code === 'Comma') {
    const _winHash = window.location.hash;

    const _activeList = document.querySelector(_winHash + ' .revealable');

    if (_activeList) {
      const _listArray = _toConsumableArray(
        document.querySelectorAll(_winHash + ' .revealable li')
      );

      const hideList = _listArray.forEach(function (list) {
        list.classList.add('fragment');
      });

      return hideList;
    }
  }
};

const launchFullscreen = function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
};

const toggleFullScreen = function toggleFullScreen(event) {
  if (event.code === 'KeyF') {
    console.log('launching fullscreen');
    launchFullscreen(document.documentElement);
  }
};

document.body.addEventListener('keydown', controls, false);
document.addEventListener('keydown', toggleFullScreen, false);

const exitFullscreen = function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};
