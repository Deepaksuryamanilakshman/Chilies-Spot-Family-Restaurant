/**
 * NOTE: The items below represent an editable menu presentation template.
 * They are sample placeholders for website demonstration and structure.
 * They should be updated with verified in-house offerings and current prices
 * when provided by the restaurant management.
 */

export interface MenuItem {
  id: string;
  name: string;
  teluguName?: string;
  category: 'starters' | 'main-course' | 'rice-biryani' | 'vegetarian' | 'non-vegetarian' | 'beverages';
  description: string;
  priceSample: string;
  dietary: 'veg' | 'non-veg';
  spiceLevel: 1 | 2 | 3; // 1: Mild, 2: Medium, 3: Hot/Spicy
  tag?: string;
  isSamplePlaceholder: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  teluguLabel: string;
  description: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'all',
    label: 'Full Showcase',
    teluguLabel: 'అన్ని విభాగాలు',
    description: 'Explore our complete sample dining collection crafted for shared family meals.',
  },
  {
    id: 'starters',
    label: 'Starters & Appetizers',
    teluguLabel: 'స్టార్టర్స్',
    description: 'Crisp, fiery, and aromatic starters designed to kickstart your dining journey.',
  },
  {
    id: 'rice-biryani',
    label: 'Biryani & Rice',
    teluguLabel: 'బిర్యానీ & రైస్',
    description: 'Slow-simmered basmati rice infused with layered spices, saffron, and tender cuts.',
  },
  {
    id: 'main-course',
    label: 'Main Course Curries',
    teluguLabel: 'మెయిన్ కోర్స్ కర్రీస్',
    description: 'Rich, fragrant gravies slow-cooked with freshly grounded regional masalas.',
  },
  {
    id: 'vegetarian',
    label: 'Vegetarian Specialties',
    teluguLabel: 'శాకాహార వంటకాలు',
    description: 'Wholesome paneer, fresh farm vegetables, and classic Indian spiced gravies.',
  },
  {
    id: 'non-vegetarian',
    label: 'Non-Vegetarian Specialties',
    teluguLabel: 'మాంసాహార వంటకాలు',
    description: 'Hearty chicken, mutton, and coastal-style delicacies prepared with authentic heat.',
  },
  {
    id: 'beverages',
    label: 'Coolers & Beverages',
    teluguLabel: 'పానీయాలు',
    description: 'Refreshing traditional coolers and sodas to balance the lively spices.',
  },
];

