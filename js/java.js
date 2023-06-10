let listproto = document.querySelectorAll(".testdd span")
let conoverlaye = document.querySelectorAll(".imff")

for (let index = 0; index < listproto.length; index++) {
    listproto[index].onclick = function () {
        let catagery = listproto[index].getAttribute('data-catogery')
        fliterItem(catagery)
    }
}

function fliterItem(catagery) {
    for (let index = 0; index < conoverlaye.length; index++) {
        conoverlaye[index].style.display = 'none'
       // conoverlaye[index].style.opacity = '0.5'
       //conoverlaye[index].style.filter = 'blur(10px)'
    }
    let catFilter = document.querySelectorAll('.imff.' + catagery)
    for (let index = 0; index < catFilter.length; index++) {
      //  catFilter[index].style.opacity = '1'
      //conoverlaye[index].style.filter = 'blur(0px)'
      conoverlaye[index].style.display = 'block'
    }

}

