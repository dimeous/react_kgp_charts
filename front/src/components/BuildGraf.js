import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';
import {addTodo} from "../actions/actions_axios";

class  BuildGraf extends Component{

    getGrafData(){
            this.props.fetchData();
    }
    getNewState(){
        console.log(this.props.items);
    }
    render(){
        return (
            <div>
                <Button variant="contained" color="primary" onClick={()=>this.getGrafData()}>
                    Построить график
                </Button>
                <Button variant="contained" color="primary" onClick={()=>this.getNewState()}>
                      Построить график2
                </Button>
            </div>
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
