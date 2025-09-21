import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-start pb-56 md:pb-0">
      <div className="relative w-full max-w-2xl h-[60vh] md:h-screen">
        <Image
          src="/images/parole_front2.png"
          alt="Parole of an Apparition"
          fill
          className="object-contain object-top mix-blend-multiply scale-[1.03]"
          priority
        />
        
        {/* Logo overlay grid - top right area */}
        <div className="absolute top-0 right-0 w-1/2 h-1/3 z-10">
          <div className="grid grid-cols-2 gap-1 p-4">
            {/* Logo slots - adjust positioning as needed */}
            <div></div>
            <a href="https://www.instagram.com/gottrekorder" target="_blank" rel="noopener noreferrer" className="w-12 h-12 relative hover:opacity-80 transition-opacity">
              <Image src="/images/logos/gottrekorderlogo1.jpg" alt="gottrekorder" fill className="object-contain" />
            </a>
            <div></div>
            <a href="https://hmcommunication.eu" target="_blank" rel="noopener noreferrer" className="w-12 h-12 relative hover:opacity-80 transition-opacity">
              <Image src="/images/logos/hm_communication-01.png" alt="HM Communication" fill className="object-contain" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
