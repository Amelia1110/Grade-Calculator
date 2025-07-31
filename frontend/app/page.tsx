import BreadcrumbSetter from "./context/setters/BreadcrumbSetter";

export default function Home() {
    return (
        <div className="w-full h-full">
            <BreadcrumbSetter trail={['Home']}/>
        </div>
    )
}
