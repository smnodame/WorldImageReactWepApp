import React from 'react'

class Header extends React.Component {
   render() {
      return (
        <div>   
            <section className="hero is-primary is-medium">
                <div className="hero-head">
                    <header className="nav">
                    <div className="container">
                        <div className="nav-left">
                        <a className="nav-item">
                            <img src="images/bulma-type-white.png" alt="Logo"/>
                        </a>
                        </div>
                        <span className="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                        </span>
                        <div className="nav-right nav-menu">
                        <a className="nav-item is-active" href='/'>
                            Home
                        </a>
                        <a className="nav-item">
                            Examples
                        </a>
                        <a className="nav-item">
                            Documentation
                        </a>
                        <span className="nav-item">
                            <a className="button is-primary is-inverted" href='/signin'>
                                <span>Sign In</span>
                            </a>
                        </span>
                        </div>
                    </div>
                    </header>
                </div>
            </section>
        </div>
      )
   }
}

export default Header
