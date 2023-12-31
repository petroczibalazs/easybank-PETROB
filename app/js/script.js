
const gallery_cover = document.querySelector('.cover-gallery');
const galleryImg = gallery_cover.querySelector('img');
const gallery_button = gallery_cover.querySelector('button');
const body = document.body;

gallery_button.addEventListener('click', () => gallery_cover.classList.remove('show'));


document.querySelector('.articles').addEventListener('click', handleGalleryClick);

function handleGalleryClick(event){


  let viewPortWidth = body.offsetWidth;

  if(viewPortWidth < 700) return;

  const target = event.target;

  if(target.nodeName !='IMG') return;
  galleryImg.setAttribute('src', target.src);
  gallery_cover.classList.add('show');
}

