import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            exercisedThisDay: "",
            notes: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        var selectedDate = this.props.value.toString()
        localStorage.setItem(selectedDate, JSON.stringify(this.state))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        Date: {this.props.value.toString()}<br />
                    </div>
                    <div className="form-group">
                        Notes:<br />
                        <textarea
                            type="text"
                            name="notes"
                            placeholder="Any notes about your exercises this day"
                            value={this.state.notes}
                            onChange={this.handleChange}
                        /></div><br />
                    <div className="form-group">
                        Exercised this day?<br />
                        <label>
                            <input
                                type="radio"
                                name="exercisedThisDay"
                                value="yes"
                                checked={this.state.exercisedThisDay === "yes"}
                                onChange={this.handleChange}
                            /> Yes, I did!
                </label><br />
                        <label>
                            <input
                                type="radio"
                                name="exercisedThisDay"
                                value="no"
                                checked={this.state.exercisedThisDay === "no"}
                                onChange={this.handleChange}
                            /> No, I did not
                </label>
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-danger"
                    />
                </form>
            </div>
        );
    }
}

export default Form;