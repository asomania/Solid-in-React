import React from "react";
import LabelButton from "./LabelButton";
import ColorButton from "./ColorButton";
import IconButton from "./IconButton";

const CleanCodeISP = () => {
  return (
    <>
      <LabelButton label="Click Me" onClick={handleClick} />
      <IconButton label="Click Me" onClick={handleClick} icon="🚀" />
      <ColorButton label="Click Me" onClick={handleClick} color="red" />
    </>
  );
};
export default CleanCodeISP;
