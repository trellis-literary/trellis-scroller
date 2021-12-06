import '../scss/style.scss';

const buildImageScrollers = () => {
    console.log('building scrollers');
    const page = document.getElementById('page');
    const firstSection = page.querySelector('.page-section');

    let scrollers = document.querySelector('.scrollers');
    if (scrollers) { 
        console.warn('SCROLLERS ALREADY LOADED');
        return; 
    }

    scrollers = document.createElement('div');
    scrollers.className = 'scrollers';

    const scrollerOne = document.createElement('div');
    scrollerOne.className = 'scroller';
    scrollerOne.id = 'scroller-one';

    const scrollerTwo = document.createElement('div');
    scrollerTwo.className = 'scroller';
    scrollerTwo.id = 'scroller-two';

    scrollers.appendChild(scrollerOne);
    scrollers.appendChild(scrollerTwo);
    firstSection.appendChild(scrollers);

    /* USE IF WE LOAD IMAGES IN FOOTER */
    const footer = document.querySelector('footer');
    const images = footer.querySelectorAll('img');

    let count = 1;
    [...images].forEach((img, idx) => {
        const scrollerImg = document.createElement('img');
        scrollerImg.src = img.dataset.src;

        idx % 2 ? 
            scrollerOne.appendChild(scrollerImg) :
            scrollerTwo.appendChild(scrollerImg);
    });

    setTimeout(() => { scrollers.classList.add('fade-in'); }, 300);
}

const init = () => {
    console.log('INIT. readyState: ', document.readyState);
    if (window.location.pathname.length > 1) { return; }

    if (document.readyState === 'complete') {
        buildImageScrollers();
    } else {
        document.onreadystatechange = () => {
            console.log('CHANGE. readyState: ', document.readyState);
            if (document.readyState === 'complete') {
                buildImageScrollers();
            }
        }
    }
}

init();