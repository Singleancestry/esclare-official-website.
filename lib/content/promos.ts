type Offer = {
  name: string;
  prices: readonly string[];
  inclusions?: string;
  freebies?: readonly string[];
};

type PromoGroup = {
  title: string;
  image: { src: string; alt: string };
  offers: readonly Offer[];
};

export const december2026PromoTerms =
  "Free treatments, complimentary services, and additional percentage discounts (such as Korean Facial, Pico Laser, and other package incentives) are NOT VALID IN CONJUNCTION WITH OTHER PROMOTIONS, DISCOUNTED PACKAGES, OR ONGOING OFFERS. All additional percentage discounts shall be computed based on the REGULAR PRICE ONLY, not on promotional or discounted rates. Promotions and discounts are non-stackable.";

export const december2026Promos: readonly PromoGroup[] = [
  {
    title: "Diode & Pico Laser",
    image: {
      src: "/images/optimized/treatments/diode/diode-underarm-treatment.webp",
      alt: "Diode laser handpiece at the underarm",
    },
    offers: [
      {
        name: "Diode Underarms 4D wavelenght",
        prices: ["₱5,899"],
        inclusions: "Non trasferable Non Refundable valid for 12 months no hair no treatment basis",
        freebies: [
          "1-50%Off Korean Facial",
          "1-30%Off Pico Laser",
          "1-20# Off on Exilis Treatment",
          "1-200 Facial GC",
          "1-Extra diode session underarms you can give but you cant use",
        ],
      },
      {
        name: "Combo Diode + Pico Laser -Underarms",
        prices: ["₱5,999"],
        inclusions: "7 Sessions Diode 4d Underarms and 5 sessions Pico laser Underarms",
        freebies: [
          "2-50%Off Korean Facial",
          "1-30%Off Pico LAser",
          "1-20% Off on Exilis Treatment",
          "2-200 Facial GC",
          "1-Extra diode session underarms you can give but you cant use",
        ],
      },
      {
        name: "Pico Glow Laser- for Body Area",
        prices: ["₱7,999"],
        inclusions:
          "15 sessions for any area: bikini line, underarms, lips, eyebrows, elbows, knees, toes, or knuckles. Choose any area; 1 area = 1 session; 20 spots = 1 session; 1 spot is approximately the size of a ₱1 coin.",
        freebies: [
          "2-50%Off Korean Facial",
          "1-30%Off Pico LAser",
          "1-20% Off on Exilis Treatment",
          "2-200 Facial GC",
          "1-Extra diode session underarms you can give but you cant use",
        ],
      },
      {
        name: "Pico Glow Laser Face (genesis) or Carbon Peel Laser",
        prices: ["₱5,999"],
        inclusions:
          "Pico Glow Laser with PDRN (Polydeoxyribonucleotide) skin-repair and rejuvenation treatment Promo Package is valid for up to 18 Months",
        freebies: [
          "1-50%Off Korean Facial",
          "1-30%Off Pico LAser",
          "1-20% Off on Exilis Treatment",
          "1-200 Facial GC",
          "1-Extra diode session underarms you can give but you cant use",
        ],
      },
    ],
  },
  {
    title: "Brazilian & Leg Diode Laser",
    image: {
      src: "/images/optimized/treatments/devices/diode-4d/diode-4d-device.webp",
      alt: "ESCLARE’s 4D diode laser device",
    },
    offers: [
      {
        name: "Brazialian Diode Laser 4D Wavelenght",
        prices: ["₱6,999"],
        inclusions: "4 Sessions",
        freebies: ["1 Free session of Diode Underarms"],
      },
      {
        name: "Combo: Brazilian Diode + Bikini Pico Brightening",
        prices: ["₱8,999"],
        inclusions: "4-Sessions Diode Brazialin hair removal + 5- Pico laser Bikini line",
        freebies: [
          "1-50%Off Korean Facial",
          "1-30%Off Pico LAser",
          "1-20% Off on Exilis Treatment",
          "1-200 Facial GC",
          "1-Extra diode session underarms you can give but you cant use",
        ],
      },
      {
        name: "Lower Legs Diode Laser (4D Wavelength Diode)",
        prices: ["₱9,999"],
        inclusions: "4 Sessions",
        freebies: [
          "1-50%Off Korean Facial",
          "1-30%Off Pico LAser",
          "1-20% Off on Exilis Treatment",
          "1-200 Facial GC",
          "1-Extra diode session underarms you can give but you cant use",
        ],
      },
      {
        name: "Full Legs Diode Laser (4D Wavelength Diode)",
        prices: ["₱14,999"],
        inclusions: "4 Sessions",
        freebies: [
          "2-50%Off Korean Facial",
          "2-30%Off Pico LAser",
          "2-20% Off on Exilis Treatment",
          "2-200 Facial GC",
          "1-Extra diode session underarms you can give but you cant use",
        ],
      },
    ],
  },
  {
    title: "Facial Promos",
    image: {
      src: "/images/optimized/treatments/korean-facial-clinic.webp",
      alt: "ESCLARE provider working with a client during a facial",
    },
    offers: [
      {
        name: "Basic Detox Facial",
        prices: ["₱1,000 - 3 sessions", "₱2,500 - 8 sessions"],
      },
      {
        name: "Acne Cleanse Facial",
        prices: ["₱1,500 - 3 sessions", "₱3,200 - 6 sessions"],
      },
      {
        name: "Exfoliare Facial",
        prices: ["₱1,300 - 3 sessions"],
      },
      {
        name: "Intense Hydrating Facial with Cryoelectroporation",
        prices: ["₱4,000 - 5 sessions"],
      },
      {
        name: "Botox Facial by Esthemax",
        prices: ["₱5,000 - 4 sessions"],
      },
    ],
  },
  {
    title: "Tattoo Removal Promo",
    image: {
      src: "/images/optimized/treatments/devices/pico/pico-laser-device.webp",
      alt: "Pico laser device used for treatment",
    },
    offers: [
      {
        name: "Tattoo Size: 1-3 cm",
        prices: ["₱500/session", "₱2,800 - 6 sessions", "₱3,600 - 8 sessions"],
      },
      {
        name: "Tattoo Size: 4-7 cm",
        prices: ["₱900/session", "₱5,000 - 6 sessions", "₱6,500 - 8 sessions"],
      },
      {
        name: "Tattoo Size: 8-11 cm",
        prices: ["₱1,100/session", "₱6,000 - 6 sessions", "₱7,600 - 8 sessions"],
      },
      {
        name: "Additional Size Charge",
        prices: ["Add ₱200 per extra centimeter"],
      },
    ],
  },
  {
    title: "CO₂ Laser Stretch Mark Treatment",
    image: {
      src: "/images/optimized/treatments/catalog/fractional-laser.webp",
      alt: "Fractional laser handpiece during treatment",
    },
    offers: [
      {
        name: "CO2 Laser Stretch Mark Treatment",
        prices: ["₱500 per 10 cm", "₱250 per 5 cm"],
      },
    ],
  },
  {
    title: "Face & Contour Promo",
    image: {
      src: "/images/optimized/treatments/doctor/hiko/hiko-nose-lift-treatment.webp",
      alt: "HIKO nose lift treatment visual",
    },
    offers: [
      {
        name: "Hiko Nose lift",
        prices: ["₱9,999"],
      },
      {
        name: "Thread Lift / V-Lift Face lifting",
        prices: ["₱7,999"],
      },
      {
        name: "Eye Rejuvination",
        prices: ["₱3,999/Session", "₱7,999- 3 sessions"],
        inclusions: "For Dark circle, eye Bags and puffy eyes",
      },
    ],
  },
  {
    title: "Advance Treatments",
    image: {
      src: "/images/optimized/treatments/hifu/hifu-face-treatment.webp",
      alt: "HIFU facial treatment visual",
    },
    offers: [
      {
        name: "7D HIFU",
        prices: ["₱2,499"],
      },
      {
        name: "7D HIFU + Exilift",
        prices: ["₱3,499"],
      },
      {
        name: "Exilift- for Face or Arms",
        prices: ["₱1,499/Session", "₱4,999- 5 Sessions"],
      },
    ],
  },
  {
    title: "Special Treatments",
    image: {
      src: "/images/optimized/treatments/catalog/minor-skin-procedures.webp",
      alt: "ESCLARE provider performing a minor skin procedure",
    },
    offers: [
      {
        name: "Warts Removal for face and neck",
        prices: ["₱1,599"],
        inclusions: "For Small/Odt-size warts only. Bigger sizes require a Docotrs Assestment",
      },
    ],
  },
];
