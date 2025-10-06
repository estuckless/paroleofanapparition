import Image from "next/image";

export default function Press() {
  return (
    <div className="min-h-screen bg-white p-4 pb-56 md:pb-4">
      <div className="max-w-2xl mx-auto font-mono text-sm space-y-8 text-black">
        <h1 className="text-lg">press</h1>

        <div className="space-y-6">
          <a
            href="https://www.nigelrolfe.net"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full h-[500px] cursor-pointer hover:opacity-95 transition-opacity"
          >
            <Image
              src="/images/Brought to my knees, 2022, Nigel Rolfe.TIF"
              alt="Brought to my knees, 2022 © Nigel Rolfe"
              fill
              className="object-contain"
            />
          </a>
          <p className="text-center italic">Brought to my knees, 2022 © Nigel Rolfe</p>

          <div className="space-y-4 mt-8">
            <h2 className="font-semibold">Articles</h2>
            <p>
              <a
                href="https://www.les-nouveaux-riches.com/parole-of-an-apparition/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Les Nouveaux Riches: Parole of an Apparition
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
