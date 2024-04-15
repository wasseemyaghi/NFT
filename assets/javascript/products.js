const NFT = [
    {
        id: new Date() ,
        img: '/assets/imgs/image1.jpg',
        title: "Cloud# 21" ,
        color_palette: ["#d017ff" , "#e7b323" , "#ff383a"] , 
        price: "$1.933 USD", 
        price_ETH: "3.42 ETH",
        category: "",
    }, 
    {
        id: new Date() ,
        img: '/assets/imgs/image2.jpg',
        title: "Cloud# 32" ,
        color_palette: ["#e23558" , "#fd3e42" , "#323e58"] , 
        price: "$2.987 USD", 
        price_ETH: "4.89 ETH",
        category: "",
    }, 
    {
        id: new Date() ,
        img: '/assets/imgs/image3.png',
        title: "Cloud# 25" ,
        color_palette: ["#323e58" , "#e7b323" , "#f26d18"] , 
        price: "$1.85 USD", 
        price_ETH: "7.89 ETH",
        category: "",
    },
    {
        id: new Date() ,
        img: '/assets/imgs/image4.webp',
        title: "Cloud# 53" ,
        color_palette: ["#f79616" , "#ff383a" , "#364361"] , 
        price: "$2.256 USD",
        price_ETH: "2.85 ETH",
        category: "",
    },
    {
        id: new Date() ,
        img: '/assets/imgs/image5.jpg',
        title: "Cloud# 12" ,
        color_palette: ["#0079ff" , "#e1ac8b" , "#364361"] , 
        price: "$1.888 USD", 
        price_ETH: "3.85 ETH",
        category: "",
    },
    {
        id: new Date() ,
        img: '/assets/imgs/image6.jpg',
        title: "Cloud# 33",
        color_palette: ["#ff880c" , "#e0864c" , "#d3071c"] ,
        price: "$2.987 USD", 
        price_ETH: "3.37 ETH",
        category: "",
    }
];

const productscontainer = document.querySelector(".products");

NFT.forEach(product => {

    let cardProduct = document.createElement("div");
    cardProduct.classList.add("card-product");

    cardProduct.innerHTML = `

                            <img src=${product.img} alt=${product.title} class="card-product-image" width="600" height="350"/>
                            <h2 class="card-title">${product.title}</h2>
                            <span class="card-price-ETH">${product.price_ETH}</span>
                            <span class="card-price-USD">${product.price}</span>
                            <button class="card-button">Buy Now</button>

                        `
    cardProduct.addEventListener('click', () => {
        const productUrl = `detailsproduct.html?id=${product.id}&name=${product.title}&price=${product.price}&img=${product.img}`;
        window.location.href = productUrl;
    });
    productscontainer.appendChild(cardProduct);
});
const buttoncard = document.querySelectorAll(".card-button");

buttoncard.forEach(button => {
    button.addEventListener("click" , () => {
        buttoncard.forEach(button => {
            button.classList.remove('clicked');
        });
            button.classList.add("clicked");
    });
});