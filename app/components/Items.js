/** @jsx React.DOM */

var React = require('react/addons');

var Items = React.createClass({

      componentDidMount: function () {
        console.log(this.props.items);

      },
      update: function(event) {
        var data = $(event.target).closest('li').attr('data');

        this.props.updateState({
          active_item: JSON.parse(data)
        });
      },
      render: function () {
        var items = this.props.items;
        var self = this;

        return (
          <ul>
            {items.map(function(item) {
              return <li key={item.id} data={JSON.stringify(item)} onClick={self.update}>
                {item.client}
                {item.name}
                {item.year}
              </li>;
            })}
          </ul>
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = Items;