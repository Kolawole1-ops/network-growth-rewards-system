// MLM Commission Structure
export interface CommissionLevel {
  level: number;
  percentage: number;
  levelName: string;
  requirements: string;
  color: string;
}

// Rewards System
export interface Reward {
  id: string;
  name: string;
  description: string;
  threshold: number; // Number of referrals needed
  value: string;
  icon: string;
  achieved: boolean;
}

// Downline Member
export interface DownlineMember {
  id: string;
  name: string;
  level: number;
  avatar: string;
  joinDate: string;
  sales: number;
  personalReferrals: number;
  active: boolean;
  tier: number; // 1, 2 or 3 (direct, second level, third level)
}

// User Dashboard Stats
export interface DashboardStats {
  totalEarnings: number;
  totalReferrals: number;
  activeDownlines: number;
  personalSales: number;
  currentRank: string;
  nextRankProgress: number;
  rewardsEarned: number;
  pendingCommissions: number;
}

// User
export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string; // This would be hashed in a real application
  role: 'admin' | 'user';
  joinDate: string;
  referralCode: string;
  referredBy?: string;
  profileImage?: string;
}

// Product Variation
export interface ProductVariation {
  id: string;
  name: string;
  price: number;
  sku: string;
  stockQuantity: number;
}

// Product
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  commissionRate: number;
  image?: string;
  variations: ProductVariation[];
  createdAt: string;
  updatedAt: string;
}

// Sample Data - Commission Structure
export const commissionLevels: CommissionLevel[] = [
  {
    level: 1,
    percentage: 10,
    levelName: "Direct Referral",
    requirements: "Personal referral joins the network",
    color: "#8B5CF6", // Primary
  },
  {
    level: 2,
    percentage: 5,
    levelName: "Second Level",
    requirements: "Your referral brings someone in",
    color: "#7E69AB", // Secondary
  },
  {
    level: 3,
    percentage: 3,
    levelName: "Third Level",
    requirements: "Second level brings someone in",
    color: "#6E59A5", // Tertiary
  },
  {
    level: 4,
    percentage: 1,
    levelName: "Extended Network",
    requirements: "Third level brings someone in",
    color: "#D6BCFA", // Light Purple
  },
];

// Sample Data - Rewards
export const rewardsList: Reward[] = [
  {
    id: "r1",
    name: "Welcome Bonus",
    description: "Complete your profile and first training",
    threshold: 0,
    value: "$25",
    icon: "gift",
    achieved: true,
  },
  {
    id: "r2",
    name: "Fast Start Bonus",
    description: "Refer 3 people in your first month",
    threshold: 3,
    value: "$100",
    icon: "award",
    achieved: true,
  },
  {
    id: "r3",
    name: "Leadership Bonus",
    description: "Build a team of 10 active members",
    threshold: 10,
    value: "$250",
    icon: "users",
    achieved: false,
  },
  {
    id: "r4",
    name: "Elite Performer",
    description: "Maintain $5,000 in team volume for 3 months",
    threshold: 25,
    value: "$500 + Trip",
    icon: "award",
    achieved: false,
  },
];

// Sample Data - Downline Members
export const downlineMembers: DownlineMember[] = [
  {
    id: "d1",
    name: "Alex Johnson",
    level: 1,
    avatar: "A",
    joinDate: "2024-01-15",
    sales: 1250,
    personalReferrals: 3,
    active: true,
    tier: 1,
  },
  {
    id: "d2",
    name: "Sarah Williams",
    level: 1,
    avatar: "S",
    joinDate: "2024-02-03",
    sales: 980,
    personalReferrals: 2,
    active: true,
    tier: 1,
  },
  {
    id: "d3",
    name: "Michael Brown",
    level: 2,
    avatar: "M",
    joinDate: "2024-02-18",
    sales: 750,
    personalReferrals: 1,
    active: true,
    tier: 2,
  },
  {
    id: "d4",
    name: "Jennifer Davis",
    level: 2,
    avatar: "J",
    joinDate: "2024-03-01",
    sales: 320,
    personalReferrals: 0,
    active: true,
    tier: 2,
  },
  {
    id: "d5",
    name: "David Miller",
    level: 2,
    avatar: "D",
    joinDate: "2024-03-05",
    sales: 450,
    personalReferrals: 0,
    active: false,
    tier: 2,
  },
  {
    id: "d6",
    name: "Robert Wilson",
    level: 3,
    avatar: "R",
    joinDate: "2024-03-12",
    sales: 180,
    personalReferrals: 0,
    active: true,
    tier: 3,
  },
  {
    id: "d7",
    name: "Emily Clark",
    level: 3,
    avatar: "E",
    joinDate: "2024-03-15",
    sales: 210,
    personalReferrals: 0,
    active: true,
    tier: 3,
  },
];

