import { SearchBooksResult } from "@/utils/search-books";
import { BookFeedItem } from "./book-feed-item";
import { ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";

export const BookFeed: React.FC<{ result: SearchBooksResult }> = ({
  result,
}) => {
  if (result.numFound === 0) {
    return <div>No books found.</div>;
  }

  return (
    <VStack align="start">
      <Text>{result.numFound} books found.</Text>
      <UnorderedList>
        {result.docs.map((result) => (
          <ListItem key={result.key} marginBottom={3}>
            <BookFeedItem
              title={result.title}
              authorName={result.author_name}
              isbn={result.isbn}
              numberOfPages={result.number_of_pages_median}
              firstPublishedYear={result.first_publish_year}
            />
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};
