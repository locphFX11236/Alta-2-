import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDatas } from '../redux/ActionCreators';
import Render from './render';

const mapStateToProps = (state: any): any => {
    return { db: state.db };
};

const mapDispatchToProps = (dispatch: any): any => ({
    getDatas: () => dispatch( getDatas() )
});


class Main extends Component<any> {
    componentDidMount() { // Lifecycle được sử dụng cho component, cụ thể là thực hiện khi đã hiện ra
        this.props.getDatas()
    };

    render() {
        return (
            <div>
                <h1>TO DO LIST!!!</h1>
                <Render todos={ this.props.db } />
            </div>
        );
    };
}

export default connect( // Là của react-redux, để kết nối component với redux store
    mapStateToProps, // Định nghĩa dữ liệu sẽ lấy từ store sang component
    mapDispatchToProps // Định nghĩa các dispatch từ component sang store
)(Main); // Component được chọn để liên kết với redux