import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as queryActions from '../actions/queryActions';

class Search extends Component<{ queryActions: any; query: string }, { query: string }> {
    search(query: string) {
        this.props.queryActions.setQuery(this.state.query);
    }

    render() {
        return (
            <div>
                <form name="search" onSubmit={(e) => this.search(this.state.query)}>
                    <input type="text" value={this.state.query} defaultValue={this.props.query}></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    console.log("HI")

    return {
        queryActions: bindActionCreators(queryActions, dispatch)
    }
}

function mapStateToProps(props: { query: string }) {
    console.log("HIII")

    return {
        query: props.query
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
