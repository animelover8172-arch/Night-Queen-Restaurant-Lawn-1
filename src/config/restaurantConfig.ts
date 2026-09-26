import { RestaurantConfig, MenuItem, GalleryItem, ReviewItem, ExperienceItem, WhyUsItem } from '../types';
import expImg1 from '../assets/images/regenerated_image_1786871661794.png';
import expImg2 from '../assets/images/regenerated_image_1786871682140.png';
import expImg3 from '../assets/images/regenerated_image_1786871696941.png';
import expImg4 from '../assets/images/regenerated_image_1786871709573.png';
import expImg5 from '../assets/images/regenerated_image_1786871718600.png';
import galleryImg1 from '../assets/images/regenerated_image_1786872739474.png';
import galleryImg2 from '../assets/images/regenerated_image_1786872854696.png';
import galleryImg3 from '../assets/images/banquet_hall_view_1786873047089.jpg';
import galleryImg4 from '../assets/images/regenerated_image_1786871661794.png';
import galleryImg5 from '../assets/images/regenerated_image_1786871682140.png';
import galleryImg6 from '../assets/images/regenerated_image_1786871696941.png';
import galleryImg7 from '../assets/images/regenerated_image_1786871709573.png';
import paneerButterMasalaImg from '../assets/images/paneer_butter_masala_1790176705016.jpg';
import murghDumBiryaniImg from '../assets/images/murgh_dum_biryani_1790176718610.jpg';
import dalMakhaniRoyalImg from '../assets/images/dal_makhani_royal_1790176731091.jpg';
import chickenTikkaPlatterImg from '../assets/images/chicken_tikka_platter_1790176743607.jpg';
import kadhaiPaneerImg from '../assets/images/kadai_paneer_curry_1790176183184.jpg';
import muttonRoganJoshImg from '../assets/images/mutton_rogan_josh_1790176754285.jpg';
import crispyChilliPaneerImg from '../assets/images/crispy_chilli_paneer_1790176764994.jpg';
import vegHakkaNoodlesImg from '../assets/images/veg_hakka_noodles_1790176196282.jpg';
import crispyChilliChickenImg from '../assets/images/crispy_chilli_chicken_1790176776697.jpg';
import signatureBlueLagoonImg from '../assets/images/signature_blue_lagoon_1790176788937.jpg';
import freshMintMojitoImg from '../assets/images/fresh_mint_mojito_1790176802595.jpg';
import mangoPassionCoolerImg from '../assets/images/mango_passion_cooler_1790176207511.jpg';
import sizzlingBrownieImg from '../assets/images/sizzling_brownie_sundae_1790176218325.jpg';
import royalGulabJamunImg from '../assets/images/royal_gulab_jamun_1790176230816.jpg';
import butterGarlicNaanImg from '../assets/images/butter_garlic_naan_1790176241528.jpg';

export const restaurantConfig: RestaurantConfig = {
  name: "Night Queen Restaurant & Lawn",
  hindiName: "नाइट क्वीन रेस्टोरेंट & लॉन",
  tagline: "Where Every Meal Becomes a Memory",
  category: "Premium Restaurant & Lawn",
  rating: "4.4",
  reviewCount: "69+",
  phone: "+919973186420",
  displayPhone: "+91 99731 86420",
  whatsappNumber: "919973186420",
  displayWhatsapp: "+91 99731 86420",
  address: {
    line1: "Kali Asthan Mandir Chowk",
    locality: "Near CMC",
    city: "Sasaram",
    state: "Bihar",
    pincode: "821115",
    country: "India",
    plusCode: "",
    fullAddress: "Kali Asthan Mandir Chowk, Near CMC"
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kali+Asthan+Mandir+Chowk+Near+CMC+Sasaram",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Kali+Asthan+Mandir+Chowk,+Near+CMC,+Sasaram&t=&z=16&ie=UTF8&iwloc=&output=embed",
  openingHours: {
    status: "Open Daily",
    closingTime: "Closes 11:00 PM",
    days: "Monday – Sunday",
    hoursDisplay: "11:00 AM – 11:00 PM"
  },
  services: [
    "Dine-in Experience",
    "Drive-through",
    "No-contact Delivery",
    "Lawn Celebrations & Parties",
    "Family Dining Hall",
    "Private Themed Booths"
  ],
  features: [
    "All-You-Can-Eat Buffets",
    "Lush Outdoor Lawn Seating",
    "Cozy Atmospheric Fireplace",
    "Signature Mocktail Bar",
    "Architectural Illuminated Facade",
    "Ample Secure Parking"
  ],
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/919973186420"
  },
  developer: {
    name: "RoadsideDeveloper",
    role: "Website Design & Development",
    whatsapp: "https://wa.me/917654224826",
    whatsappDisplay: "+91 7654224826",
    phone: "tel:+918405918172",
    phoneDisplay: "+91 8405918172",
    email: "roadsidedev143@gmail.com"
  }
};

