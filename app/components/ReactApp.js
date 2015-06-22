/** @jsx React.DOM */

var React = require('react/addons');

var items = require('../data/items.js').items;
var Items = React.createFactory(require('./Items.js'));

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

        console.log(active_item);

        if (active_item) return active_item;
      },
      render: function () {
        var active_item = this.getActiveItem();

        return (
          <div className="portfolio-items">
            <select onChange={this.filterItems}>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
            </select>


            <a href="" onClick={this.resetItems}>reset</a>

            <Items updateState={this.updateState} items={this.state.filtered_items} />

            <div>
              <div>{active_item ? active_item.client : ''}</div>
              <div>{active_item ? active_item.name : ''}</div>
              <div>{active_item ? active_item.year : ''}</div>
            </div>
          </div>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;
