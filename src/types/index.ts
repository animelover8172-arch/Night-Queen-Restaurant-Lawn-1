export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: 'VEG' | 'NON-VEG' | 'INDIAN' | 'CHINESE' | 'DESSERTS' | 'MOCKTAILS' | 'STARTERS' | 'BREADS' | 'RICE';
  subCategory?: string;
  description: string;
  price: string;
  image: string;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVeg: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ALL' | 'INTERIOR' | 'FOOD' | 'OUTDOOR' | 'LAWN' | 'DINING';
  image: string;
  caption?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  date: string;
  visitType?: string;
  review: string;
  verified?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  hindiTitle?: string;
  description: string;
  image: string;
  tag: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface RestaurantConfig {
  name: string;
  hindiName: string;
  tagline: string;
  category: string;
  rating: string;
  reviewCount: string;
  phone: string;
  displayPhone: string;
  phoneNumbers: {
    number: string;
    display: string;
    label?: string;
  }[];
  whatsappNumber: string;
  displayWhatsapp: string;
  address: {
    line1: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    plusCode: string;
    fullAddress: string;
  };
  mapsUrl: string;
  mapsEmbedUrl: string;
  openingHours: {
    status: string;
    closingTime: string;
    days: string;
    hoursDisplay: string;
  };
  services: string[];
  features: string[];
  socialLinks: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
  developer: {
    name: string;
    role: string;
    whatsapp: string;
    whatsappDisplay: string;
    phone: string;
    phoneDisplay: string;
    email: string;
  };
}
