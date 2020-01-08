/*Position, scale, rotation, opacity */
//https://www.youtube.com/watch?v=AIdslaUj9wg
const expandMenu = () => {
    document.getElementById('menulist').classList.toggle('active');
};

document.getElementById('dropdown').addEventListener('click', expandMenu);

const ImageSlider = (() => {
    const images = [];
    let currentPosition = 0;

    const transitionBackwards = (event, slideAmount) => {
        slideAmount = slideAmount ? slideAmount : 1;
        currentLeft = parseFloat(getComputedStyle(document.getElementById('image-container')).left);
        if (currentPosition > 0) {
            document.getElementById('image-container').style.left = (currentLeft + 500 * slideAmount) + 'px';
            toggleColorBubble(currentPosition);
            currentPosition-=slideAmount;
            toggleColorBubble(currentPosition);
        };
    };

    const transitionForwards = (event, slideAmount) => {
        slideAmount = slideAmount ? slideAmount : 1;
        currentLeft = parseFloat(getComputedStyle(document.getElementById('image-container')).left);
        if (currentPosition < images.length - 1) {
            document.getElementById('image-container').style.left = (currentLeft - 500 * slideAmount) + 'px';
            toggleColorBubble(currentPosition);
            currentPosition+=slideAmount;
            toggleColorBubble(currentPosition);
        };
    };

    const changeImage = () => {
       const tempIdArray = event.target.id.split('-');
        const tempId = Number(tempIdArray[1])
       if (tempId > currentPosition) {
            transitionForwards(null, tempId - currentPosition);
       } else if (tempId < currentPosition) {
            transitionBackwards(null, currentPosition - tempId);
       }
    };

    const setImages = () => {
        const imageContainer = document.getElementById('image-container');

        for (let i = 0; i < images.length; i++) {
            imageContainer.appendChild(createImageElement(images[i], i));
        };

        setBubbles();
    };

    const setBubbles = () => {
        const bubbles = document.getElementById('bubbles');

        for (let i = 0; i < images.length; i++) {
            bubbles.appendChild(createBubbleElement(i));
            document.getElementById(`bubble-${i}`).addEventListener('click', changeImage);
        };

        toggleColorBubble(currentPosition);
    }

    const createBubbleElement = function (index) {
        const newBubbleElement = document.createElement('span');
        newBubbleElement.className = "bubble";
        newBubbleElement.id = `bubble-${index}`;
        return newBubbleElement;
    }

    const toggleColorBubble = function (index) {
        document.getElementById(`bubble-${index}`).classList.toggle('active-bubble');
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
        setImages,
        transitionForwards
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

const timedSlider = function() {
    ImageSlider.transitionForwards();

    setTimeout(timedSlider, 5000);
}

const corgiOne = new Image('img/corgi1.jpg', 'first');
const corgiTwo = new Image('img/corgi2.jpg', 'two');
const corgiThree = new Image('img/corgi3.jpg', 'three');

ImageSlider.images.push(corgiOne, corgiTwo, corgiThree);

ImageSlider.setImages();

setTimeout(timedSlider, 5000);
