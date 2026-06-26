import { ScreenTracePage } from "~/features/screen-trace/ScreenTracePage";
import type { Route } from "./+types/screen-trace";
import { useLocation } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PhotoTrace AR - Screen Trace Editor" },
  ];
}

export default function ScreenTraceRoute() {
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;
  
  return <ScreenTracePage imageUrl={imageUrl} />;
}
