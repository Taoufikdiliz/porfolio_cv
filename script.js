// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// TYPED
var typed3 = new Typed(".typed", {
  strings: [
    "Bonjour à tous et à toutes, moi c'est Taoufik, un petit nouveau dans l'univers du code.",
    "Après un parcours professionnel diversifié à dominante commerciale, j'ai décidé de donner un nouvel essor à ma carrière : Développeur Web. Depuis quelques mois à temps plein sur ce projet (formation à distance et approfondissement personnel), je me familiarise aux langages Front pour devenir rapidement un développeur complet et autonome.<br>Plus qu'un avenir professionnel, l’intérêt initial est devenu une passion.",
  ],

  typeSpeed: 35,
});

// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function () {
  const top = $(".counter").offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $(".counter-value").each(function () {
      let $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 10000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    compteur = 1;
  }
});

//AOS
AOS.init();
