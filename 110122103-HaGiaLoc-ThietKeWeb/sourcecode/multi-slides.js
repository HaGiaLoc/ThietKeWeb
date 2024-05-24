let slideIndex = 0;
    const slidesToShow = 3;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let manualSlideChange = false;

    function updateSlides() {
        const slideshowWrapper = document.querySelector('.slides');
        slideshowWrapper.style.transform = `translateX(-${(100 / slidesToShow) * slideIndex}%)`;
    }

    function moveSlides(n) {
        slideIndex += n;
        if (slideIndex < 0) {
            slideIndex = totalSlides - slidesToShow;
        } else if (slideIndex >= totalSlides - slidesToShow + 1) {
            slideIndex = 0;
        }
        updateSlides();
        manualSlideChange = true; // Đánh dấu rằng chuyển slide đã được thực hiện thủ công
    }

    // Tự động chuyển slide sau mỗi 3 giây, nhưng chỉ khi không có sự chuyển slide thủ công
    setInterval(() => {
        if (!manualSlideChange) {
            moveSlides(1);
        }
        manualSlideChange = false; // Đặt lại biến manualSlideChange sau mỗi lần tự động chuyển slide
    }, 5000);