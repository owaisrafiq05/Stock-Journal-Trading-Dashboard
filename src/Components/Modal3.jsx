import React from 'react';
import { Modal, Box, Typography, IconButton, TextField, ToggleButtonGroup, ToggleButton, Stack, Button } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
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
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    color: 'text.primary'
  };

  return (
    <div>
      <Button onClick={handleOpen}>New Day Note</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
            New Day Note
          </Typography>
<div className='flex gap-3'>
          <Stack direction="row" spacing={2} mb={2}>
            <ToggleButtonGroup
              value={mood}
              exclusive
              onChange={handleMoodChange}
            >
              <ToggleButton value="sad" aria-label="sad">
                <SentimentVeryDissatisfiedIcon />
              </ToggleButton>
              <ToggleButton value="neutral" aria-label="neutral">
                <SentimentSatisfiedIcon />
              </ToggleButton>
              <ToggleButton value="happy" aria-label="happy">
                <SentimentVerySatisfiedIcon />
              </ToggleButton>
            </ToggleButtonGroup>

            {/* Include other selectors similar to the mood selector for 'Market Condition' and 'Market Volatility' */}
          </Stack>

          <Stack direction="row" spacing={2} mb={2}>
            <ToggleButtonGroup
              value={mood}
              exclusive
              onChange={handleMoodChange}
            >
              <ToggleButton value="sad" aria-label="sad">
                <SentimentVeryDissatisfiedIcon />
              </ToggleButton>
              <ToggleButton value="neutral" aria-label="neutral">
                <SentimentSatisfiedIcon />
              </ToggleButton>
              <ToggleButton value="happy" aria-label="happy">
                <SentimentVerySatisfiedIcon />
              </ToggleButton>
            </ToggleButtonGroup>

            {/* Include other selectors similar to the mood selector for 'Market Condition' and 'Market Volatility' */}
          </Stack>

          <Stack direction="row" spacing={2} mb={2}>
            <ToggleButtonGroup
              value={mood}
              exclusive
              onChange={handleMoodChange}
            >
              <ToggleButton value="sad" aria-label="sad">
                <SentimentVeryDissatisfiedIcon />
              </ToggleButton>
              <ToggleButton value="neutral" aria-label="neutral">
                <SentimentSatisfiedIcon />
              </ToggleButton>
              <ToggleButton value="happy" aria-label="happy">
                <SentimentVerySatisfiedIcon />
              </ToggleButton>
            </ToggleButtonGroup>

            {/* Include other selectors similar to the mood selector for 'Market Condition' and 'Market Volatility' */}
          </Stack>
          </div>
          <TextField
            label="Date"
            type="date"
            defaultValue="2024-03-28"
            sx={{ mb: 2, width: '100%' }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="Summary"
            multiline
            rows={2}
            placeholder="Summary"
            sx={{ mb: 2, width: '100%' }}
          />

          <TextField
            label="Notes"
            multiline
            rows={4}
            placeholder="Notes"
            sx={{ mb: 2, width: '100%' }}
          />

          <Button onClick={handleClose}>Save</Button>
        </Box>
      </Modal>
    </div>
  );
}
