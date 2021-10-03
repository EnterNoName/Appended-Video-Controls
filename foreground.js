fetch(chrome.runtime.getURL("/src/html/controller.html"))
   .then((r) => r.text())
   .then((html) => {
      document.body.insertAdjacentHTML("beforeend", html);
   });
