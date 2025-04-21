
import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  className?: string;
}

const StatCard = ({ title, value, icon, trend, trendValue, className }: StatCardProps) => {
  return (
    <Card className={cn("mlm-stats-card", className)}>
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon && <div className="text-mlm-primary">{icon}</div>}
      </div>
      <div className="mt-2 flex justify-between items-end">
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <div className={cn(
            "flex items-center text-xs font-medium",
            trend === 'up' ? "text-green-500" : 
            trend === 'down' ? "text-red-500" : 
            "text-gray-500"
          )}>
            {trend === 'up' && '↑'}
            {trend === 'down' && '↓'}
            {trendValue}
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatCard;
