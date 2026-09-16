export interface Blog {
  slug: string;
  title: string;
  tags: string[];
  image: string;
  author?: string;
  createdAt?: string;
}

export const blogs: Blog[] = [
  {
    slug: "what-is-an-explainer-video",
    title: "What is an Explainer Video? Benefits and Uses Explained ",
    tags: ["beauty", "products", "video"],
    image: "/blogs/blog-01.webp",
    author: "Pocket Creatives",
    createdAt: "28TH FEBRUARY 2022",
  },
  {
    slug: "beauty-product-photography-pony-revolution",
    title: "Beauty Product Photography for Pony Revolution",
    tags: ["beauty", "photography", "products", "video"],
    image: "/blogs/blog-02.webp",
    author: "Pocket Creatives",
    createdAt: "14TH MARCH 2022",
  },
  {
    slug: "meeting-gouri-kubair-at-holy-lama",
    title: "Meeting Gouri Kubair at Holy Lama",
    tags: ["beauty"],
    image: "/blogs/blog-03.webp",
    author: "Pocket Creatives",
    createdAt: "3RD JANUARY 2022",
  },
  {
    slug: "shooting-stop-motion-video",
    title: "Shooting Stop Motion Video",
    tags: ["beauty", "video"],
    image: "/blogs/blog-04.webp",
    author: "Pocket Creatives",
    createdAt: "21ST NOVEMBER 2021",
  },
  {
    slug: "christmas-photography-2020",
    title: "Christmas Photography 2020",
    tags: ["photography", "beauty", "jewellery", "products"],
    image: "/blogs/blog-05.webp",
    author: "Pocket Creatives",
    createdAt: "25TH DECEMBER 2020",
  },
  {
    slug: "6-beauty-photography-tips",
    title: "6 Beauty Photography Tips",
    tags: ["beauty"],
    image: "/blogs/blog-06.webp",
    author: "Pocket Creatives",
    createdAt: "9TH AUGUST 2021",
  },
  {
    slug: "model-behaviour",
    title: "Model Behaviour",
    tags: ["beauty", "people", "photography", "portraits"],
    image: "/blogs/blog-07.webp",
    author: "Pocket Creatives",
    createdAt: "17TH JUNE 2021",
  },
  {
    slug: "created-at-home",
    title: "Created at home",
    tags: ["photography", "beauty", "food", "food & drink", "products"],
    image: "/blogs/blog-08.webp",
    author: "Pocket Creatives",
    createdAt: "2ND MAY 2021",
  },
  {
    slug: "christmas-photography-content",
    title: "Christmas Photography Content",
    tags: ["photography", "beauty", "food", "food & drink", "watches"],
    image: "/blogs/blog-09.webp",
    author: "Pocket Creatives",
    createdAt: "22ND DECEMBER 2020",
  },
  {
    slug: "fantastic-flat-lay",
    title: "Fantastic Flat Lay",
    tags: ["photography", "beauty", "food", "food & drink"],
    image: "/blogs/blog-10.webp",
    author: "Pocket Creatives",
    createdAt: "11TH SEPTEMBER 2021",
  },
  {
    slug: "getting-our-nails-into-beauty",
    title: "Getting our nails into beauty",
    tags: ["beauty", "video"],
    image: "/blogs/blog-11.webp",
    author: "Pocket Creatives",
    createdAt: "6TH JULY 2021",
  },
  {
    slug: "scrubs-up-well",
    title: "Scrubs Up Well",
    tags: ["crowdfunding", "beauty", "video"],
    image: "/blogs/blog-12.webp",
    author: "Pocket Creatives",
    createdAt: "30TH APRIL 2021",
  },
];

export const blogsPagination = {
  headline: "Our Blogs",
  filters: [
    "Beauty",
    "Company",
    "Crowfunding",
    "Events",
    "Fashion",
    "Food",
    "Food & Drink",
    "Jewellery",
    "People",
    "Photography",
    "Portaits",
    "Products",
    "Video",
  ],
};
