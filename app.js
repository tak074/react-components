// TODO
var App = (props) => (
  <div>
    <h2>Hello, {props.name}</h2>
    <h3>Items to order: </h3>
    <TodoList todos = {['kale', 'cucumbers', 'kiwi']} />
  </div>

);

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);

ReactDOM.render(<App name = 'TK' />, document.getElementById('app'));



