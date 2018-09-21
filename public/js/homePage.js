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