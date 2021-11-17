const InpField = document.getElementById("todo-inp")
const AddBtn = document.getElementById("todo-btn")
const Listpanel =  document.getElementById("list-panel")
const DoneBtn = document.getElementById("todo-done-btn")
const ClearBtn = document.getElementById("todo-clear-btn")



AddBtn.addEventListener('click', function(){
    let container = document.createElement('div')
    container.classList.add('todo-elem-container')
    let list = document.createElement('ul')
    list.innerText = InpField.value 
    list.classList.add('todo-elem')
    let doneBtn = document.createElement('button')
    doneBtn.innerText = 'Done'
    doneBtn.classList.add('todo-done-btn')
    let clearBtn = document.createElement('button')
    clearBtn.innerText = 'Clear'
    clearBtn.classList.add('todo-clear-btn')

    Listpanel.appendChild(container)
    container.appendChild(list)
    container.appendChild(doneBtn)
    container.appendChild(clearBtn)

    clearBtn.addEventListener('click', function(){
        Listpanel.removeChild(container)
    })

    doneBtn.addEventListener('click', function(){
        list.style.textDecoration = "line-through"
    })

})