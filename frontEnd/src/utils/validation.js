function validation(name, email, password1, password2, isSignIn) {


    const userNameReg = /^(?=.*[a-zA-Z])(?=.{4,}).*$/
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passwordReg = /^[a-zA-Z0-9]{6}$/

    if (isSignIn) {

        if (!userNameReg.test(name)) return "Name must contain at least 4 letters "
        if (!emailReg.test(email)) return "enter a valid email"
        if (!passwordReg.test(password1)) return "password must contain at least 6 characters "


       return null 
    } else {
        if(! password1===password2) return "confirm password and password do not match"
        if (!userNameReg.test(name)) return "Name must contain at least 4 letters "
        if (! emailReg.test(email)) return "enter a valid email"
        if (!passwordReg.test(password1)) return "password must contain at least 6 characters "
      
        return null

    }

}

export default validation