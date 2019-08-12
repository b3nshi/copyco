const COPYCO_DATA = "copyco-cookies";
const copyCookies = document.getElementById("copyCookies");
const listCookies = document.getElementById("listCookies");
const pasteCookies = document.getElementById("pasteCookies");

const readCookies = function() {
  listCookies.innerHTML = "";
  chrome.storage.sync.get(COPYCO_DATA, function(data) {
    const cookies = JSON.parse(data[COPYCO_DATA]);
    cookies.forEach((cookie) => {
      const li = document.createElement("LI");
      li.innerHTML = `
        <span class="cookieName">${cookie.name}</span>
        <span class="cookieValue">${cookie.value}</span>
      `;
      listCookies.appendChild(li);
    });

    if (cookies.length === 0) {
      pasteCookies.setAttribute("disabled", "true");
    } else {
      pasteCookies.removeAttribute("disabled");
    }
  });
};

copyCookies.onclick = function() {
  chrome.tabs.query({
    status: "complete",
    windowId: chrome.windows.WINDOW_ID_CURRENT, 
    active:true
  }, (tab) => {
    chrome.cookies.getAll({"url": tab[0].url}, function (cookies){
      if (cookies.length) {
        chrome.storage.sync.set({[COPYCO_DATA]: JSON.stringify(cookies)}, function() {
          readCookies();
        });
      }
    });
  });
};

pasteCookies.onclick = function() {
  chrome.storage.sync.get(COPYCO_DATA, function(data) {
    const newCookies = JSON.parse(data[COPYCO_DATA]);
    chrome.tabs.query({
      status: "complete",
      windowId: chrome.windows.WINDOW_ID_CURRENT,
      active: true
    }, (tab) => {
      newCookies.forEach((cookie) => {
        chrome.cookies.set({
          name: cookie.name,
          value: cookie.value,
          url: tab[0].url
        });
      });
    });  
  });
};

readCookies();