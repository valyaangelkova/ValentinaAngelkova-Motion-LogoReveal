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

    tl.set("#LOGO", {alpha:0})
    .from("#b_2", {duration:1,alpha:0, y:-1000,  ease:"circ.out"})
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

function 
MainTL
.add(LettersFallIn())
;