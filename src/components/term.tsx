import { ChevronRight } from "@deemlol/next-icons";

export default function Term() {
    return (
        <div className="flex pl-6 pr-4 place-items-center justify-between rounded-3xl content-end bg-neutral-300 w-full h-12 ">
            <p className="font-semibold text-xl">1A</p>
            <ChevronRight size={24}/>
        </div>
    )
}