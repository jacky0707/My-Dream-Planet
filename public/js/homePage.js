function showPlanetDetail(){
    document.getElementById('dream-part').style.display = "none";
    document.getElementById('planet-name').style.display ="none";    
    document.getElementById('planet-complete-button').style.display = "none";
    
    let planet = document.getElementById('planet')
    let dreamList = document.getElementById('dream-list')
    let dreamListTitle = document.getElementById('dream-list-title')
    let dreamListContent = document.getElementById('dream-list-content')

    document.getElementById('planet-part').classList.add('small-planet-part');
    document.getElementById('dream-list-part').classList.add('big-list-part');
    
    planet.classList.add('small-planet');
    dreamList.classList.add('big-list');
    dreamListTitle.classList.add('big-list-title')
    dreamListContent.classList.add('big-list-content')
}
function initDreams(){
    let numberOfDreams = document.getElementById('button-part').children.length
    for(dream=0;dream<numberOfDreams;dream++){
        let dreamElement = document.getElementById('button-part').children[dream]
        let handler = function(event){
            //按鈕座標
            buttonX = getDreamPosition(event.target).x
            buttonY = getDreamPosition(event.target).y
            
            //動畫主角
            let flyingDream = document.createElement("DIV")
            flyingDream.classList.add('adding-dream')
            flyingDream.setAttribute("style","position:absolute;left:"+buttonX+"px;top:"+buttonY+"px;background:"+getComputedStyle(event.target).backgroundImage+"no-repeat scroll 50% 50% / contain padding-box border-box")
            document.body.appendChild(flyingDream)

            //飛行終點
            flyingDream.style.left = "calc("+getPlanetCenter().x+"px - 3vw)"
            flyingDream.style.top = "calc("+getPlanetCenter().y+"px - 3vw)"
            flyingDream.style.transform="scale(2)"
            flyingDream.addEventListener('transitionend',function(){
                flyingDream.style.transform="scale(0)"
                setTimeout(function(){flyingDream.remove()},2000)
            })
            switch(event.target.id) {
                case "house":
                    let house = document.createElement("DIV")
                    house.classList.add('planet-house')
                    house.style.transform="rotate( "+(Math.floor((Math.random() * 9) + 1))*40+"deg )"
                    document.getElementById('planet').appendChild(house)
                    setTimeout(function(){house.style.display="block"},2000)
                    addToList("house")
                    break;
                case "car":
                    let car = document.createElement("DIV")
                    car.classList.add('planet-car')
                    car.style.transform="rotate( 0deg )"
                    document.getElementById('planet').appendChild(car)
                    setTimeout(function(){car.style.display="block"},2000)
                    break;
                case "wedding":
                    let wedding = document.createElement("DIV")
                    wedding.classList.add('planet-ring')
                    wedding.style.transform="rotateX(-45deg)"
                    document.getElementById('planet').appendChild(wedding)
                    setTimeout(function(){wedding.style.display="block"},2000)
                    break;
                case "kid":
                    let kid = document.createElement("DIV")
                    kid.classList.add('planet-kid')
                    kid.style.transform="rotate( "+Math.floor((Math.random() * 360) + 1)+"deg )"
                    document.getElementById('planet').appendChild(kid)
                    setTimeout(function(){kid.style.display="block"},2000)
                    break;
                case "parent":
                    let parent = document.createElement("DIV")
                    parent.classList.add('planet-parent')
                    parent.style.transform="rotate(-135deg) rotateX(-30deg)"
                    document.getElementById('planet').appendChild(parent)
                    setTimeout(function(){parent.style.display="block"},2000)
                    break;
                case "travel":
                    let plane = document.createElement("DIV")
                    plane.classList.add('planet-plane')
                    plane.style.transform="rotate( 0deg )"//" + (Math.floor((Math.random() * 360) + 1)) + "
                    document.getElementById('planet').appendChild(plane)
                    setTimeout(function(){plane.style.display="block"},2000)
                    break;
                case "retire":
                    let retire = document.createElement("DIV")
                    retire.classList.add('planet-retire')
                    document.getElementById('planet').appendChild(retire)
                    setTimeout(function(){retire.style.display="block"},2000)
                    break;
                case "entrepreneur":
                    let entrepreneur = document.createElement("DIV")
                    entrepreneur.classList.add('planet-entrepreneur')
                    entrepreneur.style.transform="rotate( "+((Math.floor((Math.random() * 9) + 1))*40-20)+"deg )"
                    document.getElementById('planet').appendChild(entrepreneur)
                    setTimeout(function(){entrepreneur.style.display="block"},2000)
                    break;
                case "others":
                    break;
            }
        }
        dreamElement.addEventListener("mousedown",handler)
    }
}

function getDreamPosition(button){
    let buttonSquare = button.getBoundingClientRect()
    let buttonPosition = {}
    let buttonX = buttonSquare.left
    let buttonY = buttonSquare.top
    let heightTop = document.documentElement.scrollTop || document.body.scrollTop;
    let clickTop = buttonY+heightTop
    buttonPosition.x=buttonX
    buttonPosition.y=clickTop
    return buttonPosition
}

function getPlanetCenter(){
    let planetPosition = {}
    let planet = document.getElementById('planet')
    let planetSquare = planet.getBoundingClientRect();
    let heightTop = document.documentElement.scrollTop || document.body.scrollTop;
    planetPosition.x=(planetSquare.left+planetSquare.right)/2
    planetPosition.y=(planetSquare.top+planetSquare.bottom)/2+heightTop
    return planetPosition
}

function addToList(type){
    let newList = createList("DIV",{atrs:{
        className:"list-label"
    }},document.getElementById('dream-list-content'))

    let dreamName = createList("INPUT",{atrs:{
        className:"dream-name",
        placeholder:type,
        type:"text"
    }},newList)

    let listSelect = createList("SELECT",{atrs:{
        className:"list-select",
        type:"text"
    }},newList)

    let opt1 = createList("OPTION",{atrs:{
        innerHTML:"每年",
        value:"每年"
    }},listSelect)
    let opt2 = createList("OPTION",{atrs:{
        innerHTML:"每月",
        value:"每月"
    }},listSelect)
    let opt3 = createList("OPTION",{atrs:{
        innerHTML:"一次",
        value:"一次"
    }},listSelect)

    let dreamCost = createList("INPUT",{atrs:{
        className:"dream-money dream-name",
        value:"50000",
        type:"text",
    }},newList)
    dreamCost.onkeyup=function(){this.value=this.value.replace(/\D/g,'')}
    dream.onafterpaste=function(){this.value=this.value.replace(/\D/g,'')}
    
    let dollar = createList("DIV",{atrs:{
        innerHTML:"元"
    }},newList)
    let cancelButton = createList("BUTTON",{atrs:{
        className:"list-cancel"
    }},newList)
}
function createList(tagName,settings,parentElement){
    let obj=document.createElement(tagName);
	if(settings.atrs){setAttributes(obj,settings.atrs);}
	if(settings.stys){setStyles(obj,settings.stys);}
	if(parentElement instanceof Element){parentElement.appendChild(obj);}
    return obj;
}

function setAttributes(obj,attributes){
    for(let name in attributes){
		obj[name]=attributes[name];
	}
	return obj;
}

function setStyles(obj,styles){
    for(let name in styles){
		obj.style[name]=styles[name];
	}
	return obj;
}