document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".images img");
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal-img");
    const modalTxt = document.querySelector(".modal-txt");
    const closeBtn = document.querySelector(".close");
    const btnPrev = document.querySelector(".btnprev");
    const btnNext = document.querySelector(".btnnext");
    let currentIndex = 0;

    images.forEach((image, index) => {
        image.addEventListener("click", function () {
            currentIndex = index;
            updateModalContent();
            modal.classList.add("show");
        });
    });

    function updateModalContent() {
        const image = images[currentIndex];
        modalImg.classList.remove("show");
       setTimeout(()=>{
        modalImg.src = image.src;
        modalTxt.innerHTML = image.alt;
        modalImg.classList.add("show");
       },300);
       
    }

    closeBtn.addEventListener("click", function () {
        modal.classList.remove("show");
    });

    btnPrev.addEventListener("click", function () {
        currentIndex = currentIndex -1< 0 ? images.length - 1 : currentIndex - 1;
        updateModalContent();
    });

    btnNext.addEventListener("click", function () {
        currentIndex = currentIndex +1 >= images.length  ? 0 : currentIndex + 1;
        updateModalContent();
    });
});
