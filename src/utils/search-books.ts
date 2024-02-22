"use server";

const BASE_URL = "https://openlibrary.org/search.json?q=";

export type Doc = {
  _version_: number;
  key: string;
  type: string;
  seed: string[];
  title: string;
  title_sort: string;
  title_suggest: string;
  subtitle: string;
  edition_count: number;
  edition_key: string[];
  publish_date: string[];
  publish_year: number[];
  first_publish_year: number;
  number_of_pages_median: number;
  lccn: string[];
  publish_place: string[];
  oclc: string[];
  contributor: string[];
  lcc: string[];
  isbn?: string[];
  last_modified_i: number;
  ebook_count_i: number;
  ebook_access: string;
  has_fulltext: boolean;
  public_scan_b: boolean;
  ia: string[];
  ia_collection: string[];
  ia_collection_s: string;
  printdisabled_s: string;
  ratings_average: number;
  ratings_sortable: number;
  ratings_count: number;
  ratings_count_1: number;
  ratings_count_2: number;
  ratings_count_3: number;
  ratings_count_4: number;
  ratings_count_5: number;
  readinglog_count: number;
  want_to_read_count: number;
  currently_reading_count: number;
  already_read_count: number;
  cover_edition_key: string;
  cover_i: number;
  first_sentence: string[];
  publisher: string[];
  language: string[];
  author_key: string[];
  author_name?: string[];
  author_alternative_name: string[];
  subject: string[];
  id_goodreads: string[];
  id_librarything: string[];
  id_wikidata: string[];
  ia_box_id: string[];
  publisher_facet: string[];
  subject_facet: string[];
  lcc_sort: string;
  author_facet: string[];
  subject_key: string[];
};

export type SearchBooksResult = {
  start: number;
  offset?: number | null;
  docs: Doc[];
  numFound: number;
  numFoundExact: boolean;
};

export async function searchBooks(query: string): Promise<SearchBooksResult> {
  const res = await fetch(BASE_URL + query, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
