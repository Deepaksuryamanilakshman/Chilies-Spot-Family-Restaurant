export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'dishes' | 'ambiance' | 'spices' | 'experience';
  caption: string;
  aspect?: 'tall' | 'wide' | 'square';
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g-1',
    url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80',
    title: 'Aromatic Dum Biryani',
    category: 'dishes',
    caption: 'Long grain fragrant basmati infused with saffron, fried onions, and regional whole spices.',
    aspect: 'wide',
  },
  {
    id: 'g-2',
    url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    title: 'Tandoori Sizzle & Grills',
    category: 'dishes',
    caption: 'Clay-oven fired chicken steeped in fiery chilies, roasted coriander, and fresh lemon.',
    aspect: 'tall',
  },
  {
    id: 'g-3',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    title: 'Warm Welcoming Dining Hall',
    category: 'ambiance',
    caption: 'Comfortable family dining spaces bathed in warm ambient lighting.',
    aspect: 'wide',
  },
  {
    id: 'g-4',
    url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    title: 'Rich Butter Chicken Simmer',
    category: 'dishes',
    caption: 'Velvety slow-simmered tomato and cream reduction accented with fenugreek.',
    aspect: 'square',
  },
  {
    id: 'g-5',
    url: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    title: 'Whole Dried Chilies & Spices',
    category: 'spices',
    caption: 'The vibrant heart of regional flavor: stone-ground whole red chilies and aromatics.',
    aspect: 'tall',
  },
  {
    id: 'g-6',
    url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    title: 'Crispy Starters & Samosas',
    category: 'dishes',
    caption: 'Golden crispy appetizers prepared fresh to order for family sharing.',
    aspect: 'square',
  },
  {
    id: 'g-7',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    title: 'Shared Table Moments',
    category: 'experience',
    caption: 'Conversations, laughter, and full plates around the family table.',
    aspect: 'wide',
  },
  {
    id: 'g-8',
    url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    title: 'Paneer Tikka & Herb Dip',
    category: 'dishes',
    caption: 'Charred cottage cheese skewered with fresh bell peppers and red onions.',
    aspect: 'square',
  },
];
