"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex items-center gap-4">
            <motion.span
              className="grid h-12 w-12 place-items-center rounded-lg border border-purple-300/35 bg-purple-400/15 font-mono text-sm font-bold text-purple-100"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              MF
            </motion.span>
            <div>
              <p className="text-sm font-semibold text-white">
                Loading security portfolio
              </p>
              <div className="mt-2 h-1 w-44 overflow-hidden rounded-full bg-purple-950">
                <motion.span
                  className="block h-full rounded-full bg-purple-300"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
