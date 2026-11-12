export const educationCategories = [
  {
    slug: "laser-treatments",
    name: "Laser Treatments",
    description:
      "Plain-language guides to laser hair reduction, pigmentation care, treatment planning, and recovery.",
  },
  {
    slug: "weight-management",
    name: "Weight Management",
    description:
      "Doctor-led education about prescription-supported weight management, monitoring, and sustainable care.",
  },
  {
    slug: "skin-concerns",
    name: "Skin Concerns",
    description:
      "Calm, practical explanations of common concerns and why assessment matters before choosing a treatment.",
  },
  {
    slug: "mccm-skin-science",
    name: "MCCM Skin Science",
    description:
      "Professional skincare ingredients, clinic protocols, recovery support, and personalized treatment planning.",
  },
] as const;

export type EducationCategorySlug = (typeof educationCategories)[number]["slug"];
export type EditorialStatus =
  "draft" | "fact-checked" | "medical-review-required" | "approved" | "published";

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: ReadonlyArray<string>;
  bullets?: ReadonlyArray<string>;
};

export type ArticleFaq = { question: string; answer: string };
export type ArticleReference = { title: string; url: string };

export type EducationArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: EducationCategorySlug;
  tags: ReadonlyArray<string>;
  heroImage: string;
  heroAlt: string;
  author: string;
  reviewer: string | null;
  status: EditorialStatus;
  published: boolean;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  seoTitle: string;
  metaDescription: string;
  keyTakeaways: ReadonlyArray<string>;
  sections: ReadonlyArray<ArticleSection>;
  beforecare: ReadonlyArray<string>;
  aftercare: ReadonlyArray<string>;
  unsuitable: ReadonlyArray<string>;
  contactClinic: ReadonlyArray<string>;
  faqs: ReadonlyArray<ArticleFaq>;
  references: ReadonlyArray<ArticleReference>;
  relatedArticles: ReadonlyArray<string>;
  relatedTreatments: ReadonlyArray<{ label: string; href: string }>;
};

