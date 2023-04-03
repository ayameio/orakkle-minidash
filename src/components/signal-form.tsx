export default function SignalForm() {
    return (
        <div className={"flex flex-col content-center"}>
            <form action="" className={"flex flex-col content-center"}>
                <div id={"asset"} className={"p-2 flex flex-row justify-between"}>
                    <input type="text" className={"rounded-lg"} placeholder={"Asset"}/>
                </div>
                <div id={"entry"} className={"p-2 flex flex-row justify-between"}>
                    <input type="text" className={"rounded-lg"} placeholder={"Entry Price"}/>
                </div>
                <div id={"tp"} className={"p-2 flex flex-row justify-between"}>
                    <input type="text" className={"rounded-lg"} placeholder={"Profit Price"}/>
                </div>
                <div id={"loss"} className={"p-2 flex flex-row justify-between"}>
                    <input type="text" className={"rounded-lg"} placeholder={"Loss Price"}/>
                </div>
                <div className="flex justify-center p-2 rounded-lg bg-indigo-500 text-blue-50">
                    <button type={"submit"}>
                        Push
                    </button>
                </div>
            </form>
        </div>
    )
}