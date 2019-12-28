import React, { Component } from "react";
import { Input, Button, List } from "antd";

import "antd/dist/antd.css";

const data = ["早上10點上班, 搭捷運到松山", "到公司前先買早餐", "下午4點下班"];

class ReduxTodoList extends Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder="write something"
            style={{ width: "250px", marginRight: "10px" }}
          />
          <Button type="primary">新增</Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }
}

export default ReduxTodoList;
