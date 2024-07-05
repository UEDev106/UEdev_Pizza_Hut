import {useSelector} from 'react-redux'

function UserName() {
    const username=useSelector((state=>state.user.username))

    if(!username) return null;

    return (
        <div className="text-sm font-semibold uppercase hidden md:block">
            {username}
        </div>
    )
}

export default UserName
