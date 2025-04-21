
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import DownlineList from '@/components/MLM/DownlineList';
import NetworkVisualization from '@/components/MLM/NetworkVisualization';
import { downlineMembers } from '@/data/mlmData';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

const Network: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Network</h1>
            <p className="text-muted-foreground mt-1">Manage and grow your downline organization</p>
          </div>
          <Button className="bg-mlm-primary hover:bg-mlm-primary/90">
            <UserPlus className="h-4 w-4 mr-2" />
            Invite New Member
          </Button>
        </div>
        
        {/* Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Total Network Size</h3>
            <div className="mt-2 text-3xl font-bold">{downlineMembers.length}</div>
            <div className="mt-1 text-xs text-green-500">+2 this month</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Active Members</h3>
            <div className="mt-2 text-3xl font-bold">
              {downlineMembers.filter(m => m.active).length}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              {Math.round((downlineMembers.filter(m => m.active).length / downlineMembers.length) * 100)}% activity rate
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Team Volume</h3>
            <div className="mt-2 text-3xl font-bold">
              ${downlineMembers.reduce((sum, member) => sum + member.sales, 0).toLocaleString()}
            </div>
            <div className="mt-1 text-xs text-green-500">+$560 from last month</div>
          </div>
        </div>
        
        {/* Network Visualization */}
        <div className="mb-8">
          <NetworkVisualization members={downlineMembers} />
        </div>
        
        {/* Downline List */}
        <div>
          <DownlineList members={downlineMembers} />
        </div>
      </main>
    </div>
  );
};

export default Network;
