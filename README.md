# trellis-scroller

This project bundles JavaScript and SCSS into a script file that is injected onto trellisliterary.com in order to display an animated scroller of book cover images.

The images are hosted on trellisliterary.com in the homepage footer element where they are hidden by default css on the page:
```
footer .image-block {
  display: none;
}
```

This script pulls any images that have been uploaded into the homepage footer into the scroller element. 

It is designed to work with exactly 32 images. Modifying the number of images may result in broken animation.

to develop locally:
git clone
npm install

to build script:
npm start