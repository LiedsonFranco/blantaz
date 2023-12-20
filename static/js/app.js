const PICTURE = {
    'desktop': ['IMG_1.jpg', 'IMG_2.jpg'],
    'mobile': ['IMG_1.jpg', 'IMG_2.jpg', 'IMG_3.jpg'],
    'menbers': [
        {
            'img': '1.jpg',
            'name': 'Black e ..',
            'description': 'Qualquer coisa'
        },
        {
            'img': '2.jpg',
            'name': 'Black e ..',
            'description': 'Qualquer coisa'
        },
        {
            'img': '3.jpg',
            'name': 'Black e ..',
            'description': 'Qualquer coisa'
        },
        {
            'img': '4.jpg',
            'name': 'Black e ..',
            'description': 'Qualquer coisa'
        },
        {
            'img': '5.jpg',
            'name': 'Black',
            'description': 'Qualquer coisa'
        },
        {
            'img': '6.jpg',
            'name': 'Black e ..',
            'description': 'Qualquer coisa'
        },
        {
            'img': '7.jpg',
            'name': 'Black e ..',
            'description': 'Qualquer coisa'
        }
    ]
}
let current_picture = 0
let current_device = 'desktop'

function play_video() {
    let slideshow = document.querySelector('.slideshow')
    slideshow.innerHTML = '<iframe width="100%" height="480" src="https://www.youtube.com/embed/hh0Ug2obslE" title="Déjà Vu - BLANTZ [Prod: Djasmim No Beatz]( Vídeo Lyric Oficial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
}

function change_picture(direction, key='') {
    let img = document.querySelector('img')
    if (key == '') {
        key = current_device
        console.log(key)
    }
    if (direction < 0 && current_picture == 0) {
            current_picture = PICTURE[key].length - 1

    }
    else if (direction > 0 && current_picture == PICTURE[key].length - 1) {
        current_picture = 0
    }
    else {
        current_picture += direction
    }
    if (key == 'menbers'){
        let name = document.querySelector('#name')
        let description = document.querySelector('#description')
        name.innerHTML = PICTURE[key][current_picture]['name']
        description.innerHTML = PICTURE[key][current_picture]['description']
        img.src = `static/imgs/${key}/${PICTURE[key][current_picture]['img']}`
    }
    else{
        img.src = `static/imgs/${key}/${PICTURE[key][current_picture]}`

    }
}
console.log(PICTURE)