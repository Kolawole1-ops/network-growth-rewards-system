
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import { rewardsList } from '@/data/mlmData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Award, Gift, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Rewards: React.FC = () => {
  const earnedRewards = rewardsList.filter(reward => reward.achieved);
  const pendingRewards = rewardsList.filter(reward => !reward.achieved);
  
  // Helper to render the appropriate icon
  const getIcon = (iconName: string, size = 5) => {
    switch (iconName) {
      case 'award':
        return <Award className={`h-${size} w-${size}`} />;
      case 'gift':
        return <Gift className={`h-${size} w-${size}`} />;
      case 'users':
        return <Users className={`h-${size} w-${size}`} />;
      default:
        return <Gift className={`h-${size} w-${size}`} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Rewards Program</h1>
          <p className="text-muted-foreground mt-1">Earn special bonuses and rewards for your performance</p>
        </div>
        
        {/* Overall Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Your Rewards Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">You've earned {earnedRewards.length} of {rewardsList.length} rewards</h3>
                <p className="text-sm text-muted-foreground">Keep growing your network to unlock more!</p>
              </div>
              <div className="p-3 rounded-full bg-mlm-primary/10">
                <Award className="h-8 w-8 text-mlm-primary" />
              </div>
            </div>
            
            <Progress value={(earnedRewards.length / rewardsList.length) * 100} className="h-2 mb-4" />
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[5, 10, 25, 50].map((threshold) => (
                <div 
                  key={threshold}
                  className={`text-center p-4 rounded-lg border ${
                    threshold <= 5 ? 'bg-mlm-muted border-mlm-primary/30' : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="text-xl font-bold mb-1">{threshold}</div>
                  <div className="text-xs text-muted-foreground">Referrals</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Rewards List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">All Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Rewards</TabsTrigger>
                <TabsTrigger value="earned">Earned</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid gap-6 md:grid-cols-2">
                  {rewardsList.map((reward) => (
                    <div 
                      key={reward.id}
                      className={`p-6 rounded-xl border flex gap-4 ${
                        reward.achieved ? 'bg-mlm-muted border-mlm-primary/30' : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className={`p-3 rounded-full flex-shrink-0 ${
                        reward.achieved ? 'bg-mlm-primary text-white' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {getIcon(reward.icon, 6)}
                      </div>
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold">{reward.name}</h3>
                          <span className={`font-bold ${
                            reward.achieved ? 'text-mlm-primary' : 'text-muted-foreground'
                          }`}>{reward.value}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{reward.description}</p>
                        {reward.achieved ? (
                          <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">
                            Achieved
                          </div>
                        ) : (
                          <div className="text-sm">
                            <span className="text-muted-foreground">Requires: </span>
                            <span className="font-medium">{reward.threshold} referrals</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="earned">
                <div className="grid gap-6 md:grid-cols-2">
                  {earnedRewards.length > 0 ? (
                    earnedRewards.map((reward) => (
                      <div 
                        key={reward.id}
                        className="p-6 rounded-xl border flex gap-4 bg-mlm-muted border-mlm-primary/30"
                      >
                        <div className="p-3 rounded-full flex-shrink-0 bg-mlm-primary text-white">
                          {getIcon(reward.icon, 6)}
                        </div>
                        <div>
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold">{reward.name}</h3>
                            <span className="font-bold text-mlm-primary">{reward.value}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{reward.description}</p>
                          <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">
                            Achieved
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-12 text-muted-foreground">
                      No rewards earned yet. Start referring to earn rewards!
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="pending">
                <div className="grid gap-6 md:grid-cols-2">
                  {pendingRewards.length > 0 ? (
                    pendingRewards.map((reward) => (
                      <div 
                        key={reward.id}
                        className="p-6 rounded-xl border flex gap-4 bg-white border-gray-200"
                      >
                        <div className="p-3 rounded-full flex-shrink-0 bg-gray-100 text-gray-500">
                          {getIcon(reward.icon, 6)}
                        </div>
                        <div>
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold">{reward.name}</h3>
                            <span className="font-bold text-muted-foreground">{reward.value}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{reward.description}</p>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Requires: </span>
                            <span className="font-medium">{reward.threshold} referrals</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-12 text-muted-foreground">
                      Congratulations! You've earned all available rewards.
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Rewards;
