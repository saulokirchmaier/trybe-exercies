window.onload = function() {
    
    function changeMainContentBackgroundColor(newColorBackground) {
        let mainContent = document.querySelector('#main-content');
        mainContent.style.backgroundColor = newColorBackground;
    }

    function changeMainContentTextColor(newTextColor) {
        let mainContent = document.querySelector('#main-content');
        mainContent.style.color = newTextColor;
    }

    function changeMainContentTextSize(newTextSize) {
        let newSize = newTextSize.toString(newTextSize) + 'px';
        let mainContent = document.querySelector('#main-content');
        mainContent.style.fontSize = newSize;
    }

    function changeMainContentLineHeight(newLineHeight) {
        let mainContent = document.querySelector('#main-content');
        mainContent.style.lineHeight = newLineHeight;
    }

    changeMainContentLineHeight('25px');
    
    function changeMainContentFontFamily(newFontFamily) {
        let mainContent = document.querySelector('#main-content');
        mainContent.style.fontFamily = newFontFamily;
    }

    changeMainContentFontFamily('Roboto Mono');

    function changeStyle() {
        let buttonChangeStyle = document.querySelector('#button-change-style');
        let backgroundColorInput = document.querySelector('#background-color-input');
        let textColorInput = document.querySelector('#text-color-input');
        let fontSizeInput = document.querySelector('#font-size-input');
        let lineHeightInput = document.querySelector('#line-height-input');

        buttonChangeStyle.addEventListener('click', function() {
            changeMainContentBackgroundColor(backgroundColorInput.value);
            changeMainContentTextColor(textColorInput.value);
            changeMainContentTextSize(fontSizeInput.value);

        })
    }


    changeStyle();

}
