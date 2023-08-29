import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import React from "react";

export default function Navigation() {
  const [mobileNavOpen, toggleMobileNav] = useCycle(false, true);

  return (
    <nav className="sticky top-0 inset-x-0 h-16 bg-stone-900">
      <div className="container mx-auto flex items-center px-[1.5rem] h-full">
        <div className="z-10 relative">
          <motion.button
            animate={mobileNavOpen ? "open" : "closed"}
            onClick={() => toggleMobileNav()}
            className="flex flex-col space-y-1"
          >
            <motion.span
              variants={{
                open: {
                  rotate: 45,
                  y: 5,
                },
                closed: { rotate: 0 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
            <motion.span
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
            <motion.span
              variants={{
                open: {
                  rotate: -45,
                  y: -5,
                },
                closed: { rotate: 0 },
              }}
              className="w-5 h-px bg-white block"
            ></motion.span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileNavOpen && (
          <MotionConfig 
            transition={{
              type: "tween",
              bounce: 0.15,
            }}
            >
            <motion.div
              variants={{
                open: {
                  x: 0,
                  transition: {
                    when: 'beforeChildren',
                  }
                },
                closed: {
                  x: "-100%",
                  transition: {
                    when: 'afterChildren',
                  }
                },
              }}
              animate="open" // animate in when added to the tree
              exit="closed" // animate out when removed from the tree
              initial="closed" // start animation from closed state
              className="fixed inset-0 bg-blue-600 text-white space-y-10 p-6 container mx-auto flex flex-col justify-center"
            >
              <motion.div
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,                  
                  }
                }}
                >
                <ul className="space-y-5">
                  <li>
                    <a className="text-4xl font-bold" href="/">Home</a>
                  </li>
                  <li>
                    <a className="text-4xl font-bold" href="/">Profile</a>
                  </li>
                  <li>
                    <a className="text-4xl font-bold" href="/">About</a>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,                  
                  }
                }}
                className="bg-white w-full h-px"></motion.div>
              <motion.div
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,                  
                  }
                }}
                >
                <ul className="flex items-center justify-center gap-x-5">
                  <li><div className="bg-gray-300 w-10 h-10 rounded-[10px]"></div></li>
                  <li><div className="bg-gray-300 w-10 h-10 rounded-[10px]"></div></li>
                  <li><div className="bg-gray-300 w-10 h-10 rounded-[10px]"></div></li>
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  );
}
