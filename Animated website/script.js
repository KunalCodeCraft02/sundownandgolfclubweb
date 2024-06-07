
var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
});

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
        crsr.style.border = "1px solid #fff"
        // crsr.style.backgroundColor = "transparent"
    });
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 0
        crsr.style.border = "0px solid #fff"
        // crsr.style.backgroundColor = "transparent"
    })
})



gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:true
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})