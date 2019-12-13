import React from "react";
import PropTypes from "prop-types";

class Greeting extends React.Component {
  // 同外層定義
  // static propTypes = {
  //   name: PropTypes.string
  // };

  // static defaultProps = {
  //   name: "oneone"
  // };

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// 定義接收的類型, 預防傳值類型錯誤
Greeting.propTypes = {
  name: PropTypes.string
};
// 預設值, 當父層沒有傳值過來時預設使用
Greeting.defaultProps = {
  name: "oneone"
};

export default Greeting;
