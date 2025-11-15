import React, { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import {
  CircleArrowOutDownRight,
  Clock3Icon,
  MessageCircle,
  MicroscopeIcon,
  Plus,
  X,
} from "lucide-react";

// import {cn} from '@/lib/utils'
function Card() {
  const [open, setOpen] = useState(true);
  return (
    
    <>
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            scale:1.05,
          }}
          transition ={{
            duration : 0.5 ,
            ease : 'easeInOut'
          }}
          exit={{
            opacity : 0 ,
            filter : "blur(10px)" ,
            scale : 0.98
          }}
          className="w-80 h-130 rounded-lg shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-6 font-sans flex flex-col bg-white"
        >
          <h1 className="font-bold text-sm ">Organization UI Components</h1>
          <p className="text-neutral-400 text-sm mt-3">
            Clerk's UI components add turn-key simplicity to complex
            Organization management tasks.
          </p>
          <div className="flex items-center justify-center mt-5 text-sm">
            <button onClick={()=>setOpen(false)} className="flex items-center gap-2 px-3 py-1 rounded-md shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
              Clerk
              <X className="h-4 w-4 text-neutral-400 " />
            </button>
          </div>
          <div className="bg-gray-100 flex-1 mt-4 rounded-lg border-dashed border border-neutral-300 relative">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              whileHover={{
                opacity: 1,
                scale: 1.05,
                filter: "blur(0px) ",
              }}
              transition={{
                // duration : 0.3 ,
                // ease : easeInOut
                type: "spring",
                damping: 15,
                stiffness: 100,
              }}
              className="bg-white divide-y divide-neutral-200 absolute inset-0 rounded-lg border-neutral-200 border "
            >
              <div className=" flex p-4 items-center gap-4">
                <div className="flex items-center p-1 rounded-md justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                  <MessageCircle className="text-neutral-400 h-4 w-4" />
                </div>
                <div>
                  <h2 className="font-semibold text-xs">Clerk UI Components</h2>
                  <p className="text-neutral-400 text-xs">
                    A collection Of UI Components
                  </p>
                </div>
              </div>
              <div className=" flex p-4 items-center gap-4">
                <div className="flex items-center p-1 rounded-md justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                  <CircleArrowOutDownRight className="text-neutral-400 h-4 w-4" />
                </div>
                <div>
                  <h2 className="font-semibold text-xs">Customer Support</h2>
                  <p className="text-neutral-400 text-xs">
                    Reliable customer advice.
                  </p>
                </div>
              </div>
              <div className=" flex p-4 items-center gap-4">
                <div className="flex items-center p-1 rounded-md justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                  <Clock3Icon className="text-neutral-400 h-4 w-4" />
                </div>
                <div>
                  <h2 className="font-semibold text-xs">24 hours turnaround</h2>
                  <p className="text-neutral-400 text-xs">
                    Super fast delivery at warp speed.
                  </p>
                </div>
              </div>
              <div className=" flex p-4 items-center gap-4">
                <div className="flex items-center p-1 rounded-md justify-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                  <MicroscopeIcon className="text-neutral-400 h-4 w-4" />
                </div>
                <div>
                  <h2 className="font-semibold text-xs">Other Services</h2>
                  <p className="text-neutral-400 text-xs">
                    High customer satisfaction rate.
                  </p>
                </div>
              </div>
              <div className="flex p-4 items-center justify-center">
                <div className="flex items-center gap-2">
                  <Plus className="size-5 p-1 rounded-md text-neutral-600 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] " />
                  <p className="text-xs">Get Started</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}

export default Card;
