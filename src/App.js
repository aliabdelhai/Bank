import './App.css';
import { Component } from 'react';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import Categories from './components/Categories';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios';

class App extends Component {

  constructor() {
    super()
    this.state = {
      dummyData: [],
      balance: 0,
    }
  }


  async getTransactions() {
    return axios.get('http://localhost:4200/transactions')
  }

  async saveTransaction(transaction) {
    const response = await axios.post('http://localhost:4200/transaction', transaction)
    const tempArr = [...this.state.dummyData]
    tempArr.push(response.data)
    this.setState({
      dummyData: tempArr}, this.getBalance)

  }

  async removeTransactionFromDB(id) {
    await axios.delete(`http://localhost:4200/transaction/${id}`)
    const index = this.state.dummyData.findIndex(d => d._id === id)
    if (index !== -1) this.props.dummyData.splice(index, 1);
  }


  async componentDidMount() {
    const response = await this.getTransactions()
    this.setState({ dummyData: response.data })
    this.getBalance()
  }

  remove = (id) => {
    let tempDummyArr = [...this.state.dummyData]
    tempDummyArr.splice(tempDummyArr.findIndex(d => id === d._id), 1)
    this.setState({
      dummyData: tempDummyArr
    }, this.getBalance)
    this.removeTransactionFromDB(id)
  }

  deposit = (amount, vendor, category) => {
    const transaction = {amount, vendor, category}
    this.saveTransaction(transaction)
  }

  withdraw = (amount, vendor, category) => {
    const transaction = {amount, vendor, category}
    this.saveTransaction(transaction)
  }

  getBalance = () => {
    let newBalance = 0;
    for (let d of this.state.dummyData) {
      newBalance += d.amount
    }
    this.setState({
      balance: newBalance
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="nav-wrapper">
            <div className="left-side">
              <div className="nav-link-wrapper">
                <Link to="/">home</Link>
              </div>
              <div className="nav-link-wrapper">
                <Link to="/transactions">Transactions</Link>
              </div>
              <div className="nav-link-wrapper">
                <Link to="/categories">categories</Link>
              </div>
              <div className="nav-link-wrapper">
                <div className='news'>explore</div>
              </div>
              <div className="nav-link-wrapper">
                <div className='games'>{`Balance: $${this.state.balance}`}</div>
              </div>
            </div>
            <div className="right-side">
              <div className="brand">
                login
            </div>
            </div>
          </div>
        </div>
        <Route path="/" exact render={() => <Operations deposit={this.deposit} withdraw={this.withdraw} />} />
        <Route path="/transactions" exact render={() => <Transactions dummyData={this.state.dummyData} remove={this.remove} />} />
        <Route path="/categories" exact render={() => <Categories dummyData={this.state.dummyData}/>} />


      </Router>
    );
  }


}

export default App;
