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
                    if(document.getElementsByClassName('planet-house').length == 0){
                        house.style.transform="rotate(-45deg)"
                        house.style.top="2vw";
                        house.style.left="2vw";
                    }else if(document.getElementsByClassName('planet-house').length == 1){
                        house.style.transform="rotate(60deg)"
                        house.style.right="0vw";
                        house.style.top="6vw";
                    }else{
                        house.style.transform="rotate(225deg)"
                        house.style.left="2vw"
                        house.style.bottom="2vw"
                    }
                    document.getElementById('planet').appendChild(house)
                    setTimeout(function(){house.style.display="block"},2000)
                    break;
                case "car":
                    let car = document.createElement("DIV")
                    car.classList.add('planet-car')
                    car.style.transform="rotate(0deg)"
                    document.getElementById('planet').appendChild(car)
                    setTimeout(function(){car.style.display="block"},2000)
                    break;
                case "wedding":
                    break;
                case "kid":
                    break;
                case "parent":
                    break;
                case "travel":
                    let plane = document.createElement("DIV")
                    plane.classList.add('planet-plane')
                    plane.style.transform="rotate(0deg)"
                    document.getElementById('planet').appendChild(plane)
                    setTimeout(function(){plane.style.display="block"},2000)
                    break;
                case "retire":
                    break;
                case "entrepreneur":
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
