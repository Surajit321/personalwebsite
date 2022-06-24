


  export function loadSkills(skills){
        let skillfrag = document.createDocumentFragment();
    
        for(let skill of skills){
            let div = document.createElement("div");
            let progress = document.createElement('progress')
            let cent = document.createElement('span');
            cent.innerText = skill.value + "%"
            progress.setAttribute("value", skill.value)
            progress.setAttribute("max", 100)
    
            let toaddskill = document.createElement('p')
            toaddskill.innerText = skill.language;
            toaddskill.appendChild(cent)
            div.appendChild(toaddskill)
            div.appendChild(progress)
    
            skillfrag.appendChild(div)
        }
        document.querySelector(".allskill").appendChild(skillfrag);
    }
