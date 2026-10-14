
const InnerCapthca = document.querySelector(".captcha");
const refresh = document.querySelector("#refreshBtn");
const apply = document.querySelector("#applyBtn");
const captchaInput = document.querySelector("#Icaptcha");

let randomNum = [0,1,2,3,4,5,6,7,8,9];

let randomAlphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
];

let randomWord = ['!', '@', '#', '*', '$'];

let capthca = '';

function newCaptcha() {
    capthca = '';

    for (let i = 0; i < 5; i++) {
        let randomType = Math.floor(Math.random() * 3);

        if (randomType == 0) {
            capthca += randomNum[
                Math.floor(Math.random() * randomNum.length)
            ];
        } else if (randomType == 1) {
            let letter = randomAlphabet[
                Math.floor(Math.random() * randomAlphabet.length)
            ];

            if (Math.random() < 0.5) {
                letter = letter.toUpperCase();
            }

            capthca += letter;
        } else {
            capthca += randomWord[
                Math.floor(Math.random() * randomWord.length)
            ];
        }
    }

    InnerCapthca.textContent = capthca;
}

function infoCheck() {
    if (captchaInput.value === capthca) {
        window.location.href = "https://github.com/amir-kw";
    } else {
        alert("incorrect captcha")
    }
}

refresh.addEventListener("click", newCaptcha);
apply.addEventListener("click", infoCheck);

newCaptcha();
