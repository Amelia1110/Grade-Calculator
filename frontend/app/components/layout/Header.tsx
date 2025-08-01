'use client'

import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import {Breadcrumbs, BreadcrumbItem} from "@heroui/react";

export default function Header() {
    const { breadcrumb } = useBreadcrumb();

    return (
        <header className="flex justify-between items-center w-full rounded-4xl py-4 px-8 bg-white/30 backdrop-blur-md ring-1 ring-white/80 text-lg">
            <div>
                <Breadcrumbs>
                    {breadcrumb.map((item: string) => (
                        <BreadcrumbItem>{item}</BreadcrumbItem>
                    ))}
                </Breadcrumbs>
            </div>
            <p className="text-2xl font-extrabold text-white"># APP NAME</p>
        </header>
    )
}