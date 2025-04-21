
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DownlineMember } from '@/data/mlmData';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DownlineListProps {
  members: DownlineMember[];
}

const DownlineList: React.FC<DownlineListProps> = ({ members }) => {
  // Group members by tier
  const tier1 = members.filter(member => member.tier === 1);
  const tier2 = members.filter(member => member.tier === 2);
  const tier3 = members.filter(member => member.tier === 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const renderMemberCard = (member: DownlineMember) => (
    <div key={member.id} className="p-4 border rounded-lg flex items-center gap-4 hover:bg-gray-50 transition-colors">
      <Avatar>
        <AvatarFallback className="bg-mlm-primary/10 text-mlm-primary">
          {member.avatar}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">{member.name}</h3>
            <p className="text-xs text-muted-foreground">Joined {formatDate(member.joinDate)}</p>
          </div>
          <Badge variant={member.active ? "secondary" : "outline"} className="text-xs">
            {member.active ? "Active" : "Inactive"}
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-x-4 mt-2 text-sm">
          <div>
            <span className="text-muted-foreground">Sales:</span> ${member.sales}
          </div>
          <div>
            <span className="text-muted-foreground">Referrals:</span> {member.personalReferrals}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Your Network</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tier1">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tier1">Direct (L1)</TabsTrigger>
            <TabsTrigger value="tier2">Level 2</TabsTrigger>
            <TabsTrigger value="tier3">Level 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tier1" className="mt-4 space-y-3">
            {tier1.length > 0 ? (
              tier1.map(renderMemberCard)
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No direct referrals yet
              </div>
            )}
          </TabsContent>
          <TabsContent value="tier2" className="mt-4 space-y-3">
            {tier2.length > 0 ? (
              tier2.map(renderMemberCard)
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No level 2 members yet
              </div>
            )}
          </TabsContent>
          <TabsContent value="tier3" className="mt-4 space-y-3">
            {tier3.length > 0 ? (
              tier3.map(renderMemberCard)
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No level 3 members yet
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DownlineList;
