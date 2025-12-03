'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface GalleryProps {
    images: string[];
    basePath: string;
    captions?: string[];
}

export default function Gallery({ images, basePath, captions }: GalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (selectedIndex === null) return;

        if (e.key === 'Escape') {
            setSelectedIndex(null);
        } else if (e.key === 'ArrowLeft') {
            setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
        } else if (e.key === 'ArrowRight') {
            setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : prev));
        }
    }, [selectedIndex, images.length]);

    useEffect(() => {
        if (selectedIndex !== null) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedIndex, handleKeyDown]);

    return (
        <div className="w-full">
            {/* Grid View */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="relative w-full h-[300px] cursor-pointer hover:opacity-95 transition-opacity"
                        onClick={() => setSelectedIndex(i)}
                    >
                        <Image
                            src={`${basePath}/${img}`}
                            alt={`Gallery Image ${i + 1}`}
                            fill
                            className="object-contain bg-gray-50"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                ))}
            </div>

            {/* Minimal Counter (Hidden in Grid View, kept for structure if needed later, or remove?) 
          Let's remove the "images count" text as it's less relevant in a full grid view 
          where you can see everything. 
      */}

            {/* Lightbox Overlay */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-white/95 flex items-center justify-center"
                    onClick={() => setSelectedIndex(null)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 text-4xl font-light leading-none hover:text-gray-600 p-4 z-20"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex(null);
                        }}
                    >
                        ×
                    </button>

                    {/* Navigation Zones */}
                    <div
                        className="absolute inset-y-0 left-0 w-1/2 cursor-w-resize z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
                        }}
                    />
                    <div
                        className="absolute inset-y-0 right-0 w-1/2 cursor-e-resize z-10"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (selectedIndex < images.length - 1) setSelectedIndex(selectedIndex + 1);
                        }}
                    />

                    {/* Main Image */}
                    <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 md:p-12 pointer-events-none">
                        <Image
                            src={`${basePath}/${images[selectedIndex]}`}
                            alt={`Gallery Image ${selectedIndex + 1}`}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Counter */}
                    <div className="absolute bottom-4 left-4 font-mono text-sm">
                        {selectedIndex + 1} / {images.length}
                    </div>

                    {/* Caption */}
                    {captions && captions[selectedIndex] && (
                        <div className="absolute bottom-4 right-4 left-4 md:left-auto md:max-w-md font-mono text-xs md:text-sm text-black/80 bg-white/80 p-3 rounded">
                            {captions[selectedIndex]}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
