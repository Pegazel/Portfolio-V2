const smallImages = document.querySelectorAll('.small-img');
const bigImage = document.querySelector('.big-img');

smallImages.forEach((smallImg) => {
    smallImg.addEventListener('click', () => {
        const clickedSrc = smallImg.getAttribute('src');
        smallImg.setAttribute('src', bigImage.getAttribute('src'));
        bigImage.setAttribute('src', clickedSrc);
        bigImage.classList.add('big-img');
    });
});
