"use client";

import { SearchBooksResult, searchBooks } from "@/utils/search-books";
import { HStack, Heading, Input, Select, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BookFeed } from "@/components/book-feed";
import { FeedSkeleton } from "@/components/feed-skeleton";

enum SortByType {
  RELEVANCE = "relevance",
  PUBLISHED_YEAR = "publishedYear",
}

const SortByOptions = {
  Relevance: {
    id: SortByType.RELEVANCE,
    label: "Relevance",
  },
  PublishedYear: {
    id: SortByType.PUBLISHED_YEAR,
    label: "Published Year",
  },
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [sortByType, setSortByType] = useState(SortByType.RELEVANCE);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState<SearchBooksResult | null>(null);

  useEffect(() => {
    if (!query) {
      setResult(null);
      return;
    }

    setIsLoading(true);
    searchBooks(query)
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <VStack paddingX={8}>
      <Heading marginY={8}>Book Search</Heading>
      <HStack>
        <Input
          type="search"
          placeholder="Search books"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          autoFocus
        />
        <Select
          value={sortByType}
          onChange={(event) => {
            setSortByType(event.target.value as SortByType);
          }}
        >
          {Object.values(SortByOptions).map((props) => (
            <option key={props.id} value={props.id}>
              {props.label}
            </option>
          ))}
        </Select>
      </HStack>
      {isLoading && <FeedSkeleton />}
      {errorMessage && <Text textColor="red">Error: {errorMessage}</Text>}
      {result && <BookFeed result={result} />}
    </VStack>
  );
}
