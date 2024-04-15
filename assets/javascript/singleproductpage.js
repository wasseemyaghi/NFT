function getQueryParams(url) {
        const queryString = url.split('?')[1];
        const params = {};

        if (queryString) {
                queryString.split('&').forEach((param) => {
                const [key, value] = param.split('=');
                params[key] = decodeURIComponent(value);
        });
}

        return params;
}

        const queryParams = getQueryParams(window.location.href);

        document.getElementById("image").src =  queryParams.img;
        document.getElementById("title").innerHTML =  queryParams.name;
        document.getElementById("para").innerHTML =  queryParams.price;















        
    // const urlParams = new URLSearchParams(window.location.search);
    // const productId = urlParams.get('price');
    // const productName = urlParams.get('name');
    // const productImage = urlParams.get('img');

    // document.getElementById("image").src = productImage;
    // document.getElementById("title").innerHTML = productName;
    // document.getElementById("para").innerHTML = productId;

    // console.log(`Product ID: ${productId}`);
    // console.log(`Product Name: ${productName}`);
    // console.log(`Product Image: ${productImage}`);