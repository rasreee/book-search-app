"use client";

import { Flex, Input, Select } from "@chakra-ui/react";
import { ChangeEventHandler, useState } from "react";

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
    </main>
  );
}
