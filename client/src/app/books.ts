export class Book {
  _id: string;
  title: string;
  authors: string[];
  publishedDate: string;
  description: string;
  image: string;
  link: string;

  constructor(
    title: string,
    authors: string[],
    publishedDate: string,
    description: string,
    image: string,
    link: string
  ) {
    this._id = "";
    this.title = title;
    this.authors = authors;
    this.publishedDate = publishedDate;
    this.description = description;
    this.image = image;
    this.link = link;
  }
}