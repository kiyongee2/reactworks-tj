
const UserList = () => {
    const userList = [
        {id: 1, name: "홍길동"},
        {id: 2, name: "이순신"}
    ]

    return(
        <div>
            <h2>회원 관리</h2>
            <ul className="user-list">
            {userList.map(user => (
                <li key={user.id}>{user.id}. {user.name}</li>
            ))}
            </ul>
        </div>
    )
}

export default UserList