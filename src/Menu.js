import React from "react";
import plugin from "js-plugin";

export default function Menu() {
  const menuItems = ["Profile", "Account", "Security"];
  plugin.invoke("menu.processMenuItems", menuItems);
  return (
    <div>
      <h3>Personal Settings</h3>
      <ul>
        {menuItems.map(mi => (
          <li key={mi}>{mi}</li>
        ))}
      </ul>
    </div>
  );
}
