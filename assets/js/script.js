const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.carousel-slide');
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');
        const indicators = document.querySelectorAll('.indicator');
        let index = 0;

        function showSlide(i) {
            const totalSlides = slides.length;
            if (i >= totalSlides) index = 0;
            if (i < 0) index = totalSlides - 1;
            document.querySelector('.carousel-wrapper').style.transform = `translateX(-${index * 100}%)`;
            indicators.forEach(ind => ind.classList.remove('active'));
            indicators[index].classList.add('active');
        }

        nextButton.addEventListener('click', () => {
            index++;
            showSlide(index);
        });

        prevButton.addEventListener('click', () => {
            index--;
            showSlide(index);
        });

        indicators.forEach((ind, i) => {
            ind.addEventListener('click', () => {
                index = i;
                showSlide(index);
            });
        });

        showSlide(index);
    });

