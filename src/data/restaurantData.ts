export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: 'starters' | 'mains' | 'curries' | 'breads' | 'thali' | 'drinks' | 'specials';
  categoryNumber: string;
  price: number;
  description: string;
  dietary: 'veg' | 'non-veg';
  spiciness: 'mild' | 'medium' | 'spicy';
  isSignature?: boolean;
  isChefSpecial?: boolean;
  image?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  origin: string;
  rating: number;
  date: string;
  theme: string;
  comment: string;
  highlightDish?: string;
}

export const RESTAURANT_INFO = {
  name: "D Cafe & Kitchen",
  hindiName: "द कैफे & किचन",
  tagline: "FRESH FOOD. WARM PEOPLE. AUTHENTIC FLAVOUR.",
  category: "Restaurant",
  rating: 4.8,
  reviewsCount: 149,
  priceRange: "₹200–₹400 per person",
  phone: "085959 55905",
  phoneRaw: "+918595955905",
  website: "dcafekitchen.com",
  openingHours: "Open · Closes 11 PM",
  hoursDetail: "Daily: 8:00 AM – 11:00 PM",
  locationName: "Tajganj · Agra",
  addressFull: "Ground Floor, No. 618, The Hosteller, 619, Dhandhupura Rd, Tajganj, Basai, Agra, Uttar Pradesh 282001",
  addressShort: "The Hosteller, 619 Dhandhupura Rd, Tajganj, Agra",
  mapsUrl: "https://maps.google.com/?q=D+Cafe+%26+Kitchen+The+Hosteller+Tajganj+Agra+282001",
  services: [
    "Dine-in",
    "Drive-through",
    "No-contact delivery",
    "Online ordering"
  ],
  brandAttributes: [
    "Women-owned",
    "LGBTQ+ friendly",
    "Freshly Prepared to Order",
    "Authentic Indian Spices"
  ]
};

