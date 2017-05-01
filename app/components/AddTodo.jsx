var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var todoText = this.refs.text.value;

    if (todoText.length > 0) {
      this.refs.text.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.text.focus();
    }


  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className='todo-form'>
          <input type="text" ref="text" placeholder="Enter todo item" />
          <button className="button expanded">Submit</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
