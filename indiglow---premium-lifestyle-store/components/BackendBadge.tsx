
import React from 'react';
import { Database } from 'lucide-react';

const BackendBadge: React.FC = () => {
  return (
    <div className="bg-blue-50 border-y border-blue-100 py-3 text-center flex items-center justify-center space-x-2 text-sm text-blue-700 font-medium">
      <Database className="h-4 w-4" />
      <span>This page is backend-ready. Can be connected to Django or Node.js APIs.</span>
    </div>
  );
};

export default BackendBadge;
