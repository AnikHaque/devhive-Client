** you need to import the component <DeveloperChat></DeveloperChat> to start chatting
** you need to pass the developer id to the component <DeveloperChat developerId={developerId}></DeveloperChat>

\*\*\* example

```javascript
import React from "react";
import DeveloperChat from "../../Components/DeveloperChat/DeveloperChat";

const chatWithDeveloper = () => {
  const developerId = "6442471d8252442abfe8c4b7";
  return (
    <div>
      <DeveloperChat developerId={developerId}></DeveloperChat>
    </div>
  );
};

export default chatWithDeveloper;
```
