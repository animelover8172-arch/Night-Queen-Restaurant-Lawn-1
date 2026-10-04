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

// New Premium Menu Item Images
import paneerTikkaImg from '../assets/images/paneer_tikka_1791122949245.jpg';
import chilliPaneerClassicImg from '../assets/images/chilli_paneer_classic_1791122959829.jpg';
import chickenTikkaImg from '../assets/images/chicken_tikka_1791122970464.jpg';
import chickenChilliImg from '../assets/images/chicken_chilli_1791122981290.jpg';
import chickenLolipopImg from '../assets/images/chicken_lollipop_1791122992014.jpg';
import frenchFriesImg from '../assets/images/french_fries_1791123005044.jpg';
import crispyChilliPotatoImg from '../assets/images/crispy_chilli_potato_1791123016528.jpg';
import paneerButterMasalaImg from '../assets/images/paneer_butter_masala_1791123184567.jpg';
import kadhaiPaneerImg from '../assets/images/kadhai_paneer_1791123195820.jpg';
import shahiPaneerImg from '../assets/images/shahi_paneer_1791123029669.jpg';
import yellowDalTadkaImg from '../assets/images/yellow_dal_tadka_1791123041306.jpg';
import dalMakhaniImg from '../assets/images/dal_makhani_1791123208168.jpg';
import butterChickenImg from '../assets/images/butter_chicken_1791123145943.jpg';
import chickenTikkaMasalaImg from '../assets/images/chicken_tikka_masala_1791123051722.jpg';
import chickenCurryImg from '../assets/images/chicken_curry_1791123062275.jpg';
import muttonRoganJoshImg from '../assets/images/mutton_rogan_josh_1791123233305.jpg';
import jeeraRiceImg from '../assets/images/jeera_rice_1791123074394.jpg';
import chickenBiryaniImg from '../assets/images/chicken_biryani_1791123157979.jpg';
import vegBiryaniImg from '../assets/images/veg_biryani_1791123086225.jpg';
import tandooriRotiImg from '../assets/images/tandoori_roti_1791123097506.jpg';
import butterNaanImg from '../assets/images/butter_garlic_naan_1791123170464.jpg';
import lacchaParathaImg from '../assets/images/laccha_paratha_1791123111247.jpg';
import coldCoffeeImg from '../assets/images/cold_coffee_1791123121873.jpg';
import virginMojitoImg from '../assets/images/virgin_mojito_1791123220514.jpg';
import gulabJamunIceCreamImg from '../assets/images/gulab_jamun_ice_cream_1791123132378.jpg';

