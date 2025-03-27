import { ChevronRight } from "@deemlol/next-icons";

interface Props {
    name: string;
}

export default function Term({name} : Props) {
    return (
        <div className="flex pl-6 pr-4 place-items-center justify-between rounded-3xl content-end bg-neutral-300 w-full h-12 ">
            <p className="font-semibold text-xl">{name}</p>
            <ChevronRight size={24}/>
        </div>
    )
}