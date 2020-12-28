import '../styles/transaction.css';
import { Component } from 'react';
import axios from 'axios';

class Transaction extends Component {

    remove = () => {
        console.log(this.props.transaction._id)
        this.props.remove(this.props.transaction._id)
    }

    render() {
        return (
            <div className="list-type1">
                 <div id="popup1" class="overlay">
                    <div class="popup">
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                            Thank you, your transaction was saved
		                </div>
                    </div>
                </div>

                <ol>
                    <li>
                        <a>


                            <p><span className="amount">{`
                            Amount: ${this.props.transaction.amount}`}</span>


                                <span className="vendor">{`
                            Vendor: ${this.props.transaction.vendor}`}</span>


                                <span className="category">{`
                            Category: ${this.props.transaction.category}`}</span>
                               <span className="trash"><i id="trash"onClick={this.remove} className="fas fa-trash"></i></span></p>


                        </a>
                    </li>
                </ol>
            </div>
        )
    }


}

export default Transaction;
