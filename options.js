const apiKeyElem = document.getElementById("apiKey");
const statusElem = document.getElementById("status");
const saveBtn = document.getElementById("save");

function saveOptions() {
  const apiKey = apiKeyElem.value;
  chrome.storage.local.set({ apiKey }).then(() => {
    statusElem.innerHTML = "Options saved!";
    setTimeout(() => {
      statusElem.innerHTML = "";
    }, 1500);
  });
}

function restoreOptions() {
  chrome.storage.local.get({ apiKey: "" }).then((items) => {
    apiKeyElem.value = items.apiKey;
  });
}

saveBtn.addEventListener("click", saveOptions);

restoreOptions();
