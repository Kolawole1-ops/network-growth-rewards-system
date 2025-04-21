
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Reward } from '@/data/mlmData';
import { Award, Gift, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface RewardsCardProps {
  rewards: Reward[];
  earnedCount: number;
}

const RewardsCard: React.FC<RewardsCardProps> = ({ rewards, earnedCount }) => {
  // Helper to render the appropriate icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'award':
        return <Award className="h-5 w-5" />;
      case 'gift':
        return <Gift className="h-5 w-5" />;
      case 'users':
        return <Users className="h-5 w-5" />;
      default:
        return <Gift className="h-5 w-5" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Rewards Program</CardTitle>
        <div className="text-sm text-muted-foreground mt-1">
          You've earned {earnedCount} of {rewards.length} available rewards
        </div>
        <Progress value={(earnedCount / rewards.length) * 100} className="h-2 mt-2" />
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {rewards.map((reward) => (
            <div 
              key={reward.id}
              className={`p-4 rounded-lg border flex items-start gap-4 transition-all ${
                reward.achieved ? 'bg-mlm-muted border-mlm-primary/30' : 'bg-white border-gray-200'
              }`}
            >
              <div className={`p-2 rounded-full ${
                reward.achieved ? 'bg-mlm-primary text-white' : 'bg-gray-100 text-gray-500'
              }`}>
                {getIcon(reward.icon)}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{reward.name}</h3>
                  <span className={`text-sm font-bold ${
                    reward.achieved ? 'text-mlm-primary' : 'text-muted-foreground'
                  }`}>{reward.value}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{reward.description}</p>
                {!reward.achieved && reward.threshold > 0 && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    Requires {reward.threshold} referrals to unlock
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RewardsCard;
