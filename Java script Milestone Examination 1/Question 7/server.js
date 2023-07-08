// let itemContainer = [];

// function addItem() {
//   let item = document.getElementById('user-item').value;
//   if (!item) {
//     alert("Please enter an item.");
//     return;
//   }
  
//   if (!itemContainer.includes(item)) {
//     itemContainer.push(item);
//     alert("Successfully added item.");
//   } else {
//     alert("Item already added.");
//   }
// }

// document.getElementById('submit-btn').addEventListener("click", addItem);


let iteamContainer = [];
function addIteam() {

    let iteam  = document.getElementById("user-item").value;
    if (!iteam) {
        alert("please enter an iteam.");
        return;
    }

    if (!iteamContainer.includes(iteam)) {
        iteamContainer.push(iteam);
        alert("Successfully added iteam.");
    } else{
        alert("iteam already added");
    }
    
}
document.getElementById('submit-btn').addEventListener('click', addIteam);