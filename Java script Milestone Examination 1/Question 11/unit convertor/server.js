// function ctof() {
//     const celcius = document.getElementById('celcius').value;
//     const result = document.getElementById('result');
//     console.log(result);
//     const falenheit = (celcius * 9 / 5) + 32;
//     result.innerText = falenheit;
// };

// document.getElementById('btn').addEventListener("click", ctof);




function ctof() {
    let celcius = document.getElementById('celcius').value;
    let result = document.getElementById('result');

    let falenheit = (celcius * 9 / 5) + 32;
    result.innerText = falenheit
    
};
document.getElementById('btn').addEventListener('click', ctof)





    







