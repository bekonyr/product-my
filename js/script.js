const themeBtn = document.getElementById('theme');

themeBtn.addEventListener('click', () => {
    themeBtn.style.rotate = '180deg';
    document.body.classList.toggle('dark');
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
});
