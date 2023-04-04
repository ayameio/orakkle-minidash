import {useState} from "react";

interface ISignalData {
    asset: string,
    orderType: string,
    entryPrice: string,
    takeProfit: string,
    stopLoss: string,
    closed: boolean,
    successful: boolean
}

export default function SignalForm() {
    const [signalData, setSignalData] = useState<ISignalData>({
        asset: "",
        orderType: "",
        entryPrice: "",
        takeProfit: "",
        stopLoss: "",
        closed: false,
        successful: false,
    })

    return (
        <div className={"flex flex-col content-center"}>
            <form className={"flex flex-col content-center"}>
                <InputField placeholder={"Asset Name"}></InputField>
                <InputField placeholder={"Order Type"}></InputField>
                <InputField placeholder={"Entry Price"}></InputField>
                <InputField placeholder={"Profit Price"}></InputField>
                <InputField placeholder={"Loss Price"}></InputField>
                <div className="flex justify-center p-2 rounded-lg bg-indigo-500 text-blue-50">
                    <button type={"submit"}>
                        Push
                    </button>
                </div>
            </form>
        </div>
    )
}

function InputField(props: {placeholder: string}) {
    return (
        <div id={props.placeholder} className={"p-2 flex flex-row justify-between"}>
            <input type="text" className={"rounded-lg"} placeholder={props.placeholder}/>
        </div>
    )
}