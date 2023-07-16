type Props = {
  name: string;
  image: string;
  description: string;
  slug: string;
  url: string;
};

export const projects: Props[] = [
  {
    name: "Project 1",
    image: "https://picsum.photos/200/200",
    description: "description1",
    slug: "project-1",
    url: "https://www.google.com",
  },
  {
    name: "Project 2",
    image: "https://picsum.photos/200/200",
    description: "description2",
    slug: "project-2",
    url: "https://www.google.com",
  },
  {
    name: "Project 3",
    image: "https://picsum.photos/200/200",
    description: "description3",
    slug: "project-3",
    url: "https://www.google.com",
  },
];
