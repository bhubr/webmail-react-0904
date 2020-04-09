import React from 'react';



class EmailItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      read: false,
      fakeRead: true
    };
    this.mailRead = this.mailRead.bind(this);
  }

  // methode()
  mailRead() {
    // BAD if you are not in the constructor
    // this.state = { read: true };
    // GOOD
    this.setState({
      read: true
    })
  }

  render() {
    const divClassName = this.state.read
      ? "email-item pure-g"
      : "email-item email-item-unread pure-g";
    return (
      <div className={divClassName} onClick={this.mailRead}>
        <div className="pure-u">
          <img width="64" height="64" alt={`${this.props.name}&#x27;s avatar`} className="email-avatar" src={this.props.image} />
        </div>

        <div className="pure-u-3-4">
          <h5 className="email-name">{this.props.name}</h5>
          <h4 className="email-subject">{this.props.subject}</h4>
          <p className="email-desc">
            {this.props.content}
          </p>
        </div>
      </div>
    )

  }

}
export default EmailItem;

//Hello from Toronto

//Hey, I just wanted to check in with you from Toronto. I got here earlier today.

//"img/common/tilo-avatar.png"