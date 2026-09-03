export type SampleType = "photo" | "photo-comp" | "video";
export interface FeaturedWorksSample {
  id: string;
  label: string;
  path: string;
  type: SampleType;
  alt: string;
}
export interface WorksGridSample {
  id: string;
  label: string;
  path: string;
  alt: string;
}

export interface WorkCategory {
  category: string;
  featured: FeaturedWorksSample[];
  videography: WorksGridSample[];
  photography: WorksGridSample[];
}

export const works: WorkCategory[] = [
  {
    category: "beauty",
    featured: [
      {
        id: "nursem-01",
        label: "Nursem",
        path: "/images/works/nursem-01.jpg",
        type: "photo",
        alt: "Nursem beauty campaign photo",
      },
      {
        id: "soap-glory-01",
        label: "Soap & Glory",
        path: "/images/works/soap-glory-01.jpg",
        type: "photo-comp",
        alt: "Soap & Glory beauty campaign photo comp",
      },
      {
        id: "hairo-01",
        label: "HairO Brand Advert",
        path: "/videos/works/hairo-01.mp4",
        type: "video",
        alt: "HairO Brand Advert beauty campaign video",
      },
    ],
    videography: [
      {
        id: "beauty-vid-1-1",
        label: "Client 1.1",
        path: "/videos/beauty/client-1-1.mp4",
        alt: "Beauty videography Client 1.1",
      },
      {
        id: "beauty-vid-1-2",
        label: "Client 1.2",
        path: "/videos/beauty/client-1-2.mp4",
        alt: "Beauty videography Client 1.2",
      },
      {
        id: "beauty-vid-2",
        label: "Client 2",
        path: "/videos/beauty/client-2.mp4",
        alt: "Beauty videography Client 2",
      },
      {
        id: "beauty-vid-3-1",
        label: "Client 3.1",
        path: "/videos/beauty/client-3-1.mp4",
        alt: "Beauty videography Client 3.1",
      },
      {
        id: "beauty-vid-3-2",
        label: "Client 3.2",
        path: "/videos/beauty/client-3-2.mp4",
        alt: "Beauty videography Client 3.2",
      },
      {
        id: "beauty-vid-3-3",
        label: "Client 3.3",
        path: "/videos/beauty/client-3-3.mp4",
        alt: "Beauty videography Client 3.3",
      },
      {
        id: "beauty-vid-4",
        label: "Client 4",
        path: "/videos/beauty/client-4.mp4",
        alt: "Beauty videography Client 4",
      },
      {
        id: "beauty-vid-5",
        label: "Client 5",
        path: "/videos/beauty/client-5.mp4",
        alt: "Beauty videography Client 5",
      },
      {
        id: "beauty-vid-6-1",
        label: "Client 6.1",
        path: "/videos/beauty/client-6-1.mp4",
        alt: "Beauty videography Client 6.1",
      },
      {
        id: "beauty-vid-6-2",
        label: "Client 6.2",
        path: "/videos/beauty/client-6-2.mp4",
        alt: "Beauty videography Client 6.2",
      },
      {
        id: "beauty-vid-7",
        label: "Client 7",
        path: "/videos/beauty/client-7.mp4",
        alt: "Beauty videography Client 7",
      },
      {
        id: "beauty-vid-8",
        label: "Client 8",
        path: "/videos/beauty/client-8.mp4",
        alt: "Beauty videography Client 8",
      },
    ],
    photography: [
      {
        id: "beauty-photo-1",
        label: "Hover ex. here",
        path: "/images/beauty/photo-1.jpg",
        alt: "Beauty photography sample 1",
      },
      {
        id: "beauty-photo-2",
        label: "Client 2",
        path: "/images/beauty/photo-2.jpg",
        alt: "Beauty photography Client 2",
      },
      {
        id: "beauty-photo-3",
        label: "Client 3",
        path: "/images/beauty/photo-3.jpg",
        alt: "Beauty photography Client 3",
      },
      {
        id: "beauty-photo-4",
        label: "Client 4",
        path: "/images/beauty/photo-4.jpg",
        alt: "Beauty photography Client 4",
      },
      {
        id: "beauty-photo-5",
        label: "Client 5",
        path: "/images/beauty/photo-5.jpg",
        alt: "Beauty photography Client 5",
      },
      {
        id: "beauty-photo-6",
        label: "Client 6",
        path: "/images/beauty/photo-6.jpg",
        alt: "Beauty photography Client 6",
      },
      {
        id: "beauty-photo-7",
        label: "Client 7",
        path: "/images/beauty/photo-7.jpg",
        alt: "Beauty photography Client 7",
      },
      {
        id: "beauty-photo-8",
        label: "Client 8",
        path: "/images/beauty/photo-8.jpg",
        alt: "Beauty photography Client 8",
      },
      {
        id: "beauty-photo-9",
        label: "Client 9",
        path: "/images/beauty/photo-9.jpg",
        alt: "Beauty photography Client 9",
      },
      {
        id: "beauty-photo-10",
        label: "Client 10",
        path: "/images/beauty/photo-10.jpg",
        alt: "Beauty photography Client 10",
      },
      {
        id: "beauty-photo-11",
        label: "Client 11",
        path: "/images/beauty/photo-11.jpg",
        alt: "Beauty photography Client 11",
      },
      {
        id: "beauty-photo-12",
        label: "Client 12",
        path: "/images/beauty/photo-12.jpg",
        alt: "Beauty photography Client 12",
      },
    ],
  },
  { category: "product", featured: [], videography: [], photography: [] },
  { category: "events", featured: [], videography: [], photography: [] },
  { category: "crowdfunding", featured: [], videography: [], photography: [] },
  { category: "fashion", featured: [], videography: [], photography: [] },
  { category: "people", featured: [], videography: [], photography: [] },
  { category: "jewellery", featured: [], videography: [], photography: [] },
  { category: "TV-ads", featured: [], videography: [], photography: [] },
  { category: "HR", featured: [], videography: [], photography: [] },
  { category: "education", featured: [], videography: [], photography: [] },
  { category: "explainers", featured: [], videography: [], photography: [] },
  { category: "social-first", featured: [], videography: [], photography: [] },
];
