

var main = document.querySelector('.reg-parent');
var displayItem = document.getElementById('display-item');

displayNum = e => {
    var targetBtn = e.target.innerText;
    console.log(targetBtn);
    displayItem.innerText = targetBtn;
}

main.addEventListener('click', displayNum);

