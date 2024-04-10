import { LitElement, PropertyValueMap, html } from "lit";
import { customElement } from "lit/decorators.js";
import { _toConsumableArray } from "./utilities/helpers";
import "../fullscreen-handler";
import "./examples/button.example";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("presentation-slides")
export class PresentationSlides extends LitElement {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.firstUpdated(_changedProperties);
    this.initSlideNav();
  }

  initSlideNav() {
    const controls = function controls(event: any) {
      const isCover =
        window.location.hash === "" || window.location.hash === "#start";

      if (isCover) {
        start(event);
      } else {
        navigate(event);
      }
    };

    const slideCount = document.querySelectorAll("section").length;
    document.body.addEventListener("keydown", controls, false);

    const start = function start(event: { code: string }) {
      if (
        event.code === "Space" ||
        event.code === "ArrowRight" ||
        event.code === "Period"
      ) {
        window.location.hash = "#slide1";
      }
    };

    const navigate = (event: any) => {
      const isFirstSlide = window.location.hash === "#slide1";
      const isLastSlide = window.location.hash === "#slide" + (slideCount - 1);
      const activeSlide: any = document.querySelector('[id^="slide"]:target');
      const slideNum = parseInt(activeSlide.getAttribute("id").substring(5));

      if (
        activeSlide &&
        !isLastSlide &&
        (event.code === "Space" ||
          event.code === "ArrowRight" ||
          event.code === "PageDown")
      ) {
        window.location.hash = "slide" + (slideNum + 1);
      }

      if (
        !isFirstSlide &&
        (event.code === "ArrowLeft" || event.code === "PageUp")
      ) {
        window.location.hash = "slide" + (slideNum - 1);
      }

      if (isLastSlide && event.code === "KeyR") {
        window.location.hash = "#start";
      }

      if (activeSlide && event.code === "Period") {
        const winHash = window.location.hash;
        const activeList = document.querySelector(winHash + " .revealable");

        if (activeList) {
          const listArray = _toConsumableArray(
            document.querySelectorAll(winHash + " .revealable .fragment")
          );

          if (listArray[0]) {
            listArray[0].classList.remove("fragment");
          }
        }
      }

      if (activeSlide && event.code === "Comma") {
        const _winHash = window.location.hash;

        const _activeList = document.querySelector(_winHash + " .revealable");

        if (_activeList) {
          const _listArray = _toConsumableArray(
            document.querySelectorAll(_winHash + " .revealable li")
          );

          const hideList = _listArray.forEach(function (list: {
            classList: { add: (arg0: string) => void };
          }) {
            list.classList.add("fragment");
          });

          return hideList;
        }
      }
    };
  }

  render() {
    return html`
      <section id="slide1">
        <div class="o-wrapper">
          <div class="logo-wrapper">
            <img
              src="src/assets/understanding-component-state.png"
              alt="understanding component state logo"
              class="c-logo-main"
            />
            <img
              src="src/assets/web-workers.jpg"
              alt="web workers image"
              class="workers"
            />
          </div>

          <p>
            Medium: <a href="https://twitter.com/quincarter">@quincarter</a>
          </p>
          <p>Dev.to: <a href="https://dev.to/quincarter">@quincarter</a></p>
          <p>Github: <a href="https://github.com/quincarter">@quincarter</a></p>
        </div>
        <a class="o-controls" href="#slide2">Next</a>
      </section>

      <section id="slide2" class="huat">
        <div class="o-wrapper">
          <img src="src/assets/hey-sunglasses.png" alt="hey sunglasses" />

          <h2>About me! Who am I, really?</h2>
          <ul class="about-me-list">
            <li><img src="src/assets/brew-me-icon.png" alt="brew me" /></li>
            <li>
              <img
                src="src/assets/home-assistant-logo.svg"
                alt="home assistant"
              />
            </li>
            <li><img src="src/assets/movies-bitmoji.png" alt="movies" /></li>
            <li><img src="src/assets/wasm.webp" alt="wasm" /></li>
          </ul>
        </div>
        <a class="o-controls" href="#slide1">Back</a>
        <a class="o-controls" href="#slide3">Next</a>
      </section>

      <section id="slide3">
        <div class="o-wrapper">
          <h1>What is State?</h1>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*z68I1WKuLbzbwEp0"
          />
        </div>
        <a class="o-controls" href="#slide2">Back</a>
        <a class="o-controls" href="#slide4">Next</a>
        <!--<span>vheee</span>-->
      </section>

      <section id="slide4">
        <div class="o-wrapper l-flex">
          <h1 class="l-title">Component State</h1>
          <p>
            Component state is the “value of specific properties in your
            component class at any given time in the component lifecycle.”
          </p>
          <div class="content">
            <ol>
              <li>Colors of a button</li>
              <li>Disabled or enabled state of a button</li>
              <li>Hover state, etc.</li>
            </ol>
            <img
              class="component-state-examples"
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2p-gjLCAGiDA-JuDT_dx8g.png"
              alt="component state examples"
            />
          </div>
        </div>
        <a class="o-controls" href="#slide3">Back</a>
        <a class="o-controls" href="#slide5">Next</a>
      </section>

      <section id="slide5">
        <div class="o-wrapper">
          <h1>Button State!</h1>
          <x-my-button
            button-title="My Button Is Disabled"
            button-color="success"
            button-disabled
          >
          </x-my-button>

          <x-my-button
            button-title="My Button Is Enabled"
            button-color="secondary"
          >
          </x-my-button>
        </div>
        <a class="o-controls" href="#slide4">Back</a>
        <a class="o-controls" href="#slide6">Next</a>
      </section>

      <section id="slide6">
        <div class="o-wrapper">
          <h1>Lit Element Context API</h1>
          <figure>
            <img
              style="object-fit: contain;"
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4dUGT19XFJ9u66wiQn6ADQ.png"
              alt="Lit Element DOM Tree"
              class="c-logo-big"
            />
            <figcaption>
              Easy to Understand if you Know that the DOM is a Tree
            </figcaption>
          </figure>
        </div>
        <a class="o-controls" href="#slide5">Back</a>
        <a class="o-controls" href="#slide7">Next</a>
      </section>

      <section id="slide7">
        <div class="o-wrapper">
          <h1>Let's Work with the Context API</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/root-element/step-1-imports-provide.png"
            alt="step 1"
          />
        </div>
        <a class="o-controls" href="#slide6">Back</a>
        <a class="o-controls" href="#slide8">Next</a>
      </section>

      <section id="slide8">
        <div class="o-wrapper">
          <h1>Root Custom Element (<code>my-element</code>)</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/root-element/step-2-create-custom-element.png"
            alt="step 2"
          />
        </div>
        <a class="o-controls" href="#slide7">Back</a>
        <a class="o-controls" href="#slide9">Next</a>
      </section>

      <section id="slide9">
        <div class="o-wrapper">
          <h1>Setup the Context</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/root-element/step-3-setup-the-context.png"
            alt="step 3"
          />
        </div>
        <a class="o-controls" href="#slide8">Back</a>
        <a class="o-controls" href="#slide10">Next</a>
      </section>

      <section id="slide10">
        <div class="o-wrapper">
          <h1>@provide the Property Object</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/root-element/step-4-provide-the-property-object.png"
            alt="step 4"
          />
        </div>
        <a class="o-controls" href="#slide9">Back</a>
        <a class="o-controls" href="#slide11">Next</a>
      </section>

      <section id="slide11">
        <div class="o-wrapper">
          <h1>Define The Interfaces</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/root-element/step-5-define-interfaces.png"
            alt="step 5"
          />
        </div>
        <a class="o-controls" href="#slide10">Back</a>
        <a class="o-controls" href="#slide12">Next</a>
      </section>

      <section id="slide12">
        <div class="o-wrapper">
          <h1>Render Stuff</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/root-element/step-6-setup-render.png"
            alt="step 6"
          />
        </div>
        <a class="o-controls" href="#slide11">Back</a>
        <a class="o-controls" href="#slide13">Next</a>
      </section>

      <section id="slide13">
        <div class="o-wrapper">
          <h1>It should look like this now:</h1>
          <img
            class="code-snippets"
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1lYQMRhBtZ8yESrVlmdeCg.png"
            alt="preview root"
          />
        </div>
        <a class="o-controls" href="#slide12">Back</a>
        <a class="o-controls" href="#slide14">Next</a>
      </section>

      <section id="slide14">
        <div class="o-wrapper">
          <h1>Basic Child</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/child-component/step-7-setup-child-component.png"
            alt="step 7"
          />
        </div>
        <a class="o-controls" href="#slide13">Back</a>
        <a class="o-controls" href="#slide15">Next</a>
      </section>

      <section id="slide15">
        <div class="o-wrapper">
          <h1>Create Basic Child</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/child-component/step-8-create-child-component.png"
            alt="step 8"
          />
        </div>
        <a class="o-controls" href="#slide14">Back</a>
        <a class="o-controls" href="#slide16">Next</a>
      </section>

      <section id="slide16">
        <div class="o-wrapper">
          <h1>Setup Tags</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/child-component/step-9-setup-tags.png"
            alt="step 9"
          />
        </div>
        <a class="o-controls" href="#slide15">Back</a>
        <a class="o-controls" href="#slide17">Next</a>
      </section>

      <section id="slide17">
        <div class="o-wrapper">
          <h1>CSS For Our Button</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/child-component/step-10-css-for-button.png"
            alt="step 10"
          />
        </div>
        <a class="o-controls" href="#slide16">Back</a>
        <a class="o-controls" href="#slide18">Next</a>
      </section>

      <section id="slide18">
        <div class="o-wrapper">
          <h1>Setup Button Click Event</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/child-component/step-11-event-handler.png"
            alt="step 11"
          />
        </div>
        <a class="o-controls" href="#slide17">Back</a>
        <a class="o-controls" href="#slide19">Next</a>
      </section>

      <section id="slide19">
        <div class="o-wrapper">
          <h1>Listen For Changes in Root Element</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/root-element/step-12-listen-in-root-element.png"
            alt="step 12"
          />
        </div>
        <a class="o-controls" href="#slide18">Back</a>
        <a class="o-controls" href="#slide20">Next</a>
      </section>

      <section id="slide20">
        <div class="o-wrapper">
          <h1>Results of the child:</h1>
          <img
            class="code-snippets"
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*0IkHwHtrioEmdCNGLWNADg.png"
            alt="child button click results"
          />
        </div>
        <a class="o-controls" href="#slide19">Back</a>
        <a class="o-controls" href="#slide21">Next</a>
      </section>

      <section id="slide21">
        <div class="o-wrapper">
          <h1>Consume the context (my-grandchild):</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/my-grandchild/step-13-my-grandchild.png"
            alt="step 13"
          />
        </div>
        <a class="o-controls" href="#slide20">Back</a>
        <a class="o-controls" href="#slide22">Next</a>
      </section>

      <section id="slide22">
        <div class="o-wrapper">
          <h1>Setup the @consumer property</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/my-grandchild/step-14-setup-consumer.png"
            alt="step 14"
          />
        </div>
        <a class="o-controls" href="#slide21">Back</a>
        <a class="o-controls" href="#slide23">Next</a>
      </section>

      <section id="slide23">
        <div class="o-wrapper">
          <h1>Render using Consumed Data</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/my-grandchild/step-15-render-using-consumer-data.png"
            alt="step 15"
          />
        </div>
        <a class="o-controls" href="#slide22">Back</a>
        <a class="o-controls" href="#slide24">Next</a>
      </section>

      <section id="slide24">
        <div class="o-wrapper">
          <h1>Place my-grandchild in my-child component</h1>
          <img
            class="code-snippets"
            src="src/assets/code-snippets/child-component/step-16-place-my-grandchild-in-my-child.png"
            alt="step 16"
          />
        </div>
        <a class="o-controls" href="#slide23">Back</a>
        <a class="o-controls" href="#slide25">Next</a>
      </section>

      <section id="slide25">
        <div class="o-wrapper">
          <h1>Push that purple button now and watch magic happen</h1>
          <div class="content">
            <img
              class="code-snippets"
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lL9zqipMKSzAiaWm_LeegQ.png"
              alt="Consumer result!"
            />
            <img
              class="code-snippets"
              src="https://miro.medium.com/v2/resize:fit:996/format:webp/1*1d9Gt7sxQNjJj_etTZdpIA.gif"
              alt="Michael Scott cheers!"
            />
          </div>
        </div>
        <a class="o-controls" href="#slide24">Back</a>
        <a class="o-controls" href="#slide26">Next</a>
      </section>

      <section id="slide26">
        <div class="o-wrapper">
          <h1>Hungry for more?</h1>
          <img
            src="src/assets/qr-code-lit-context-demo-github.png"
            alt="qr for lit context"
          />
        </div>
        <a class="o-controls" href="#slide25">Back</a>
        <a class="o-controls" href="#slide27">Next</a>
      </section>

      <section id="slide27">
        <div class="o-wrapper">
          <h1>Read the Medium article:</h1>
          <img
            src="src/assets/understanding-component-state-qr-code.png"
            alt="qr for lit context medium article"
          />
        </div>
        <a class="o-controls" href="#slide26">Back</a>
      </section>

      <section id="start">
        <div class="start-container">
          <img
            class="start-image"
            src="/src/assets/computer-reading.png"
            alt="Quin Reading"
          />
          <h1>Welcome! Have a Seat and we will get started shortly!</h1>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "presentation-slides": PresentationSlides;
  }
}
