# trellis-scroller

This project bundles JavaScript and SCSS into a script file that is injected onto the [Trellis Literary homepage](https://trellisliterary.com) in order to display an animated scroller of book cover images.

The latest release from the file: `dist/index.bundle.js` is published and delivered using [jsDelivr](https://www.jsdelivr.com/) with an endpoint in the following format:
```
https://cdn.jsdelivr.net/gh/trellis-literary/trellis-scroller@2.0.0/dist/index.bundle.js
```

The images that populate the scroller are hosted on trellisliterary.com in the homepage footer element, where they are hidden by default css on the page as follows:
```
footer .image-block {
  display: none;
}
```

This script pulls any images that have been uploaded into the homepage footer into the scroller element. It is designed to work with exactly 32 images. Modifying the number of images may result in broken animation.

to develop locally:
```
git clone
npm install
```

to build script:
```
npm start
```
