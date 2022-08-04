$(document).ready(function () {
  $("#fullPage").fullpage({
    sectionSelector: ".vertical-scrolling",
    slideSelector: ".horizontal-scrolling",
    anchors: ["intro", "about", "work", "price"],
    controlArrows: false,
    verticalCentered: true,
    // другие опции
  });

  $('a[href*="#"]').on("click.smoothscroll", function (e) {
    var hash = this.hash,
      _hash = hash.replace(/#/, ""),
      theHref = $(this).attr("href").replace(/#.*/, "");
    if (theHref && location.href.replace(/#.*/, "") != theHref) return;
    var $target =
      _hash === "" ? $("body") : $(hash + ', a[name="' + _hash + '"]').first();
    if (!$target.length) return;
    e.preventDefault();
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $target.offset().top - 0 },
        400,
        "swing",
        function () {
          window.location.hash = hash;
        }
      );
  });
  window.onload = function () {
    overlay();
  };

  function overlay() {
    let Main = document.querySelector(".main");
    if (window.innerWidth < 798) {
      Main.classList.add("main-mobile");
    } else {
      Main.classList.remove("main-mobile");
    }
  }
  $(".menu__item").click(function () {
    $("#menu__toggle").prop("checked", false);
  });

  // setTimeout(() => {
  //   $(".yButton").add("yButton-hidden");
  //   console.log("ll");
  // }, 1000);
});
