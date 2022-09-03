import React from 'react'
import {Age} from './Age'

export class Welcome extends React.Component {
    render() {
        return (
            <>
                <p>Welcome, {this.props.name}!</p>
                {/*{this.props.age >= 18 && <Age age={this.props.age}/>}*/}
                {this.props.age > 18 && this.props.age < 65 && (
                  <p>
                       <Age age={this.props.age} />
                  </p>
                 )}
            </>
        )
    }
}

Welcome.defaultProps = {
    name: <strong>Flavia</strong>,
  };
