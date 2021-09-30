import lozad from 'lozad'
import '../scss/style.scss';

const buildImageScrollers = () => {
    console.log('HELLO SCRIPT BUNDLER');

    const newDiv = document.createElement('div');
    newDiv.className = 'script-bundler-div';
    newDiv.innerHTML = "This element was created with script-bundler";

    const scrollerOne = document.createElement('div');
    scrollerOne.className = 'scroller';
    scrollerOne.id = 'scroller-one';

    const scrollerTwo = document.createElement('div');
    scrollerTwo.className = 'scroller';
    scrollerTwo.id = 'scroller-two';

    scrollers.appendChild(scrollerOne);
    scrollers.appendChild(scrollerTwo);
    firstSection.appendChild(scrollers);

    const footer = document.querySelector('footer');
    const images = footer.querySelectorAll('img');

    [...images].forEach((image, idx) => {
        const imgSrc = image.getAttribute("data-src");

        const newImg = document.createElement('img');
        newImg.className = 'lozad';
        newImg.src = imgSrc;
        newImg.setAttribute('data-image-resolution', '2500w')

        idx % 2 ? 
            scrollerOne.appendChild(newImg) :
            scrollerTwo.appendChild(newImg);
    });
}

const init = () => {
    console.log('INIT. readyState: ', document.readyState, 'document: ', document);
    if (document.readyState !== "loading") {
        buildImageScrollers();
    } else {
        document.onreadystatechange = () => {
            console.log('CHANGE. readyState: ', document.readyState, 'document: ', document);
            if ( document.readyState !== 'loading') {
                buildImageScrollers();
            }
        }
    }
}

init();