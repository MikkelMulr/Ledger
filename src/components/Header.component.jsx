import React, {useState, useEffect} from 'react';
import logo from '../assets/img/logo.png';
import {connect} from 'react-redux';
import {setView} from '../redux/actions/index';

function Header(props) {
  const [btn, setbtn] = useState('Log in');

  const handleLoginClick = () => {
    if (props.view === 'home') {
      props.setView('login');
    } else {
      props.setView('login');
    }
  }

  useEffect(() => {
    props.view === 'home' ? setbtn('Log out') : setbtn('Log in');
  }, [props.view])

  return (
    <div className="Header">
      <div className="Header--logo">
        <img src={logo} alt="Ledger logo" onClick={() => props.setView('home')}/>
      </div>
      <nav className="Header--nav">
        <a href="#" onClick={() => props.setView('about')}>About</a>
        <a href="#" onClick={handleLoginClick}>{btn}</a>
      </nav>
    </div>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
