import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        <i className="bx bx-menu"></i>
      </div>
      <div className="bottom-icons">
        <ul>
          <li>
            <i className="bx bx-help-circle"></i>
            <span>Help</span>
          </li>
          <li>
            <i className="bx bx-history"></i>
            <span>Activity</span>
          </li>
          <li>
            <i className="bx bx-cog"></i>
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
