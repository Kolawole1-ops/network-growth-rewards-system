
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import StatCard from '@/components/Dashboard/StatCard';
import CommissionTable from '@/components/MLM/CommissionTable';
import RewardsCard from '@/components/MLM/RewardsCard';
import { userStats, commissionLevels, rewardsList } from '@/data/mlmData';
import { Award, ChartBar, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Dashboard: React.FC = () => {
  const earnedRewardsCount = rewardsList.filter(reward => reward.achieved).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome, John Doe</h1>
          <p className="text-muted-foreground mt-1">Here's an overview of your MLM business performance</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
        
        {/* Rank and Pending Commissions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">Current Rank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-mlm-primary/10 rounded-full">
                  <Award className="h-6 w-6 text-mlm-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-mlm-primary">{userStats.currentRank}</h3>
                  <p className="text-sm text-muted-foreground">Next rank: Gold Director</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to next rank</span>
                  <span className="font-medium">{userStats.nextRankProgress}%</span>
                </div>
                <Progress value={userStats.nextRankProgress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  You need 3 more active referrals and $1,800 in team sales to reach Gold Director
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">Pending Commissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Current Period</p>
                  <h3 className="text-2xl font-bold">${userStats.pendingCommissions.toFixed(2)}</h3>
                </div>
                <div className="mlm-gradient-bg text-white p-4 rounded-lg">
                  <ChartBar className="h-8 w-8" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm border-b pb-2">
                  <span>Direct Referrals</span>
                  <span className="font-medium">$95.25</span>
                </div>
                <div className="flex justify-between text-sm border-b pb-2">
                  <span>Level 2</span>
                  <span className="font-medium">$37.50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Level 3</span>
                  <span className="font-medium">$13.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Commission Structure and Rewards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CommissionTable levels={commissionLevels} />
          <RewardsCard rewards={rewardsList} earnedCount={earnedRewardsCount} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
