
function UserProfile({name, email, imgUrl}) {
    return( 
        <div>
            <ul>
                <li>{name}</li>
                <li>{email}</li>
                <li><img src={imgUrl}></img></li>
            </ul>
        </div>
    )
}

export default UserProfile 