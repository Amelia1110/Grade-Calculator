'use client'

import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import {Breadcrumbs, BreadcrumbItem} from "@heroui/react";

export default function Header() {
    const { breadcrumb } = useBreadcrumb();

    return (
        <header className="flex justify-between items-center w-full rounded-4xl py-4 px-8 bg-gray-100 text-lg">
            <div>
                <Breadcrumbs>
                    {breadcrumb.map((item: string) => (
                        <BreadcrumbItem>{item}</BreadcrumbItem>
                    ))}
                </Breadcrumbs>
            </div>
            <p className="text-2xl font-extrabold"># APP NAME</p>
        </header>
    )
}