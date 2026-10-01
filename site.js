const dialog = document.querySelector('.photo-dialog');
if (dialog) {
  const photos = Array.from(document.querySelectorAll('.photo-button'));
  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('p');
  let current = 0;
  function show(index) {
    current = (index + photos.length) % photos.length;
    const photo = photos[current];
    image.src = photo.dataset.full;
    image.alt = photo.querySelector('img').alt;
    caption.textContent = photo.dataset.caption;
  }
  photos.forEach((photo, index) => photo.addEventListener('click', () => { show(index); dialog.showModal(); }));
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.dialog-prev').addEventListener('click', () => show(current - 1));
  dialog.querySelector('.dialog-next').addEventListener('click', () => show(current + 1));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  document.addEventListener('keydown', event => {
    if (!dialog.open) return;
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
}
