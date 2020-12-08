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
        let mainContent = document.querySelector('#main-text');
        mainContent.style.backgroundColor = newColorBackground;
    }

    function changeMainContentTextColor(newTextColor) {
        let mainContent = document.querySelector('#main-text');
        mainContent.style.color = newTextColor;
    }

    function changeMainContentTextSize(newTextSize) {
        let newSize = newTextSize.toString() + 'px';
        let mainContent = document.querySelector('#main-text');
        mainContent.style.fontSize = newSize;
    }

    function changeMainContentLineHeight(newLineHeight) {
        let newHeight = newLineHeight.toString() +'px';
        let mainContent = document.querySelector('#main-text');
        mainContent.style.lineHeight = newLineHeight;
    }
    
    function changeMainContentFontFamily(newFontFamily) {
        let mainContent = document.querySelector('#main-text');
        mainContent.style.fontFamily = newFontFamily;
        selectedFontFamily = document.querySelector('#selected-font-falimy');
        selectedFontFamily.innerText = newFontFamily;
    }

    let backgroundColorInput;
    let textColorInput;
    let fontSizeInput;
    let lineHeightInput;
    let fontFamilyInput;
    let selectedFontFamily;

    function changeStyle() {
        let buttonChangeStyle = document.querySelector('#button-change-style');
        backgroundColorInput = document.querySelector('#background-color-input');
        textColorInput = document.querySelector('#text-color-input');
        fontSizeInput = document.querySelector('#font-size-input');
        lineHeightInput = document.querySelector('#line-height-input');
        fontFamilyInput = document.querySelector('#font-type');

        buttonChangeStyle.addEventListener('click', function() {
            changeMainContentBackgroundColor(backgroundColorInput.value);
            changeMainContentTextColor(textColorInput.value);
            changeMainContentTextSize(fontSizeInput.value);
            changeMainContentLineHeight(lineHeightInput.value);
            changeMainContentFontFamily(fonts.robotoMono);
            changeMainContentFontFamily(fontFamilyInput.value);
            fontFamilyInput.value = '';
        })
    }

    changeStyle();

    function showSelectedStyle() {
        let selectedStyle = document.querySelector('.selected-style');

        backgroundColorInput = document.querySelector('#background-color-input');
        textColorInput = document.querySelector('#text-color-input');
        fontSizeInput = document.querySelector('#font-size-input');
        lineHeightInput = document.querySelector('#line-height-input');
        fontFamilyInput = document.querySelector('#font-type');


        
    }

}
