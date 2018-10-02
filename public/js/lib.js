function createElement(tagName,settings,parentElement){
    let obj=document.createElement(tagName);
	if(settings.atrs){setAttributes(obj,settings.atrs);}
    if(settings.stys){setStyles(obj,settings.stys);}
    if (settings.evts) {setEventHandlers(obj, settings.evts);}
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
function setEventHandlers(obj, eventHandlers, useCapture) {
    for (let name in eventHandlers) {
        if (eventHandlers[name] instanceof Array) {
            for (let i = 0; i < eventHandlers[name].length; i++) {
                obj.addEventListener(name, eventHandlers[name][i], useCapture);
            }
        } else {
            obj.addEventListener(name, eventHandlers[name], useCapture);
        }
    }
    return obj;
};
function showLoginView(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location = './memberPage.html';
        } else {
            let loginView = document.getElementsByClassName('login-view')[0]
            loginView.style.display = "block"
        }
    });
}
function logout(){
    firebase.auth().signOut().then(function() {
        window.location = './homePage.html';
    }).catch(function(error) {

    });
}