export type BookFeedItemProps = {
  title: string;
  authorName: string[];
  isbn: string[];
  numberOfPages: number;
  firstPublishedYear: number;
};

export const BookFeedItem: React.FC<BookFeedItemProps> = ({
  title,
  authorName,
  isbn,
  numberOfPages,
  firstPublishedYear,
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>by {authorName.join(", ")}</div>
      <div>published {firstPublishedYear}</div>
      <div>{numberOfPages} pages</div>
      <div>{isbn.join(", ")}</div>
    </div>
  );
};
