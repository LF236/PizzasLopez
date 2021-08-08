let buttonLeft = document.getElementById('button-left');
let buttonRight = document.getElementById('button-right');
let i = 1;
buttonRight.addEventListener('click', e => {
    let con = document.getElementById('content-aux');
    let positionNow = getComputedStyle(con).getPropertyValue("--movingCarousel");
    positionNow = parseInt(positionNow.replace("%",""));
    if(positionNow > -500) {
        positionNow -= 100;
        con.style.setProperty("--movingCarousel",`${positionNow}%`);    

        //Esta sección es para hacer el efecto del iterador
        i++;
        const idElementActual = `images-i-element-${i}`;
        const auxElementActual = document.getElementById(idElementActual);
        auxElementActual.style = 'color: yellow';
        const idElementAnterior = `images-i-element-${i - 1}`;
        const auxElementAnterior = document.getElementById(idElementAnterior);
        auxElementAnterior.style = 'color: #fff';
        //console.log(i);
    }
    
});

buttonLeft.addEventListener('click', e => {
    let con = document.getElementById('content-aux');
    let positionNow = getComputedStyle(con).getPropertyValue("--movingCarousel");
    positionNow = parseInt(positionNow.replace("%",""));
    if(positionNow < 0) {
        positionNow += 100;
        con.style.setProperty("--movingCarousel",`${positionNow}%`);

        //Sección para el efecto del iterador
        const idElementActual = `images-i-element-${i}`;
        const auxElementActual = document.getElementById(idElementActual);
        auxElementActual.style = 'color: white';
        const idElementAnterior = `images-i-element-${i - 1}`;
        const auxElementAnterior = document.getElementById(idElementAnterior);
        auxElementAnterior.style = 'color: yellow';
        i--;
        console.log(i);
    }
});