// src/pages/portfolio/emails/daylight/useProjectImages.ts
// This hook loads all images from the project's images directory

import { useEffect, useState } from 'react';

/**
 * Hook to dynamically load all images from a project folder
 * @param projectName Name of the project folder (e.g., 'daylight')
 * @returns Object with image filenames as keys and their URLs as values
 */
export function useProjectImages(projectName: string) {
  const [images, setImages] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      // This loads all image files from the public/portfolio/{projectName}/images directory
      const imageUrls: Record<string, string> = {};
      
      // Define the base URL for images in the public folder
      const baseUrl = `/portfolio/${projectName}/images/`;
      
      // Add common image names that might be used
      const commonImages = [
        'logo.png', 'banner.jpg', 'header.png', 'footer.png',
        'product1.jpg', 'product2.jpg', 'profile.png', 'icon.svg',
        'clockChange.jpg', 'clockCollection.jpg'
      ];
      
      // Add all common images to the URLs
      commonImages.forEach(filename => {
        const key = filename.split('.')[0];
        imageUrls[key] = `${baseUrl}${filename}`;
      });
      
      // Try to load a manifest file if it exists, but don't worry if it fails
      try {
        const response = await fetch(`${baseUrl}manifest.json`);
        if (response.ok) {
          const imageList = await response.json();
          imageList.forEach((filename: string) => {
            const key = filename.split('.')[0];
            imageUrls[key] = `${baseUrl}${filename}`;
          });
          console.log('Loaded image manifest successfully');
        }
      } catch {
        // Just ignore errors with the manifest - we'll use the common images
        console.log('No manifest found, using common image names');
      }
      
      setImages(imageUrls);
      setIsLoading(false);
    };
    
    loadImages();
  }, [projectName]);
  
  return { images, isLoading };
}