import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-start pb-56 md:pb-0">
      <div className="relative w-full max-w-2xl h-screen">
        <Image
          src="/images/parole_front2.png"
          alt="Parole of an Apparition"
          fill
          className="object-contain object-top mix-blend-multiply scale-[1.03]"
          priority
        />
      </div>
    </div>
  );
}
