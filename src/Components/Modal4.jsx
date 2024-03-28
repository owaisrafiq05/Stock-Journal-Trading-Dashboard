import React from 'react';
import { Modal, Box, Typography, Button, TextField, ToggleButtonGroup, ToggleButton, MenuItem, Select, FormControl } from '@mui/material';
import { useState } from 'react';

export default function NewTradeSetupModal() {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState('LONG');
  const [market, setMarket] = useState('STOCK');
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSideChange = (event, newSide) => {
    if (newSide !== null) {
      setSide(newSide);
    }
  };
  const handleMarketChange = (event) => {
    setMarket(event.target.value);
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
    color: 'text.primary',
    maxWidth: '600px',
    width: '100%'
  };

  return (
    <div>
      <Button onClick={handleOpen}>New Trade Setup</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
            New Trade Setup
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <ToggleButtonGroup
              color="primary"
              value={side}
              exclusive
              onChange={handleSideChange}
              sx={{ marginBottom: 1 }}
            >
              <ToggleButton value="LONG">LONG</ToggleButton>
              <ToggleButton value="SHORT">SHORT</ToggleButton>
            </ToggleButtonGroup>

            <FormControl fullWidth>
              <Select
                value={market}
                onChange={handleMarketChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="STOCK">STOCK</MenuItem>
                {/* Add more menu items for other market types if necessary */}
              </Select>
            </FormControl>

            <TextField fullWidth label="Symbol" variant="filled" />
            <TextField fullWidth label="Entry" variant="filled" />
            <TextField fullWidth label="Target" variant="filled" />
            <TextField fullWidth label="Stop-Loss" variant="filled" />
            <TextField fullWidth label="Note" variant="filled" multiline rows={2} />
            <TextField fullWidth label="Tags" variant="filled" />

            <Button onClick={handleClose} variant="contained" sx={{ marginTop: 2 }}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
