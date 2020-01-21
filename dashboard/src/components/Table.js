import React, { Component } from "react";
import { connect } from "react-redux";


class Table extends Component {

    render() {
        console.log("table", this.props.add_details.input_data)
        let data2 = this.props.add_details.input_data.store_data.map((data) => {
            return (
                <tbody>
                <tr>
                <th scope="row">{data.name}</th>
                    <td>{data.age}</td>
                    <td>{data.email}</td>
                    <td>{data.cibil}</td>
                    <td>{data.loanamount}</td>
                    <td>{data.loantype}</td>
                </tr>
            </tbody>
            )
        })



        return (
            <React.Fragment>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">name</th>
                            <th scope="col">age</th>
                            <th scope="col">email</th>
                            <th scope="col">cibil</th>
                            <th scope="col">loanamount</th>
                            <th scope="col">loantype</th>
                        </tr>
                    </thead>
                  {data2}
                </table>

            </React.Fragment>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        add_details: state
    }

}

export default connect(mapStateToProps)(Table)