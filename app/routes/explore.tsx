import { ExplorePage } from "~/features/explore/ExplorePage";
import type { Route } from "./+types/explore";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PhotoTrace AR - Explore" },
  ];
}

export default function ExploreRoute() {
  return <ExplorePage />;
}
