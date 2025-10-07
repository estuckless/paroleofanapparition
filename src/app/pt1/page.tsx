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
        </div>
      </div>
    </div>
  );
}