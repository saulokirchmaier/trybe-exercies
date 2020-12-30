window.onload = function() {
    let fonts = {
        castoro: 'Castoro',
        jetBrainsMono: 'JetBrains Mono',
        lato: 'Lato',
        montserrat: 'Montserrat',
        openSans: 'Open Sans',
        robotoMono: 'Roboto Mono',
    };

    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, value);
    };

    function changeMainContentBackgroundColor(newColorBackground) {
        let mainContent = document.querySelector('#main-text');
        mainContent.style.backgroundColor = newColorBackground;
        saveToLocalStorage('backgroudColor', newColorBackground);
    }

    function changeMainContentTextColor(newTextColor) {
        let mainContent = document.querySelector('#main-text');
        mainContent.style.color = newTextColor;
        saveToLocalStorage('textColor', newTextColor);
    }

    function changeMainContentTextSize(newTextSize) {
        let newSize = newTextSize.toString() + 'px';
        let mainContent = document.querySelector('#main-text');
        mainContent.style.fontSize = newSize;
        saveToLocalStorage('textSize', newTextSize);
    }

    function changeMainContentLineHeight(newLineHeight) {
        let mainContent = document.querySelector('#main-text');
        mainContent.style.lineHeight = newLineHeight;
        saveToLocalStorage('lineHeight', newLineHeight);
    }
    
    function changeMainContentFontFamily(newFontFamily) {
        let mainContent = document.querySelector('#main-text');
        mainContent.style.fontFamily = newFontFamily;
        selectedFontFamily = document.querySelector('#selected-font-falimy');
        selectedFontFamily.innerText = newFontFamily;
        saveToLocalStorage('fontFamily', newFontFamily);
    }

    function getSavedStyle() {
        const backgroudColor = localStorage.getItem('backgroudColor');
        const textColor = localStorage.getItem('textColor');
        const textSize = localStorage.getItem('textSize');
        const lineHeight = localStorage.getItem('lineHeight');
        const fontFamily = localStorage.getItem('fontFamily');

        changeMainContentBackgroundColor(backgroudColor);
        changeMainContentTextColor(textColor);
        changeMainContentFontFamily(fontFamily);
        changeMainContentTextSize(textSize);
        changeMainContentLineHeight(lineHeight);
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
    getSavedStyle();
}
