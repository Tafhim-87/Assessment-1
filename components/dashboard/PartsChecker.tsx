'use client';

import { useState } from 'react';

export default function PartsChecker() {
  const [query, setQuery] = useState('iPhone 13 Battery OEM');
  const [result, setResult] = useState<string | null>(null);

  const handleCheck = () => {
    setResult(
      'Parts In Stock: 14 Units available in Warehouse Rack B-04.',
    );
  };

  return (
    <div className="p-space-md bg-surface-container-lowest rounded-lg shadow-sm">
      <span className="font-label-md text-label-md font-semibold text-on-surface block mb-1">
        Parts Compatibility Check
      </span>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
        Query stock availability by device chassis number.
      </p>
      <div className="flex gap-space-xs">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full text-code-xs font-code-xs px-2 py-1 bg-surface-container rounded text-on-surface focus:outline-none"
        />
        <button
          onClick={handleCheck}
          className="px-2.5 py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded hover:bg-primary-container transition-all"
        >
          Check
        </button>
      </div>
      {result && (
        <p className="mt-2 font-code-xs text-code-xs text-primary">{result}</p>
      )}
    </div>
  );
}