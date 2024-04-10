import { css } from 'lit';

export const PresentationStyles = css`
section {
  width: 100%;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img,
video {
  max-width: 100%;
}

.start-image {
  width: 3rem;
}

.start-container {
  display: flex;
  place-items: center;
  flex-direction: column;
  font-family: 'Courier New', Courier, monospace;
}

h1 {
  font-size: 2em;
}

li {
  margin-bottom: 0.5em;
}

a {
  color: #1572b6;
  text-decoration: none;
  transition: transform 300ms;
  word-wrap: break-word;
}
a:hover {
  text-decoration: underline;
  transform: scale(1.2);
}

figure img {
  margin-bottom: 1em;
}

figcaption {
  line-height: 1.3;
}

.o-content {
  width: 100%;
  max-height: 100vh;
  margin-bottom: 2em;
}

.o-controls {
  display: none;
}

.l-col {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.l-col h1 {
  flex: 1 0 100%;
}
[class*='o-emoji'] {
  display: inline-block;
  vertical-align: middle;
  font-family: 'Apple Color Emoji', 'Segoe UI Emoji';
}

.o-emoji_large {
  font-size: calc(1.75em + 3vw);
}

span[role='img'][aria-label],
span[role='img'][aria-label] {
  position: relative;
}

span[role='img'][aria-label]:focus::after,
span[role='img'][aria-label]:hover::after {
  font-size: 1rem;
  font-family: 'iA Writer Duospace', 'iA Writer Duospace Regular', Courier,
    monospace;
  font-weight: 400;
  position: absolute;
  display: block;
  line-height: 1.2;
  content: attr(aria-label);
  z-index: 3;
  top: 100%;
  left: 0;
  background-color: #1572b6;
  color: #fff;
  padding: 0.25em;
  border: 1px solid #fff;
  box-shadow: 2px 2px 4px #000;
}

@media print {
  span[role='img'][aria-label]::after {
    content: ' (' attr(aria-label) ') ';
  }
}

@media screen and (min-aspect-ratio: 1/1) {
  body {
    overflow: hidden;
  }

  section {
    height: 100%;
    padding: 1em;
    position: absolute;
  }

  .o-controls {
    font-size: 75%;
    flex: none;
    display: flex;
    justify-content: space-evenly;
    width: 40vw;
    margin: 0 auto;
  }

  .c-logo-main {
    height: 60vh;
    min-height: 10em;
  }

  .c-logo-big {
    height: 40vh;
    max-width: 85vw;
    min-height: 7.5em;
  }

  .c-logo-small {
    height: 25vh;
    min-height: 5em;
  }

  .start {
    display: block;
    z-index: 2;
  }

  [id^='slide']:target ~ #start {
    display: none;
  }

  [id^='slide'] {
    transition: opacity 0.6s;
    opacity: 0;
    z-index: 0;
  }

  [id^='slide']:target {
    opacity: 1;
    z-index: 2;
    mix-blend-mode: soft-light;
  }

  [id^='slide']:target ~ .slide {
    opacity: 0;
    z-index: 0;
  }
}

@-webkit-keyframes popdown {
  50% {
    transform: translate(var(--tx, 0), 0) rotate(180deg);
  }
}
@keyframes popdown {
  50% {
    transform: translate(var(--tx, 0), 0) rotate(180deg);
  }
}
@-webkit-keyframes popleft {
  50% {
    transform: translate(calc(100vw - 100%), var(--ty, 0)) rotate(-90deg);
  }
}
@keyframes popleft {
  50% {
    transform: translate(calc(100vw - 100%), var(--ty, 0)) rotate(-90deg);
  }
}
@-webkit-keyframes popup {
  50% {
    transform: translate(var(--tx, 0), calc(100vh - 100%)) rotate(0deg);
  }
}
@keyframes popup {
  50% {
    transform: translate(var(--tx, 0), calc(100vh - 100%)) rotate(0deg);
  }
}
@-webkit-keyframes popright {
  50% {
    transform: translate(0, var(--ty, 0)) rotate(90deg);
  }
}
@keyframes popright {
  50% {
    transform: translate(0, var(--ty, 0)) rotate(90deg);
  }
}
.controllers {
  position: fixed;
  top: 0;
  left: 0;
}

`;

export default PresentationStyles;
