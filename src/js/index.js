import '../scss/style.scss';

const init = () => {
    console.log('HELLO SCRIPT BUNDLER');

    const newDiv = document.createElement('div');
    newDiv.className = 'script-bundler-div';
    newDiv.innerHTML = "This element was created with script-bundler";

    document.body.appendChild(newDiv);
}

init();