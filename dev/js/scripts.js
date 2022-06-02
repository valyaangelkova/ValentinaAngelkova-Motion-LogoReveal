import { gsap } from "gsap";


import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";

import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";

//import { MotionPathHelper } from "gsap/MotionPathHelper";
gsap.registerPlugin(GSDevTools, MorphSVGPlugin, CustomEase, CustomWiggle, ExpoScaleEase,RoughEase, SlowMo );

const MainTL = gsap.timeline();

function LettersFallIn (){
    let tl=gsap.timeline({});

    
    tl
  
    .set("#b_2",{alpha:100})
    .set("#s",{alpha:100})
   .set("#LOGO",{alpha:0})
    .from("#b_2", {duration:1,alpha:100, y:-1000,  ease:"circ.out"})
    .from("#l_2",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#a_3",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#c",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#k",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#s",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#a",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#n",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#d",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#l",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#i",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#b",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#r",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#a_2",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#r_2",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    .from("#y",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.85") 
    ;
    return tl;
}

function LettersFadeOut(){
    let tl=gsap.timeline({});
    tl.to(".black", { duration:1.25, alpha:0, stagger:{each:0.2, from:"end"}},"label")
    tl.to(".sand", { duration:1.25, alpha:0, stagger:{each:0.2, from:"end"}},"label")
    tl.to(".library", { duration:1.25, alpha:0, stagger:{each:0.2, from:"end"}},"label")
    ;
    return tl;
}

//function LettersMoveLeftward(){
//    let tl=gsap.timeline({});
//    tl.to("#s", {duration:3.75, x:-156, ease:"circ.out"},"label1")
//    tl.to("#l", {duration:3.75, x:-302, ease:"circ.out"},"label1")
//    ;
//    return tl;
//}

function MorphSVG(){
    let tl=gsap.timeline({});
    
    tl
    .to("#l", {duration:1.5, morphSVG:"#s", ease:"back.in" },"label")
    .to("#s", {duration:0.1, alpha:0}, "-=0.25")
    
   // .to("#l", {duration:1, morphSVG:"#b_2", ease:"back.in" })
    //.to("#b_2", {duration:0.3, alpha:0}, "-=0.25")
    .to("#l", {duration:0.1,  alpha:0}, "toLogo")
    .to("#b_2",{duration:1.5, morphSVG:"#s", ease:"back.in" },"label")
    
    .to("b_2", {duration:1.5, morphSVG:"#LOGO"}, "morph")
    .to("l", {duration:1.5, morphSVG:"#LOGO"}, "morph")
    .to("#b_2", {duration:0.1,  alpha:0}, "toLogo")
    .to("#LOGO", {duration:1, alpha:1}, "toLogo")
    
    
    
    
    ;
    return tl;
}
function Bounce(){
    let tl=gsap.timeline({});

    tl.to("#LOGO", {duration:0.5, scale:1.5,transformOrigin:"center", alpha:1, rotation:25, ease:"funWiggle"})
    //.to("#LOGO", {duration:0.5, scale:1,transformOrigin:"center", alpha:1})
    ;
    return tl;
}

function ScaleUp(){
    let tl=gsap.timeline({});
tl.to("#LOGO", {transformOrigin:"top", duration:2, scale:2, rotation: 360, ease: "power4.out"})
.to("#LOGO", {duration:0.5, fill:"#D6FF7E", ease: "slow(0.4, 0.5, false)"},"label")
.to("#background", {duration:0.5, fill:"#2B3927",ease: "slow(0.4, 0.5, false)"},"label")

;
return tl;

}
MainTL

.add(LettersFallIn())
.add(LettersFadeOut())
//.add(LettersMoveLeftward(),"-=25%")
.add(MorphSVG(),"-=25%")
.add(Bounce(),"-=1.6")
.add(ScaleUp(),"-=48.5%")
;

GSDevTools.create();
CustomWiggle.create("funWiggle", {wiggles:2, type: "easeIn"});