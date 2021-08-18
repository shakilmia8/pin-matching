

function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return generatePin();
    }
};

function getPin() {
    const pin = generatePin();
    document.getElementById('pin-generate').value = pin;
};

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayShow = document.getElementById('display-show');
    const previousNumber = displayShow.value;
    const newNumber = previousNumber + number;
    if (isNaN(number)) {
        if (number == "C")
            displayShow.value = '';
    }
    else {
        displayShow.value = newNumber;
    }
});


document.getElementById('submit-btn').addEventListener('click', function () {
    const pinGenerat = document.getElementById('pin-generate').value;
    const displayShow = document.getElementById('display-show').value;
    const fail = document.getElementById('fail');
    const success = document.getElementById('success');
    if (pinGenerat == displayShow) {
        success.style.display = 'block';
        fail.style.display = 'none';
    }
    else {
        success.style.display = 'none';
        fail.style.display = 'block';
    }
});

















// function generatePin() {
//     const pin = Math.round(Math.random() * 10000);
//     const pinString = pin + '';
//     if (pinString.length == 4) {
//         return pin;
//     }
//     else {
//         return generatePin();
//     }
// };

// function getPin() {
//     const pin = generatePin();
//     document.getElementById('pin-generate').value = pin;
// };

// document.getElementById('key-pad').addEventListener('click', function (event) {
//     const displayShow = document.getElementById('display-show');
//     const number = event.target.innerText;
//     if (isNaN(number)) {
//         if (number == 'C') {
//             displayShow.value = '';
//         }
//     }
//     else {
//         const previousNumber = displayShow.value;
//         const newNumber = previousNumber + number;
//         displayShow.value = newNumber;
//     }
// });

// document.getElementById('submit-btn').addEventListener('click', function () {
//     const pin = document.getElementById('pin-generate').value;
//     const displayShow = document.getElementById('display-show').value;
//     const fail = document.getElementById('fail');
//     const success = document.getElementById('success');
//     if (pin == displayShow) {
//         success.style.display = 'block';
//         fail.style.display = 'none';
//     }
//     else {
//         fail.style.display = 'block';
//         success.style.display = 'none';
//     }
// });