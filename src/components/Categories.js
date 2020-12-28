import '../styles/categories.css';
import { Component } from 'react';
import Category from '../components/Category';


class Categories extends Component {


    render() {
        const foodCategory = this.props.dummyData.filter(d => d.category=="food")
        const salaryCategory = this.props.dummyData.filter(d => d.category=="Salary")
        const entertainmentCategory = this.props.dummyData.filter(d => d.category=="Entertainment")
        let foodBalance = 0;
        for (let d of foodCategory) {
            foodBalance += d.amount
        }
        let salaryBalance = 0;
        for (let d of salaryCategory) {
            salaryBalance += d.amount
        }
        let entertainmentBalance = 0;
        for (let d of entertainmentCategory) {
            entertainmentBalance += d.amount
        }
        
       
        return (
            <div className="categories">
                <div className="Food">Food: ${foodBalance}</div>
                {foodCategory.map(d => <Category category={d} />)}
                <div className="Salary">Salary: ${salaryBalance}</div>
                {salaryCategory.map(d => <Category category={d} />)}
                <div className="Entertainment">Entertainment: ${entertainmentBalance}</div>
                {entertainmentCategory.map(d => <Category category={d} />)}
            </div>
        )
    }

}

export default Categories;