export const restaurantConfig: RestaurantConfig = {
  name: "Night Queen Restaurant & Lawn",
  hindiName: "नाइट क्वीन रेस्टोरेंट & लॉन",
  tagline: "Where Every Meal Becomes a Memory",
  category: "Premium Restaurant & Lawn",
  rating: "4.4",
  reviewCount: "69+",
  phone: "+919973186420",
  displayPhone: "+91 99731 86420",
  phoneNumbers: [
    {
      number: "+919973186420",
      display: "+91 99731 86420",
      label: "Main Desk"
    },
    {
      number: "+919122657448",
      display: "+91 91226 57448",
      label: "Direct Line"
    },
    {
      number: "+919162365100",
      display: "+91 91623 65100",
      label: "Support & Orders"
    }
  ],
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
  // STARTERS / APPETIZERS — VEG & NON-VEG
  {
    id: "starters-paneer-tikka",
    name: "Paneer Tikka",
    hindiName: "पनीर टिक्का",
    category: "STARTERS",
    subCategory: "Starters & Appetizers",
    description: "Tender cottage cheese cubes marinated in hung curd, freshly ground aromatic herbs, and roasted in clay tandoor with charred capsicum and onions.",
    price: "₹239 / ₹269 / ₹279 / ₹289",
    image: paneerTikkaImg,
    isChefSpecial: true,
    isPopular: true,
    isVeg: true
  },
  {
    id: "starters-chilli-paneer-classic",
    name: "Chilli Paneer Classic",
    hindiName: "चिल्ली पनीर क्लासिक",
    category: "STARTERS",
    subCategory: "Starters & Appetizers",
    description: "Crispy fried cottage cheese wok-tossed in signature spicy Indo-Chinese dark soy glaze, crunchy bell peppers, and scallions.",
    price: "₹239",
    image: chilliPaneerClassicImg,
    isPopular: true,
    isSpicy: true,
    isVeg: true
  },
  {
    id: "starters-chicken-tikka",
    name: "Chicken Tikka",
    hindiName: "चिकन टिक्का",
    category: "STARTERS",
    subCategory: "Starters & Appetizers",
    description: "Succulent boneless chicken morsels steeped in spiced Kashmiri red chili marinade and grilled to juicy, smoky perfection.",
    price: "₹259 / ₹289 / ₹299",
    image: chickenTikkaImg,
    isChefSpecial: true,
    isPopular: true,
    isSpicy: true,
    isVeg: false
  },
  {
    id: "starters-chicken-chilli",
    name: "Chicken Chilli",
    hindiName: "चिकन चिल्ली",
    category: "STARTERS",
    subCategory: "Starters & Appetizers",
    description: "Crispy chicken pieces tossed in pungent garlic chili sauce with crisp diced bell peppers and slit green chilies.",
    price: "₹249 / ₹269 / ₹279",
    image: chickenChilliImg,
    isSpicy: true,
    isVeg: false
  },
  {
    id: "starters-chicken-lolipop",
    name: "Chicken Lolipop",
    hindiName: "चिकन लॉलीपॉप",
    category: "STARTERS",
    subCategory: "Starters & Appetizers",
    description: "Crisp-fried frenched chicken winglets tossed in savory Schezwan glaze, served with gourmet dipping sauce.",
    price: "₹259 / ₹289",
    image: chickenLolipopImg,
    isChefSpecial: true,
    isPopular: true,
    isSpicy: true,
    isVeg: false
  },
  {
    id: "starters-french-fries",
    name: "French Fries",
    hindiName: "फ्रेंच फ्राइज़",
    category: "STARTERS",
    subCategory: "Starters & Appetizers",
    description: "Golden crispy potato batons fried to light crunchy perfection, seasoned with fine sea salt and served with tangy dips.",
    price: "₹99",
    image: frenchFriesImg,
    isVeg: true
  },
  {
    id: "starters-crispy-chilli-potato",
    name: "Crispy Chilli Potato",
    hindiName: "क्रिस्पी चिल्ली पोटैटो",
    category: "STARTERS",
    subCategory: "Starters & Appetizers",
    description: "Crispy fried finger potatoes coated with honey chili garlic sauce, garnished with toasted sesame seeds and fresh spring onions.",
    price: "₹179",
    image: crispyChilliPotatoImg,
    isSpicy: true,
    isVeg: true
  },

  // VEG MAIN COURSE
  {
    id: "veg-main-paneer-butter-masala",
    name: "Paneer Butter Masala",
    hindiName: "पनीर बटर मसाला",
    category: "VEG",
    subCategory: "Veg Main Course",
    description: "Silky soft paneer cubes simmered in a velvety tomato and cashew nut gravy, finished with fresh butter and fenugreek leaves.",
    price: "₹269 / ₹279",
    image: paneerButterMasalaImg,
    isChefSpecial: true,
    isPopular: true,
    isVeg: true
  },
  {
    id: "veg-main-kadhai-paneer",
    name: "Kadhai Paneer",
    hindiName: "कड़ाही पनीर",
    category: "VEG",
    subCategory: "Veg Main Course",
    description: "Cottage cheese and crisp bell peppers tossed in a traditional iron wok with coarsely crushed coriander seeds and roasted spices.",
    price: "₹269",
    image: kadhaiPaneerImg,
    isSpicy: true,
    isVeg: true
  },
  {
    id: "veg-main-shahi-paneer",
    name: "Shahi Paneer",
    hindiName: "शाही पनीर",
    category: "VEG",
    subCategory: "Veg Main Course",
    description: "Royal cottage cheese prepared in an opulent white cashew, melon seed and saffron gravy with delicate royal spices.",
    price: "₹259",
    image: shahiPaneerImg,
    isPopular: true,
    isVeg: true
  },
  {
    id: "veg-main-yellow-dal-tadka",
    name: "Yellow Dal Tadka",
    hindiName: "येलो दाल तड़का",
    category: "VEG",
    subCategory: "Veg Main Course",
    description: "Comforting yellow lentils tempered with golden desi ghee, roasted cumin, garlic cloves, and aromatic Kashmiri chilies.",
    price: "₹119 / ₹129",
    image: yellowDalTadkaImg,
    isVeg: true
  },
  {
    id: "veg-main-dal-makhani",
    name: "Dal Makhani",
    hindiName: "दाल मखनी",
    category: "VEG",
    subCategory: "Veg Main Course",
    description: "Slow-simmered whole black lentils and kidney beans cooked overnight over charcoal with churned butter and organic cream.",
    price: "₹199 / ₹249",
    image: dalMakhaniImg,
    isChefSpecial: true,
    isPopular: true,
    isVeg: true
  },

  // NON-VEG MAIN COURSE
  {
    id: "nonveg-main-butter-chicken",
    name: "Butter Chicken / Chicken Butter Masala",
    hindiName: "बटर चिकन / चिकन बटर मसाला",
    category: "NON-VEG",
    subCategory: "Non-Veg Main Course",
    description: "Tender tandoori chicken cooked in a rich, buttery satin tomato-makhani sauce infused with aromatic spices and cream.",
    price: "₹310 / ₹319",
    image: butterChickenImg,
    isChefSpecial: true,
    isPopular: true,
    isVeg: false
  },
  {
    id: "nonveg-main-chicken-tikka-masala",
    name: "Chicken Tikka Masala",
    hindiName: "चिकन टिक्का मसाला",
    category: "NON-VEG",
    subCategory: "Non-Veg Main Course",
    description: "Clay-oven charred boneless chicken pieces immersed in a deeply spiced, robust onion-tomato masala gravy.",
    price: "₹270 / ₹309",
    image: chickenTikkaMasalaImg,
    isSpicy: true,
    isVeg: false
  },
  {
    id: "nonveg-main-chicken-curry",
    name: "Chicken Curry",
    hindiName: "चिकन करी",
    category: "NON-VEG",
    subCategory: "Non-Veg Main Course",
    description: "Classic homestyle chicken stewed tender in a fragrant spiced onion-ginger-garlic gravy with whole roasted spices.",
    price: "₹249 / ₹269",
    image: chickenCurryImg,
    isVeg: false
  },
  {
    id: "nonveg-main-mutton-rogan-josh",
    name: "Mutton Rogan Josh",
    hindiName: "मटन रोगन जोश",
    category: "NON-VEG",
    subCategory: "Non-Veg Main Course",
    description: "Authentic Kashmiri tender braised mutton slow-cooked in fragrant red gravy with ratan jot, fennel, and whole spices.",
    price: "₹399",
    image: muttonRoganJoshImg,
    isChefSpecial: true,
    isPopular: true,
    isSpicy: true,
    isVeg: false
  },

  // RICE & BIRYANI
  {
    id: "rice-jeera-rice",
    name: "Jeera Rice",
    hindiName: "जीरा राइस",
    category: "RICE",
    subCategory: "Rice & Biryani",
    description: "Fluffy aged basmati rice tempered with aromatic roasted cumin seeds, pure desi ghee, and fresh coriander.",
    price: "₹119 / ₹139",
    image: jeeraRiceImg,
    isVeg: true
  },
  {
    id: "rice-chicken-biryani",
    name: "Chicken Biryani / Hydrabadi Chicken Biryani",
    hindiName: "चिकन बिरयानी / हैदराबादी चिकन बिरयानी",
    category: "RICE",
    subCategory: "Rice & Biryani",
    description: "Dum-cooked royal basmati rice layered with succulent marinated chicken, saffron milk, fried golden onions, and mint.",
    price: "₹239 / ₹299",
    image: chickenBiryaniImg,
    isChefSpecial: true,
    isPopular: true,
    isSpicy: true,
    isVeg: false
  },
  {
    id: "rice-veg-biryani",
    name: "Veg Biryani",
    hindiName: "वेज बिरयानी",
    category: "RICE",
    subCategory: "Rice & Biryani",
    description: "Fragrant saffron long-grain basmati rice layered with garden-fresh vegetables, paneer chunks, brown onions, and spices.",
    price: "₹199 / ₹209",
    image: vegBiryaniImg,
    isVeg: true
  },

  // BREADS
  {
    id: "breads-tandoori-roti",
    name: "Tandoori Roti / Butter Roti",
    hindiName: "तंदूरी रोटी / बटर रोटी",
    category: "BREADS",
    subCategory: "Breads",
    description: "Traditional whole-wheat flatbread freshly baked against hot tandoor clay walls, served plain or brushed with churned butter.",
    price: "₹15 / ₹20",
    image: tandooriRotiImg,
    isVeg: true
  },
  {
    id: "breads-butter-naan",
    name: "Butter Naan / Garlic Naan",
    hindiName: "बटर नान / गार्लिक नान",
    category: "BREADS",
    subCategory: "Breads",
    description: "Pillowy refined flour bread baked in tandoor, lavishly brushed with melted butter or crushed fresh garlic and coriander.",
    price: "₹35 / ₹49",
    image: butterNaanImg,
    isPopular: true,
    isVeg: true
  },
  {
    id: "breads-laccha-paratha",
    name: "Laccha Paratha",
    hindiName: "लच्छा पराठा",
    category: "BREADS",
    subCategory: "Breads",
    description: "Crispy, multi-layered spiral flatbread prepared with fine layers and pure ghee, baked crisp in clay oven.",
    price: "₹59",
    image: lacchaParathaImg,
    isVeg: true
  },

  // BEVERAGES & DESSERTS
  {
    id: "beverages-cold-coffee",
    name: "Cold Coffee",
    hindiName: "कोल्ड कॉफ़ी",
    category: "MOCKTAILS",
    subCategory: "Beverages & Desserts",
    description: "Rich blended espresso cold coffee served chilled with chocolate swirl and thick frothy crown.",
    price: "₹109",
    image: coldCoffeeImg,
    isPopular: true,
    isVeg: true
  },
  {
    id: "beverages-virgin-mojito",
    name: "Virgin Mojito",
    hindiName: "वर्जिन मोहीत",
    category: "MOCKTAILS",
    subCategory: "Beverages & Desserts",
    description: "Crisp and invigorating mocktail muddled with freshly plucked mint leaves, crushed ice, lime wheels, and effervescent soda.",
    price: "₹129",
    image: virginMojitoImg,
    isChefSpecial: true,
    isPopular: true,
    isVeg: true
  },
  {
    id: "desserts-gulab-jamun-ice-cream",
    name: "Gulab Jamun With Ice Cream",
    hindiName: "गुलाब जामुन विथ आइसक्रीम",
    category: "DESSERTS",
    subCategory: "Beverages & Desserts",
    description: "Warm, syrup-soaked golden khoya gulab jamuns served alongside a chilled scoop of velvety vanilla bean ice cream and pistachios.",
    price: "₹69",
    image: gulabJamunIceCreamImg,
    isChefSpecial: true,
    isPopular: true,
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
