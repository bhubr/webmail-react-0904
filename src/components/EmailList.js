import React from 'react';
import EmailItem from './EmailItem.js'

const emails = [
  {
    image: 'img/common/tilo-avatar.png',
    name: 'Tilo Mitra',
    subject: 'Hello from Toronto',
    content: 'Hey, I just wanted to check in with you from Toronto. I got here earlier today.'
  },
  {
    name: 'Carlos Simmons',
    image: 'https://randomuser.me/api/portraits/men/83.jpg',
    subject: 'Hello my friend',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  }
]


function EmailList() {
  return (
    <div id="list" className="pure-u-1">
      {emails.map(element => (
        <EmailItem
          key={element.content}
          image={element.image}
          name={element.name}
          subject={element.subject}
          content={element.content}
        />
      ))
      }


      <div className="email-item email-item-unread pure-g">
        <div className="pure-u">
          <img width="64" height="64" alt="Eric Ferraiuolo&#x27;s avatar" className="email-avatar" src="img/common/ericf-avatar.png" />
        </div>

        <div className="pure-u-3-4">
          <h5 className="email-name">Eric Ferraiuolo</h5>
          <h4 className="email-subject">Re: Pull Requests</h4>
          <p className="email-desc">
            Hey, I had some feedback for pull request #51. We should center the menu so it looks better on mobile.
            </p>
        </div>
      </div>

      <div className="email-item email-item-unread pure-g">
        <div className="pure-u">
          <img width="64" height="64" alt="YUI&#x27;s avatar" className="email-avatar" src="img/common/yui-avatar.png" />
        </div>

        <div className="pure-u-3-4">
          <h5 className="email-name">YUI Library</h5>
          <h4 className="email-subject">You have 5 bugs assigned to you</h4>
          <p className="email-desc">
            Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla.
            </p>
        </div>
      </div>

      <div className="email-item pure-g">
        <div className="pure-u">
          <img width="64" height="64" alt="Reid Burke&#x27;s avatar" className="email-avatar" src="img/common/reid-avatar.png" />
        </div>

        <div className="pure-u-3-4">
          <h5 className="email-name">Reid Burke</h5>
          <h4 className="email-subject">Re: Design Language</h4>
          <p className="email-desc">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa.
            </p>
        </div>
      </div>

      <div className="email-item pure-g">
        <div className="pure-u">
          <img width="64" height="64" alt="Andrew Wooldridge&#x27;s avatar" className="email-avatar" src="img/common/andrew-avatar.png" />
        </div>

        <div className="pure-u-3-4">
          <h5 className="email-name">Andrew Wooldridge</h5>
          <h4 className="email-subject">YUI Blog Updates?</h4>
          <p className="email-desc">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
        </div>
      </div>

      <div className="email-item pure-g">
        <div className="pure-u">
          <img width="64" height="64" alt="Yahoo! Finance&#x27;s Avatar" className="email-avatar" src="img/common/yfinance-avatar.png" />
        </div>

        <div className="pure-u-3-4">
          <h5 className="email-name">Yahoo! Finance</h5>
          <h4 className="email-subject">How to protect your finances from winter storms</h4>
          <p className="email-desc">
            Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris.
            </p>
        </div>
      </div>

      <div className="email-item pure-g">
        <div className="pure-u">
          <img width="64" height="64" alt="Yahoo! News&#x27; avatar" className="email-avatar" src="img/common/ynews-avatar.png" />
        </div>

        <div className="pure-u-3-4">
          <h5 className="email-name">Yahoo! News</h5>
          <h4 className="email-subject">Summary for April 3rd, 2012</h4>
          <p className="email-desc">
            We found 10 news articles that you may like.
            </p>
        </div>
      </div>
    </div>
  )
}

export default EmailList;