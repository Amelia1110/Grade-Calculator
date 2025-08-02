'use client'

import { useBreadcrumb } from "@/app/context/BreadcrumbContext"
import { Breadcrumb } from "antd";

export default function Header() {
    const { breadcrumb } = useBreadcrumb();

    return (
        <header className="flex justify-between items-center w-full rounded-4xl py-3 px-8 bg-white/30 backdrop-blur-md ring-1 ring-white/60 text-lg">
            <div>
                <Breadcrumb>
                    {breadcrumb.map((item: string) => (
                        <Breadcrumb.Item>
                            <p className="text-lg font-semibold">{item}</p>
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            </div>
            <h1 className="text-3xl font-extrabold text-white"># APP NAME</h1>
        </header>
    )
}