import React, {useEffect} from 'react';
import Header from './components/Header.component';
import MainContainer from './components/MainContainer.component';
import './styles/app.scss';

import {connect} from 'react-redux';
import {setView} from './redux/actions/index';

function App(props) {

  useEffect(() => {
  }, [props.view])

  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    setView: (view) => dispatch(setView(view))
  };
};

const mapStateToProps = (state) => {
  return {
    view: state.view
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

