




window.addEventListener('load', function () {
    console.log("called")
    // for(let i = 0; i < 10; i++){
    //     let card = document.querySelector(".portfolio").innerHTML +="<div style='width : 10px; height: 50px'>dfbksdbnfknbd fdsbfjbfbsdjfb</div>"
    //     card   

    // }
    let content
    let textArr = ['text1', 'text2', 'text3', 'text1', 'text2', 'text3', 'text1', 'text2', 'text3']
    let docFrag = document.createDocumentFragment();


    for (let text of textArr) {

        let div = document.createElement("div");
        div.innerHTML = text;
        div.className = "portfoliodivs"
        div.onmouseover = function(){
            content = div.innerHTML
            div.innerHTML = "new text"
        }

        div.onmouseout = function(){
            div.innerHTML = content
        }
        docFrag.appendChild(div)
    }
    document.querySelector(".portfolio").appendChild(docFrag);
})






