var istatus = document.querySelector("h5")

var btn = document.querySelector("#add")
// var removefriend = document.querySelector("#remove")
var check = 0

btn.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        check = 1;
    }
    else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        check = 0;
    }
})

// removefriend.addEventListener("click", function () {
//     istatus.innerHTML = "Not Friends";
//     istatus.style.color = "red";
// })
