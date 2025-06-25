import { Button } from "@/components/ui/button"
import auth from "./services/auth"
function App() {
 async function onClickHandler(){
    try {
      const userInfo = await auth.registerUser({"email":"userone.email@domain.com","password":"tesaedt@123","role":"ADMIN","username":"doejfaohn"})
      console.log(userInfo);
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button onClick={onClickHandler}>Click me</Button>
    </div>
  )
}

export default App
