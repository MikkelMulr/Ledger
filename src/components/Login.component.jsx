import React, {useState, useEffect} from 'react';
import DisplayContainer from './DisplayContainer.component';
import {connect} from 'react-redux';
import {setView, setVerifyUser} from '../redux/actions/index';

function Login(props) {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const testCredentials = {username: 'nya', password: 'peepoo'};

  const verifyUser = (un, pw) => {
    if (un === testCredentials.username) {
      if (pw === testCredentials.password) {
        props.setVerifyUser(true);
        props.setView('home')
      } else {
        console.log('peepeepoopoo');
      }
    }
  }

  useEffect(() => {
    setpassword('');
    setusername('');
  }, []);
  
  return (
    <div className="Login">
      <DisplayContainer logo={true} title="Login">
        <section className="Login--main">
          <form>
            <input type="text" name="username" placeholder="username" onChange={(e) => setusername(e.target.value)}/>
            <input type="password" name="password" placeholder="password" onChange={(e) => setpassword(e.target.value)}/>
          </form>
        </section>
        <button onClick={() => verifyUser(username, password)}>Login</button>
      </DisplayContainer>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setView: (view) => dispatch(setView(view)),
    setVerifyUser: (verified) => dispatch(setVerifyUser(verified))
  };
};

const mapStateToProps = (state) => {
  return {
    view: state.view,
    verified: state.verified
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);