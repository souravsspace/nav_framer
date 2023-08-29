import { AnimatePresence, MotionConfig, motion, useCycle } from "framer-motion";
import React from "react";

export default function NavCopy() {
  const [mobileNavOpen, toggleMobileNav] = useCycle(false, true);

  const nav = ["Home", "About", "Projects", "Contact"];

  return (
    <main className="bg-slate-950 h-[100vh]">
      <nav className="sticky bg-slate-700 text-white">
        <div className="flex justify-between items-center px-8 py-2 max-md:px-3 max-md:flex-row-reverse">
          <div>
            <h1 className="text-2xl font-semibold">Sourav Ukil</h1>
          </div>
          <ul className="flex justify-center items-center gap-x-4 max-md:hidden">
            {nav.map((item, index) => {
              return (
                <li key={index}>
                  <a className="hover:text-gray-200" href="/">
                    {item}
                  </a>
                </li>
              );
            })}
            <input
              placeholder="search"
              className="text-black outline-none border-1 rounded-lg px-2 py-px"
              type="text"
            />
          </ul>
          <div className="md:hidden">
            <motion.button
              animate={mobileNavOpen ? "open" : "closed"}
              onClick={() => toggleMobileNav()}
              className="flex flex-col space-y-[5px] z-10 relative"
            >
              <div>
                <motion.span
                  variants={{
                    open: { rotate: 45, y: 6 },
                    close: { rotate: 0 },
                  }}
                  className="w-5 h-[1.5px] bg-white block"
                ></motion.span>
              </div>
              <div>
                <motion.span
                  variants={{
                    open: { opacity: 0 },
                    close: { opacity: 1 },
                  }}
                  className="w-5 h-[1.5px] bg-white block"
                ></motion.span>
              </div>
              <div>
                <motion.span
                  variants={{
                    open: { rotate: -45, y: -6 },
                    close: { rotate: 0 },
                  }}
                  className="w-5 h-[1.5px] bg-white block"
                ></motion.span>
              </div>
            </motion.button>

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
                          when: "beforeChildren",
                        },
                      },
                      closed: {
                        x: "-100%",
                        transition: {
                          when: "afterChildren",
                        },
                      },
                    }}
                    animate="open"
                    initial="closed"
                    exit="closed"
                    className="fixed inset-0 bg-slate-600"
                  >
                    <motion.nav className="px-8 space-y-4 flex flex-col justify-center h-full">
                      <motion.div
                        variants={{
                          open: {
                            y: 0,
                            opacity: 1,
                          },
                          closed: {
                            y: "25%",
                            opacity: 0,
                          },
                        }}
                      >
                        <ul className="space-y-1">
                          {nav.map((item, index) => {
                            return (
                              <motion.li
                                whileHover={{ scale: 1.1, x: "7%", fontWeight: "bold" }}
                                whileTap={{ scale: 0.9, x: "0%" }}
                                key={index}
                              >
                                <a className="text-2xl" href="#">
                                  {item}
                                </a>
                              </motion.li>
                            );
                          })}
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
                          },
                        }}
                        className="w-full h-px bg-white"
                      ></motion.div>
                      <motion.div
                        variants={{
                          open: {
                            y: 0,
                            opacity: 1,
                          },
                          closed: {
                            y: "25%",
                            opacity: 0,
                          },
                        }}
                        className="flex gap-x-2 justify-center items-center"
                      >
                        <motion.span
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1 }}
                          variants={{
                            open: {
                              y: 0,
                              opacity: 1,
                            },
                            closed: {
                              y: "25%",
                              opacity: 0,
                            },
                          }}
                          className="w-10 h-10 rounded-lg bg-white block cursor-pointer"
                        ></motion.span>
                        <motion.span
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1 }}
                          variants={{
                            open: {
                              y: 0,
                              opacity: 1,
                            },
                            closed: {
                              y: "25%",
                              opacity: 0,
                            },
                          }}
                          className="w-10 h-10 rounded-lg bg-white block cursor-pointer"
                        ></motion.span>
                        <motion.span
                          whileTap={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1 }}
                          variants={{
                            open: {
                              y: 0,
                              opacity: 1,
                            },
                            closed: {
                              y: "25%",
                              opacity: 0,
                            },
                          }}
                          className="w-10 h-10 rounded-lg bg-white block cursor-pointer"
                        ></motion.span>
                      </motion.div>
                    </motion.nav>
                  </motion.div>
                </MotionConfig>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </main>
  );
}
