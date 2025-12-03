import Image from "next/image";
import Gallery from "@/components/Gallery";
import { sortImages } from '@/utils/sortImages';

export default function Pt1() {
  const artworks = [
    "1. Part1_SNG-69.jpg", "2. Part1_SNG-75.jpg", "3.Part1_SNG-54.jpg",
    "4.Part1_SNG-62.jpg", "5.Part1_SNG-53.jpg", "6.Part1_SNG-42.jpg", "7.Part1_SNG-78.jpg",
    "8.Part1_SNG-58.jpg", "9.Part1_SNG-61.jpg", "10.Part1_SNG-24.jpg"
  ];

  const performances = sortImages([
    "1 Nigel Rolfe.jpg", "10 Imants Daksis.jpg", "11.jpg", "12.jpg", "2 Nigel Rolfe.jpg",
    "3  Paula Fitzsimons.jpg", "4  Paula Fitzsimons.jpg", "5 Lissie Rettenwander.jpg",
    "6 Lissie Rettenwander.jpg", "7 Peter Fritzenwallner.jpg", "8 Peter Fritzenwallner.jpg",
    "9 Imants Daksis.jpg"
  ]);

  const images = [...artworks, ...performances];

  const captions = [
    // Artworks captions (images 1-2: Kevin Daryl Ferdinandus)
    "Kevin Daryl Ferdinandus, \"Anomaly Simulation\", Installation, 2025",
    "Kevin Daryl Ferdinandus, \"Anomaly Simulation\", Installation, 2025",
    // Images 3-4: Anna Hofbauer
    "Anna Hofbauer, Band, Zahn, Feder (aus der Serie eme ere tee), Version Schloss Neugebäude, Alabaster, Holz, Marmor, Lampen, 54 x 95 x 96 cm, 2023/2025",
    "Anna Hofbauer, Band, Zahn, Feder (aus der Serie eme ere tee), Version Schloss Neugebäude, Alabaster, Holz, Marmor, Lampen, 54 x 95 x 96 cm, 2023/2025",
    // Images 5-6: Céline Struger
    "Céline Struger, \"A Blessing and a Burden\", 22 x 22 x 15 cm, ceramics, 2025",
    "Céline Struger, \"A Blessing and a Burden\", 22 x 22 x 15 cm, ceramics, 2025",
    // Images 7-8: Markus Redl
    "Markus Redl, \"Stein 123101 [Fritz T. Ist gestorben] 2010\", Wachauer Marmor/Wespennest, 67 x 34 x 27 cm, 63 kg",
    "Markus Redl, \"Stein 123101 [Fritz T. Ist gestorben] 2010\", Wachauer Marmor/Wespennest, 67 x 34 x 27 cm, 63 kg",
    // Images 9-10: Lissie Rettenwander & Paula Fitzsimons
    "Lissie Rettenwander, \"Haus- und Hofmusik für Schloss Neugebäude\", 2025",
    "Paula Fitzsimons, U N M O N U M E N T A L - M O U N D/ C A I R N / K E R B A performance art work",
    // Performance images captions
    "Nigel Rolfe, Performance \"Framed by Wolves\" | Photo by gottrekorder, Schloss Neugebäude Vienna",
    "Nigel Rolfe, Performance \"Framed by Wolves\" | Photo by gottrekorder, Schloss Neugebäude Vienna",
    "Paula Fitzsimons, Performance \"Unmonumental\" | Photo by gottrekorder, Schloss Neugebäude Vienna",
    "Paula Fitzsimons, Performance \"Unmonumental\" | Photo by gottrekorder, Schloss Neugebäude Vienna",
    "Lissie Rettenwander, Performance \"Haus- und Hofmusik für Schloss Neugebäude 2025\" | Photo by gottrekorder, Schloss Neugebäude Vienna",
    "Lissie Rettenwander, Performance \"Haus- und Hofmusik für Schloss Neugebäude 2025\" | Photo by gottrekorder, Schloss Neugebäude Vienna",
    "Peter Fritzenwallner, Performance \"ENTROPIE SUPPLEMENT SUFFERFEST oder DER FACTOR- ENTROPIEMANN SUFFERT LEISE\" | Photo by gottrekorder, Schloss Neugebäude Vienna",
    "Peter Fritzenwallner, Performance \"ENTROPIE SUPPLEMENT SUFFERFEST oder DER FACTOR- ENTROPIEMANN SUFFERT LEISE\" | Photo by gottrekorder, Schloss Neugebäude Vienna",
    "Imants Daksis & Mersedes Margoit, \"Performance for Schloss Neugebäude 2025\" | Photo by gottrekorder, Schloss Neugebäude Vienna",
    "Imants Daksis & Mersedes Margoit, \"Performance for Schloss Neugebäude 2025\" | Photo by gottrekorder, Schloss Neugebäude Vienna",
    "Photo by gottrekorder, Schloss Neugebäude Vienna",
    "Photo by gottrekorder, Schloss Neugebäude Vienna"
  ];

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
            <Gallery images={images} basePath="/images/pt1" captions={captions} />
          </div>
        </div>
      </div>
    </div>
  );
}