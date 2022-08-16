var imageUrls = [];
var $gallery = document.querySelector('main');
var $imageURLInput = document.querySelector('input');
var $addIamageButton = document.querySelector('button');

$addIamageButton.addEventListener('click', function () {
  if ($imageURLInput.value !== '') {
    imageUrls.push($imageURLInput.value);
    $imageURLInput.value = '';
    updatedGallery();
  }
});

function updatedGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updatedGallery();
