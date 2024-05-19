
var PageOne = document.querySelector(".oneheadtext");



var cursor = document.querySelector(".mous");


// Initialize cursor
gsap.set(cursor, { scale: 0, opacity: 0 });

PageOne.addEventListener("mousemove", function(Move) {
    gsap.to(cursor, {
        x: Move.clientX,
        y: Move.clientY
    });
});

PageOne.addEventListener("mouseenter", function(Move) {
    gsap.to(cursor, {
        scale: 1,
        opacity: 1
    });
});

PageOne.addEventListener("mouseleave", function(Move) {
    gsap.to(cursor, {
        scale: 0
    });
});





