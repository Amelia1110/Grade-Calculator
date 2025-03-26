import { Eye } from "@deemlol/next-icons"
import { Switch } from "@/components/ui/switch";

export default function Header() {
    return (
        <div className="flex items-center mb-4 mt-8 gap-2">
            <Eye size={20} className="text-neutral-700"/>
            <Switch/>
        </div>
    )
}