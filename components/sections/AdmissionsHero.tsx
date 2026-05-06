import Image from "next/image";

export default function AdmissionsHero() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <div className="mb-6 text-center sm:mb-8 lg:mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Admissions
          </h1>
        </div>

        <div className="overflow-hidden bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
          <div className="relative aspect-[16/9] w-full sm:aspect-[16/8] lg:aspect-[16/7]">
            <Image
              src="/assets/images/admission.jpg"
              alt="Admissions at Acaryo Institute"
              fill
              className="object-cover object-[center_10%]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1400px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
