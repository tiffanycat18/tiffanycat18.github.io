// Sample book pages data - Replace these with your actual images
    const bookPages = [
      { img: 'Book/1.png' },
      { img: 'Book/5.png' },
      { img: 'Book/6.png' },
      { img: 'Book/7.png' },
      { img: 'Book/8.png' },
      { img: 'Book/9.png' },
      { img: 'Book/10.png' },
      { img: 'Book/11.png' },
      { img: 'Book/12.png' },
      { img: 'Book/13.png' },
      { img: 'Book/14.png' },
      { img: 'Book/15.png' },
{ img: 'Book/16.png' },
{ img: 'Book/17.png' },
{ img: 'Book/18.png' },
{ img: 'Book/19.png' },
{ img: 'Book/20.png' },
{ img: 'Book/21.png' },
{ img: 'Book/22.png' },
{ img: 'Book/23.png' },
{ img: 'Book/24.png' },
{ img: 'Book/25.png' },
{ img: 'Book/26.png' },
{ img: 'Book/27.png' },
{ img: 'Book/28.png' },
{ img: 'Book/29.png' },
{ img: 'Book/30.png' },
{ img: 'Book/31.png' },
{ img: 'Book/32.png' },
{ img: 'Book/33.png' },
{ img: 'Book/34.png' },
{ img: 'Book/35.png' },
{ img: 'Book/36.png' },
{ img: 'Book/37.png' },
{ img: 'Book/38.png' },
{ img: 'Book/39.png' },
{ img: 'Book/40.png' },
{ img: 'Book/41.png' },
{ img: 'Book/42.png' },
{ img: 'Book/43.png' },
{ img: 'Book/44.png' },
{ img: 'Book/45.png' },
{ img: 'Book/46.png' },
{ img: 'Book/47.png' },
{ img: 'Book/48.png' },
{ img: 'Book/49.png' },
{ img: 'Book/50.png' },
{ img: 'Book/51.png' },
{ img: 'Book/52.png' },
{ img: 'Book/53.png' },
{ img: 'Book/54.png' },
{ img: 'Book/55.png' },
{ img: 'Book/56.png' },
{ img: 'Book/57.png' },
{ img: 'Book/58.png' },
{ img: 'Book/59.png' },
{ img: 'Book/60.png' },
{ img: 'Book/61.png' },
{ img: 'Book/62.png' },
{ img: 'Book/63.png' },
{ img: 'Book/64.png' },
{ img: 'Book/65.png' },
{ img: 'Book/66.png' },
{ img: 'Book/67.png' },
{ img: 'Book/68.png' },
{ img: 'Book/69.png' },
{ img: 'Book/70.png' },
{ img: 'Book/71.png' },
{ img: 'Book/72.png' },
{ img: 'Book/73.png' },
{ img: 'Book/74.png' },
{ img: 'Book/75.png' },
{ img: 'Book/76.png' },
{ img: 'Book/77.png' },
{ img: 'Book/78.png' },
{ img: 'Book/79.png' },
{ img: 'Book/80.png' },
{ img: 'Book/81.png' },
{ img: 'Book/82.png' },
{ img: 'Book/83.png' },
{ img: 'Book/84.png' },
{ img: 'Book/85.png' },
{ img: 'Book/86.png' },
{ img: 'Book/87.png' },
{ img: 'Book/88.png' },
{ img: 'Book/89.png' },
{ img: 'Book/90.png' },
{ img: 'Book/91.png' },
{ img: 'Book/92.png' },
{ img: 'Book/93.png' },
{ img: 'Book/95.png' },
{ img: 'Book/96.png' },
{ img: 'Book/97.png' },
{ img: 'Book/98.png' },
{ img: 'Book/100.png' },
{ img: 'Book/101.png' },
{ img: 'Book/102.png' },
{ img: 'Book/103.png' },
{ img: 'Book/104.png' },
{ img: 'Book/105.png' },
{ img: 'Book/106.png' },
{ img: 'Book/107.png' },
{ img: 'Book/108.png' },
{ img: 'Book/109.png' },
{ img: 'Book/110.png' },
{ img: 'Book/111.png' },
{ img: 'Book/112.png' },
{ img: 'Book/113.png' },
{ img: 'Book/114.png' },
{ img: 'Book/115.png' },
{ img: 'Book/116.png' },
{ img: 'Book/117.png' },
{ img: 'Book/118.png' },
{ img: 'Book/119.png' },
{ img: 'Book/120.png' },
{ img: 'Book/121.png' },
{ img: 'Book/122.png' },
{ img: 'Book/123.png' },
{ img: 'Book/124.png' },
{ img: 'Book/125.png' },
{ img: 'Book/126.png' },
{ img: 'Book/127.png' },
{ img: 'Book/128.png' },
{ img: 'Book/129.png' },
{ img: 'Book/130.png' },
{ img: 'Book/131.png' }
    ];

    let currentImageIndex = 0;

    // Render gallery
    function renderGallery() {
      const gallery = document.getElementById('gallery');
      bookPages.forEach((page, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.onclick = () => openLightbox(index);

        item.innerHTML = `
          <img src="${page.img}" alt="${page.title}">
        `;

        gallery.appendChild(item);
      });
    }

    // Open lightbox
    function openLightbox(index) {
      currentImageIndex = index;
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');

      lightboxImg.src = bookPages[index].img;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox() {
      const lightbox = document.getElementById('lightbox');
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }

    // Navigate images
    function navigateImage(direction) {
      currentImageIndex += direction;

      if (currentImageIndex < 0) {
        currentImageIndex = bookPages.length - 1;
      } else if (currentImageIndex >= bookPages.length) {
        currentImageIndex = 0;
      }

      const lightboxImg = document.getElementById('lightbox-img');
      lightboxImg.src = bookPages[currentImageIndex].img;
    }

    // Init after DOM is ready
    window.addEventListener('load', () => {
      renderGallery();

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        if (lightbox.classList.contains('active')) {
          if (e.key === 'Escape') closeLightbox();
          if (e.key === 'ArrowLeft') navigateImage(-1);
          if (e.key === 'ArrowRight') navigateImage(1);
        }
      });

      // Close lightbox when clicking outside image
      const lightbox = document.getElementById('lightbox');
      lightbox.addEventListener('click', (e) => {
        if (e.target.id === 'lightbox') {
          closeLightbox();
        }
      });
    });