import type { ProductStatus } from '@/types/product';

interface BadgeProps {
  status: ProductStatus;
}

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  available: {
    label: 'Tersedia',
    className: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  },
  indent: {
    label: 'Indent / PO',
    className: 'bg-amber-100 text-amber-700 border border-amber-200',
  },
  out_of_stock: {
    label: 'Habis',
    className: 'bg-red-100 text-red-600 border border-red-200',
  },
};

export default function Badge({ status }: BadgeProps) {
  const config = statusConfig[status];
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${config.className}`}>
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === 'available'
            ? 'bg-emerald-500'
            : status === 'indent'
            ? 'bg-amber-500'
            : 'bg-red-500'
        }`}
      />
      {config.label}
    </span>
  );
}
