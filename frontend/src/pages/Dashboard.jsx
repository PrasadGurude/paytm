import { useEffect ,useState } from "react"
import { Appbar } from "../components/Appbar.jsx"
import { Balance } from "../components/Balance.jsx"
import { Users } from "../components/Users.jsx"
import axios from "axios"

export const Dashboard = () => {

    const [balance, setBalance] = useState(0)

    useEffect(() => {
        async function fetchData(){
            const response =await axios.get("http://localhost:3000/api/v1/account/balance")
            setBalance(response.data.balance)
        }      
    }, [balance])
    

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}