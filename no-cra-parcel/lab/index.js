import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render(){
        return(
            <div>
                <h1 style={{ textAlign: "center" }}>Hello World~</h1> 
                <br />
                <section>
                    <Wrapper />
                </section>
            </div>
        )
    }
}

class Wrapper extends React.Component {
    render(){
        return(
            <div className='wrapper'>
                <Icon iconClass="fa fa-instagram" iconName="Instagram" />
                <Icon iconClass="fa fa-facebook-f" iconName="Facebook" />
                <Icon iconClass="fa fa-twitter" iconName="Twitter" />
                <Icon iconClass="fa fa-linkedin" iconName="LinkedIn" />
                <Icon iconClass="fa fa-youtube" iconName="YouTube" />
                <Icon iconClass="fa fa-github" iconName="Github" />
            </div>
        )
    }
}

class Icon extends React.Component {
    render(){
        return(
            <div className="button">
                <div className="icon">
                    <i className={this.props.iconClass} ></i>
                </div>
                <span>{this.props.iconName}</span>
            </div>
        )
    }
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)