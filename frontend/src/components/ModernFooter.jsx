import React from 'react';

export default function ModernFooter() {
  return (
    <footer className="bg-light-bg py-6 mt-12 shadow-neumorphic">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} M&M Interior Works. All rights reserved.
        </p>
      </div>
    </footer>
  );
}