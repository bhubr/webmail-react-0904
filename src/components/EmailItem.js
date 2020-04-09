import React from 'react';



function EmailItem(props) {
  return (
    <div className="email-item email-item-selected pure-g">
      <div className="pure-u">
        <img width="64" height="64" alt={`${props.name}&#x27;s avatar`} className="email-avatar" src={props.image} />
      </div>

      <div className="pure-u-3-4">
        <h5 className="email-name">{props.name}</h5>
        <h4 className="email-subject">{props.subject}</h4>
        <p className="email-desc">
          {props.content}
        </p>
      </div>
    </div>
  )
}

export default EmailItem;

//Hello from Toronto

//Hey, I just wanted to check in with you from Toronto. I got here earlier today.

//"img/common/tilo-avatar.png"