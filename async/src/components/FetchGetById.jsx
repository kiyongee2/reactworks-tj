import { useEffect, useState } from "react"

function FetchGetById({id}){
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch("/json/users.json")
            .then(resp => resp.json()) //json -> js 객체로 변환
            .then(data => {
                //가져온 리스트 내부에서 검색 - find()
                const foundUser = data.find(user => user.id === id)
                console.log("가져온 데이터:", foundUser);
                setUser(foundUser);
            })
            .catch(err => console.log("오류:", err));
    }, [id])

    return(
        <div>
            <h2>회원 정보</h2>
            {user && (
                <div>
                    <p>ID: {user.id}</p>
                    <p>이름: {user.name}</p>
                    <p>도시: {user.address.city}</p>
                    <p>이메일: {user.email}</p>
                </div>
            )}
        </div>
    )
}

export default FetchGetById