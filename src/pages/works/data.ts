export type SampleType = "photo" | "photo-comp" | "video";
export type MediaType = "image" | "video";

export interface FeaturedWorksSample {
  id: string;
  label: string;
  path: string;
  type: SampleType;
  alt: string;
}

export interface VideographySample {
  id: string;
  label: string;
  path: string;
  alt: string;
  mediaType: MediaType;
}

export interface GalleryImage {
  id: string;
  path: string;
  alt: string;
  mediaType: MediaType;
}

export interface PhotographySample {
  id: string;
  label: string;
  images: GalleryImage[];
}

export interface WorkCategory {
  category: string;
  featured: FeaturedWorksSample[];
  videography: VideographySample[];
  photography: PhotographySample[];
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
        id: "client-1-1",
        label: "Client 1.1",
        path: "/works/videography/beauty/client-1.1.mp4",
        alt: "Client 1 videography sample, part 1",
        mediaType: "video",
      },
      {
        id: "client-1-2",
        label: "Client 1.2",
        path: "/works/videography/beauty/client-1.2.mp4",
        alt: "Client 1 videography sample, part 2",
        mediaType: "video",
      },
      {
        id: "client-2",
        label: "Client 2",
        path: "/works/videography/beauty/client-2.mp4",
        alt: "Client 2 videography sample",
        mediaType: "video",
      },
      {
        id: "client-3-1",
        label: "Client 3.1",
        path: "/works/videography/beauty/client-3.1.mp4",
        alt: "Client 3 videography sample, part 1",
        mediaType: "video",
      },
      {
        id: "client-3-2",
        label: "Client 3.2",
        path: "/works/videography/beauty/client-3.2.mp4",
        alt: "Client 3 videography sample, part 2",
        mediaType: "video",
      },
      {
        id: "client-3-3",
        label: "Client 3.3",
        path: "/works/videography/beauty/client-3.3.mp4",
        alt: "Client 3 videography sample, part 3",
        mediaType: "video",
      },
      {
        id: "client-4",
        label: "Client 4",
        path: "/works/videography/beauty/client-4.mp4",
        alt: "Client 4 videography sample",
        mediaType: "video",
      },
      {
        id: "client-5",
        label: "Client 5",
        path: "/works/videography/beauty/client-5.mp4",
        alt: "Client 5 videography sample",
        mediaType: "video",
      },
      {
        id: "client-6-1",
        label: "Client 6.1",
        path: "/works/videography/beauty/client-6.1.mp4",
        alt: "Client 6 videography sample, part 1",
        mediaType: "video",
      },
      {
        id: "client-6-2",
        label: "Client 6.2",
        path: "/works/videography/beauty/client-6.2.mp4",
        alt: "Client 6 videography sample, part 2",
        mediaType: "video",
      },
      {
        id: "client-7",
        label: "Client 7",
        path: "/works/videography/beauty/client-7.mp4",
        alt: "Client 7 videography sample",
        mediaType: "video",
      },
      {
        id: "client-8",
        label: "Client 8",
        path: "/works/videography/beauty/client-8.mp4",
        alt: "Client 8 videography sample",
        mediaType: "video",
      },
    ],
    photography: [
      {
        id: "client-1",
        label: "Client 1",
        images: [
          {
            id: "client-1-01",
            path: "/works/photography/beauty/client-1/client-1-01.png",
            alt: "Client 1 beauty photo, frame 1",
            mediaType: "image",
          },
          {
            id: "client-1-02",
            path: "/works/photography/beauty/client-1/client-1-02.png",
            alt: "Client 1 beauty photo, frame 2",
            mediaType: "image",
          },
          {
            id: "client-1-03",
            path: "/works/photography/beauty/client-1/client-1-03.png",
            alt: "Client 1 beauty photo, frame 3",
            mediaType: "image",
          },
          {
            id: "client-1-04",
            path: "/works/photography/beauty/client-1/client-1-04.png",
            alt: "Client 1 beauty photo, frame 4",
            mediaType: "image",
          },
          {
            id: "client-1-05",
            path: "/works/photography/beauty/client-1/client-1-05.png",
            alt: "Client 1 beauty photo, frame 5",
            mediaType: "image",
          },
          {
            id: "client-1-06",
            path: "/works/photography/beauty/client-1/client-1-06.png",
            alt: "Client 1 beauty photo, frame 6",
            mediaType: "image",
          },
          {
            id: "client-1-07",
            path: "/works/photography/beauty/client-1/client-1-07.png",
            alt: "Client 1 beauty photo, frame 7",
            mediaType: "image",
          },
          {
            id: "client-1-08",
            path: "/works/photography/beauty/client-1/client-1-08.png",
            alt: "Client 1 beauty photo, frame 8",
            mediaType: "image",
          },
          {
            id: "client-1-09",
            path: "/works/photography/beauty/client-1/client-1-09.png",
            alt: "Client 1 beauty photo, frame 9",
            mediaType: "image",
          },
          {
            id: "client-1-10",
            path: "/works/photography/beauty/client-1/client-1-10.png",
            alt: "Client 1 beauty photo, frame 10",
            mediaType: "image",
          },
        ],
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
