import React from 'react';
import { Modal, Box, Typography, IconButton, TextField, ToggleButtonGroup, ToggleButton, Stack, Button } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import Logo from "./logo2.svg";
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

export default function DayNoteModal() {
  const [open, setOpen] = React.useState(false);
  const [mood, setMood] = React.useState('');
  const [marketCondition, setMarketCondition] = React.useState('');
  const [marketVolatility, setMarketVolatility] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMoodChange = (event, newMood) => {
    setMood(newMood);
  };

  const handleMarketConditionChange = (event, newCondition) => {
    setMarketCondition(newCondition);
  };

  const handleMarketVolatilityChange = (event, newVolatility) => {
    setMarketVolatility(newVolatility);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'rgb(31 41 55)',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    color: 'white'
  };

  const style1 = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "align-center",
  }

  const style2 = {
    color: "white",
  }

  const stylebtn = {
    backgroundColor: "#fb5858",
    borderRadius: "50%"
  }

  return (
    <div>
      <Button onClick={handleOpen} sx={stylebtn}><img src={Logo} alt="" /></Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
        <Box sx={style1}>
            <Typography
            id="trade-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "white" }}
            >
            New Trade
            </Typography>
            <Button onClick={handleClose} sx={style2}>X</Button>
          </Box>
<div className='flex gap-x-20'>
        <div>
          <label htmlFor="mood" className="text-white ml-2">Mood</label>
          <Stack direction="row" spacing={2} mb={2} sx={{backgroundColor:"#3C3F4E", borderRadius:"30px", paddingX:"30px"}}>
            <ToggleButtonGroup
              value={mood}
              exclusive
              onChange={handleMoodChange}
            >
              <ToggleButton value="sad" aria-label="sad">
                <SentimentVeryDissatisfiedIcon className='text-white'/>
              </ToggleButton>
              <ToggleButton value="neutral" aria-label="neutral">
                <SentimentSatisfiedIcon className='text-white'/>
              </ToggleButton>
              <ToggleButton value="happy" aria-label="happy">
                <SentimentVerySatisfiedIcon className='text-white'/>
              </ToggleButton>
            </ToggleButtonGroup>

            {/* Include other selectors similar to the mood selector for 'Market Condition' and 'Market Volatility' */}
          </Stack>
          </div>


          <div>
          <label htmlFor="mood" className="text-white ml-2">Mkt condition</label>
          <Stack direction="row" spacing={2} mb={2} sx={{backgroundColor:"#3C3F4E", borderRadius:"30px", paddingX:"30px"}}>
            <ToggleButtonGroup
              value={mood}
              exclusive
              onChange={handleMoodChange}
            >
              <ToggleButton value="sad" aria-label="sad">
                <SentimentVeryDissatisfiedIcon className='text-white'/>
              </ToggleButton>
              <ToggleButton value="neutral" aria-label="neutral">
                <SentimentSatisfiedIcon className='text-white'/>
              </ToggleButton>
              <ToggleButton value="happy" aria-label="happy">
                <SentimentVerySatisfiedIcon className='text-white'/>
              </ToggleButton>
            </ToggleButtonGroup>

            {/* Include other selectors similar to the mood selector for 'Market Condition' and 'Market Volatility' */}
          </Stack>
          </div>

          <div>
          <label htmlFor="mood" className="text-white ml-2">Mkt Volatility</label>
          <Stack direction="row" spacing={2} mb={2} sx={{backgroundColor:"#3C3F4E", borderRadius:"30px", paddingX:"30px"}}>
            <ToggleButtonGroup
              value={mood}
              exclusive
              onChange={handleMoodChange}
            >
              <ToggleButton value="sad" aria-label="sad">
                <SentimentVeryDissatisfiedIcon className='text-white'/>
              </ToggleButton>
              <ToggleButton value="neutral" aria-label="neutral">
                <SentimentSatisfiedIcon className='text-white'/>
              </ToggleButton>
              <ToggleButton value="happy" aria-label="happy">
                <SentimentVerySatisfiedIcon className='text-white'/>
              </ToggleButton>
            </ToggleButtonGroup>

            {/* Include other selectors similar to the mood selector for 'Market Condition' and 'Market Volatility' */}
          </Stack>
          </div>
          </div>

        <div className='flex justify-evenly align-center gap-x-4'>
            <div className="w-[50%]"><label htmlFor="date">Date</label>
            <TextField
              type="date"
              defaultValue="2024-03-28"
              sx={{ mb: 2, width: '100%' , 
              input: { color: "white" , borderRadius:"30px", backgroundColor:"#3C3F4E", paddingX:"7px" },
            }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            </div>
            <div className="w-[50%]"><label htmlFor="summary">Summary</label>
            <TextField
              multiline
              rows={2}
              placeholder="Summary"
              sx={{ mb: 2, width: '100%',}}
              InputProps={{ style: { color: "white" } }}
              style={{borderRadius:"30px", backgroundColor:"#3C3F4E"}}
            />
            </div>
        </div>

        <div className="w-[100%]"><label htmlFor="notes">Notes</label>
          <TextField
            multiline
            rows={4}
            placeholder="Notes"
            sx={{ mb: 2, width: '100%' }}
            InputProps={{ style: { color: "white" } }}
              style={{borderRadius:"30px", backgroundColor:"#3C3F4E"}}
          />
          </div>
          <Box sx={{display:"flex",justifyContent:"end"}}>
                  <Button onClick={handleClose} sx={{ color: "white", mt: 2, width:"20%", backgroundColor:"#3C9AEF", borderRadius: "30px"  }}>
                  Save
                  </Button>
                </Box>
        </Box>
      </Modal>
    </div>
  );
}
