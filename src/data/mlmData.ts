
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
