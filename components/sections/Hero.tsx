"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background image */}
      <div className="absolute inset-0 will-change-transform animate-ken-burns">
        <Image
          src="/assets/images/hero.jpeg"
          alt="Campus"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}
