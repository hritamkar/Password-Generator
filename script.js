const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const digit = "1234567890";
const specialCharacters = "!@#$%^&*";

const textbox = document.getElementById('text-box');
const generate = document.getElementById('generate-btn');
const copy = document.getElementById('copy-btn');

const rangeInput = document.getElementById('range-input');
const rangeValueDisplay = document.getElementById('range-value');

rangeInput.addEventListener('input', function() {
    rangeValueDisplay.textContent = rangeInput.value;
});

//generate buttton

generate.addEventListener('click', function() {
    let pool = "";
    let password = "";

    const rangeValue = parseInt(rangeInput.value);

    const low = document.getElementById('lowercaseCB').checked;
    const up = document.getElementById('uppercaseCB').checked;
    const dig = document.getElementById('digitsCB').checked;
    const sp = document.getElementById('specialsCB').checked;

    let mandatoryCharacters = [];

    if (low) {
        pool = pool.concat(lowercase);
        mandatoryCharacters.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    }
    if (up) {
        pool = pool.concat(uppercase);
        mandatoryCharacters.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }
    if (dig) {
        pool = pool.concat(digit);
        mandatoryCharacters.push(digit[Math.floor(Math.random() * digit.length)]);
    }
    if (sp) {
        pool = pool.concat(specialCharacters);
        mandatoryCharacters.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
    }

    for (let i = mandatoryCharacters.length; i < rangeValue; i++) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        password = password.concat(pool[randomIndex]);
    }

    if(pool==""){
        alert("Select atleast one of the checkbox to generate");
    }
    else{
        password = password.concat(mandatoryCharacters.join('')).split('').sort(() => Math.random() - 0.5).join('');

        textbox.value = password;
    }
});

//Copy button

copy.addEventListener('click', function() {
    var copyText = document.getElementById('text-box');

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value).then(function() {
        copy.innerText = "COPIED!";
        
        setTimeout(function() {
            copy.innerText = "COPY";
        }, 2000);
    }, function(err) {
        alert('Failed to copy text: ', err);
    });
});
