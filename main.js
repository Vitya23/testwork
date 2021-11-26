let CATS = {
    'cats': [
        ['images/cats/cat1.jpg', 'Shironeko', 'Самый счастливый кот в мире', true],
        ['images/cats/cat2.jpg', 'Garfi', 'Самый злой кот в мире', true],
        ['images/cats/cat3.jpg', 'Sam', 'У кота Сэма есть потрясающие брови', true],
        ['images/cats/cat4.jpg', 'Snoopy', 'Самый очаровательный котик', true],
        ['images/cats/cat5.jpg', 'Venus', 'Кошла с двумя лицами', true],
        ['images/cats/cat6.jpg', 'Maru', 'Повелитель коробок', true],
        ['images/cats/cat7.jpg', 'Lil Bub', 'Вечный котёнок', true],
        ['images/cats/cat8.jpg', 'Banye', 'Всегда удивлённый кот', true],
        ['images/cats/cat9.jpg', 'Grumpy Cat', 'Вечно злой кот', true],
        ['images/cats/cat10.jpg', 'Hamilton', 'Кот с усами', true],
        ['images/cats/cat11.jpg', 'Nala', 'Кот с бабочкой', true],
        ['images/cats/cat12.jpg', 'Colonel Meow', 'Это кот?', true],

    ],
}



const page = document.querySelectorAll('.page')
for (let i = 0; i < page.length; i++) {
    page[i].addEventListener('click', () => {
        const current = document.querySelector('.active')
        current.classList.remove('active')
        page[i].classList.add('active')
        if (page[0].classList.contains('active')) {
            MainPage()
        } else {
            TablePage()
        }
    })
}

MainPage()

function MainPage() {
    document.querySelector('.wrapper').innerHTML = `<div class="block-content"></div>`
    if (localStorage.length === 0) {
        for (key in CATS) {
            for (let i = 0; i < CATS[key].length; i++) {
                let div = document.createElement('div')
                let a = (div.innerHTML = `
                  <img src='${CATS.cats[i][0]}'>
                  <div class="block_description ">
                           <p>${CATS[key][i][1]}</p>
                           <img class="change" id="a" src="${addLikes(CATS[key][i][3])}" alt=""></img>
                       </div>
                  `)
                document.querySelector('.block-content').appendChild(div)

                div.classList.add('div_content')
            }
        }
    } else {
        let local = JSON.parse(localStorage.getItem('storage'))

        for (key in local) {
            for (let i = 0; i < local[key].length; i++) {
                let div = document.createElement('div')
                let a = (div.innerHTML = `
                  <img src='${local.cats[i][0]}'>
                  <div class="block_description">
                           <p>${local[key][i][1]}</p>
                           <img class="change" id="a" src="${addLikes(local[key][i][3])}" alt=""></img>
                           
                       </div>
                  `)
                document.querySelector('.block-content').appendChild(div)

                div.classList.add('div_content')
            }
        }
    }

    takeBtns()
}

function TablePage() {
    document.querySelector('.wrapper').innerHTML = `<table class="table-content"></table>`
    if (localStorage.length === 0) {
        for (key in CATS) {
            for (let i = 0; i < CATS[key].length; i++) {
                let row = document.createElement('tr')
                row.innerHTML = `
                 <td class='cats_img'><img src='${CATS.cats[i][0]}'></td>
                 
                 
                  <td class="table_description">
                  <h2>${CATS[key][i][1]}</h2>
                  <p>${CATS[key][i][2]}</p>
                  <td>      
                      <td class='like'>
                          <img class="change" src="${addLikes(CATS[key][i][3])}" alt="">
                      </td>
                 `
                document.querySelector('.table-content').appendChild(row)

                row.classList.add('row_content')
            }
        }
    } else {
        let local = JSON.parse(localStorage.getItem('storage'))

        for (key in local) {
            for (let i = 0; i < local[key].length; i++) {
                let row = document.createElement('tr')
                row.innerHTML = `
                 <td class='cats_img'><img src='${local.cats[i][0]}'></td>
                 
                 
                  <td class="table_description ">
                  <h2>${local[key][i][1]}</h2>
                  <p>${local[key][i][2]}</p>
                  <td>      
                      <td class='like'>
                          <img class="change" src="${addLikes(local[key][i][3])}" alt="">
                      </td>
                 `
                document.querySelector('.table-content').appendChild(row)

                row.classList.add('row_content')
            }
        }
    }
    takeBtns()
}

function takeBtns() {
    let buttons = document.querySelectorAll('.change')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            changeLikes(this, i)
        })
    }
}

function addLikes(like) {
    if (like) {
        return 'images/like.svg'
    } else {
        return 'images/like_full.svg'
    }
}

function changeLikes(button, i) {
    if (localStorage.length === 0) {
        for (key in CATS) {
            if (CATS[key][i][3] === true) {
                CATS[key][i][3] = false
                button.src = 'images/like_full.svg'
            } else {
                CATS[key][i][3] = true
                button.src = 'images/like.svg'
            }
        }

        localStorage.setItem('storage', JSON.stringify(CATS))
    } else {
        let local = JSON.parse(localStorage.getItem('storage'))

        for (key in local) {
            if (local[key][i][3] === true) {
                local[key][i][3] = false
                button.src = 'images/like_full.svg'
            } else {
                local[key][i][3] = true
                button.src = 'images/like.svg'
            }
        }
        localStorage.setItem('storage', JSON.stringify(local))
    }
}
