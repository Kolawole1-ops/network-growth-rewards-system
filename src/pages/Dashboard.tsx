
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import StatCard from '@/components/Dashboard/StatCard';
import CommissionTable from '@/components/MLM/CommissionTable';
import RewardsCard from '@/components/MLM/RewardsCard';
import ProductGallery from '@/components/Dashboard/ProductGallery';
import { userStats, commissionLevels, rewardsList, products } from '@/data/mlmData';
import { Award, ChartBar, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Dashboard: React.FC = () => {
  const earnedRewardsCount = rewardsList.filter(reward => reward.achieved).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100/90 via-yellow-200 to-yellow-50 relative">
      {/* Decorative overlay for more gold shine */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
        <div className="w-full h-full bg-gradient-to-br from-[#FFF9C4bb] via-[#FFD70022] to-[#ffe082] opacity-70" />
        <div className="absolute right-0 top-0 w-36 h-36 rounded-full bg-yellow-300 blur-3xl opacity-40" />
        <div className="absolute left-0 bottom-0 w-32 h-32 rounded-full bg-yellow-200 blur-2xl opacity-50" />
      </div>
      <Navbar />
      
      <main className="relative z-10 container px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-yellow-900 drop-shadow" style={{letterSpacing:"-1px"}}>
            Welcome to <span className="text-transparent bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-200 bg-clip-text">MLM Pro Platform</span>
          </h1>
          <p className="text-lg mt-1 text-yellow-700 font-semibold">
            Your hub for growth, rewards, and opportunities
          </p>
        </div>

        {/* Product Gallery Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-yellow-600 mb-2 text-center">
            Featured Products
          </h2>
          <p className="mb-6 text-center text-md text-yellow-800">
            Explore our exclusive products. Buy, refer, and earn commissions!
          </p>
          <ProductGallery products={products} />
        </section>

        {/* Stats Grid */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard 
              title="Total Earnings" 
              value={`$${userStats.totalEarnings.toLocaleString()}`} 
              icon={<ChartBar className="h-5 w-5" />} 
              trend="up" 
              trendValue="12% this month" 
            />
            <StatCard 
              title="Total Referrals" 
              value={userStats.totalReferrals} 
              icon={<Users className="h-5 w-5" />} 
            />
            <StatCard 
              title="Active Downlines" 
              value={userStats.activeDownlines} 
              icon={<Users className="h-5 w-5" />} 
              trend="up" 
              trendValue="2 new" 
            />
            <StatCard 
              title="Personal Sales" 
              value={`$${userStats.personalSales.toLocaleString()}`} 
              icon={<TrendingUp className="h-5 w-5" />} 
            />
          </div>
        </section>
        
        {/* Rank and Pending Commissions */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-xl bg-gradient-to-b from-yellow-50 to-white border-none">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-yellow-700">Current Rank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-700">{userStats.currentRank}</h3>
                  <p className="text-sm text-yellow-600">Next rank: Gold Director</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to next rank</span>
                  <span className="font-medium text-yellow-700">{userStats.nextRankProgress}%</span>
                </div>
                <Progress value={userStats.nextRankProgress} className="h-2 bg-yellow-200" />
                <p className="text-xs text-yellow-800 mt-2">
                  You need 3 more active referrals and $1,800 in team sales to reach Gold Director
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-xl bg-gradient-to-b from-yellow-50 to-white border-none">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-yellow-700">Pending Commissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-yellow-600">Current Period</p>
                  <h3 className="text-2xl font-bold text-yellow-700">${userStats.pendingCommissions.toFixed(2)}</h3>
                </div>
                <div className="bg-gradient-to-tr from-yellow-200 to-yellow-400 text-yellow-900 p-4 rounded-lg">
                  <ChartBar className="h-8 w-8" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm border-b pb-2 border-yellow-100">
                  <span>Direct Referrals</span>
                  <span className="font-medium text-yellow-800">$95.25</span>
                </div>
                <div className="flex justify-between text-sm border-b pb-2 border-yellow-100">
                  <span>Level 2</span>
                  <span className="font-medium text-yellow-800">$37.50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Level 3</span>
                  <span className="font-medium text-yellow-800">$13.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Commission Structure and Rewards */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CommissionTable levels={commissionLevels} />
          <RewardsCard rewards={rewardsList} earnedCount={earnedRewardsCount} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
