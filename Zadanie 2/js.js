// const red = document.querySelectorAll("cz");
// let btns = []
// let activation1;
//     const btn1 = red;
//     btn1.addEventListener("click", () => {
//         if (activation) {
//         activation.classList.remove("cz");
//     }

//     btn1.classList.add("zo");
//     activation = btn1;
//     })

// const yel = document.querySelectorAll("zo");

// let activation2;
//     const btn2 = yel;
//     btn2.addEventListener("click", () => {
//         if (activation2) {
//         activation2.classList.remove("zo");
//         }
//     btn2.classList.add("zi");
//     activation2 = btn2;
//   })

// const gre = document.querySelectorAll("zi");

// let activation3;
//     const btn3 = gre;
//     btn.addEventListener("click", () => {
//         if (activation3) {
//         activation3.classList.remove("zi");
//         }
//     btn.classList.add("cz");
//     activation3 = btn;
//     })

// const buttons = document.getElementsByTagName("button");
// const result = document.getElementById("result");

// const buttonPressed = e => { 
//   result.innerHTML = `ID of <em>${e.target.innerHTML}</em> is <strong>${e.target.id}</strong>`;
// }

// for (let button of buttons) {
//   button.addEventListener("click", buttonPressed);
// }

const btncz = document.getElementById('cz');
const btnzo = document.getElementById('zo');
const btnzi = document.getElementById('zi');
let activebtn;

    btncz.addEventListener('click', () => {
        if(activebtn){
            activebtn.classList.remove('wybrCZ');
            activebtn.classList.remove('wybrZO');
            activebtn.classList.remove('wybrZI');
        }
        btncz.classList.add('wybrCZ');
        activebtn = btncz;
    })

    btnzo.addEventListener('click', () => {
        if(activebtn){
            activebtn.classList.remove('wybrCZ');
            activebtn.classList.remove('wybrZO');
            activebtn.classList.remove('wybrZI');
        }
        btnzo.classList.add('wybrZO');
        activebtn = btnzo;
    })
    btnzi.addEventListener('click', () => {
        if(activebtn){
            activebtn.classList.remove('wybrCZ');
            activebtn.classList.remove('wybrZO');
            activebtn.classList.remove('wybrZI');
        }
        btnzi.classList.add('wybrZI');
        activebtn = btnzi;
    })