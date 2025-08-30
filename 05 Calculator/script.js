const numInput = document.querySelector("#inputBox")
const buttons = document.querySelectorAll("button")

let string = ""

buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    
    if (e.target.innerText == "=") {
      string = eval(string)
      numInput.value = string
    } else if (e.target.innerText == "AC") {
      string = ""
      numInput.value = string
    } else if (e.target.innerText == "DEL") {
      string = string.substring(0, string.length - 1)
      numInput.value = string
    } else {
      string = string + (e.target.innerText)
      numInput.value = string
    }
  })
})

// YOU CAN ALSO DO IT LIKE THIS TO REDUCE REPEATATION

// const numInput = document.querySelector("#inputBox")
// const buttons = document.querySelectorAll("button")

// let string = ""

// buttons.forEach(btn => {
//   btn.addEventListener("click", (e) => {

//     const values = e.target.innerText

//     if (values == "=") {
//       string = eval(string)
//     } else if
//       (values == "AC") {
//       string = ""
//     } else if (values == "DEL") {
//       string = string.substring(0, string.length - 1)
//     } else {
//       string = string + (values)

//     }
//     numInput.value = string
//   })
// })