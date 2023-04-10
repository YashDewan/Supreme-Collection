console.log("Supreme Collection - Shopping Website");

// SHOP PAGE JS : 

let procon = document.getElementById('product-container-shopPage');

const arrdict = [
    {
        imgsrc: "img/p1.jpg",
        alt: "product1",
        span: "Women's Lower",
        h5: "Leapord print Night Trouser",
        h4: "Rs 290/-",
        itemCode: "l1",
        prod: "womenLower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p2.jpg",
        alt: "product2",
        span: "Women's Lower",
        h5: "Red Check print Night Trouser",
        h4: "Rs 290/-",
        itemCode: "c1",
        prod: "womenLower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (1).jpg",
        alt: "product3",
        span: "Women's Lower",
        h5: "Leapord print Night Trouser",
        h4: "Rs 290/-",
        itemCode: "l2",
        prod: "womenLower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (2).jpg",
        alt: "product4",
        span: "Women's Lower",
        h5: "Black Check print Night Trouser",
        h4: "Rs 290/-",
        itemCode: "c2",
        prod: "womenLower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (3).jpg",
        alt: "product5",
        span: "Women's Lower",
        h5: "Flower print Night Trouser",
        h4: "Rs 290/-",
        itemCode: "f1",
        prod: "womenLower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (4).jpg",
        alt: "product6",
        span: "Women's Lower",
        h5: "Check print Night Trouser",
        h4: "Rs 290/-",
        itemCode: "c3",
        prod: "womenLower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (5).jpg",
        alt: "product6",
        span: "Women's Lower",
        h5: "Leopord print Night Trouser",
        h4: "Rs 290/-",
        itemCode: "l3",
        prod: "womenLower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (6).jpg",
        alt: "product6",
        span: "Women's Lower",
        h5: "Leopord print Night Trouser",
        h4: "Rs 290/-",
        itemCode: "l4",
        prod: "womenLower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (7).jpg",
        alt: "product6",
        span: "Women's Lower",
        h5: "Leopord print Night Trouser",
        h4: "Rs 290/-",
        itemCode: "l5",
        prod: "womenLower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (8).jpg",
        alt: "product6",
        span: "Women's Lower",
        h5: "Leopord print Night Trouser",
        h4: "Rs 290/-",
        itemCode: "l6",
        prod: "womenLower",
        morePhotos: 1
    }
    
]


let n = arrdict.length;
let productDisplay = () => {
    let html = '';
    for (let i = 0; i < n; i++) {
        html += `<div class="pro" onclick="window.location.href='singleProduct.html';">
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