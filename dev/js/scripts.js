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

    
    tl.set("#b_2",{alpha:100})
    .set("#s",{alpha:100})
   .set("#LOGO",{alpha:0})
    .from("#b_2", {duration:1,alpha:100, y:-1000,  ease:"circ.out"})
    .from("#l_2",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#a_3",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#c",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#k",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#s",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#a",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#n",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#d",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#l",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#i",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#b",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#r",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#a_2",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#r_2",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    .from("#y",{duration:1, alpha:0, y:-1000,  ease:"circ.out"},"-=0.75") 
    ;
    return tl;
}

function LettersFadeOut(){
    let tl=gsap.timeline({});
    tl.to(".black", { duration:0.75, alpha:0, stagger:{each:0.2, from:"end"}},"label")
    tl.to(".sand", { duration:0.75, alpha:0, stagger:{each:0.2, from:"end"}},"label")
    tl.to(".library", { duration:0.75, alpha:0, stagger:{each:0.2, from:"end"}},"label")
    ;
    return tl;
}

function LettersMoveLeftward(){
    let tl=gsap.timeline({});
    tl.to("#s", {duration:3, x:-156, ease:"circ.out"},"label1")
    tl.to("#l", {duration:3, x:-302, ease:"circ.out"},"label1")
    ;
    return tl;
}

function MorphSVG(){
    let tl=gsap.timeline({});
    
    tl
    .to("#l", {duration:0.5, morphSVG:"#s" })
    .set("#b_2", {alpha:0})
    .set("#s", {alpha:0})
    .to("#l", {duration:0.5, morphSVG:"#b_2" })
    .set("#LOGO", {alpha:100})
    .to("#l", {duration:0.5, morphSVG:"#LOGO", alpha:100})
    .set("#LOGO", {alpha:100})
    
    .to("#l", {color:"#D6FF7E"})
    ;
    return tl;
}
MainTL
.add(LettersFallIn())
.add(LettersFadeOut())
.add(LettersMoveLeftward())
.add(MorphSVG())
;