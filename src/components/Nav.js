import React from 'react';

function Nav() {
  return (
    <div id="nav" class="pure-u">
      <a href="#" class="nav-menu-button">Menu</a>

      <div class="nav-inner">
        <button class="primary-button pure-button">Compose</button>

        <div class="pure-menu">
          <ul class="pure-menu-list">
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Inbox <span class="email-count">(2)</span></a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Important</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Sent</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Drafts</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Trash</a></li>
            <li class="pure-menu-heading">Labels</li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link"><span class="email-label-personal"></span>Personal</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link"><span class="email-label-work"></span>Work</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link"><span class="email-label-travel"></span>Travel</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
