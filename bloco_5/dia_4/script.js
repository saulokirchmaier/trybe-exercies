window.onload = function() {
    
    function changeMainContentBackgroundColor(newColorBackground) {
        let mainContentBackground = document.querySelector('#main-content');
        mainContentBackground.style.backgroundColor = newColorBackground;
    }

    changeMainContentBackgroundColor('red');

}
