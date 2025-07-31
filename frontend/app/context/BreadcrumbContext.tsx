'use client'

import { createContext, useState, useContext, ReactNode, SetStateAction, Dispatch } from 'react'

interface BreadcrumbContextType {
  breadcrumb: string[]
  setBreadcrumb: Dispatch<SetStateAction<string[]>>
}

const BreadcrumbContext = createContext<BreadcrumbContextType | null>(null)

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);
  
  return (
    <BreadcrumbContext.Provider value={{ breadcrumb, setBreadcrumb }}>
      {children}
    </BreadcrumbContext.Provider>
  )
}

export function useBreadcrumb() {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }
  return context;
}