window.onload = function() {
    
    function changeMainContentBackgroundColor(newColorBackground) {
        let mainContent = document.querySelector('#main-content');
        mainContent.style.backgroundColor = newColorBackground;
    }

    changeMainContentBackgroundColor();

    function changeMainContentTextColor(newTextColor) {
        let mainContent = document.querySelector('#main-content');
        mainContent.style.color = newTextColor;
    }

    changeMainContentTextColor();
}
