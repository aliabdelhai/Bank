import '../styles/category.css';
import { Component } from 'react';

class Category extends Component {

   
    render() {
        return (
            <div className="list-type1">
                 

                <ol>
                    <li>
                        <a>


                            <p><span className="amount">{`
                            Amount: ${this.props.category.amount}`}</span>


                                <span className="vendor">{`
                            Vendor: ${this.props.category.vendor}`}</span>


                                <span className="category">{`
                            Category: ${this.props.category.category}`}</span>
                               <span className="trash"></span></p>


                        </a>
                    </li>
                </ol>
            </div>
        )
    }


}

export default Category;