export const experiencesData: ExperienceItem[] = [
  {
    id: "outdoor-seating",
    title: "Outdoor Seating",
    hindiTitle: "ओपन एयर डाइनिंग",
    description: "Enjoy dining in a beautiful open-air environment with gentle evening breeze, ambient lighting, and personalized service.",
    image: expImg1,
    tag: "Open-Air Luxury"
  },
  {
    id: "grand-lawn",
    title: "Spacious Lawn",
    hindiTitle: "विशाल हरा-भरा लॉन",
    description: "A sprawling manicured open lawn venue suitable for grand family gatherings, birthday celebrations, receptions, and memorable evenings.",
    image: expImg2,
    tag: "Events & Celebrations"
  },
  {
    id: "atmospheric-fireplace",
    title: "Cozy Fireplace",
    hindiTitle: "फायरप्लेस एम्बियंस",
    description: "Warm and atmospheric evenings surrounded by subtle glowing fire features, handcrafted mocktails, and rich culinary aromatics.",
    image: expImg3,
    tag: "Warm Ambiance"
  },
  {
    id: "family-dining",
    title: "Family Dining & Private Booths",
    hindiTitle: "पारिवारिक डाइनिंग",
    description: "Comfortable, spacious surroundings with plush seating and privacy for family dinners, romantic couples, and group reunions.",
    image: expImg4,
    tag: "Plush Comfort"
  },
  {
    id: "all-you-can-eat",
    title: "All You Can Eat",
    hindiTitle: "असीमित दावत",
    description: "A deeply satisfying dining experience for guests who cherish culinary variety, featuring rich royal gravies, live breads, and starters.",
    image: expImg5,
    tag: "Unlimited Feast"
  },
  {
    id: "no-contact-delivery",
    title: "No-Contact Delivery & Drive-Through",
    hindiTitle: "होम डिलीवरी & ड्राइव-थ्रू",
    description: "Convenient gourmet dining when you prefer to dine at home or pick up fresh delicacies on the go at Kali Asthan Mandir Chowk, Near CMC.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=80",
    tag: "Express Service"
  }
];

export const whyChooseUsData: WhyUsItem[] = [
  {
    id: "fresh-ingredients",
    title: "Fresh Ingredients",
    description: "Quality ingredients procured daily and prepared with utmost care and authentic regional spices.",
    iconName: "Leaf"
  },
  {
    id: "experienced-chefs",
    title: "Experienced Chefs",
    description: "Master culinary artists who craft every dish with deep passion, precise balance, and rich traditional flavor.",
    iconName: "ChefHat"
  },
  {
    id: "hygienic-kitchen",
    title: "Hygienic Kitchen",
    description: "Spotless, sanitized kitchen adhering to strict food safety protocols and clean cooking standards.",
    iconName: "ShieldCheck"
  },
  {
    id: "fast-service",
    title: "Fast & Attentive Service",
    description: "Courteous, prompt hospitality ensuring your food arrives hot, fresh, and served with a genuine smile.",
    iconName: "Clock"
  },
  {
    id: "premium-dining",
    title: "Premium Ambiance",
    description: "An awe-inspiring illuminated facade, grand chandeliers, and acoustic elegance for cherished moments.",
    iconName: "Sparkles"
  },
  {
    id: "multiple-options",
    title: "Multiple Service Options",
    description: "Seamless choices: Dine-in in our grand halls, relax on the open lawn, drive-through, or no-contact delivery.",
    iconName: "UtensilsCrossed"
  }
];

