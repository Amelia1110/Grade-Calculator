import { ReactNode } from "react";

export default function SummaryCard({ children }: { children: ReactNode }) {
    return (
        <div className="w-full h-50 rounded-3xl bg-white/70">
            {children}
        </div>
    )
}