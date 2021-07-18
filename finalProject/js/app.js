//1st page

const words=["scroll","in","steps"]

let cursor=gsap.to('.cursor', {opacity:0, ease: "power2.inOut", repeat:-1})
let masterTl=gsap.timeline({repeat: -1}).pause()
let boxTl=gsap.timeline()

boxTl.to('.box', {duration:1, width:"12.7vw", delay: 0.5, ease: "power4.inOut"})
  .from('.hi', {duration:1, y:"7vw", ease: "power3.out"})
  .to('.box', {duration:1, height:"7vw", ease: "elastic.out", onComplete: ()=> masterTl.play()})
  .to('.box', {duration:2, autoAlpha:0.5, yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})

  words.forEach(word => {
  let tl=gsap.timeline({repeat: 1, yoyo: true, repeatDelay:0.75})
  tl.to('.text', {duration: 0.5, text: word});
  masterTl.add(tl);
})
//1st page end

//2nd page
let controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
	triggerElement: ".section2"
})

.setTween(".moon", {y:-400}) 
.addTo(controller);
var scene = new ScrollMagic.Scene({
	triggerElement: ".section2"
})

.setTween(".jap", {y:"-100vh"}) 
.addTo(controller);
//2nd page end

//3rd page
//let controller = new ScrollMagic.Controller();

//nav
var scene = new ScrollMagic.Scene({
	triggerElement: ".section3"
})

.setTween(".navbar", {opacity:1}) 
.addTo(controller);

//content
var scene = new ScrollMagic.Scene({
	triggerElement: ".section3"
})

.setTween(".greeting", {opacity:0.3,ease: Elastic.easeOut.config(1,0.3),repeat: -1,delay: 1}) 
.addTo(controller);
/* var scene = new ScrollMagic.Scene({
	triggerElement: ".section2"
})

.setTween(".jap", {y:"-100vh"}) 
.addTo(controller); */
//3rd page end