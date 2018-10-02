function createElement(tagName,settings,parentElement){
    let obj=document.createElement(tagName);
	if(settings.atrs){setAttributes(obj,settings.atrs);}
	if(settings.stys){setStyles(obj,settings.stys);}
	if(parentElement instanceof Element){parentElement.appendChild(obj);}
    return obj;
}

