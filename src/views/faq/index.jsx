import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
          <Header title="FAQ" subtitle="Frequently Asked Questions page" />
          <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography color={colors.greenAccent[500]} variant="h5">
                      An Important Question
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nemo?</Typography>
              </AccordionDetails>
          </Accordion>
    </Box>
  );
};
export default FAQ;
