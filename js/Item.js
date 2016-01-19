var Item = React.createClass({
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
      <li className="note note-display" >
        <div className="view">
          <input className="toggle" type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.done}/>
          <label>{this.props.children}</label>
          <button onClick={this.edit} className="btn-edit" />
          <button onClick={this.remove} className="btn-destroy" />
        </div>
      </li>
    );
  },
  renderForm: function(){
    return (
      <li className="note editing">
        <div className="view">
          <input className="toggle" type="checkbox" ref="newCheckbox" defaultChecked={this.state.done} onChange={this.handleCheck}/>
          <label>{this.props.children}</label>
          <button onClick={this.save} className="btn-save" />
        </div>
        <input className="edit" type="text" ref="newText" defaultValue={this.props.children} />
      </li>
    )
  },
  renderCompleted: function() {
    return (
      <li className="note note-completed completed" >
        <input className="toggle" type="checkbox" ref="newCheckbox" defaultChecked={this.state.done} onChange={this.handleCheck}/>
        <label>{this.props.children}</label>
          <button onClick={this.edit} className="btn-edit" />
          <button onClick={this.remove} className="btn-destroy" />
      </li>
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
