
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('feedback-form');
  const successMessage = document.getElementById('feedback-success-message');

  if (form && successMessage) {
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission behavior

      const contentTextarea = form.querySelector('textarea');

      // Basic validation
      if (contentTextarea && contentTextarea.value.trim() === '') {
        alert('Vui lòng nhập nội dung ý kiến của bạn.');
        contentTextarea.focus();
        return;
      }

      // Show the custom success message
      successMessage.classList.add('visible');

      // Reset the form
      form.reset();

      // Hide the message after 5 seconds
      setTimeout(() => {
        successMessage.classList.remove('visible');
      }, 5000);
    });
  }

  // --- Lightbox Gallery Logic ---
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-image');
  const galleryImages = document.querySelectorAll('.gallery-grid img');
  const closeBtn = document.querySelector('.close-button');

  if (modal && modalImg && galleryImages.length > 0 && closeBtn) {
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = img.src;
      });
    });

    const closeModal = () => {
      modal.style.display = "none";
    };

    // Close with the X button
    closeBtn.addEventListener('click', closeModal);

    // Close by clicking the background
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    // Close with Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === "Escape" && modal.style.display === "block") {
        closeModal();
      }
    });
  }
});