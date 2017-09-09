import React from 'react'
import axios from 'axios'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
        
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            this.setState({ posts: res.data })
        })
    }
    render() {
      return (
        <div>
            <div className="mdl-demo mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <main className="mdl-layout__content">
                    <div className="mdl-layout__tab-panel is-active" id="overview">
                        {this.state.posts.map((post, i) =>
                            <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                                <header className="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
                                    <i className="material-icons">play_circle_filled</i>
                                </header>
                                <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
                                    <div className="mdl-card__supporting-text">
                                        <h4>{ post.title }</h4>
                                        { post.body }
                                    </div>
                                    <div className="mdl-card__actions">
                                        <a href={ '/post/' + post.title } className="mdl-button">Read our features</a>
                                    </div>
                                </div>
                                <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1">
                                    <i className="material-icons">more_vert</i>
                                </button>
                                <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn1">
                                    <li className="mdl-menu__item">Lorem</li>
                                    <li className="mdl-menu__item" disabled>Ipsum</li>
                                    <li className="mdl-menu__item">Dolor</li>
                                </ul>
                            </section>
                        )}
                        <div style={{ textAlign: 'center', marginTop: 30 }}>
                            <a className="button is-large">
                                <span>LOAD MORE</span>
                            </a>
                        </div>
                    </div>
                </main>
                </div>
            </div>
        </div>
      )
   }
}

export default Home
