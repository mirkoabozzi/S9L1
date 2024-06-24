import { Component } from "react";

class ImageClassComponent extends Component {
  render() {
    return <img src={this.props.src} alt={this.props.alt} style={this.props.style} className={this.props.className} />;
  }
}
export default ImageClassComponent;
