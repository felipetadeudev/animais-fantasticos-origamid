function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('active')

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('active')
            })
            tabContent[index].classList.add('active');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function () {
                activeTab(index)
            })
        })
    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'active'

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)

        function activeAccordion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion)
        })
    }
}
initAccordion();

function initAnimateScroll() {

    const sections = document.querySelectorAll('.js-scroll')

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animateScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('active')
                }
            })
        }
    }
    animateScroll();

    window.addEventListener('scroll', animateScroll)
}
initAnimateScroll();