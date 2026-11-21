export interface RestaurantDetails {
  name: string;
  teluguName: string;
  type: string;
  address: string;
  locality: string;
  pincode: string;
  plusCode: string;
  phone: string;
  phoneDisplay: string;
  priceRange: string;
  reviewsCount: number;
  closingTime: string;
  googleMapsUrl: string;
  directionsUrl: string;
  embedMapUrl: string;
  tagline: string;
}

export const RESTAURANT_INFO: RestaurantDetails = {
  name: "Chilies Spot Family Restaurant",
  teluguName: "చిలీస్ స్పాట్ ఫ్యామిలీ రెస్టారెంట్",
  type: "Family Restaurant",
  address: "GRVW+9WF, Yerravaram, Andhra Pradesh 531055, India",
  locality: "Yerravaram, Andhra Pradesh",
  pincode: "531055",
  plusCode: "GRVW+9WF",
  phone: "+919618614321",
  phoneDisplay: "096186 14321",
  priceRange: "₹200–₹400 per person",
  reviewsCount: 836,
  closingTime: "10:30 PM",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Chilies+Spot+Family+Restaurant+Yerravaram+Andhra+Pradesh",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Chilies+Spot+Family+Restaurant+Yerravaram+Andhra+Pradesh",
  // Google Maps iframe embed pointing directly to Chilies Spot Family Restaurant Yerravaram
  embedMapUrl: "https://maps.google.com/maps?q=Chilies+Spot+Family+Restaurant+Yerravaram+Andhra+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed",
  tagline: "GOOD FOOD. GOOD COMPANY. GOOD TIMES.",
};

export const BRAND_PILLARS = [
  {
    title: "Family Dining Experience",
    description: "Comfortable, relaxed seating designed for families, friends, and travelers sharing heartwarming meals together.",
    icon: "Users",
  },
  {
    title: "Honest, Flavorful Fare",
    description: "Freshly prepared dishes balancing regional spices, signature aromatics, and rich culinary traditions.",
    icon: "Flame",
  },
  {
    title: "Highway Haven in Yerravaram",
    description: "Conveniently located for highway travelers and local food lovers seeking a satisfying, wholesome dining stop.",
    icon: "MapPin",
  },
  {
    title: "Accessible Comfort",
    description: "High value dining at ₹200–₹400 per person, ensuring generous portions and welcoming hospitality for every guest.",
    icon: "Sparkles",
  },
];
