let content = document.getElementById('carousel-images')
const printData = data => {
    let aux = document.createElement('div')
    aux.classList.add('content-aux')
    aux.setAttribute('id','content-aux')
    data.forEach(el => {
        const HTML = `
            <div style="background-image: url('${el.Image}')" class="carousel-images-item">
                <div class="content-global">
                    <div class="carousel-images-content">
                        <h3>${el.Name}</h3>
                        <p>${el.Description}</p>
                        <span>${el.Price}</span>
                        <span class="button"></span>
                    </div>
                <div>
            <div>
        `
        //console.log(HTML)
        aux.insertAdjacentHTML('beforeend',HTML)
    })
    content.appendChild(aux)
}

//Ajax
const petition = data => {
    const xhr = new XMLHttpRequest()
    xhr.open(data.method,data.url,true)
    xhr.addEventListener('load', e => {
        printData(JSON.parse(e.target.responseText))
    })
    xhr.send()
}

const loadData = () => {
    petition({"url" : "../../DATA/carrusel.json", "method" : "GET"})
}

loadData()