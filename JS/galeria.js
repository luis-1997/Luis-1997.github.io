const listaImagenes = [];
listaImagenes[0] = 'img/imgGaleria/img1.png'
listaImagenes[1] = 'img/imgGaleria/img2.png'
listaImagenes[2] = 'img/imgGaleria/img3.png'
listaImagenes[3] = 'img/imgGaleria/img4.png'
listaImagenes[4] = 'img/imgGaleria/img5.png'
listaImagenes[5] = 'img/imgGaleria/img6.png'
let img = document.getElementById('cambiarImg');
let item = 0;
function adelante() {
    let img = document.getElementById("cambiarImg");
    if (item >= listaImagenes.length - 1) {
      item = 0;
    } else {
      item++;
    }
    img.src = listaImagenes[item];
      img.className = "fade";
  }
  
  function atras() {
    let img = document.getElementById("cambiarImg");
    if (item <= 0) {
      item = listaImagenes.length - 1;
    } else {
      item--;
    }
    img.src = listaImagenes[item];
    img.className = "fade";
  }