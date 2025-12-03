import Image from "next/image";

export default function Pt4() {
  return (
    <div className="min-h-screen bg-white p-4 pb-56 md:pb-4">
      <div className="max-w-2xl mx-auto font-mono text-sm space-y-4 text-black">
        <h1 className="text-lg">pt 4</h1>
        <div className="space-y-4">
          <div className="space-y-2">
            <p><strong>what:</strong> Performance, Artist Talk</p>
            <p><strong>where:</strong> Haus der Industrie</p>
            <p><strong>when:</strong> Tuesday, 14.10.2025, 18:30-22:00 (Doors 18:30, Start 19:00)</p>
          </div>

          <div className="space-y-2">
            <p><strong>artists:</strong></p>
            <div className="ml-4 space-y-1">
              <p>Michele Bernabei & Robert di Pauli Gruber</p>
              <p>Paula Fitzsimons & Nigel Rolfe</p>
            </div>
          </div>

          <div className="space-y-2">
            <p><strong>talk:</strong></p>
            <div className="ml-4 space-y-1">
              <p>artists with Andreas Spiegl</p>
            </div>
          </div>

          <div className="space-y-2">
            <p><strong>access:</strong></p>
            <div className="ml-4 space-y-1">
              <p><a href="https://maps.app.goo.gl/F3RxQxHW63SbGthcA" target="_blank" rel="noopener noreferrer" className="hover:underline">Haus der Industrie, Großer Festsaal<br />Schwarzenbergplatz 4, 1030 Wien</a></p>
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <h2 className="font-semibold">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "0.jpg", "1.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg",
                "16.jpg", "2.jpg", "3.jpg", "5.jpg", "6.jpg", "8.jpg", "9.jpg"
              ].map((img, i) => (
                <div key={i} className="relative w-full h-[300px]">
                  <Image
                    src={`/images/pt4/${img}`}
                    alt={`Part 4 Image ${i + 1}`}
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