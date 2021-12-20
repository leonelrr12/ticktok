import { useDispatch } from "react-redux"
import { ClearButton } from "../theme"

import { logOut } from "../store/user"

export const LogOutButton = (props) => {
    let dispatch = useDispatch();

    const logOutUser = () => {
        dispatch(
            logOut()
        )
    }

    return (
        <ClearButton className={ props.className } onClick={logOutUser}>
            Cerrar sesión
        </ClearButton>
    )
}
