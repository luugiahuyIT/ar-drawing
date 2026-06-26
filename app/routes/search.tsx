import { SearchPage } from "~/features/search/SearchPage";
import type { Route } from "./+types/search";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PhotoTrace AR - Search" },
  ];
}

export default function SearchRoute() {
  return <SearchPage />;
}
