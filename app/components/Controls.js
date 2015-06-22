/** @jsx React.DOM */

var React = require('react/addons');

var Controls = React.createClass({
  filterItems: function(event) {
    this.props.changeHandler(event);
  },
  resetItems: function() {
    this.props.resetHandler(event);
  },
  render: function () {
    return (
      <div>
        <select onChange={this.filterItems}>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </select>
        <a href="" onClick={this.resetItems}>reset</a>
      </div>
    )
  }
});

/* Module.exports instead of normal dom mounting */
module.exports = Controls;