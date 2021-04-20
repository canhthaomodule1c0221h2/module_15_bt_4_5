let a = prompt("Enter anything: ");

function checkCharacter(num) {
    if (isNaN(num) === true) {
        return false;
    } else {
        return true;
    }
}
document.write(checkCharacter(a));
