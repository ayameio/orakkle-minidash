import DropdownButton from "@/components/dropdown-button";

export default function SignalBox(props: {isDummy: boolean, isLive: boolean, id: string, unix: string, asset: string, ordertype: string, entry: string, profit: string, loss: string }) {
    return (
        <div className={"flex flex-col justify-center"}>
            <div className={"py-4"}></div>
            <div id={"signal-box"} className={"grid grid-cols-8 content-center justify-between divide-x divide-gray-300"}>
                <div className={"px-2"}>{props.id}</div>
                <div className={"px-2"}>{props.unix}</div>
                <div className={"px-2"}>{props.asset}</div>
                <div className={"px-2"}>{props.ordertype}</div>
                <div className={"px-2"}>{props.entry}</div>
                <div className={"px-2"}>{props.profit}</div>
                <div className={"px-2"}>{props.loss}</div>
                { props.isDummy ? ( <div className={"   p-2 px-8"}>Action</div> ) : null }
                { props.isLive ? ( <DropdownButton/> ) : null }
            </div>
        </div>
    )
}