import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import {addTodo} from "../actions/actions_axios";

class  BuildGraf extends Component{

    getGrafData(){
            this.props.fetchData();
    }

    render(){
        return (
                <Button variant="contained" color="primary" onClick={()=>this.getGrafData()}>
                    Построить график
                </Button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.todos,
        hasErrored: state.error,
        isLoading: state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(addTodo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildGraf);
