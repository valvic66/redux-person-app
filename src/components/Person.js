import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Person extends Component {
    handleClick = id => {
        this.props.selectPerson(id);
    }

    renderDetail = () => {
        const { expanded } = this.props;
        const { age, job } = this.props.person;

        if(expanded) {
            return (
                <>
                    <p>Age {age}</p>
                    <p>Job {job}</p>
                </>
            );
        };
    }

    render() {
        const { id, name } = this.props.person;
        console.log(this.props);

        return (
            <>
                <button onClick={() => this.handleClick(id)}>{name}</button>
                {this.renderDetail()}
            </>
        );
    }
};

const mapStateToProps = (state, componentProps) => {
    const expanded = state.selectedPerson === componentProps.person.id;

    return {
        expanded
    };
}

export default connect(mapStateToProps, actions)(Person);