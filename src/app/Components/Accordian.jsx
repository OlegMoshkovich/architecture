import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion({title, content, expand=true, width=350}) {
  const [expanded, setExpanded] = React.useState(expand);
  const handleChange = () => {
    setExpanded(!expanded);
  };
  return (
      <Accordion elevation={0} expanded={expanded} onChange={handleChange} sx={{width: width, border:'1px solid lightgrey'}} size='small'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ width: width, borderRadius: 20, height:10}}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails sx={{borderRadius:0}}>
          <Typography>
          {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
  );
}
