import React, {Component} from 'react'

export default class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.myImage} />
        <caption>Me and the boys coding</caption>
      </div>
    )
  }
}