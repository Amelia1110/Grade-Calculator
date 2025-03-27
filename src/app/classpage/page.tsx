import AddClass from "@/components/addclass";
import Class from "@/components/class";
import Term from "@/components/term";
import { ChevronRight, Edit } from "@deemlol/next-icons";

export default function ClassPage() {
    return (
        <div className="w-full h-full">
                <div className="grid content-end bg-neutral-300 h-60 rounded-3xl p-8">
                    <div className="flex gap-3 items-center">
                        <p className="font-semibold text-xl">CLASSXXX</p>
                        <Edit size={20}/>
                    </div>
                    <p className="font-extrabold text-7xl">XX.XX</p>
                </div>

                <div className="grid md:grid-cols-4 gap-10 mt-8 w-full">
                <div className="grid gap-5 md:col-span-3">
                    <div className="flex gap-3 items-center">
                        <h1 className="font-bold text-2xl">Current Term</h1>
                        <ChevronRight size={32}/>
                    </div>
                    <div className="flex overflow-auto no-scrollbar md:grid md:grid-cols-3 gap-y-5 gap-x-6 w-full">
                    <Class/>
                    <Class/>
                    <Class/>
                    <Class/>
                    <Class/>
                    <AddClass/>
                    </div>
                </div>
                <div className="md:col-span-1 grid gap-5 content-start">
                    <h1 className="font-bold text-2xl">Placeholder <span className="text-neutral-400">- XX%</span></h1>
                    <div className="grid content-start gap-4 w-full ">
                    <Term/>
                    <Term/>
                    <Term/>
                    <Term/>
                    </div>
                </div>
                </div>
        </div>
    )
}