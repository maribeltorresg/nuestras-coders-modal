
var selectPromo = document.getElementById('select-promo');
var imagesContainer =document.getElementById('images-container');
// var subImagesContainer = null;

imagesContainer.addEventListener('click',showModal)

selectPromo.addEventListener('change', subPromo);

// arrays de las promociones: alumnas
var arr4Chile = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
var arr5Lima = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var arr6Lima = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];

{/* <img src="assets/images/4-chile/anais-araya.jpg" alt="anais"> */}

// metodo que muestra las coders
// primer parametro un array de nombres
// segundo parametro en str que indica la promo
function showCoders(arr, promo) {
  // verifico si tiene subImage...
  // if (subImagesContainer) {
  //   imagesContainer.removeChild(subImagesContainer);
  // }
  // // vuelve a crear
  // subImagesContainer = document.createElement('div');
  // // agrega otra ves
  // imagesContainer.appendChild(subImagesContainer);
  
  for (var i = 0; i < arr.length; i++) {
    createImage(promo, arr[i]);
  }
}

// constantes de ruta para el directorio
var CHILE4 = '4-Chile';
var LIMA5 = '5-lima';
var LIMA6 = '6-lima';

// metodo que muestra
function createImage(promo, nombre) {
  var img = document.createElement('img');

  img.setAttribute('src', 'assets/images/' + promo + '/'+ nombre +'.jpg');

  // subImagesContainer.appendChild(img);
  imagesContainer.appendChild(img);

}
// alguna promoción que ya eligio
function subPromo(event) {
  switch(true) {
    case event.target.value === '4chile':
      imagesContainer.textContent = '';
      showCoders(arr4Chile, CHILE4)
    break;
    case event.target.value === '5lima':
      imagesContainer.textContent = '';
      showCoders(arr5Lima, LIMA5)
    break;
    case event.target.value === '6lima':
      imagesContainer.textContent = '';
      showCoders(arr6Lima, LIMA6)
    break;
    default:
      imagesContainer.textContent = '';
      showCoders(arr4Chile, CHILE4);
      showCoders(arr5Lima, LIMA5);
      showCoders(arr6Lima, LIMA6);
  }
}

showCoders(arr4Chile, CHILE4);
showCoders(arr5Lima, LIMA5);
showCoders(arr6Lima, LIMA6);

function showModal(event) {
  // console.log(event.target)
  var modal = document.createElement('div');

  modal.style .position = 'fixed';
  modal.style.background = 'rgba(0,0,0,0.7)'
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';

  modal.appendChild(event.target);

  event.target.style.display = 'block'
  // calc(50% + 75px)
  event.target.style.margin = window.innerHeight / 4 + 'px auto';

  //  agreagar el modal
  document.body.appendChild(modal);

  modal.addEventListener('click', function(event) {
    event.target.parentElement.removeChild(event.target)
  })
}









