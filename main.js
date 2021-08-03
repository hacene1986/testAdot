
//============================================== get all lignes
function annimationsLine(selector) {
    const lines = Array.from(selector.children)
    //console.log(selector);
}



//=============================================== Show & Hide min-text
function showMiniText() {
    const miniText = document.querySelector('.mini-text')
    miniText.classList.remove('hide-mini-text')
    miniText.classList.add('show-mini-text')
}

//================================================ Show map
function showMap(){
    const map = document.querySelector('.map')
    map.classList.add('show-map')
}

//================================================= Annimation 
function startAnnimation() {
    //get all slide
    const annimation = document.querySelectorAll('.annimation')
    //console.log(annimation);
    for(let i = 0; i < annimation.length; i++){
        //timer
        setTimeout(() => {
            if(i == 1) showMiniText()
            annimation[i].classList.remove('hidden')
            annimation[i].classList.add('visible')

            if(i === 3){
                 showMap()
            } 
            else
            annimationsLine(annimation[i])
            if( i > 0 ){
                annimation[i-1].classList.add('hidden')
                annimation[i-1].classList.remove('visible')
            }
        }, 2500*i)
    }
}

//================================================== Start annimation
startAnnimation()



