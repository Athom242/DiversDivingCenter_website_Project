//Effect du Navigateur
const nav_bar = document.querySelector(".nav_bar nav");
const nav_bar_parent = nav_bar.parentElement.parentElement;
let pos = nav_bar_parent.clientHeight - nav_bar.clientHeight + 10;

//
const posDest = document.querySelectorAll(".itemDest");
const postDesp = document.querySelectorAll(".destinations")[0].parentElement.firstElementChild.clientHeight - 948;
console.log(postDesp);
window.addEventListener("scroll", (event) => {
    if (scrollY >= pos) {
        if (!(nav_bar.parentElement.classList.contains("EffectScrollPosition"))) {
            nav_bar.parentElement.classList.toggle("EffectScrollPosition");
            // console.log("Bonjour tout le monde");
        }




    } else if (scrollY < pos) {
        if (nav_bar.parentElement.classList.contains("EffectScrollPosition")) {
            nav_bar.parentElement.classList.toggle("EffectScrollPosition");
        }
    }

    if (scrollY >= postDesp) {
        let i = 0;
        posDest.forEach((elt) => {
            setTimeout(() => {
                elt.classList.add("itemDest_Ani")
                elt.style.opacity = 1;
            }, i * 1000)


            i += 0.4;
        })
        console.log("Bonjour tout le monde");
        console.log(postDesp + posDest[0].parentElement.clientHeight)
        console.log(scrollY)
    }
    // if (scrollY >= postDesp + posDest[0].parentElement.clientHeight) {
    //     posDest.forEach((elt) => {
    //         elt.parentElement.style.visibility = "hidden";
    //         elt.classList.remove("itemDest_Ani");
    //     })
    // }


})



// let itemDest = document.querySelectorAll(".itemDest");

// itemDest.forEach((elt) => {
//     console.log(elt.style.animation);
// })
let i = 0;
const row = document.querySelectorAll(".rowPresentation");
let count = 0;
row.forEach((elt) => {
    setTimeout(() => {
        if (count <= 1) {
            elt.classList.add("rowPresentation_Ani_right");
        } else {
            elt.classList.add("rowPresentation_Ani_left");
        }

        elt.style.left = '0';
        elt.style.right = "0";
        elt.style.opacity = 1;
        // elt.style.visibility = "initial";
    }, i * 1000)
    i += .25;

    count += 1;

    console.log(count)
})