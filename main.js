/*Position, scale, rotation, opacity */
//https://www.youtube.com/watch?v=AIdslaUj9wg
const expandMenu = () => {
    document.getElementById('menulist').classList.toggle('active');
};

document.getElementById('dropdown').addEventListener('click', expandMenu);

const ImageSlider = (() => {
    const images = [];
    let currentPosition = 0;

    const transitionBackwards = () => {

    };

    const transitionForwards = () => {

    };
   
    const changeImage = () => {

    };

    const setImages = () => {
        const pictureFrame = document.getElementById('pictureframe');

        for (let i = 0; i < images.length; i++) {
            pictureFrame.appendChild(createImageElement(images[i], i));
        };

        setBubbles();
    };

    const setBubbles = () => {
        const bubbles = document.getElementById('bubbles');

        for (let i = 0; i < images.length; i++) {
            bubbles.appendChild(createBubbleElement(i));
        };
    }

    const createBubbleElement = function(index) {
        const newBubbleElement = document.createElement('span');
        newBubbleElement.className = "bubble";
        newBubbleElement.id = `bubble-${index}`;
        return newBubbleElement;
    }

    const createImageElement = function (image, index) {
        const newImageElement = document.createElement('div');
        newImageElement.className = 'image-item';
        newImageElement.id = `image-item-${index}`;
        newImageElement.innerHTML = `<img src="${image.getSource()}" alt="${image.getName()}">`;
        return newImageElement;
    };

    document.getElementById('backward').addEventListener('click', transitionBackwards);
    document.getElementById('forward').addEventListener('click', transitionForwards);

    return {
        images,
        setImages
    };
})();

const Image = function (source, name) {
    const getSource = () => source;
    const getName = () => name;

    return {
        getSource,
        getName
    };
};

const corgiOne = new Image('img/corgi1.jpg', 'first');
const corgiTwo = new Image('img/corgi2.jpg', 'two');
const corgiThree = new Image('img/corgi3.jpg', 'three');

ImageSlider.images.push(corgiOne, corgiTwo, corgiThree);

ImageSlider.setImages();
