import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    timeline: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      description: '',
      timeline: '',
      budget: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Request a Quote</h1>
      <p className="text-xl text-gray-600 mb-8">
        Fill out the form below and we'll get back to you with a detailed quote for your project.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <InputField
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <SelectField
            label="Project Type"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            options={[
              { value: '', label: 'Select a project type' },
              { value: 'custom-fabrication', label: 'Custom Fabrication' },
              { value: 'welding-repair', label: 'Welding Repair' },
              { value: 'structural', label: 'Structural Work' },
              { value: 'artistic', label: 'Artistic Metalwork' },
              { value: 'other', label: 'Other' }
            ]}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Please describe your project in detail..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField
            label="Timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            required
            options={[
              { value: '', label: 'Select timeline' },
              { value: 'urgent', label: 'Urgent (1-2 weeks)' },
              { value: 'normal', label: 'Normal (2-4 weeks)' },
              { value: 'flexible', label: 'Flexible (1+ months)' }
            ]}
          />
          <SelectField
            label="Budget Range"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            options={[
              { value: '', label: 'Select budget range' },
              { value: 'under-1000', label: 'Under $1,000' },
              { value: '1000-5000', label: '$1,000 - $5,000' },
              { value: '5000-10000', label: '$5,000 - $10,000' },
              { value: 'over-10000', label: 'Over $10,000' }
            ]}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
        >
          <Send className="w-5 h-5" />
          <span>Submit Quote Request</span>
        </button>
      </form>
    </div>
  );
}

function InputField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  required,
  options
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  options: Array<{ value: string; label: string }>;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}