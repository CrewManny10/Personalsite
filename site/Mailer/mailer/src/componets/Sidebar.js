import React from "react";

const Sidebar = () => {
    return (
        <aside>
            <ul>
                <li><a href="#">Inbox</a></li>
                <li><a href="#">Sent</a></li>
                <li><a href="#">Drafts</a></li>
                <li><a href="#">Favorites</a></li>
                <li><a href="#">Spam</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;