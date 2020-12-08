window.onload = function() {
    
    function changeMainContentBackgroundColor(newColorBackground) {
        let mainContent = document.querySelector('#main-content');
        mainContent.style.backgroundColor = newColorBackground;
    }

    changeMainContentBackgroundColor('lightgreen');

    function changeMainContentTextColor(newTextColor) {
        let mainContent = document.querySelector('#main-content');
        mainContent.style.color = newTextColor;
    }

    changeMainContentTextColor('green');

    function changeMainContentTextSize(newTextSize) {
        let mainContent = document.querySelector('#main-content');
        mainContent.style.fontSize = newTextSize;
    }

    changeMainContentTextSize('20px');
    
}
