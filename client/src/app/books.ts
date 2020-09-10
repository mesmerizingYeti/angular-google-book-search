export class Book {
  _id: string;
  google_id: string;
  title: string;
  authors: string[];
  publishedDate: string;
  description: string;
  image: string;
  link: string;

  constructor(
    google_id: string,
    title: string,
    authors: string[],
    publishedDate: string,
    description: string,
    image: string,
    link: string
  ) {
    this._id = "";
    this.google_id = google_id;
    this.title = title;
    this.authors = authors;
    this.publishedDate = publishedDate;
    this.description = description;
    this.image = image;
    this.link = link;
  }
}