import type { Route } from "./+types/profile";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Profile" }];
}

export default function Profile() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="mt-4 text-on-surface-variant">Coming soon</p>
    </div>
  );
}
