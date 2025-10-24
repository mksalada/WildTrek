// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle functionality (will be used by navbar component)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Gallery modal functionality
const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.createElement('div');
modal.className = 'hidden fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center';
modal.innerHTML = `
    <div class="relative max-w-4xl w-full">
        <button id="close-modal" class="absolute -top-12 right-0 text-white text-3xl">&times;</button>
        <img id="modal-image" class="max-h-screen max-w-full" src="" alt="">
    </div>
`;
document.body.appendChild(modal);

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const modalImg = document.getElementById('modal-image');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modal.classList.remove('hidden');
    });
});

document.getElementById('close-modal').addEventListener('click', () => {
    modal.classList.add('hidden');
});
