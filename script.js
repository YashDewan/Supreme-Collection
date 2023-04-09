console.log("Supreme Collection");

// SHOP PAGE JS : 

let procon = document.getElementById('product-container-shopPage');

const arrdict = [
    {
        imgsrc: "img/p1.jpg",
        alt: "product1",
        span: "Women's Lower",
        h5: "Leapord print Night Trouser",
        h4: "Rs 290/-",
    },
    {
        imgsrc: "img/p2.jpg",
        alt: "product2",
        span: "Women's Lower",
        h5: "Leapord print Night Trouser",
        h4: "Rs 290/-",
    },
    {
        imgsrc: "img/p (1).jpg",
        alt: "product2",
        span: "Women's Lower",
        h5: "Leapord print Night Trouser",
        h4: "Rs 290/-",
    }
]


let n = arrdict.length;
let productDisplay = () => {
    let html = '';
    for (let i = 0; i < n; i++) {
        html += `<div class="pro">
            <img src="${arrdict[i].imgsrc}" alt="${arrdict[i].alt}">
            <div class="des">
                <span>${arrdict[i].span}</span>
                <h5>${arrdict[i].h5}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>${arrdict[i].h4}</h4>
            </div>
            <a href="#"><i class="fas fa-shopping-bag cart"></i></a>
            </div>`;
    }
    procon.innerHTML = html;
}

productDisplay();