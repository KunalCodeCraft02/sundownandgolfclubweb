const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// let a = document.getElementById("elem1");
// console.log(a)


let elemC = document.getElementById("elem-container");
let fixed = document.getElementById("fixed-images");

elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
});

elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
});


// var elem1 = document.querySelector("#elem1");
// elem1.addEventListener("mouseenter",function(){
//     var image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${image})`
// });

// SECOND METHOD TO DO THIS THINGS 

var elem = document.querySelectorAll(".elem");
elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image");
        console.log(image)
        fixed.style.backgroundImage = `url(${image})`
    })
})
