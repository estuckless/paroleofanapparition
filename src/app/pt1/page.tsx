import Image from "next/image";

export default function Pt1() {
  return (
    <div className="min-h-screen bg-white p-4 pb-56 md:pb-4">
      <div className="max-w-2xl mx-auto font-mono text-sm space-y-4 text-black">
        <h1 className="text-lg">pt 1</h1>
        <div className="space-y-4">
          <div className="space-y-2">
            <p><strong>what:</strong> Performance, Installation, Artwork</p>
            <p><strong>where:</strong> Schloss Neugebäude, Vienna</p>
            <p><strong>when:</strong> Wednesday, 08.10.2025, 18:00-23:00 (Doors 18:00, Start 18:30)</p>
          </div>

          <div className="space-y-2">
            <p><strong>artists:</strong></p>
            <div className="ml-4 space-y-1">
              <p>Imants Daksis</p>
              <p>Kevin Daryl Ferdinandus</p>
              <p>Paula Fitzsimons</p>
              <p>Anna Hofbauer</p>
              <p>Peter Fritzenwallner</p>
              <p>Lissie Rettenwander</p>
              <p>Markus Redl</p>
              <p>Nigel Rolfe</p>
              <p>Céline Struger</p>
            </div>
          </div>

          <div className="space-y-2">
            <p><strong>access:</strong></p>
            <div className="ml-4 space-y-1">
              <p><a href="https://maps.google.com/maps?q=Otmar-Brix-Gasse+1,+1110+Wien" target="_blank" rel="noopener noreferrer" className="hover:underline">Schloss Neugebäude, Westsaal<br />Otmar-Brix-Gasse 1, 1110 Wien</a></p>
              <p>Use entrance to the castle in the western part of the site (next to Neugebäudestraße)</p>
              <p><strong>By public transport:</strong> Take U3 to Simmering and then bus 73A to Schloss Neugebäude</p>
              <p><strong>By car:</strong> Free parking in the courtyard, access via Neugebäudestraße 80</p>
            </div>
            <div className="relative w-full h-[250px]">
              <Image src="/images/Directions-Small.png" alt="Directions to Schloss Neugebäude" fill className="object-contain" />
            </div>
          </div>

          <div className="pt-8 space-y-4">
            <h2 className="font-semibold">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "1. Part1_SNG-69.jpg", "10.Part1_SNG-24.jpg", "2. Part1_SNG-75.jpg", "3.Part1_SNG-54.jpg",
                "4.Part1_SNG-62.jpg", "5.Part1_SNG-53.jpg", "6.Part1_SNG-42.jpg", "7.Part1_SNG-78.jpg",
                "8.Part1_SNG-58.jpg", "9.Part1_SNG-61.jpg",
                "1 Nigel Rolfe.jpg", "10 Imants Daksis.jpg", "11.jpg", "12.jpg", "2 Nigel Rolfe.jpg",
                "3  Paula Fitzsimons.jpg", "4  Paula Fitzsimons.jpg", "5 Lissie Rettenwander.jpg",
                "6 Lissie Rettenwander.jpg", "7 Peter Fritzenwallner.jpg", "8 Peter Fritzenwallner.jpg",
                "9 Imants Daksis.jpg"
              ].map((img, i) => (
                <div key={i} className="relative w-full h-[300px]">
                  <Image
                    src={`/images/pt1/${img}`}
                    alt={`Part 1 Image ${i + 1}`}
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