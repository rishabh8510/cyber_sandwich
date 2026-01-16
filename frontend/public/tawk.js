var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/691b3c90844ab5195bfebbe1/1ja9695t1";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

window.addEventListener("load", () => {
  if (window.Tawk_API) {
    window.Tawk_API.onLoad = function () {
      window.Tawk_API.hideWidget();
    };
  }
});
