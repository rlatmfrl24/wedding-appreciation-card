export type ImageItem = {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
};

export type SiteContent = {
  names: string;
  title: string;
  dateText?: string;
  messageHeading: string;
  messageParagraphs: string[];
  closingText: string;
  signature: string;
  shareTitle: string;
  shareText: string;
  heroImage: ImageItem;
};
