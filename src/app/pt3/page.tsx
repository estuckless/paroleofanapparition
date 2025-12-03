import Image from "next/image";

export default function Pt3() {
  return (
    <div className="min-h-screen bg-white p-4 pb-56 md:pb-4">
      <div className="max-w-2xl mx-auto font-mono text-sm space-y-4 text-black">
        <h1 className="text-lg">pt 3</h1>
        <div className="space-y-4">
          <div className="space-y-2">
            <p><strong>what:</strong> Performance</p>
            <p><strong>where:</strong> Votivkirche</p>
            <p><strong>when:</strong> Saturday, 11.10.2025, 12:00-13:00</p>
          </div>

          <div className="space-y-2">
            <p><strong>artists:</strong></p>
            <div className="ml-4 space-y-1">
              <p>Paula Fitzsimons</p>
              <p>Nigel Rolfe</p>
            </div>
          </div>

          <div className="space-y-2">
            <p><strong>access:</strong></p>
            <div className="ml-4 space-y-1">
              <p><a href="https://maps.app.goo.gl/evu4MLLF7Tth1ZMv9" target="_blank" rel="noopener noreferrer" className="hover:underline">Votivkirche<br />Rooseveltplatz, 1090 Wien</a></p>
              <p>Performance takes place in public space in front of Votivkirche</p>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <h2 className="font-semibold">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "1.jpg", "10.Paula&Nigel_100.jpg", "11. Paula&Nigel_108.jpg", "12.jpg", "2.jpg",
                "3.jpg", "4.jpg", "5.jpg", "6.Paula&Nigel_079.jpg", "7.Paula&Nigel_080.jpg",
                "9.Paula&Nigel_091.jpg"
              ].map((img, i) => (
                <div key={i} className="relative w-full h-[300px]">
                  <Image
                    src={`/images/pt3/${img}`}
                    alt={`Part 3 Image ${i + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}