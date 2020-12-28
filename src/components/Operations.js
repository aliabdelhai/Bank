import '../styles/operations.css';
import { Component } from 'react';

class Operations extends Component {

    constructor() {
        super()
        this.state = {
            amount: "",
            vendor: "",
            category: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    deposit = () => {
        this.props.deposit(parseInt(this.state.amount), this.state.vendor, this.state.category)

    }

    withdraw = () => {
        this.props.withdraw(parseInt(this.state.amount) * -1, this.state.vendor, this.state.category)
    }

    render() {
        return (
            <div>
               

                <div id="popup1" class="overlay">
                    <div class="popup">
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                            Thank you, your transaction was saved
		                </div>
                    </div>
                </div>
                <form>
                    <div id="amount-input">
                        <input type="text" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.handleChange} />
                    </div>
                    <div id="vendor-input">
                        <input type="text" placeholder="Vendor" name="vendor" value={this.state.vendor} onChange={this.handleChange} />
                    </div>
                    <div id="category-input">
                        <input type="text" placeholder="Category" name="category" value={this.state.category} onChange={this.handleChange} />
                    </div>
                    <div className="buttons">
                    <a class="button" href="#popup1"><button type="button" className="deposit" onClick={this.deposit}>Deposit</button></a>
                    <a class="button" href="#popup1"><button type="button" className="withdraw" onClick={this.withdraw}>Withdraw</button></a>
                    </div>
                </form>



            </div>


        )
    }


}

export default Operations;
