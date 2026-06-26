import type { Route } from "./+types/learn";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Learn" }];
}

export default function Learn() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Learn</h1>
      <p className="mt-4 text-on-surface-variant">Coming soon</p>
    </div>
  );
}
