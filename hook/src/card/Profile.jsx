import Avatar from "./Avatar";
import myPhoto from "../assets/sudo.jpg"
import Card from "./Card"

export default function Profile(){

    return (
        <div>
            <Card>
                <Avatar
                    size = {{
                        width: "300px",
                        height: "200px"
                    }}
                    person = {{
                        name: "김기용",
                        imageUrl: myPhoto
                    }}
                />
            </Card>
        </div>
    )
}