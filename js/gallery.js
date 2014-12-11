(function(document, window) {
   'use strict';

   function Gallery(photos, container) {
      this.currentIndex = 0;
      this.photos = photos;
      this.container = container;

      this.showPhoto(this.currentIndex);
   }

   Gallery.prototype.showPhoto = function(index) {
      if (index >= 0 && index < this.photos.length) {
         this.currentIndex = index;
         this.container.src = Flickr.buildPhotoLargeUrl(this.photos[this.currentIndex]);
      }
   };

   Gallery.prototype.showPrevious = function() {
      if (this.currentIndex > 0) {
         this.currentIndex--;
      }

      this.showPhoto(this.currentIndex);
   };

   Gallery.prototype.showNext = function() {
      if (this.currentIndex < this.photos.length - 1) {
         this.currentIndex++;
      }

      this.showPhoto(this.currentIndex);
   };

   Gallery.prototype.createThumbnailsGallery = function(container) {
      function clickHandler(index, gallery) {
         return function (event) {
            event.preventDefault();

            gallery.showPhoto(index);
         };
      }

      container.textContent = '';
      var image, link, listItem;
      for (var i = 0; i < this.photos.length; i++) {
         image = document.createElement('img');
         image.src = Flickr.buildThumbnailUrl(this.photos[i]);
         image.className = 'thumbnail';
         image.alt = this.photos[i].title;
         image.title = this.photos[i].title;

         link = document.createElement('a');
         link.href = image.src;
         link.addEventListener('click', clickHandler(i, this));
         link.appendChild(image);

         listItem = document.createElement('li');
         listItem.appendChild(link);

         container.appendChild(listItem);
      }
   };

   window.Gallery = Gallery;
})(document, window);