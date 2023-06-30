import { Button } from "antd";
import plugin from "js-plugin";

plugin.register({
  name: "plugin1",
  menu: {
    processMenuItems(items) {
      items.push("Blocked users");
    },
  },
  profile: {
    processMeta(meta) {
      meta.fields.push({
        key: "blocked",
        label: "Blocked",
        viewWidget: "switch",
      });
    },
  },
});
