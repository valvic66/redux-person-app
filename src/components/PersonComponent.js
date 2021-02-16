import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from './Person';

class PersonComponent extends Component {
    render() {
        return this.props.persons.map(person => {
            return (
                <div key={person.id}>
                    <Person person={person} />
                </div>
            );
        });
    }
};

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
};

export default connect(mapStateToProps)(PersonComponent);