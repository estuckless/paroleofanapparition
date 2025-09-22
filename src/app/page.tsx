'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
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
    <div className="min-h-screen bg-white flex justify-center items-start pb-56 md:pb-0">
      <div className="relative w-full max-w-2xl h-[80vh] md:h-screen">
        <Image
          src="/images/foot without logos.jpg"
          alt="Parole of an Apparition"
          fill
          className="object-contain object-top mix-blend-multiply scale-[1.03]"
          priority
        />
        
        {/* Logo overlay grid - top right area on desktop, left side down 20% on mobile */}
        <div className="absolute top-0 right-0 md:w-1/2 md:h-1/3 w-1/2 h-1/3 md:top-0 top-6 md:right-0 -left-[22%] z-10">
          <div className="grid grid-cols-2 gap-1 p-4">
            {/* Logo slots - adjust positioning as needed */}
            <div></div>
            <button onClick={() => setActiveModal('gottrekorder')} className="w-20 h-20 relative hover:opacity-80 transition-opacity">
              <Image src="/images/logos/gottrekorderlogo1.jpg" alt="gottrekorder" fill className="object-contain" />
            </button>
            <div></div>
            <button onClick={() => setActiveModal('hm')} className="w-20 h-20 relative hover:opacity-80 transition-opacity">
              <Image src="/images/logos/hm_communication-01.png" alt="HM Communication" fill className="object-contain" />
            </button>
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
