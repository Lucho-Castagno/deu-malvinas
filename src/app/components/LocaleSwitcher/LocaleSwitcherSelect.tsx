'use client';

import { useState, useEffect } from 'react';
import { Locale } from '@/config';
import { setUserLocale } from '@/app/services/locale';

type Props = {
  defaultValue: string;
  items: Array<{value: string; label: string}>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label
}: Props) {
  const [selectedLocale, setSelectedLocale] = useState(defaultValue);

  useEffect(() => {
    setSelectedLocale(defaultValue);
  }, [defaultValue]);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as Locale;
    setSelectedLocale(newLocale);
    setUserLocale(newLocale);
  }

  return (
    <div className="mb-5">
      <h2>{label}</h2>
      <div className="card bg-lightyellow" style={{ width: '18rem' }}>
        <select
          className="form-select bg-transparent"
          aria-label={label}
          value={selectedLocale}
          onChange={onChange}
        >
          {items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}