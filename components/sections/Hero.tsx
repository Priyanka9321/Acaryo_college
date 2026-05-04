"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.04]);

  return (
    <motion.div ref={ref} style={{ opacity }} className="sticky top-0 z-0">
      <section
        className="
          relative w-full overflow-hidden
          h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh] xl:h-[90vh]
          flex items-center justify-center
        "
      >
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src="/assets/images/hero.jpeg"
            alt="Campus"
            fill
            priority
            sizes="100vw"
            className="
              object-cover object-center
              lg:object-fill
            "
          />
        </motion.div>
      </section>
    </motion.div>
  );
}
