import {GlobalProvider} from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'

export const App = () => {
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <TransactionForm/>

      <h1>Hola</h1>
    </GlobalProvider>
  )
}

