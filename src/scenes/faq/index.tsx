import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How is the registration form implemented?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The form is powered by Formik using Yup for validation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How is the calendar in this app implemented?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>It's made using Full Calendar.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do you make the table?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>It's made using MUI's Data Grid.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What about all those beautiful charts?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            They are made using Nivo which is an abstraction above D3.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
