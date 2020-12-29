import '../styles/transactions.css';
import { Component } from 'react';
import Transaction from '../components/Transaction';


class Transactions extends Component {
    remove = (id) => {
        this.props.remove(id)
    }
    
    render() {

        return (
            <div>
                {this.props.dummyData.map(d => <Transaction key={d.vendor} transaction={d} remove={this.remove} dummyData={this.props.dummyData}/>)}
            </div>
        )
    }
}

export default Transactions;
