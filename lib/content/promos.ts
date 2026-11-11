type Offer = readonly [name: string, prices: readonly string[], inclusions?: string];

type PromoGroup = {
  title: string;
  image?: { src: string; alt: string };
  offers: readonly Offer[];
};

export const october2026Promos: readonly PromoGroup[] = [
  {
    title: "Laser Hair Removal & Brightening",
    image: {
      src: "/images/optimized/treatments/pico-underarm/pico-underarm-clinic.webp",
      alt: "Pico laser handpiece positioned at the underarm",
    },
    offers: [
      ["4D Diode Laser – Underarms", ["₱6,999 · 12 months"], "Terms and conditions apply."],
      [
        "Diode + Pico Glow – Underarms",
        ["₱6,999"],
        "5 underarm diode sessions and 6 Pico Laser sessions. Confirm the remaining package terms with your branch.",
      ],
      [
        "Pico Glow Laser – Body Areas",
        ["₱8,500"],
        "15 sessions. Choose bikini line, underarms, lips, eyebrows, elbows, knees, toes, or knuckles. One area or 20 spots counts as one session. Each spot is approximately the size of a ₱1 coin.",
      ],
      [
        "Pico Glow Face (Genesis) or Carbon Peel",
        ["₱7,999 · 8 sessions", "₱5,500 · 5 sessions"],
        "Includes PDRN Serum. Valid for up to 18 months.",
      ],
    ],
  },
  {
    title: "Body Laser Packages",
    offers: [
      ["4D Brazilian Diode Laser", ["₱8,000 · 4 sessions"]],
      [
        "Brazilian Diode + Bikini Pico Brightening",
        ["₱10,000"],
        "4 Brazilian diode sessions and 6 bikini-line Pico Brightening sessions.",
      ],
      [
        "4D Lower Legs Diode Laser",
        ["₱12,000 · 4 sessions"],
        "Includes 1 free Pico Laser session for the lower legs (chicken skin only).",
      ],
      [
        "4D Full Legs Diode Laser",
        ["₱18,000 · 4 sessions"],
        "Includes 2 Pico Laser sessions for the lower legs (chicken skin only).",
      ],
    ],
  },
  {
    title: "Face & Contour",
    offers: [
      ["Botox Injection", ["₱150 per unit"]],
      ["Hiko Nose Lift", ["₱9,999"]],
      ["Thread Lift / V-Lift / Face Lift", ["₱8,000"], "Up to 20 threads."],
      [
        "Eye Rejuvenation",
        ["₱3,999 per session", "₱7,999 · 3 sessions"],
        "For dark circles, eye bags, and puffy eyes.",
      ],
    ],
  },
  {
    title: "Advanced Treatments",
    image: {
      src: "/images/optimized/treatments/hifu/hifu-face-treatment.webp",
      alt: "Illustrative visual of a HIFU facial treatment",
    },
    offers: [
      ["7D HIFU Face", ["₱2,999"]],
      ["7D HIFU + Exilift Combo", ["₱3,999"]],
      ["Exilift – Face or Arms", ["₱1,888 per session", "₱4,999 · 5 sessions"]],
    ],
  },
  {
    title: "Special Treatments",
    offers: [
      [
        "Wart Removal – Face & Neck Unlimited",
        ["₱1,699"],
        "For small or dot-sized warts only. Larger warts require a doctor’s assessment.",
      ],
    ],
  },
  {
    title: "Skin & Facial Deals",
    image: {
      src: "/images/optimized/treatments/korean-facial-clinic.webp",
      alt: "ESCLARE staff working with a client during a facial",
    },
    offers: [
      ["Basic Detox Facial", ["₱1,000 · 3 sessions", "₱2,500 · 8 sessions"]],
      ["Acne Cleanse Facial", ["₱1,500 · 3 sessions", "₱3,200 · 6 sessions"]],
      ["Exfoliare Facial", ["₱1,300 · 3 sessions"]],
      [
        "Intense Hydrating Facial with Cryoelectroporation",
        ["₱4,800 · 5 sessions", "₱3,750 · 3 sessions"],
      ],
      ["Botox Facial by Esthemax", ["₱5,500 · 4 sessions"]],
    ],
  },
  {
    title: "Tattoo Removal",
    offers: [
      ["1–3 cm tattoo", ["₱500 per session", "₱2,800 · 6 sessions", "₱3,600 · 8 sessions"]],
      ["4–7 cm tattoo", ["₱900 per session", "₱5,000 · 6 sessions", "₱6,500 · 8 sessions"]],
      ["8–11 cm tattoo", ["₱1,100 per session", "₱6,000 · 6 sessions", "₱7,600 · 8 sessions"]],
      ["Additional size charge", ["₱200 per extra centimeter"]],
    ],
  },
  {
    title: "CO₂ Laser Stretch Mark Treatment",
    offers: [["CO₂ Laser Stretch Mark Treatment", ["₱500 per 10 cm", "₱250 per 5 cm"]]],
  },
  {
    title: "GLP-1 Slimming",
    offers: [
      [
        "GLP-1 Slimming with Tirzepatide – 4-week package",
        ["Month 1 · ₱13,500", "Month 2 · ₱17,500", "Month 3 · ₱22,500", "Month 4 · ₱29,500"],
        "Includes 3 free Exilis Body Toning sessions and 40% off one Korean Facial. Subject to clinic assessment and booking availability.",
      ],
    ],
  },
];
