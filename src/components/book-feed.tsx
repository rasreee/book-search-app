import { SearchBooksResult } from "@/utils/search-books";
import { BookFeedItem } from "./book-feed-item";

export const BookFeed: React.FC<{ result: SearchBooksResult | null }> = ({
  result,
}) => {
  if (!result) {
    return <div>No books found.</div>;
  }

  return (
    <div>
      {result.docs.map((result) => (
        <li key={result.key}>
          <BookFeedItem
            title={result.title}
            authorName={result.author_name}
            isbn={result.isbn}
            numberOfPages={result.number_of_pages_median}
            firstPublishedYear={result.first_publish_year}
          />
        </li>
      ))}
    </div>
  );
};
