'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Info() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveModal(null);
      }
    };

    if (activeModal) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [activeModal]);

  const gottrekorderInfo = {
    title: "gottrekorder e.v.",
    content: "gottrekorder e.v. is an international association of artists based in Graz and Vienna (Austria) founded in 2002. Since 2015, gottrekorder has curated numerous art exhibitions and collaborative projects including visual arts, sound, music, literature, installation and performance, with both Austrian and international artists.",
    email: "office@gottrekorder.com",
    web: "gottrekorder.com",
    instagram: "@gottrekorder"
  };

  const hmInfo = {
    title: "HM Communication",
    content: "HM Communication was founded by Hema Makwana and is based in Vienna/Austria. For the past fifteen-plus years, Hema and her team have been trusted and close advisors to collectors providing personal and bespoke collection management services, and working directly with clients on the implementation of ideas primarily in the DACH region and the UK. Independently, HM Communication is also a supportive companion for contemporary artists and creatives from various fields. Hema brings exceptional ideas to life by guiding and assisting the artists & creatives in expanding their careers.",
    email: "office@hmcommunication.eu",
    web: "hmcommunication.eu",
    instagram: "@_hm_communication"
  };
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

              <p>Nigel Rolfe (UK/IE) is considered one of the pioneering artists of performance art and has been one of its most active and prominent practitioners since the 1970s. From his early works, which he described as &ldquo;Sculptures in Motion,&rdquo; to politically engaged performances in the 1980s, movements into photography, drawing, video and sound, as well as recent outdoor performances, he has profoundly shaped the history of performance art. His work has been exhibited in museums, biennials, and retrospectives around the world. Grounded in the belief that all art-making is a live and vital engagement, Rolfe&rsquo;s performances involve interactions with raw materials, natural elements such as water, fire, air, and earth, as well as environments, in what he calls &ldquo;works made live&rdquo;.</p>

              <p>Paula Fitzsimons is an Irish visual artist using modes of live performance art, photography, moving image, sound, text and expanded drawing technique to make time-based works of art. She works with ephemeral, natural and found materials. Her art practice is informed by movements such as Fluxus, Gutai and Arte Povera, in a world of things, to convene and orchestrate a weave of material crisis as an art practice without edges.</p>

              <p>Parole of an Apparition features works by Michele Bernabei, Robert di Pauli Gruber, Imants Daksis, Kevin Daryl Ferdinandus, Paula Fitzsimons, Peter Fritzenwallner, Laura Hatting, Anna Hofbauer, Mersedes Margoit, Markus Redl, Lissie Rettenwander, Nigel Rolfe, and Céline Struger. The programme will also include an artist talk with Andreas Spiegl from the Academy of Fine Arts Vienna.</p>
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

            <div className="space-y-4">
              <p><a href="/parole" className="hover:underline">Text by Robert Gruber</a>.</p>
              <p>Parole of an Apparition is presented by <button onClick={() => setActiveModal('gottrekorder')} className="hover:underline text-black">gottrekorder - association of artists</button> and <button onClick={() => setActiveModal('hm')} className="hover:underline text-black">HM Communication / Hema Makwana</button></p>

              <div className="space-y-4 mt-6">
                <p>gottrekorder e.v. is an international association of artists based in Graz and Vienna (Austria) founded in 2002. Since 2015, gottrekorder has curated numerous art exhibitions and collaborative projects including visual arts, sound, music, literature, installation and performance, with both Austrian and international artists. <a href="http://www.gottrekorder.com" target="_blank" rel="noopener noreferrer" className="hover:underline">www.gottrekorder.com</a>, <a href="https://www.instagram.com/gottrekorder" target="_blank" rel="noopener noreferrer" className="hover:underline">www.instagram.com/gottrekorder</a></p>

                <p>HM Communication was founded by Hema Makwana and is based in Vienna/Austria. For the past fifteen-plus years, Hema and her team have been trusted and close advisors to collectors providing personal and bespoke collection management services, and working directly with clients on the implementation of ideas primarily in the DACH region and the UK. Independently, HM Communication is also a supportive companion for contemporary artists and creatives from various fields. Hema brings exceptional ideas to life by guiding and assisting the artists creatives in expanding their careers. <a href="https://www.hmcommunication.eu" target="_blank" rel="noopener noreferrer" className="hover:underline">www.hmcommunication.eu</a>, <a href="https://www.instagram.com/_hm_communication" target="_blank" rel="noopener noreferrer" className="hover:underline">www.instagram.com/_hm_communication</a></p>
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
                <p>GNEVER</p>
                <p>Kathrin Hanga</p>
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
              <div className="text-sm space-y-6">
                <div className="space-y-2">
                  <p>Martina Egger</p>
                  <p>Kevin Daryl Ferdinandus</p>
                  <p>Robert Gruber</p>
                  <p>Kathrin Hanga</p>
                  <p>Manfred Stocker</p>
                </div>

                <div className="space-y-2">
                  <p>Hema Makwana</p>
                </div>

                <div className="space-y-2">
                  <p>Michael Dietrich</p>
                  <p>Sarah Sharafi</p>
                  <p>Florian Strasser</p>
                  <p>Eugene Teira</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-base">sponsors</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/A_Industriellenvereinigung.jpg" alt="Industriellenvereinigung" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/A_Schloss Neugebäude.jpg" alt="Schloss Neugebäude" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/A_Votivkirche.tif" alt="Votivkirche" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/Bezirk Alsergrund.png" alt="Bezirk Alsergrund" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/Bezirk Landstraße.png" alt="Bezirk Landstraße" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/Bundesministerium für Wohnen Kunst Kultur Medien und Sport.jpg" alt="Bundesministerium" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/E_WKO wien web.png" alt="WKO Wien" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/Fredelia.png" alt="Fredelia" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/jaf_logo_at_rgb_positiv.svg" alt="JAF" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/Österreichischer Weinbauverband_Logo.jpg" alt="Österreichischer Weinbauverband" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/Weingut Mayer am Pfarrplatz_Logo.png" alt="Weingut Mayer am Pfarrplatz" fill className="object-contain" />
                </div>
                <div className="relative h-16 w-full">
                  <Image src="/images/logos/Weingut Schauer Südsteiermark_Logo.jpg" alt="Weingut Schauer Südsteiermark" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={() => setActiveModal(null)}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-gray-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-mono font-bold text-black">
                {activeModal === 'gottrekorder' ? gottrekorderInfo.title : hmInfo.title}
              </h2>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none ml-4 flex-shrink-0"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4 font-mono text-sm text-black">
              <p className="leading-relaxed">{activeModal === 'gottrekorder' ? gottrekorderInfo.content : hmInfo.content}</p>
              
              <div className="space-y-2 pt-2 border-t border-gray-100">
                <p className="text-black"><strong className="text-black">E-Mail:</strong> <a href={`mailto:${activeModal === 'gottrekorder' ? gottrekorderInfo.email : hmInfo.email}`} className="hover:underline text-black">{activeModal === 'gottrekorder' ? gottrekorderInfo.email : hmInfo.email}</a></p>
                <p className="text-black"><strong className="text-black">Web:</strong> <a href={activeModal === 'gottrekorder' ? `http://${gottrekorderInfo.web}` : `https://${hmInfo.web}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-black">{activeModal === 'gottrekorder' ? gottrekorderInfo.web : hmInfo.web}</a></p>
                <p className="text-black"><strong className="text-black">Instagram:</strong> <a href={`https://www.instagram.com/${activeModal === 'gottrekorder' ? gottrekorderInfo.instagram.replace('@', '') : hmInfo.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-black">{activeModal === 'gottrekorder' ? gottrekorderInfo.instagram : hmInfo.instagram}</a></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}