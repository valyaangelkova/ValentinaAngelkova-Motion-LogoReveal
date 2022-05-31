import { gsap } from "gsap";import { gsap } from "gsap";


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
    tl.from("#b", {duration:1, y:-100, ease:"elastic.out"})
    .from("l",{duration:1, y:-100, ease:"elastic.out"}) 
    ;
    return tl;
}
MainTL
.add(LettersFallIn())
;