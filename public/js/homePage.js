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
            
            switch(event.target.id) {
                case "house":
                if(document.getElementsByClassName('planet-house').length==9){
                    let tooMuch = createElement("DIV",{atrs:{
                        innerHTML:'夢想星的住宅用地已經用完了><',
                        className:'too-much'
                    }},document.getElementsByTagName("BODY")[0])
                    event.target.disabled = true
                    setTimeout(function(){tooMuch.remove()},2000)
                }else{
                    flyingAnimation(event)
                    let house = document.createElement("DIV")
                    house.classList.add('planet-house')
                    housePlace = JSON.parse(window.localStorage.getItem('housePlace'))
                    chosenPlace = housePlace.pop()
                    house.setAttribute("id",event.target.id+chosenPlace)
                    house.style.transform="rotate( "+chosenPlace+"deg )"
                    window.localStorage.setItem('housePlace',JSON.stringify(housePlace))

                    document.getElementById('planet').appendChild(house)
                    addToList("house",chosenPlace)
                    setTimeout(function(){house.style.display="block"},2000)
                }
                    break;
                case "car":
                if(document.getElementsByClassName('planet-car').length==15){
                    let tooMuch = createElement("DIV",{atrs:{
                        innerHTML:'夢想星只能負載15台車，還請您委屈一下。',
                        className:'too-much'
                    }},document.getElementsByTagName("BODY")[0])
                    event.target.disabled = true
                    setTimeout(function(){tooMuch.remove()},2000)
                }else{
                    flyingAnimation(event)
                    let car = document.createElement("DIV")
                    car.setAttribute("id",event.target.id+document.getElementsByClassName('planet-car').length)
                    car.classList.add('planet-car')
                    car.style.transform="rotate( 0deg )"
                    document.getElementById('planet').appendChild(car)
                    addToList("car",document.getElementsByClassName('planet-car').length-1)
                    setTimeout(function(){car.style.display="block"},2000)
                    
                }
                break;
                case "wedding":
                if(document.getElementsByClassName('planet-ring').length==1){
                    let tooMuch = createElement("DIV",{atrs:{
                        innerHTML:'夢想星祝福您一次就找到幸福<3',
                        className:'too-much'
                    }},document.getElementsByTagName("BODY")[0])
                    event.target.disabled = true
                    setTimeout(function(){tooMuch.remove()},2000)
                }else{
                    flyingAnimation(event)
                    let wedding = document.createElement("DIV")
                    wedding.setAttribute("id",event.target.id+document.getElementsByClassName('planet-ring').length)
                    wedding.classList.add('planet-ring')
                    wedding.style.transform="rotateX(-45deg)"
                    document.getElementById('planet').appendChild(wedding)
                    addToList("wedding",document.getElementsByClassName('planet-ring').length-1)
                    setTimeout(function(){wedding.style.display="block"},2000)
                    
                }
                break;
                case "kid":
                if(document.getElementsByClassName('planet-kid').length==30){
                    let tooMuch = createElement("DIV",{atrs:{
                        innerHTML:'一個不嫌少兩個恰恰好，30個只怕肚皮吃不消',
                        className:'too-much'
                    }},document.getElementsByTagName("BODY")[0])
                    event.target.disabled = true
                    setTimeout(function(){tooMuch.remove()},2000)
                }else{
                    flyingAnimation(event)
                    let kid = document.createElement("DIV")
                    kid.setAttribute("id",event.target.id+document.getElementsByClassName('planet-kid').length)
                    kid.classList.add('planet-kid')
                    kid.style.transform="rotate( "+Math.floor((Math.random() * 360) + 1)+"deg )"
                    document.getElementById('planet').appendChild(kid)
                    addToList("kid",document.getElementsByClassName('planet-kid').length-1)
                    setTimeout(function(){kid.style.display="block"},2000)
                }
                break;
                case "parent":
                if(document.getElementsByClassName('planet-parent').length==1){
                    let tooMuch = createElement("DIV",{atrs:{
                        innerHTML:'長輩數量已達夢想星上限',
                        className:'too-much'
                    }},document.getElementsByTagName("BODY")[0])
                    event.target.disabled = true
                    setTimeout(function(){tooMuch.remove()},2000)
                }else{
                    flyingAnimation(event)
                    let parent = document.createElement("DIV")
                    parent.setAttribute("id",event.target.id+document.getElementsByClassName('planet-parent').length)
                    parent.classList.add('planet-parent')
                    parent.style.transform="rotate(-135deg) rotateX(-30deg)"
                    document.getElementById('planet').appendChild(parent)
                    addToList("parent",document.getElementsByClassName('planet-parent').length-1)
                    setTimeout(function(){parent.style.display="block"},2000)
                }        
                break;
                case "travel":
                if(document.getElementsByClassName('planet-travel').length==15){
                    let tooMuch = createElement("DIV",{atrs:{
                        innerHTML:'太多飛機夢想星受不了的。',
                        className:'too-much'
                    }},document.getElementsByTagName("BODY")[0])
                    event.target.disabled = true
                    setTimeout(function(){tooMuch.remove()},2000)
                }else{
                    flyingAnimation(event)
                    let travel = document.createElement("DIV")
                    travel.setAttribute("id",event.target.id+document.getElementsByClassName('planet-travel').length)
                    travel.classList.add('planet-travel')
                    travel.style.transform="rotate( 0deg )"//" + (Math.floor((Math.random() * 360) + 1)) + "
                    document.getElementById('planet').appendChild(travel)
                    addToList("travel",document.getElementsByClassName('planet-travel').length-1)
                    setTimeout(function(){travel.style.display="block"},2000)
                }
                break;
                case "retire":
                if(document.getElementsByClassName('planet-retire').length==1){
                    let tooMuch = createElement("DIV",{atrs:{
                        innerHTML:'夢想星上退休一次就可以享天倫之樂了呦',
                        className:'too-much'
                    }},document.getElementsByTagName("BODY")[0])
                    event.target.disabled = true
                    setTimeout(function(){tooMuch.remove()},2000)
                }else{
                    flyingAnimation(event)
                    let retire = document.createElement("DIV")
                    retire.setAttribute("id",event.target.id+document.getElementsByClassName('planet-retire').length)
                    retire.classList.add('planet-retire')
                    document.getElementById('planet').appendChild(retire)
                    addToList("retire",document.getElementsByClassName('planet-retire').length-1)
                    setTimeout(function(){retire.style.display="block"},2000)
                }
                break;
                case "entrepreneur":
                if(document.getElementsByClassName('planet-entrepreneur').length==9){
                    let tooMuch = createElement("DIV",{atrs:{
                        innerHTML:'太多公司了，夢想星壓力很大',
                        className:'too-much'
                    }},document.getElementsByTagName("BODY")[0])
                    event.target.disabled = true
                    setTimeout(function(){tooMuch.remove()},2000)
                }else{
                    flyingAnimation(event)
                    let entrepreneur = document.createElement("DIV")
                    entrepreneur.classList.add('planet-entrepreneur')
                    entrepreneurPlace = JSON.parse(window.localStorage.getItem('entrepreneurPlace'))
                    chosenPlace = entrepreneurPlace.pop()                    
                    entrepreneur.setAttribute("id",event.target.id+chosenPlace)
                    entrepreneur.style.transform="rotate( "+chosenPlace+"deg )"
                    window.localStorage.setItem('entrepreneurPlace',JSON.stringify(entrepreneurPlace))
                    document.getElementById('planet').appendChild(entrepreneur)
                    addToList("entrepreneur",chosenPlace)
                    setTimeout(function(){entrepreneur.style.display="block"},2000)
                }
                break;
                case "others":
                    break;
            }
        }
        dreamElement.addEventListener("mousedown",handler)
    }
}

