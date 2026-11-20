// Script commun à toutes les pages : fait apparaître les blocs quand on arrive dessus.
// La classe "js" n'est ajoutée que si le JavaScript marche : sinon tout reste visible.
document.documentElement.classList.add("js");

const observateur = new IntersectionObserver(function (entrees) {
  entrees.forEach(function (entree) {
    if (entree.isIntersecting) {
      entree.target.classList.add("visible"); // lance l'animation CSS
      observateur.unobserve(entree.target);   // une seule fois suffit
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".apparait").forEach(function (el) {
  observateur.observe(el);
});