// Sample Data - Dashboard Stats
export const userStats: DashboardStats = {
  totalEarnings: 1875.50,
  totalReferrals: 5,
  activeDownlines: 6,
  personalSales: 3200,
  currentRank: "Silver Leader",
  nextRankProgress: 68,
  rewardsEarned: 2,
  pendingCommissions: 145.75,
};

// Sample Data - Users
export const users: User[] = [
  {
    id: "u1",
    name: "Admin User",
    username: "admin",
    email: "admin@mlmpro.com",
    password: "admin123", // In a real app, this would be hashed
    role: "admin",
    joinDate: "2023-01-01",
    referralCode: "ADMIN001",
  },
  {
    id: "u2",
    name: "Adebayo",
    username: "Adebayo",
    email: "adebayo@mlmpro.com",
    password: "toheeb1", // In a real app, this would be hashed
    role: "admin",
    joinDate: "2023-01-01",
    referralCode: "ADEBAYO001",
  },
  {
    id: "u3",
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    password: "password123", // In a real app, this would be hashed
    role: "user",
    joinDate: "2024-01-15",
    referralCode: "JOHN001",
  },
  {
    id: "u4",
    name: "Sarah Williams",
    username: "sarahw",
    email: "sarah@example.com",
    password: "password123", // In a real app, this would be hashed
    role: "user",
    joinDate: "2024-02-03",
    referralCode: "SARAH001",
    referredBy: "JOHN001"
  },
  {
    id: "u5",
    name: "Michael Brown",
    username: "michaelb",
    email: "michael@example.com",
    password: "password123", // In a real app, this would be hashed
    role: "user",
    joinDate: "2024-02-18",
    referralCode: "MICHAEL001",
    referredBy: "SARAH001"
  },
  {
    id: "u6",
    name: "Jennifer Davis",
    username: "jenniferd",
    email: "jennifer@example.com",
    password: "password123", // In a real app, this would be hashed
    role: "user",
    joinDate: "2024-03-01",
    referralCode: "JENNIFER001",
    referredBy: "SARAH001"
  }
];

// Sample Data - Products
export const products: Product[] = [
  {
    id: "p1",
    name: "Premium Health Supplement",
    description: "A complete dietary supplement with essential vitamins and minerals for daily wellness.",
    category: "Health & Wellness",
    commissionRate: 15,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=500",
    variations: [
      {
        id: "v1",
        name: "30-day supply",
        price: 49.99,
        sku: "HS-30D",
        stockQuantity: 100
      },
      {
        id: "v2",
        name: "60-day supply",
        price: 89.99,
        sku: "HS-60D",
        stockQuantity: 75
      },
      {
        id: "v3",
        name: "90-day supply",
        price: 129.99,
        sku: "HS-90D",
        stockQuantity: 50
      }
    ],
    createdAt: "2024-01-10T08:00:00Z",
    updatedAt: "2024-01-10T08:00:00Z"
  },
  {
    id: "p2",
    name: "Skin Rejuvenation Cream",
    description: "Advanced anti-aging formula that helps reduce the appearance of fine lines and wrinkles.",
    category: "Beauty",
    commissionRate: 20,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=500",
    variations: [
      {
        id: "v4",
        name: "Standard (50ml)",
        price: 39.99,
        sku: "BC-50ML",
        stockQuantity: 150
      },
      {
        id: "v5",
        name: "Premium (100ml)",
        price: 69.99,
        sku: "BC-100ML",
        stockQuantity: 100
      }
    ],
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-02-01T14:15:00Z"
  },
  {
    id: "p3",
    name: "Weight Management System",
    description: "Complete system including supplements, meal plans, and exercise guides for effective weight management.",
    category: "Health & Wellness",
    commissionRate: 25,
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=500",
    variations: [
      {
        id: "v6",
        name: "Basic Package",
        price: 99.99,
        sku: "WMS-BASIC",
        stockQuantity: 80
      },
      {
        id: "v7",
        name: "Premium Package",
        price: 149.99,
        sku: "WMS-PREMIUM",
        stockQuantity: 60
      },
      {
        id: "v8",
        name: "Elite Package",
        price: 199.99,
        sku: "WMS-ELITE",
        stockQuantity: 40
      }
    ],
    createdAt: "2024-02-05T09:15:00Z",
    updatedAt: "2024-02-05T09:15:00Z"
  }
];
