import Avatar from "./avatar/avatar.js";
import Statement from "./statement/statement.js";
import LoginScreen from "./login/index.js";
import Reply from "./replies/reply.js";

customElements.define("agent-avatar", Avatar);
customElements.define("agent-stmt", Statement);
customElements.define("node-replies", Reply);
customElements.define('login-screen', LoginScreen);
