import React from 'react';
import { Shield, Wrench, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Custom Metal Fabrication</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Bringing your metal fabrication projects to life with precision, expertise, and dedication.
              From concept to completion, we're your trusted partner in custom metalwork.
            </p>
            <Link
              to="/quote"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Feature
              icon={<Shield className="w-8 h-8 text-orange-500" />}
              title="Quality Guaranteed"
              description="Every project completed to the highest standards"
            />
            <Feature
              icon={<Wrench className="w-8 h-8 text-orange-500" />}
              title="Expert Craftsmen"
              description="Skilled welders with years of experience"
            />
            <Feature
              icon={<Clock className="w-8 h-8 text-orange-500" />}
              title="Quick Turnaround"
              description="Efficient service without compromising quality"
            />
            <Feature
              icon={<Award className="w-8 h-8 text-orange-500" />}
              title="Certified Work"
              description="Licensed and insured professional service"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}