const educationArticleSource: ReadonlyArray<EducationArticle> = [
  {
    slug: "diode-laser-hair-removal-guide",
    title: "Ares Quattro — 4D Diode Hair Removal",
    excerpt:
      "How diode laser supports long-lasting hair reduction, why visits are spaced apart, and how to prepare and care for the treated skin.",
    category: "laser-treatments",
    tags: ["diode laser", "hair reduction", "underarms"],
    heroImage: "/images/optimized/treatments/diode/diode-underarm-treatment.webp",
    heroAlt: "Diode laser hair-reduction treatment for the underarm area",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "Ares Quattro — 4D Diode Hair Removal",
    metaDescription:
      "How diode laser supports long-lasting hair reduction, why visits are spaced apart, and how to prepare and care for the treated skin.",
    keyTakeaways: [
      "The laser heats pigment in the hair and follicle to reduce future growth.",
      "Hairs grow at different times, so treatment is usually planned across several visits.",
      "Hair colour, skin tone, tanning and medicines help determine whether laser is suitable.",
    ],
    sections: [
      {
        id: "how-it-works",
        title: "What happens to the hair follicle",
        paragraphs: [
          "Light from the diode laser is absorbed by melanin, the pigment in hair. The resulting heat affects the follicle, which is the structure in the skin that grows the hair. The provider chooses settings and cooling to limit heat injury to nearby skin.",
          "Shaving cuts hair at the surface. Waxing pulls hair from the follicle. Diode laser aims to reduce the amount of hair that grows back. Intense pulsed light, or IPL, uses a broader range of light. Your skin and hair need assessment before either method.",
        ],
      },
      {
        id: "sessions",
        title: "Why visits are spaced apart",
        paragraphs: [
          "Hair is most responsive during anagen, the active growth phase. In catagen, growth slows. In telogen, the hair rests before it sheds. Because neighbouring hairs are often in different phases, repeating a session very soon does not catch all of them in active growth.",
          "The provider can adjust spacing to the area and the regrowth you see. Dark, coarse hair often responds more readily than fine or light hair. Hormones can affect regrowth, especially on the face, and some people need maintenance after their first course.",
        ],
      },
      {
        id: "what-to-expect",
        title: "During the appointment",
        paragraphs: [
          "Tell the provider about a recent tan, new medicines or a reaction to a previous session. After checking the area, the provider prepares the skin and supplies protective eyewear. You may feel warmth or a brief snapping sensation as the handpiece passes over the area.",
        ],
      },
    ],
    beforecare: [
      "Leave the follicle in place by avoiding waxing, plucking and threading before treatment.",
      "Follow the clinic's instructions for shaving and arrive with clean skin unless told otherwise.",
      "Mention recent procedures, tanning, irritation, pregnancy and medicines that make you sensitive to light.",
    ],
    aftercare: [
      "Clean the area gently and avoid rubbing, excess heat and irritating products while it feels sensitive.",
      "Protect exposed areas from the sun and follow the instructions for the area treated.",
      "Leave temporary redness alone. Scratching or picking can injure the skin.",
    ],
    unsuitable: [
      "A fresh tan, broken skin, active infection or significant irritation in the area",
      "Pregnancy or a health or medication history that needs clearance",
      "Hair colour or density that gives the device a poor target",
    ],
    contactClinic: [
      "Blisters",
      "Severe or worsening pain",
      "Marked swelling",
      "Signs of infection, such as increasing redness or discharge",
    ],
    faqs: [
      {
        question: "Will the hair ever grow back?",
        answer:
          "Long-lasting hair reduction is the goal. Regrowth varies by area and hormonal factors, and maintenance may be needed.",
      },
      {
        question: "Can I have treatment on morena skin?",
        answer:
          "It may be suitable. Ask about the provider's experience with your skin tone and how they choose settings, cooling and any test area.",
      },
      {
        question: "What can I do about regrowth between visits?",
        answer:
          "Ask whether shaving is appropriate for your schedule. Waxing and plucking remove the hair the laser needs to target.",
      },
      {
        question: "What if I recently tanned?",
        answer:
          "Tell your provider before the visit. A recent tan can change how the skin responds and may mean rescheduling.",
      },
      {
        question: "What does a pulse feel like?",
        answer:
          "Some people feel a quick snap or warmth. Tell the provider if the sensation becomes unusually painful.",
      },
    ],
    references: [
      {
        title: "AAD: Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        title: "AAD: Preparing for laser hair removal",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-preparation",
      },
    ],
    relatedArticles: ["why-underarms-become-dark"],
    relatedTreatments: [{ label: "4D Diode Laser Hair Reduction", href: "/diode-laser" }],
  },
  {
    slug: "pico-laser-facial-pigmentation",
    title: "Pico laser for dark spots, acne marks and uneven tone",
    excerpt:
      "Learn which dark marks may respond to Pico laser, when melasma needs a different plan, and what to watch for during recovery.",
    category: "laser-treatments",
    tags: ["pico laser", "pigmentation", "acne marks"],
    heroImage: "/images/optimized/treatments/pico-face/pico-face-treatment.webp",
    heroAlt: "Pico laser facial treatment with protective eyewear",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "Pico laser for dark spots, acne marks and uneven tone",
    metaDescription:
      "Learn which dark marks may respond to Pico laser, when melasma needs a different plan, and what to watch for during recovery.",
    keyTakeaways: [
      "A picosecond laser delivers light in very short pulses.",
      "A flat brown acne mark, an active breakout and a scar need different assessments.",
      "Irritation after treatment can leave darker pigment, so settings and sun protection matter.",
    ],
    sections: [
      {
        id: "concerns",
        title: "Start with the kind of mark you have",
        paragraphs: [
          "Freckles, sun spots, acne marks and melasma can all look brown. A flat mark that remains after a pimple settles may be post-inflammatory hyperpigmentation, which means extra pigment after inflammation. An inflamed pimple needs an acne plan of its own.",
          "Melasma can flare with light exposure, hormonal changes or irritation. A clinician may start with sun protection and skincare and consider a laser later for selected cases.",
        ],
      },
      {
        id: "technology",
        title: "How a short pulse targets pigment",
        paragraphs: [
          "A picosecond is one trillionth of a second. A short pulse can create a pressure effect that breaks up some pigment targets. The wavelength, handpiece, amount of energy and treatment mode still affect the result and the risk of colour changes.",
        ],
      },
      {
        id: "what-to-expect",
        title: "What the treated spots may look like",
        paragraphs: [
          "After cleansing, you wear protective eyewear while the provider works over the chosen areas. Warmth, mild swelling and redness are possible. Some spots may darken temporarily. Ask how long sensitivity or flaking is expected for the settings used.",
        ],
      },
    ],
    beforecare: [
      "Avoid tanning and tell the provider about recent sun exposure, peels, laser sessions and medicines that increase sensitivity to light.",
      "Ask which retinoids or other irritating products to pause and arrive with clean skin if instructed.",
      "Report cold sores, raised scars, pregnancy, infection or a history of pigment changes after treatment.",
    ],
    aftercare: [
      "Use a gentle cleanser, moisturiser and broad-spectrum sunscreen as instructed.",
      "Leave darkened or flaking spots alone. Wait for clearance before resuming harsh actives.",
      "Limit direct sun and unnecessary heat while the area is sensitive.",
    ],
    unsuitable: [
      "An infection, open lesion or inflamed acne in the treatment area",
      "Recent tanning or uncontrolled sensitivity to light",
      "Pregnancy or another health issue requiring clearance",
    ],
    contactClinic: [
      "Blisters",
      "Swelling that increases",
      "Severe pain",
      "Spreading rash or discharge",
    ],
    faqs: [
      {
        question: "Will Pico cure melasma?",
        answer:
          "Melasma can return. A long-term plan usually includes sun protection and treatment for triggers. A dermatologist can assess whether a laser belongs in that plan.",
      },
      {
        question: "Should I book Pico while I still have breakouts?",
        answer:
          "Have the active acne assessed first. Treatment for inflammation may differ from treatment for the marks it leaves.",
      },
      {
        question: "Why do a few spots look darker after treatment?",
        answer:
          "Some pigment treatments cause temporary darkening or tiny dark dots. Follow the instructions for your session and call if the reaction worsens.",
      },
      {
        question: "How can I tell a dark acne mark from a scar?",
        answer:
          "A flat mark changes the colour of the skin. A scar changes its texture and may be indented or raised. A clinician can assess both if they occur together.",
      },
      {
        question: "What should I tell the clinic if a past laser left dark marks?",
        answer:
          "Describe the device or procedure if you know it, when the marks developed and how long they lasted. This helps the provider assess your risk before recommending a setting.",
      },
    ],
    references: [
      {
        title: "Systematic review of picosecond lasers in dermatology",
        url: "https://pubmed.ncbi.nlm.nih.gov/32282094/",
      },
      {
        title: "AAD: Melasma diagnosis and treatment",
        url: "https://www.aad.org/public/diseases/a-z/melasma-treatment",
      },
      {
        title: "AAD: Acne scar treatment",
        url: "https://www.aad.org/public/diseases/Acne/derm-treat/Scars/treatment",
      },
    ],
    relatedArticles: ["pico-laser-facial-rejuvenation", "why-underarms-become-dark"],
    relatedTreatments: [
      { label: "Pico Glow Face", href: "/treatments/pico-glow-face" },
      { label: "Request a skin assessment", href: "/appointment-request" },
    ],
  },
  {
    slug: "why-underarms-become-dark",
    title: "Why underarms darken and when to get them checked",
    excerpt:
      "Shaving, friction and deodorant reactions can leave dark marks. Learn when a change in underarm skin needs a medical assessment.",
    category: "skin-concerns",
    tags: ["underarms", "pigmentation", "ingrown hairs"],
    heroImage: "/images/optimized/treatments/pico-underarm/pico-underarm-treatment.webp",
    heroAlt: "Professional Pico laser brightening treatment for the underarm area",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "Why underarms darken and when to get them checked",
    metaDescription:
      "Shaving, friction and deodorant reactions can leave dark marks. Learn when a change in underarm skin needs a medical assessment.",
    keyTakeaways: [
      "Hair shadow and the normal shape of a skin fold can affect its appearance.",
      "Repeated irritation can leave darker pigment after the skin settles.",
      "New, thickened or widespread dark patches need medical assessment.",
    ],
    sections: [
      {
        id: "common-causes",
        title: "Look for irritation and changes in texture",
        paragraphs: [
          "Notice whether the area stings after deodorant or whether bumps appear after shaving. Friction from clothing, ingrown hairs and skin inflammation can all leave darker marks. Scrubbing or layering bleaching products can add irritation.",
          "A sudden change, thickened skin or similar patches on the neck or other folds can point to a medical cause. If the area is itchy, painful or changing quickly, get it checked before trying a cosmetic treatment.",
        ],
      },
      {
        id: "what-to-expect",
        title: "What to bring to an assessment",
        paragraphs: [
          "Tell the provider when the colour changed and whether it followed a new deodorant, a change in hair removal or a rash. Bring the names of products that caused symptoms. The provider may wait for the skin to settle or refer you for medical evaluation.",
        ],
      },
      {
        id: "professional-options",
        title: "Choosing care for the cause",
        paragraphs: [
          "For suitable hair and skin, diode laser may reduce how often you need to shave. Selected pigment concerns may be assessed for Pico laser or a professional peel. The choice depends on the cause, skin tone, active irritation and how the area has reacted in the past.",
        ],
      },
    ],
    beforecare: [
      "Pause harsh scrubs and avoid testing several new products together.",
      "Bring the names or photos of products that caused stinging, itching or a rash.",
      "Follow the preparation instructions for the procedure selected after assessment.",
    ],
    aftercare: [
      "Wear clothing that limits rubbing and use gentle, fragrance-free care while the area recovers.",
      "Leave ingrown hairs and irritated patches alone. Avoid unapproved bleaching mixtures.",
      "Follow the specific instructions for diode, Pico or a peel.",
    ],
    unsuitable: [
      "Rash, infection, wounds or significant inflammation",
      "Darkening that is unexplained or changing quickly",
      "A known reaction to a proposed product or procedure",
    ],
    contactClinic: ["Blistering", "A rash that spreads", "Discharge", "Severe or worsening pain"],
    faqs: [
      {
        question: "Does darker underarm skin mean I need to wash more?",
        answer:
          "Colour can reflect hair shadow, natural folds or irritation. Washing harder can make irritated skin worse.",
      },
      {
        question: "Will diode laser lighten the underarms?",
        answer:
          "Diode targets hair. Shaving less may reduce one source of irritation, but existing dark patches need their own assessment.",
      },
      {
        question: "When should I see a doctor about the colour?",
        answer:
          "Get checked if the patches appear suddenly, thicken, spread to other folds or come with itching or pain.",
      },
      {
        question: "Should I change deodorants if the skin stings?",
        answer:
          "Pause the product that seems to trigger the reaction and tell your clinician what you used. Persistent itching or a rash needs assessment.",
      },
      {
        question: "What is acanthosis nigricans?",
        answer:
          "It causes thicker, velvety patches, often in folds such as the neck or underarms. A clinician can check for underlying causes, including insulin resistance.",
      },
    ],
    references: [
      {
        title: "AAD: Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        title: "AAD: Acanthosis nigricans diagnosis and treatment",
        url: "https://www.aad.org/public/diseases/a-z/acanthosis-nigricans-treatment",
      },
      {
        title: "AAD: Chemical peel FAQs",
        url: "https://www.aad.org/public/cosmetic/younger-looking/chemical-peels-faqs",
      },
    ],
    relatedArticles: ["diode-laser-hair-removal-guide", "pico-laser-facial-pigmentation"],
    relatedTreatments: [
      { label: "4D Diode Laser", href: "/diode-laser" },
      { label: "Pico Glow Body Area", href: "/treatments/pico-glow-body" },
    ],
  },
  {
    slug: "glp-1-weight-management-programs",
    title: "GLP-1 medicines for weight management",
    excerpt:
      "What a doctor checks before prescribing a GLP-1 medicine, how follow-up works, and which symptoms need urgent attention.",
    category: "weight-management",
    tags: ["GLP-1", "weight management", "medical consultation"],
    heroImage: "/images/optimized/clinic/esclare-naga-treatment-room-v2.webp",
    heroAlt: "Private ESCLARE consultation and treatment room",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "GLP-1 medicines for weight management",
    metaDescription:
      "What a doctor checks before prescribing a GLP-1 medicine, how follow-up works, and which symptoms need urgent attention.",
    keyTakeaways: [
      "GLP-1 is a hormone involved in fullness, digestion and blood sugar.",
      "A doctor reviews your health, medicines and pregnancy plans before recommending a prescription.",
      "Food intake, hydration, activity and follow-up still matter while you take the medicine.",
    ],
    sections: [
      {
        id: "what-is-glp1",
        title: "How these medicines affect appetite",
        paragraphs: [
          "Glucagon-like peptide-1, or GLP-1, helps signal fullness and plays a role in blood sugar regulation. Medicines that act on this pathway can support weight management for eligible patients alongside changes in food intake and physical activity. Each product has its own approved uses and safety instructions.",
        ],
      },
      {
        id: "medical-supervision",
        title: "What a prescriber needs to know",
        paragraphs: [
          "Bring your weight history, current medicines and any prior reactions to weight-management products. The doctor may also review weight-related conditions, eating patterns, lab results, digestive symptoms and pregnancy plans. Body mass index, or BMI, is considered alongside your health history.",
          "Ask which product and indication are authorised in the Philippines. The U.S. labels in the references explain the named products in the United States. Your prescriber should use the local product information for the medicine you receive.",
        ],
      },
      {
        id: "what-to-expect",
        title: "What follow-up is for",
        paragraphs: [
          "At follow-up, tell your doctor how much you can comfortably eat and drink, how your appetite has changed and whether you have ongoing nausea, vomiting or other symptoms. The prescriber decides whether to adjust treatment based on your response and side effects. Follow-up is also a time to discuss activity, nutrition, sleep and longer-term care.",
        ],
      },
    ],
    beforecare: [
      "List all medicines, supplements and previous weight-management products.",
      "Discuss pregnancy and breastfeeding, and any history involving the gallbladder, pancreas, kidneys, digestion, endocrine conditions or mental health.",
      "Check with the prescriber before starting, stopping, sharing or combining medicines.",
    ],
    aftercare: [
      "Follow the instructions for your prescribed product and keep your monitoring visits.",
      "Discuss a food and hydration plan you can manage. Report side effects that persist.",
      "Ask the prescriber what to do if a dose is missed or you cannot tolerate the medicine.",
    ],
    unsuitable: [
      "Pregnancy, breastfeeding or pregnancy plans that need discussion with the prescriber",
      "A contraindication or warning in the label for the specific product",
      "A health or medication history that calls for another approach",
    ],
    contactClinic: [
      "Severe or persistent abdominal pain, repeated vomiting or inability to keep fluids down need prompt medical assessment.",
      "Seek emergency care for trouble breathing or swelling of the lips, tongue or throat.",
      "Get medical help for severe, rapidly worsening symptoms or signs of dehydration.",
    ],
    faqs: [
      {
        question: "Can I buy a slimming injection and start it myself?",
        answer:
          "These medicines require a prescription. The doctor needs to check which product is appropriate, how it should be used and what to monitor.",
      },
      {
        question: "What if I am eating very little?",
        answer:
          "Tell your prescriber. The plan may need to change if you cannot get enough food or fluids or have symptoms that persist.",
      },
      {
        question: "Can I expect the same weight change as someone else?",
        answer:
          "Response and side effects differ. Your doctor will reassess whether the treatment is meeting your health goals.",
      },
      {
        question: "What should I do if I take insulin or another diabetes medicine?",
        answer:
          "Review your medicines with your prescriber before starting. Some combinations can raise the risk of low blood sugar and may require a monitoring plan.",
      },
      {
        question: "Should I tell the anaesthesia team I take one of these medicines?",
        answer:
          "Yes. Tell the team before an operation or procedure that uses sedation. They need to account for the effect on stomach emptying.",
      },
    ],
    references: [
      {
        title: "U.S. FDA prescribing information: Wegovy (semaglutide)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/215256s029lbl.pdf",
      },
      {
        title: "U.S. FDA prescribing information: Zepbound (tirzepatide)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/217806s042lbl.pdf",
      },
      {
        title: "Philippine FDA product verification portal",
        url: "https://verification.fda.gov.ph/",
      },
    ],
    relatedArticles: ["tirzepatide-weight-management-guide"],
    relatedTreatments: [
      { label: "Request a medical weight-management consultation", href: "/appointment-request" },
    ],
  },
  {
    slug: "tirzepatide-weight-management-guide",
    title: "Tirzepatide for weight management",
    excerpt:
      "Doctor-review draft covering tirzepatide's two hormone pathways, prescription assessment, follow-up and urgent warning signs.",
    category: "weight-management",
    tags: ["tirzepatide", "GIP", "GLP-1"],
    heroImage: "/images/optimized/clinic/esclare-naga-preparation-area-v2.webp",
    heroAlt: "Organized ESCLARE clinical preparation area",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "Tirzepatide for weight management",
    metaDescription:
      "Doctor-review draft covering tirzepatide's two hormone pathways, prescription assessment, follow-up and urgent warning signs.",
    keyTakeaways: [
      "Tirzepatide acts on both GIP and GLP-1 receptors.",
      "The product label and your medical history guide prescription decisions.",
      "Tell your prescriber promptly if side effects interfere with eating or drinking.",
    ],
    sections: [
      {
        id: "dual-pathway",
        title: "How tirzepatide works",
        paragraphs: [
          "Tirzepatide acts on receptors for GIP, or glucose-dependent insulinotropic polypeptide, and GLP-1, or glucagon-like peptide-1. These are hormone pathways involved in blood sugar regulation and appetite. The medicine requires a prescription.",
        ],
      },
      {
        id: "assessment",
        title: "Questions to bring to your doctor",
        paragraphs: [
          "Tell the prescriber about your weight-related health needs, current medicines, previous reactions, lab results and digestive or endocrine conditions. Discuss pregnancy plans and any personal or family history of medullary thyroid cancer or multiple endocrine neoplasia type 2. The U.S. Zepbound label lists both histories as contraindications.",
          "A Philippine FDA listing for Mounjaro identifies a registered tirzepatide product. Ask your doctor to check the locally authorised indication for the specific product they propose. The U.S. Zepbound label does not establish approval or availability in the Philippines.",
        ],
      },
      {
        id: "what-to-expect",
        title: "What to report at follow-up",
        paragraphs: [
          "Tell the prescriber about appetite changes, digestive symptoms and how much fluid you can keep down. Discuss food intake, activity and whether the plan still fits your health needs. The prescriber uses the official product information and your response to decide on any changes.",
        ],
      },
    ],
    beforecare: [
      "Bring names and doses of all medicines, supplements and previous injectables.",
      "Tell your doctor if you use oral contraception or have pregnancy plans. Ask whether the product requires any change to contraception.",
      "Read the guide for the medicine prescribed to you. Avoid borrowing, sharing or combining it with other products without medical direction.",
    ],
    aftercare: [
      "Follow the prescribed schedule and storage directions. Ask the prescriber how to handle a missed dose.",
      "Discuss hydration and food intake, including protein if advised.",
      "Use resistance exercise if appropriate for your health and treatment plan.",
    ],
    unsuitable: [
      "A contraindication on the exact product label, including certain thyroid cancer histories or a serious allergy to tirzepatide under the U.S. Zepbound label",
      "Pregnancy or a pregnancy plan that needs prescriber guidance",
      "A health condition or medicine interaction that calls for a different plan",
    ],
    contactClinic: [
      "Seek prompt medical assessment for severe or persistent abdominal pain, repeated vomiting or inability to keep fluids down.",
      "Seek emergency care for trouble breathing or swelling of the face, lips, tongue or throat.",
      "Follow the medication guide for other urgent symptoms and report possible dehydration.",
    ],
    faqs: [
      {
        question: "How does tirzepatide differ from a GLP-1-only medicine?",
        answer:
          "Tirzepatide acts on two receptors, GIP and GLP-1. Product selection depends on your health and the specific indication.",
      },
      {
        question: "Can I adjust the prescription if my appetite changes?",
        answer:
          "Speak with the prescriber. They decide whether to change treatment using the product label and how well you tolerate it.",
      },
      {
        question: "What if I become pregnant while taking it for weight management?",
        answer:
          "Contact your prescriber promptly. The U.S. Zepbound label directs patients to discontinue it when pregnancy is recognised.",
      },
      {
        question: "What if I have severe belly pain that will not go away?",
        answer:
          "Seek urgent medical care, especially if the pain spreads to your back or you are vomiting. The U.S. label lists persistent severe abdominal pain as a possible sign of pancreatitis.",
      },
      {
        question: "Which tirzepatide product is registered in the Philippines?",
        answer:
          "The Philippine FDA registry lists a Mounjaro product. Ask your prescriber to verify the exact presentation and local indication before treatment.",
      },
    ],
    references: [
      {
        title: "U.S. FDA prescribing information: Zepbound (tirzepatide)",
        url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/217806s042lbl.pdf",
      },
      {
        title: "Philippine FDA product registry: Mounjaro (tirzepatide), DR-XY49503",
        url: "https://verification.fda.gov.ph/ALL_DrugProductsview.php?export=pdf&registration_number=DR-XY49503",
      },
      {
        title: "Philippine FDA product verification portal",
        url: "https://verification.fda.gov.ph/",
      },
    ],
    relatedArticles: ["glp-1-weight-management-programs"],
    relatedTreatments: [{ label: "Request a doctor consultation", href: "/appointment-request" }],
  },
  {
    slug: "pico-laser-facial-rejuvenation",
    title: "Pico laser for texture and facial rejuvenation",
    excerpt:
      "How providers choose a Pico treatment mode for uneven tone or texture, and what recovery can look like.",
    category: "laser-treatments",
    tags: ["pico laser", "texture", "rejuvenation"],
    heroImage: "/images/optimized/treatments/pico-face/pico-face-overview.webp",
    heroAlt: "Aesthetician performing a Pico laser facial treatment",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "Pico laser for texture and facial rejuvenation",
    metaDescription:
      "How providers choose a Pico treatment mode for uneven tone or texture, and what recovery can look like.",
    keyTakeaways: [
      "Different Pico modes treat different concerns.",
      "Texture, fine lines and colour changes need separate assessment.",
      "A brighter appearance means addressing uneven or dull-looking areas. Natural skin colour is part of the treatment plan.",
    ],
    sections: [
      {
        id: "rejuvenation",
        title: "Name the change you want to see",
        paragraphs: [
          "If you point to an acne mark, the provider needs to see whether it is a flat patch of colour or a dip in the skin. A Pico setting selected for uneven pigment may differ from one chosen for rough texture or the appearance of pores and fine lines.",
        ],
      },
      {
        id: "limitations",
        title: "What a Pico treatment can address",
        paragraphs: [
          "Some picosecond laser modes are used for selected texture and tone concerns. The response depends on the device, settings and your skin over the course of treatment. Deeper scars or active skin disease may call for a different approach. Ask which changes the clinician expects to see in your case.",
        ],
      },
      {
        id: "what-to-expect",
        title: "Plan around the recovery",
        paragraphs: [
          "The provider checks and cleans the area, gives you protective eyewear and treats it in controlled passes. The treated skin may feel warm or sensitive, look red or develop temporarily darker spots. Tell the provider if you have an upcoming event so you can plan around the expected recovery.",
        ],
      },
    ],
    beforecare: [
      "Mention recent tanning, acne, cold sores, medicines and other procedures.",
      "Ask which skincare products you should pause before the visit.",
      "Discuss the likely recovery before scheduling close to an important event.",
    ],
    aftercare: [
      "Keep skincare gentle and protect treated skin with broad-spectrum sunscreen as instructed.",
      "Avoid scrubbing or picking. Wait for guidance before restarting strong products.",
      "Follow the timing set for any additional treatment.",
    ],
    unsuitable: [
      "Active infection, open skin or uncontrolled inflammation",
      "A recent tan or a history that requires another setting or procedure",
      "Pregnancy or health factors requiring clearance",
    ],
    contactClinic: ["Blisters", "Severe pain", "Marked swelling", "A reaction that gets worse"],
    faqs: [
      {
        question: "How does Pico differ from fractional CO2 resurfacing?",
        answer:
          "The devices deliver energy differently. They can treat different concerns and have different recovery times. Ask which mode the provider is proposing for your skin.",
      },
      {
        question: "What does brightening mean in this treatment?",
        answer:
          "The provider may aim to soften the appearance of selected uneven patches or dull areas. Ask which changes are realistic for your skin tone and concern.",
      },
      {
        question: "Can I book a facial on the same day?",
        answer:
          "Ask the provider before booking. Product choice and timing depend on how the laser will affect your skin.",
      },
      {
        question: "Will my skin look smoother after one appointment?",
        answer:
          "That depends on the concern and the laser setting. Ask when the provider will reassess texture and whether a series makes sense.",
      },
      {
        question: "What if I tend to develop dark marks after irritation?",
        answer:
          "Tell the provider before the procedure. Your response to past irritation can affect the plan, including the settings and recovery instructions.",
      },
    ],
    references: [
      {
        title: "Systematic review of picosecond lasers in dermatology",
        url: "https://pubmed.ncbi.nlm.nih.gov/32282094/",
      },
      {
        title: "Clinical study of fractional picosecond laser for wrinkles and acne scars",
        url: "https://pubmed.ncbi.nlm.nih.gov/34079185/",
      },
      {
        title: "AAD: Acne scar treatment",
        url: "https://www.aad.org/public/diseases/Acne/derm-treat/Scars/treatment",
      },
    ],
    relatedArticles: ["pico-laser-facial-pigmentation"],
    relatedTreatments: [{ label: "Pico Glow Face", href: "/treatments/pico-glow-face" }],
  },
  {
    slug: "mccm-professional-skincare-guide",
    title: "MCCM professional skincare and home care",
    excerpt:
      "What to ask about a clinic product, what belongs in your home routine, and how to spot irritation when introducing something new.",
    category: "mccm-skin-science",
    tags: ["MCCM", "professional skincare", "home care"],
    heroImage: "/images/optimized/treatments/skin-support/skin-hydration-editorial.webp",
    heroAlt: "MCCM professional-use skincare vial and packaging",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "MCCM professional skincare and home care",
    metaDescription:
      "What to ask about a clinic product, what belongs in your home routine, and how to spot irritation when introducing something new.",
    keyTakeaways: [
      "A clinic product and a home-care product can differ in formula, application and supervision.",
      "Bring the products you already use so the provider can spot overlap.",
      "A product name alone tells you little about whether it suits sensitive or recently treated skin.",
    ],
    sections: [
      {
        id: "professional-vs-home",
        title: "Which products belong where",
        paragraphs: [
          "A clinic protocol may include products or devices that require trained application. At home, your routine needs to be easy to repeat and gentle enough for the stage of recovery. Ask which products you can use between visits and which belong in the clinic.",
        ],
      },
      {
        id: "personalization",
        title: "Choose for the skin you have today",
        paragraphs: [
          "Two people with similar dark spots can need different routines. One may have active acne or a rash, while the other is recovering from a peel. Mention medicines and past reactions so the provider can assess what your skin can tolerate.",
        ],
      },
      {
        id: "what-to-expect",
        title: "Use the consultation to simplify your routine",
        paragraphs: [
          "Bring photos of the front and ingredient label of each product. Ask which one is intended for the concern, what to use while the skin is sensitive and when to restart any product you have paused.",
        ],
      },
    ],
    beforecare: [
      "List products you use at home, including anything you apply only occasionally.",
      "Mention allergies and the dates of recent procedures.",
      "Ask before pausing or changing a prescribed product.",
    ],
    aftercare: [
      "Introduce changes one at a time as directed so you can identify a reaction.",
      "Stop the new product and seek advice if you develop a significant reaction.",
      "Follow the moisturiser and sunscreen guidance for your treatment.",
    ],
    unsuitable: [
      "A known allergy to the proposed ingredient",
      "Severe active irritation",
      "A routine that has already left skin sore or damaged",
    ],
    contactClinic: ["Rapid swelling", "Blistering", "A spreading rash", "Burning that persists"],
    faqs: [
      {
        question: "Does professional skincare mean a stronger product?",
        answer:
          "Strength is one difference. Formula, intended use and how the product is applied also matter.",
      },
      {
        question: "Can I buy the same products and repeat the clinic procedure?",
        answer:
          "Ask which products are made for home use. Leave products and methods that require trained application to the clinic.",
      },
      {
        question: "How many new products should I start at once?",
        answer:
          "Follow the plan you were given and introduce changes gradually. That makes it easier to tell which product caused stinging or a rash.",
      },
      {
        question: "How do I know which product to pause before a procedure?",
        answer:
          "Show the provider your current products, especially exfoliants and retinoids. Ask for the pause and restart instructions for the procedure being planned.",
      },
      {
        question: "Can I use an MCCM product if I have a fragrance allergy?",
        answer:
          "Show the clinic the allergy information and ask to review the ingredients of the exact product before it is applied.",
      },
    ],
    references: [
      {
        title: "Mesosystem: MCCM Medical Cosmetics brand information",
        url: "https://www.mesosystem.com/brands",
      },
      {
        title: "AAD: Preparing for a chemical peel",
        url: "https://www.aad.org/public/cosmetic/younger-looking/chemical-peels-preparation",
      },
    ],
    relatedArticles: ["mccm-home-care-after-treatments", "mccm-professional-chemical-peels"],
    relatedTreatments: [{ label: "MCCM Exosome PDRN", href: "/treatments/mccm-exosome-pdrn" }],
  },
  {
    slug: "exosomes-aesthetic-skincare",
    title: "Exosomes in aesthetic skincare",
    excerpt:
      "What exosomes are, why application and injection carry different risks, and what evidence to ask for before a procedure.",
    category: "mccm-skin-science",
    tags: ["exosomes", "recovery", "regenerative aesthetics"],
    heroImage: "/images/optimized/treatments/skin-support/product-verification-editorial.webp",
    heroAlt: "Professional-use skincare packaging in a clinical product display",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "Exosomes in aesthetic skincare",
    metaDescription:
      "What exosomes are, why application and injection carry different risks, and what evidence to ask for before a procedure.",
    keyTakeaways: [
      "Exosomes are small particles that cells release to carry signals.",
      "Products differ in source, processing and intended use.",
      "A topical application, microneedling-assisted delivery and an injection each need their own safety assessment.",
    ],
    sections: [
      {
        id: "what-they-are",
        title: "What an exosome product contains",
        paragraphs: [
          "Exosomes are tiny particles surrounded by a membrane. They can carry molecules involved in communication between cells. Some products are studied for possible use in skin recovery. A result from one preparation or delivery method cannot establish that another product works.",
        ],
      },
      {
        id: "routes",
        title: "Ask how the product reaches the skin",
        paragraphs: [
          "A topical product sits on the skin surface. Microneedling makes small punctures in the skin, and an injection delivers material through the barrier. Each route changes what sterility, evidence and authorisation need to be checked. The U.S. FDA has warned about unapproved exosome products. Ask for the Philippine authorisation and intended use of the exact product before deciding.",
        ],
      },
      {
        id: "what-to-expect",
        title: "What to ask before giving consent",
        paragraphs: [
          "Ask for the product name, its source, how it will be applied and who will perform the procedure. Ask what studies support that specific use, what reactions to watch for and what alternatives are available. Discuss the plan for protecting the skin barrier afterward.",
        ],
      },
    ],
    beforecare: [
      "Tell the provider about allergies and immune conditions.",
      "Ask which product and delivery method are proposed.",
      "Check with the provider before applying unfamiliar products to freshly treated skin.",
    ],
    aftercare: [
      "Follow the instructions for cleansing, barrier care and sun protection.",
      "Wait for clearance before restarting strong skincare products.",
      "Report unusual swelling, rash or pain that persists.",
    ],
    unsuitable: [
      "A known product allergy",
      "An active infection in the treatment area",
      "A product or procedure whose sterility or authorisation cannot be verified for the intended use",
    ],
    contactClinic: [
      "Significant swelling or hives",
      "Increasing pain",
      "Signs of infection",
      "Seek emergency care for breathing difficulty or throat swelling",
    ],
    faqs: [
      {
        question: "Can exosomes regenerate my skin or reverse ageing?",
        answer:
          "Those promises go beyond the clinical evidence. Ask what has been studied for the actual product and route.",
      },
      {
        question: "Can I use a topical product with microneedling?",
        answer:
          "Ask about the exact device, product and proposed route. A formula intended for intact skin may be unsuitable when that barrier is punctured.",
      },
      {
        question: "Do I still need my usual recovery care?",
        answer: "Follow the instructions for the procedure and keep up sun protection as directed.",
      },
      {
        question: "What should I ask before agreeing to the procedure?",
        answer:
          "Ask for the exact product name, the intended route and the evidence for the outcome being offered.",
      },
      {
        question: "What if the product label only describes topical use?",
        answer:
          "Ask the provider to explain how the planned application fits the label. Discuss a different option if the intended use cannot be verified.",
      },
    ],
    references: [
      {
        title: "U.S. FDA safety alert on unapproved stem cell and exosome products",
        url: "https://www.fda.gov/safety/medical-product-safety-information/public-safety-alert-due-marketing-unapproved-stem-cell-and-exosome-products",
      },
      {
        title: "U.S. FDA: Microneedling device benefits, risks and safety",
        url: "https://www.fda.gov/consumers/consumer-updates/microneedling-devices-getting-point-benefits-risks-and-safety",
      },
      {
        title: "Philippine FDA product verification portal",
        url: "https://verification.fda.gov.ph/",
      },
    ],
    relatedArticles: ["pdrn-polynucleotides-guide", "mccm-home-care-after-treatments"],
    relatedTreatments: [{ label: "Request a skin consultation", href: "/appointment-request" }],
  },
  {
    slug: "pdrn-polynucleotides-guide",
    title: "PDRN and polynucleotides in skin treatments",
    excerpt:
      "What these DNA-derived ingredients are, how their delivery methods differ, and what studies can tell you about the likely result.",
    category: "mccm-skin-science",
    tags: ["PDRN", "polynucleotides", "skin rejuvenation"],
    heroImage: "/images/optimized/treatments/skin-support/skin-hydration-editorial.webp",
    heroAlt: "MCCM PDRN professional formula displayed with its packaging",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 2,
    seoTitle: "PDRN and polynucleotides in skin treatments",
    metaDescription:
      "What these DNA-derived ingredients are, how their delivery methods differ, and what studies can tell you about the likely result.",
    keyTakeaways: [
      "PDRN and polynucleotides are DNA-derived materials studied in some skin treatments.",
      "Formula, purity and delivery affect what the evidence can support.",
      "A topical product and an injectable have different risks and requirements.",
    ],
    sections: [
      {
        id: "definitions",
        title: "What the names mean",
        paragraphs: [
          "PDRN stands for polydeoxyribonucleotide, a name used for preparations of DNA fragments. Products marketed as polynucleotides may contain longer chains. Ask what the actual product contains and where it comes from, particularly if you have a relevant allergy.",
        ],
      },
      {
        id: "goals",
        title: "What researchers have studied",
        paragraphs: [
          "Small studies have looked at hydration, skin texture and the appearance of fine lines. The products and methods vary. A result seen with one injectable formulation does not tell you what to expect from a serum applied to the surface or used with a device.",
        ],
      },
      {
        id: "what-to-expect",
        title: "Ask how the product is delivered",
        paragraphs: [
          "Before you decide, ask whether the product stays on the surface, is used with microneedling or is injected. Ask who will perform the procedure, what reactions are expected and what happens if swelling or sensitivity lasts longer than expected. Check the exact product and permitted route in the Philippines.",
        ],
      },
    ],
    beforecare: [
      "Mention allergies, medicines and reactions to past injections.",
      "Confirm the product name and delivery method.",
      "Have infected or broken skin assessed before treatment.",
    ],
    aftercare: [
      "Keep the area clean as directed and avoid rubbing it.",
      "Wait before resuming products your provider asked you to pause.",
      "Arrange follow-up if swelling or sensitivity persists.",
    ],
    unsuitable: [
      "Active infection",
      "A known sensitivity to an ingredient",
      "A product or delivery method that is unsuitable for your health history",
    ],
    contactClinic: [
      "Redness that increases",
      "Severe swelling",
      "Discharge",
      "Persistent or severe pain",
    ],
    faqs: [
      {
        question: "What does “salmon DNA” mean on a label?",
        answer:
          "It is shorthand for the source of some processed DNA-derived ingredients. Ask about the exact source, purification and other ingredients.",
      },
      {
        question: "Will a cream work like an injection?",
        answer:
          "They deliver the material differently. Studies on injections cannot establish how well a cream works.",
      },
      {
        question: "How long do results last?",
        answer:
          "There is no single estimate across products and protocols. Ask what follow-up the evidence supports for the one being discussed.",
      },
      {
        question: "Are PDRN and PN interchangeable?",
        answer:
          "The terms describe related DNA-derived materials, but products can differ in chain length, formulation and intended use. Ask which product and route the provider means.",
      },
      {
        question: "Should I mention a fish allergy?",
        answer:
          "Yes. Some formulations use fish-derived material. Bring your allergy history and ask the clinician to check the exact product before treatment.",
      },
    ],
    references: [
      {
        title: "Systematic review of polynucleotides in aesthetic medicine",
        url: "https://pubmed.ncbi.nlm.nih.gov/39645667/",
      },
      {
        title: "U.S. FDA: Microneedling device benefits, risks and safety",
        url: "https://www.fda.gov/consumers/consumer-updates/microneedling-devices-getting-point-benefits-risks-and-safety",
      },
      {
        title: "Philippine FDA product verification portal",
        url: "https://verification.fda.gov.ph/",
      },
    ],
    relatedArticles: ["exosomes-aesthetic-skincare", "mccm-mesotherapy-solutions"],
    relatedTreatments: [{ label: "MCCM Exosome PDRN", href: "/treatments/mccm-exosome-pdrn" }],
  },
  {
    slug: "vitamin-c-glutathione-brightening",
    title: "Vitamin C and glutathione for uneven-looking skin",
    excerpt:
      "What topical antioxidants may do, why vitamin C can sting, and the Philippine FDA warning on injections for skin lightening.",
    category: "mccm-skin-science",
    tags: ["vitamin C", "glutathione", "brightening"],
    heroImage: "/images/optimized/treatments/mccm/mccm-eye-contour.webp",
    heroAlt: "Professional skincare vial and packaging on a clean neutral surface",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "Vitamin C and glutathione for uneven-looking skin",
    metaDescription:
      "What topical antioxidants may do, why vitamin C can sting, and the Philippine FDA warning on injections for skin lightening.",
    keyTakeaways: [
      "The form and stability of vitamin C affect the product you put on your skin.",
      "Sun protection helps prevent dark marks from becoming more noticeable.",
      "Philippine FDA has warned against injectable glutathione for skin lightening.",
    ],
    sections: [
      {
        id: "antioxidants",
        title: "What topical antioxidants can do",
        paragraphs: [
          "Vitamin C is an antioxidant used in skincare for concerns such as uneven tone. The form, concentration and acidity of a formula affect how it feels and how well you tolerate it. Glutathione is also an antioxidant. Evidence for one formulation or method of delivery cannot establish a benefit for another.",
        ],
      },
      {
        id: "limitations",
        title: "Topical products and injections",
        paragraphs: [
          "A professional brightening plan may aim to soften the appearance of uneven patches while respecting your natural skin tone. The Philippine FDA's advisory warns about injectable glutathione for skin lightening and says injectable products are not approved for that purpose. The advisory also describes risks from injections and infusions.",
        ],
      },
      {
        id: "what-to-expect",
        title: "Review what is already in your routine",
        paragraphs: [
          "Bring the products you use for dark marks, acne or exfoliation. If the skin is already stinging or peeling, the provider may recommend letting it settle before adding a product. The cause of the pigmentation and recent procedures help determine what you can use.",
        ],
      },
    ],
    beforecare: [
      "Mention sensitive-skin reactions and allergies.",
      "Avoid starting several strong products just before an appointment.",
      "Bring your current routine for review.",
    ],
    aftercare: [
      "Use sunscreen daily as directed.",
      "Introduce products gradually so you can identify irritation.",
      "Stop the product and seek advice if burning or a rash develops.",
    ],
    unsuitable: [
      "A known ingredient allergy",
      "Active dermatitis",
      "Irritated or damaged skin that needs time to recover",
    ],
    contactClinic: ["Swelling", "Hives", "Blisters", "Burning that continues"],
    faqs: [
      {
        question: "Will glutathione permanently lighten my skin?",
        answer:
          "A reliable permanent change in natural skin colour has not been established. Ask which specific marks the plan is intended to address.",
      },
      {
        question: "Why does my vitamin C product sting?",
        answer:
          "The formulation, concentration and acidity can affect how it feels. Combining it with strong actives may add irritation. Seek advice if the burning continues.",
      },
      {
        question: "Do I still need sunscreen if I use an antioxidant?",
        answer:
          "Yes. Keep using sun protection as directed, especially when treating uneven pigmentation.",
      },
      {
        question: "Can I start a vitamin C serum right after a peel?",
        answer:
          "Ask when your skin is ready for active products again. A serum that feels fine on intact skin can sting while the skin is recovering.",
      },
      {
        question: "Does a darker spot need the same care as general uneven tone?",
        answer:
          "The cause matters. Get a persistent, new or changing spot assessed before treating it with brightening products.",
      },
    ],
    references: [
      {
        title: "Philippine FDA Advisory No. 2019-182 on injectable skin lightening products",
        url: "https://www.fda.gov.ph/wp-content/uploads/2019/07/FDA-Advisory-No.2019-182.pdf",
      },
      {
        title: "AAD: Melasma diagnosis and treatment",
        url: "https://www.aad.org/public/diseases/a-z/melasma-treatment",
      },
      {
        title: "Randomized trial of topical ascorbic acid on photoaged skin",
        url: "https://pubmed.ncbi.nlm.nih.gov/12823436/?dopt=Abstract",
      },
    ],
    relatedArticles: ["mccm-professional-skincare-guide", "pico-laser-facial-pigmentation"],
    relatedTreatments: [{ label: "Professional skin support", href: "/treatments/skin-support" }],
  },
  {
    slug: "mccm-professional-chemical-peels",
    title: "MCCM chemical peels and recovery",
    excerpt:
      "How peel depth affects recovery, what to disclose before a session, and which reactions need medical attention.",
    category: "mccm-skin-science",
    tags: ["chemical peel", "texture", "pigmentation"],
    heroImage: "/images/optimized/clinic/esclare-naga-preparation-area-v2.webp",
    heroAlt: "Clean clinical preparation area for professional skin treatments",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "MCCM chemical peels and recovery",
    metaDescription:
      "How peel depth affects recovery, what to disclose before a session, and which reactions need medical attention.",
    keyTakeaways: [
      "A chemical peel removes controlled layers of skin.",
      "Depth, formula and your tendency to develop dark marks affect recovery.",
      "Protect treated skin from the sun and let flakes come away on their own.",
    ],
    sections: [
      {
        id: "peel-depth",
        title: "How deep will the peel go?",
        paragraphs: [
          "A superficial peel acts on the outer layers and generally has a shorter recovery. A deeper peel affects more tissue and can carry more risk, including scarring and pigment changes. Ask how deep the provider plans to go. A brand or product name alone cannot tell you how the peel will be used.",
        ],
      },
      {
        id: "concerns",
        title: "Choosing a peel for your skin",
        paragraphs: [
          "A clinician may consider a peel for certain superficial dark marks, uneven texture, dullness, fine lines or acne-prone skin. Active skin disease and deeper scars may need another approach. If you are prone to dark marks after irritation, ask about the provider's experience with your skin tone.",
        ],
      },
      {
        id: "what-to-expect",
        title: "Application and the days afterward",
        paragraphs: [
          "The provider cleans the area and protects sensitive spots. They apply the peel for the planned period, then remove or neutralise it according to the product directions. You may feel tingling or warmth. Dryness, tightness or flaking can follow, depending on the peel.",
        ],
      },
    ],
    beforecare: [
      "Tell the provider about retinoids, past isotretinoin use, recent waxing, laser treatment or irritation.",
      "Avoid tanning before the appointment.",
      "Follow the instructions on which actives to pause.",
    ],
    aftercare: [
      "Let peeling skin shed without pulling or picking it.",
      "Use the cleanser, moisturiser and sunscreen specified for your recovery.",
      "Avoid heat, exfoliation and unapproved actives until cleared.",
    ],
    unsuitable: [
      "Broken skin or active infection",
      "Severe active dermatitis",
      "A medicine or recent procedure that raises the risk of injury or delayed recovery",
    ],
    contactClinic: ["Severe pain", "Blistering", "Marked swelling", "Signs of infection"],
    faqs: [
      {
        question: "Will I always see visible peeling?",
        answer:
          "Flaking varies with the formula, depth and individual response. The amount of peeling does not tell you how much benefit to expect.",
      },
      {
        question: "Should I ask for the strongest peel I can tolerate?",
        answer:
          "Ask what depth fits the concern and your history. Excessive strength can cause irritation, scarring or dark marks.",
      },
      {
        question: "When can I restart a retinoid?",
        answer:
          "Follow the restart date or recovery signs your provider gives you for the specific peel.",
      },
      {
        question: "How much recovery time should I plan for?",
        answer:
          "Ask about the expected redness and flaking for your exact peel. Recovery varies with depth and can affect when you can return to makeup and other products.",
      },
      {
        question: "Does melasma change the peel plan?",
        answer:
          "It can. Tell the provider about melasma and previous dark marks after irritation so they can assess the risk of worsening pigmentation.",
      },
    ],
    references: [
      {
        title: "AAD: Chemical peel FAQs",
        url: "https://www.aad.org/public/cosmetic/younger-looking/chemical-peels-faqs",
      },
      {
        title: "AAD: Preparing for a chemical peel",
        url: "https://www.aad.org/public/cosmetic/younger-looking/chemical-peels-preparation",
      },
      {
        title: "Mesosystem: MCCM Medical Cosmetics brand information",
        url: "https://www.mesosystem.com/brands",
      },
    ],
    relatedArticles: ["mccm-home-care-after-treatments", "professional-skincare-energy-treatments"],
    relatedTreatments: [{ label: "Facial treatments", href: "/treatments#facials" }],
  },
  {
    slug: "mccm-mesotherapy-solutions",
    title: "MCCM mesotherapy solutions and how they are applied",
    excerpt:
      "Questions to ask about the product, whether needles are involved, and what recovery looks like for the proposed route.",
    category: "mccm-skin-science",
    tags: ["mesotherapy", "hydration", "professional skincare"],
    heroImage: "/images/optimized/treatments/skin-support/brightening-system-editorial.webp",
    heroAlt: "MCCM professional-use formula and packaging detail",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "MCCM mesotherapy solutions and how they are applied",
    metaDescription:
      "Questions to ask about the product, whether needles are involved, and what recovery looks like for the proposed route.",
    keyTakeaways: [
      "Ask what a clinic means by mesotherapy before agreeing to the procedure.",
      "A surface application, microneedling-assisted delivery and injection need separate assessments.",
      "When a procedure crosses the skin barrier, check the product's intended route, sterility and the provider's qualifications.",
    ],
    sections: [
      {
        id: "meaning",
        title: "Clarify the route first",
        paragraphs: [
          "A clinic may use the word mesotherapy for a surface application, use with a device or a series of small injections. Ask which is planned and who will perform it. A product labelled for topical use should not be assumed suitable for microneedling or injection.",
        ],
      },
      {
        id: "ingredients",
        title: "Read the formula in context",
        paragraphs: [
          "A solution may contain humectants, which help hold water, or ingredients such as antioxidants and peptides. A longer ingredient list cannot tell you whether the formula will suit your skin. Ask what the selected product is intended to do and whether its use and route can be verified in the Philippines.",
        ],
      },
      {
        id: "what-to-expect",
        title: "Consent and care for the exact procedure",
        paragraphs: [
          "Before treatment, the provider should check your skin and explain the route, temporary effects and alternatives. If the procedure crosses the skin barrier, ask how the provider prepares it and what sterile products or equipment are used. Get written instructions for the recovery that applies to your procedure.",
        ],
      },
    ],
    beforecare: [
      "Disclose allergies and medicines that affect bleeding. Ask before making changes to any prescription.",
      "Ask whether the plan involves needles and who will use them.",
      "Have irritated or infected skin assessed before proceeding.",
    ],
    aftercare: [
      "Keep the area clean as instructed and limit touching it.",
      "Wait for the advised period before applying makeup or active skincare.",
      "Ask what to do if small bumps or swelling last longer than expected.",
    ],
    unsuitable: [
      "Active infection",
      "An uncontrolled bleeding risk",
      "A known allergy to the proposed product",
    ],
    contactClinic: ["Increasing pain", "Redness that spreads", "Pus or fever", "Severe swelling"],
    faqs: [
      {
        question: "Does mesotherapy always involve injections?",
        answer:
          "The term is used for different procedures. Ask for the specific route before you consent.",
      },
      {
        question: "Who can perform an injection?",
        answer:
          "Ask the clinic to identify the appropriately qualified provider. The requirements depend on professional scope, the product and applicable local rules.",
      },
      {
        question: "Should I expect small bumps afterward?",
        answer:
          "Temporary bumps or swelling depend on the delivery method. Ask what is expected and when to call.",
      },
      {
        question: "Does an ampoule label tell me how it should be applied?",
        answer:
          "Read the specific directions with the provider. The packaging alone gives no basis for choosing an injection or applying it to punctured skin.",
      },
      {
        question: "What if a clinic proposes a mixture of several products?",
        answer:
          "Ask for the name and intended route of each product, and how the provider checks that the combination is appropriate.",
      },
    ],
    references: [
      {
        title: "U.S. FDA: Microneedling device benefits, risks and safety",
        url: "https://www.fda.gov/consumers/consumer-updates/microneedling-devices-getting-point-benefits-risks-and-safety",
      },
      {
        title: "Philippine FDA product verification portal",
        url: "https://verification.fda.gov.ph/",
      },
      {
        title: "MCCM Medical Cosmetics: Serum Solution topical-use directions",
        url: "https://mccmmedicalcosmetics.com/products/serum-solution",
      },
    ],
    relatedArticles: ["pdrn-polynucleotides-guide", "mccm-professional-skincare-guide"],
    relatedTreatments: [
      { label: "Request a professional skin assessment", href: "/appointment-request" },
    ],
  },
  {
    slug: "professional-skincare-energy-treatments",
    title: "Planning skincare around Pico laser, HIFU and other procedures",
    excerpt:
      "How to schedule skincare around laser, HIFU, peels and microneedling, and why recovery determines when to restart actives.",
    category: "mccm-skin-science",
    tags: ["combination treatments", "Pico", "HIFU"],
    heroImage: "/images/optimized/treatments/hifu/hifu-face-treatment.webp",
    heroAlt: "HIFU handpiece positioned along the jawline during treatment",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "Planning skincare around Pico laser, HIFU and other procedures",
    metaDescription:
      "How to schedule skincare around laser, HIFU, peels and microneedling, and why recovery determines when to restart actives.",
    keyTakeaways: [
      "Tell each provider what procedures you have booked or recently had.",
      "Your skin may need a break from strong products after a procedure that disrupts the outer barrier.",
      "Ask for one written recovery plan if more than one procedure is involved.",
    ],
    sections: [
      {
        id: "sequencing",
        title: "Decide which concern to treat first",
        paragraphs: [
          "Pico, fractional laser, HIFU, diode laser, peels and microneedling affect different structures or depths. A schedule that works for one procedure may give skin too little recovery after another. Tell the provider about appointments you already have and agree on which concern takes priority.",
        ],
      },
      {
        id: "barrier",
        title: "Give irritated skin time to recover",
        paragraphs: [
          "The skin barrier is the outer layer that helps keep moisture in and irritants out. If a treatment disturbs it, follow the instructions for cleansing, moisturiser and sun protection. Ask when to restart retinoids, exfoliating acids and fragranced products or schedule another procedure.",
        ],
      },
      {
        id: "what-to-expect",
        title: "Get one plan for the visits",
        paragraphs: [
          "Ask which treatments can be done together and what should wait. The provider considers the intensity, your skin's response and what you can manage at home. If you receive conflicting aftercare instructions, ask the clinician responsible for the combined plan to clarify them.",
        ],
      },
    ],
    beforecare: [
      "List recent procedures and active skincare products.",
      "Ask the provider to review other appointments before scheduling overlapping treatments.",
      "Mention irritation and recent sun exposure.",
    ],
    aftercare: [
      "Follow the recovery instructions for the combined plan. Ask for clarification if the instructions conflict.",
      "Restart actives when the provider confirms your skin is ready.",
      "Protect the treated areas from the sun as advised.",
    ],
    unsuitable: [
      "A damaged or irritated skin barrier",
      "Active infection",
      "Too little recovery time since the previous procedure",
    ],
    contactClinic: [
      "Unexpected blisters",
      "Increasing pain",
      "Marked swelling",
      "Symptoms that worsen after initially settling",
    ],
    faqs: [
      {
        question: "Can I get a peel on the same day as Pico?",
        answer:
          "The answer depends on the laser mode, peel formula and your skin. Have the provider assess the combination before booking.",
      },
      {
        question: "What role can skincare play after HIFU?",
        answer:
          "Surface skincare can help with comfort or dryness. It has a different purpose from the ultrasound treatment.",
      },
      {
        question: "When can I use retinoids again?",
        answer:
          "Follow the timing for the exact procedure and your recovery. Ask the provider if your skin is still sore or peeling at the planned restart.",
      },
      {
        question: "What if I already have a facial scheduled elsewhere?",
        answer:
          "Tell both providers which procedures and products are planned and when. They can advise whether to space the appointments.",
      },
      {
        question: "What if my skin is still peeling on the day of the next visit?",
        answer:
          "Tell the clinic before treatment. The provider can reassess the area and adjust the schedule if the skin is still irritated.",
      },
    ],
    references: [
      {
        title: "Systematic review of picosecond lasers in dermatology",
        url: "https://pubmed.ncbi.nlm.nih.gov/32282094/",
      },
      {
        title: "AAD: Chemical peel FAQs",
        url: "https://www.aad.org/public/cosmetic/younger-looking/chemical-peels-faqs",
      },
      {
        title: "U.S. FDA: Microneedling device benefits, risks and safety",
        url: "https://www.fda.gov/consumers/consumer-updates/microneedling-devices-getting-point-benefits-risks-and-safety",
      },
    ],
    relatedArticles: ["mccm-home-care-after-treatments", "pico-laser-facial-rejuvenation"],
    relatedTreatments: [
      { label: "Pico Glow Face", href: "/treatments/pico-glow-face" },
      { label: "7D HIFU Face", href: "/treatments/7d-hifu-face" },
    ],
  },
  {
    slug: "mccm-home-care-after-treatments",
    title: "Home care after a professional skin treatment",
    excerpt:
      "How to wash and protect recovering skin, when to resume products or exercise, and which reactions need urgent care.",
    category: "mccm-skin-science",
    tags: ["aftercare", "skin barrier", "sunscreen"],
    heroImage: "/images/optimized/clinic/esclare-naga-treatment-room-v2.webp",
    heroAlt: "Prepared ESCLARE treatment room for professional skin care",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "medical-review-required",
    published: false,
    publishedAt: "2026-07-19",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "Home care after a professional skin treatment",
    metaDescription:
      "How to wash and protect recovering skin, when to resume products or exercise, and which reactions need urgent care.",
    keyTakeaways: [
      "Use the written instructions for the exact procedure you had.",
      "Ask which cleanser, moisturiser and sun protection to use while skin is sensitive.",
      "Get help for severe symptoms or a reaction that keeps getting worse.",
    ],
    sections: [
      {
        id: "first-days",
        title: "What to do when you get home",
        paragraphs: [
          "Your skin may feel warm, tight or dry. Use the products approved for this stage and wash gently, following any instructions about when you can get the area wet. Pat dry instead of rubbing. Avoid touching or picking the treated area.",
        ],
      },
      {
        id: "actives",
        title: "When to resume your usual routine",
        paragraphs: [
          "Retinoids, exfoliating acids, scrubs, benzoyl peroxide and strong brightening products can irritate recovering skin. Ask which ones to pause and what signs tell you it is safe to restart. Check before resuming a prescription skin medicine.",
        ],
      },
      {
        id: "what-to-expect",
        title: "Know what recovery should look like",
        paragraphs: [
          "Some procedures cause a few days of redness or dryness, while others leave little visible change. Ask which reactions are expected for yours and when they should settle. If redness spreads, pain increases or fluid drains from the area, contact the clinic for assessment.",
        ],
      },
    ],
    beforecare: [
      "Ask for written instructions before you leave the clinic.",
      "Have the recommended cleanser, moisturiser and sun protection ready.",
      "Check when you can resume exercise, swimming, makeup and activities that expose the skin to heat.",
    ],
    aftercare: [
      "Clean gently and pat dry when the instructions allow.",
      "Use the recommended moisturiser and sun protection.",
      "Avoid steam, friction, scratching and picking until the area has recovered as directed.",
    ],
    unsuitable: [
      "A suspected infection or serious reaction needs medical assessment.",
      "Ask your prescriber before restarting a paused prescription product.",
      "Use the recovery plan for the procedure you had, especially if you were given wound-care instructions.",
    ],
    contactClinic: [
      "Severe or increasing pain",
      "Blistering",
      "Redness that spreads or discharge from the area",
      "Seek emergency care if swelling affects breathing or vision.",
    ],
    faqs: [
      {
        question: "When can I wear makeup again?",
        answer:
          "Ask for the timing for your treatment. Skin that has been punctured or resurfaced may need longer before makeup is safe.",
      },
      {
        question: "Can I work out the next morning?",
        answer:
          "Heat and sweat can irritate skin after some procedures. Follow the timeline your provider gives you.",
      },
      {
        question: "What should I do about loose flakes?",
        answer:
          "Let them fall away naturally. Picking can cause irritation and increase the risk of infection, marks or scars.",
      },
      {
        question: "What should I bring up if the area feels worse after a new product?",
        answer:
          "Tell the clinic the name of the product, when you applied it and how the skin changed. Ask whether to pause it and what to use in the meantime.",
      },
      {
        question: "When can I return to my usual exfoliant?",
        answer:
          "Use the restart timing for the procedure you had. If the skin still stings or is visibly peeling, check with the clinic before adding it back.",
      },
    ],
    references: [
      {
        title: "AAD: Chemical peel FAQs",
        url: "https://www.aad.org/public/cosmetic/younger-looking/chemical-peels-faqs",
      },
      {
        title: "AAD: Laser hair removal FAQs",
        url: "https://www.aad.org/public/cosmetic/hair-removal/laser-hair-removal-faqs",
      },
      {
        title: "U.S. FDA: Microneedling device benefits, risks and safety",
        url: "https://www.fda.gov/consumers/consumer-updates/microneedling-devices-getting-point-benefits-risks-and-safety",
      },
    ],
    relatedArticles: ["mccm-professional-skincare-guide", "mccm-professional-chemical-peels"],
    relatedTreatments: [{ label: "ESCLARE Aftercare Library", href: "/aftercare" }],
  },
  {
    slug: "esthemax-hydrojelly-mask-guide",
    title: "ESTHEMAX HydroJelly Mask during a facial",
    excerpt:
      "How the mask is mixed, what it feels like, and when it may fit into a facial or another clinic treatment.",
    category: "mccm-skin-science",
    tags: [
      "ESTHEMAX",
      "STMAX",
      "HydroJelly",
      "Hydro Jelly",
      "jelly mask",
      "hydrating mask",
      "facial mask",
      "hydration",
      "dry skin",
    ],
    heroImage: "/images/optimized/clinic/esclare-naga-preparation-area-v2.webp",
    heroAlt: "Professional mask preparation area at ESCLARE",
    author: "ESCLARE Editorial Team",
    reviewer: null,
    status: "published",
    published: true,
    publishedAt: "2026-08-09",
    updatedAt: "2026-11-12",
    readingMinutes: 3,
    seoTitle: "ESTHEMAX HydroJelly Mask during a facial",
    metaDescription:
      "How the mask is mixed, what it feels like, and when it may fit into a facial or another clinic treatment.",
    keyTakeaways: [
      "The provider mixes the powder with purified water before application.",
      "The mask sets into a flexible layer that the provider lifts away.",
      "Ingredients vary by formulation, so allergies and recent procedures affect suitability.",
    ],
    sections: [
      {
        id: "introduction",
        title: "What sets into a jelly layer",
        paragraphs: [
          "ESTHEMAX HydroJelly Mask is a professional mask used in selected facial protocols. The powder becomes a soft gel when mixed with purified water. In formulas that contain alginate, that ingredient helps the gel form. Ask which formula the provider plans to use if you have reacted to a mask before.",
        ],
      },
      {
        id: "how-it-works",
        title: "From mixing to removal",
        paragraphs: [
          "The provider mixes the mask just before applying it, spreads it over the selected area and lets it set. The flexible layer keeps the formula in contact with the skin while it is on. After lifting it off, the provider removes residue and applies finishing skincare if appropriate.",
        ],
      },
      {
        id: "experience-benefits",
        title: "How the mask may feel",
        paragraphs: [
          "The layer can feel cool as it sets. Scent and feel vary with the formula. The skin may feel softer, smoother or more hydrated after removal. How long that feeling lasts depends on the skin and the other products used.",
        ],
      },
      {
        id: "suitability",
        title: "When a mask may need to wait",
        paragraphs: [
          "Tell the provider about allergies, recent procedures and previous mask reactions. Open skin, infection or significant irritation needs assessment first. After a laser, peel, microneedling, injection or other procedure, ask whether the selected formula fits the recovery instructions.",
        ],
      },
      {
        id: "after-treatment",
        title: "Which aftercare takes priority?",
        paragraphs: [
          "If the mask is part of a visit with another treatment, follow the aftercare for that procedure first. Ask what moisturiser and daytime sunscreen are suitable and when you can return to your usual products.",
        ],
      },
    ],
    beforecare: [
      "Mention allergies, active irritation, previous mask reactions and anything recently done to the area.",
    ],
    aftercare: [
      "Use the moisturiser and daytime sunscreen recommended for your skin.",
      "If you had a second procedure, follow its recovery instructions.",
    ],
    unsuitable: [
      "A known allergy to a mask ingredient",
      "Open wounds or active infection",
      "Significant inflammation or unusual sensitivity",
    ],
    contactClinic: [
      "Hives",
      "Marked swelling",
      "Burning that persists",
      "An unexpected reaction that worsens",
    ],
    faqs: [
      {
        question: "Is the mask mixed ahead of my visit?",
        answer: "The powder is mixed with purified water shortly before it goes on your skin.",
      },
      {
        question: "Will it feel tight as it sets?",
        answer:
          "It sets into a flexible layer. Many formulas feel cool, but the exact feel and scent vary.",
      },
      {
        question: "Can I add it to my facial?",
        answer:
          "ESCLARE lists it as a ₱350 facial add-on when the provider confirms it fits the facial and your skin assessment.",
      },
      {
        question: "Will I need time off afterward?",
        answer:
          "The mask itself generally requires little downtime. Follow any recovery restrictions for the other treatment you had.",
      },
      {
        question: "Can I choose the mask by fragrance alone?",
        answer:
          "Tell the provider about fragrance sensitivities or past reactions. They can review the ingredients in the specific formula with you.",
      },
    ],
    references: [
      {
        title: "ESTHEMAX Canada: HydroJelly Mask application and removal",
        url: "https://esthemax.ca/faq/",
      },
    ],
    relatedArticles: ["mccm-professional-skincare-guide"],
    relatedTreatments: [
      { label: "ESTHEMAX HydroJelly Mask add-on", href: "/treatments/esthemax-hydrojelly-mask" },
    ],
  },
];

