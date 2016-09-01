import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div>
        {'Dartmouth Cricket Club'}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
  }
);

const mapDispatchToProps =
  {
  };

// react-redux glue
export default connect(mapStateToProps, mapDispatchToProps)(Main);
