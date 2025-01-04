// བོད་ཡིག་གི་ཡིག་འབྲུ་གཞི་རྐྱང་།
const basicTibetanChars = [
    'ཀ', 'ཁ', 'ག', 'ང', 
    'ཅ', 'ཆ', 'ཇ', 'ཉ',
    'ཏ', 'ཐ', 'ད', 'ན',
    'པ', 'ཕ', 'བ', 'མ',
    'ཙ', 'ཚ', 'ཛ', 'ཝ',
    'ཞ', 'ཟ', 'འ', 'ཡ',
    'ར', 'ལ', 'ཤ', 'ས',
    'ཧ', 'ཨ'
];

// བོད་ཡིག་གི་དབྱངས།
const vowels = ['ཨི', 'ཨུ', 'ཨེ', 'ཨོ'];


// བརྩེགས་ཡིག་གི་ཡི་གེ།
const stackedLetters = [
    'རྐ', 'རྒ', 'རྔ', 'རྗ', 'རྙ', 'རྟ', 'རྡ', 'རྣ', 'རྦ', 'རྨ', 'རྩ', 'རྫ',
    'ལྐ', 'ལྒ', 'ལྔ', 'ལྕ', 'ལྗ', 'ལྟ', 'ལྡ', 'ལྤ', 'ལྦ', 'ལྷ',
    'སྐ', 'སྒ', 'སྔ', 'སྙ', 'སྟ', 'སྡ', 'སྣ', 'སྤ', 'སྦ', 'སྨ', 'སྩ'
];

// ཡིག་འབྲུ་ཚང་མ་བསྡུ་བ།
let allCharacters = [
    ...basicTibetanChars,
    ...stackedLetters
];

let currentIndex = 0;

// ཡིག་འབྲུ་བརྗེ་བ།
function showNextCharacter() {
    const charElement = document.getElementById('character');
    const infoElement = document.getElementById('info');
    
    charElement.textContent = allCharacters[currentIndex];
    infoElement.textContent = `${currentIndex + 1}/${allCharacters.length}`;
    
    currentIndex = (currentIndex + 1) % allCharacters.length;
}

// མཐེབ་གཞོང་དང་ཙིག་རྟགས་ལ་ཡ་ལན་སྤྲོད་པ།
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === ' ' || event.key === 'PageDown') {
        currentIndex = (currentIndex + 1) % allCharacters.length;
        showNextCharacter();
    } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        currentIndex = (currentIndex - 1 + allCharacters.length) % allCharacters.length;
        showNextCharacter();
    }
});

// ཙིག་རྟགས་ལ་ཡ་ལན་སྤྲོད་པ།
document.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % allCharacters.length;
    showNextCharacter();
});

// དང་པོ་ནས་འགོ་འཛུགས།
showNextCharacter();

// སྐར་ཆ་གཅིག་ལ་ཐེངས་གཅིག་བརྗེ་བ།
setInterval(showNextCharacter, 1000); 