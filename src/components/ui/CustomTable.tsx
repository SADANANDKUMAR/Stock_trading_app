import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpDown } from 'lucide-react';
import { DataTableProps } from '../../types';

export function CustomTable<T extends Record<string, any>>({
  data,
  columns,
  rowKey,
  onRowClick,
  selectedRowKey,
}: DataTableProps<T>) {
  const [sortField, setSortField] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof T) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortField) return 0;

    const aVal = a[sortField];
    const bVal = b[sortField];

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortDirection === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    }

    return 0;
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/20">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={`px-4 py-3 text-left text-sm font-medium text-gray-300
                  ${col.sortable ? 'cursor-pointer hover:text-white' : ''}
                `}
                onClick={() => col.sortable && handleSort(col.key)}
              >
                <div className="flex items-center space-x-1">
                  <span>{col.label}</span>
                  {col.sortable && <ArrowUpDown className="h-4 w-4" />}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedData.map((row, index) => {
            const key = rowKey(row);
            const isSelected = key === selectedRowKey;

            return (
              <motion.tr
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onRowClick?.(row)}
                className={`
                  border-b border-white/10 hover:bg-white/5 transition-colors
                  ${onRowClick ? 'cursor-pointer' : ''}
                  ${isSelected ? 'bg-blue-500/20' : ''}
                `}
              >
                {columns.map((col) => (
                  <td key={String(col.key)} className="px-4 py-4">
                    {col.render
                      ? col.render(row)
                      : String(row[col.key])}
                  </td>
                ))}
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
