var firstNumber = null;

function btnloop() {
    const outputField = document.createElement('input');
    outputField.type = 'text';
    outputField.id = 'output';
    outputField.disabled = 'true';
    document.body.appendChild(outputField);

    for (var i = 0; i <= 9; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.id = i;
        button.addEventListener('click', berkening);
        document.body.appendChild(button);
    }
}

function berkening() {
    console.log("test");
    var buttonId = parseInt(this.id);
    const outputField = document.getElementById('output');

    if (firstNumber === null) {
        firstNumber = buttonId;
        outputField.value = firstNumber;
    } else {
        var secondNumber = buttonId;
        var result = firstNumber + secondNumber;
        outputField.value = result;
        firstNumber = null;
    }
}

btnloop();