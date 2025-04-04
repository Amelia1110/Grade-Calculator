interface Props {
    name: string;
}

export default function Class({name}: Props) {
    return (
        <div className="grid p-5 rounded-3xl content-end bg-neutral-300 h-55">
            <p className="font-extrabold text-4xl w-50 md:w-full">XX.XX</p>
            <p className="font-medium">{name}</p>
        </div>
    )
}