export const menuItemsData: MenuItem[] = [
  // INDIAN SPECIALTIES
  {
    id: "m-1",
    name: "Paneer Butter Masala",
    hindiName: "पनीर बटर मसाला",
    category: "INDIAN",
    subCategory: "Main Course",
    description: "Fresh cottage cheese cubes simmered in a velvety, buttery tomato and cashew gravy with aromatic kasuri methi.",
    price: 260,
    image: paneerButterMasalaImg,
    isChefSpecial: true,
    isPopular: true,
    isVeg: true
  },
  {
    id: "m-2",
    name: "Dum Handi Murgh Biryani",
    hindiName: "दम हांडी मुर्ग बिरयानी",
    category: "NON-VEG",
    subCategory: "Biryani & Rice",
    description: "Fragrant long-grain basmati rice layered with tender marinated chicken, saffron, caramelised onions, and royal spices.",
    price: 320,
    image: murghDumBiryaniImg,
    isChefSpecial: true,
    isPopular: true,
    isSpicy: true,
    isVeg: false
  },
  {
    id: "m-3",
    name: "Dal Makhani Royal",
    hindiName: "दाल मखनी रॉयल",
    category: "VEG",
    subCategory: "Lentils",
    description: "Black lentils slow-cooked overnight over charcoal, finished with churned butter and fresh organic cream.",
    price: 220,
    image: dalMakhaniRoyalImg,
    isPopular: true,
    isVeg: true
  },
  {
    id: "m-4",
    name: "Tandoori Chicken Tikka Platter",
    hindiName: "तंदूरी चिकन टिक्का",
    category: "NON-VEG",
    subCategory: "Tandoor Starters",
    description: "Succulent boneless chicken chunks marinated in hung curd, Kashmiri red chillies, and roasted tandoori spices.",
    price: 340,
    image: chickenTikkaPlatterImg,
    isChefSpecial: true,
    isPopular: true,
    isSpicy: true,
    isVeg: false
  },
  {
    id: "m-5",
    name: "Kadhai Paneer Special",
    hindiName: "कड़ाही पनीर",
    category: "VEG",
    subCategory: "Main Course",
    description: "Cottage cheese tossed with crunchy bell peppers, whole coriander, dried chillies, and freshly ground kadhai masala.",
    price: 250,
    image: kadhaiPaneerImg,
    isSpicy: true,
    isVeg: true
  },
  {
    id: "m-6",
    name: "Mutton Rogan Josh",
    hindiName: "मटन रोगन जोश",
    category: "NON-VEG",
    subCategory: "Main Course",
    description: "Tender goat meat slow-braised in a rich gravy infused with Kashmiri cockscomb flower, fennel, and ginger.",
    price: 420,
    image: muttonRoganJoshImg,
    isChefSpecial: true,
    isVeg: false
  },
  // CHINESE DISHES
  {
    id: "m-7",
    name: "Crispy Chilli Paneer Dry",
    hindiName: "चिल्ली पनीर",
    category: "CHINESE",
    subCategory: "Starters",
    description: "Golden fried paneer tossed with bell peppers, spring onions, dark soya sauce, and fresh green chillies.",
    price: 240,
    image: crispyChilliPaneerImg,
    isPopular: true,
    isSpicy: true,
    isVeg: true
  },
  {
    id: "m-8",
    name: "Veg Hakka Noodles & Manchurian",
    hindiName: "वेज हक्का नूडल्स & मंचूरियन",
    category: "CHINESE",
    subCategory: "Noodles & Rice",
    description: "Wok-tossed noodles with shredded farm vegetables served alongside crispy vegetable dumplings in savoury gravy.",
    price: 210,
    image: vegHakkaNoodlesImg,
    isVeg: true
  },
  {
    id: "m-9",
    name: "Crispy Chilli Chicken",
    hindiName: "चिल्ली चिकन",
    category: "CHINESE",
    subCategory: "Starters",
    description: "Crisp-fried chicken morsels glazed in sweet & spicy garlic soy sauce with cracked black pepper.",
    price: 290,
    image: crispyChilliChickenImg,
    isSpicy: true,
    isVeg: false
  },
  // MOCKTAILS & BEVERAGES
  {
    id: "m-10",
    name: "Night Queen Signature Blue Lagoon",
    hindiName: "नाइट क्वीन ब्लू लैगून",
    category: "MOCKTAILS",
    subCategory: "Mocktail Bar",
    description: "Refreshing blend of blue curacao syrup, sparkling citrus soda, fresh mint leaves, and lime wheel.",
    price: 150,
    image: signatureBlueLagoonImg,
    isChefSpecial: true,
    isPopular: true,
    isVeg: true
  },
  {
    id: "m-11",
    name: "Fresh Mint Mojito",
    hindiName: "फ्रेश मिंट मोहीत",
    category: "MOCKTAILS",
    subCategory: "Mocktail Bar",
    description: "Muddled garden mint, hand-pressed lime juice, crushed ice, and effervescent sparkling water.",
    price: 130,
    image: freshMintMojitoImg,
    isVeg: true
  },
  {
    id: "m-12",
    name: "Mango Passion Sunset Cooler",
    hindiName: "मैंगो पैशन कूलर",
    category: "MOCKTAILS",
    subCategory: "Mocktail Bar",
    description: "Tropical Alphonso mango puree blended with passion fruit, crushed ice, and a dash of grenadine.",
    price: 160,
    image: mangoPassionCoolerImg,
    isChefSpecial: true,
    isVeg: true
  },
  // DESSERTS
  {
    id: "m-13",
    name: "Sizzling Brownie with Vanilla Ice Cream",
    hindiName: "सिज़लिंग ब्राउनी",
    category: "DESSERTS",
    subCategory: "Desserts",
    description: "Rich dark chocolate walnut brownie served sizzling hot on a cast-iron platter, crowned with rich vanilla gelato and hot fudge.",
    price: 190,
    image: sizzlingBrownieImg,
    isChefSpecial: true,
    isPopular: true,
    isVeg: true
  },
  {
    id: "m-14",
    name: "Royal Gulab Jamun with Rabri",
    hindiName: "गुलाब जामुन विथ रबड़ी",
    category: "DESSERTS",
    subCategory: "Desserts",
    description: "Warm golden khoya dumplings soaked in saffron-cardamom syrup, served over chilled slow-reduced pistachios rabri.",
    price: 140,
    image: royalGulabJamunImg,
    isPopular: true,
    isVeg: true
  },
  {
    id: "m-15",
    name: "Butter Garlic Naan & Kulcha",
    hindiName: "बटर गार्लिक नान",
    category: "INDIAN",
    subCategory: "Breads",
    description: "Fluffy leavened tandoor bread brushed generously with pure butter, crushed fresh garlic, and toasted coriander.",
    price: 60,
    image: butterGarlicNaanImg,
    isVeg: true
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: "g-1",
    title: "Grand Illuminated Facade & Sculpture",
    category: "OUTDOOR",
    image: galleryImg1,
    caption: "The majestic architectural entrance of Night Queen Restaurant & Lawn illuminated with royal evening lights."
  },
  {
    id: "g-2",
    title: "The Signature Mocktails Vibes Bar",
    category: "INTERIOR",
    image: galleryImg2,
    caption: "Curved wooden bar counter with ambient neon glow and premium handcrafted drinks display."
  },
  {
    id: "g-10",
    title: "Royal Banquet Suite & Neon Halo Lighting",
    category: "INTERIOR",
    image: galleryImg3,
    caption: "Magnificent tiered circular ceiling installations with ambient concentric LED halo illumination and crystal chandeliers for royal gatherings."
  },
  {
    id: "g-11",
    title: "Grand Evening Entrance & Lawn View",
    category: "OUTDOOR",
    image: galleryImg4,
    caption: "Awe-inspiring illuminated exterior and entrance walkway welcoming guests to Night Queen Restaurant & Lawn."
  },
  {
    id: "g-12",
    title: "Enchanting Lawn Garden & Evening Cabanas",
    category: "LAWN",
    image: galleryImg5,
    caption: "Lush green lawn seating under the open night sky with ambient party lights and festive celebration setup."
  },
  {
    id: "g-13",
    title: "Celebration Stage & Event Buffet Setup",
    category: "INTERIOR",
    image: galleryImg6,
    caption: "Festive floral arches, grand sofa seating, and long buffet counters ready for lavish banquets and receptions."
  },
  {
    id: "g-14",
    title: "Starlit Lawn Dinners & Open-Air Celebrations",
    category: "LAWN",
    image: galleryImg7,
    caption: "Serene open-air lawn ambiance with warm twinkling lights for unhurried dinners and celebratory moments."
  }
];

