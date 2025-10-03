import { gsap } from 'gsap';

import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, SplitText);
