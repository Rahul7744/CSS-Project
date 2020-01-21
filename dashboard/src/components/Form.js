import React, {Component} from 'react';
import {connect} from "react-redux"
import {passData} from "./../Redux/Action"


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: "",
            cibil: "",
            loanamount: "",
            loantype: "",
            
       

        }
    }
        
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value

        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        let datas = {
            name:this.state.name,
            age:this.state.age,
            email:this.state.email,
            cibil:this.state.cibil,
            loanamount:this.state.loanamount,
            loantype:this.state.loantype
        }
        console.log("datas",datas)
        this.props.details(datas)
        this.props.history.push('/table')

        
    }


    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <div>
                    <div className="col" >
                        <input type="text" className="form-control" placeholder="First name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="age"  name="age" value={this.state.age} onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="cibil" name="cibil" value={this.state.cibil} onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="loanamount" name="loanamount" value={this.state.loanamount} onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                    <select class="form-control" name="loantype" value={this.state.loantype} onChange={this.handleChange}>
                        <option>home</option>
                        <option>personal</option>
                        <option>car</option>
                    </select> 
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

        details:(data) => dispatch(passData(data))
    }
    

}

export default connect(null,mapDispatchToProps)(Form)