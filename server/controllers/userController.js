


export const userSignUp=async (req,res)=>{

    try {
         
       console.log('hell');
       
       const {UserName,email,password}=req.body
       
       console.log(UserName,email,password);
       

    } catch (error) {
        
    }
}

export const userSignIn=async(req,res)=>{
    try {

       const  {email,password}=req.body

       console.log(email,password);
       console.log('hello');
       
        
    } catch (error) {
    
    }
}