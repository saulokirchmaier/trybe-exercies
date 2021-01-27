// Codigo baseado em https://www.w3schools.com/jsref/jsref_sort.asp e https://www.freecodecamp.org/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/

const longestWord = (phrase) => {
    phrase = phrase.split(' ').sort((a,b) => (b.length - a.length));

    return phrase[0];
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
