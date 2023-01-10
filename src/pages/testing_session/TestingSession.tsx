import React from 'react';
interface ComponentProperties{
    [key:string]: any;
}

export default class TestingSession extends React.Component {
  constructor(props: ComponentProperties) {
    super(props);
    console.log(this.props);
    }

  render() {
    return (
      <div></div>)
    }
}