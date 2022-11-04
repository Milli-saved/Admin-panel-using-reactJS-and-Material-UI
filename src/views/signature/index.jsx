import { useRef } from "react";
import { Box, Button } from "@mui/material";
import SignatureCanvas from "react-signature-canvas";

const Signature = () => {
  let signPad = useRef({});
  let data = "";

  const clear = () => {
    signPad.current.clear();
  };
  const save = () => {
    data = signPad.current.toDataURL();
  };
  const show = () => {
    console.log(data);
    signPad.current.fromDataURL(data);
  };
  return (
    <Box m="40px">
      <SignatureCanvas
        penColor="green"
        backgroundColor="orange"
        canvasProps={{ width: "200px", height: "80px" }}
        ref={signPad}
      />
      <Button onClick={clear}>clear</Button>
      <Button onClick={save}>Save</Button>
      <Button onClick={show}>Show</Button>
    </Box>
  );
};

export default Signature;
