
import {useGlobalState} from '../context/GlobalState'

export const Balance = () => {

    const data = useContext()
  return (
    <div>
        <h1>Balance</h1>
        <div>
            {JSON.stringify(data)}
        </div>
        
    </div>
  )
}
