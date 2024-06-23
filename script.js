const observer = new MutationObserver(mutationCallback);
observer.observe(document.body, { childList: true, subtree: true });

function mutationCallback() {
  const topLevelButtons = document.querySelector(
    "ytd-watch-metadata #top-level-buttons-computed"
  );

  if (!topLevelButtons) return;

  // const actions = document.getElementById("actions");

  const emptyChatBtns = Array.from(
    document.querySelectorAll(".chat-btn")
  ).filter((btn) => btn.childNodes.length === 0);

  if (emptyChatBtns.length >= 1) {
    for (const emptyChatBtn of emptyChatBtns) {
      emptyChatBtn.remove();
    }
  }

  if (
    topLevelButtons.querySelector(
      '.chat-btn button-view-model button[title="Chat"]'
    )
  )
    return;

  // observer.disconnect();

  console.log(topLevelButtons);

  // actions.insertAdjacentHTML(
  //   "beforeend",
  //   `
  //   <p>hello</p>
  //   `
  // );

  // return;

  const chatBtnSvg = `
    <yt-icon-shape class="style-scope yt-icon">
      <icon-shape class="yt-spec-icon-shape">
        <div
          style="
            width: 100%;
            height: 100%;
            display: block;
            fill: currentcolor;
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            style="
              pointer-events: none;
              display: inherit;
              width: 100%;
              height: 100%;
            "
          >
            <path
              d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"
            ></path>
          </svg>
        </div>
      </icon-shape>
    </yt-icon-shape>
  `;

  topLevelButtons.insertAdjacentHTML(
    "beforeend",
    `
    <yt-button-view-model class="style-scope ytd-menu-renderer chat-btn">
      <button-view-model class="yt-spec-button-view-model">
        <button
          class="yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading"
          aria-label="Chat"
          title="Chat"
          style=""
        >
          <div class="yt-spec-button-shape-next__icon" aria-hidden="true">
            <yt-icon style="width: 24px; height: 24px">
              <!--css-build:shady--><!--css-build:shady-->
              ${chatBtnSvg}
            </yt-icon>
          </div>
          <div class="yt-spec-button-shape-next__button-text-content">Share</div>
          <yt-touch-feedback-shape style="border-radius: inherit">
            <div
              class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response"
              aria-hidden="true"
            >
              <div class="yt-spec-touch-feedback-shape__stroke" style=""></div>
              <div class="yt-spec-touch-feedback-shape__fill" style=""></div>
            </div>
          </yt-touch-feedback-shape>
        </button>
      </button-view-model>
    </yt-button-view-model>
  `
  );

  topLevelButtons.querySelector(
    'button-view-model button[title="Chat"] .yt-spec-button-shape-next__button-text-content'
  ).innerText = "Chat";
}
