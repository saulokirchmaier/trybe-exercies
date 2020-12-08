window.onload = function() {
    let fonts = {
        castoro: 'Castoro',
        jetBrainsMono: 'JetBrains Mono',
        lato: 'Lato',
        montserrat: 'Montserrat',
        openSans: 'Open Sans',
        robotoMono: 'Roboto Mono',
    };

    function changeMainContentBackgroundColor(newColorBackground) {
        let mainContent = document.querySelector('#main-content');
        mainContent.style.backgroundColor = newColorBackground;
    }

    function changeMainContentTextColor(newTextColor) {
        let mainContent = document.querySelector('#main-content');
        mainContent.style.color = newTextColor;
    }

    function changeMainContentTextSize(newTextSize) {
        let newSize = newTextSize.toString() + 'px';
        let mainContent = document.querySelector('#main-content');
        mainContent.style.fontSize = newSize;
    }

    function changeMainContentLineHeight(newLineHeight) {
        let newHeight = newLineHeight.toString() +'px';
        let mainContent = document.querySelector('#main-content');
        mainContent.style.lineHeight = newLineHeight;
    }
    
    function changeMainContentFontFamily(newFontFamily) {
        let mainContent = document.querySelector('#main-content');
        mainContent.style.fontFamily = newFontFamily;
    }

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
            changeMainContentLineHeight(lineHeightInput.value);
            changeMainContentFontFamily(fonts.robotoMono);
        })
    }


    changeStyle();

}
