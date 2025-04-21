
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bell, TrendingUp, Users } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-mlm-primary text-white p-1.5 rounded-lg">
              <TrendingUp className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl text-mlm-primary">MLM Pro</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-mlm-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/network" className="text-sm font-medium hover:text-mlm-primary transition-colors">
            My Network
          </Link>
          <Link to="/commissions" className="text-sm font-medium hover:text-mlm-primary transition-colors">
            Commissions
          </Link>
          <Link to="/rewards" className="text-sm font-medium hover:text-mlm-primary transition-colors">
            Rewards
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          
          <Link to="/profile">
            <Avatar>
              <AvatarFallback className="bg-mlm-secondary text-white">
                JD
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
