"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[80vh] xl:h-[90vh]
        flex items-center justify-center
      "
    >
      {/* Background image */}
      <div className="absolute inset-0">
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
      </div>
    </section>
  );
}
