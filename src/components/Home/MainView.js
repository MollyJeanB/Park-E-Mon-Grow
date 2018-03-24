import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';



const mapStateToProps = state => ({
    ...state.articleList,
    tags: state.home.tags,
    token: state.common.token
});

const mapDispatchToProps = dispatch => ({
    onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload })
});

const MainView = props => {
    return (
        <div className="col-md-9">
            <div>
                <div>Hey there! - MainView.js</div>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
