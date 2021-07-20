let buttonLeft = document.getElementById('button-left');
let buttonRight = document.getElementById('button-right');

buttonRight.addEventListener('click', e => {
    let con = document.getElementById('content-aux');
    let positionNow = getComputedStyle(con).getPropertyValue("--movingCarousel");
    positionNow = parseInt(positionNow.replace("%",""));
    if(positionNow > -500) {
        positionNow -= 100;
        console.log(positionNow);
        con.style.setProperty("--movingCarousel",`${positionNow}%`);    
    }
    
});

buttonLeft.addEventListener('click', e => {
    let con = document.getElementById('content-aux');
    let positionNow = getComputedStyle(con).getPropertyValue("--movingCarousel");
    positionNow = parseInt(positionNow.replace("%",""));
    if(positionNow < 0) {
        positionNow += 100;
        con.style.setProperty("--movingCarousel",`${positionNow}%`);
    }
});