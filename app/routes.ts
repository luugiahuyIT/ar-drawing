import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/splash.tsx"),
  route("home", "routes/home.tsx"),
  route("search", "routes/search.tsx"),
  route("onboarding1", "routes/onboarding1.tsx"),
  route("onboarding2", "routes/onboarding2.tsx"),
  route("onboarding3", "routes/onboarding3.tsx"),
  route("edit", "routes/edit.tsx"),
  route("camera-trace", "routes/camera-trace.tsx"),
  route("screen-trace", "routes/screen-trace.tsx"),
  route("not-allowed", "routes/not-allowed.tsx"),
  route("template/:id", "routes/template-detail.tsx"),
  route("settings", "routes/settings.tsx"),
  route("faq", "routes/faq.tsx"),
  route("lesson/:id", "routes/lesson-detail.tsx"),
  route("lesson/:id/step/:stepId", "routes/lesson-step.tsx"),
  layout("routes/_main.tsx", [
    route("studio", "routes/studio.tsx"),
    route("explore", "routes/explore.tsx"),
    route("learn", "routes/learn.tsx"),
    route("profile", "routes/profile.tsx"),
  ]),
] satisfies RouteConfig;
