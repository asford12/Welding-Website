import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>info@customfab.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>123 Welding Way, Metal City, MC 12345</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <div className="space-y-1">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-1">
              <li>Custom Metal Fabrication</li>
              <li>Welding Services</li>
              <li>Metal Repairs</li>
              <li>Structural Steel</li>
              <li>Artistic Metalwork</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-zinc-700 text-center">
          <p>&copy; {new Date().getFullYear()} Custom Fabrication. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}