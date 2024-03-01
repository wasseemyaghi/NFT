const faqfile = [
    {
        id: new Date(),
        answer: "Who We are?",
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate ipsam asperiores id similique placeat ullam rerum suscipit. Culpa iure ratione error optio dicta! Perspiciatis sit sint animrefwefwefwefwefwefeLorem"
    },
    {
        id: new Date(),
        answer: "We're with you the entire way",
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Laudantium voluptate ipsam asperiores id similique placeat ullam rerum suscipit. Culpa iure ratione error optio dicta! Perspiciatis sit sint animrefwefwefwefwefwefe"
    },
    {
        id: new Date(),
        answer: "participale in our NFT educational program",
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate ipsam asperiores id similique placeat ullam rerum suscipit. Culpa iure ratione error optio dicta! Perspiciatis sit sint animrefwefwefwefwefwefe"
    },
    {
        id: new Date(),
        answer: "we're with you the entire way...",
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate ipsam asperiores id similique placeat ullam rerum suscipit. Culpa iure ratione error optio dicta! Perspiciatis sit sint animrefwefwefwefwefwefe"
    }
];

const  accordion = document.querySelector(".accordion");

faqfile.forEach(faq => {

    let faqcontent = document.createElement("div");
    faqcontent.classList.add("accordion_content");

    faqcontent.innerHTML = `
                            <div class="accordion_answer">
                                <span>${faq.answer}</span>
                                <i class="fa-solid fa-plus"></i>
                            </div>
                            <div class="accordion_question">
                                <p>${faq.question}</p>
                            </div>
`
    accordion.appendChild(faqcontent);
});

const accodioncontent = document.querySelectorAll(".accordion_content");

accodioncontent.forEach((item , index) => {
    let accordionanswer = item.querySelector(".accordion_answer");

    accordionanswer.addEventListener("click" , () => {
        item.classList.toggle("open");

        let question = item.querySelector(".accordion_question");

        if(item.classList.contains("open")){
            question.style.height = `${question.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus","fa-minus");
        }else{
            question.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus","fa-plus");
        }

        removeopen(index);

    });
});

function removeopen(index){
        accodioncontent.forEach((item2 , index2) => {
            if(index != index2){
                item2.classList.remove("open");

                let question2 = item2.querySelector(".accordion_question");

                question2.style.height = "0px";
                item2.querySelector("i").classList.replace("fa-minus","fa-plus");
            };
        });
};