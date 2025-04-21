
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CommissionLevel } from '@/data/mlmData';

interface CommissionTableProps {
  levels: CommissionLevel[];
}

const CommissionTable: React.FC<CommissionTableProps> = ({ levels }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Commission Structure</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Level</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Commission</TableHead>
              <TableHead className="hidden md:table-cell">Requirements</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {levels.map((level) => (
              <TableRow key={level.level}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: level.color }}
                    />
                    <span>Level {level.level}</span>
                  </div>
                </TableCell>
                <TableCell>{level.levelName}</TableCell>
                <TableCell className="font-medium">{level.percentage}%</TableCell>
                <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                  {level.requirements}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CommissionTable;
