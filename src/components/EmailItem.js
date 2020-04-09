import React from 'react';



function EmailItem(props) {
  return (
    <div class="email-item email-item-selected pure-g">
      <div class="pure-u">
        <img width="64" height="64" alt={`${props.name}&#x27;s avatar`} class="email-avatar" src={props.image} />
      </div>

      <div class="pure-u-3-4">
        <h5 class="email-name">{props.name}</h5>
        <h4 class="email-subject">{props.subject}</h4>
        <p class="email-desc">
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