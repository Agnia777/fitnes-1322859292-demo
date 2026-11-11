// Появление блоков при прокрутке + тень у шапки

(function () {
  document.documentElement.classList.add("js");

  var targets = document.querySelectorAll(".section, .facts, .final");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in"); });
  } else {
    targets.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(function (el) { io.observe(el); });
  }

  var bar = document.querySelector(".bar");
  if (bar) {
    var onScroll = function () {
      bar.style.borderBottomColor = window.scrollY > 8 ? "#ded2d8" : "#e8dfe3";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
