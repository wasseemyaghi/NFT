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

        document.getElementById("main-image").src =  queryParams.img;
        document.querySelector(".main-image1").src =  queryParams.img;
        document.getElementById("title").innerHTML =  queryParams.name;
        document.getElementById("price").innerHTML =  queryParams.price;
        document.getElementById("desciption").innerHTML = queryParams.description;

        let mainImage = document.getElementById("main-image");
        let smallImage = document.querySelectorAll(".image");

        smallImage.forEach((image) => {
                image.addEventListener("click", (e) => {
                        mainImage.src = e.target.src
                })
        });

        let minus = document.querySelector(".minus");
        let plus = document.querySelector(".plus");
        let counter = document.querySelector(".count");

        let count = 0;

        minus.addEventListener("click" , (e) => {
                if (count > 0) {
                        count--;
                        counter.textContent = count;
                }
        });

        plus.addEventListener("click" , (e) => {
                count++;
                counter.textContent = count;
        });
        
        const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

        let detailsaccodiondata = selectedProduct.details;

        const  accordiondetails = document.querySelector(".accordiondetails");

        detailsaccodiondata.forEach(detailsdata => {

                let accordionpage = document.createElement("div");
                accordionpage.classList.add("singlepageaccordion");

        accordionpage.innerHTML = `
                        <div class="detailscontent">
                                <span>${detailsdata.name}</span>
                                <i class="fa-solid fa-plus"></i>
                        </div>
                        <div class="detailsvalue">
                                <p>${detailsdata.value}</p>
                        </div>
`
        accordiondetails.appendChild(accordionpage);
});
const singlepageaccordion = document.querySelectorAll(".singlepageaccordion");

singlepageaccordion.forEach((item , index) => {
        let accordionvalue = item.querySelector(".detailscontent");

        accordionvalue.addEventListener("click" , () => {
        item.classList.toggle("open");

        let detailsvalue = item.querySelector(".detailsvalue");

        if(item.classList.contains("open")){
                detailsvalue.style.height = `${detailsvalue.scrollHeight}px`;
                item.querySelector("i").classList.replace("fa-plus","fa-minus");
        }else{
                detailsvalue.style.height = "0px";
                item.querySelector("i").classList.replace("fa-minus","fa-plus");
        }

        removeopen(index);

        });
});

function removeopen(index){
        singlepageaccordion.forEach((item2 , index2) => {
                if(index != index2){
                        item2.classList.remove("open");

                        let detailsvalue2 = item2.querySelector(".detailsvalue");

                        detailsvalue2.style.height = "0px";
                        item2.querySelector("i").classList.replace("fa-minus","fa-plus");
                };
        });
};

        let colors = selectedProduct.color_palette;

        let dotcolors = document.querySelectorAll(".dotcolor");

        for (let i = 0; i < colors.length; i++) {

                dotcolors[i].style.background = colors[i].hexcolor;

                dotcolors[i].setAttribute('data-tooltip', colors[i].colorname);

        };