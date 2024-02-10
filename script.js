document.addEventListener("DOMContentLoaded", function () {
    const participantsData = [
        { name: 'Хозе-Рауль Капабланка'},
        { name: 'Эммануил Ласкер'},
        { name: 'Александр Алехин'},
        { name: 'Арон Нимцович'},
        { name: 'Рихард Рети'},
        { name: 'Остап Бендер'},
    ]

    const participantWrapper = document.getElementById('participants-wrapper')
    const participantBlocks = document.querySelectorAll('.participants-block')
    const prevButton = document.getElementById('prevButton')
    const nextButton = document.getElementById('nextButton')
    let currentIndex = 0

    function renderParticipants() {
        participantWrapper.style.transform = `translateX(-${currentIndex * 33.33}%)`

        participantBlocks.forEach(function (block, index) {
            let participant = participantsData[currentIndex + index]
            if (participant) {
                block.classList.add('active')
            } else {
                block.classList.remove('active')
            }
        })

        prevButton.disabled = currentIndex === 0
        nextButton.disabled = currentIndex >= participantsData.length - 3

    }

    window.moveParticipants = function(direction) {
        currentIndex += direction
        if (currentIndex < 0) {
            currentIndex = participantsData.length - 1
        } else if (currentIndex >= participantsData.length - 2) {
            currentIndex = 0
        }
        renderParticipants()
    }

    function autoMoveParticipants() {
        moveParticipants(1)
    }

    let intervalId = setInterval(autoMoveParticipants, 4000)

    prevButton.addEventListener('click', () => {
        clearInterval(intervalId);
    });

    nextButton.addEventListener('click', () => {
        clearInterval(intervalId);
    });

    participantWrapper.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    participantWrapper.addEventListener('mouseleave', () => {
        intervalId = setInterval(autoMoveParticipants, 4000);
    });

    renderParticipants()
})

document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault()
        let href = this.getAttribute("href").substring(1)
        const scrollTarget = document.getElementById(href)
        const topOffset = 0
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
        })
    })
})