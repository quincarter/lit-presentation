import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PresentationStyles } from './presentation.styles';
import './slides';
import '../slide-navigation';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('presentation-slides')
export class PresentationSlides extends LitElement {
  render() {
    return html`
    <section id="slide1">
      <div class="o-wrapper">
        <img src="img/logo.svg" alt="SingaporeCSS logo" class="c-logo-main" />
        <p><a href="https://twitter.com/singaporecss">@SingaporeCSS</a></p>
        <p>
          <a href="http://twitter.com/intent/tweet?text=%23TalkCSS">#TalkCSS</a>
        </p>
      </div>
      <a class="o-controls" href="#slide2">Next</a>
    </section>

    <section id="slide2" class="huat">
      <div class="o-wrapper">
        <h2>Unofficial Singlish MAX edition</h2>
        <div class="flag"></div>
        <p>Happy 54th birthday, Singapore!</p>
      </div>
      <a class="o-controls" href="#slide1">Back</a>
      <a class="o-controls" href="#slide3">Next</a>
    </section>

    <section id="slide3">
      <div class="o-wrapper">
        <h1>Join us</h1>
        <img src="img/logo.svg" alt="SingaporeCSS logo" class="c-logo-small" />
        <p>
          <a href="https://gitter.im/Singapore-CSS/discussions"
            >https://gitter.im/Singapore-CSS/discussions</a
          >
        </p>
        <p>
          <a href="https://singaporecss.github.io"
            >https://singaporecss.github.io</a
          >
        </p>
        <p>
          <a href="https://tinyletter.com/SingaporeCSS"
            >https://tinyletter.com/SingaporeCSS</a
          >
        </p>
      </div>
      <a class="o-controls" href="#slide2">Back</a>
      <a class="o-controls" href="#slide4">Next</a>
      <!--<span>vheee</span>-->
    </section>

    <section id="slide4">
      <div class="o-wrapper l-flex">
        <h1 class="l-title">Shout-outs</h1>
        <figure>
          <img
            src="img/engineers+webuild.svg"
            alt="Engineers.SG-webuild.sg merger"
            class="c-logo-big"
          />
          <figcaption>Engineers.SG</figcaption>
        </figure>
        <figure>
          <img src="img/cheeaun.svg" alt="Chee Aun's logo" class="c-logo-big" />
          <figcaption>Chee Aun</figcaption>
        </figure>
      </div>
      <a class="o-controls" href="#slide3">Back</a>
      <a class="o-controls" href="#slide5">Next</a>
    </section>

    <section id="slide5">
      <div class="o-wrapper">
        <h1>Host of the month</h1>
        <figure>
          <img
            style="object-fit: contain"
            src="img/hackerspace.png"
            alt="Hackerspace"
            class="c-logo-big"
          />
          <figcaption>Hackerspace</figcaption>
        </figure>
      </div>
      <a class="o-controls" href="#slide4">Back</a>
      <a class="o-controls" href="#slide6">Next</a>
    </section>

    <section id="slide6">
      <div class="o-wrapper">
        <h1>Food sponsor</h1>
        <figure>
          <img
            style="object-fit: contain; max-height: 30vh"
            src="img/nexmo.svg"
            alt="Nexmo"
            class="c-logo-big"
          />
          <figcaption>AKA the Ah Gong who pays Hui Jing's CPF</figcaption>
        </figure>
      </div>
      <a class="o-controls" href="#slide5">Back</a>
      <a class="o-controls" href="#slide7">Next</a>
    </section>

    <section id="slide7" style="background-color: snow">
      <div class="o-wrapper">
        <h1>CSS colour of the month</h1>
        <p>snow</p>
        <p>#fffafa</p>
        <p>rgba(255, 250, 250, 1)</p>
      </div>
      <a class="o-controls" href="#slide6">Back</a>
      <a class="o-controls" href="#slide8">Next</a>
    </section>

    <section id="slide8">
      <div class="o-wrapper">
        <h1>Agenda</h1>
        <small style="font-style: italic">(Order subject to change)</small>
        <ul style="list-style: none">
          <li>
            <span class="o-emoji" role="img" tabindex="0" aria-label="fire"
              >&#x1F525;</span
            >
            HTML and CSS news of the month
            <span class="o-emoji" role="img" tabindex="0" aria-label="fire"
              >&#x1F525;</span
            >
          </li>
          <li>
            <span class="emoji" role="img" tabindex="0" aria-label="unicorn"
              >&#x1F984;</span
            >
            CSS Houdini: The Magic of Properties, Values, and the Paint API
            <span class="emoji" role="img" tabindex="0" aria-label="unicorn"
              >&#x1F984;</span
            >
          </li>
          <li>
            <span class="emoji" role="img" tabindex="0" aria-label="cyclone"
              >&#x1F300;</span
            >
            CSS Matrix
            <span class="emoji" role="img" tabindex="0" aria-label="cyclone"
              >&#x1F300;</span
            >
          </li>
          <li>
            <span
              class="emoji"
              role="img"
              tabindex="0"
              aria-label="high voltage"
              >&#x26A1;</span
            >
            Sometimes you gotta abuse Grid
            <span
              class="emoji"
              role="img"
              tabindex="0"
              aria-label="high voltage"
              >&#x26A1;</span
            >
          </li>
        </ul>
      </div>
      <a class="o-controls" href="#slide7">Back</a>
      <a class="o-controls" href="#slide9">Next</a>
    </section>

    <section id="slide9">
      <div class="o-wrapper">
        <h1>Announcements</h1>
        <span
          class="o-emoji_large"
          role="img"
          tabindex="0"
          aria-label="person dancing"
          >&#x1F483;</span
        ><span
          class="o-emoji_large"
          role="img"
          tabindex="0"
          aria-label="rainbow"
          >&#x1F308;</span
        ><span class="o-emoji_large" role="img" tabindex="0" aria-label="fire"
          >&#x1F525;</span
        ><span
          class="o-emoji_large"
          role="img"
          tabindex="0"
          aria-label="person gesturing ok"
          >&#x1F646;</span
        ><span
          class="o-emoji_large"
          role="img"
          tabindex="0"
          aria-label="public address loudspeaker"
          >&#x1F4E2;</span
        >
      </div>
      <a class="o-controls" href="#slide8">Back</a>
      <a class="o-controls" href="#slide10">Next</a>
    </section>

    <section id="slide10" style="background-color: black; color: white">
      <div class="o-wrapper">
        <h1>
          <span
            class="emoji"
            role="img"
            tabindex="0"
            aria-label="woman and man holding hands"
            >&#x1F46B;</span
          >
          MelbourneCSS is a thing!
          <span
            class="emoji"
            role="img"
            tabindex="0"
            aria-label="woman and man holding hands"
            >&#x1F46B;</span
          >
        </h1>
        <figure>
          <img
            style="object-fit: contain"
            src="img/melbournecss.svg"
            alt="Hackerspace"
            class="c-logo-big"
          />
          <figcaption>Talk.CSS #1</figcaption>
        </figure>
        <p><a href="https://twitter.com/MelbourneCSS">@MelbourneCSS</a></p>
      </div>
      <a class="o-controls" href="#slide9">Back</a>
      <a class="o-controls" href="#slide11">Next</a>
    </section>

    <section id="slide11">
      <div class="o-wrapper">
        <h1>
          <span class="emoji" role="img" tabindex="0" aria-label="partying face"
            >&#x1F973;</span
          >
          New meetup in town
          <span class="emoji" role="img" tabindex="0" aria-label="partying face"
            >&#x1F973;</span
          >
        </h1>
        <img
          src="https://i.imgur.com/8Yw403l.png"
          style="max-height: 50vh; display: block; margin: 0 auto 0.5em"
          alt="React Knowledgeable"
        />
        <a href="https://reactknowledgeable.org/"
          >https://reactknowledgeable.org/</a
        >
        <p>Happening every month</p>
      </div>
      <a class="o-controls" href="#slide10">Back</a>
    </section>

    <section id="start">
      <div class="start-container">
        <img
          class="start-image"
          src="/assets/images/computer-reading.png"
          alt="Quin Reading"
        />
        <h1>Welcome! Have a Seat and we will get started shortly!</h1>
      </div>
    </section>
    `;
  }

  static styles = [PresentationStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    'presentation-slides': PresentationSlides;
  }
}
