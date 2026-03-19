

const show = () => {
    console.log("working")
    document.getElementById("sorting-vis-dialog").showModal()
}

const sortingVisDiv = document.getElementById("sorting-vis-div")
sortingVisDiv.addEventListener("click", show)

const container = document.getElementById('array-container')
const startingArr = document.getElementById('starting-array')
const generateBtn = document.getElementById('generate-btn')
const sortBtn = document.getElementById('sort-btn')

let currArr = []

const generateElement = () => Math.floor(Math.random() * 100 + 1)

const generateArray = () => {
  const arr = []
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement())
  }
  return arr
}

const generateContainer = () => document.createElement("div")


const fillArrContainer = (el, arr) => {
  arr.forEach((i) => {
    el.innerHTML += `<span>${i}</span>`
  })
}

const isOrdered = (n, m) => n <= m

const swapElements = (arr, i) => {
  if (arr[i] > arr[i + 1]) {
    const temp = arr[i]
    arr[i] = arr[i + 1]
    arr[i + 1] = temp
  }
}

const highlightCurrentEls = (element, i) => {
  element.children[i].style.border = "dashed red 2px"
  element.children[i + 1].style.border = "dashed red 2px"
}

generateBtn.addEventListener('click', () => {
  const nodes = container.children
  for (let el = 0; el < nodes.length; el++) {
    if (nodes[el].id !== "starting-array") {
      container.removeChild(nodes[el])
      el--
    }
  }
  startingArr.innerHTML = ""
  currArr = generateArray()
  fillArrContainer(startingArr, currArr)
})

sortBtn.addEventListener('click', () => {
  console.log(currArr)
  let currIndex = 0; 
  let nodeIndex = 0; 
  let nodes = container.children; 
  
  let swapped = false; 
  do {
    swapped = false
    while (currIndex < 4) {
      highlightCurrentEls(nodes[nodeIndex], currIndex)

      if (!isOrdered(currArr[currIndex], currArr[currIndex + 1])) {
        swapElements(currArr, currIndex)
        swapped = true
      }

      const div = generateContainer()
      container.appendChild(div)
      nodeIndex += 1
      currIndex += 1

      fillArrContainer(div, currArr)
      
    } 
    currIndex = 0

  } while (swapped == true)
  
  nodes[nodeIndex].style.border = "4px solid #008000"
})
