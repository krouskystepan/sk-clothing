import { TProductCard } from '@/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getXofType = (array: TProductCard[], num: number) => {
  const unique = []
  const seenNames = new Set()

  for (const item of array) {
    if (!seenNames.has(item.name)) {
      unique.push(item)
      seenNames.add(item.name)
    }
  }

  // Return only the top X unique
  return unique.slice(0, num)
}
