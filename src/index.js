import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Hello name="Nikki"/>
    <Hello name="Michael"/>
    <Hello name="Andrew"/>
  </div>,
  document.getElementById('root')
)
