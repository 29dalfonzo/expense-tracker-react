import './App.css';
import {Balance} from './components/Balance';
import {Header} from './components/Header';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionForm} from './components/TransactionForm';
import {Transactions} from './components/Transactions';
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <GlobalProvider className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transactions />
        <TransactionForm />
      </div>
    </GlobalProvider>
  );
}

export default App;
