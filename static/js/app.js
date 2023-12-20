const PICTURE = {
    'desktop': ['IMG_1.jpg','IMG_2.jpg'],
    'mobile': ['IMG_1.jpg','IMG_2.jpg','IMG_3.jpg'],
}
let current_picture = 0
let current_device = 'desktop'

function play_video(){
    let slideshow = document.querySelector('.slideshow')
    slideshow.innerHTML = '<iframe width="100%" height="480" src="https://www.youtube.com/embed/HHzIzkPhhaE" title="Rap do Law (One Piece) - CIRURGIÃO DA MORTE | NERD HITS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
}

function change_picture(direction){
    if(direction < 0 && current_picture == 0){
        current_picture = PICTURE[current_device].length - 1
    }
    else if(direction > 0 && current_picture == PICTURE[current_device].length - 1){
        current_picture = 0
    }
    else{
        current_picture += direction
    }
    let img = document.querySelector('img')
    img.src = `static/imgs/${current_device}/${PICTURE[current_device][current_picture]}`
}