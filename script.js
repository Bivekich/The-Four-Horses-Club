//+++++++++++ min_width 576

//--- button anchors
const supportBtn = document.querySelector('.content__buttons-support');
const detailBtn = document.querySelector('.content__buttons-detail');

supportBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 800,
        behavior: 'smooth'
    });
});
detailBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 2600,
        behavior: 'smooth'
    });
});



//--- players slider

let players = Array.from(document.querySelectorAll('.participants__player'));
let visibleCount = 3;
let currentIndex = 0;
let intervalId;
const nextButton_576 = document.querySelector('.participants-slider_nextBtn');
const prevButton_576 = document.querySelector('.participants-slider_prevBtn');

function showPlayers() {
    for (let i = 0; i < players.length; i++) {
        if (i >= currentIndex && i < currentIndex + visibleCount) {
            players[i].style.display = 'flex';
        } else {
            players[i].style.display = 'none';
        }
    }
    updateCounter();
}

function updateCounter() {
    let currentSlideElement = document.getElementById('currentSlide');
    let totalSlidesElement = document.getElementById('totalSlides');

    currentSlideElement.textContent = currentIndex + visibleCount;
    totalSlidesElement.textContent = players.length;
}

function enableButtons() {

    if (currentIndex === 0) {
        prevButton_576.disabled = true;
        prevButton_576.classList.add('participants-slider_disableBtn');
    } else {
        prevButton_576.disabled = false;
        prevButton_576.classList.remove('participants-slider_disableBtn');
    }


    if (currentIndex + visibleCount >= players.length) {
        nextButton_576.disabled = true;
        nextButton_576.classList.add('participants-slider_disableBtn');
    } else {
        nextButton_576.disabled = false;
        nextButton_576.classList.remove('participants-slider_disableBtn');
    }
}

function nextSlide() {
    currentIndex++;
    if (currentIndex + 2 >= players.length) {
        currentIndex = 0;
    }
    showPlayers();
    enableButtons();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = players.length - 6;
    }
    showPlayers();
    enableButtons();
}

nextButton_576.addEventListener('click', () => {
    if (currentIndex + 3 >= players.length) {

    } else {
        nextSlide();
    }
});

prevButton_576.addEventListener('click', () => {
    prevSlide();
});


showPlayers();
enableButtons();
updateCounter();

intervalId = setInterval(nextSlide, 4000);



//+++++++++++ max_width 575

//--- button anchors
const supportBtn_575 = document.querySelector('.content__buttons-support_575');
const detailBtn_575 = document.querySelector('.content__buttons-detail_575');

supportBtn_575.addEventListener('click', function() {
    window.scrollTo({
        top: 820,
        behavior: 'smooth'
    });
});
detailBtn_575.addEventListener('click', function() {
    window.scrollTo({
        top: 3440,
        behavior: 'smooth'
    });
});


//--- stages slider
window.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.main_transformStages_blocks_575-wrapper');
    let blocks = container.children;
    let indicators = document.querySelectorAll('.slider_countSlide__point');

    blocks[0].classList.add('opacity-1');
    indicators[0].classList.add('slider_countSlide__point-current');
    for (let i = 1; i < blocks.length; i++) {
        blocks[i].classList.add('opacity-0');
        indicators[i].classList.remove('slider_countSlide__point-current');
    }

    const nextButton = document.querySelector('.transformStages-slider_nextBtn');
    const prevButton = document.querySelector('.transformStages-slider_prevBtn');

    nextButton.addEventListener('click', () => {
        let activeBlock = container.querySelector('.opacity-1');
        let activeIndicator = document.querySelector('.slider_countSlide__point-current');
        let index = Array.from(blocks).indexOf(activeBlock);
        prevButton.classList.remove('disableBtn');

        if (index === blocks.length - 2) {
            nextButton.classList.add('disableBtn');
        }

        if (index === blocks.length - 1) {
            nextButton.disabled = true;
        } else {
            activeBlock.classList.remove('opacity-1');
            activeBlock.classList.add('opacity-0');
            activeIndicator.classList.remove('slider_countSlide__point-current');

            blocks[index + 1].classList.remove('opacity-0');
            blocks[index + 1].classList.add('opacity-1');
            indicators[index + 1].classList.add('slider_countSlide__point-current');
        }
        prevButton.disabled = false;

    });

    prevButton.addEventListener('click', () => {
        let activeBlock = container.querySelector('.opacity-1');
        let activeIndicator = document.querySelector('.slider_countSlide__point-current');
        let index = Array.from(blocks).indexOf(activeBlock);
        nextButton.classList.remove('disableBtn');

        if (index === 1) {
            prevButton.classList.add('disableBtn');
        }

        if (index === 0) {
            prevButton.disabled = true;
        } else {
            activeBlock.classList.remove('opacity-1');
            activeBlock.classList.add('opacity-0');
            activeIndicator.classList.remove('slider_countSlide__point-current');

            blocks[index - 1].classList.remove('opacity-0');
            blocks[index - 1].classList.add('opacity-1');
            indicators[index - 1].classList.add('slider_countSlide__point-current');
        }
        nextButton.disabled = false;

    });
});

//--- players slider
window.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.main_participants__players_575');
    let blocks = container.children;
    let totalSlides = blocks.length;
    let currentSlide = 1;
    let intervalId;

    blocks[0].classList.add('opacity-1');

    for (let i = 1; i < blocks.length; i++) {
        blocks[i].classList.add('opacity-0');
    }

    const nextButton = document.querySelector('.participants-slider_nextBtn_575');
    const prevButton = document.querySelector('.participants-slider_prevBtn_575');
    const currentSlideSpan = document.getElementById('currentSlide_575');
    const totalSlidesSpan = document.getElementById('totalSlides_575');

    totalSlidesSpan.textContent = totalSlides;
    currentSlideSpan.textContent = currentSlide;

    function nextSlide() {
        let activeBlock = container.querySelector('.opacity-1');
        let index = Array.from(blocks).indexOf(activeBlock);
        activeBlock.classList.remove('opacity-1');
        activeBlock.classList.add('opacity-0');

        currentSlide = (index + 2) > totalSlides ? 1 : index + 2;
        currentSlideSpan.textContent = currentSlide;

        if (index === blocks.length - 1) {
            blocks[0].classList.remove('opacity-0');
            blocks[0].classList.add('opacity-1');
        } else {
            blocks[index + 1].classList.remove('opacity-0');
            blocks[index + 1].classList.add('opacity-1');
        }
    }

    function startInterval() {
        intervalId = setInterval(nextSlide, 4000);
    }

    function stopInterval() {
        clearInterval(intervalId);
    }

    nextButton.addEventListener('click', () => {
        stopInterval();
        nextSlide();
        startInterval();
    });

    prevButton.addEventListener('click', () => {
        stopInterval();
        let activeBlock = container.querySelector('.opacity-1');
        let index = Array.from(blocks).indexOf(activeBlock);
        activeBlock.classList.remove('opacity-1');
        activeBlock.classList.add('opacity-0');

        currentSlide = (index) === 0 ? totalSlides : index;
        currentSlideSpan.textContent = currentSlide;

        if (index === 0) {
            blocks[blocks.length - 1].classList.remove('opacity-0');
            blocks[blocks.length - 1].classList.add('opacity-1');
        } else {
            blocks[index - 1].classList.remove('opacity-0');
            blocks[index - 1].classList.add('opacity-1');
        }
        startInterval();
    });
    startInterval();
});



























