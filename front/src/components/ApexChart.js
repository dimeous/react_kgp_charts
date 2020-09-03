import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import Chart from 'react-apexcharts'
import Paper from "@material-ui/core/Paper";
import { itemsFetchData } from '../actions/items';
const data = [
    [1327359600000, 30.95],
    [1327446000000, 31.34],
    [1327532400000, 31.18],
    [1327618800000, 31.05],
    [1327878000000, 31.0],
];

class KHPChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    id: "basic-bar",
                    zoom: {
                        enabled: true
                    }
                },
                xaxis: {
                    type: "datetime",
                    tickAmount: 6
                }
            },
            series: [
                {
                    name: "series-1",
                    data: data
                }
            ]
        };
    }


    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
          <Paper>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                  />
            </Paper>
        );
    }
}


KHPChart.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(KHPChart);
