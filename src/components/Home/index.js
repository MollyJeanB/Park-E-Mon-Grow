import MainView from './MainView';
import React from 'react';
import { connect } from 'react-redux';
import {
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
    ...state.home,
    appName: state.common.appName,
    token: state.common.token
});

const mapDispatchToProps = dispatch => ({
    onLoad: (pager, payload) =>
        dispatch({ type: HOME_PAGE_LOADED, pager, payload }),
    onUnload: () =>
        dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
    componentWillMount() {

        //this.props.onLoad();
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        return (
            <div className="home-page">



                <div className="container page">
                    <div className="row">
                        <MainView />

                        <div className="col-md-3">
                            <div className="sidebar">

                                <p>Popular Tags</p>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);