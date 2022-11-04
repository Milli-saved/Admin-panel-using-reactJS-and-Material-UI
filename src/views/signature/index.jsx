import { useRef } from "react";
import { Box } from "@mui/material";
import SignaturePad from "react-signature-canvas";

const Signature = () => {
  let signPad = useRef({});

  return (
    <Box width="200px" height="200px" alignItems="center" justifyContent="center">
      <SignaturePad ref={signPad} />
    </Box>
  );
};

export default Signature;
