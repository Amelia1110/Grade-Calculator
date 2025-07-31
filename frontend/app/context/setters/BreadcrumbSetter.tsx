'use client'

import { useEffect } from 'react'
import { useBreadcrumb } from '../BreadcrumbContext'

export default function BreadcrumbSetter({ trail }: { trail: string[] }) {
  const { setBreadcrumb } = useBreadcrumb()

  useEffect(() => {
    setBreadcrumb(trail)
  }, [trail])

  return null
}