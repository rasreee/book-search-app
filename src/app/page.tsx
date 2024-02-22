"use client";

import { SearchBooksResult, searchBooks } from "@/utils/search-books";
import { Input, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BookFeed } from "@/components/book-feed";

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
  const [result, setResult] = useState<SearchBooksResult | null>(null);

  useEffect(() => {
    if (!query) return;

    searchBooks(query).then((data) => {
      setResult(data);
    });
  }, [query]);

  return (
    <main>
      <h1>Book Search</h1>
      <div>
        <Input
          type="search"
          placeholder="Search books"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
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
      </div>
      <BookFeed result={result} />
    </main>
  );
}
