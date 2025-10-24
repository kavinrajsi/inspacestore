interface ImageData {
  src: string;
  title?: string;
  subtitle?: string;
  className: string;
}

export type Projects = {
  title: string;
  titleContent: string;
  client: string;
  category: string[];
  location: string;
  image: string[];
  inspaceContent: string;
  outcomesContent: string;
  inspaceImage: string;
  scrollingImages: ImageData[];
  forMoreImages: { src: string; category: string; buttonText: string }[];
};