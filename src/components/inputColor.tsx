import React from "react";

type Props = {
    colors: any[],
    injectColor: (color: string) => void
}
let selectElem: any;
const InputColor: React.FC<Props> = ({colors, injectColor}) => {
    function onSelect() {
        injectColor(selectElem.value)
    }
    React.useEffect(() => {
        selectElem = document.getElementById('selectInputColor');
    })

return <div>
    <select id='selectInputColor' >
        {colors.map(c => <option value={c}>{c}</option>)}
    </select>
    <button onClick={onSelect}>Change color</button>
    </div>
}
export default InputColor;