function flyingAnimation(event){
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

function addToList(type,dreamLength){
    let listId = type+dreamLength
    let newList = createElement("DIV",{atrs:{
        id:"list"+listId,
        className:"list-label"
    }},document.getElementById('dream-list-content'))

    let dreamName = createElement("INPUT",{atrs:{
        className:"dream-name",
        placeholder:type,
        type:"text"
    }},newList)

    let listSelect = createElement("SELECT",{atrs:{
        className:"list-select",
        type:"text"
    }},newList)

    let opt1 = createElement("OPTION",{atrs:{
        innerHTML:"每年",
        value:"每年"
    }},listSelect)
    let opt2 = createElement("OPTION",{atrs:{
        innerHTML:"每月",
        value:"每月"
    }},listSelect)
    let opt3 = createElement("OPTION",{atrs:{
        innerHTML:"一次",
        value:"一次"
    }},listSelect)

    let dreamCost = createElement("INPUT",{atrs:{
        className:"dream-money dream-name",
        value:"50000",
        type:"text",
    }},newList)
    dreamCost.onkeyup=function(){this.value=this.value.replace(/\D/g,'')}
    dream.onafterpaste=function(){this.value=this.value.replace(/\D/g,'')}

    let dollar = createElement("DIV",{atrs:{
        innerHTML:"元"
    }},newList)
    let cancelButton = createElement("BUTTON",{atrs:{
        className:"list-cancel",
    }},newList)
    cancelButton.onclick=function(){
        id = this.parentElement.id
        listId = id.split("list")[1]
        if(listId.indexOf("house") != -1 || listId.indexOf("entrepreneur") != -1){
            let positionArray = JSON.parse(window.localStorage.getItem(type+'Place'))
        
            positionArray.push(dreamLength)
            window.localStorage.setItem(type+'Place',JSON.stringify(positionArray))
        }
        
        document.getElementById(id).remove()
        document.getElementById(listId).remove()
        document.getElementById(type).disabled = false
    }
}
function createElement(tagName,settings,parentElement){
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
