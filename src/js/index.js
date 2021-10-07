import lozad from 'lozad'
import images from './bookCovers';
import '../scss/style.scss';
import bookCovers from './bookCovers';

const mockSrc = 'https://images.squarespace-cdn.com/content/v1/5e7a44a18fd13046931c18bf/1617047010557-967SKF5JLONT4GJ8Y12K/AFTERLIFE+paperback.jpg';

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

    // const footer = document.querySelector('footer');
    // const images = footer.querySelectorAll('img');

    // let count = 0;
    // while (count < 32) {
    //     count++;

    //     const scrollerImg = document.createElement('div');
    //     scrollerImg.className = 'item';
    //     scrollerImg.innerHTML = count;

    //     scrollerOne.appendChild(scrollerImg);

    //     count % 2 ? 
    //         scrollerOne.appendChild(scrollerImg) :
    //         scrollerTwo.appendChild(scrollerImg);
    // }

    // console.log("ONE: ", scrollerOne.children.length, "TWO: ", scrollerTwo.children.length);

    let count = 1;
    [...images].forEach((imgSrc, idx) => {
        // const imgSrc = image.getAttribute("data-src");

        

        if (idx % 2) {
            const scrollerImg = document.createElement('img');
            scrollerImg.classList.add = 'lozad';
            scrollerImg.src = imgSrc;
            scrollerOne.appendChild(scrollerImg);
        } else {
            const scrollerImg = document.createElement('div');
            scrollerImg.className = 'item';
            scrollerImg.innerHTML = count;
            scrollerTwo.appendChild(scrollerImg);
            count++;
        }

        // idx % 2 ? 
        //     scrollerOne.appendChild(scrollerImg) :
        //     scrollerTwo.appendChild(scrollerImg);
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