export const SAMPLE_MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: 's-1',
    name: 'Chilies Special Chicken Roast',
    teluguName: 'చిలీస్ స్పెషల్ చికెన్ రోస్ట్',
    category: 'starters',
    description: 'Tender chicken morsels tossed in crushed red chilies, roasted curry leaves, and coastal garlic paste.',
    priceSample: '₹260',
    dietary: 'non-veg',
    spiceLevel: 3,
    tag: 'Signature Spice',
    isSamplePlaceholder: true,
  },
  {
    id: 's-2',
    name: 'Crispy Pepper Paneer Tikka',
    teluguName: 'క్రిస్పీ పెప్పర్ పన్నీర్ టిక్కా',
    category: 'starters',
    description: 'Fresh cottage cheese cubes marinated with cracked black pepper, hung curd, and grilled to golden perfection.',
    priceSample: '₹220',
    dietary: 'veg',
    spiceLevel: 2,
    tag: 'Popular',
    isSamplePlaceholder: true,
  },
  {
    id: 's-3',
    name: 'Andhra Guntur Chili Wings',
    teluguName: 'గుంటూరు మిర్చి వింగ్స్',
    category: 'starters',
    description: 'Crispy fried wings tossed in a punchy Guntur chili glaze with toasted coriander and lime zest.',
    priceSample: '₹270',
    dietary: 'non-veg',
    spiceLevel: 3,
    tag: 'Fiery Pick',
    isSamplePlaceholder: true,
  },
  {
    id: 's-4',
    name: 'Golden Crispy Corn Kernels',
    teluguName: 'క్రిస్పీ కార్న్',
    category: 'starters',
    description: 'Sweet corn kernels flash-fried with spring onions, green chilies, and tangy chaat masala.',
    priceSample: '₹190',
    dietary: 'veg',
    spiceLevel: 1,
    isSamplePlaceholder: true,
  },

  // RICE & BIRYANI
  {
    id: 'b-1',
    name: 'Special Dum Chicken Biryani',
    teluguName: 'స్పెషల్ దమ్ చికెన్ బిర్యానీ',
    category: 'rice-biryani',
    description: 'Aromatic aged basmati rice cooked on slow dum with marinated chicken, saffron milk, fried onions, and whole spices.',
    priceSample: '₹290',
    dietary: 'non-veg',
    spiceLevel: 2,
    tag: 'Crowd Favorite',
    isSamplePlaceholder: true,
  },
  {
    id: 'b-2',
    name: 'Paneer Makhani Biryani',
    teluguName: 'పన్నీర్ మఖనీ బిర్యానీ',
    category: 'rice-biryani',
    description: 'Layered fragrant basmati rice tossed with spiced cottage cheese cubes, fresh mint, and mild saffron drizzle.',
    priceSample: '₹250',
    dietary: 'veg',
    spiceLevel: 1,
    isSamplePlaceholder: true,
  },
  {
    id: 'b-3',
    name: 'Spicy Gongura Chicken Biryani',
    teluguName: 'గోంగూర చికెన్ బిర్యానీ',
    category: 'rice-biryani',
    description: 'Authentic Andhra sour sorrel (gongura) leaves blended into spicy basmati rice with juicy chicken.',
    priceSample: '₹310',
    dietary: 'non-veg',
    spiceLevel: 3,
    tag: 'Andhra Specialty',
    isSamplePlaceholder: true,
  },
  {
    id: 'b-4',
    name: 'Jeera Ghee Rice with Dal Tadka',
    teluguName: 'జీరా రైస్ విత్ పప్పు తాలింపు',
    category: 'rice-biryani',
    description: 'Steamed premium rice tempered with pure desi ghee and cumin seeds, served alongside rich tempered lentils.',
    priceSample: '₹210',
    dietary: 'veg',
    spiceLevel: 1,
    isSamplePlaceholder: true,
  },

  // MAIN COURSE
  {
    id: 'm-1',
    name: 'Rich Butter Chicken Masala',
    teluguName: 'బటర్ చికెన్ మసాలా',
    category: 'main-course',
    description: 'Smoked tandoori chicken simmered in a velvety tomato, cashew cream gravy finished with fenugreek leaves.',
    priceSample: '₹280',
    dietary: 'non-veg',
    spiceLevel: 1,
    tag: 'Classic',
    isSamplePlaceholder: true,
  },
  {
    id: 'm-2',
    name: 'Royal Shahi Paneer Korma',
    teluguName: 'షాహీ పన్నీర్ కుర్మా',
    category: 'main-course',
    description: 'Soft paneer batons gently stewed in a mildly spiced royal almond and melon seed gravy with green cardamom.',
    priceSample: '₹260',
    dietary: 'veg',
    spiceLevel: 1,
    isSamplePlaceholder: true,
  },
  {
    id: 'm-3',
    name: 'Andhra Country Style Chicken Curry',
    teluguName: 'ఆంధ్రా నాటుకోడి శైలి కర్రీ',
    category: 'main-course',
    description: 'Rustic, robust home-style chicken curry infused with fresh shallots, ginger, garlic, and fiery red chili paste.',
    priceSample: '₹290',
    dietary: 'non-veg',
    spiceLevel: 3,
    tag: 'Authentic',
    isSamplePlaceholder: true,
  },
  {
    id: 'm-4',
    name: 'Kadai Mixed Farm Vegetables',
    teluguName: 'కడాయి వెజిటబుల్స్',
    category: 'main-course',
    description: 'Garden-fresh bell peppers, baby corn, green beans, and carrots wok-tossed in freshly ground coriander and red chilies.',
    priceSample: '₹230',
    dietary: 'veg',
    spiceLevel: 2,
    isSamplePlaceholder: true,
  },

  // VEGETARIAN
  {
    id: 'v-1',
    name: 'Methi Chaman Paneer',
    teluguName: 'మేథీ చమన్ పన్నీర్',
    category: 'vegetarian',
    description: 'Grated and cubed cottage cheese tossed with fresh tender fenugreek leaves in a creamy spinach gravy.',
    priceSample: '₹250',
    dietary: 'veg',
    spiceLevel: 2,
    isSamplePlaceholder: true,
  },
  {
    id: 'v-2',
    name: 'Dal Makhani Slow-Simmered',
    teluguName: 'దాల్ మఖనీ',
    category: 'vegetarian',
    description: 'Whole black urad lentils slow-cooked overnight with churned butter and fresh cream over a gentle simmer.',
    priceSample: '₹210',
    dietary: 'veg',
    spiceLevel: 1,
    tag: 'Slow Simmered',
    isSamplePlaceholder: true,
  },

  // NON-VEGETARIAN
  {
    id: 'nv-1',
    name: 'Mutton Sukka Fry',
    teluguName: 'మటన్ సుక్కా ఫ్రై',
    category: 'non-vegetarian',
    description: 'Slow-roasted tender bone-in mutton dry-roasted with caramelized shallots, black pepper, and curry leaves.',
    priceSample: '₹360',
    dietary: 'non-veg',
    spiceLevel: 3,
    tag: 'Chef Choice',
    isSamplePlaceholder: true,
  },
  {
    id: 'nv-2',
    name: 'Tandoori Murgh (Half/Full)',
    teluguName: 'తందూరి చికెన్',
    category: 'non-vegetarian',
    description: 'Traditional bone-in chicken steeped in mustard oil, Kashmiri chili, and yoghurt, charred in the clay oven.',
    priceSample: '₹290',
    dietary: 'non-veg',
    spiceLevel: 2,
    isSamplePlaceholder: true,
  },

  // BEVERAGES
  {
    id: 'b-bev-1',
    name: 'Chilled Spiced Buttermilk (Majjiga)',
    teluguName: 'మజ్జిగ (స్పైస్డ్ బటర్‌మిల్క్)',
    category: 'beverages',
    description: 'Whisked fresh curd churned with crushed ginger, green chilies, curry leaves, and roasted cumin salt.',
    priceSample: '₹60',
    dietary: 'veg',
    spiceLevel: 1,
    tag: 'Cooling',
    isSamplePlaceholder: true,
  },
  {
    id: 'b-bev-2',
    name: 'Fresh Mint & Lime Soda',
    teluguName: 'పుదీనా లెమన్ సోడా',
    category: 'beverages',
    description: 'Bubbly club soda blended with freshly hand-pressed lime juice, crushed garden mint, and black rock salt.',
    priceSample: '₹80',
    dietary: 'veg',
    spiceLevel: 1,
    isSamplePlaceholder: true,
  },
];
