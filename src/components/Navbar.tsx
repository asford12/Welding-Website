import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Home, Image, MessageSquare } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Hammer className="w-8 h-8 text-orange-500" />
            <span className="font-bold text-xl">Custom Fabrication</span>
          </Link>
          
          <div className="flex space-x-8">
            <NavLink to="/" icon={<Home className="w-4 h-4" />} text="Home" />
            <NavLink to="/portfolio" icon={<Image className="w-4 h-4" />} text="Portfolio" />
            <NavLink to="/quote" icon={<MessageSquare className="w-4 h-4" />} text="Get Quote" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 hover:text-orange-500 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}