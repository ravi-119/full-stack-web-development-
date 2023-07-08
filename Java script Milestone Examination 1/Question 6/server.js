// function calcVowel() {
//     let name = document.getElementById('user-name').value;
//     let result = document.getElementById('result');
//     let count = 0;
//     for(let i = 0; i < name.length; i++) {
//         if(name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u') {
//             count++;
//         }
//     }
//     result.innerText = count;
// };

// document.getElementById('submit-btn').addEventListener("click", calcVowel);

function calcVowel() {

    let name  = document.getElementById("user-name").value;
    let result = document.getElementById("result");

    let count = 0; 
    for (let i = 0; i < name.length; i++) {
        if (name[i] == 'a'  || name[i] == 'e'  || name[i] == 'i'  || name[i] == 'o'  || name[i] == 'u' ) {
            count++;
        }
        
    }
    result.innerText = count;
};

document.getElementById("submit-btn").addEventListener("click", calcVowel);