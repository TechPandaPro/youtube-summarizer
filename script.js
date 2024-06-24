const observer = new MutationObserver(mutationCallback);
observer.observe(document.body, { childList: true, subtree: true });

const chatBtnSvg = `<svg width="181" height="181" viewBox="0 0 181 181" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" overflow="hidden"><g transform="translate(-1108 -898)"><path d="M1142 988.5C1142 957.296 1167.3 932 1198.5 932 1229.7 932 1255 957.296 1255 988.5 1255 1019.7 1229.7 1045 1198.5 1045 1167.3 1045 1142 1019.7 1142 988.5Z" fill-rule="evenodd"/></g></svg>`;

function mutationCallback() {
  const topLevelButtons = document.querySelector(
    "ytd-watch-metadata #top-level-buttons-computed"
  );

  if (!topLevelButtons) return;

  const emptyChatBtns = Array.from(
    document.querySelectorAll(".chat-btn")
  ).filter((btn) => btn.childNodes.length === 0);

  if (emptyChatBtns.length >= 1) {
    for (const emptyChatBtn of emptyChatBtns) {
      emptyChatBtn.remove();
    }
  }

  const chatBtn = topLevelButtons.querySelector(
    '.chat-btn button-view-model button[title="Chat"]'
  );

  if (chatBtn) return;

  console.log(topLevelButtons);

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
            </yt-icon>
          </div>
          <div class="yt-spec-button-shape-next__button-text-content">Chat</div>
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
    ".chat-btn yt-icon"
  ).innerHTML = `<yt-icon-shape class="style-scope yt-icon"></yt-icon-shape>`;

  topLevelButtons.querySelector(".chat-btn yt-icon yt-icon-shape").innerHTML =
    chatBtnSvg;

  topLevelButtons
    .querySelector(".chat-btn button")
    .addEventListener("click", toggleChat);
}

function toggleChat() {
  console.log("Chat toggle clicked");
}
