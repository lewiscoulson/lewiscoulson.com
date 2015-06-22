/** @jsx React.DOM */

var React = require('react/addons');

var ActiveItem = React.createClass({
  render: function () {
    return (
      <div>
        <div>{this.props.data ? this.props.data.client : ''}</div>
        <div>{this.props.data ? this.props.data.name : ''}</div>
        <div>{this.props.data ? this.props.data.year : ''}</div>
      </div>
    )
  }
});

/* Module.exports instead of normal dom mounting */
module.exports = ActiveItem;