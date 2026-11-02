// Mock Data for Multi-Vendor Marketplace (Student 2: Product Catalogue & Search)
// Contains 10 distinct categories with exactly 10 products in each category (100 total products)
import { Product, SellerInfo } from '../models/product.model';

export const MOCK_SELLERS: SellerInfo[] = [
  {
    "id": "seller-1",
    "name": "ElectroVibe Stores",
    "rating": 4.9,
    "salesCount": 3840,
    "isVerified": true,
    "location": "San Jose, CA",
    "badge": "Top Tech Seller"
  },
  {
    "id": "seller-2",
    "name": "SonicWave Audio",
    "rating": 4.8,
    "salesCount": 2190,
    "isVerified": true,
    "location": "Austin, TX",
    "badge": "Audio Specialist"
  },
  {
    "id": "seller-3",
    "name": "Urban Threads Co.",
    "rating": 4.7,
    "salesCount": 4520,
    "isVerified": true,
    "location": "Brooklyn, NY",
    "badge": "Trending Fashion"
  },
  {
    "id": "seller-4",
    "name": "Nordic Living Goods",
    "rating": 4.9,
    "salesCount": 1640,
    "isVerified": true,
    "location": "Seattle, WA",
    "badge": "Eco & Home Choice"
  },
  {
    "id": "seller-5",
    "name": "Apex Activewear & Gear",
    "rating": 4.6,
    "salesCount": 1890,
    "isVerified": true,
    "location": "Denver, CO",
    "badge": "Pro Athlete Rated"
  },
  {
    "id": "seller-6",
    "name": "PageTurners Bookshop",
    "rating": 4.9,
    "salesCount": 970,
    "isVerified": true,
    "location": "Boston, MA",
    "badge": "Verified Publisher"
  },
  {
    "id": "seller-7",
    "name": "GlowBotanicals Organic",
    "rating": 4.8,
    "salesCount": 2850,
    "isVerified": true,
    "location": "Portland, OR",
    "badge": "Clean Beauty Certified"
  },
  {
    "id": "seller-8",
    "name": "PixelPlay Gaming & Toys",
    "rating": 4.7,
    "salesCount": 3120,
    "isVerified": true,
    "location": "Los Angeles, CA",
    "badge": "Gamer Trusted"
  },
  {
    "id": "seller-9",
    "name": "MotoCraft Performance & Tools",
    "rating": 4.9,
    "salesCount": 1470,
    "isVerified": true,
    "location": "Detroit, MI",
    "badge": "Master Mechanic Grade"
  },
  {
    "id": "seller-10",
    "name": "Aurum & Stone Artisans",
    "rating": 4.9,
    "salesCount": 1980,
    "isVerified": true,
    "location": "New York, NY",
    "badge": "Fine Craft Guild"
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    "id": "prod-1",
    "name": "UltraWide 34-Inch Curved QHD Gaming Monitor",
    "tagline": "165Hz Refresh Rate, 1ms Response Time, HDR400 IPS Panel",
    "description": "Immerse yourself in panoramic visuals with the 1500R curved ultra-wide gaming monitor. Boasting a 3440 x 1440 resolution, 99% sRGB color gamut, and AMD FreeSync Premium Pro, it delivers tear-free gaming and expansive desktop productivity.",
    "price": 449,
    "originalPrice": 529,
    "discountPercent": 15,
    "category": "Electronics & Gadgets",
    "brand": "ElectroVibe Pro",
    "seller": {
      "id": "seller-1",
      "name": "ElectroVibe Stores",
      "rating": 4.9,
      "salesCount": 3840,
      "isVerified": true,
      "location": "San Jose, CA",
      "badge": "Top Tech Seller"
    },
    "rating": 4.8,
    "reviewsCount": 210,
    "stock": 18,
    "sku": "ELE-SELLER1-001",
    "imageUrl": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "3440 x 1440 WQHD 21:9 ultrawide immersion",
      "165Hz refresh rate with 1ms response time",
      "1500R curvature matched to human vision",
      "USB-C 65W Power Delivery and dual HDMI 2.1"
    ],
    "specifications": {
      "Screen Size": "34 Inches",
      "Panel": "Fast IPS",
      "Resolution": "3440 x 1440",
      "Refresh Rate": "165Hz"
    },
    "tags": [
      "Monitor",
      "Ultrawide",
      "Gaming",
      "IPS"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "createdAt": "2026-01-11T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-1-1",
        "userName": "Verified Buyer 8",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from ElectroVibe Stores",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "prod-2",
    "name": "Custom Mechanical Hot-Swappable 75% Wireless Keyboard",
    "tagline": "Gasket Mounted, Pre-Lubed Linear Switches, Aluminum Top Case",
    "description": "Engineered for typing enthusiasts and programmers. Features a dampening silicone gasket mount, factory-lubricated mechanical switches, hot-swappable sockets, PBT dye-sub keycaps, and triple-mode connectivity.",
    "price": 139,
    "originalPrice": 169,
    "discountPercent": 18,
    "category": "Electronics & Gadgets",
    "brand": "ElectroVibe",
    "seller": {
      "id": "seller-1",
      "name": "ElectroVibe Stores",
      "rating": 4.9,
      "salesCount": 3840,
      "isVerified": true,
      "location": "San Jose, CA",
      "badge": "Top Tech Seller"
    },
    "rating": 4.9,
    "reviewsCount": 412,
    "stock": 25,
    "sku": "ELE-SELLER1-002",
    "imageUrl": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Gasket mount structure with sound-absorbing foam",
      "Hot-swappable 3-pin & 5-pin MX switches",
      "South-facing RGB backlighting",
      "Rotary multimedia knob for volume control"
    ],
    "specifications": {
      "Layout": "75% Compact",
      "Keycaps": "PBT Dye-Sub",
      "Connectivity": "2.4Ghz / BT / USB-C"
    },
    "tags": [
      "Keyboard",
      "Mechanical",
      "Wireless",
      "Hot-swap"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-12T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-2-1",
        "userName": "Verified Buyer 15",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from ElectroVibe Stores",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 11
      }
    ]
  },
  {
    "id": "prod-3",
    "name": "Precision Wireless Ergonomic Vertical Mouse",
    "tagline": "57-Degree Natural Posture Angle with Silent Magnetic Clickers",
    "description": "Reduce wrist strain and forearm muscle fatigue with this ergonomic vertical design. Boasts high-precision 4000 DPI optical sensor, hyper-fast scrolling wheel, and 3-device cross-computer flow switching.",
    "price": 69.99,
    "originalPrice": 89.99,
    "discountPercent": 22,
    "category": "Electronics & Gadgets",
    "brand": "ElectroVibe Ergo",
    "seller": {
      "id": "seller-1",
      "name": "ElectroVibe Stores",
      "rating": 4.9,
      "salesCount": 3840,
      "isVerified": true,
      "location": "San Jose, CA",
      "badge": "Top Tech Seller"
    },
    "rating": 4.7,
    "reviewsCount": 156,
    "stock": 32,
    "sku": "ELE-SELLER1-003",
    "imageUrl": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "57-degree natural handshake posture angle",
      "4000 DPI precision sensor tracks on glass",
      "Dual Bluetooth 5.2 and 2.4GHz wireless dongle",
      "Rechargeable 500mAh battery lasts 4 months"
    ],
    "specifications": {
      "DPI": "400-4000 DPI",
      "Weight": "135g",
      "Battery": "Rechargeable Li-Po"
    },
    "tags": [
      "Mouse",
      "Ergonomic",
      "Wireless",
      "Productivity"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-13T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-3-1",
        "userName": "Verified Buyer 22",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from ElectroVibe Stores",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-4",
    "name": "Pro Dual 4K Thunderbolt 4 Docking Station",
    "tagline": "14-in-1 Hub with 96W Host Charging and 40Gbps Transfer",
    "description": "Transform a single laptop port into an enterprise workstation. Drives dual 4K 60Hz or single 8K displays with SD 4.0 card reader, 2.5G Gigabit Ethernet, and multiple 10Gbps USB-C ports.",
    "price": 189,
    "originalPrice": 229,
    "discountPercent": 17,
    "category": "Electronics & Gadgets",
    "brand": "ElectroVibe Dock",
    "seller": {
      "id": "seller-1",
      "name": "ElectroVibe Stores",
      "rating": 4.9,
      "salesCount": 3840,
      "isVerified": true,
      "location": "San Jose, CA",
      "badge": "Top Tech Seller"
    },
    "rating": 4.8,
    "reviewsCount": 174,
    "stock": 15,
    "sku": "ELE-SELLER1-004",
    "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Thunderbolt 4 certified 40Gbps bandwidth",
      "96W dynamic host power delivery",
      "Dual 4K @ 60Hz HDMI & DisplayPort outputs",
      "Solid aluminum thermal heatsink chassis"
    ],
    "specifications": {
      "Ports": "14 Ports Total",
      "Ethernet": "2.5Gbps RJ45",
      "Power Delivery": "96 Watts"
    },
    "tags": [
      "Docking Station",
      "Thunderbolt",
      "USB-C",
      "Workstation"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-14T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-4-1",
        "userName": "Verified Buyer 29",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from ElectroVibe Stores",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 17
      }
    ]
  },
  {
    "id": "prod-5",
    "name": "Smart Mirrorless 4K Vlogging & Photography Camera",
    "tagline": "24.2 MP Full-Frame Sensor, 5-Axis IBIS & Real-Time Eye AF",
    "description": "Capture cinematic 4K 60p footage and high-resolution stills with zero crop. Features class-leading real-time subject tracking autofocus, fully articulating touchscreen, and dual high-speed UHS-II card slots.",
    "price": 1199,
    "originalPrice": 1399,
    "discountPercent": 14,
    "category": "Electronics & Gadgets",
    "brand": "ElectroVision",
    "seller": {
      "id": "seller-1",
      "name": "ElectroVibe Stores",
      "rating": 4.9,
      "salesCount": 3840,
      "isVerified": true,
      "location": "San Jose, CA",
      "badge": "Top Tech Seller"
    },
    "rating": 4.9,
    "reviewsCount": 94,
    "stock": 6,
    "sku": "ELE-SELLER1-005",
    "imageUrl": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "24.2MP full-frame Exmor CMOS image sensor",
      "In-body 5-axis image stabilization (up to 5.5 stops)",
      "Uncropped 4K 60p 10-bit 4:2:2 internal recording",
      "AI-powered human and animal Eye-AF tracking"
    ],
    "specifications": {
      "Resolution": "24.2 Megapixels",
      "Video": "4K 60fps 10-bit",
      "Lens Mount": "E-Mount"
    },
    "tags": [
      "Camera",
      "Photography",
      "4K",
      "Mirrorless"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-15T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-5-1",
        "userName": "Verified Buyer 36",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from ElectroVibe Stores",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 20
      }
    ]
  },
  {
    "id": "prod-6",
    "name": "Ultra-Slim 11-Inch OLED Tablet with Stylus Pen",
    "tagline": "120Hz ProMotion Display, Snapdragon 8 Gen 3, Quad Stereo Audio",
    "description": "Create, stream, and multitask on a vibrant 2.8K OLED canvas. Includes magnetic active stylus with 4096 levels of pressure sensitivity and 12-hour high-efficiency battery life.",
    "price": 499,
    "originalPrice": 599,
    "discountPercent": 17,
    "category": "Electronics & Gadgets",
    "brand": "ElectroVibe Slate",
    "seller": {
      "id": "seller-1",
      "name": "ElectroVibe Stores",
      "rating": 4.9,
      "salesCount": 3840,
      "isVerified": true,
      "location": "San Jose, CA",
      "badge": "Top Tech Seller"
    },
    "rating": 4.7,
    "reviewsCount": 182,
    "stock": 20,
    "sku": "ELE-SELLER1-006",
    "imageUrl": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "11-inch 2.8K 120Hz OLED vibrant panel",
      "Low-latency active stylus with palm rejection included",
      "Quad Dolby Atmos stereo speaker array",
      "Fast 45W charging fills 80% in 35 minutes"
    ],
    "specifications": {
      "Display": "11\" OLED 120Hz",
      "RAM/Storage": "12GB / 256GB",
      "Battery": "8,400 mAh"
    },
    "tags": [
      "Tablet",
      "OLED",
      "Stylus",
      "Portable"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-16T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-6-1",
        "userName": "Verified Buyer 43",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from ElectroVibe Stores",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": "prod-7",
    "name": "Foldable 4K HDR GPS Drone with 3-Axis Gimbal",
    "tagline": "Level 5 Wind Resistance, 38-Min Flight Time & 12km Video Transmission",
    "description": "Weighing under 249g for registration-free flight. Equipped with 1/1.3-inch CMOS sensor, true vertical shooting for social media, omnidirectional obstacle sensors, and smart Return-to-Home.",
    "price": 429,
    "originalPrice": 499,
    "discountPercent": 14,
    "category": "Electronics & Gadgets",
    "brand": "AeroVibe Tech",
    "seller": {
      "id": "seller-1",
      "name": "ElectroVibe Stores",
      "rating": 4.9,
      "salesCount": 3840,
      "isVerified": true,
      "location": "San Jose, CA",
      "badge": "Top Tech Seller"
    },
    "rating": 4.8,
    "reviewsCount": 135,
    "stock": 12,
    "sku": "ELE-SELLER1-007",
    "imageUrl": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Sub-249g ultralight regulatory compliant build",
      "4K/60fps HDR video with 3-axis mechanical gimbal",
      "38 minutes extended flight time per battery",
      "APAS 5.0 advanced obstacle avoidance sensors"
    ],
    "specifications": {
      "Weight": "248 grams",
      "Max Flight Time": "38 Minutes",
      "Max Range": "12 km"
    },
    "tags": [
      "Drone",
      "4K Camera",
      "Quadcopter",
      "Gimbal"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-17T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-7-1",
        "userName": "Verified Buyer 50",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from ElectroVibe Stores",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 26
      }
    ]
  },
  {
    "id": "prod-8",
    "name": "25,000mAh 140W PD 3.1 Fast Charging Power Bank",
    "tagline": "Digital Smart Status Display, Charges Laptops and Phones Simultaneously",
    "description": "Power your MacBook Pro, phone, and accessories anywhere with 140W bi-directional fast charging. Digital display reveals real-time input/output wattage, temperature, and time remaining.",
    "price": 89.99,
    "originalPrice": 119.99,
    "discountPercent": 25,
    "category": "Electronics & Gadgets",
    "brand": "ElectroVibe Volt",
    "seller": {
      "id": "seller-1",
      "name": "ElectroVibe Stores",
      "rating": 4.9,
      "salesCount": 3840,
      "isVerified": true,
      "location": "San Jose, CA",
      "badge": "Top Tech Seller"
    },
    "rating": 4.9,
    "reviewsCount": 320,
    "stock": 45,
    "sku": "ELE-SELLER1-008",
    "imageUrl": "https://images.unsplash.com/photo-1609592424109-dd9892f1b179?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1609592424109-dd9892f1b179?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609592424109-dd9892f1b179?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "140W USB-C Power Delivery 3.1 single-port output",
      "25,000 mAh capacity charges iPhone 15 up to 5 times",
      "Smart TFT screen shows live power analytics",
      "Airline carry-on approved 92.5Wh capacity"
    ],
    "specifications": {
      "Capacity": "25,000 mAh / 92.5Wh",
      "Max Output": "140W Total",
      "Ports": "2x USB-C, 1x USB-A"
    },
    "tags": [
      "Power Bank",
      "Fast Charge",
      "140W",
      "Travel"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-18T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-8-1",
        "userName": "Verified Buyer 7",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from ElectroVibe Stores",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 29
      }
    ]
  },
  {
    "id": "prod-9",
    "name": "Smart WiFi 6 Mesh Whole Home Router System",
    "tagline": "Tri-Band AX6000 Speeds, Up to 5,500 Sq Ft Coverage with Parental Controls",
    "description": "Eliminate dead zones with next-gen WiFi 6 mesh connectivity. Handles over 150 connected devices seamlessly with built-in cybersecurity shield and ultra-low gaming latency.",
    "price": 249,
    "originalPrice": 299,
    "discountPercent": 17,
    "category": "Electronics & Gadgets",
    "brand": "ElectroVibe Net",
    "seller": {
      "id": "seller-1",
      "name": "ElectroVibe Stores",
      "rating": 4.9,
      "salesCount": 3840,
      "isVerified": true,
      "location": "San Jose, CA",
      "badge": "Top Tech Seller"
    },
    "rating": 4.6,
    "reviewsCount": 165,
    "stock": 17,
    "sku": "ELE-SELLER1-009",
    "imageUrl": "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Tri-band speeds up to 6.0 Gbps across 3 nodes",
      "Connects up to 150+ smart IoT devices without lag",
      "AI-driven mesh roaming selects fastest node instantly",
      "Automated malware protection and parental filtering"
    ],
    "specifications": {
      "Coverage": "Up to 5,500 sq ft",
      "Speed": "AX6000 Tri-Band",
      "Nodes": "2 Pack"
    },
    "tags": [
      "WiFi 6",
      "Mesh Router",
      "Networking",
      "Smart Home"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-19T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-9-1",
        "userName": "Verified Buyer 14",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from ElectroVibe Stores",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 32
      }
    ]
  },
  {
    "id": "prod-10",
    "name": "Biometric Smart Home Deadbolt Lock with Fingerprint & Keypad",
    "tagline": "3D Semiconductor Fingerprint Sensor with Auto-Lock & App Access",
    "description": "Upgrade home security with 0.3-second fingerprint unlocking. Grant temporary visitor passcodes via smartphone app, monitor door status, and enjoy IP65 weatherproof durability.",
    "price": 129,
    "originalPrice": 159,
    "discountPercent": 19,
    "category": "Electronics & Gadgets",
    "brand": "SafeVibe Pro",
    "seller": {
      "id": "seller-1",
      "name": "ElectroVibe Stores",
      "rating": 4.9,
      "salesCount": 3840,
      "isVerified": true,
      "location": "San Jose, CA",
      "badge": "Top Tech Seller"
    },
    "rating": 4.7,
    "reviewsCount": 240,
    "stock": 22,
    "sku": "ELE-SELLER1-010",
    "imageUrl": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "0.3-second recognition semiconductor fingerprint scanner",
      "Anti-peep digital backlit touchscreen passcode entry",
      "Auto-locking sensor triggers whenever door closes",
      "Emergency USB-C external power jumping port"
    ],
    "specifications": {
      "Battery Life": "12 Months (4x AA)",
      "Weatherproof": "IP65 Rated",
      "Keys": "2 Physical Keys Included"
    },
    "tags": [
      "Smart Lock",
      "Security",
      "Fingerprint",
      "Smart Home"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-20T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-10-1",
        "userName": "Verified Buyer 21",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from ElectroVibe Stores",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 35
      }
    ]
  },
  {
    "id": "prod-11",
    "name": "SonicWave Pro Wireless ANC Headphones",
    "tagline": "Industry-leading Active Noise Cancellation with 45-Hour Battery Life",
    "description": "Studio-grade acoustics with hybrid adaptive noise cancellation. Custom 40mm beryllium drivers produce deep bass, pristine mids, and crystal-clear highs.",
    "price": 199.99,
    "originalPrice": 249.99,
    "discountPercent": 20,
    "category": "Audio & Sound",
    "brand": "SonicWave",
    "seller": {
      "id": "seller-2",
      "name": "SonicWave Audio",
      "rating": 4.8,
      "salesCount": 2190,
      "isVerified": true,
      "location": "Austin, TX",
      "badge": "Audio Specialist"
    },
    "rating": 4.8,
    "reviewsCount": 342,
    "stock": 35,
    "sku": "AUD-SELLER2-001",
    "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Hybrid Active Noise Cancellation (up to -42dB)",
      "45 hours playtime with quick USB-C charge",
      "Multi-point Bluetooth 5.3 connection",
      "Customizable EQ presets via app"
    ],
    "specifications": {
      "Driver Size": "40mm Beryllium",
      "Battery": "45 Hours Playtime",
      "Bluetooth": "5.3 LDAC"
    },
    "tags": [
      "Headphones",
      "Wireless",
      "ANC",
      "Hi-Res"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "createdAt": "2026-01-21T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-11-1",
        "userName": "Verified Buyer 28",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from SonicWave Audio",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 38
      }
    ]
  },
  {
    "id": "prod-12",
    "name": "SonicWave BoomBox Waterproof Outdoor Bluetooth Speaker",
    "tagline": "60W Stereo Bass, IP67 Submersible, 24-Hour Battery with Power Bank",
    "description": "Take festival-grade sound everywhere. Equipped with twin titanium tweeters, dual passive bass radiators, and IP67 dustproof and waterproof construction that floats.",
    "price": 89.99,
    "originalPrice": 119.99,
    "discountPercent": 25,
    "category": "Audio & Sound",
    "brand": "SonicWave",
    "seller": {
      "id": "seller-2",
      "name": "SonicWave Audio",
      "rating": 4.8,
      "salesCount": 2190,
      "isVerified": true,
      "location": "Austin, TX",
      "badge": "Audio Specialist"
    },
    "rating": 4.7,
    "reviewsCount": 290,
    "stock": 40,
    "sku": "AUD-SELLER2-002",
    "imageUrl": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "60W dynamic acoustic output with BassUp technology",
      "IP67 waterproof rating floats on water",
      "Built-in 10,000 mAh phone power bank",
      "PartyCast connects 100+ speakers"
    ],
    "specifications": {
      "Power": "60 Watts RMS",
      "Water Resistance": "IP67",
      "Battery": "24 Hours"
    },
    "tags": [
      "Speaker",
      "Bluetooth",
      "Waterproof",
      "Outdoor"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-22T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-12-1",
        "userName": "Verified Buyer 35",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from SonicWave Audio",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 41
      }
    ]
  },
  {
    "id": "prod-13",
    "name": "SonicBuds Pro Active Noise Cancelling Earbuds",
    "tagline": "Spatial Audio with Dynamic Head Tracking and Wireless Charging Case",
    "description": "Experience studio silence in your pocket. Features 6 beamforming microphones for crystal-clear calls, transparency mode, and IPX5 sweat resistance for running.",
    "price": 129,
    "originalPrice": 159,
    "discountPercent": 19,
    "category": "Audio & Sound",
    "brand": "SonicWave",
    "seller": {
      "id": "seller-2",
      "name": "SonicWave Audio",
      "rating": 4.8,
      "salesCount": 2190,
      "isVerified": true,
      "location": "Austin, TX",
      "badge": "Audio Specialist"
    },
    "rating": 4.7,
    "reviewsCount": 215,
    "stock": 28,
    "sku": "AUD-SELLER2-003",
    "imageUrl": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Personalized spatial audio with dynamic head tracking",
      "Active Noise Cancelling & Ambient Transparency",
      "32 hours total battery with Qi wireless case",
      "Low-latency gaming mode with 40ms sync"
    ],
    "specifications": {
      "Drivers": "11mm Graphene",
      "Case Charging": "Qi Wireless & USB-C",
      "Waterproof": "IPX5"
    },
    "tags": [
      "Earbuds",
      "TWS",
      "ANC",
      "Wireless"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-23T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-13-1",
        "userName": "Verified Buyer 42",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from SonicWave Audio",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 44
      }
    ]
  },
  {
    "id": "prod-14",
    "name": "Studio Master USB-C Condenser Microphone with Pop Filter",
    "tagline": "24-bit/192kHz Studio Quality Recording with 4 Cardioid Polar Patterns",
    "description": "Ideal for podcasting, streaming, voiceovers, and instrument tracking. Features zero-latency headphone monitoring, quick tap-to-mute sensor with LED indicator, and shock mount.",
    "price": 109,
    "originalPrice": 139,
    "discountPercent": 22,
    "category": "Audio & Sound",
    "brand": "SonicWave Studio",
    "seller": {
      "id": "seller-2",
      "name": "SonicWave Audio",
      "rating": 4.8,
      "salesCount": 2190,
      "isVerified": true,
      "location": "Austin, TX",
      "badge": "Audio Specialist"
    },
    "rating": 4.9,
    "reviewsCount": 180,
    "stock": 24,
    "sku": "AUD-SELLER2-004",
    "imageUrl": "https://images.unsplash.com/photo-1590658006821-04f4008d5717?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1590658006821-04f4008d5717?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658006821-04f4008d5717?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Broadcast-grade 24-bit/192kHz high-res sampling",
      "4 selectable polar patterns (Cardioid, Omni, Bi, Stereo)",
      "Tap-to-mute capacitive sensor with status ring",
      "Heavy-duty steel anti-vibration desk stand"
    ],
    "specifications": {
      "Sample Rate": "192 kHz / 24-bit",
      "Connector": "USB-C",
      "Monitoring": "3.5mm Zero Latency"
    },
    "tags": [
      "Microphone",
      "Streaming",
      "Podcasting",
      "Recording"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-24T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-14-1",
        "userName": "Verified Buyer 49",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from SonicWave Audio",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 47
      }
    ]
  },
  {
    "id": "prod-15",
    "name": "Audiophile Belt-Drive Bluetooth Hi-Fi Turntable",
    "tagline": "Audio-Technica Cartridge, Solid Bamboo Plinth & Built-in Phono Preamp",
    "description": "Rediscover warm vinyl analog sound. Precision aluminum die-cast platter, carbon fiber tonearm, and switchable phono/line preamp with wireless Bluetooth streaming.",
    "price": 249,
    "originalPrice": 299,
    "discountPercent": 17,
    "category": "Audio & Sound",
    "brand": "SonicWave Vinyl",
    "seller": {
      "id": "seller-2",
      "name": "SonicWave Audio",
      "rating": 4.8,
      "salesCount": 2190,
      "isVerified": true,
      "location": "Austin, TX",
      "badge": "Audio Specialist"
    },
    "rating": 4.8,
    "reviewsCount": 142,
    "stock": 14,
    "sku": "AUD-SELLER2-005",
    "imageUrl": "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Pre-mounted Audio-Technica AT3600L magnetic cartridge",
      "Anti-resonant solid bamboo plinth construction",
      "Precision belt-drive with optical speed sensor",
      "Switchable phono preamp + Bluetooth 5.2 transmit"
    ],
    "specifications": {
      "Speeds": "33 1/3 and 45 RPM",
      "Platter": "Die-cast Aluminum",
      "Preamp": "Built-in Switchable"
    },
    "tags": [
      "Turntable",
      "Vinyl",
      "Hi-Fi",
      "Audiophile"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-25T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-15-1",
        "userName": "Verified Buyer 6",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from SonicWave Audio",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 5
      }
    ]
  },
  {
    "id": "prod-16",
    "name": "SonicBar 2.1 Dolby Atmos Wireless TV Soundbar",
    "tagline": "300W Peak Power with 6.5-Inch Wireless Subwoofer and eARC",
    "description": "Bring cinema-caliber surround sound to your living room. Features dedicated center voice dialogue enhancer, HDMI eARC pass-through, and optical inputs.",
    "price": 179,
    "originalPrice": 229,
    "discountPercent": 22,
    "category": "Audio & Sound",
    "brand": "SonicWave Home",
    "seller": {
      "id": "seller-2",
      "name": "SonicWave Audio",
      "rating": 4.8,
      "salesCount": 2190,
      "isVerified": true,
      "location": "Austin, TX",
      "badge": "Audio Specialist"
    },
    "rating": 4.6,
    "reviewsCount": 198,
    "stock": 19,
    "sku": "AUD-SELLER2-006",
    "imageUrl": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Virtual Dolby Atmos 3D audio immersion",
      "6.5-inch downward-firing wireless subwoofer",
      "Dialogue enhancement technology isolates vocal tracks",
      "HDMI eARC single-cable remote control setup"
    ],
    "specifications": {
      "Output": "300 Watts Peak",
      "Subwoofer": "6.5\" Wireless",
      "Inputs": "HDMI eARC, Optical, AUX"
    },
    "tags": [
      "Soundbar",
      "Home Theater",
      "Dolby Atmos",
      "Audio"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-26T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-16-1",
        "userName": "Verified Buyer 13",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from SonicWave Audio",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "prod-17",
    "name": "Quad-Driver Hybrid In-Ear Stage Audio Monitors (IEM)",
    "tagline": "1 Dynamic Driver + 3 Balanced Armatures with Silver-Plated MMCX Cable",
    "description": "Designed for musicians, sound engineers, and critical listeners. Incredible separation of instruments, punchy sub-bass, and transparent vocal detail with ergonomic custom-mold shells.",
    "price": 149,
    "originalPrice": 189,
    "discountPercent": 21,
    "category": "Audio & Sound",
    "brand": "SonicWave Pro",
    "seller": {
      "id": "seller-2",
      "name": "SonicWave Audio",
      "rating": 4.8,
      "salesCount": 2190,
      "isVerified": true,
      "location": "Austin, TX",
      "badge": "Audio Specialist"
    },
    "rating": 4.9,
    "reviewsCount": 167,
    "stock": 22,
    "sku": "AUD-SELLER2-007",
    "imageUrl": "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Hybrid acoustic tuning (10mm DD + 3 Knowles BA)",
      "Detachable 8-core silver-plated copper MMCX cable",
      "Ergonomic medical-grade resin sound cavity",
      "Up to -36dB passive noise isolation on stage"
    ],
    "specifications": {
      "Impedance": "24 Ohms",
      "Frequency": "10Hz - 40kHz",
      "Connector": "0.78mm 2-Pin / MMCX"
    },
    "tags": [
      "IEM",
      "Earphones",
      "Hi-Fi",
      "Musician"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-27T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-17-1",
        "userName": "Verified Buyer 20",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from SonicWave Audio",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 11
      }
    ]
  },
  {
    "id": "prod-18",
    "name": "Active Bi-Amped Desktop Reference Studio Monitors (Pair)",
    "tagline": "5-Inch Kevlar Woofers with 1-Inch Silk Dome Tweeters & Room EQ",
    "description": "Flat, honest acoustic reference monitors for music producers and mixing engineers. Custom Class-D bi-amplification delivers 100 watts of surgical sonic accuracy.",
    "price": 269,
    "originalPrice": 329,
    "discountPercent": 18,
    "category": "Audio & Sound",
    "brand": "SonicWave Studio",
    "seller": {
      "id": "seller-2",
      "name": "SonicWave Audio",
      "rating": 4.8,
      "salesCount": 2190,
      "isVerified": true,
      "location": "Austin, TX",
      "badge": "Audio Specialist"
    },
    "rating": 4.8,
    "reviewsCount": 110,
    "stock": 11,
    "sku": "AUD-SELLER2-008",
    "imageUrl": "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "100W Class D bi-amplified clean power design",
      "5-inch woven Kevlar low-frequency drivers",
      "Room acoustics tuning switches on rear panel",
      "Balanced XLR and 1/4-inch TRS studio inputs"
    ],
    "specifications": {
      "Power": "100W RMS Pair",
      "Frequency": "45Hz - 22kHz",
      "Inputs": "Balanced XLR / TRS"
    },
    "tags": [
      "Studio Monitors",
      "Speakers",
      "Music Production",
      "Studio"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-10T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-18-1",
        "userName": "Verified Buyer 27",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from SonicWave Audio",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-19",
    "name": "Vintage Wood Retro Bluetooth FM Radio & Speaker",
    "tagline": "Solid Walnut Wood Enclosure with Warm Analog Dial & Deep Bass",
    "description": "Combines mid-century vintage aesthetics with modern wireless connectivity. Tuned bass reflex port produces surprisingly warm, rich sound from a compact desktop unit.",
    "price": 64.99,
    "originalPrice": 79.99,
    "discountPercent": 19,
    "category": "Audio & Sound",
    "brand": "SonicWave Retro",
    "seller": {
      "id": "seller-2",
      "name": "SonicWave Audio",
      "rating": 4.8,
      "salesCount": 2190,
      "isVerified": true,
      "location": "Austin, TX",
      "badge": "Audio Specialist"
    },
    "rating": 4.7,
    "reviewsCount": 235,
    "stock": 33,
    "sku": "AUD-SELLER2-009",
    "imageUrl": "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Handcrafted natural walnut timber cabinet",
      "Smooth analog FM radio tuning dial with backlight",
      "Bluetooth 5.0 wireless streaming + AUX input",
      "Internal rechargeable battery offers 12h playtime"
    ],
    "specifications": {
      "Cabinet": "Natural Walnut",
      "Playtime": "12 Hours",
      "Tuner": "FM Analog"
    },
    "tags": [
      "Retro",
      "Radio",
      "Vintage",
      "Bluetooth"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-11T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-19-1",
        "userName": "Verified Buyer 34",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from SonicWave Audio",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 17
      }
    ]
  },
  {
    "id": "prod-20",
    "name": "Hi-Res Balanced USB-C DAC & Headphone Amplifier",
    "tagline": "Dual ES9038Q2M Chips, Supports 32-bit/768kHz PCM and DSD512",
    "description": "Unlock the true potential of high-impedance headphones on your phone or PC. Delivers pristine signal-to-noise ratio and drives power-hungry planar magnetic headphones with ease.",
    "price": 119,
    "originalPrice": 149,
    "discountPercent": 20,
    "category": "Audio & Sound",
    "brand": "SonicWave DAC",
    "seller": {
      "id": "seller-2",
      "name": "SonicWave Audio",
      "rating": 4.8,
      "salesCount": 2190,
      "isVerified": true,
      "location": "Austin, TX",
      "badge": "Audio Specialist"
    },
    "rating": 4.8,
    "reviewsCount": 154,
    "stock": 26,
    "sku": "AUD-SELLER2-010",
    "imageUrl": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Dual ESS Sabre high-performance DAC chips",
      "Outputs: 4.4mm balanced and 3.5mm single-ended",
      "Hardware volume rocker with independent gain switch",
      "Solid CNC milled aircraft-grade aluminum casing"
    ],
    "specifications": {
      "DAC": "Dual ES9038Q2M",
      "Output Power": "Up to 560mW @ 32 Ohms",
      "Decoding": "PCM 768kHz / DSD512"
    },
    "tags": [
      "DAC",
      "Amp",
      "Audiophile",
      "Hi-Res"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-12T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-20-1",
        "userName": "Verified Buyer 41",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from SonicWave Audio",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 20
      }
    ]
  },
  {
    "id": "prod-21",
    "name": "Urban Luxe Heavyweight Oversized French Terry Hoodie",
    "tagline": "500 GSM Organic Cotton, Pre-shrunk Boxy Fit",
    "description": "Crafted from 100% heavyweight organic cotton with brushed French terry interior. Double-layered hood without drawstrings for a clean architectural silhouette.",
    "price": 79.5,
    "originalPrice": 95,
    "discountPercent": 16,
    "category": "Fashion & Apparel",
    "brand": "Urban Threads",
    "seller": {
      "id": "seller-3",
      "name": "Urban Threads Co.",
      "rating": 4.7,
      "salesCount": 4520,
      "isVerified": true,
      "location": "Brooklyn, NY",
      "badge": "Trending Fashion"
    },
    "rating": 4.6,
    "reviewsCount": 520,
    "stock": 48,
    "sku": "FAS-SELLER3-001",
    "imageUrl": "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "500 GSM heavyweight organic cotton construction",
      "Dropped shoulder with tailored boxy silhouette",
      "Pre-shrunk fabric to prevent shrinking after wash",
      "Reinforced flatlock stitching throughout"
    ],
    "specifications": {
      "Material": "100% Organic Cotton",
      "Weight": "500 GSM",
      "Fit": "Oversized"
    },
    "tags": [
      "Hoodie",
      "Streetwear",
      "Cotton",
      "Fashion"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "createdAt": "2026-01-13T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-21-1",
        "userName": "Verified Buyer 48",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from Urban Threads Co.",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": "prod-22",
    "name": "Handcrafted Heritage Full-Grain Leather Weekender Bag",
    "tagline": "Vegetable Tanned Leather with Dedicated Shoe & Tech Compartment",
    "description": "The ultimate travel companion for weekend getaways and business trips. Cut from durable 4oz vegetable-tanned leather that develops a rich natural patina over time.",
    "price": 219,
    "originalPrice": 289,
    "discountPercent": 24,
    "category": "Fashion & Apparel",
    "brand": "Urban Threads",
    "seller": {
      "id": "seller-3",
      "name": "Urban Threads Co.",
      "rating": 4.7,
      "salesCount": 4520,
      "isVerified": true,
      "location": "Brooklyn, NY",
      "badge": "Trending Fashion"
    },
    "rating": 4.8,
    "reviewsCount": 128,
    "stock": 11,
    "sku": "FAS-SELLER3-002",
    "imageUrl": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Full-grain Colombian cowhide leather",
      "TSA carry-on compliant dimensions for airlines",
      "Ventilated exterior side shoe compartment",
      "Padded 16-inch laptop compartment"
    ],
    "specifications": {
      "Capacity": "45 Liters",
      "Dimensions": "20\" L x 11.5\" W",
      "Leather": "Full-Grain Vegetable Tanned"
    },
    "tags": [
      "Leather",
      "Weekender",
      "Bag",
      "Travel"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-14T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-22-1",
        "userName": "Verified Buyer 5",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Urban Threads Co.",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 26
      }
    ]
  },
  {
    "id": "prod-23",
    "name": "Tailored Minimalist Wool-Cashmere Blend Overcoat",
    "tagline": "Double-Breasted Italian Wool with Satin Bemberg Lining",
    "description": "Timeless outerwear designed for modern silhouettes. Crafted from 80% recycled Italian wool and 20% Mongolian cashmere for exceptional warmth without cumbersome weight.",
    "price": 289,
    "originalPrice": 360,
    "discountPercent": 20,
    "category": "Fashion & Apparel",
    "brand": "Urban Threads Atelier",
    "seller": {
      "id": "seller-3",
      "name": "Urban Threads Co.",
      "rating": 4.7,
      "salesCount": 4520,
      "isVerified": true,
      "location": "Brooklyn, NY",
      "badge": "Trending Fashion"
    },
    "rating": 4.9,
    "reviewsCount": 95,
    "stock": 14,
    "sku": "FAS-SELLER3-003",
    "imageUrl": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Premium wool-cashmere blend with thermal insulation",
      "Notched lapels and horn button front closure",
      "Deep exterior welt pockets and interior ticket pocket",
      "Clean mid-calf architectural cut"
    ],
    "specifications": {
      "Fabric": "80% Wool, 20% Cashmere",
      "Lining": "100% Bemberg Cupro",
      "Care": "Dry Clean Only"
    },
    "tags": [
      "Overcoat",
      "Wool",
      "Cashmere",
      "Outerwear"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-15T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-23-1",
        "userName": "Verified Buyer 12",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Urban Threads Co.",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 29
      }
    ]
  },
  {
    "id": "prod-24",
    "name": "Classic Goodyear-Welted Leather Chelsea Boots",
    "tagline": "Oil-Tanned Pull-Up Leather with Vibram Rubber Outsoles",
    "description": "Built to last a lifetime. Features resoleable Goodyear welt construction, elastic twin-gore side panels, and moisture-wicking cork footbed that molds to your unique foot shape.",
    "price": 189,
    "originalPrice": 239,
    "discountPercent": 21,
    "category": "Fashion & Apparel",
    "brand": "Urban Heritage",
    "seller": {
      "id": "seller-3",
      "name": "Urban Threads Co.",
      "rating": 4.7,
      "salesCount": 4520,
      "isVerified": true,
      "location": "Brooklyn, NY",
      "badge": "Trending Fashion"
    },
    "rating": 4.7,
    "reviewsCount": 210,
    "stock": 19,
    "sku": "FAS-SELLER3-004",
    "imageUrl": "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Resoleable Goodyear welt handcrafted construction",
      "Full-grain pull-up leather that patinas beautifully",
      "Vibram all-weather lug traction sole",
      "Cushioned Poron insole with cork bed filling"
    ],
    "specifications": {
      "Upper": "Full-Grain Cowhide",
      "Welt": "360 Goodyear Welt",
      "Sole": "Vibram Rubber"
    },
    "tags": [
      "Boots",
      "Chelsea",
      "Leather",
      "Footwear"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-16T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-24-1",
        "userName": "Verified Buyer 19",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from Urban Threads Co.",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 32
      }
    ]
  },
  {
    "id": "prod-25",
    "name": "14oz Japanese Selvedge Raw Denim Jeans (Slim-Straight)",
    "tagline": "Shuttle-Loomed Kuroki Denim with Signature Pink Selvedge ID",
    "description": "Raw, unwashed denim woven on vintage Toyoda shuttle looms in Okayama, Japan. Develops personalized honeycomb and whisker fades with wear. Features solid brass custom hardware.",
    "price": 145,
    "originalPrice": 175,
    "discountPercent": 17,
    "category": "Fashion & Apparel",
    "brand": "Urban Threads Denim",
    "seller": {
      "id": "seller-3",
      "name": "Urban Threads Co.",
      "rating": 4.7,
      "salesCount": 4520,
      "isVerified": true,
      "location": "Brooklyn, NY",
      "badge": "Trending Fashion"
    },
    "rating": 4.8,
    "reviewsCount": 165,
    "stock": 23,
    "sku": "FAS-SELLER3-005",
    "imageUrl": "https://images.unsplash.com/photo-1542272604-780c96856592?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1542272604-780c96856592?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542272604-780c96856592?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "14oz authentic Japanese shuttle-loomed selvedge",
      "Signature pink-line selvedge ticket and coin pocket detail",
      "Solid copper hand-stamped rivets and button fly",
      "Thick vegetable-tanned leather waistband patch"
    ],
    "specifications": {
      "Denim": "14oz Okayama Selvedge",
      "Cut": "Slim Straight",
      "Wash": "Unwashed Raw Rigid"
    },
    "tags": [
      "Denim",
      "Jeans",
      "Selvedge",
      "Raw Denim"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-17T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-25-1",
        "userName": "Verified Buyer 26",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Urban Threads Co.",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 35
      }
    ]
  },
  {
    "id": "prod-26",
    "name": "Weatherproof Technical Commuter Rolltop Backpack",
    "tagline": "Cordura 1000D Nylon with Magnetic Fidlock Buckles & 16\" Laptop Sleeve",
    "description": "Designed for daily bicycle commuters and urban explorers. Features waterproof polyurethane membrane zippers, ergonomic EVA back ventilation panel, and modular expandable rolltop.",
    "price": 119,
    "originalPrice": 149,
    "discountPercent": 20,
    "category": "Fashion & Apparel",
    "brand": "Urban Threads Tech",
    "seller": {
      "id": "seller-3",
      "name": "Urban Threads Co.",
      "rating": 4.7,
      "salesCount": 4520,
      "isVerified": true,
      "location": "Brooklyn, NY",
      "badge": "Trending Fashion"
    },
    "rating": 4.8,
    "reviewsCount": 280,
    "stock": 31,
    "sku": "FAS-SELLER3-006",
    "imageUrl": "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Ultra-rugged 1000D ballistic Cordura fabric",
      "German engineered magnetic quick-release Fidlock clips",
      "Suspended faux-fur padded 16-inch laptop pocket",
      "Ergonomic breathable air-mesh shoulder harness"
    ],
    "specifications": {
      "Capacity": "25L expandable to 32L",
      "Weight": "2.1 lbs",
      "Material": "Cordura 1000D"
    },
    "tags": [
      "Backpack",
      "Commuter",
      "Waterproof",
      "Bags"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-18T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-26-1",
        "userName": "Verified Buyer 33",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Urban Threads Co.",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 38
      }
    ]
  },
  {
    "id": "prod-27",
    "name": "100% Extra-Fine Merino Wool Waffle Knit Sweater",
    "tagline": "19.5 Micron Australian Wool, Naturally Temperature Regulating",
    "description": "Breathable, odor-resistant, and extraordinarily soft against bare skin. Textured thermal waffle knit locks in warmth during cool months while remaining airy during transitions.",
    "price": 95,
    "originalPrice": 120,
    "discountPercent": 21,
    "category": "Fashion & Apparel",
    "brand": "Urban Threads Knitwear",
    "seller": {
      "id": "seller-3",
      "name": "Urban Threads Co.",
      "rating": 4.7,
      "salesCount": 4520,
      "isVerified": true,
      "location": "Brooklyn, NY",
      "badge": "Trending Fashion"
    },
    "rating": 4.7,
    "reviewsCount": 140,
    "stock": 26,
    "sku": "FAS-SELLER3-007",
    "imageUrl": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "100% pure Australian 19.5-micron merino wool",
      "Breathable waffle thermal stitch provides lightweight warmth",
      "Naturally antibacterial and odor-resistant fibers",
      "Ribbed cuffs, collar, and hem hold their shape"
    ],
    "specifications": {
      "Fibers": "100% Merino Wool",
      "Knit Type": "Textured Waffle",
      "Care": "Hand wash cold"
    },
    "tags": [
      "Merino Wool",
      "Sweater",
      "Knitwear",
      "Menswear"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-19T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-27-1",
        "userName": "Verified Buyer 40",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from Urban Threads Co.",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 41
      }
    ]
  },
  {
    "id": "prod-28",
    "name": "Low-Top Minimalist Leather Sneakers with Margom Sole",
    "tagline": "Italian Nappa Leather Upper, Calfskin Lining, Hand-Stitched Construction",
    "description": "Clean luxury aesthetic that pairs seamlessly with denim or tailoring. Handcrafted in Marche, Italy with butter-soft calfskin lining and durable vulcanized Italian rubber cupsole.",
    "price": 159,
    "originalPrice": 199,
    "discountPercent": 20,
    "category": "Fashion & Apparel",
    "brand": "Urban Threads Footwear",
    "seller": {
      "id": "seller-3",
      "name": "Urban Threads Co.",
      "rating": 4.7,
      "salesCount": 4520,
      "isVerified": true,
      "location": "Brooklyn, NY",
      "badge": "Trending Fashion"
    },
    "rating": 4.8,
    "reviewsCount": 188,
    "stock": 17,
    "sku": "FAS-SELLER3-008",
    "imageUrl": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Buttery smooth Italian Nappa cowhide leather",
      "Full calfskin leather lining absorbs foot moisture",
      "Authentic Margom stitched Italian rubber outsoles",
      "Waxed cotton laces with engraved brass aglets"
    ],
    "specifications": {
      "Upper": "Italian Nappa Leather",
      "Sole": "Margom Rubber Cupsole",
      "Origin": "Handcrafted in Italy"
    },
    "tags": [
      "Sneakers",
      "Leather",
      "Shoes",
      "Minimalist"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-20T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-28-1",
        "userName": "Verified Buyer 47",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Urban Threads Co.",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 44
      }
    ]
  },
  {
    "id": "prod-29",
    "name": "Polarized Handcrafted Mazzucchelli Acetate Sunglasses",
    "tagline": "UV400 Anti-Reflective CR-39 Lenses with 5-Barrel Steel Hinges",
    "description": "Classic vintage-inspired frame cut from organic Italian Mazzucchelli acetate sheets. Premium polarized lenses block 100% of UVA/UVB rays and eliminate roadside glare.",
    "price": 89,
    "originalPrice": 115,
    "discountPercent": 23,
    "category": "Fashion & Apparel",
    "brand": "Urban Optics",
    "seller": {
      "id": "seller-3",
      "name": "Urban Threads Co.",
      "rating": 4.7,
      "salesCount": 4520,
      "isVerified": true,
      "location": "Brooklyn, NY",
      "badge": "Trending Fashion"
    },
    "rating": 4.7,
    "reviewsCount": 210,
    "stock": 35,
    "sku": "FAS-SELLER3-009",
    "imageUrl": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Mazzucchelli 1849 plant-based Italian acetate",
      "Category 3 polarized scratch-resistant CR-39 lenses",
      "5-barrel German stainless steel hinges",
      "Includes hard leather case and microfiber cleaning cloth"
    ],
    "specifications": {
      "Frame Width": "142mm",
      "Bridge": "20mm",
      "UV Protection": "UV400 100%"
    },
    "tags": [
      "Sunglasses",
      "Eyewear",
      "Polarized",
      "Accessories"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-21T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-29-1",
        "userName": "Verified Buyer 4",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from Urban Threads Co.",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 47
      }
    ]
  },
  {
    "id": "prod-30",
    "name": "Packable 800-Fill Goose Down Lightweight Puffer Jacket",
    "tagline": "DWR Ripstop Shell, Packs into Interior Pocket with YKK Vislon Zips",
    "description": "Featherlight warmth for chilly mornings and mountain treks. Filled with responsibly sourced 800-fill power water-resistant down encased in a durable DWR treated mini-ripstop shell.",
    "price": 169,
    "originalPrice": 210,
    "discountPercent": 20,
    "category": "Fashion & Apparel",
    "brand": "Urban Altitude",
    "seller": {
      "id": "seller-3",
      "name": "Urban Threads Co.",
      "rating": 4.7,
      "salesCount": 4520,
      "isVerified": true,
      "location": "Brooklyn, NY",
      "badge": "Trending Fashion"
    },
    "rating": 4.9,
    "reviewsCount": 145,
    "stock": 20,
    "sku": "FAS-SELLER3-010",
    "imageUrl": "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "800-fill power certified Responsible Down Standard (RDS)",
      "Windproof 20D recycled ripstop nylon with DWR coating",
      "Packs neatly into its own interior zippered chest pocket",
      "Fleece-lined handwarmer pockets with storm flap"
    ],
    "specifications": {
      "Fill Power": "800-Fill Goose Down",
      "Shell": "20D DWR Ripstop Nylon",
      "Weight": "320 grams"
    },
    "tags": [
      "Puffer Jacket",
      "Down Jacket",
      "Winter",
      "Outerwear"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-22T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-30-1",
        "userName": "Verified Buyer 11",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Urban Threads Co.",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 5
      }
    ]
  },
  {
    "id": "prod-31",
    "name": "Nordic Precision Pour-Over Kettle & Coffee Maker",
    "tagline": "Gooseneck Spout with Variable Temperature Control & Keep Warm",
    "description": "Master manual pour-over coffee brewing with Swedish minimalist engineering. Digital PID controller maintains exact degree precision from 104°F to 212°F with real-time LCD screen.",
    "price": 119,
    "originalPrice": 149,
    "discountPercent": 20,
    "category": "Home & Kitchen",
    "brand": "Nordic Living",
    "seller": {
      "id": "seller-4",
      "name": "Nordic Living Goods",
      "rating": 4.9,
      "salesCount": 1640,
      "isVerified": true,
      "location": "Seattle, WA",
      "badge": "Eco & Home Choice"
    },
    "rating": 4.9,
    "reviewsCount": 215,
    "stock": 22,
    "sku": "HME-SELLER4-001",
    "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Precision gooseneck pour spout for laminar flow",
      "Single-degree digital temperature control with OLED",
      "60-minute automatic keep-warm mode",
      "Integrated countdown extraction stopwatch"
    ],
    "specifications": {
      "Capacity": "0.9L",
      "Power": "1200W",
      "Material": "304 Stainless Steel"
    },
    "tags": [
      "Coffee",
      "Kettle",
      "Barista",
      "Kitchen"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "createdAt": "2026-01-23T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-31-1",
        "userName": "Verified Buyer 18",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Nordic Living Goods",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "prod-32",
    "name": "Nordic Eco-Clean HEPA-13 Air Purifier with Smart AQI Sensor",
    "tagline": "Covers 1,200 Sq Ft with Medical Grade 3-Stage Filtration",
    "description": "Breathe cleaner indoor air. Captures 99.97% of airborne particles as small as 0.3 microns including pollen, smoke, pet dander, and odors with laser particulate sensors.",
    "price": 149,
    "originalPrice": 189,
    "discountPercent": 21,
    "category": "Home & Kitchen",
    "brand": "Nordic Living",
    "seller": {
      "id": "seller-4",
      "name": "Nordic Living Goods",
      "rating": 4.9,
      "salesCount": 1640,
      "isVerified": true,
      "location": "Seattle, WA",
      "badge": "Eco & Home Choice"
    },
    "rating": 4.8,
    "reviewsCount": 310,
    "stock": 27,
    "sku": "HME-SELLER4-002",
    "imageUrl": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "H13 True HEPA filter + Activated carbon odor honeycomb",
      "Cleans 400 sq ft room in just 15 minutes",
      "Whisper-quiet sleep mode operates at 22dB",
      "Real-time color AQI indicator ring"
    ],
    "specifications": {
      "Coverage": "1,200 sq ft",
      "CADR": "250 m³/h",
      "Noise": "22dB"
    },
    "tags": [
      "Air Purifier",
      "HEPA",
      "Home",
      "Health"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-24T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-32-1",
        "userName": "Verified Buyer 25",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Nordic Living Goods",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 11
      }
    ]
  },
  {
    "id": "prod-33",
    "name": "Artisan 6-Quart Enameled Cast Iron Dutch Oven Pot",
    "tagline": "Heavy-Duty Cast Iron with Non-Reactive Gloss Enamel Interior",
    "description": "The kitchen workhorse for slow-braised meats, sourdough bread baking, and savory stews. Superior heat retention and self-basting lid spikes circulate steam evenly.",
    "price": 99,
    "originalPrice": 130,
    "discountPercent": 24,
    "category": "Home & Kitchen",
    "brand": "Nordic Cast",
    "seller": {
      "id": "seller-4",
      "name": "Nordic Living Goods",
      "rating": 4.9,
      "salesCount": 1640,
      "isVerified": true,
      "location": "Seattle, WA",
      "badge": "Eco & Home Choice"
    },
    "rating": 4.9,
    "reviewsCount": 270,
    "stock": 18,
    "sku": "HME-SELLER4-003",
    "imageUrl": "https://images.unsplash.com/photo-1584990347449-a3b04c810bb7?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584990347449-a3b04c810bb7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584990347449-a3b04c810bb7?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Premium cast iron offers unmatched heat distribution",
      "Chip-resistant durable dual enamel glass coating",
      "Oven safe up to 500°F with stainless steel knob",
      "Self-basting interior condensation bumps"
    ],
    "specifications": {
      "Capacity": "6 Quarts",
      "Weight": "13.2 lbs",
      "Oven Safe": "Up to 500°F (260°C)"
    },
    "tags": [
      "Dutch Oven",
      "Cookware",
      "Cast Iron",
      "Baking"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-25T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-33-1",
        "userName": "Verified Buyer 32",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Nordic Living Goods",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-34",
    "name": "Compact 15-Bar Espresso Machine with Milk Frothing Wand",
    "tagline": "Italian Ulka Pump, Thermo-Block Fast Heating in 35 Seconds",
    "description": "Brew rich, golden crema espresso and silky microfoam lattes at home. Dual temperature control manages water for extraction and steam for latte art separately.",
    "price": 169,
    "originalPrice": 219,
    "discountPercent": 23,
    "category": "Home & Kitchen",
    "brand": "Nordic Brew",
    "seller": {
      "id": "seller-4",
      "name": "Nordic Living Goods",
      "rating": 4.9,
      "salesCount": 1640,
      "isVerified": true,
      "location": "Seattle, WA",
      "badge": "Eco & Home Choice"
    },
    "rating": 4.7,
    "reviewsCount": 195,
    "stock": 14,
    "sku": "HME-SELLER4-004",
    "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "15-bar professional pressure Italian Ulka pump",
      "Fast thermo-block heating system ready in 35s",
      "Commercial-style 360-degree stainless steam wand",
      "Removable 1.5L transparent water reservoir"
    ],
    "specifications": {
      "Pressure": "15 Bar",
      "Water Tank": "1.5 Liters",
      "Power": "1350 Watts"
    },
    "tags": [
      "Espresso",
      "Coffee Maker",
      "Latte",
      "Kitchen"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-26T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-34-1",
        "userName": "Verified Buyer 39",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from Nordic Living Goods",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 17
      }
    ]
  },
  {
    "id": "prod-35",
    "name": "Japanese 67-Layer Damascus 8-Inch Chef Knife",
    "tagline": "VG-10 Super Steel Core (62 HRC) with Ergonomic Pakkawood Handle",
    "description": "Surgical slicing precision in your kitchen. Razor-sharp 15-degree double bevel blade clad in 66 layers of folded Damascus steel for extraordinary edge retention.",
    "price": 89,
    "originalPrice": 119,
    "discountPercent": 25,
    "category": "Home & Kitchen",
    "brand": "Nordic Edge",
    "seller": {
      "id": "seller-4",
      "name": "Nordic Living Goods",
      "rating": 4.9,
      "salesCount": 1640,
      "isVerified": true,
      "location": "Seattle, WA",
      "badge": "Eco & Home Choice"
    },
    "rating": 4.9,
    "reviewsCount": 380,
    "stock": 24,
    "sku": "HME-SELLER4-005",
    "imageUrl": "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "VG-10 Japanese high-carbon cobalt super steel core",
      "62+ Rockwell hardness holds edge for months",
      "Waterproof moisture-resistant Pakkawood octagonal handle",
      "Includes custom wooden magnetic blade guard sheath"
    ],
    "specifications": {
      "Blade Length": "8 Inches",
      "Hardness": "62 HRC",
      "Bevel": "15 Degrees per side"
    },
    "tags": [
      "Knife",
      "Damascus",
      "Chef Knife",
      "Cutlery"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-27T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-35-1",
        "userName": "Verified Buyer 46",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Nordic Living Goods",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 20
      }
    ]
  },
  {
    "id": "prod-36",
    "name": "Smart LiDAR Robot Vacuum & Sonic Mopping Cleaner",
    "tagline": "5000Pa Extreme Suction, Multi-Floor Mapping & Auto Carpet Boost",
    "description": "Hands-free floor cleaning intelligence. LDS laser radar maps your home in minutes with 3D obstacle avoidance, programmable no-go zones, and high-frequency scrub mopping.",
    "price": 329,
    "originalPrice": 429,
    "discountPercent": 23,
    "category": "Home & Kitchen",
    "brand": "Nordic Clean",
    "seller": {
      "id": "seller-4",
      "name": "Nordic Living Goods",
      "rating": 4.9,
      "salesCount": 1640,
      "isVerified": true,
      "location": "Seattle, WA",
      "badge": "Eco & Home Choice"
    },
    "rating": 4.7,
    "reviewsCount": 160,
    "stock": 15,
    "sku": "HME-SELLER4-006",
    "imageUrl": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "5000Pa hyper suction lifts dirt from deep carpets",
      "High-speed sonic vibration mopping scrubs 3000 times/min",
      "LiDAR navigation creates millimeter-accurate floor maps",
      "180-minute runtime cleans up to 2,500 sq ft"
    ],
    "specifications": {
      "Suction": "5000Pa",
      "Battery": "5200 mAh",
      "Dustbin": "450ml / Water: 300ml"
    },
    "tags": [
      "Robot Vacuum",
      "Smart Home",
      "Mopping",
      "Cleaning"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-10T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-36-1",
        "userName": "Verified Buyer 3",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from Nordic Living Goods",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": "prod-37",
    "name": "16-Piece Matte Speckled Ceramic Stoneware Dinnerware Set",
    "tagline": "Service for 4: Dinner Plates, Salad Plates, Soup Bowls & Mugs",
    "description": "Earthy minimalist Scandinavian table aesthetics. Crafted from dense, chip-resistant stoneware clay finished with an artisanal reactive speckled matte glaze.",
    "price": 85,
    "originalPrice": 110,
    "discountPercent": 23,
    "category": "Home & Kitchen",
    "brand": "Nordic Ceramic",
    "seller": {
      "id": "seller-4",
      "name": "Nordic Living Goods",
      "rating": 4.9,
      "salesCount": 1640,
      "isVerified": true,
      "location": "Seattle, WA",
      "badge": "Eco & Home Choice"
    },
    "rating": 4.8,
    "reviewsCount": 220,
    "stock": 21,
    "sku": "HME-SELLER4-007",
    "imageUrl": "https://images.unsplash.com/photo-1615865417491-994101e6aa90?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1615865417491-994101e6aa90?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1615865417491-994101e6aa90?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Includes 4 dinner plates, 4 salad plates, 4 bowls, 4 mugs",
      "Artisanal organic rim profile with speckled satin glaze",
      "Microwave, dishwasher, and oven safe up to 400°F",
      "Lead-free, cadmium-free non-porous food safe clay"
    ],
    "specifications": {
      "Set Size": "16 Pieces (4 Place Settings)",
      "Material": "Natural Stoneware",
      "Care": "Dishwasher Safe"
    },
    "tags": [
      "Dinnerware",
      "Ceramics",
      "Kitchen",
      "Plates"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-11T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-37-1",
        "userName": "Verified Buyer 10",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Nordic Living Goods",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 26
      }
    ]
  },
  {
    "id": "prod-38",
    "name": "Organic Moso Bamboo 3-Piece Cutting Board Set with Juice Grooves",
    "tagline": "Knife-Friendly Surface with Deep Perimeter Drip Wells & Side Handles",
    "description": "Eco-friendly, knife-gentle food preparation boards. Dense organic bamboo resists water absorption, preventing warping and food odor retention.",
    "price": 39.99,
    "originalPrice": 49.99,
    "discountPercent": 20,
    "category": "Home & Kitchen",
    "brand": "Nordic Living",
    "seller": {
      "id": "seller-4",
      "name": "Nordic Living Goods",
      "rating": 4.9,
      "salesCount": 1640,
      "isVerified": true,
      "location": "Seattle, WA",
      "badge": "Eco & Home Choice"
    },
    "rating": 4.8,
    "reviewsCount": 310,
    "stock": 45,
    "sku": "HME-SELLER4-008",
    "imageUrl": "https://images.unsplash.com/photo-1590794056226-79738c44865f?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1590794056226-79738c44865f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590794056226-79738c44865f?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "3 convenient kitchen sizes (Large, Medium, Small)",
      "Deep perimeter juice groove catches carved meat juices",
      "Naturally antimicrobial dense Moso bamboo grain",
      "Pre-treated with food-grade mineral cutting board oil"
    ],
    "specifications": {
      "Sizes": "Large (17x12\"), Medium (14x10\"), Small (10x7\")",
      "Thickness": "0.8 Inches",
      "Material": "100% Moso Bamboo"
    },
    "tags": [
      "Cutting Board",
      "Bamboo",
      "Kitchenware",
      "Eco-friendly"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-12T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-38-1",
        "userName": "Verified Buyer 17",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Nordic Living Goods",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 29
      }
    ]
  },
  {
    "id": "prod-39",
    "name": "Ultrasonic Ceramic Aromatherapy Essential Oil Diffuser (500ml)",
    "tagline": "Whisper-Quiet Cool Mist with 7 Ambient LED Lights & Auto Shutoff",
    "description": "Enhance your living space with calming aromatic mist. Handcrafted white ceramic outer shell, 4 timer settings, and waterless auto shut-off for safe overnight relaxation.",
    "price": 42,
    "originalPrice": 55,
    "discountPercent": 24,
    "category": "Home & Kitchen",
    "brand": "Nordic Living",
    "seller": {
      "id": "seller-4",
      "name": "Nordic Living Goods",
      "rating": 4.9,
      "salesCount": 1640,
      "isVerified": true,
      "location": "Seattle, WA",
      "badge": "Eco & Home Choice"
    },
    "rating": 4.7,
    "reviewsCount": 185,
    "stock": 36,
    "sku": "HME-SELLER4-009",
    "imageUrl": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Handcrafted matte textured ceramic exterior shell",
      "500ml reservoir provides up to 16 hours continuous mist",
      "BPA-free ultrasonic vibration technology (< 20dB)",
      "7 relaxing ambient LED light tones with dimming"
    ],
    "specifications": {
      "Capacity": "500ml",
      "Runtime": "Up to 16 Hours",
      "Coverage": "400 sq ft"
    },
    "tags": [
      "Diffuser",
      "Aromatherapy",
      "Wellness",
      "Home Decor"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-13T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-39-1",
        "userName": "Verified Buyer 24",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from Nordic Living Goods",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 32
      }
    ]
  },
  {
    "id": "prod-40",
    "name": "Hard-Anodized Nonstick 12-Inch Frying Pan with Glass Lid",
    "tagline": "Triple-Layer Granite Nonstick Coating, PFOA Free, Induction Ready",
    "description": "Cook delicate fish and eggs without butter sticking. Heavy-gauge anodized aluminum distributes heat evenly without hotspots, complemented by stay-cool riveted silicone handles.",
    "price": 54,
    "originalPrice": 70,
    "discountPercent": 23,
    "category": "Home & Kitchen",
    "brand": "Nordic Chef",
    "seller": {
      "id": "seller-4",
      "name": "Nordic Living Goods",
      "rating": 4.9,
      "salesCount": 1640,
      "isVerified": true,
      "location": "Seattle, WA",
      "badge": "Eco & Home Choice"
    },
    "rating": 4.8,
    "reviewsCount": 260,
    "stock": 28,
    "sku": "HME-SELLER4-010",
    "imageUrl": "https://images.unsplash.com/photo-1583778176476-4a8b04a64771?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583778176476-4a8b04a64771?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b04a64771?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Triple-layer granite reinforced non-stick coating",
      "Heavy-gauge hard-anodized warp-resistant base",
      "Induction stainless steel magnetic bottom plate",
      "Shatter-resistant tempered glass lid with steam vent"
    ],
    "specifications": {
      "Diameter": "12 Inches",
      "Base": "Induction Compatible",
      "Oven Safe": "Up to 450°F"
    },
    "tags": [
      "Frying Pan",
      "Cookware",
      "Nonstick",
      "Kitchen"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-14T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-40-1",
        "userName": "Verified Buyer 31",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Nordic Living Goods",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 35
      }
    ]
  },
  {
    "id": "prod-41",
    "name": "Apex Pro Magnetic Resistance Indoor Smart Trainer Bike",
    "tagline": "Silent Belt Drive, 32 Magnetic Levels with Bluetooth Power Meter",
    "description": "Transform your home fitness with the Apex Pro Smart Bike. Features 32 levels of frictionless magnetic resistance, whisper-quiet poly-v belt drive, and seamless auto-sync with Zwift and Strava.",
    "price": 599,
    "originalPrice": 799,
    "discountPercent": 25,
    "category": "Fitness & Sports",
    "brand": "Apex Gear",
    "seller": {
      "id": "seller-5",
      "name": "Apex Activewear & Gear",
      "rating": 4.6,
      "salesCount": 1890,
      "isVerified": true,
      "location": "Denver, CO",
      "badge": "Pro Athlete Rated"
    },
    "rating": 4.7,
    "reviewsCount": 164,
    "stock": 8,
    "sku": "FIT-SELLER5-001",
    "imageUrl": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "32-level electromagnetic resistance dial",
      "Whisper-quiet belt transmission under 25dB",
      "Dual-sided pedals (SPD clips & toe cages)",
      "Built-in cadence and watt power meter with Bluetooth"
    ],
    "specifications": {
      "Flywheel": "35 lbs (16 kg)",
      "Max Weight": "330 lbs",
      "Connectivity": "Bluetooth 5.0, ANT+"
    },
    "tags": [
      "Smart Bike",
      "Cycling",
      "Fitness",
      "Cardio"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "createdAt": "2026-01-15T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-41-1",
        "userName": "Verified Buyer 38",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from Apex Activewear & Gear",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 38
      }
    ]
  },
  {
    "id": "prod-42",
    "name": "Apex Rapid-Adjust 55-Pound Dumbbell Pair with Stand",
    "tagline": "Quick 5-to-55 lbs Twist Selector, Replaces 15 Pairs of Weights",
    "description": "Streamline your strength workouts. With a simple turn of the knurled metal handle, select weights from 5 lbs up to 55 lbs in 2.5 lb increments with silent thermoplastic-coated plates.",
    "price": 349,
    "originalPrice": 429,
    "discountPercent": 19,
    "category": "Fitness & Sports",
    "brand": "Apex Gear",
    "seller": {
      "id": "seller-5",
      "name": "Apex Activewear & Gear",
      "rating": 4.6,
      "salesCount": 1890,
      "isVerified": true,
      "location": "Denver, CO",
      "badge": "Pro Athlete Rated"
    },
    "rating": 4.8,
    "reviewsCount": 175,
    "stock": 6,
    "sku": "FIT-SELLER5-002",
    "imageUrl": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Twist-to-change mechanism locks plates in 2 seconds",
      "Replaces 15 separate pairs of traditional dumbbells",
      "Anti-roll octagonal plate contour for stability",
      "Diamond knurled ergonomic steel grip handles"
    ],
    "specifications": {
      "Weight Range": "5 to 55 lbs each",
      "Increments": "15 Settings",
      "Pair": "2 Dumbbells + Cradles"
    },
    "tags": [
      "Dumbbells",
      "Weights",
      "Strength",
      "Home Gym"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-16T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-42-1",
        "userName": "Verified Buyer 45",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Apex Activewear & Gear",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 41
      }
    ]
  },
  {
    "id": "prod-43",
    "name": "Extra Thick 8mm High-Density Non-Slip Yoga & Workout Mat",
    "tagline": "Eco-Friendly TPE Material with Alignment Guide Lines and Carry Strap",
    "description": "Protect knees, joints, and spine during yoga, Pilates, and floor workouts. Textured dual-surface grip stays grounded on hardwood floors even during intense hot yoga sessions.",
    "price": 36.99,
    "originalPrice": 48,
    "discountPercent": 23,
    "category": "Fitness & Sports",
    "brand": "Apex Zen",
    "seller": {
      "id": "seller-5",
      "name": "Apex Activewear & Gear",
      "rating": 4.6,
      "salesCount": 1890,
      "isVerified": true,
      "location": "Denver, CO",
      "badge": "Pro Athlete Rated"
    },
    "rating": 4.8,
    "reviewsCount": 290,
    "stock": 45,
    "sku": "FIT-SELLER5-003",
    "imageUrl": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "8mm high-density cushioned eco TPE foam",
      "Laser-etched posture alignment grid guide lines",
      "Double-sided non-slip wave textured grip",
      "100% non-toxic, latex-free, and odorless"
    ],
    "specifications": {
      "Dimensions": "72\" L x 26\" W x 8mm Thick",
      "Material": "Eco-Friendly TPE",
      "Weight": "2.4 lbs"
    },
    "tags": [
      "Yoga Mat",
      "Pilates",
      "Fitness",
      "Stretching"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-17T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-43-1",
        "userName": "Verified Buyer 2",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Apex Activewear & Gear",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 44
      }
    ]
  },
  {
    "id": "prod-44",
    "name": "Deep Tissue Percussion Muscle Massage Gun (6 Attachments)",
    "tagline": "Brushless High-Torque Motor, 30 Speeds with LCD Touch Screen",
    "description": "Accelerate post-workout muscle recovery and relieve stubborn knots. Delivers 14mm deep percussion amplitude up to 3200 RPM with whisper-quiet noise reduction tech.",
    "price": 79.99,
    "originalPrice": 109.99,
    "discountPercent": 27,
    "category": "Fitness & Sports",
    "brand": "Apex Recovery",
    "seller": {
      "id": "seller-5",
      "name": "Apex Activewear & Gear",
      "rating": 4.6,
      "salesCount": 1890,
      "isVerified": true,
      "location": "Denver, CO",
      "badge": "Pro Athlete Rated"
    },
    "rating": 4.8,
    "reviewsCount": 340,
    "stock": 30,
    "sku": "FIT-SELLER5-004",
    "imageUrl": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "14mm stroke amplitude penetrates deep into fascia",
      "30 adjustable speed levels up to 3200 percussions/min",
      "Includes 6 specialized quick-swap massage heads",
      "2600mAh battery delivers 6 hours runtime per charge"
    ],
    "specifications": {
      "Speeds": "30 Levels",
      "Amplitude": "14mm",
      "Battery": "6 Hours"
    },
    "tags": [
      "Massage Gun",
      "Recovery",
      "Percussion",
      "Muscles"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-18T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-44-1",
        "userName": "Verified Buyer 9",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Apex Activewear & Gear",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 47
      }
    ]
  },
  {
    "id": "prod-45",
    "name": "Heavy-Duty 5-Piece Resistance Loop Bands Set with Door Anchor",
    "tagline": "100% Natural Malaysian Latex, Stackable Resistance from 10 to 150 lbs",
    "description": "Portable total-body gym in a travel pouch. Includes 5 colored resistance tube bands, padded ankle straps, cushioned foam handles, and heavy door anchor for full mobility.",
    "price": 29.99,
    "originalPrice": 39.99,
    "discountPercent": 25,
    "category": "Fitness & Sports",
    "brand": "Apex Fit",
    "seller": {
      "id": "seller-5",
      "name": "Apex Activewear & Gear",
      "rating": 4.6,
      "salesCount": 1890,
      "isVerified": true,
      "location": "Denver, CO",
      "badge": "Pro Athlete Rated"
    },
    "rating": 4.7,
    "reviewsCount": 410,
    "stock": 50,
    "sku": "FIT-SELLER5-005",
    "imageUrl": "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Snap-proof 100% continuous dipped Malaysian natural latex",
      "Stackable up to 150 lbs total combined resistance",
      "Heavy-duty steel carabiners and reinforced D-rings",
      "Includes waterproof nylon carry bag and workout poster"
    ],
    "specifications": {
      "Bands": "5 Tubes (10, 20, 30, 40, 50 lbs)",
      "Max Load": "150 lbs Combined",
      "Material": "Natural Latex"
    },
    "tags": [
      "Resistance Bands",
      "Home Workout",
      "Fitness",
      "Strength"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-19T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-45-1",
        "userName": "Verified Buyer 16",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from Apex Activewear & Gear",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 5
      }
    ]
  },
  {
    "id": "prod-46",
    "name": "Pro Speed Weighted Bearing Jump Rope with Steel Cable",
    "tagline": "360° Smooth Dual Ball Bearings, Kink-Free Tangle-Resistant PVC Coated Cable",
    "description": "Crush double-unders and high-intensity cardio training. Features 360-degree aluminum alloy ball bearings for effortless high-velocity rotations and customizable length.",
    "price": 19.99,
    "originalPrice": 26,
    "discountPercent": 23,
    "category": "Fitness & Sports",
    "brand": "Apex Speed",
    "seller": {
      "id": "seller-5",
      "name": "Apex Activewear & Gear",
      "rating": 4.6,
      "salesCount": 1890,
      "isVerified": true,
      "location": "Denver, CO",
      "badge": "Pro Athlete Rated"
    },
    "rating": 4.9,
    "reviewsCount": 220,
    "stock": 60,
    "sku": "FIT-SELLER5-006",
    "imageUrl": "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Precision dual 360-degree high-speed ball bearings",
      "Wear-resistant steel wire core coated in protective PVC",
      "Non-slip knurled aluminum alloy lightweight handles",
      "Tool-free quick thumbscrew length adjuster"
    ],
    "specifications": {
      "Cable Length": "10 Feet (Adjustable)",
      "Cable Diameter": "2.5mm",
      "Handle Material": "Aluminum"
    },
    "tags": [
      "Jump Rope",
      "Cardio",
      "CrossFit",
      "Speed"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-20T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-46-1",
        "userName": "Verified Buyer 23",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Apex Activewear & Gear",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "prod-47",
    "name": "Insulated 32-Ounce Stainless Steel Sports Bottle with Chug Cap",
    "tagline": "Double-Wall Vacuum Insulation, Keeps Drinks Ice Cold for 24 Hours",
    "description": "Hydration companion engineered for rigorous athletic demands. Built from 18/8 kitchen-grade stainless steel that never transfers metallic tastes, with leakproof spout cap.",
    "price": 24.5,
    "originalPrice": 32,
    "discountPercent": 23,
    "category": "Fitness & Sports",
    "brand": "Apex Hydro",
    "seller": {
      "id": "seller-5",
      "name": "Apex Activewear & Gear",
      "rating": 4.6,
      "salesCount": 1890,
      "isVerified": true,
      "location": "Denver, CO",
      "badge": "Pro Athlete Rated"
    },
    "rating": 4.9,
    "reviewsCount": 390,
    "stock": 42,
    "sku": "FIT-SELLER5-007",
    "imageUrl": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Double-wall vacuum insulation keeps cold 24h / hot 12h",
      "18/8 food-grade stainless steel with powder coat finish",
      "100% leakproof lockable sport chug lid with carry loop",
      "Wide mouth accommodates large ice cubes and fruit infusers"
    ],
    "specifications": {
      "Capacity": "32 oz (950 ml)",
      "Material": "18/8 Pro Stainless Steel",
      "BPA Free": "Yes"
    },
    "tags": [
      "Water Bottle",
      "Hydration",
      "Stainless Steel",
      "Gym"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-21T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-47-1",
        "userName": "Verified Buyer 30",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Apex Activewear & Gear",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 11
      }
    ]
  },
  {
    "id": "prod-48",
    "name": "Multi-Grip Wall-Mounted Heavy Duty Pull-Up Bar",
    "tagline": "High-Strength Steel Frame Supports 400 lbs, 6 Ergonomic Grip Angles",
    "description": "Build upper body lat, arm, and core strength. Solid welded alloy steel construction with dense foam grips and eyelets for hanging punching bags or resistance straps.",
    "price": 68,
    "originalPrice": 85,
    "discountPercent": 20,
    "category": "Fitness & Sports",
    "brand": "Apex Strength",
    "seller": {
      "id": "seller-5",
      "name": "Apex Activewear & Gear",
      "rating": 4.6,
      "salesCount": 1890,
      "isVerified": true,
      "location": "Denver, CO",
      "badge": "Pro Athlete Rated"
    },
    "rating": 4.8,
    "reviewsCount": 170,
    "stock": 18,
    "sku": "FIT-SELLER5-008",
    "imageUrl": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Heavy-gauge reinforced steel holds up to 400 lbs",
      "6 multi-grip options for wide, narrow, and neutral pull-ups",
      "Heavy-duty mounting hardware for studs or concrete walls",
      "Dedicated center suspension anchor hook for boxing bags"
    ],
    "specifications": {
      "Max Load": "400 lbs (180 kg)",
      "Width": "48 Inches",
      "Material": "Alloy Steel"
    },
    "tags": [
      "Pull-Up Bar",
      "Calisthenics",
      "Upper Body",
      "Strength"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-22T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-48-1",
        "userName": "Verified Buyer 37",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Apex Activewear & Gear",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-49",
    "name": "Apex Smart GPS Fitness Tracker with AMOLED Color Display",
    "tagline": "Continuous Heart Rate, SpO2, Sleep Tracking & 100+ Sports Modes",
    "description": "Track workouts with autonomous built-in GPS. Monitors heart rate variability, blood oxygen, stress levels, and delivers 14-day battery life on a single charge with 50m water resistance.",
    "price": 99,
    "originalPrice": 129,
    "discountPercent": 23,
    "category": "Fitness & Sports",
    "brand": "Apex Tech",
    "seller": {
      "id": "seller-5",
      "name": "Apex Activewear & Gear",
      "rating": 4.6,
      "salesCount": 1890,
      "isVerified": true,
      "location": "Denver, CO",
      "badge": "Pro Athlete Rated"
    },
    "rating": 4.6,
    "reviewsCount": 280,
    "stock": 25,
    "sku": "FIT-SELLER5-009",
    "imageUrl": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Built-in multi-GNSS satellite positioning tracker",
      "1.43-inch vivid AMOLED sunlight-readable touchscreen",
      "Continuous heart rate, SpO2, and deep sleep stages",
      "5 ATM water resistance safe for swimming and showering"
    ],
    "specifications": {
      "Display": "1.43\" AMOLED",
      "Battery": "Up to 14 Days",
      "Waterproof": "50 Meters (5 ATM)"
    },
    "tags": [
      "Fitness Tracker",
      "Smartwatch",
      "Heart Rate",
      "GPS"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-23T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-49-1",
        "userName": "Verified Buyer 44",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from Apex Activewear & Gear",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 17
      }
    ]
  },
  {
    "id": "prod-50",
    "name": "Foldable Multi-Position Incline & Decline Weight Bench",
    "tagline": "8 Backrest Positions, 800 lbs Heavy Duty Steel, Folds Flat for Storage",
    "description": "Target chest, shoulders, and core from flat, incline, and decline angles. Thick 2.5-inch multi-layer foam padding wrapped in tear-resistant sweatproof commercial vinyl.",
    "price": 139,
    "originalPrice": 179,
    "discountPercent": 22,
    "category": "Fitness & Sports",
    "brand": "Apex Strength",
    "seller": {
      "id": "seller-5",
      "name": "Apex Activewear & Gear",
      "rating": 4.6,
      "salesCount": 1890,
      "isVerified": true,
      "location": "Denver, CO",
      "badge": "Pro Athlete Rated"
    },
    "rating": 4.8,
    "reviewsCount": 155,
    "stock": 12,
    "sku": "FIT-SELLER5-010",
    "imageUrl": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "8 backrest angles (-20° decline up to 90° upright incline)",
      "Triangular mechanical support structure holds 800 lbs",
      "Folds down to just 9 inches high for under-bed storage",
      "Thick 2.5-inch high-density padding prevents spine stress"
    ],
    "specifications": {
      "Weight Capacity": "800 lbs",
      "Angles": "8 Back, 3 Seat Positions",
      "Folded Height": "9 Inches"
    },
    "tags": [
      "Weight Bench",
      "Home Gym",
      "Strength",
      "Adjustable"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-24T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-50-1",
        "userName": "Verified Buyer 1",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Apex Activewear & Gear",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 20
      }
    ]
  },
  {
    "id": "prod-51",
    "name": "The Architecture of Modern Software Systems (Hardcover)",
    "tagline": "Definitive Guide to Distributed Systems, Microservices & Event-Driven Architecture",
    "description": "Explains practical patterns for building fault-tolerant, scalable, and observable distributed systems. Includes 12 case studies from real-world high-throughput platforms.",
    "price": 54.99,
    "originalPrice": 65,
    "discountPercent": 15,
    "category": "Books & Stationery",
    "brand": "TechPress Editions",
    "seller": {
      "id": "seller-6",
      "name": "PageTurners Bookshop",
      "rating": 4.9,
      "salesCount": 970,
      "isVerified": true,
      "location": "Boston, MA",
      "badge": "Verified Publisher"
    },
    "rating": 4.9,
    "reviewsCount": 380,
    "stock": 65,
    "sku": "BK-SELLER6-001",
    "imageUrl": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Over 580 pages with detailed full-color system diagrams",
      "In-depth exploration of Consensus (Raft), CAP, and CQRS",
      "Real-world production failure post-mortems and mitigations",
      "Collector edition hardcover with ribbon bookmark"
    ],
    "specifications": {
      "Pages": "584 pages",
      "Format": "Hardcover",
      "Language": "English"
    },
    "tags": [
      "Engineering",
      "Software",
      "Architecture",
      "Books"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "createdAt": "2026-01-25T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-51-1",
        "userName": "Verified Buyer 8",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PageTurners Bookshop",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": "prod-52",
    "name": "System Design Interview & Cloud Architecture Playbook",
    "tagline": "From Junior to Principal: 24 Scalable Real-World Architectural Blueprints",
    "description": "Ace technical design interviews and master distributed architectures. Includes step-by-step blueprints for video streaming, ride dispatching, rate limiters, and payment ledgers.",
    "price": 49.95,
    "originalPrice": 59.95,
    "discountPercent": 17,
    "category": "Books & Stationery",
    "brand": "TechPress Editions",
    "seller": {
      "id": "seller-6",
      "name": "PageTurners Bookshop",
      "rating": 4.9,
      "salesCount": 970,
      "isVerified": true,
      "location": "Boston, MA",
      "badge": "Verified Publisher"
    },
    "rating": 4.9,
    "reviewsCount": 540,
    "stock": 52,
    "sku": "BK-SELLER6-002",
    "imageUrl": "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "24 realistic system design problems dissected step by step",
      "Complete calculations for QPS, latency, and storage budget",
      "Deep dives into indexing, sharding, caching, and CDC",
      "Lay-flat binding for comfortable reading at desk"
    ],
    "specifications": {
      "Pages": "432 pages",
      "Edition": "3rd Revised (2026)",
      "Format": "Paperback"
    },
    "tags": [
      "System Design",
      "Interview",
      "Cloud",
      "Books"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-26T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-52-1",
        "userName": "Verified Buyer 15",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PageTurners Bookshop",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 26
      }
    ]
  },
  {
    "id": "prod-53",
    "name": "Handcrafted Full-Grain Leather Refillable Journal (A5)",
    "tagline": "Rustic Distressed Leather with 240 Pages of 120 GSM Bleed-Proof Paper",
    "description": "An inspiring keepsake journal for thoughts, sketches, and daily reflections. Natural vegetable-tanned leather bound with leather wrap tie and thick fountain-pen friendly cream paper.",
    "price": 38,
    "originalPrice": 48,
    "discountPercent": 21,
    "category": "Books & Stationery",
    "brand": "PageTurners Crafts",
    "seller": {
      "id": "seller-6",
      "name": "PageTurners Bookshop",
      "rating": 4.9,
      "salesCount": 970,
      "isVerified": true,
      "location": "Boston, MA",
      "badge": "Verified Publisher"
    },
    "rating": 4.9,
    "reviewsCount": 210,
    "stock": 35,
    "sku": "BK-SELLER6-003",
    "imageUrl": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "100% genuine buffalo pull-up leather cover",
      "240 pages of 120 GSM archival acid-free cream paper",
      "Zero bleed-through with fountain pen inks and markers",
      "Refillable A5 binder structure lasts for generations"
    ],
    "specifications": {
      "Size": "A5 (8.5 x 6 Inches)",
      "Pages": "240 Lined Pages",
      "Paper Weight": "120 GSM"
    },
    "tags": [
      "Journal",
      "Leather",
      "Stationery",
      "Notebook"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-27T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-53-1",
        "userName": "Verified Buyer 22",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PageTurners Bookshop",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 29
      }
    ]
  },
  {
    "id": "prod-54",
    "name": "Executive Brass Fountain Pen with Fine Iridium Nib",
    "tagline": "Solid Milled Brass Body, Balanced Weight with Piston Ink Converter",
    "description": "Elevate your daily writing experience. Precision German iridium nib glides effortlessly across paper, encased in raw brushed brass that develops a personal vintage patina with time.",
    "price": 45,
    "originalPrice": 60,
    "discountPercent": 25,
    "category": "Books & Stationery",
    "brand": "PageTurners Writing",
    "seller": {
      "id": "seller-6",
      "name": "PageTurners Bookshop",
      "rating": 4.9,
      "salesCount": 970,
      "isVerified": true,
      "location": "Boston, MA",
      "badge": "Verified Publisher"
    },
    "rating": 4.8,
    "reviewsCount": 165,
    "stock": 28,
    "sku": "BK-SELLER6-004",
    "imageUrl": "https://images.unsplash.com/photo-1585336261026-7fcf9395cf64?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1585336261026-7fcf9395cf64?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585336261026-7fcf9395cf64?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Solid heavyweight brass construction for effortless pressure",
      "Hand-tuned German fine 0.5mm iridium tipped nib",
      "Includes international standard piston ink converter",
      "Packaged in debossed matte black presentation gift tin"
    ],
    "specifications": {
      "Nib Size": "Fine 0.5mm",
      "Weight": "42 grams",
      "Material": "Solid Brass"
    },
    "tags": [
      "Fountain Pen",
      "Pen",
      "Calligraphy",
      "Stationery"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-10T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-54-1",
        "userName": "Verified Buyer 29",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PageTurners Bookshop",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 32
      }
    ]
  },
  {
    "id": "prod-55",
    "name": "Modern Typography & Visual Identity Design (Hardcover)",
    "tagline": "Principles of Grid Systems, Kerning, and Contemporary Brand Type",
    "description": "A visual celebration of type and layout design. Features 300+ full-color specimens from leading design studios worldwide, exploring the psychology of typography in digital interfaces.",
    "price": 52,
    "originalPrice": 65,
    "discountPercent": 20,
    "category": "Books & Stationery",
    "brand": "VisualCraft Books",
    "seller": {
      "id": "seller-6",
      "name": "PageTurners Bookshop",
      "rating": 4.9,
      "salesCount": 970,
      "isVerified": true,
      "location": "Boston, MA",
      "badge": "Verified Publisher"
    },
    "rating": 4.9,
    "reviewsCount": 130,
    "stock": 22,
    "sku": "BK-SELLER6-005",
    "imageUrl": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Curated masterclasses on typographic hierarchy and scales",
      "Comparative analysis of 50 timeless font families",
      "Foil-stamped textured linen cloth hardcover binding",
      "High-density coated art paper for true color accuracy"
    ],
    "specifications": {
      "Pages": "380 pages",
      "Dimensions": "9 x 11.5 Inches",
      "Format": "Hardcover"
    },
    "tags": [
      "Typography",
      "Design",
      "Art",
      "Books"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-11T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-55-1",
        "userName": "Verified Buyer 36",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PageTurners Bookshop",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 35
      }
    ]
  },
  {
    "id": "prod-56",
    "name": "Executive Linen Hardcover Dotted Grid Notebook (Pack of 2)",
    "tagline": "160 GSM Ultra-Thick Paper with Dual Ribbon Bookmarks & Pen Loop",
    "description": "The preferred notebook for bullet journalists and planners. Heavyweight 160 GSM bamboo paper handles watercolor, gouache, and fountain pens without ghosting.",
    "price": 29.5,
    "originalPrice": 38,
    "discountPercent": 22,
    "category": "Books & Stationery",
    "brand": "PageTurners Paper",
    "seller": {
      "id": "seller-6",
      "name": "PageTurners Bookshop",
      "rating": 4.9,
      "salesCount": 970,
      "isVerified": true,
      "location": "Boston, MA",
      "badge": "Verified Publisher"
    },
    "rating": 4.8,
    "reviewsCount": 310,
    "stock": 40,
    "sku": "BK-SELLER6-006",
    "imageUrl": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "160 GSM bamboo paper completely resists ink ghosting",
      "5mm subtle light gray dot grid matrix on all pages",
      "Expandable inner back pocket for receipts and notes",
      "Pack of 2 complementary earth-tone linen hardcover books"
    ],
    "specifications": {
      "Grid": "5mm Dot Matrix",
      "Paper": "160 GSM Ultra-Thick",
      "Quantity": "2 Notebooks"
    },
    "tags": [
      "Notebook",
      "Bullet Journal",
      "Stationery",
      "Paper"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-12T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-56-1",
        "userName": "Verified Buyer 43",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PageTurners Bookshop",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 38
      }
    ]
  },
  {
    "id": "prod-57",
    "name": "Microservices & Distributed Systems in Practice Handbook",
    "tagline": "Production-Grade Observability, Resilience Patterns & Kubernetes Deployments",
    "description": "Hands-on guide to containerized microservices architecture. Delivers concrete code patterns for OpenTelemetry distributed tracing, circuit breakers, and zero-downtime canary rollouts.",
    "price": 48.5,
    "originalPrice": 58,
    "discountPercent": 16,
    "category": "Books & Stationery",
    "brand": "TechPress Editions",
    "seller": {
      "id": "seller-6",
      "name": "PageTurners Bookshop",
      "rating": 4.9,
      "salesCount": 970,
      "isVerified": true,
      "location": "Boston, MA",
      "badge": "Verified Publisher"
    },
    "rating": 4.8,
    "reviewsCount": 195,
    "stock": 32,
    "sku": "BK-SELLER6-007",
    "imageUrl": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Includes runnable Docker and Kubernetes deployment manifests",
      "In-depth coverage of service mesh (Istio) and mTLS security",
      "Practical strategies for event sourcing with Apache Kafka",
      "Production checklist for high-concurrency readiness"
    ],
    "specifications": {
      "Pages": "512 pages",
      "Language": "English",
      "Format": "Paperback"
    },
    "tags": [
      "Microservices",
      "Kubernetes",
      "Cloud",
      "Programming"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-13T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-57-1",
        "userName": "Verified Buyer 50",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PageTurners Bookshop",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 41
      }
    ]
  },
  {
    "id": "prod-58",
    "name": "Calligraphy Master Artist Ink & Dip Pen Gift Set",
    "tagline": "Handmade Wooden Dip Pen, 6 Interchangeable Nibs & 4 Black Inks",
    "description": "Awaken your inner scribe with this traditional calligraphy set. Features 6 precision nibs for Gothic, Italic, and Copperplate script styles, with water-resistant pigmented inks.",
    "price": 34,
    "originalPrice": 45,
    "discountPercent": 24,
    "category": "Books & Stationery",
    "brand": "PageTurners Art",
    "seller": {
      "id": "seller-6",
      "name": "PageTurners Bookshop",
      "rating": 4.9,
      "salesCount": 970,
      "isVerified": true,
      "location": "Boston, MA",
      "badge": "Verified Publisher"
    },
    "rating": 4.7,
    "reviewsCount": 180,
    "stock": 25,
    "sku": "BK-SELLER6-008",
    "imageUrl": "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "6 stainless steel nibs covering wide broad to ultrafine points",
      "Ergonomic dual-tone rosewood pen holder barrel",
      "4 bottles of archival non-toxic pigmented calligraphy inks",
      "Includes introductory instructional lettering practice book"
    ],
    "specifications": {
      "Nibs": "6 Stainless Nibs",
      "Ink": "4x 15ml Bottles",
      "Holder": "Rosewood"
    },
    "tags": [
      "Calligraphy",
      "Art",
      "Ink",
      "Stationery"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-14T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-58-1",
        "userName": "Verified Buyer 7",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from PageTurners Bookshop",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 44
      }
    ]
  },
  {
    "id": "prod-59",
    "name": "The Art of Clean Code & Refactoring (Collectors Edition)",
    "tagline": "Timeless Software Craftsmanship, Unit Testing, and Smells Elimination",
    "description": "The definitive manual for writing maintainable, expressive code. Learn how to transform tangled legacy codebases into elegant, self-documenting architectures with unit tests.",
    "price": 46,
    "originalPrice": 55,
    "discountPercent": 16,
    "category": "Books & Stationery",
    "brand": "TechPress Editions",
    "seller": {
      "id": "seller-6",
      "name": "PageTurners Bookshop",
      "rating": 4.9,
      "salesCount": 970,
      "isVerified": true,
      "location": "Boston, MA",
      "badge": "Verified Publisher"
    },
    "rating": 4.9,
    "reviewsCount": 460,
    "stock": 45,
    "sku": "BK-SELLER6-009",
    "imageUrl": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Hundreds of before-and-after code refactoring case studies",
      "Clean naming conventions, function cohesion, and DRY principles",
      "Test-Driven Development (TDD) best practices guide",
      "Includes bookmarks and quick-reference syntax cheat card"
    ],
    "specifications": {
      "Pages": "464 pages",
      "Binding": "Smyth-Sewn Hardcover",
      "Edition": "Deluxe 2026"
    },
    "tags": [
      "Clean Code",
      "Refactoring",
      "Software",
      "Books"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-15T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-59-1",
        "userName": "Verified Buyer 14",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PageTurners Bookshop",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 47
      }
    ]
  },
  {
    "id": "prod-60",
    "name": "Solid Anodized Aluminum Minimalist Desk Organizer Tray",
    "tagline": "CNC Milled Aluminum with Microfiber Felt Compartments & Pen Rest",
    "description": "Bring clean minimalist order to your workspace. Machined from a solid block of aircraft-grade aluminum with silicone non-slip footing and dedicated grooves for pens and cables.",
    "price": 39,
    "originalPrice": 49,
    "discountPercent": 20,
    "category": "Books & Stationery",
    "brand": "PageTurners Desk",
    "seller": {
      "id": "seller-6",
      "name": "PageTurners Bookshop",
      "rating": 4.9,
      "salesCount": 970,
      "isVerified": true,
      "location": "Boston, MA",
      "badge": "Verified Publisher"
    },
    "rating": 4.8,
    "reviewsCount": 175,
    "stock": 30,
    "sku": "BK-SELLER6-010",
    "imageUrl": "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Milled from a solid block of 6063 aerospace aluminum",
      "Precision slots for stylus, fountain pen, sticky notes, and clips",
      "Base equipped with anti-scratch silicone desk pads",
      "Bead-blasted space gray matte anodized finish"
    ],
    "specifications": {
      "Dimensions": "9.5\" L x 4.5\" W x 0.8\" H",
      "Weight": "480 grams",
      "Material": "6063 Aluminum"
    },
    "tags": [
      "Desk Organizer",
      "Stationery",
      "Office",
      "Accessories"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-16T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-60-1",
        "userName": "Verified Buyer 21",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PageTurners Bookshop",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 5
      }
    ]
  },
  {
    "id": "prod-61",
    "name": "Botanical 20% Vitamin C Radiance Facial Serum",
    "tagline": "With Hyaluronic Acid, Ferulic Acid & Organic Jojoba Extract",
    "description": "Brighten dark spots and boost collagen production naturally. Dermatologist-tested antioxidant serum fights environmental damage, evens skin tone, and restores youthful glow.",
    "price": 38,
    "originalPrice": 48,
    "discountPercent": 21,
    "category": "Beauty & Personal Care",
    "brand": "GlowBotanicals",
    "seller": {
      "id": "seller-7",
      "name": "GlowBotanicals Organic",
      "rating": 4.8,
      "salesCount": 2850,
      "isVerified": true,
      "location": "Portland, OR",
      "badge": "Clean Beauty Certified"
    },
    "rating": 4.8,
    "reviewsCount": 410,
    "stock": 55,
    "sku": "BTY-SELLER7-001",
    "imageUrl": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Stabilized 20% L-Ascorbic Acid with Ferulic acid booster",
      "Deeply hydrating plant-derived Hyaluronic Acid base",
      "Cruelty-free, vegan, parabens-free clean formulation",
      "Packaged in UV-protective amber dropper bottle"
    ],
    "specifications": {
      "Volume": "30 ml (1 fl oz)",
      "Skin Type": "All Skin Types",
      "Origin": "Made in Oregon, USA"
    },
    "tags": [
      "Skincare",
      "Serum",
      "Vitamin C",
      "Clean Beauty"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "createdAt": "2026-01-17T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-61-1",
        "userName": "Verified Buyer 28",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from GlowBotanicals Organic",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "prod-62",
    "name": "Ultrasonic Ionic Facial Cleansing & Exfoliating Brush",
    "tagline": "Sonic Silicone Pulsations (12,000 RPM) with Heated Massage Backplate",
    "description": "Unclog 99.5% of dirt, oil, and makeup residue with gentle medical-grade silicone bristles. Backplate heats up to 108°F to dramatically enhance serum and cream absorption.",
    "price": 59,
    "originalPrice": 79,
    "discountPercent": 25,
    "category": "Beauty & Personal Care",
    "brand": "GlowTech",
    "seller": {
      "id": "seller-7",
      "name": "GlowBotanicals Organic",
      "rating": 4.8,
      "salesCount": 2850,
      "isVerified": true,
      "location": "Portland, OR",
      "badge": "Clean Beauty Certified"
    },
    "rating": 4.7,
    "reviewsCount": 230,
    "stock": 28,
    "sku": "BTY-SELLER7-002",
    "imageUrl": "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Ultra-hygienic soft silicone bristles resist bacteria buildup",
      "12,000 sonic vibrations per minute across 8 intensity levels",
      "Thermal massage mode accelerates active skincare absorption",
      "IPX7 100% waterproof design safe for shower use"
    ],
    "specifications": {
      "Waterproof": "IPX7",
      "Battery": "Rechargeable (200 Uses)",
      "Material": "Medical Silicone"
    },
    "tags": [
      "Facial Cleanser",
      "Skincare Device",
      "Beauty",
      "Spa"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-18T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-62-1",
        "userName": "Verified Buyer 35",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from GlowBotanicals Organic",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 11
      }
    ]
  },
  {
    "id": "prod-63",
    "name": "100% Natural Rose Quartz Facial Roller & Gua Sha Set",
    "tagline": "Hand-Carved Brazilian Rose Quartz with Reinforced Zinc Alloy Frame",
    "description": "Soothe puffiness, stimulate lymphatic drainage, and define facial contours. Handcrafted from authentic natural gemstone that retains cooling temperatures naturally.",
    "price": 26.5,
    "originalPrice": 35,
    "discountPercent": 24,
    "category": "Beauty & Personal Care",
    "brand": "GlowBotanicals",
    "seller": {
      "id": "seller-7",
      "name": "GlowBotanicals Organic",
      "rating": 4.8,
      "salesCount": 2850,
      "isVerified": true,
      "location": "Portland, OR",
      "badge": "Clean Beauty Certified"
    },
    "rating": 4.9,
    "reviewsCount": 320,
    "stock": 45,
    "sku": "BTY-SELLER7-003",
    "imageUrl": "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Carved from 100% authentic Grade-A Brazilian rose quartz",
      "Integrated silicone insert eliminates squeaking noises",
      "Ergonomic heart-shaped Gua Sha sculpts jawline and cheekbones",
      "Includes velvet storage pouch and facial massage chart"
    ],
    "specifications": {
      "Stone": "Authentic Brazilian Rose Quartz",
      "Frame": "Rose Gold Plated Alloy",
      "Set": "Roller + Gua Sha"
    },
    "tags": [
      "Gua Sha",
      "Face Roller",
      "Rose Quartz",
      "Skincare"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-19T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-63-1",
        "userName": "Verified Buyer 42",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from GlowBotanicals Organic",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-64",
    "name": "Pure Cold-Pressed Moroccan Argan Oil (100ml / 3.4 oz)",
    "tagline": "Single Origin Organic Argania Spinosa for Hair, Face & Cuticles",
    "description": "Rich in natural Vitamin E, essential fatty acids, and antioxidants. Restores brilliant shine to damaged hair, tames frizz, and locks deep moisture into dry skin.",
    "price": 29,
    "originalPrice": 38,
    "discountPercent": 24,
    "category": "Beauty & Personal Care",
    "brand": "GlowBotanicals",
    "seller": {
      "id": "seller-7",
      "name": "GlowBotanicals Organic",
      "rating": 4.8,
      "salesCount": 2850,
      "isVerified": true,
      "location": "Portland, OR",
      "badge": "Clean Beauty Certified"
    },
    "rating": 4.9,
    "reviewsCount": 280,
    "stock": 40,
    "sku": "BTY-SELLER7-004",
    "imageUrl": "https://images.unsplash.com/photo-1608248597359-5779c5011740?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1608248597359-5779c5011740?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608248597359-5779c5011740?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "100% pure USDA Certified Organic cold-pressed Moroccan oil",
      "Fast-absorbing non-greasy texture hydrates deeply",
      "Multi-purpose: repair split ends, hydrate skin, strengthen nails",
      "Free from chemical solvents, fragrances, and preservatives"
    ],
    "specifications": {
      "Volume": "100 ml (3.4 fl oz)",
      "Extraction": "Cold-Pressed Unrefined",
      "Cert": "USDA Organic"
    },
    "tags": [
      "Argan Oil",
      "Hair Care",
      "Organic",
      "Natural"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-20T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-64-1",
        "userName": "Verified Buyer 49",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from GlowBotanicals Organic",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 17
      }
    ]
  },
  {
    "id": "prod-65",
    "name": "Organic Arabica Coffee & Brown Sugar Exfoliating Body Scrub",
    "tagline": "With Sweet Almond Oil, Shea Butter & Dead Sea Salt Crystals",
    "description": "Buff away dead skin cells and boost circulation with natural roasted coffee grounds. Enriched with cold-pressed almond oil to leave skin buttery soft and revitalized.",
    "price": 22,
    "originalPrice": 28,
    "discountPercent": 21,
    "category": "Beauty & Personal Care",
    "brand": "GlowBotanicals",
    "seller": {
      "id": "seller-7",
      "name": "GlowBotanicals Organic",
      "rating": 4.8,
      "salesCount": 2850,
      "isVerified": true,
      "location": "Portland, OR",
      "badge": "Clean Beauty Certified"
    },
    "rating": 4.8,
    "reviewsCount": 350,
    "stock": 50,
    "sku": "BTY-SELLER7-005",
    "imageUrl": "https://images.unsplash.com/photo-1567928815114-b1554ae1b957?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1567928815114-b1554ae1b957?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567928815114-b1554ae1b957?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Real roasted organic Arabica coffee beans stimulate circulation",
      "Fine brown sugar crystals gently polish without micro-tears",
      "Rich shea butter and coconut oil replenish moisture barrier",
      "100% natural invigorating fresh espresso aroma"
    ],
    "specifications": {
      "Weight": "350 grams (12 oz)",
      "Ingredients": "Organic Coffee, Shea, Sugar",
      "Cruelty Free": "Yes"
    },
    "tags": [
      "Body Scrub",
      "Exfoliator",
      "Coffee",
      "Body Care"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-21T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-65-1",
        "userName": "Verified Buyer 6",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from GlowBotanicals Organic",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 20
      }
    ]
  },
  {
    "id": "prod-66",
    "name": "Professional Salon Negative Ionic Hair Dryer (1800W)",
    "tagline": "Brushless BLDC Motor (110,000 RPM) with Magnetic Styling Nozzles",
    "description": "Dries hair in half the time without heat damage. Emits 200 million negative ions per cm³ to lock in moisture, eliminate static frizz, and enhance hair shine.",
    "price": 139,
    "originalPrice": 179,
    "discountPercent": 22,
    "category": "Beauty & Personal Care",
    "brand": "GlowPro Hair",
    "seller": {
      "id": "seller-7",
      "name": "GlowBotanicals Organic",
      "rating": 4.8,
      "salesCount": 2850,
      "isVerified": true,
      "location": "Portland, OR",
      "badge": "Clean Beauty Certified"
    },
    "rating": 4.8,
    "reviewsCount": 195,
    "stock": 18,
    "sku": "BTY-SELLER7-006",
    "imageUrl": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Ultra-fast 110,000 RPM brushless motor dries in 3-5 minutes",
      "Smart NTC thermal sensor monitors air temp 100 times/second",
      "Includes 360-degree magnetic concentrator & diffuser nozzles",
      "Lightweight 390g ergonomic balanced handle design"
    ],
    "specifications": {
      "Power": "1800W BLDC",
      "Noise": "59dB Whisper Quiet",
      "Attachments": "Diffuser + Concentrator"
    },
    "tags": [
      "Hair Dryer",
      "Ionic",
      "Salon",
      "Hair Styling"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-22T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-66-1",
        "userName": "Verified Buyer 13",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from GlowBotanicals Organic",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": "prod-67",
    "name": "Ceramide & Multi-Peptide Barrier Repair Night Cream",
    "tagline": "5 Essential Ceramides, Centella Asiatica & Niacinamide Complex",
    "description": "Wake up to deeply repaired, calm skin. Rich buttery moisturizer restores damaged skin moisture barriers, replenishes lipid balance, and reduces facial redness overnight.",
    "price": 36,
    "originalPrice": 45,
    "discountPercent": 20,
    "category": "Beauty & Personal Care",
    "brand": "GlowBotanicals",
    "seller": {
      "id": "seller-7",
      "name": "GlowBotanicals Organic",
      "rating": 4.8,
      "salesCount": 2850,
      "isVerified": true,
      "location": "Portland, OR",
      "badge": "Clean Beauty Certified"
    },
    "rating": 4.9,
    "reviewsCount": 275,
    "stock": 38,
    "sku": "BTY-SELLER7-007",
    "imageUrl": "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Bio-identical ceramide complex (EOP, NS, NP, AS, AP)",
      "Centella Asiatica (Cica) calms irritated, sensitized skin",
      "4% Niacinamide strengthens skin elasticity and reduces pore size",
      "Fragrance-free, hypoallergenic, non-comedogenic"
    ],
    "specifications": {
      "Volume": "50 ml (1.7 oz)",
      "Texture": "Rich Velvety Cream",
      "Skin Type": "Dry / Sensitive"
    },
    "tags": [
      "Night Cream",
      "Ceramides",
      "Moisturizer",
      "Skincare"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-23T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-67-1",
        "userName": "Verified Buyer 20",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from GlowBotanicals Organic",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 26
      }
    ]
  },
  {
    "id": "prod-68",
    "name": "Activated Charcoal & Coconut Oil Natural Teeth Whitening Kit",
    "tagline": "Peroxide-Free Enamel-Safe Powder with 2 Bamboo Charcoal Toothbrushes",
    "description": "Gently lift coffee, tea, and wine stains without harsh chemicals or tooth sensitivity. Formulated with ultra-fine coconut shell charcoal and bentonite clay.",
    "price": 18.5,
    "originalPrice": 24,
    "discountPercent": 23,
    "category": "Beauty & Personal Care",
    "brand": "GlowSmile",
    "seller": {
      "id": "seller-7",
      "name": "GlowBotanicals Organic",
      "rating": 4.8,
      "salesCount": 2850,
      "isVerified": true,
      "location": "Portland, OR",
      "badge": "Clean Beauty Certified"
    },
    "rating": 4.7,
    "reviewsCount": 310,
    "stock": 52,
    "sku": "BTY-SELLER7-008",
    "imageUrl": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Ultra-fine food-grade activated coconut charcoal powder",
      "Bentonite clay remineralizes teeth enamel safely",
      "Includes 2 biodegradable organic bamboo toothbrushes",
      "100% fluoride-free and peroxide-free sensitivity safe"
    ],
    "specifications": {
      "Weight": "60g Powder",
      "Brushes": "2 Bamboo Brushes",
      "Enamel Safe": "Yes"
    },
    "tags": [
      "Teeth Whitening",
      "Charcoal",
      "Oral Care",
      "Eco-friendly"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-24T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-68-1",
        "userName": "Verified Buyer 27",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from GlowBotanicals Organic",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 29
      }
    ]
  },
  {
    "id": "prod-69",
    "name": "Handcrafted Cold-Process Organic Artisan Soap Set (4 Bars)",
    "tagline": "Lavender Dreams, Eucalyptus Mint, Oatmeal Honey & Citrus Bliss",
    "description": "Traditional slow cold-process soap bars enriched with organic olive oil, coconut oil, and unrefined shea butter. Creates rich, creamy lather without synthetic foaming agents.",
    "price": 24,
    "originalPrice": 32,
    "discountPercent": 25,
    "category": "Beauty & Personal Care",
    "brand": "GlowBotanicals",
    "seller": {
      "id": "seller-7",
      "name": "GlowBotanicals Organic",
      "rating": 4.8,
      "salesCount": 2850,
      "isVerified": true,
      "location": "Portland, OR",
      "badge": "Clean Beauty Certified"
    },
    "rating": 4.9,
    "reviewsCount": 220,
    "stock": 45,
    "sku": "BTY-SELLER7-009",
    "imageUrl": "https://images.unsplash.com/photo-1607006314592-32111d4d3a28?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1607006314592-32111d4d3a28?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607006314592-32111d4d3a28?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Crafted in small batches with 6-week slow curing process",
      "Scented exclusively with pure therapeutic grade essential oils",
      "Rich natural plant glycerin leaves skin moisturized and soft",
      "Palm oil free, plastic-free biodegradable paper gift packaging"
    ],
    "specifications": {
      "Quantity": "4 Bars x 115g (4 oz each)",
      "Base": "Olive, Coconut & Shea",
      "Packaging": "100% Recycled"
    },
    "tags": [
      "Soap",
      "Artisan",
      "Organic",
      "Bath & Body"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-25T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-69-1",
        "userName": "Verified Buyer 34",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from GlowBotanicals Organic",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 32
      }
    ]
  },
  {
    "id": "prod-70",
    "name": "Luxury Sandalwood Beard Grooming & Styling Kit",
    "tagline": "Beard Growth Oil, Conditioning Balm, Boar Bristle Brush & Pear Wood Comb",
    "description": "Everything required to cultivate, soften, and style a magnificent beard. Formulated with organic argan and jojoba oils infused with classic warm sandalwood notes.",
    "price": 34.99,
    "originalPrice": 45,
    "discountPercent": 22,
    "category": "Beauty & Personal Care",
    "brand": "GlowMan",
    "seller": {
      "id": "seller-7",
      "name": "GlowBotanicals Organic",
      "rating": 4.8,
      "salesCount": 2850,
      "isVerified": true,
      "location": "Portland, OR",
      "badge": "Clean Beauty Certified"
    },
    "rating": 4.8,
    "reviewsCount": 260,
    "stock": 32,
    "sku": "BTY-SELLER7-010",
    "imageUrl": "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1621607512214-68297480165e?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Conditioning beard oil stops beard itch and softens coarse hairs",
      "All-natural styling balm with beeswax provides medium hold",
      "100% wild boar bristle brush distributes natural facial oils",
      "Dual-sided static-free anti-snag pear wood pocket comb"
    ],
    "specifications": {
      "Includes": "Oil (30ml), Balm (60g), Brush, Comb, Scissors",
      "Scent": "Warm Sandalwood"
    },
    "tags": [
      "Beard Care",
      "Grooming",
      "Men",
      "Shaving"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-26T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-70-1",
        "userName": "Verified Buyer 41",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from GlowBotanicals Organic",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 35
      }
    ]
  },
  {
    "id": "prod-71",
    "name": "PixelPlay Elite Wireless Esports Controller with Hall Effect Sticks",
    "tagline": "Zero Drift Magnetic Joysticks, 1000Hz Polling Rate & 4 Remappable Paddles",
    "description": "Dominate competitive games on PC, Nintendo Switch, and Mobile. Hall Effect magnetic sensors eliminate stick drift permanently, with mechanical micro-switch face buttons.",
    "price": 69.99,
    "originalPrice": 89.99,
    "discountPercent": 22,
    "category": "Toys & Video Games",
    "brand": "PixelPlay Pro",
    "seller": {
      "id": "seller-8",
      "name": "PixelPlay Gaming & Toys",
      "rating": 4.7,
      "salesCount": 3120,
      "isVerified": true,
      "location": "Los Angeles, CA",
      "badge": "Gamer Trusted"
    },
    "rating": 4.8,
    "reviewsCount": 380,
    "stock": 35,
    "sku": "TOY-SELLER8-001",
    "imageUrl": "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Electromagnetic Hall Effect sensors prevent stick drift forever",
      "1000Hz ultra-low latency response in wired and 2.4G wireless",
      "4 ergonomic remappable back macro paddles",
      "Customizable trigger stops for hair-trigger FPS shooting"
    ],
    "specifications": {
      "Compatibility": "PC, Switch, iOS, Android",
      "Battery": "1200 mAh (20 Hours)",
      "Polling Rate": "1000Hz"
    },
    "tags": [
      "Controller",
      "Gaming",
      "Esports",
      "PC Gaming"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "createdAt": "2026-01-27T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-71-1",
        "userName": "Verified Buyer 48",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PixelPlay Gaming & Toys",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 38
      }
    ]
  },
  {
    "id": "prod-72",
    "name": "Modular Magnetic STEM Building Blocks Set (120 Pieces)",
    "tagline": "3D Geometry Magnetic Tiles with Rotating Ferris Wheel & Idea Guide",
    "description": "Ignite spatial imagination and engineering creativity in children. Ultrasonic welding technology secures strong neodymium magnets safely inside food-grade ABS plastic.",
    "price": 49.99,
    "originalPrice": 65,
    "discountPercent": 23,
    "category": "Toys & Video Games",
    "brand": "PixelPlay STEM",
    "seller": {
      "id": "seller-8",
      "name": "PixelPlay Gaming & Toys",
      "rating": 4.7,
      "salesCount": 3120,
      "isVerified": true,
      "location": "Los Angeles, CA",
      "badge": "Gamer Trusted"
    },
    "rating": 4.9,
    "reviewsCount": 420,
    "stock": 40,
    "sku": "TOY-SELLER8-002",
    "imageUrl": "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "120 colorful geometric magnetic shapes (squares, triangles, hexagons)",
      "Reinforced ultrasonic welding prevents loose magnet hazards",
      "Develops spatial reasoning, color recognition, and motor skills",
      "Compatible with all major magnetic building tile brands"
    ],
    "specifications": {
      "Pieces": "120 Tiles + Wheel Kit",
      "Safety": "ASTM & EN71 Certified",
      "Ages": "3 Years and Up"
    },
    "tags": [
      "STEM",
      "Building Blocks",
      "Toys",
      "Kids"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-10T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-72-1",
        "userName": "Verified Buyer 5",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PixelPlay Gaming & Toys",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 41
      }
    ]
  },
  {
    "id": "prod-73",
    "name": "Robotic Programmable AI Smart Tank Rover Kit",
    "tagline": "Python & Scratch Coding, HD FPV Camera & Ultrasonic Obstacle Avoidance",
    "description": "Hands-on robotics learning for teenagers and coding hobbyists. Build your own tracked tank rover, program auto-patrol routines, and stream real-time video to your phone.",
    "price": 119,
    "originalPrice": 149,
    "discountPercent": 20,
    "category": "Toys & Video Games",
    "brand": "PixelPlay Tech",
    "seller": {
      "id": "seller-8",
      "name": "PixelPlay Gaming & Toys",
      "rating": 4.7,
      "salesCount": 3120,
      "isVerified": true,
      "location": "Los Angeles, CA",
      "badge": "Gamer Trusted"
    },
    "rating": 4.8,
    "reviewsCount": 160,
    "stock": 18,
    "sku": "TOY-SELLER8-003",
    "imageUrl": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Learn graphical Scratch coding or text-based Python scripts",
      "Equipped with 720p HD wide-angle FPV video camera module",
      "Dual high-torque DC motors drive high-traction rubber treads",
      "Ultrasonic and infrared sensors avoid room obstacles"
    ],
    "specifications": {
      "Controller": "ESP32 Microcontroller",
      "Camera": "720p FPV",
      "Ages": "10+"
    },
    "tags": [
      "Robotics",
      "Coding",
      "STEM",
      "AI"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-11T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-73-1",
        "userName": "Verified Buyer 12",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PixelPlay Gaming & Toys",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 44
      }
    ]
  },
  {
    "id": "prod-74",
    "name": "High-Torque 1:12 Scale 4WD Off-Road RC Rock Crawler",
    "tagline": "Independent Metal Shocks, Dual LED Headlights & 45 km/h Top Speed",
    "description": "Conquer rocks, dirt, mud, and grass with all-terrain 4-wheel drive. Proportional 2.4GHz throttle steering, water-resistant electronics, and dual rechargeable batteries.",
    "price": 89.99,
    "originalPrice": 115,
    "discountPercent": 22,
    "category": "Toys & Video Games",
    "brand": "PixelPlay RC",
    "seller": {
      "id": "seller-8",
      "name": "PixelPlay Gaming & Toys",
      "rating": 4.7,
      "salesCount": 3120,
      "isVerified": true,
      "location": "Los Angeles, CA",
      "badge": "Gamer Trusted"
    },
    "rating": 4.7,
    "reviewsCount": 240,
    "stock": 22,
    "sku": "TOY-SELLER8-004",
    "imageUrl": "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Real-time 4-wheel drive with front and rear metal differentials",
      "Oil-filled coil-spring independent shock absorbers",
      "IPX4 water-resistant electronic speed controller (ESC)",
      "Includes 2x 7.4V Li-ion batteries for 45 minutes total driving"
    ],
    "specifications": {
      "Scale": "1:12 Large Scale",
      "Speed": "Up to 45 km/h",
      "Range": "100 Meters"
    },
    "tags": [
      "RC Car",
      "Rock Crawler",
      "Toys",
      "Remote Control"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-12T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-74-1",
        "userName": "Verified Buyer 19",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from PixelPlay Gaming & Toys",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 47
      }
    ]
  },
  {
    "id": "prod-75",
    "name": "Deluxe Solid Walnut Wood Tabletop Chess & Checkers Set",
    "tagline": "15-Inch Inlaid Wooden Board with Weighted Felted Staunton Pieces",
    "description": "Timeless tactical board games combined in a collector cabinet. Handcrafted inlaid maple and walnut squares with magnetic locking drawer to store felt-lined pieces.",
    "price": 65,
    "originalPrice": 85,
    "discountPercent": 24,
    "category": "Toys & Video Games",
    "brand": "PixelPlay Classics",
    "seller": {
      "id": "seller-8",
      "name": "PixelPlay Gaming & Toys",
      "rating": 4.7,
      "salesCount": 3120,
      "isVerified": true,
      "location": "Los Angeles, CA",
      "badge": "Gamer Trusted"
    },
    "rating": 4.9,
    "reviewsCount": 310,
    "stock": 25,
    "sku": "TOY-SELLER8-005",
    "imageUrl": "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Precision inlaid American walnut and Canadian maple wood board",
      "Triple-weighted hand-carved Staunton chess pieces (King 3.5\")",
      "Dual hidden pull-out drawers with velvet molded slots",
      "Includes 24 matching wooden checkers pieces"
    ],
    "specifications": {
      "Board Size": "15 x 15 Inches",
      "King Height": "3.5 Inches",
      "Wood": "Walnut & Maple"
    },
    "tags": [
      "Chess",
      "Board Games",
      "Woodcraft",
      "Checkers"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-13T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-75-1",
        "userName": "Verified Buyer 26",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PixelPlay Gaming & Toys",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 5
      }
    ]
  },
  {
    "id": "prod-76",
    "name": "RGB Virtual 7.1 Surround Pro Gaming Headset",
    "tagline": "53mm Neodymium Drivers, Noise-Cancelling Mic & Multi-Platform USB/3.5mm",
    "description": "Pinpoint opponent footsteps with surgical 360-degree positional audio. Ultra-soft cooling gel-infused earcups provide marathon gaming comfort without heat buildup.",
    "price": 54.99,
    "originalPrice": 75,
    "discountPercent": 27,
    "category": "Toys & Video Games",
    "brand": "PixelPlay Gaming",
    "seller": {
      "id": "seller-8",
      "name": "PixelPlay Gaming & Toys",
      "rating": 4.7,
      "salesCount": 3120,
      "isVerified": true,
      "location": "Los Angeles, CA",
      "badge": "Gamer Trusted"
    },
    "rating": 4.7,
    "reviewsCount": 350,
    "stock": 38,
    "sku": "TOY-SELLER8-006",
    "imageUrl": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Custom-tuned 53mm dynamic audio drivers for immersive explosions",
      "Hardware 7.1 surround sound audio controller card",
      "Detachable broadcast-grade noise-cancelling microphone",
      "Multi-platform support: PC, PS5, Xbox Series X, Switch"
    ],
    "specifications": {
      "Drivers": "53mm Neodymium",
      "Connection": "USB / 3.5mm",
      "Lighting": "Dynamic RGB"
    },
    "tags": [
      "Headset",
      "Gaming",
      "Surround Sound",
      "PC"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-14T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-76-1",
        "userName": "Verified Buyer 33",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from PixelPlay Gaming & Toys",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "prod-77",
    "name": "Collector Edition Retro Arcade Desktop Mini Cabinet",
    "tagline": "300 Built-in 16-Bit Nostalgia Classics with 4.3\" Color Screen",
    "description": "Relive golden 80s and 90s arcade thrills. Authentic microswitch joystick and clicky action buttons with headphone jack, TV-out port, and volume control.",
    "price": 49,
    "originalPrice": 65,
    "discountPercent": 25,
    "category": "Toys & Video Games",
    "brand": "PixelPlay Retro",
    "seller": {
      "id": "seller-8",
      "name": "PixelPlay Gaming & Toys",
      "rating": 4.7,
      "salesCount": 3120,
      "isVerified": true,
      "location": "Los Angeles, CA",
      "badge": "Gamer Trusted"
    },
    "rating": 4.6,
    "reviewsCount": 210,
    "stock": 30,
    "sku": "TOY-SELLER8-007",
    "imageUrl": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "300 classic arcade titles pre-installed (platformers, shooters, puzzles)",
      "Vibrant 4.3-inch backlit color LCD display",
      "Can be powered by 4x AA batteries or micro-USB cable",
      "AV output cable included to play games on big TV screens"
    ],
    "specifications": {
      "Screen": "4.3\" Color LCD",
      "Games": "300 Preloaded",
      "Power": "USB or Batteries"
    },
    "tags": [
      "Arcade",
      "Retro Gaming",
      "Toys",
      "Gifts"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-15T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-77-1",
        "userName": "Verified Buyer 40",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from PixelPlay Gaming & Toys",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 11
      }
    ]
  },
  {
    "id": "prod-78",
    "name": "1000-Piece Panoramic Masterpiece Jigsaw Puzzle",
    "tagline": "Extra-Thick Recycled Dutch Blueboard with Anti-Glare Matte Linen Finish",
    "description": "Unwind and challenge your mind with precision interlocking puzzle pieces. Printed with organic soy-based inks and includes high-resolution reference wall poster.",
    "price": 21.99,
    "originalPrice": 28,
    "discountPercent": 21,
    "category": "Toys & Video Games",
    "brand": "PixelPlay Puzzles",
    "seller": {
      "id": "seller-8",
      "name": "PixelPlay Gaming & Toys",
      "rating": 4.7,
      "salesCount": 3120,
      "isVerified": true,
      "location": "Los Angeles, CA",
      "badge": "Gamer Trusted"
    },
    "rating": 4.8,
    "reviewsCount": 195,
    "stock": 45,
    "sku": "TOY-SELLER8-008",
    "imageUrl": "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Precision die-cut ensuring every piece snaps into place uniquely",
      "Zero puzzle dust technology with extra-thick 2mm blueboard",
      "Linen-textured glare-free printing for easy viewing under lamps",
      "Includes 1:1 full-color reference bonus poster"
    ],
    "specifications": {
      "Pieces": "1000 Pieces",
      "Finished Size": "27.5\" x 19.7\"",
      "Material": "Recycled Blueboard"
    },
    "tags": [
      "Puzzle",
      "Jigsaw",
      "Brain Teaser",
      "Family"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-16T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-78-1",
        "userName": "Verified Buyer 47",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PixelPlay Gaming & Toys",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-79",
    "name": "Deck-Building Strategy Tabletop Board Game (2-4 Players)",
    "tagline": "Award-Winning Engine Builder with 250 Illustrated Game Cards",
    "description": "Fast-paced strategic civilization building with infinite replay value. Draft cards, harvest resources, build monuments, and outwit your friends in 45-minute sessions.",
    "price": 44.95,
    "originalPrice": 55,
    "discountPercent": 18,
    "category": "Toys & Video Games",
    "brand": "PixelPlay Games",
    "seller": {
      "id": "seller-8",
      "name": "PixelPlay Gaming & Toys",
      "rating": 4.7,
      "salesCount": 3120,
      "isVerified": true,
      "location": "Los Angeles, CA",
      "badge": "Gamer Trusted"
    },
    "rating": 4.9,
    "reviewsCount": 290,
    "stock": 26,
    "sku": "TOY-SELLER8-009",
    "imageUrl": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Easy to learn in 10 minutes with deep tactical card interactions",
      "High replayability with randomized milestone and resource setups",
      "Heavyweight linen-finish cards with original fantasy artwork",
      "Designed for 2 to 4 players, ages 12 and up"
    ],
    "specifications": {
      "Players": "2 - 4 Players",
      "Play Time": "45 - 60 Minutes",
      "Ages": "12+"
    },
    "tags": [
      "Board Game",
      "Card Game",
      "Strategy",
      "Tabletop"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-17T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-79-1",
        "userName": "Verified Buyer 4",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PixelPlay Gaming & Toys",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 17
      }
    ]
  },
  {
    "id": "prod-80",
    "name": "Kinetic Sensory Sand Art Castle Playset (5 lbs)",
    "tagline": "Non-Toxic Hydrophobic Play Sand with 10 Molds & Inflatable Tray",
    "description": "Magical sensory play sand that flows through fingers like slow liquid but sticks together firmly when packed. Never dries out and cleans up with zero residue.",
    "price": 27.99,
    "originalPrice": 35,
    "discountPercent": 20,
    "category": "Toys & Video Games",
    "brand": "PixelPlay Kids",
    "seller": {
      "id": "seller-8",
      "name": "PixelPlay Gaming & Toys",
      "rating": 4.7,
      "salesCount": 3120,
      "isVerified": true,
      "location": "Los Angeles, CA",
      "badge": "Gamer Trusted"
    },
    "rating": 4.8,
    "reviewsCount": 340,
    "stock": 48,
    "sku": "TOY-SELLER8-010",
    "imageUrl": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "5 pounds of premium natural non-toxic kinetic motion sand",
      "Includes 10 detailed castle fortress molds and sculpting tools",
      "Foldable inflatable sandbox play tray prevents floor mess",
      "Never dries out, 100% hypoallergenic and gluten-free"
    ],
    "specifications": {
      "Sand Weight": "5 lbs (2.3 kg)",
      "Molds": "10 Architecture Molds",
      "Ages": "3+"
    },
    "tags": [
      "Sensory Toys",
      "Play Sand",
      "Kids",
      "Creativity"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-18T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-80-1",
        "userName": "Verified Buyer 11",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from PixelPlay Gaming & Toys",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 20
      }
    ]
  },
  {
    "id": "prod-81",
    "name": "Professional 168-Piece Mechanics & Home Tool Set",
    "tagline": "Forged Chrome Vanadium Steel with Quick-Release 72-Tooth Ratchet",
    "description": "The ultimate tool kit for garage repairs, car maintenance, and household DIY. Corrosion-resistant mirror chrome finish housed in a rugged blow-molded carrying case.",
    "price": 89.99,
    "originalPrice": 119.99,
    "discountPercent": 25,
    "category": "Automotive & Tools",
    "brand": "MotoCraft Pro",
    "seller": {
      "id": "seller-9",
      "name": "MotoCraft Performance & Tools",
      "rating": 4.9,
      "salesCount": 1470,
      "isVerified": true,
      "location": "Detroit, MI",
      "badge": "Master Mechanic Grade"
    },
    "rating": 4.9,
    "reviewsCount": 340,
    "stock": 30,
    "sku": "AUT-SELLER9-001",
    "imageUrl": "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "High-strength drop-forged chrome vanadium steel construction",
      "72-tooth precision reversible ratchets with 5-degree swing arc",
      "Full assortment of metric and SAE sockets, wrenches, and bits",
      "Heavy-duty molded storage toolbox with secure metal latches"
    ],
    "specifications": {
      "Pieces": "168 Pieces",
      "Steel": "Chrome Vanadium (Cr-V)",
      "Warranty": "Lifetime Limited"
    },
    "tags": [
      "Tools",
      "Mechanic",
      "Socket Set",
      "Garage"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "createdAt": "2026-01-19T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-81-1",
        "userName": "Verified Buyer 18",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from MotoCraft Performance & Tools",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": "prod-82",
    "name": "Portable 150 PSI Digital Auto Tire Inflator Air Compressor",
    "tagline": "Preset Auto Shut-Off, Fast Inflation in 60s with LED Emergency Light",
    "description": "Inflate car tires, bicycle tubes, and sports balls anywhere. Plugs into 12V car cigarette lighter or runs on built-in rechargeable battery with digital pressure readout.",
    "price": 49.99,
    "originalPrice": 65,
    "discountPercent": 23,
    "category": "Automotive & Tools",
    "brand": "MotoCraft Auto",
    "seller": {
      "id": "seller-9",
      "name": "MotoCraft Performance & Tools",
      "rating": 4.9,
      "salesCount": 1470,
      "isVerified": true,
      "location": "Detroit, MI",
      "badge": "Master Mechanic Grade"
    },
    "rating": 4.8,
    "reviewsCount": 420,
    "stock": 35,
    "sku": "AUT-SELLER9-002",
    "imageUrl": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Auto shut-off feature stops precisely at desired PSI setting",
      "Inflates standard car tire from 28 to 35 PSI in under 60 seconds",
      "Backlit digital LCD gauge reads PSI, BAR, KPA, and Kg/cm²",
      "Built-in 3-mode LED flashlight with SOS strobe for roadside safety"
    ],
    "specifications": {
      "Max Pressure": "150 PSI",
      "Flow Rate": "35 L/min",
      "Power": "12V DC & Rechargeable"
    },
    "tags": [
      "Tire Inflator",
      "Air Compressor",
      "Car Care",
      "Roadside"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-20T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-82-1",
        "userName": "Verified Buyer 25",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from MotoCraft Performance & Tools",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 26
      }
    ]
  },
  {
    "id": "prod-83",
    "name": "Ultra HD 4K Dual Dash Cam Front and Rear with GPS & WiFi",
    "tagline": "Sony Starvis Sensor, Super Night Vision, G-Sensor & 24h Parking Mode",
    "description": "Capture license plates and road incidents in crystal-clear 4K resolution. Built-in WiFi lets you download footage directly to your smartphone, with automatic collision emergency lock.",
    "price": 119,
    "originalPrice": 159,
    "discountPercent": 25,
    "category": "Automotive & Tools",
    "brand": "MotoCraft Vision",
    "seller": {
      "id": "seller-9",
      "name": "MotoCraft Performance & Tools",
      "rating": 4.9,
      "salesCount": 1470,
      "isVerified": true,
      "location": "Detroit, MI",
      "badge": "Master Mechanic Grade"
    },
    "rating": 4.8,
    "reviewsCount": 290,
    "stock": 22,
    "sku": "AUT-SELLER9-003",
    "imageUrl": "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "True 4K (3840x2160) front camera + 1080p waterproof rear cam",
      "Sony Starvis sensor with F1.5 large aperture night vision",
      "Integrated GPS records vehicle driving speed and GPS route",
      "G-sensor automatically locks incident footage during bumps"
    ],
    "specifications": {
      "Front Video": "4K @ 30fps",
      "Rear Video": "1080p FHD",
      "View Angle": "170° Wide"
    },
    "tags": [
      "Dash Cam",
      "Automotive",
      "Camera",
      "Safety"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-21T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-83-1",
        "userName": "Verified Buyer 32",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from MotoCraft Performance & Tools",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 29
      }
    ]
  },
  {
    "id": "prod-84",
    "name": "20V Max Brushless Cordless Compact Drill & Driver Kit",
    "tagline": "2-Speed Transmission (0-1800 RPM), 550 In-lbs Torque with 2 Batteries",
    "description": "Drill through wood, metal, and masonry with commercial power. High-efficiency brushless motor delivers 50% more runtime, paired with 2x 2.0Ah lithium batteries and fast charger.",
    "price": 99,
    "originalPrice": 129,
    "discountPercent": 23,
    "category": "Automotive & Tools",
    "brand": "MotoCraft Power",
    "seller": {
      "id": "seller-9",
      "name": "MotoCraft Performance & Tools",
      "rating": 4.9,
      "salesCount": 1470,
      "isVerified": true,
      "location": "Detroit, MI",
      "badge": "Master Mechanic Grade"
    },
    "rating": 4.8,
    "reviewsCount": 260,
    "stock": 25,
    "sku": "AUT-SELLER9-004",
    "imageUrl": "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Brushless motor technology eliminates carbon brush wear",
      "1/2-inch all-metal ratcheting keyless chuck holds bits tight",
      "21+1 clutch settings provide precise screw driving control",
      "Includes 2x 20V 2.0Ah batteries, fast charger, and 30-pc bit set"
    ],
    "specifications": {
      "Chuck Size": "1/2 Inch",
      "Max Torque": "550 in-lbs (62 Nm)",
      "Batteries": "2x 2.0Ah Li-ion"
    },
    "tags": [
      "Drill",
      "Power Tools",
      "Cordless",
      "DIY"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-22T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-84-1",
        "userName": "Verified Buyer 39",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from MotoCraft Performance & Tools",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 32
      }
    ]
  },
  {
    "id": "prod-85",
    "name": "Professional Bluetooth OBD2 Car Diagnostic Scanner",
    "tagline": "Reads & Clears Check Engine Lights, Real-Time Sensor Live Data Stream",
    "description": "Diagnose vehicle trouble codes before visiting the mechanic. Syncs via Bluetooth with iOS and Android apps to read engine codes, freeze frame data, and smog check readiness.",
    "price": 39.99,
    "originalPrice": 55,
    "discountPercent": 27,
    "category": "Automotive & Tools",
    "brand": "MotoCraft Tech",
    "seller": {
      "id": "seller-9",
      "name": "MotoCraft Performance & Tools",
      "rating": 4.9,
      "salesCount": 1470,
      "isVerified": true,
      "location": "Detroit, MI",
      "badge": "Master Mechanic Grade"
    },
    "rating": 4.7,
    "reviewsCount": 380,
    "stock": 45,
    "sku": "AUT-SELLER9-005",
    "imageUrl": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Reads and clears generic and manufacturer-specific DTC trouble codes",
      "Monitors live sensor data (coolant temp, fuel trim, O2 sensors)",
      "I/M readiness smog check pre-inspection indicator",
      "Works on all OBD2 compliant cars manufactured since 1996"
    ],
    "specifications": {
      "Connectivity": "Bluetooth 5.0 (iOS & Android)",
      "Protocols": "All OBD2 Protocols",
      "App": "Free Included"
    },
    "tags": [
      "OBD2",
      "Car Diagnostic",
      "Mechanic",
      "Automotive"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-23T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-85-1",
        "userName": "Verified Buyer 46",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from MotoCraft Performance & Tools",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 35
      }
    ]
  },
  {
    "id": "prod-86",
    "name": "Ultra-Bright 2000 Lumen Magnetic LED Work Light (Rechargeable)",
    "tagline": "360° Rotating Dual Head, Strong Base Magnets & Power Bank Function",
    "description": "Illuminate your engine bay or workshop hands-free. Dual super-strong magnetic base clings securely to vehicle hoods and frames with 4 lighting brightness modes.",
    "price": 34.5,
    "originalPrice": 45,
    "discountPercent": 23,
    "category": "Automotive & Tools",
    "brand": "MotoCraft Light",
    "seller": {
      "id": "seller-9",
      "name": "MotoCraft Performance & Tools",
      "rating": 4.9,
      "salesCount": 1470,
      "isVerified": true,
      "location": "Detroit, MI",
      "badge": "Master Mechanic Grade"
    },
    "rating": 4.8,
    "reviewsCount": 210,
    "stock": 36,
    "sku": "AUT-SELLER9-006",
    "imageUrl": "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "2000 lumens COB LED floodlight penetrates shadows",
      "Two heavy-duty neodymium base magnets stick firmly to metal",
      "Dual independently pivoting heads adjust 360 degrees",
      "5200mAh USB rechargeable battery charges phones in emergencies"
    ],
    "specifications": {
      "Brightness": "2000 Lumens",
      "Battery": "5200 mAh USB-C",
      "Runtime": "Up to 10 Hours"
    },
    "tags": [
      "Work Light",
      "LED",
      "Garage",
      "Tools"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-24T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-86-1",
        "userName": "Verified Buyer 3",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from MotoCraft Performance & Tools",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 38
      }
    ]
  },
  {
    "id": "prod-87",
    "name": "Heavy-Duty 2.5 Ton Low-Profile Hydraulic Floor Jack",
    "tagline": "Dual Piston Rapid Pump, 3.3\" to 15.2\" Lifting Range for Low Cars",
    "description": "Effortlessly lift sports cars, sedans, and light trucks. Dual pump pistons raise the padded saddle to vehicle frame in only 3.5 pumps with overload bypass safety valve.",
    "price": 149,
    "originalPrice": 189,
    "discountPercent": 21,
    "category": "Automotive & Tools",
    "brand": "MotoCraft Heavy",
    "seller": {
      "id": "seller-9",
      "name": "MotoCraft Performance & Tools",
      "rating": 4.9,
      "salesCount": 1470,
      "isVerified": true,
      "location": "Detroit, MI",
      "badge": "Master Mechanic Grade"
    },
    "rating": 4.9,
    "reviewsCount": 160,
    "stock": 10,
    "sku": "AUT-SELLER9-007",
    "imageUrl": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Low 3.3-inch profile slips easily under lowered sports cars",
      "Dual rapid pump pistons raise the saddle with minimal effort",
      "Heavy-gauge steel side plates prevent chassis twisting",
      "Padded rubber saddle prevents vehicle pinch weld damage"
    ],
    "specifications": {
      "Capacity": "2.5 Tons (5,000 lbs)",
      "Lifting Range": "3.3\" - 15.2\"",
      "Weight": "58 lbs"
    },
    "tags": [
      "Floor Jack",
      "Hydraulic",
      "Automotive",
      "Tools"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-25T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-87-1",
        "userName": "Verified Buyer 10",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from MotoCraft Performance & Tools",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 41
      }
    ]
  },
  {
    "id": "prod-88",
    "name": "Graphene Ceramic Car Coating Spray (16 oz)",
    "tagline": "Hyper Hydrophobic Mirror Gloss, 12-Month Extreme Weather Protection",
    "description": "Professional paint protection in an easy spray-on formula. Infused with graphene oxide to repel rain, road salt, bird droppings, and UV oxidation with deep candy gloss.",
    "price": 28,
    "originalPrice": 36,
    "discountPercent": 22,
    "category": "Automotive & Tools",
    "brand": "MotoCraft Detail",
    "seller": {
      "id": "seller-9",
      "name": "MotoCraft Performance & Tools",
      "rating": 4.9,
      "salesCount": 1470,
      "isVerified": true,
      "location": "Detroit, MI",
      "badge": "Master Mechanic Grade"
    },
    "rating": 4.8,
    "reviewsCount": 310,
    "stock": 40,
    "sku": "AUT-SELLER9-008",
    "imageUrl": "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Advanced graphene nano-matrix repels water beads effortlessly",
      "Resists swirl marks, bird droppings, acid rain, and road grime",
      "Safe on vehicle paint, glass, chrome wheels, and plastic trim",
      "Provides up to 1 full year of continuous slick gloss protection"
    ],
    "specifications": {
      "Volume": "16 fl oz (473 ml)",
      "Protection": "Up to 12 Months",
      "Coating": "Graphene Oxide"
    },
    "tags": [
      "Car Wax",
      "Ceramic Coating",
      "Detailing",
      "Auto Care"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-26T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-88-1",
        "userName": "Verified Buyer 17",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from MotoCraft Performance & Tools",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 44
      }
    ]
  },
  {
    "id": "prod-89",
    "name": "2000A Peak Portable Car Jump Starter & Power Bank",
    "tagline": "Starts up to 8.0L Gas / 6.0L Diesel Engines with Smart Jumper Cables",
    "description": "Never get stranded with a dead battery. Instantly jumps 12V cars, SUVs, and boats on a single charge with spark-proof clamps and built-in SOS emergency strobe.",
    "price": 79.99,
    "originalPrice": 99.99,
    "discountPercent": 20,
    "category": "Automotive & Tools",
    "brand": "MotoCraft Volt",
    "seller": {
      "id": "seller-9",
      "name": "MotoCraft Performance & Tools",
      "rating": 4.9,
      "salesCount": 1470,
      "isVerified": true,
      "location": "Detroit, MI",
      "badge": "Master Mechanic Grade"
    },
    "rating": 4.9,
    "reviewsCount": 380,
    "stock": 30,
    "sku": "AUT-SELLER9-009",
    "imageUrl": "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "2000A peak current starts dead batteries in seconds",
      "Foolproof spark-proof clamps with reverse polarity warning",
      "Charges smartphones 4 times via Quick Charge 3.0 ports",
      "High-powered 400 lumen LED flashlight with strobe and SOS"
    ],
    "specifications": {
      "Peak Current": "2000 Amps",
      "Engine Limit": "8.0L Gas / 6.0L Diesel",
      "Battery": "18,000 mAh"
    },
    "tags": [
      "Jump Starter",
      "Battery",
      "Emergency",
      "Automotive"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-27T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-89-1",
        "userName": "Verified Buyer 24",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from MotoCraft Performance & Tools",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 47
      }
    ]
  },
  {
    "id": "prod-90",
    "name": "Magnetic 3-Piece Socket Organizer Tray Set (Metric & SAE)",
    "tagline": "Holds 143 Sockets Firmly with Strong Rubberized Magnetic Bases",
    "description": "Organize your tool chest drawers permanently. Powerful magnets hold 1/4\", 3/8\", and 1/2\" drive sockets securely in place even when turned upside down.",
    "price": 36.99,
    "originalPrice": 48,
    "discountPercent": 23,
    "category": "Automotive & Tools",
    "brand": "MotoCraft Tools",
    "seller": {
      "id": "seller-9",
      "name": "MotoCraft Performance & Tools",
      "rating": 4.9,
      "salesCount": 1470,
      "isVerified": true,
      "location": "Detroit, MI",
      "badge": "Master Mechanic Grade"
    },
    "rating": 4.9,
    "reviewsCount": 220,
    "stock": 35,
    "sku": "AUT-SELLER9-010",
    "imageUrl": "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Holds up to 143 metric and SAE shallow and deep sockets",
      "Heavy-duty rubber-coated magnetic base will not scratch toolboxes",
      "High-visibility clear size markings on every socket post",
      "Can be mounted vertically on sides of steel tool chests"
    ],
    "specifications": {
      "Capacity": "143 Sockets Total",
      "Drives": "1/4\", 3/8\", 1/2\"",
      "Trays": "3 Pieces"
    },
    "tags": [
      "Socket Organizer",
      "Toolbox",
      "Storage",
      "Tools"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-10T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-90-1",
        "userName": "Verified Buyer 31",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from MotoCraft Performance & Tools",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 5
      }
    ]
  },
  {
    "id": "prod-91",
    "name": "14K Solid Gold Plated Minimalist Herringbone Flat Chain",
    "tagline": "Durable Anti-Tarnish PVD Coating, Hypoallergenic & Waterproof",
    "description": "The quintessential everyday liquid gold chain. Silky smooth flexible herringbone links catch the light beautifully, with secure lobster claw clasp.",
    "price": 52,
    "originalPrice": 68,
    "discountPercent": 24,
    "category": "Jewelry & Accessories",
    "brand": "Aurum & Stone",
    "seller": {
      "id": "seller-10",
      "name": "Aurum & Stone Artisans",
      "rating": 4.9,
      "salesCount": 1980,
      "isVerified": true,
      "location": "New York, NY",
      "badge": "Fine Craft Guild"
    },
    "rating": 4.8,
    "reviewsCount": 340,
    "stock": 35,
    "sku": "JWL-SELLER10-001",
    "imageUrl": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Real 14K gold bonded over high-grade surgical stainless steel",
      "Vacuum PVD plating will not tarnish or discolor skin green",
      "100% hypoallergenic, nickel-free, and lead-free",
      "Includes 2-inch extension chain for customizable necklace length"
    ],
    "specifications": {
      "Length": "16 Inches + 2\" Extender",
      "Width": "4.5 mm",
      "Plating": "14K Gold PVD"
    },
    "tags": [
      "Necklace",
      "Gold Chain",
      "Jewelry",
      "Minimalist"
    ],
    "isFeatured": true,
    "isBestSeller": true,
    "createdAt": "2026-01-11T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-91-1",
        "userName": "Verified Buyer 38",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Aurum & Stone Artisans",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 8
      }
    ]
  },
  {
    "id": "prod-92",
    "name": "Natural Iridescent Moonstone Solitaire Ring (925 Sterling Silver)",
    "tagline": "Genuine Natural Blue Sheen Moonstone in Handcrafted Claw Setting",
    "description": "An ethereal natural gem exhibiting captivating blue adularescence. Set in rhodium-plated 925 sterling silver with dainty tapered band.",
    "price": 48,
    "originalPrice": 62,
    "discountPercent": 23,
    "category": "Jewelry & Accessories",
    "brand": "Aurum & Stone",
    "seller": {
      "id": "seller-10",
      "name": "Aurum & Stone Artisans",
      "rating": 4.9,
      "salesCount": 1980,
      "isVerified": true,
      "location": "New York, NY",
      "badge": "Fine Craft Guild"
    },
    "rating": 4.9,
    "reviewsCount": 210,
    "stock": 20,
    "sku": "JWL-SELLER10-002",
    "imageUrl": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Natural untreated Sri Lankan blue-sheen rainbow moonstone",
      "Solid 925 sterling silver stamped with anti-tarnish rhodium finish",
      "Four-prong elevated setting lets natural light illuminate the gem",
      "Packaged in luxury velvet ring box with polishing cloth"
    ],
    "specifications": {
      "Gemstone": "Natural Moonstone (8x6mm)",
      "Metal": "925 Sterling Silver",
      "Sizes": "US 5 - 9"
    },
    "tags": [
      "Ring",
      "Moonstone",
      "Silver",
      "Jewelry"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-12T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-92-1",
        "userName": "Verified Buyer 45",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Aurum & Stone Artisans",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 11
      }
    ]
  },
  {
    "id": "prod-93",
    "name": "Automatic Skeleton Luxury Mechanical Watch with Sapphire Crystal",
    "tagline": "Self-Winding 21-Jewel Movement, Exhibition Caseback & Leather Strap",
    "description": "Admire the heartbeat of mechanical watchmaking. Transparent open-worked skeleton dial reveals gears and escapement, framed in 316L stainless steel with sapphire crystal.",
    "price": 249,
    "originalPrice": 320,
    "discountPercent": 22,
    "category": "Jewelry & Accessories",
    "brand": "Aurum Horology",
    "seller": {
      "id": "seller-10",
      "name": "Aurum & Stone Artisans",
      "rating": 4.9,
      "salesCount": 1980,
      "isVerified": true,
      "location": "New York, NY",
      "badge": "Fine Craft Guild"
    },
    "rating": 4.9,
    "reviewsCount": 165,
    "stock": 12,
    "sku": "JWL-SELLER10-003",
    "imageUrl": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "21-jewel automatic self-winding mechanical movement (42h reserve)",
      "Scratch-proof synthetic sapphire crystal front and exhibition back",
      "Genuine Italian calfskin leather strap with butterfly deployant clasp",
      "50 meters (5 ATM) water resistance for everyday durability"
    ],
    "specifications": {
      "Case Diameter": "41 mm",
      "Glass": "Sapphire Crystal",
      "Movement": "Automatic 21J"
    },
    "tags": [
      "Watch",
      "Automatic",
      "Skeleton Watch",
      "Luxury"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-13T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-93-1",
        "userName": "Verified Buyer 2",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Aurum & Stone Artisans",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 14
      }
    ]
  },
  {
    "id": "prod-94",
    "name": "Cultured Freshwater Pearl Drop Earrings Pair (14K Gold Filled)",
    "tagline": "Hand-Selected AAA Lustre Baroque Pearls with French Wire Hooks",
    "description": "Organic elegance reimagined. Features hand-matched baroque freshwater pearls with luminous rainbow iridescence, suspended from delicate 14K gold-filled ear wires.",
    "price": 44,
    "originalPrice": 58,
    "discountPercent": 24,
    "category": "Jewelry & Accessories",
    "brand": "Aurum & Stone",
    "seller": {
      "id": "seller-10",
      "name": "Aurum & Stone Artisans",
      "rating": 4.9,
      "salesCount": 1980,
      "isVerified": true,
      "location": "New York, NY",
      "badge": "Fine Craft Guild"
    },
    "rating": 4.9,
    "reviewsCount": 290,
    "stock": 28,
    "sku": "JWL-SELLER10-004",
    "imageUrl": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Hand-selected AAA quality organic baroque freshwater pearls",
      "14K gold-filled french ear wire hooks suitable for sensitive ears",
      "Each natural pearl boasts unique organic shape and deep luster",
      "Lightweight and comfortable for all-day wedding or gala wear"
    ],
    "specifications": {
      "Pearl Size": "9 - 10 mm",
      "Metal": "14K Gold-Filled",
      "Style": "Drop Dangle"
    },
    "tags": [
      "Earrings",
      "Pearls",
      "Gold",
      "Jewelry"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-14T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-94-1",
        "userName": "Verified Buyer 9",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Aurum & Stone Artisans",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 17
      }
    ]
  },
  {
    "id": "prod-95",
    "name": "Braided Italian Black Leather Wrap Bracelet with Magnetic Clasp",
    "tagline": "Genuine Nappa Cowhide with Brushed 316L Stainless Steel Clasp",
    "description": "Modern understated masculine style. Multiple strands of tightly braided Italian leather converge into a sleek magnetic locking clasp with twist safety catch.",
    "price": 36,
    "originalPrice": 48,
    "discountPercent": 25,
    "category": "Jewelry & Accessories",
    "brand": "Aurum Mens",
    "seller": {
      "id": "seller-10",
      "name": "Aurum & Stone Artisans",
      "rating": 4.9,
      "salesCount": 1980,
      "isVerified": true,
      "location": "New York, NY",
      "badge": "Fine Craft Guild"
    },
    "rating": 4.7,
    "reviewsCount": 240,
    "stock": 35,
    "sku": "JWL-SELLER10-005",
    "imageUrl": "https://images.unsplash.com/photo-1611591475152-4c09a15cdd7c?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1611591475152-4c09a15cdd7c?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611591475152-4c09a15cdd7c?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "100% genuine braided Italian Nappa full-grain cowhide",
      "Brushed 316L hypoallergenic marine-grade stainless steel",
      "Easy-click magnetic closure with secondary mechanical slide lock",
      "Includes extra half-inch modular link for flexible wrist sizing"
    ],
    "specifications": {
      "Length": "8.2 Inches (Includes Extender)",
      "Width": "12 mm",
      "Leather": "Italian Nappa"
    },
    "tags": [
      "Bracelet",
      "Leather",
      "Mens Jewelry",
      "Accessories"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-15T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-95-1",
        "userName": "Verified Buyer 16",
        "rating": 4,
        "date": "2026-02-15",
        "title": "Excellent quality from Aurum & Stone Artisans",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 20
      }
    ]
  },
  {
    "id": "prod-96",
    "name": "Handcrafted Raw Healing Amethyst Crystal Pendant Necklace",
    "tagline": "Natural Untamed Amethyst Point with 24\" Stainless Steel Wheat Chain",
    "description": "Celebrate raw geological beauty. Untreated, unpolished deep violet natural amethyst crystal cluster securely electroplated with precious metals.",
    "price": 32,
    "originalPrice": 42,
    "discountPercent": 24,
    "category": "Jewelry & Accessories",
    "brand": "Aurum & Stone",
    "seller": {
      "id": "seller-10",
      "name": "Aurum & Stone Artisans",
      "rating": 4.9,
      "salesCount": 1980,
      "isVerified": true,
      "location": "New York, NY",
      "badge": "Fine Craft Guild"
    },
    "rating": 4.8,
    "reviewsCount": 180,
    "stock": 26,
    "sku": "JWL-SELLER10-006",
    "imageUrl": "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Authentic raw Brazilian deep purple amethyst crystal point",
      "Natural electroformed metallic capping preserves gemstone texture",
      "Durable 24-inch stainless steel wheat chain with lobster clasp",
      "Each crystal is completely unique in natural shape and facet cuts"
    ],
    "specifications": {
      "Pendant Length": "1.2 - 1.5 Inches",
      "Chain": "24\" Stainless Steel",
      "Gem": "Natural Amethyst"
    },
    "tags": [
      "Crystal",
      "Pendant",
      "Amethyst",
      "Jewelry"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-16T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-96-1",
        "userName": "Verified Buyer 23",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Aurum & Stone Artisans",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 23
      }
    ]
  },
  {
    "id": "prod-97",
    "name": "Solid Brass Working Vintage Compass Keepsake Locket",
    "tagline": "Functional Magnetic Compass with Antique Patina & Glass Crystal",
    "description": "A poetic symbol of guidance and exploration. Genuine magnetic floating dial compass encased in solid antiqued brass with interior compartment for personal photo.",
    "price": 39.5,
    "originalPrice": 50,
    "discountPercent": 21,
    "category": "Jewelry & Accessories",
    "brand": "Aurum Heritage",
    "seller": {
      "id": "seller-10",
      "name": "Aurum & Stone Artisans",
      "rating": 4.9,
      "salesCount": 1980,
      "isVerified": true,
      "location": "New York, NY",
      "badge": "Fine Craft Guild"
    },
    "rating": 4.8,
    "reviewsCount": 155,
    "stock": 24,
    "sku": "JWL-SELLER10-007",
    "imageUrl": "https://images.unsplash.com/photo-1600003014723-424683b375b4?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1600003014723-424683b375b4?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600003014723-424683b375b4?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Authentic functional magnetic directional floating compass",
      "Solid antiqued brass housing with intricate Victorian engraving",
      "Interior locket frame holds a circular keepsake miniature photo",
      "28-inch heavy antiqued brass chain with sturdy clasp"
    ],
    "specifications": {
      "Diameter": "1.3 Inches (33mm)",
      "Chain": "28 Inches",
      "Material": "Solid Brass"
    },
    "tags": [
      "Compass",
      "Locket",
      "Vintage",
      "Necklace"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-17T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-97-1",
        "userName": "Verified Buyer 30",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Aurum & Stone Artisans",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 26
      }
    ]
  },
  {
    "id": "prod-98",
    "name": "Ultra-Comfort Brushed Titanium Minimalist Wedding Band (6mm)",
    "tagline": "Aerospace Grade 5 Titanium, Featherweight & Scratch Resistant",
    "description": "Engineered for enduring strength and effortless comfort. High-tech brushed matte titanium with rounded comfort-fit interior contour that never pinches.",
    "price": 65,
    "originalPrice": 85,
    "discountPercent": 24,
    "category": "Jewelry & Accessories",
    "brand": "Aurum Modern",
    "seller": {
      "id": "seller-10",
      "name": "Aurum & Stone Artisans",
      "rating": 4.9,
      "salesCount": 1980,
      "isVerified": true,
      "location": "New York, NY",
      "badge": "Fine Craft Guild"
    },
    "rating": 4.9,
    "reviewsCount": 275,
    "stock": 30,
    "sku": "JWL-SELLER10-008",
    "imageUrl": "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "100% Grade 5 aircraft aerospace titanium construction",
      "Comfort-fit contoured dome interior glides smoothly over knuckles",
      "Weighs 50% less than gold while offering double the hardness",
      "Will never rust, tarnish, corrode, or trigger skin allergies"
    ],
    "specifications": {
      "Width": "6 mm",
      "Finish": "Satin Brushed with Beveled Edges",
      "Sizes": "US 6 - 13"
    },
    "tags": [
      "Ring",
      "Titanium",
      "Wedding Band",
      "Minimalist"
    ],
    "isFeatured": true,
    "isBestSeller": false,
    "createdAt": "2026-01-18T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-98-1",
        "userName": "Verified Buyer 37",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Aurum & Stone Artisans",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 29
      }
    ]
  },
  {
    "id": "prod-99",
    "name": "Custom Coordinates Bar Pendant Bracelet (Sterling Silver)",
    "tagline": "Hand-Engraved Geographical Coordinates on Polished Silver Bar",
    "description": "Commemorate your most cherished place on Earth. Mirror-polished sterling silver bar engraved with precise GPS coordinates of your home, wedding, or travel memory.",
    "price": 42,
    "originalPrice": 55,
    "discountPercent": 24,
    "category": "Jewelry & Accessories",
    "brand": "Aurum & Stone",
    "seller": {
      "id": "seller-10",
      "name": "Aurum & Stone Artisans",
      "rating": 4.9,
      "salesCount": 1980,
      "isVerified": true,
      "location": "New York, NY",
      "badge": "Fine Craft Guild"
    },
    "rating": 4.8,
    "reviewsCount": 220,
    "stock": 32,
    "sku": "JWL-SELLER10-009",
    "imageUrl": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "Engraved with longitude and latitude geographic coordinates",
      "Solid 925 sterling silver bar with diamond-cut cable chain",
      "Adjustable length fits wrists from 6 to 7.5 inches smoothly",
      "Gift-ready box with certificate of authenticity card"
    ],
    "specifications": {
      "Bar Length": "38 mm x 5 mm",
      "Chain": "6\" + 1.5\" Extender",
      "Metal": "925 Silver"
    },
    "tags": [
      "Bracelet",
      "Personalized",
      "Silver",
      "Engraved"
    ],
    "isFeatured": false,
    "isBestSeller": true,
    "createdAt": "2026-01-19T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-99-1",
        "userName": "Verified Buyer 44",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Aurum & Stone Artisans",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 32
      }
    ]
  },
  {
    "id": "prod-100",
    "name": "Dual-Layer Plush Velvet Travel Jewelry Organizer Box",
    "tagline": "Removable Trays, Necklace Hooks, Ring Rolls with Keyed Lock",
    "description": "Keep your precious gems tangle-free at home and during travel. Luxurious plush velvet exterior with organized slots for 8 necklaces, 10 rings, and adjustable earrings dividers.",
    "price": 34,
    "originalPrice": 45,
    "discountPercent": 24,
    "category": "Jewelry & Accessories",
    "brand": "Aurum Living",
    "seller": {
      "id": "seller-10",
      "name": "Aurum & Stone Artisans",
      "rating": 4.9,
      "salesCount": 1980,
      "isVerified": true,
      "location": "New York, NY",
      "badge": "Fine Craft Guild"
    },
    "rating": 4.9,
    "reviewsCount": 310,
    "stock": 40,
    "sku": "JWL-SELLER10-010",
    "imageUrl": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&auto=format&fit=crop&q=80"
    ],
    "features": [
      "High-density soft anti-tarnish velvet prevents jewelry scratches",
      "Upper and lower dual-tiered storage with removable dividers",
      "8 dedicated hanging necklace hooks with elastic gathering pouch",
      "Polished brass vintage lock with small safety key included"
    ],
    "specifications": {
      "Dimensions": "9.1\" L x 6.7\" W x 3.5\" H",
      "Material": "Plush Velvet",
      "Color": "Emerald Green"
    },
    "tags": [
      "Jewelry Box",
      "Organizer",
      "Storage",
      "Travel"
    ],
    "isFeatured": false,
    "isBestSeller": false,
    "createdAt": "2026-01-20T12:00:00Z",
    "reviews": [
      {
        "id": "rev-prod-100-1",
        "userName": "Verified Buyer 1",
        "rating": 5,
        "date": "2026-02-15",
        "title": "Excellent quality from Aurum & Stone Artisans",
        "comment": "Very pleased with this purchase. High quality build, fast delivery, and works exactly as described in the catalog.",
        "verifiedPurchase": true,
        "helpfulCount": 35
      }
    ]
  }
];
