
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import CommissionTable from '@/components/MLM/CommissionTable';
import { commissionLevels, userStats } from '@/data/mlmData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Commissions: React.FC = () => {
  // Sample commission history data
  const commissionHistory = [
    { id: 1, date: '2024-04-15', member: 'Alex Johnson', level: 1, amount: 125.00, status: 'Paid' },
    { id: 2, date: '2024-04-10', member: 'Sarah Williams', level: 1, amount: 98.00, status: 'Paid' },
    { id: 3, date: '2024-04-05', member: 'Michael Brown', level: 2, amount: 37.50, status: 'Paid' },
    { id: 4, date: '2024-04-01', member: 'Jennifer Davis', level: 2, amount: 16.00, status: 'Paid' },
    { id: 5, date: '2024-03-25', member: 'David Miller', level: 2, amount: 22.50, status: 'Paid' },
    { id: 6, date: '2024-03-20', member: 'Robert Wilson', level: 3, amount: 5.40, status: 'Paid' },
    { id: 7, date: '2024-03-15', member: 'Emily Clark', level: 3, amount: 6.30, status: 'Paid' },
  ];

  // Sample pending commissions
  const pendingCommissions = [
    { id: 8, date: '2024-04-20', member: 'Alex Johnson', level: 1, amount: 65.25, status: 'Pending' },
    { id: 9, date: '2024-04-18', member: 'Sarah Williams', level: 1, amount: 30.00, status: 'Pending' },
    { id: 10, date: '2024-04-17', member: 'Michael Brown', level: 2, amount: 37.50, status: 'Pending' },
    { id: 11, date: '2024-04-16', member: 'Jennifer Davis', level: 2, amount: 13.00, status: 'Pending' },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Commissions</h1>
          <p className="text-muted-foreground mt-1">Track your earnings and commission structure</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-muted-foreground">Total Earnings (All Time)</div>
              <div className="text-3xl font-bold mt-2">${userStats.totalEarnings.toLocaleString()}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-muted-foreground">Pending Commissions</div>
              <div className="text-3xl font-bold mt-2">${userStats.pendingCommissions.toFixed(2)}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm font-medium text-muted-foreground">This Month's Earnings</div>
              <div className="text-3xl font-bold mt-2">$310.75</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Commission Structure */}
        <div className="mb-8">
          <CommissionTable levels={commissionLevels} />
        </div>
        
        {/* Commission History */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Commission History</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending">
              <TabsList className="mb-4">
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="paid">Paid</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Member</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingCommissions.map((commission) => (
                      <TableRow key={commission.id}>
                        <TableCell>{formatDate(commission.date)}</TableCell>
                        <TableCell>{commission.member}</TableCell>
                        <TableCell>Level {commission.level}</TableCell>
                        <TableCell className="font-medium">${commission.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                            {commission.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="paid">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Member</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {commissionHistory.map((commission) => (
                      <TableRow key={commission.id}>
                        <TableCell>{formatDate(commission.date)}</TableCell>
                        <TableCell>{commission.member}</TableCell>
                        <TableCell>Level {commission.level}</TableCell>
                        <TableCell className="font-medium">${commission.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            {commission.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Commissions;
