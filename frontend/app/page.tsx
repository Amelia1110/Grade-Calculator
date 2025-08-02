import { RightOutlined } from "@ant-design/icons";
import AddButton from "./components/AddButton";
import SummaryCard from "./components/wrappers/SummaryCard";
import BreadcrumbSetter from "./context/setters/BreadcrumbSetter";

export default function Home() {
    return (
        <div className="flex flex-col w-full h-full gap-8">
            <BreadcrumbSetter trail={['Home']}/>
            <SummaryCard>   
                <div>
                    
                </div>
            </SummaryCard>
            <div className="flex gap-8">
                <div className="flex w-2/3 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <h2 className="text-2xl font-bold">Current Term</h2> 
                        <button className="text-xl">
                            <RightOutlined />
                        </button> 
                    </div>
                    <AddButton/>
                </div>
                <div className="flex w-1/3 items-center justify-between">
                    <h2 className="text-2xl font-bold">Terms</h2> 
                    <AddButton/>
                </div>
            </div>
        </div>
    )
}
