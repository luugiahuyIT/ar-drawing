import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "~/components/Button";
import type { Route } from "./+types/onboarding3";

export function meta({}: Route.MetaArgs) {
  return [{ title: "PhotoTrace AR - Onboarding Interest Picker" }];
}

const INTERESTS = [
  { id: "pets", label: "Pets", icon: "pets" },
  { id: "cute_creatures", label: "Cute Creatures", icon: "cruelty_free" },
  { id: "nature", label: "Nature", icon: "park" },
  { id: "fantasy", label: "Fantasy", icon: "castle" },
  { id: "portrait_basics", label: "Portrait Basics", icon: "face" },
  { id: "lettering", label: "Lettering", icon: "format_paint" },
  { id: "flowers", label: "Flowers", icon: "local_florist" },
  { id: "geometry", label: "Geometry", icon: "category" },
  { id: "architecture", label: "Architecture", icon: "architecture" },
];

export default function Onboarding3() {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<Set<string>>(
    new Set(["cute_creatures", "flowers"])
  );

  const toggleInterest = (id: string) => {
    const newSelected = new Set(selectedInterests);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedInterests(newSelected);
  };

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen w-full flex flex-col items-center select-none bg-[#fdf9f3]">
      <main className="flex-1 flex flex-col w-full max-w-[412px] relative overflow-hidden">
        {/* Status Bar (Simulated) */}
        <div className="flex justify-between items-center px-6 pt-4 pb-2 text-xs font-semibold text-on-surface">
          <span className="">9:41</span>
          <div className="flex items-center space-x-1">
            <span className="material-symbols-outlined text-[14px]">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-[14px]">wifi</span>
            <span className="material-symbols-outlined text-[14px]">battery_full</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col px-6 pt-6 pb-6">
          {/* Top Zone: Headers */}
          <div className="text-center mb-8 pt-6">
            <h1 className="text-[28px] font-bold text-on-surface mb-2 leading-tight">
              What interests you?
            </h1>
            <p className="text-[16px] text-on-surface-variant">
              Pick any to personalize your Explore. Tap to select.
            </p>
          </div>

          {/* Middle Zone: Grid */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-[12px] w-full max-w-[600px] mx-auto aspect-square">
              {INTERESTS.map((interest) => {
                const isSelected = selectedInterests.has(interest.id);
                return (
                  <button
                    key={interest.id}
                    onClick={() => toggleInterest(interest.id)}
                    className={`rounded-xl flex flex-col items-center justify-center p-4 transition-transform active:scale-95 shadow-sm ${
                      isSelected
                        ? "shadow-[0_10px_30px_-15px_rgba(79,70,229,0.3)] text-white"
                        : "bg-[#f7f3ed] border border-[#e6e2dc] text-[#1c1c18]"
                    }`}
                    style={
                      isSelected
                        ? {
                            background: "linear-gradient(135deg, rgb(79, 70, 229) 0%, rgb(129, 140, 248) 100%)",
                          }
                        : {}
                    }
                  >
                    <span
                      className={`material-symbols-outlined text-[40px] mb-2 ${
                        isSelected ? "text-white" : "text-[#464555]"
                      }`}
                      style={{ fontVariationSettings: isSelected ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {interest.icon}
                    </span>
                    <span
                      className={`text-[14px] font-medium leading-tight text-center ${
                        isSelected ? "text-white" : "text-[#1c1c18]"
                      }`}
                    >
                      {interest.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Zone */}
          <div className="mt-auto pt-8 flex flex-col items-center w-full">
            {/* Pagination Dots */}
            <div className="flex items-center justify-center space-x-2 mb-[32px]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E8E4DE]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#E8E4DE]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-primary-container"></div>
            </div>

            {/* Action Buttons */}
            <div className="flex w-full space-x-[12px] pb-[12px]">
              {/* Skip Button */}
              <div className="w-1/3">
                <Button variant="secondary" onClick={() => navigate("/studio")}>
                  Skip
                </Button>
              </div>

              {/* Continue Button */}
              <div className="w-2/3">
                <Button variant="primary" onClick={() => navigate("/studio")}>
                  {selectedInterests.size > 0 ? `Continue (${selectedInterests.size})` : "Continue"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
