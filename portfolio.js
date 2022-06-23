
export function loadPortfolio(portfolios){
    let content;
    let docFrag = document.createDocumentFragment();

    for (let portfolio of portfolios) {

        let div = document.createElement("div");
        // div.innerHTML = portfolio.title;
        div.className = "portfoliodivs"

        let innerdiv = document.createElement("div");
        let icon = document.createElement("span") 
        icon.innerHTML = portfolio.icon;
        icon.className = "svgstyle";
        let para = document.createElement('p')
        para.innerText = portfolio.title;
        let line = document.createElement("hr")
        line.className = "hrelement";

        innerdiv.appendChild(icon);
        innerdiv.appendChild(para);
        innerdiv.appendChild(line);
        div.appendChild(innerdiv)


        div.onmouseover = function(){
            content =  para.innerText
            icon.classList.add("hideonhover")
            line.classList.add("hideonhover")
            para.innerText = portfolio.description
        }

        div.onmouseout = function(){
            para.innerText = content
            icon.classList.remove("hideonhover")
            line.classList.remove("hideonhover")
        }
        docFrag.appendChild(div)
    }
    document.querySelector(".portfolio").appendChild(docFrag);
}