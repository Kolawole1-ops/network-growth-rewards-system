
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DownlineMember } from '@/data/mlmData';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface NetworkVisualizationProps {
  members: DownlineMember[];
}

const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({ members }) => {
  // Filter members for visualization (for simplicity we'll just show a few)
  const directMembers = members.filter(m => m.tier === 1);
  
  // Group second level members by their parent (for simplicity using index)
  const secondLevelLeft = members.filter(m => m.tier === 2 && m.id === 'd3');
  const secondLevelRight = members.filter(m => m.tier === 2 && (m.id === 'd4' || m.id === 'd5'));
  
  // Third level members
  const thirdLevel = members.filter(m => m.tier === 3);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Network Structure</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          {/* You */}
          <div className="relative mb-8">
            <Avatar className="h-16 w-16 border-4 border-mlm-primary animate-pulse-scale">
              <AvatarFallback className="bg-mlm-primary text-white text-lg">
                YOU
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 h-6 w-0.5 bg-mlm-primary/30"></div>
          </div>

          {/* Level 1 */}
          <div className="grid grid-cols-2 gap-16 mb-10 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-24 h-0.5 bg-mlm-primary/30"></div>
            <div className="absolute top-0 left-1/4 transform -translate-x-1/2 h-6 w-0.5 bg-mlm-primary/30"></div>
            <div className="absolute top-0 left-3/4 transform -translate-x-1/2 h-6 w-0.5 bg-mlm-primary/30"></div>
            
            {directMembers.map((member, index) => (
              <div key={member.id} className="flex flex-col items-center">
                <Avatar className="h-12 w-12 border-2 border-mlm-secondary">
                  <AvatarFallback className="bg-mlm-secondary/20 text-mlm-secondary">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <span className="mt-2 text-sm font-medium">{member.name}</span>
                <span className="text-xs text-muted-foreground">Level 1</span>
                <div className="absolute -bottom-6 left-1/4 transform -translate-x-1/2 h-6 w-0.5 bg-mlm-secondary/30"></div>
                <div className="absolute -bottom-6 left-3/4 transform -translate-x-1/2 h-6 w-0.5 bg-mlm-secondary/30"></div>
              </div>
            ))}
          </div>

          {/* Level 2 */}
          <div className="grid grid-cols-3 gap-8 mb-10 relative">
            {/* Left branch */}
            <div className="flex flex-col items-center">
              {secondLevelLeft.length > 0 && (
                <>
                  <Avatar className="h-10 w-10 border border-mlm-accent">
                    <AvatarFallback className="bg-mlm-accent/20 text-mlm-secondary">
                      {secondLevelLeft[0].avatar}
                    </AvatarFallback>
                  </Avatar>
                  <span className="mt-1 text-xs font-medium">{secondLevelLeft[0].name}</span>
                  <span className="text-xs text-muted-foreground">Level 2</span>
                  <div className="absolute -bottom-6 left-1/6 transform -translate-x-1/2 h-6 w-0.5 bg-mlm-accent/30"></div>
                </>
              )}
            </div>
            
            {/* Empty middle */}
            <div></div>
            
            {/* Right branch */}
            <div className="flex flex-col items-center">
              {secondLevelRight.length > 0 && (
                <>
                  <Avatar className="h-10 w-10 border border-mlm-accent">
                    <AvatarFallback className="bg-mlm-accent/20 text-mlm-secondary">
                      {secondLevelRight[0].avatar}
                    </AvatarFallback>
                  </Avatar>
                  <span className="mt-1 text-xs font-medium">{secondLevelRight[0].name}</span>
                  <span className="text-xs text-muted-foreground">Level 2</span>
                  <div className="absolute -bottom-6 left-5/6 transform -translate-x-1/2 h-6 w-0.5 bg-mlm-accent/30"></div>
                </>
              )}
            </div>
          </div>

          {/* Level 3 */}
          <div className="grid grid-cols-2 gap-4">
            {thirdLevel.map((member, index) => (
              <div key={member.id} className="flex flex-col items-center">
                <Avatar className="h-8 w-8 border border-gray-200">
                  <AvatarFallback className="bg-gray-100 text-gray-500 text-xs">
                    {member.avatar}
                  </AvatarFallback>
                </Avatar>
                <span className="mt-1 text-xs font-medium">{member.name}</span>
                <span className="text-xs text-muted-foreground">Level 3</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetworkVisualization;
