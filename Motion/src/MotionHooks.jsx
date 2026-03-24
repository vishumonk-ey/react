import { Rocket, Sparkles, Globe2, Zap } from "lucide-react";
import { useMotionValueEvent, useScroll, useTransform , motion, useMotionTemplate, useSpring } from "motion/react";
import { title } from "motion/react-client";
import React, { useRef } from "react";

function MotionHooks() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-neutral-900">
      <div className="max-w-4xl mx-auto flex flex-col gap-10 py-40">
        {features.map((eachFeature, indx) => (
          <Card eachFeature={eachFeature} key={eachFeature.title} />
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    title: "Launch animations",
    icon: <Rocket className="size-8 text-neutral-200 " />,
    description:
      "High-energy motion presets for product launches, hero sections, and bold CTAs.",
    content: (
      <div>
        <img
          src="https://images.pexels.com/photos/768987/pexels-photo-768987.jpeg"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Subtle micro-interactions",
    icon: <Sparkles className="size-8 text-neutral-200 " />,
    description:
      "Tiny, delightful motion hooks for buttons, toggles, and status chips.",
    content: (
      <div>
        <img
          src="https://images.pexels.com/photos/2706379/pexels-photo-2706379.jpeg"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Global motion system",
    icon: <Globe2 className="size-8 text-neutral-200 " />,
    description:
      "Consistent easing, durations, and variants wired into your entire design system.",
    content: (
      <div>
        <img
          src="https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    title: "Performance-friendly sparks",
    icon: <Zap className="size-8 text-neutral-200 " />,
    description:
      "GPU-accelerated transitions that stay smooth even on motion-heavy pages.",
    content: (
      <div>
        <img
          src="https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg"
          height="500"
          width="500"
          className="rounded-lg"
        />
      </div>
    ),
  },
];
const Card = ({ eachFeature }) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target : ref , 
        offset : ["start end" , "end start"]
    })
    const translateContent = useSpring(useTransform(scrollYProgress , [0,1] , [100 , -100]) , 
    )
    const opacityContent = useTransform(scrollYProgress , [0,0.5,1] , [0,1,0])
    const blur = useTransform(scrollYProgress , [0.5,1] , [0,5])
    const scale = useTransform(scrollYProgress , [0.5,1] , [1,0.8])
  return (
    <div className="grid grid-cols-2 gap-20 py-40 items-center" ref={ref}>
      <motion.div className="flex flex-col gap-2"
        style={{
            filter : useMotionTemplate`blur(${blur}px)` ,
            scale : scale
        }}
      >
        {eachFeature.icon}
        <h2 className="text-2xl text-neutral-200">{eachFeature.title}</h2>
        <p className="text-neutral-200 text-lg">{eachFeature.description}</p>
      </motion.div>
      <motion.div
        style={{
            y : translateContent,
            opacity : opacityContent ,
        }}
      >{eachFeature.content} </motion.div>
    </div>
  );
};

export default MotionHooks;
