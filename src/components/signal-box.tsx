import DropdownButton from "@/components/dropdown-button";

export default function SignalBox(props: {isLive: boolean, id: string, unix: string, asset: string, entry: string, profit: string, loss: string }) {
    return (
        <div className={"flex flex-col justify-center"}>
            <div className={"py-4"}></div>
            <div id={"signal-box"} className={"flex flex-row justify-between divide-x divide-gray-300"}>
                <div className={"p-2 px-8"}>{props.id}</div>
                <div className={"p-2 px-8"}>{props.unix}</div>
                <div className={"p-2 px-8"}>{props.asset}</div>
                <div className={"p-2 px-8"}>{props.entry}</div>
                <div className={"p-2 px-8"}>{props.profit}</div>
                <div className={"p-2 px-8"}>{props.loss}</div>
                { props.isLive ? ( <DropdownButton/> ) : null }
            </div>
        </div>
    )
}