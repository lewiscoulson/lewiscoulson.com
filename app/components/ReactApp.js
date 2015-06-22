/** @jsx React.DOM */

var React = require('react/addons');

var items = require('../data/items.js').items;
var Items = React.createFactory(require('./Items.js'));
var ActiveItem = React.createFactory(require('./ActiveItem.js'));
var Controls = React.createFactory(require('./Controls.js'));

var ReactApp = React.createClass({
  getInitialState: function () {
    return { items: items, filtered_items: items };
  },
  filterItems: function(event) {
    event.preventDefault();

    var filtered = this.state.items.filter(function(item) {
      return item.year > event.target.value;
    });

    this.setState({
      filtered_items : filtered
    });
  },
  resetItems: function(event) {
    event.preventDefault();

    this.setState({
      filtered_items : this.state.items,
      active_item: null
    });
  },
  updateState: function(obj) {
    this.setState(obj);
  },
  getActiveItem: function() {
    var active_item = this.state.active_item;

    if (active_item) return active_item;
  },
  render: function () {
    var active_item = this.getActiveItem();

    return (
      <div className="portfolio-items">
        <Controls resetHandler={this.resetItems} changeHandler={this.filterItems} />
        <Items updateState={this.updateState} items={this.state.filtered_items} />
        <ActiveItem data={active_item} />
      </div>
    )
  }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;
