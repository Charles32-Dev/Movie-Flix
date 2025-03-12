import { ButtonRed, ButtonWitch } from "./style"

function Button({ children, red, ...rest }) {


    return (
        <>
            {red ? (<ButtonRed {...rest}>{children}</ButtonRed>) : (<ButtonWitch {...rest}>{children}</ButtonWitch>)}



        </>
    )


}

export default Button