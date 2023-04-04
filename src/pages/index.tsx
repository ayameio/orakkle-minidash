import SignalBox from "@/components/signal-box";
import SignalForm from "@/components/signal-form";
export default function Home() {
    return (
        <div className={"flex flex-row justify-evenly content-center"}>
            <div id={"live-column"} className={"rounded-md shadow-md p-8 flex flex-col content-center"}>
                <h1 className={"text-2xl self-center"}>Live Trades</h1>
                <SignalBox isDummy={true} isLive={false} id={"ID"} unix={"Unix"} asset={"Asset Name"} ordertype={"Order Type"} entry={"Entry Price"} profit={"Profit Price"} loss={"Loss Price"}/>
                <SignalBox isDummy={false} isLive={true} id={"1"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
                <SignalBox isDummy={false} isLive={true} id={"2"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
                <SignalBox isDummy={false} isLive={true} id={"3"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
                <SignalBox isDummy={false} isLive={true} id={"4"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
                <SignalBox isDummy={false} isLive={true} id={"5"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
                <SignalBox isDummy={false} isLive={true} id={"6"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
                <SignalBox isDummy={false} isLive={true} id={"7"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
            </div>
            <div id={"push-column"} className={"rounded-md shadow-md p-8 flex flex-col content-center justify-center"}>
                <SignalForm/>
            </div>
            <div id={"history-column"} className={"rounded-md shadow-md p-8 flex flex-col content-center"}>
                <h1 className={"text-2xl self-center"}>Trading History</h1>
                <SignalBox isDummy={true}  isLive={false} id={"ID"} unix={"Unix"} asset={"Asset Name"} ordertype={"Order Type"} entry={"Entry Price"} profit={"Profit Price"} loss={"Loss Price"}/>
                <SignalBox isDummy={false}  isLive={false} id={"1"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
                <SignalBox isDummy={false}  isLive={false} id={"2"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
                <SignalBox isDummy={false}  isLive={false} id={"3"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
                <SignalBox isDummy={false}  isLive={false} id={"4"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
                <SignalBox isDummy={false}  isLive={false} id={"5"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
                <SignalBox isDummy={false}  isLive={false} id={"6"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
                <SignalBox isDummy={false}  isLive={false} id={"7"} unix={"1"} asset={"1"} ordertype={"buyStop"} entry={"1"} profit={"1"} loss={"1"}/>
            </div>
        </div>
    )
}