export const MENU_CATEGORIES = [
  { id: 'starters', number: '01', title: 'STARTERS', subtitle: 'Light, crisp and aromatic appetisers' },
  { id: 'mains', number: '02', title: 'INDIAN MAINS', subtitle: 'Rich homestyle comfort dishes' },
  { id: 'curries', number: '03', title: 'CURRIES', subtitle: 'Slow-simmered gravies & Kadai preparations' },
  { id: 'breads', number: '04', title: 'BREADS', subtitle: 'Freshly roasted Tandoori roti & parathas' },
  { id: 'thali', number: '05', title: 'THALI', subtitle: 'A complete balanced Indian feast' },
  { id: 'drinks', number: '06', title: 'DRINKS', subtitle: 'Khullad teas, fresh lassis & coolers' },
  { id: 'specials', number: '07', title: 'SPECIALS', subtitle: 'Handcrafted signature Tajganj recipes' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Hara Bhara Kebab',
    hindiName: 'हरा भरा कबाब',
    category: 'starters',
    categoryNumber: '01',
    price: 210,
    description: 'Crispy spinach, green pea and spiced potato patties infused with roasted cumin, served with fresh mint chutney.',
    dietary: 'veg',
    spiciness: 'mild',
    isSignature: true,
  },
  {
    id: 's2',
    name: 'Paneer Tikka Angara',
    hindiName: 'पनीर टिक्का अंगारा',
    category: 'starters',
    categoryNumber: '01',
    price: 260,
    description: 'Cubes of fresh malai paneer marinated in mustard oil, hung curd and Kashmiri spices, charred over charcoal.',
    dietary: 'veg',
    spiciness: 'medium',
    isSignature: true,
  },
  {
    id: 's3',
    name: 'Crispy Corn Salt & Pepper',
    hindiName: 'क्रिस्पी कॉर्न',
    category: 'starters',
    categoryNumber: '01',
    price: 190,
    description: 'Golden sweet corn tossed with freshly cracked black pepper, curry leaves, ginger, and lime zest.',
    dietary: 'veg',
    spiciness: 'mild',
  },
  {
    id: 's4',
    name: 'Tandoori Soya Chaap',
    hindiName: 'तंदूरी सोया चाप',
    category: 'starters',
    categoryNumber: '01',
    price: 230,
    description: 'Tender soya chaap skewered and roasted with aromatic garam masala and lemon butter glaze.',
    dietary: 'veg',
    spiciness: 'medium',
  },

  // Mains
  {
    id: 'm1',
    name: 'Dal Makhani Velvet',
    hindiName: 'दाल मखनी',
    category: 'mains',
    categoryNumber: '02',
    price: 240,
    description: 'Black lentils slow-cooked overnight with ripe tomatoes, churned butter, and a hint of fenugreek leaves.',
    dietary: 'veg',
    spiciness: 'mild',
    isSignature: true,
  },
  {
    id: 'm2',
    name: 'Paneer Butter Masala',
    hindiName: 'पनीर बटर मसाला',
    category: 'mains',
    categoryNumber: '02',
    price: 270,
    description: 'Fresh cottage cheese simmered in a silky, mildly sweet cashew and ripe tomato gravy with fresh cream.',
    dietary: 'veg',
    spiciness: 'mild',
    isSignature: true,
  },
  {
    id: 'm3',
    name: 'Kadai Paneer Royal',
    hindiName: 'कड़ाही पनीर',
    category: 'mains',
    categoryNumber: '02',
    price: 280,
    description: 'Cottage cheese, crisp bell peppers and onions stir-fried with freshly pounded coriander and red chilies.',
    dietary: 'veg',
    spiciness: 'medium',
  },
  {
    id: 'm4',
    name: 'Yellow Dal Tadka Desi Ghee',
    hindiName: 'पीली दाल तड़का',
    category: 'mains',
    categoryNumber: '02',
    price: 200,
    description: 'Golden arhar lentils tempered with hot cow ghee, whole cumin, garlic cloves, and dried red chilies.',
    dietary: 'veg',
    spiciness: 'mild',
  },

  // Curries
  {
    id: 'c1',
    name: 'Dum Mushroom Masala',
    hindiName: 'दम मशरूम मसाला',
    category: 'curries',
    categoryNumber: '03',
    price: 290,
    description: 'Fresh button mushrooms sealed and slow-cooked in a roasted onion, curd and whole spice gravy. A guest favourite.',
    dietary: 'veg',
    spiciness: 'medium',
    isSignature: true,
    isChefSpecial: true,
  },
  {
    id: 'c2',
    name: 'Chicken Tikka Masala',
    hindiName: 'चिकन टिक्का मसाला',
    category: 'curries',
    categoryNumber: '03',
    price: 340,
    description: 'Smoky clay-oven charred chicken pieces folded into an opulent, aromatic tomato and spiced butter gravy.',
    dietary: 'non-veg',
    spiciness: 'medium',
    isSignature: true,
  },
  {
    id: 'c3',
    name: 'Kadai Mushroom Do Pyaza',
    hindiName: 'कड़ाही मशरूम दो प्याज़ा',
    category: 'curries',
    categoryNumber: '03',
    price: 280,
    description: 'Plump sautéed mushrooms cooked with diced caramelized onions, ground coriander, and green chillies.',
    dietary: 'veg',
    spiciness: 'medium',
  },
  {
    id: 'c4',
    name: 'Homestyle Chicken Curry',
    hindiName: 'होमस्टाइल चिकन करी',
    category: 'curries',
    categoryNumber: '03',
    price: 320,
    description: 'Tender bone-in chicken simmered in an earthy, grandma-style roasted onion and cardamom sauce.',
    dietary: 'non-veg',
    spiciness: 'medium',
  },

  // Breads
  {
    id: 'b1',
    name: 'Amritsari Aloo Paratha (With White Butter)',
    hindiName: 'अमृतसरी आलू पराठा',
    category: 'breads',
    categoryNumber: '04',
    price: 150,
    description: 'Crisp whole-wheat flatbread stuffed with spiced potato and pomegranate seeds, crowned with melting artisanal white butter.',
    dietary: 'veg',
    spiciness: 'mild',
    isSignature: true,
  },
  {
    id: 'b2',
    name: 'Garlic Butter Naan',
    hindiName: 'गार्लिक बटर नान',
    category: 'breads',
    categoryNumber: '04',
    price: 75,
    description: 'Clay-oven baked leavened flatbread brushed with crushed garlic and churned butter.',
    dietary: 'veg',
    spiciness: 'mild',
  },
  {
    id: 'b3',
    name: 'Tandoori Roti (Butter / Plain)',
    hindiName: 'तंदूरी रोटी',
    category: 'breads',
    categoryNumber: '04',
    price: 35,
    description: 'Whole wheat flatbread baked on the fiery clay tandoor walls until puffed and golden.',
    dietary: 'veg',
    spiciness: 'mild',
  },
  {
    id: 'b4',
    name: 'Paneer Stuffed Paratha',
    hindiName: 'पनीर पराठा',
    category: 'breads',
    categoryNumber: '04',
    price: 180,
    description: 'Hand-rolled paratha packed with spiced crumbled paneer, fresh coriander, and carom seeds.',
    dietary: 'veg',
    spiciness: 'mild',
  },
  {
    id: 'b5',
    name: 'Laccha Paratha',
    hindiName: 'लच्छा पराठा',
    category: 'breads',
    categoryNumber: '04',
    price: 65,
    description: 'Multi-layered flaky whole wheat flatbread toasted with ghee.',
    dietary: 'veg',
    spiciness: 'mild',
  },

  // Thali
  {
    id: 't1',
    name: 'D Kitchen Royal Thali',
    hindiName: 'डी किचन रॉयल थाली',
    category: 'thali',
    categoryNumber: '05',
    price: 360,
    description: 'Dal Makhani, Paneer Butter Masala, seasonal vegetable, Jeera Rice, 2 Butter Rotis or 1 Paratha, Boondi Raita, Salad & Gulab Jamun.',
    dietary: 'veg',
    spiciness: 'mild',
    isSignature: true,
    isChefSpecial: true,
  },
  {
    id: 't2',
    name: 'Tajganj Comfort Thali',
    hindiName: 'ताजगंज कम्फर्ट थाली',
    category: 'thali',
    categoryNumber: '05',
    price: 290,
    description: 'Yellow Dal Tadka, Aloo Gobhi / Mix Veg, Steamed Basmati Rice, 3 Tandoori Rotis, Curd, and Fresh Pickle.',
    dietary: 'veg',
    spiciness: 'mild',
  },
  {
    id: 't3',
    name: 'Royal Chicken Thali',
    hindiName: 'रॉयल चिकन थाली',
    category: 'thali',
    categoryNumber: '05',
    price: 390,
    description: 'Homestyle Chicken Curry, Dal Makhani, Jeera Basmati, 2 Tandoori Breads, Raita, and Dessert.',
    dietary: 'non-veg',
    spiciness: 'medium',
  },

  // Drinks
  {
    id: 'd1',
    name: 'Agra Rose Saffron Lassi',
    hindiName: 'आगरा गुलाब केसर लस्सी',
    category: 'drinks',
    categoryNumber: '06',
    price: 140,
    description: 'Thick churned creamy yogurt drink delicately flavored with Damask rose water and Kashmiri saffron strands.',
    dietary: 'veg',
    spiciness: 'mild',
    isSignature: true,
  },
  {
    id: 'd2',
    name: 'Masala Chai Khullad',
    hindiName: 'कुल्हड़ मसाला चाय',
    category: 'drinks',
    categoryNumber: '06',
    price: 60,
    description: 'Freshly brewed strong tea infused with crushed ginger, green cardamom, cloves, and cinnamon, served in an unglazed clay cup.',
    dietary: 'veg',
    spiciness: 'mild',
    isSignature: true,
  },
  {
    id: 'd3',
    name: 'Mint Nimbu Shikanji',
    hindiName: 'पुदीना नींबू शिकंजी',
    category: 'drinks',
    categoryNumber: '06',
    price: 90,
    description: 'Sparkling lemonade spiced with roasted cumin, black rock salt, and bruised fresh garden mint leaves.',
    dietary: 'veg',
    spiciness: 'mild',
  },
  {
    id: 'd4',
    name: 'Cardamom Cold Coffee',
    hindiName: 'इलायची कोल्ड कॉफी',
    category: 'drinks',
    categoryNumber: '06',
    price: 150,
    description: 'Creamy blended iced espresso with a whisper of green cardamom essence and vanilla cream.',
    dietary: 'veg',
    spiciness: 'mild',
  },

  // Specials
  {
    id: 'sp1',
    name: 'Handi Matka Mushroom Masala',
    hindiName: 'हांडी मटका मशरूम',
    category: 'specials',
    categoryNumber: '07',
    price: 310,
    description: 'Whole button mushrooms slow-baked in an earthenware pot sealed with dough, concentrating deep earth and smoke aromas.',
    dietary: 'veg',
    spiciness: 'medium',
    isChefSpecial: true,
  },
  {
    id: 'sp2',
    name: 'Tawa Paneer Khurchan',
    hindiName: 'तवा पनीर खुरचन',
    category: 'specials',
    categoryNumber: '07',
    price: 295,
    description: 'Shredded paneer and caramelized onions scraped on an iron tawa with tangy tomato reduction and pickled chili.',
    dietary: 'veg',
    spiciness: 'medium',
    isChefSpecial: true,
  },
  {
    id: 'sp3',
    name: 'D Special Murgh Dum Handi',
    hindiName: 'डी स्पेशल मुर्ग दम हांडी',
    category: 'specials',
    categoryNumber: '07',
    price: 370,
    description: 'Chef’s special marinated chicken cooked on gentle dum with crushed peppercorns, mace, and cashews.',
    dietary: 'non-veg',
    spiciness: 'medium',
    isChefSpecial: true,
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'r1',
    author: 'Aarav Malhotra',
    origin: 'Delhi, India',
    rating: 5,
    date: 'Recent Guest',
    theme: 'Warmth & Curries',
    comment: 'The warmth of the staff here is genuine. The curries taste like they were made in a loving home kitchen rather than a commercial restaurant. The mushroom dish and garlic naan are unforgettable.',
    highlightDish: 'Dum Mushroom Masala'
  },
  {
    id: 'r2',
    author: 'Elena & Lucas',
    origin: 'Backpackers via The Hosteller',
    rating: 5,
    date: 'Recent Guest',
    theme: 'Authentic Comfort Food',
    comment: 'After a long day exploring Agra and the Taj Mahal, finding D Cafe & Kitchen on the ground floor was a blessing. The Aloo Paratha served with real white butter is the most comforting thing I have had in India.',
    highlightDish: 'Amritsari Aloo Paratha'
  },
  {
    id: 'r3',
    author: 'Priyanka Sharma',
    origin: 'Agra Local Resident',
    rating: 5,
    date: 'Regular Diner',
    theme: 'Cleanliness & Quality',
    comment: 'Very clean, comfortable ambiance with a modern, relaxed aesthetic. The staff is exceptionally cooperative and sweet. The Royal Thali is fantastic value for money with high quality ingredients.',
    highlightDish: 'D Kitchen Royal Thali'
  },
  {
    id: 'r4',
    author: 'Marcus Vance',
    origin: 'London, UK',
    rating: 5,
    date: 'Solo Traveler',
    theme: 'Welcoming Atmosphere',
    comment: 'As a solo traveler, you immediately notice how respectful, welcoming and attentive the team is. The Chicken Tikka Masala had deep flavor without being excessively greasy. 10/10 recommendation.',
    highlightDish: 'Chicken Tikka Masala'
  },
  {
    id: 'r5',
    author: 'Neha Verma',
    origin: 'Jaipur, India',
    rating: 5,
    date: 'Family Visit',
    theme: 'Freshly Prepared Food',
    comment: 'Everything was served steaming hot and prepared fresh from scratch. You can tell they use fresh spices rather than pre-made bases. Wonderful women-led hospitality.',
    highlightDish: 'Dal Makhani Velvet'
  }
];
