import { Card, Text, VStack } from "@chakra-ui/react";

export type BookFeedItemProps = {
  title: string;
  authorName?: string[];
  isbn?: string[];
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
    <Card paddingY={4} paddingX={5}>
      <VStack align="start">
        <Text fontSize="medium" fontWeight="semibold">
          {title}
        </Text>
        {authorName ? (
          <Text fontSize="small">by {authorName.join(", ")}</Text>
        ) : null}
        <span>
          <span>{numberOfPages} pages</span>
          {" - "}
          <span>published {firstPublishedYear}</span>
        </span>
        {isbn ? (
          <Text fontSize="small" textOverflow="ellipsis" noOfLines={1}>
            ISBN: {isbn.join(", ")}
          </Text>
        ) : null}
      </VStack>
    </Card>
  );
};
