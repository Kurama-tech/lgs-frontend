// import { Component } from 'react';

// // Flag to check if the Kommunicate script is already loaded

// let isKommunicateLoaded = false;

// class Chat extends Component {

//   componentDidMount() {

//     // Check if the script is already loaded

//     if (!isKommunicateLoaded) {

//       (function(d, m) {

//         var kommunicateSettings = {

//           appId: "3f2ef8d211d505f13dc1a651639608fd",

//           popupWidget: true,

//           automaticChatOpenOnNavigation: true

//         };

//         var s = document.createElement("script");

//         s.type = "text/javascript";

//         s.async = true;

//         s.src = "https://widget.kommunicate.io/v2/kommunicate.app";

//         var h = document.getElementsByTagName("head")[0];

//         h.appendChild(s);

//         window.kommunicate = m;

//         m._globals = kommunicateSettings;

//         // Update the flag to indicate that the script is loaded

//         isKommunicateLoaded = true;

//       })(document, window.kommunicate || {});

//     }

//   }




//   render() {

//     return

//     //  (

//     //   <p>hi</p>

//     // );

//   }

// }




// export default Chat;
import React from 'react';

const Chat = () => {
  return (
    <df-messenger
      intent="WELCOME"
      chat-title="LGSAGENT"
      agent-id="f7965425-6216-484b-bb02-f97a1e371333"
      language-code="en"
    ></df-messenger>
  );
};

export default Chat;
