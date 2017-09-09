import React from 'react'
import {signIn} from '../../state/actions.js'
import {store} from '../../state'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.onLoginClick = this.onLoginClick.bind(this)
    }
    componentDidMount() {
    }
    onLoginClick() {
        store.dispatch(signIn('testuser', 'secret'))
        /*store.subscribe(() => { 
            console.log(store.getState())
        })*/
        console.log(store.getState())
    }
    render() {
      return (
        <div style={{ width: 600, margin: '0 auto', marginTop: 30 }}>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email"/>
                    <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                    <i className="fa fa-check"></i>
                    </span>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input className="input" type="password" placeholder="Password"/>
                    <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                    </span>
                </p>
                </div>
                <div className="field">
                <p className="control">
                    <a className="button is-success" onClick={this.onLoginClick}>
                        Login
                    </a>
                </p>
            </div>
        </div>
      )
   }
}

class Register extends React.Component { 
    render() {
        return (
        <div>
            
        </div>
        )
    }
}

export {SignIn, Register}
