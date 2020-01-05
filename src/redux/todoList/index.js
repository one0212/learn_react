import React, { Component } from "react";
import { Input, Button, List } from "antd";

import store from "./store";
import "antd/dist/antd.css";


class ReduxTodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.storeChange)
  }
  changeInputValue = e => {
    // 建立action
    const action = {
      // action的名字用以調用
      type: 'changeInput',
      value: e.target.value
    }
    // 將action傳遞過去reducer
    store.dispatch(action)
  }

  storeChange = () =>{
    this.setState(store.getState())
  }

  addItem = () => {
    const action = {type: 'addItem'}
    store.dispatch(action)
  }

  deleteItem(index) {
    const action = {
      type: 'deleteItem',
      index
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: "250px", marginRight: "10px" }}
            onChange={this.changeInputValue}
            value={this.state.inputValue}
          />
          <Button 
          type="primary"
          onClick={this.addItem}
          >新增</Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => <List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }
}

export default ReduxTodoList;
