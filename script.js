// Placeholder for future JavaScript transitions and interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Add JavaScript code for animations and transitions here
});
document.addEventListener('DOMContentLoaded', function() {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    const videoPopup = document.getElementById('video-popup');
    const youtubeVideo = document.getElementById('youtube-video');

    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video');
            youtubeVideo.src = videoUrl;
            videoPopup.style.display = 'flex';
        });
    });

    videoPopup.addEventListener('click', function(e) {
        if (e.target === this) {
            youtubeVideo.src = '';
            videoPopup.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const popupTriggers = document.querySelectorAll('.popup-trigger');
    const popups = document.querySelectorAll('.popup');
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay';
    document.body.appendChild(popupOverlay);

    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();
            const popupId = this.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            popup.classList.add('active');
            popupOverlay.classList.add('active');
        });
    });

    popupOverlay.addEventListener('click', function() {
        popups.forEach(popup => popup.classList.remove('active'));
        popupOverlay.classList.remove('active');
    });
});

function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}
