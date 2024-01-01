
const gallery_cover = document.querySelector('.cover-gallery');
const galleryImg = gallery_cover.querySelector('img');
const gallery_button = gallery_cover.querySelector('button');

const body = document.body;
const list  = body.classList;
const hamburger = document.querySelector('.hamburger');


/* event listener for the hamburger menu in the header element*/

hamburger.addEventListener('click', (e) => {

  hamburger.classList.toggle('open');
  list.toggle('active');
  (list.contains('active')? list.remove('inactive') : list.add('inactive'));
});

gallery_button.addEventListener('click', () => gallery_cover.classList.remove('show'));


/* event listener function attached to the images in the articles section */
document.querySelector('.articles').addEventListener('click', handleGalleryClick);

function handleGalleryClick(event){


  let viewPortWidth = body.offsetWidth;

  if(viewPortWidth < 700) return;

  const target = event.target;

  if(target.nodeName !='IMG') return;
  galleryImg.setAttribute('src', target.src);
  gallery_cover.classList.add('show');
}