const suppliedArticleSlugs = new Set([
  "diode-laser-hair-removal-guide",
  "pico-laser-facial-pigmentation",
  "why-underarms-become-dark",
  "glp-1-weight-management-programs",
  "tirzepatide-weight-management-guide",
  "pico-laser-facial-rejuvenation",
  "mccm-professional-skincare-guide",
  "exosomes-aesthetic-skincare",
  "pdrn-polynucleotides-guide",
  "vitamin-c-glutathione-brightening",
  "mccm-professional-chemical-peels",
  "mccm-mesotherapy-solutions",
  "professional-skincare-energy-treatments",
  "mccm-home-care-after-treatments",
]);

export const educationArticles: ReadonlyArray<EducationArticle> = educationArticleSource.map(
  (article) =>
    suppliedArticleSlugs.has(article.slug)
      ? { ...article, status: "published", published: true }
      : article,
);

export function getEducationCategory(slug: string) {
  return educationCategories.find((category) => category.slug === slug);
}

export function getEducationArticle(slug: string) {
  return educationArticles.find((article) => article.slug === slug);
}

export function getVisibleEducationArticles(includeDrafts = false) {
  return educationArticles.filter((article) => article.published || includeDrafts);
}

export function getCategoryArticles(category: string, includeDrafts = false) {
  return getVisibleEducationArticles(includeDrafts).filter(
    (article) => article.category === category,
  );
}
