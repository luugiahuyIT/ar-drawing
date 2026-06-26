import { ExploreHeader } from "./components/ExploreHeader";
import { FilterChips } from "./components/FilterChips";
import { GalleryCard, type GalleryCardProps } from "./components/GalleryCard";
import { BannerAd } from "./components/BannerAd";
import { BottomNavBar } from "~/shared/components/BottomNavBar";

// Dummy data from the original HTML
const galleryItems: GalleryCardProps[] = [
  {
    id: "1",
    title: "Friendly Dog",
    difficulty: "Easy",
    timeEstimate: "10m",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLUJN64GofE7YIyx72lT9gcgCzKeBgEpPGwMaM7ZEaBRa09lZwDiDFD_p8s_d9KRWbDmgGFLU8vD5j3y26ZOnE_sOonjdutF_yaMtCyvyYIXit8DTLzXk25rTJ_6i5fIhN-4R_FUTA3-KBGamcFRNj9Ts1y4XQk1vj1ZgS-v-hvXuEtCA2CQV_bKJYKmH_beKkE1MvKwdMJyS0tCkUkBbqjimWSwA3QTAffS-HDeQX-y2IcOEyjj_U7gIvH1uXx-aA7uO1uwjevl5b",
    altText: "A clean, minimalist black line drawing of a happy, friendly golden retriever dog face on a pristine warm cream background. The lines are smooth and professional, suitable for an AR tracing template. High contrast, well-lit, simple vector style.",
  },
  {
    id: "2",
    title: "Fluffy Cat",
    difficulty: "Easy",
    timeEstimate: "15m",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ZcGgSW-p6bTbP-XuhQ0Fb_pA3ou46frf5qOo5mr1VX_14QTXrQqkzySq4IiBYNHezb9YVG5zj2RCs6bIPDPYPqGofA9X3KotMYbvEs67YuLkJd7pr1qsMlxlGwfqb84AT-C9ySmMCETXUWzmdzCG1uMcN1SwXMPQVqItXnQC29JDXzJgKxpKJggA2jj25mpl8rYNHuuA_jvbCN66kToRB9cqsx4nOuoHG3gQDX1t1IzYmsEeBm5ZrL6BjDzJWjktpTv6KLbU-qXk",
    altText: "A clean, minimalist black line drawing of a fluffy, sleeping cat curled up into a ball, set against a pristine warm cream background. The lines are smooth and professional, designed as a template for AR tracing. High contrast, simple vector illustration style.",
  },
  {
    id: "3",
    title: "Blooming Sunflower",
    difficulty: "Medium",
    timeEstimate: "20m",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRptEqDFx66eZnIbOUDoTL_abEb6WQCoTwPDqkeP5wIiWH3wtDprnS-KkCZuQl_ViDA1H5k5SELFmSZUp7ALCot3_uiYxtDabTvoIdAawBmIUYR2IfQt_FJxR90R6ClDBmLAjI1xQghn_Iaib8X8K3V3-l5RdpgvIjnjfEW8Yl0SUZZet_oF3lGvHOoPnM0mBZG8vZjBD5UNaA0VGNcOI9B6ao_wgpmCyJRpl42ypuzrrgpVGeeupNCHXnXQaVSsRl4y8a0Gd3E2h4",
    altText: "A clean, minimalist black line drawing of a large, detailed sunflower blooming, set against a pristine warm cream background. The lines are precise and professional, crafted as an AR tracing template. High contrast, elegant botanical vector illustration style.",
    isFavorite: true,
  },
  {
    id: "4",
    title: "Little Hedgehog",
    difficulty: "Hard",
    timeEstimate: "35m",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbIVZRXqF7ckbkJwHeeRXmW4RiOfDAr6zrvHRzhhXX8fm2WqHFrRC31iPu0GgpHuB1fd6SUK0iY5dgSICMq0Mmxm43cYE7kuAgnDUO4CJOYp9tUc_0eIDuCpu9xClxmnVV1vHFaXlHZB5Bm9teF_mJ0OR15EzAoUj9vwnCcLcL04kjg7C2d5tWhkhsn-gEbhX4mby6lHWQ4ZYTGwzZ4wcf91E1lKMJJ88CC5eHixkrJt-GYSmZDVl5jGNGbSdZV9mcM2H3-z7xTkgN",
    altText: "A clean, minimalist black line drawing of a cute little hedgehog surrounded by small leaves, set on a pristine warm cream background. The linework is smooth and professional, intended for an AR tracing guide. High contrast, charming vector art style.",
  },
  {
    id: "5",
    title: "Mountain Peak",
    difficulty: "Medium",
    timeEstimate: "25m",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUYezQ5cIvRNfW3Krh-5cqwPH7QrOkL_d5iu6SD2hKhzDLdjydV9lEdb66kECdA8vY_GHtLkRAhl9C9F_5dkgGzuoJ030E-hfvVktpsyBrogvJX74TXVktVybwyYKwoVNcHhUxla5MXyzIXO7kIk_xGy2-By84h2dKdT4kCGh-eEXHJMgk6yA6KIjkOkLNnbVdTzjrXJVsAvMHaRH_soaAgdgvfHF5juXtCF7dQHOSE09YWZ3Ty_8bSEXyp_CNLG0_0t52Vxf_wxAs",
    altText: "A clean, minimalist black line drawing of a majestic mountain peak with a pine tree in the foreground, set against a pristine warm cream background. Smooth, professional linework designed for AR tracing. High contrast, nature landscape vector style.",
  },
  {
    id: "6",
    title: "Basic Eye",
    difficulty: "Easy",
    timeEstimate: "5m",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDlZlLUofgZuW6rlV3MlsNqGW3Z8aYhTqWL5OFNegAhPfBW_XAWbaYnG6VkY2GycmPQ531blNFRbmlH9wjpbBvVRVH0LuMYQ7r9_Jy_0nzpAXdND9Wy9Ts4DhISAQn73qTbNARxpWs2aocLW1gT778pUmqkge2rjqUJjt6HFJePsqB1p8oYGKatTws7YwZpBYLL1uZ0_MsMSoVW_q70f6X5BrDFhpYEYXxfXZTNE_D5PJv5Ll43Qr8Il6LfPE00kC9JU5QMUlEs_jz",
    altText: "A clean, minimalist black line drawing of a simple, stylized human eye and eyebrow, set against a pristine warm cream background. Smooth, professional linework serving as an introductory AR tracing template for portraiture. High contrast, clean vector style.",
  },
];

export function ExplorePage() {
  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen pb-24 flex flex-col max-w-md mx-auto relative shadow-2xl">
      {/* Include the global styles for no-scrollbar that were in the HTML */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body {
          min-height: max(884px, 100dvh);
          background-color: #f4f0ea; /* dark background for the outside */
        }
      `}</style>
      
      <ExploreHeader />
      <FilterChips />
      
      <main className="flex-grow px-margin-mobile pt-stack-sm pb-stack-lg">
        <div className="grid grid-cols-2 gap-4">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} {...item} />
          ))}
        </div>
        
        <BannerAd />
      </main>
      
      <BottomNavBar />
    </div>
  );
}