export const customerReviewsData: ReviewItem[] = [
  {
    id: "r-1",
    name: "Ritesh Kumar Singh",
    rating: 5,
    date: "Verified Google Review",
    visitType: "Family Dinner & Celebration",
    review: "Night Queen has completely redefined the dining scene in Sasaram. The lawn atmosphere at night is truly breathtaking. The Paneer Butter Masala and Chicken Tikka were served piping hot and tasted superb. Excellent hospitality by the staff.",
    verified: true
  },
  {
    id: "r-2",
    name: "Pooja Srivastava",
    rating: 5,
    date: "Verified Google Review",
    visitType: "Birthday Gathering",
    review: "We hosted my daughter's birthday dinner in the lawn section. The lighting, table arrangements, and sound ambiance were top notch. The mocktails at the bar are very refreshing. Truly Sasaram's premier family restaurant.",
    verified: true
  },
  {
    id: "r-3",
    name: "Md. Tariq Anwar",
    rating: 5,
    date: "Verified Google Review",
    visitType: "Dinner with Friends",
    review: "The architectural facade and lighting look luxurious from Kali Asthan Mandir Chowk. Ample parking space, clean hygienic seating, and quick service. Dum Biryani was full of aroma and authentic taste. Highly recommended for travelers and locals alike.",
    verified: true
  },
  {
    id: "r-4",
    name: "Anand Vardhan",
    rating: 4,
    date: "Verified Google Review",
    visitType: "Couples Dining",
    review: "The themed private booths offer great comfort and intimacy. Love the warm lighting and interior design. Service was polite and food was freshly cooked. 4.4 rating is well deserved!",
    verified: true
  },
  {
    id: "r-5",
    name: "Sunita Devi",
    rating: 5,
    date: "Verified Google Review",
    visitType: "Family Get-together",
    review: "Spacious lawn where kids can play freely while elders enjoy great food and gentle music. Pure quality food, reasonable pricing, and clean atmosphere. Will visit again soon.",
    verified: true
  }
];
