var Item = React.createClass({displayName: "Item",
  getInitialState: function(){
    return {
      editing: false,
      completed: false,
      done: false
    }
  },
  randomBetween: function(min, max){
    return (min + Math.ceil(Math.random()* max))
  },
  edit: function(){
    this.setState({
      completed: false,
      editing: true
    });
  },
  save : function(){
    this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);
    this.setState({
      editing: false
    });
  },
  remove: function(){
    this.props.onRemove(this.props.index);
  },
  handleCheck: function(){
    this.setState({
      completed: !this.state.completed,
      done: !this.state.completed,
      editing: false
    });
  },
  renderDisplay: function() {
    return (
      React.createElement("li", {className: "note note-display"}, 
        React.createElement("div", {className: "view"}, 
          React.createElement("input", {className: "toggle", type: "checkbox", onChange: this.handleCheck, defaultChecked: this.state.done}), 
          React.createElement("label", null, this.props.children), 
          React.createElement("button", {onClick: this.edit, className: "btn-edit"}), 
          React.createElement("button", {onClick: this.remove, className: "btn-destroy"})
        )
      )
    );
  },
  renderForm: function(){
    return (
      React.createElement("li", {className: "note editing"}, 
        React.createElement("div", {className: "view"}, 
          React.createElement("input", {className: "toggle", type: "checkbox", ref: "newCheckbox", defaultChecked: this.state.done, onChange: this.handleCheck}), 
          React.createElement("label", null, this.props.children), 
          React.createElement("button", {onClick: this.save, className: "btn-save"})
        ), 
        React.createElement("input", {className: "edit", type: "text", ref: "newText", defaultValue: this.props.children})
      )
    )
  },
  renderCompleted: function() {
    return (
      React.createElement("li", {className: "note note-completed completed"}, 
        React.createElement("input", {className: "toggle", type: "checkbox", ref: "newCheckbox", defaultChecked: this.state.done, onChange: this.handleCheck}), 
        React.createElement("label", null, this.props.children), 
          React.createElement("button", {onClick: this.edit, className: "btn-edit"}), 
          React.createElement("button", {onClick: this.remove, className: "btn-destroy"})
      )
    );
  },
  render: function(){
    if (this.state.completed){
      return this.renderCompleted();
    } else {
      if(this.state.editing){
        return this.renderForm()
      } else {
        return this.renderDisplay();
      }
    }
  }

});
