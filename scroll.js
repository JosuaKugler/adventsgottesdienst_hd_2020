//let buttonOne = document.querySelector('#buttonOne');

//buttonOne.addEventListener('click', on_clickOne);

function on_clickOne() {
    let elem = document.querySelector('#buttonOne .fas');
    elem.classList.toggle("fa-angle-up");
    elem.classList.toggle("fa-angle-down");
}

//let buttonTwo = document.querySelector('#buttonTwo');

//buttonTwo.addEventListener('click', on_clickTwo);

function on_clickTwo() {
    let elem = document.querySelector('#buttonTwo .fas');
    elem.classList.toggle("fa-angle-up");
    elem.classList.toggle("fa-angle-down");
}

//let buttonThree = document.querySelector('#buttonThree');

//buttonThree.addEventListener('click', on_clickThree);

function on_clickThree() {
    let elem = document.querySelector('#buttonThree .fas');
    elem.classList.toggle("fa-angle-up");
    elem.classList.toggle("fa-angle-down");
}

//let buttonFour = document.querySelector('#buttonFour');

//buttonFour.addEventListener('click', on_clickFour);

function on_clickFour() {
    let elem = document.querySelector('#buttonFour .fas');
    elem.classList.toggle("fa-angle-up");
    elem.classList.toggle("fa-angle-down");
}

$('.collapse').on('hide.bs.collapse', function (e) {
    if (e.currentTarget.id == "collapseOne") {
        on_clickOne();
    } else if (e.currentTarget.id == "collapseTwo") {
        on_clickTwo();
    } else if (e.currentTarget.id == "collapseThree") {
        on_clickThree();
    } else if (e.currentTarget.id == "collapseFour") {
        on_clickFour();
    }
})

$('.collapse').on('show.bs.collapse', function (e) {
    if (e.currentTarget.id == "collapseOne") {
        on_clickOne();
    } else if (e.currentTarget.id == "collapseTwo") {
        on_clickTwo();
    } else if (e.currentTarget.id == "collapseThree") {
        on_clickThree();
    } else if (e.currentTarget.id == "collapseFour") {
        on_clickFour();
    }
})