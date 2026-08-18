import { RestaurantConfig, MenuItem, GalleryItem, ReviewItem, ExperienceItem, WhyUsItem } from '../types';
import expImg1 from '../assets/images/regenerated_image_1786871661794.png';
import expImg2 from '../assets/images/regenerated_image_1786871682140.png';
import expImg3 from '../assets/images/regenerated_image_1786871696941.png';
import expImg4 from '../assets/images/regenerated_image_1786871709573.png';
import expImg5 from '../assets/images/regenerated_image_1786871718600.png';
import galleryImg1 from '../assets/images/regenerated_image_1786872739474.png';
import galleryImg2 from '../assets/images/regenerated_image_1786872854696.png';
import menuImg14 from '../assets/images/regenerated_image_1786872610442.jpg';
import momentImg1 from '../assets/images/file_000000008ea08211840b59c4cfd1e0b0.png';
import momentImg2 from '../assets/images/file_0000000007648208991c2b15360aed39.png';
import momentImg3 from '../assets/images/file_000000003a188211bcf59440c6edab5c.png';
import momentImg4 from '../assets/images/file_00000000afe48211960b2df7d77dd48c.png';
import momentImg5 from '../assets/images/file_00000000bc4082118f302aee9761e9f2.png';

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
    line1: "Ara Patna Road",
    locality: "Baijla",
    city: "Sasaram",
    state: "Bihar",
    pincode: "821113",
    country: "India",
    plusCode: "X2MC+84, Sasaram, Bihar",
    fullAddress: "Ara Patna Road, Baijla, Sasaram, Bihar 821113, India"
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Night+Queen+Restaurant+%26+Lawn+Baijla+Sasaram+Bihar",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115535.79255745487!2d83.94508492025219!3d24.95475960000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398dc371b63ff2f9%3A0xe5a14db64585c9a7!2sNight%20Queen%20Restaurant%20%26%20Lawn!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
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
    description: "Convenient gourmet dining when you prefer to dine at home or pick up fresh delicacies on the go along Ara-Patna Road.",
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
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1625938144755-652e08e359b7?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80",
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
    image: menuImg14,
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
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80",
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
    image: momentImg1,
    caption: "Magnificent tiered circular ceiling installations with ambient concentric LED halo illumination and crystal chandeliers for royal gatherings."
  },
  {
    id: "g-11",
    title: "Grand Evening Entrance & Lawn View",
    category: "OUTDOOR",
    image: momentImg2,
    caption: "Awe-inspiring illuminated exterior and entrance walkway welcoming guests to Night Queen Restaurant & Lawn."
  },
  {
    id: "g-12",
    title: "Enchanting Lawn Garden & Evening Cabanas",
    category: "LAWN",
    image: momentImg3,
    caption: "Lush green lawn seating under the open night sky with ambient party lights and festive celebration setup."
  },
  {
    id: "g-13",
    title: "Celebration Stage & Event Buffet Setup",
    category: "INTERIOR",
    image: momentImg4,
    caption: "Festive floral arches, grand sofa seating, and long buffet counters ready for lavish banquets and receptions."
  },
  {
    id: "g-14",
    title: "Starlit Lawn Dinners & Open-Air Celebrations",
    category: "LAWN",
    image: momentImg5,
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
    review: "The architectural facade and lighting look luxurious from Ara Patna Road. Ample parking space, clean hygienic seating, and quick service. Dum Biryani was full of aroma and authentic taste. Highly recommended for highway travelers and locals alike.",
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
