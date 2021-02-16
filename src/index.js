import {showReserve} from './reserve.js'
import {showAbout} from './about.js'
import {showMenu} from './menu.js'



function init(){

    const content = document.querySelector(`#content`)

    const options = document.querySelectorAll(`.option`)

    options.forEach(e => e.addEventListener(`click`, function(){
        contentSwitch(e.id)
    } ))

    function contentSwitch(id) {
        content.innerHTML = ``
        if (id == `reserve`) {showReserve(content)}
        if (id == `about`) {showAbout(content)}
        if (id == `menu`) {showMenu(content)}


    }

}

window.onload = init()









