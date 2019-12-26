/*Position, scale, rotation, opacity */
//https://www.youtube.com/watch?v=AIdslaUj9wg

(() => {
    const expandMenu = () => {
        document.getElementById('menulist').classList.toggle('active');
    };

    document.getElementById('dropdown').addEventListener('click', expandMenu);
})()
