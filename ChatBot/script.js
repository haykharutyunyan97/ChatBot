const mainInput = document.querySelector('#mainInput');
const messageArea = document.querySelector('.messageArea');

const questionAnswer = {
    'hello': 'Hello user',
    "how are you?":"fine thanks",
    "where are you from?":"I am from Armenina"
}

mainInput.addEventListener('keyup', readMessage);


function readMessage({ target, keyCode }) {
    if(keyCode === 13) {
        let val = target.value.trim();
        if(val) {
            render(val, 'user');
            checkQuestion(val);
            messageArea.scrollTop = messageArea.scrollHeight;
        }
        target.value = '';
    }
}

function checkQuestion(val) {
    let userMessage = val.toLowerCase();
    let res = questionAnswer[userMessage];
    if(res) {
        render(res)
    } else {
        render('try another question')
    }
}

function render(val, className) {
    let par = document.createElement('p');
    par.classList.add(className);
    par.innerHTML = val;
    messageArea.append(par);
}

