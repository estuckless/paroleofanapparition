import Image from "next/image";

export default function Info() {
  return (
    <div className="min-h-screen bg-white p-4 pb-56 md:pb-4">
      <div className="max-w-7xl mx-auto font-mono text-sm space-y-8 text-black">
        <h1 className="text-lg mb-8">info</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <h2 className="font-semibold text-base">Parole of an Apparition</h2>
              <p><strong>with Nigel Rolfe</strong></p>
              <p><strong>8 – 14 October 2025, Vienna</strong></p>
            </div>

            <div className="space-y-6">
              <p>From 8 – 14 October 2025, British-Irish performance artist Nigel Rolfe and Irish visual artist Paula Fitzsimons will join forces with local Vienna-based artists for a series of live performances and installations in Vienna. The event will take place at different sites and locations in the city, including Schloss Neugebäude, Votivkirche, and Haus der Industrie.</p>

              <p>Nigel Rolfe (UK/IE) is considered one of the pioneering artists of performance art and one of its most active and prominent practitioners since the 1970s. His work, including live performances, photography, drawing, video and sound, has been shown in museums, biennials and retrospectives worldwide. Central to Rolfe&rsquo;s performance practice is the contention that art is always &ldquo;live&rdquo;, created in the moment. He sees his body as &ldquo;sculpture in motion&rdquo; and a painting tool. In his performances, he interacts with water, fire, air, earth, and other materials and environments, putting his body and himself in what he calls &ldquo;works made live&rdquo;.</p>

              <p>Paula Fitzsimons is an Irish visual artist using modes of live performance art, photography, moving image, sound, text and expanded drawing technique to make time-based works of art. She works with ephemeral, natural and found materials. Her art practice is informed by movements such as Fluxus, Gutai and Arte Povera, in a world of things, to convene and orchestrate a weave of material crisis as an art practice without edges.</p>

              <p>The performances of Rolfe and Fitzsimons will be accompanied by works from artists Michele Bernabei, Robert di Pauli Gruber, Imants Daksis, Kevin Daryl Ferdinandus, Peter Fritzenwallner, Laura Hatting, Markus Redl, Mersedes Margoit, Céline Struger, and Lissie Rettenwander. The event will also feature an artist talk moderated by Andreas Spiegl (Academy of Fine Arts Vienna).</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Programme:</h3>
              <div className="space-y-3 ml-4">
                <p><a href="/pt1" className="hover:underline"><strong>Part 1:</strong> Wednesday, 08.10.2025, 18:00 – Schloss Neugebäude</a></p>
                <p><a href="/pt2" className="hover:underline"><strong>Part 2:</strong> Thursday, 09.10.2025, 20:00 – Venster99</a></p>
                <p><a href="/pt3" className="hover:underline"><strong>Part 3:</strong> Saturday, 11.10.2025, 12:00 – Votivkirche</a></p>
                <p><a href="/pt4" className="hover:underline"><strong>Part 4:</strong> Tuesday, 14.10.2025, 18:30 – Haus der Industrie</a></p>
              </div>
            </div>
          </div>

          {/* Right Column - Lists */}
          <div className="space-y-12">
            <div>
              <h3 className="font-semibold mb-4 text-base">artists</h3>
              <div className="text-sm space-y-2">
                <p>Michele Bernabei</p>
                <p>Imants Daksis</p>
                <p>Kevin Daryl Ferdinandus</p>
                <p>Paula Fitzsimons</p>
                <p>Peter Fritzenwallner</p>
                <p>Robert di Pauli Gruber</p>
                <p>Laura Hatting</p>
                <p>Anna Hofbauer</p>
                <p>Mersedes Margoit</p>
                <p>Markus Redl</p>
                <p>Lissie Rettenwander</p>
                <p>Nigel Rolfe</p>
                <p>Céline Struger</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-base">team</h3>
              <div className="text-sm space-y-2">
                <p>Michael Dietrich</p>
                <p>Martina Egger</p>
                <p>Kevin Daryl Ferdinandus</p>
                <p>Robert Gruber</p>
                <p>Kathrin Hanga</p>
                <p>Luisa Franz Kleopatra</p>
                <p>Hema Makwana</p>
                <p>Manfred Stocker</p>
                <p>Florian Strasser</p>
                <p>Eugene Stuckless</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-base">sponsors</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/BMWKMS_Logo.jpg" alt="Bundesministerium" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/FREDELIA_LogoTalents.png" alt="Fredelia" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/IV_Logo_2022_Bund.jpg" alt="Industriellenvereinigung" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/jaf_logo_at_rgb_positiv.svg" alt="JAF" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/Logo-Kultur-Alsergrund-rot.png" alt="Kultur Alsergrund" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/Österreichischer Weinbauverband_Logo.jpg" alt="Österreichischer Weinbauverband" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/neugebäude.jpg" alt="Schloss Neugebäude" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/Weingut Mayer am Pfarrplatz_Logo.png" alt="Weingut Mayer" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/Weingut Schauer Südsteiermark_Logo.jpg" alt="Weingut Schauer" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/hm_communication-01.png" alt="HM Communication" fill className="object-contain" />
                </div>
              </div>
              <div className="mt-4 text-sm text-center">
                <p>Votivkirche</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}