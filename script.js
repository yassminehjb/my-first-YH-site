// 1. On cible nos éléments HTML
const hardwareBtn = document.querySelector('.hardware-btn');
const softwareBtn = document.querySelector('.software-btn');

// 2. Fonction pour le bouton Hardware au clic
hardwareBtn.addEventListener('click', function() {
  // On change la couleur de fond du bouton en vert/cyan transparent
  hardwareBtn.style.backgroundColor = "rgba(0, 255, 200, 0.3)";
  // On remet le bouton software normal si on avait cliqué dessus
  softwareBtn.style.backgroundColor = ""; 
});

// 3. Fonction pour le bouton Software au clic
softwareBtn.addEventListener('click', function() {
  // On change la couleur de fond du bouton en violet transparent
  softwareBtn.style.backgroundColor = "rgba(150, 0, 255, 0.3)";
  // On remet le bouton hardware normal si on avait cliqué dessus
  hardwareBtn.style.backgroundColor = ""; 
});