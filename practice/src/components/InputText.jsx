import { useState } from "react"

const InputText = () => {
    const [inputValue, setInputValue] = useState("");

    //상태 변경 핸들러 함수
    const handleInputValue = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    return(
        <div>
            <h2>글자 입력</h2>
            <input
                type="text"
                placeholder="글자 입력"
                onChange={handleInputValue}
            />
            <p>입력된 내용: {inputValue}</p>
        </div>
    )
}

export default InputText