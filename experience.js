
export function loadExperience(companies){
    let compfrag = document.createDocumentFragment()

    for(let comp of companies){
        let div = document.createElement('div');
        div.className = "company";
        let dotdiv = document.createElement('div');
        dotdiv.className = "dot";
        div.appendChild(dotdiv);

        let contentdiv = document.createElement('div');
        contentdiv.className = "content";
        let arrowdiv = document.createElement('div');
        arrowdiv.className = "arrow";

        contentdiv.appendChild(arrowdiv);

        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')

        p1.innerText = comp.company;
        p2.innerText = comp.role;
        p3.innerText = comp.duration;

        contentdiv.appendChild(p1);
        contentdiv.appendChild(p2);
        contentdiv.appendChild(p3);

        div.appendChild(contentdiv)

        compfrag.appendChild(div)

    }
    document.querySelector('.timeline_container').appendChild(compfrag)
}