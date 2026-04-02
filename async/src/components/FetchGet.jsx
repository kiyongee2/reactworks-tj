import { useEffect, useState } from "react"

function FetchGet(){
    const [users, setUsers] = useState([])

    //users.json의 모든 데이터 가져오기
    useEffect(() => {
        fetch("/json/users.json")
            .then(response => response.json()) //json -> js 객체로 변환
            .then(data => {
                console.log("데이터 가져오기 성공:", data);
                setUsers(data)
            })
            .catch(err => console.log("오류:", err))
    }, []) 

    return (
        <div>
            <h2>회원 목록</h2>
            {/* 테이블 태그로 만들기 */}
            
            {/* <ul>
                {users.map(user => (
                    <li key={user.id}>이름:{user.name}, 도시:{user.address.city}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default FetchGet