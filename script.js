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

  const existingChat = document.querySelector(
    'ytd-engagement-panel-section-list-renderer[data-yt-summarize-role="chatWindow"]'
  );

  if (existingChat) return existingChat.scrollIntoView();

  const transcriptBtn = document.querySelector(
    '#description .yt-spec-button-shape-next[aria-label="Show transcript"]'
  );

  if (!transcriptBtn)
    return alert(
      "This video does not have a transcript. YouTube Summarizer can only be ran on YouTube videos with a transcript."
    );

  transcriptBtn.click();

  const transcriptElem = document.querySelector(
    'ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-searchable-transcript"]'
  );

  const transcriptHtml = `
    <ytd-engagement-panel-section-list-renderer
      class="style-scope ytd-watch-flexy"
      modern-panels=""
      target-id="engagement-panel-searchable-transcript"
      visibility="ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"
      style="order: 0"
      data-yt-summarize-role="chatWindow"
    >
      <!--css-build:shady--><!--css-build:shady-->
      <div
        id="header"
        class="style-scope ytd-engagement-panel-section-list-renderer"
      >
        <ytd-engagement-panel-title-header-renderer
          class="style-scope ytd-engagement-panel-section-list-renderer"
          modern-panels=""
        >
          <!--css-build:shady--><!--css-build:shady-->
          <div
            id="banner"
            aria-hidden="true"
            class="style-scope ytd-engagement-panel-title-header-renderer"
          ></div>
          <div
            id="ads-info-button"
            class="style-scope ytd-engagement-panel-title-header-renderer"
          ></div>
          <div
            id="header"
            class="style-scope ytd-engagement-panel-title-header-renderer"
          >
            <div
              id="navigation-button"
              class="style-scope ytd-engagement-panel-title-header-renderer"
              hidden=""
            ></div>
            <yt-img-shadow
              id="icon"
              class="style-scope ytd-engagement-panel-title-header-renderer no-transition"
              hidden=""
              ><!--css-build:shady--><!--css-build:shady--><img
                id="img"
                draggable="false"
                class="style-scope yt-img-shadow"
                alt=""
            /></yt-img-shadow>
            <div
              id="title-container"
              class="style-scope ytd-engagement-panel-title-header-renderer"
            >
              <h2
                id="title"
                class="style-scope ytd-engagement-panel-title-header-renderer"
                aria-label="Transcript"
                tabindex="-1"
              >
                <yt-formatted-string
                  id="contextual-info"
                  class="style-scope ytd-engagement-panel-title-header-renderer"
                  is-empty='function(){var e=wa.apply(0,arguments);a.loggingStatus.currentExternalCall=b;a.loggingStatus.bypassProxyController=!0;var g,k=((g=a.is)!=null?g:a.tagName).toLowerCase();gF(k,b,"PROPERTY_ACCESS_CALL_EXTERNAL");var m;g=(m=c!=null?c:d[b])==null?void 0:m.call.apply(m,[d].concat(ia(e)));a.loggingStatus.currentExternalCall=void 0;a.loggingStatus.bypassProxyController=!1;return g}'
                  hidden=""
                >
                  <!--css-build:shady--><!--css-build:shady-->
                  <yt-attributed-string class="style-scope yt-formatted-string">
                  </yt-attributed-string>
                </yt-formatted-string>
              </h2>
              <yt-formatted-string
                id="subtitle"
                class="style-scope ytd-engagement-panel-title-header-renderer"
                is-empty='function(){var e=wa.apply(0,arguments);a.loggingStatus.currentExternalCall=b;a.loggingStatus.bypassProxyController=!0;var g,k=((g=a.is)!=null?g:a.tagName).toLowerCase();gF(k,b,"PROPERTY_ACCESS_CALL_EXTERNAL");var m;g=(m=c!=null?c:d[b])==null?void 0:m.call.apply(m,[d].concat(ia(e)));a.loggingStatus.currentExternalCall=void 0;a.loggingStatus.bypassProxyController=!1;return g}'
                hidden=""
              >
                <!--css-build:shady--><!--css-build:shady-->
                <yt-attributed-string class="style-scope yt-formatted-string">
                </yt-attributed-string>
              </yt-formatted-string>
              <div
                id="subtitle-complex"
                class="style-scope ytd-engagement-panel-title-header-renderer"
              ></div>
            </div>
            <div
              id="action-button"
              class="style-scope ytd-engagement-panel-title-header-renderer"
              hidden=""
            ></div>
            <div
              id="information-button"
              class="style-scope ytd-engagement-panel-title-header-renderer"
              hidden=""
            ></div>
            <div
              id="menu"
              class="style-scope ytd-engagement-panel-title-header-renderer"
            >
              <ytd-menu-renderer
                class="style-scope ytd-engagement-panel-title-header-renderer"
                safe-area=""
                menu-active=""
              >
                <!--css-build:shady--><!--css_build_scope:ytd-menu-renderer--><!--css_build_styles:video.youtube.src.web.polymer.shared.ui.styles.yt_base_styles.yt.base.styles.css.js-->
                <div
                  id="top-level-buttons-computed"
                  class="top-level-buttons style-scope ytd-menu-renderer"
                ></div>
                <div
                  id="flexible-item-buttons"
                  class="style-scope ytd-menu-renderer"
                ></div>
                <yt-icon-button
                  id="button"
                  class="dropdown-trigger style-scope ytd-menu-renderer"
                  style-target="button"
                  role="button"
                >
                  <!--css-build:shady--><!--css-build:shady-->
                  <button
                    id="button"
                    class="style-scope yt-icon-button"
                    aria-label="More actions"
                  >
                    <yt-icon class="style-scope ytd-menu-renderer">
                      <!--css-build:shady--><!--css-build:shady-->
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
                              enable-background="new 0 0 24 24"
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
                                d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
                              ></path>
                            </svg>
                          </div>
                        </icon-shape>
                      </yt-icon-shape>
                    </yt-icon>
                  </button>
                  <yt-interaction
                    id="interaction"
                    class="circular style-scope yt-icon-button"
                  >
                    <!--css-build:shady--><!--css-build:shady-->
                    <div class="stroke style-scope yt-interaction"></div>
                    <div class="fill style-scope yt-interaction"></div>
                  </yt-interaction>
                </yt-icon-button>
                <yt-button-shape
                  id="button-shape"
                  version="modern"
                  class="style-scope ytd-menu-renderer"
                  disable-upgrade=""
                  hidden=""
                >
                </yt-button-shape>
              </ytd-menu-renderer>
            </div>
            <div
              id="visibility-button"
              class="style-scope ytd-engagement-panel-title-header-renderer"
            >
              <ytd-button-renderer
                class="style-scope ytd-engagement-panel-title-header-renderer"
                button-renderer=""
                button-next=""
              >
                <!--css-build:shady-->
                <yt-button-shape>
                  <button
                    class="yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-only-default"
                    aria-label="Close transcript"
                    title=""
                    style=""
                  >
                    <div class="yt-spec-button-shape-next__icon" aria-hidden="true">
                      <yt-icon style="width: 24px; height: 24px">
                        <!--css-build:shady--><!--css-build:shady-->
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
                                enable-background="new 0 0 24 24"
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
                                  d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"
                                ></path>
                              </svg>
                            </div>
                          </icon-shape>
                        </yt-icon-shape>
                      </yt-icon>
                    </div>
                    <yt-touch-feedback-shape style="border-radius: inherit">
                      <div
                        class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response"
                        aria-hidden="true"
                      >
                        <div
                          class="yt-spec-touch-feedback-shape__stroke"
                          style=""
                        ></div>
                        <div
                          class="yt-spec-touch-feedback-shape__fill"
                          style=""
                        ></div>
                      </div>
                    </yt-touch-feedback-shape>
                  </button>
                </yt-button-shape>
                <tp-yt-paper-tooltip offset="8" disable-upgrade="">
                </tp-yt-paper-tooltip>
              </ytd-button-renderer>
            </div>
          </div>
          <div
            id="subheader"
            class="style-scope ytd-engagement-panel-title-header-renderer"
          ></div>
        </ytd-engagement-panel-title-header-renderer>
      </div>
      <div
        id="content"
        class="style-scope ytd-engagement-panel-section-list-renderer"
      >
        <ytd-continuation-item-renderer
          class="style-scope ytd-engagement-panel-section-list-renderer"
          panel-target-id="engagement-panel-searchable-transcript"
          panel-content-visible=""
        >
          <!--css-build:shady--><!--css-build:shady-->
          <div
            id="ghost-cards"
            class="style-scope ytd-continuation-item-renderer"
          ></div>
          <tp-yt-paper-spinner
            id="spinner"
            class="style-scope ytd-continuation-item-renderer"
            active=""
            ><!--css-build:shady-->
            <div
              id="spinnerContainer"
              class="active style-scope tp-yt-paper-spinner"
            >
              <div class="spinner-layer layer-1 style-scope tp-yt-paper-spinner">
                <div class="circle-clipper left style-scope tp-yt-paper-spinner">
                  <div class="circle style-scope tp-yt-paper-spinner"></div>
                </div>
                <div class="circle-clipper right style-scope tp-yt-paper-spinner">
                  <div class="circle style-scope tp-yt-paper-spinner"></div>
                </div>
              </div>
              <div class="spinner-layer layer-2 style-scope tp-yt-paper-spinner">
                <div class="circle-clipper left style-scope tp-yt-paper-spinner">
                  <div class="circle style-scope tp-yt-paper-spinner"></div>
                </div>
                <div class="circle-clipper right style-scope tp-yt-paper-spinner">
                  <div class="circle style-scope tp-yt-paper-spinner"></div>
                </div>
              </div>
              <div class="spinner-layer layer-3 style-scope tp-yt-paper-spinner">
                <div class="circle-clipper left style-scope tp-yt-paper-spinner">
                  <div class="circle style-scope tp-yt-paper-spinner"></div>
                </div>
                <div class="circle-clipper right style-scope tp-yt-paper-spinner">
                  <div class="circle style-scope tp-yt-paper-spinner"></div>
                </div>
              </div>
              <div class="spinner-layer layer-4 style-scope tp-yt-paper-spinner">
                <div class="circle-clipper left style-scope tp-yt-paper-spinner">
                  <div class="circle style-scope tp-yt-paper-spinner"></div>
                </div>
                <div class="circle-clipper right style-scope tp-yt-paper-spinner">
                  <div class="circle style-scope tp-yt-paper-spinner"></div>
                </div>
              </div>
            </div>
          </tp-yt-paper-spinner>
          <div
            id="button"
            class="style-scope ytd-continuation-item-renderer"
            hidden=""
          ></div>
        </ytd-continuation-item-renderer>
      </div>
      <div
        id="footer"
        class="style-scope ytd-engagement-panel-section-list-renderer"
      ></div>

      <div id="footer" class="style-scope ytd-transcript-search-panel-renderer">
        <ytd-transcript-footer-renderer
          class="style-scope ytd-transcript-search-panel-renderer"
        >
          <!--css-build:shady--><!--css-build:shady-->
          <div id="menu" class="style-scope ytd-transcript-footer-renderer">
            <yt-sort-filter-sub-menu-renderer
              class="style-scope ytd-transcript-footer-renderer"
            >
              <!--css-build:shady--><!--css-build:shady-->
              <tp-yt-paper-tooltip
                class="style-scope yt-sort-filter-sub-menu-renderer"
                role="tooltip"
                tabindex="-1"
              >
                <!--css-build:shady-->
                <div
                  id="tooltip"
                  class="hidden style-scope tp-yt-paper-tooltip"
                  style-target="tooltip"
                ></div>
              </tp-yt-paper-tooltip>
              <yt-dropdown-menu
                class="style-scope yt-sort-filter-sub-menu-renderer"
                modern-buttons=""
                modern-dialogs=""
                ><!--css-build:shady--><!--css-build:shady--><tp-yt-paper-menu-button
                  dynamic-align=""
                  expand-sizing-target-for-scrollbars=""
                  class="style-scope yt-dropdown-menu"
                  role="group"
                  aria-haspopup="true"
                  horizontal-align="left"
                  vertical-align="top"
                  aria-disabled="false"
                  ><!--css-build:shady-->
                  <div id="trigger" class="style-scope tp-yt-paper-menu-button"></div>
                </tp-yt-paper-menu-button>
              </yt-dropdown-menu>
              <div
                id="notification"
                class="style-scope yt-sort-filter-sub-menu-renderer"
                hidden=""
              ></div
            ></yt-sort-filter-sub-menu-renderer>
          </div>
        </ytd-transcript-footer-renderer>
      </div>
    </ytd-engagement-panel-section-list-renderer>
  `;

  transcriptElem.insertAdjacentHTML("beforebegin", transcriptHtml);

  const afterTitle = document.querySelector(
    '[data-yt-summarize-role="chatWindow"] yt-formatted-string#contextual-info'
  );

  afterTitle.insertAdjacentHTML(
    `beforebegin`,
    `
    <yt-formatted-string
      id="title-text"
      ellipsis-truncate=""
      class="style-scope ytd-engagement-panel-title-header-renderer"
      ellipsis-truncate-styling=""
      title="Summary & Chat"
      >Summary & Chat</yt-formatted-string
    >`
  );

  document.querySelector(
    '[data-yt-summarize-role="chatWindow"] #title-text[title="Summary & Chat"]'
  ).innerHTML = "Summary & Chat";

  const trigger = document.querySelector(
    '[data-yt-summarize-role="chatWindow"] #trigger'
  );
  trigger.innerHTML = `
    <tp-yt-paper-button
      id="label"
      class="dropdown-trigger style-scope yt-dropdown-menu"
      slot="dropdown-trigger"
      aria-expanded="false"
      style-target="host"
      role="button"
      tabindex="-1"
      animated=""
      elevation="0"
      aria-disabled="false"
      ><!--css-build:shady-->
      <dom-if class="style-scope yt-dropdown-menu"
        ><template is="dom-if"></template
      ></dom-if>
      <div
        id="label-text"
        style-target="label-text"
        class="style-scope yt-dropdown-menu"
        data-yt-summarize-role="status"
      ></div>
      <yt-icon
        id="label-icon"
        icon="expand"
        class="style-scope yt-dropdown-menu"
        ><!--css-build:shady--><!--css-build:shady--><yt-icon-shape
          class="style-scope yt-icon"
          ><icon-shape class="yt-spec-icon-shape"
            ><div
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
                  d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"
                ></path>
              </svg></div></icon-shape></yt-icon-shape
      ></yt-icon>
      <dom-if class="style-scope yt-dropdown-menu"
        ><template is="dom-if"></template
      ></dom-if>
    </tp-yt-paper-button>
  `;

  const statusDiv = document.querySelector('[data-yt-summarize-role="status"]');
  statusDiv.innerHTML = "Loading transcript...";

  //   <div
  //   id="label-text"
  //   style-target="label-text"
  //   class="style-scope yt-dropdown-menu"
  //   data-yt-summarize-role="status"
  // >

  const observer = new MutationObserver(transcriptModified);
  observer.observe(transcriptElem, { childList: true, subtree: true });
}

function transcriptModified() {
  const transcriptElem = document.querySelector(
    'ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-searchable-transcript"]:not([data-yt-summarize-role="chatWindow"])'
  );

  console.log(transcriptElem);

  const transcript = Array.from(
    transcriptElem.querySelectorAll(
      "ytd-transcript-renderer #content ytd-transcript-search-panel-renderer #body ytd-transcript-segment-list-renderer #segments-container .segment yt-formatted-string"
    )
  )
    .map((transcriptString) => transcriptString.innerText)
    .join("\n");

  console.log(transcript);

  console.log("modified!");
}
