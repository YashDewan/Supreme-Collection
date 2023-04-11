console.log("Supreme Collection - Shopping Website");




// NAVBAR FOR MOBILE : 

let mobbtn = document.getElementById('mobile');
let crossbtn = document.getElementById('crossnav');

mobbtn.addEventListener('click' , ()=>{
    document.getElementById('nav').style.display="block";
});
crossbtn.addEventListener('click' , ()=>{
    document.getElementById('nav').style.display="none";
});





// SHOP PAGE JS : 

// product display : 
let procon = document.getElementById('product-container-shopPage');
const arrdict = [
    {
        imgsrc: "img/p1.jpg",
        span: "Women's Lower",
        h5: "Leapord print Night Trouser",
        h4: "Rs 290/-",
        prod: "womenlower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (10).jpg",
        span: "T-Shirt",
        h5: "Peach Cotton TShirt",
        h4: "Rs 160/-",
        prod: "tshirt",
        morePhotos: 1
    },
    {
        imgsrc: "img/p2.jpg",
        span: "Women's Lower",
        h5: "Red Check print Night Trouser",
        h4: "Rs 290/-",
        prod: "womenlower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (1).jpg",
        span: "Women's Lower",
        h5: "Leapord print Night Trouser",
        h4: "Rs 290/-",
        prod: "womenlower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (2).jpg",
        span: "Women's Lower",
        h5: "Black Check print Night Trouser",
        h4: "Rs 290/-",
        prod: "womenlower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (3).jpg",
        span: "Women's Lower",
        h5: "Flower print Night Trouser",
        h4: "Rs 290/-",
        prod: "womenlower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (12).jpg",
        span: "T-Shirt",
        h5: "Mehroon Cotton TShirt",
        h4: "Rs 160/-",
        prod: "tshirt",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (4).jpg",
        span: "Women's Lower",
        h5: "Check print Night Trouser",
        h4: "Rs 290/-",
        prod: "womenlower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (5).jpg",
        span: "Women's Lower",
        h5: "Leopord print Night Trouser",
        h4: "Rs 290/-",
        prod: "womenlower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (6).jpg",
        span: "Women's Lower",
        h5: "Leopord print Night Trouser",
        h4: "Rs 290/-",
        prod: "womenlower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (7).jpg",
        span: "Women's Lower",
        h5: "Leopord print Night Trouser",
        h4: "Rs 290/-",
        prod: "womenlower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (8).jpg",
        span: "Women's Lower",
        h5: "Leopord print Night Trouser",
        h4: "Rs 290/-",
        prod: "womenlower",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (15).jpg",
        span: "T-Shirt",
        h5: "Mustard  Cotton Tshirt",
        h4: "Rs 160/-",
        prod: "tshirt",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (17).jpg",
        span: "T-Shirt",
        h5: "Red Cotton TShirt",
        h4: "Rs 160/-",
        prod: "tshirt",
        morePhotos: 1
    },
    {
        imgsrc: "img/p (18).jpg",
        span: "T-Shirt",
        h5: "Grey Cotton TShirt",
        h4: "Rs 160/-",
        prod: "tshirt",
        morePhotos: 1
    },

]

let productDisplay = (prodsarr) => {
    let n = prodsarr.length;
    let html = '';
    for (let i = 0; i < n; i++) {
        html += `<div id="prod${i+1}" class="pro ${prodsarr[i].prod}" onclick="window.location.href='singleProduct.html';">
            <img src="${prodsarr[i].imgsrc}" alt="Product Image">
            <div class="des">
                <span>${prodsarr[i].span}</span>
                <h5>${prodsarr[i].h5}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>${prodsarr[i].h4}</h4>
            </div>
            <a href="#"><i class="fas fa-shopping-bag cart"></i></a>
            </div>`;
    }
    procon.innerHTML = html;
}
productDisplay(arrdict);

// filter : 
let filterval = document.getElementById('filterShopid');

filterval.addEventListener('click' , ()=>{
    console.log(filterval.value);
    if(filterval.value == "all"){
        productDisplay(arrdict);
    }else{
        const newArr = arrdict.filter((e)=>{
            return (filterval.value == e.prod);
        });
        productDisplay(newArr);
    }
});

// small image showing :


