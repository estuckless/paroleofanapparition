export const sortImages = (images: string[]): string[] => {
    return images.sort((a, b) => {
        const numA = parseInt(a.match(/^\d+/)?.[0] || '0', 10);
        const numB = parseInt(b.match(/^\d+/)?.[0] || '0', 10);
        return numA - numB;
    });
};
