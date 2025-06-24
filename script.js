// const click = document.getElementById("box")

// const box1 = document.getElementById("b1")

// box1.addEventListener('click', function changeGreen(id){
//     id.preventDefault()
//     // const color = document.getElementById()
//     // alert("calling function")
//     // id.target.style.background = color
//     // console.log(id);
    
// })


// dynamic values

// let boxes = [
//     {id: 'box1', color: 'black'},
//     {id: 'box2', color: 'gold'},
//     {id: 'box3', color: 'blue'},
//     {id: 'box4', color: 'indigo'}
// ]

// const containerDiv = document.getElementById('container')

// boxes.forEach((element=>{
//     const box = document.createElement("div")

//     box.className = 'box'
//     box.onclick(()=> {
//         changeColor(element.id,element.color)
//     })
//     containerDiv.appendChild(box)
// }))

let filledColor = new Set()

function changeColor(id, color){

    const box = document.getElementById(id)
    box.style.backgroundColor = color

    filledColor.add(id)

    if(filledColor.size === 4){
        removeColor(id)
    }
    
}

function removeColor(id){

    const setBoxes = [...filledColor]

    for(let i = 1; i<=4; i++){
        setTimeout(()=>{
            const filledBoxes = document.getElementById(setBoxes.pop())
            filledBoxes.style.backgroundColor = ""
    }, 2000*i)    
    }

    filledColor = new Set()
}

// const listData = ["Adarsh", "Sai", "Shankar", "Sumanth"]

// const parentList = document.getElementById('list')

// listData.forEach((item)=>{
//     const list = document.createElement('li')

//     list.innerText = item
//     parentList.appendChild(list)
// })


