
export function loadEducation(institutes){
    let edufrag = document.createDocumentFragment()

    for(let inst of institutes){
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

        p1.innerText = inst.name;
        p2.innerText = inst.major;
        p3.innerText = inst.duration;

        contentdiv.appendChild(p1);
        contentdiv.appendChild(p2);
        contentdiv.appendChild(p3);

        div.appendChild(contentdiv)

        edufrag.appendChild(div)

    }
    document.querySelector('.education_timeline').appendChild(edufrag)
}