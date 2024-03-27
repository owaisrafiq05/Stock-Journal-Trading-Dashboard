
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { FormControl, FormLabel, Input, Typography, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto", // Adjust width based on content
  bgcolor: "rgb(31 41 55)", // Adjust background color to match screenshot
  border: "none", // Adjust or remove border
  borderRadius: "8px", // Rounded corners
  boxShadow: 24,
  p: 4,
  color: 'white'
};
export default function TradeModal() {
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState('BUY'); // state to track the action
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>New Trade</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="trade-modal-title"
        >
          <Box sx={style}>
            <Typography id="trade-modal-title" variant="h6" component="h2">
              New Trade
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, my: 2 }}> {/* Use a flex box for layout */}
              <FormControl sx={{ color: 'white' }}>
                <FormLabel sx={{ color: 'white' }}>Market</FormLabel>
                <Select
                sx={{ color: 'white' }}
                  value={action}
                  onChange={(event) => setAction(event.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value='STOCK'>Stock</MenuItem>
                  {/* Add other market options here */}
                </Select>
              </FormControl>
              <FormControl sx={{ color: 'white' }}>
                <FormLabel sx={{ color: 'white' }}>Symbol</FormLabel>
                <Input sx={{ color: 'white' }} defaultValue="AAPL" /> {/* Replace with dynamic value */}
              </FormControl>
              <FormControl sx={{ color: 'white' }}>
                <FormLabel sx={{ color: 'white' }}>Target</FormLabel>
                <Input sx={{ color: 'white' }} placeholder="Target Price" />
              </FormControl>
              <FormControl sx={{ color: 'white' }}>
                <FormLabel sx={{ color: 'white' }}>Stop-Loss</FormLabel>
                <Input sx={{ color: 'white' }} placeholder="Stop-Loss Price" />
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', my: 2 }}>
              {/* Action Button */}
              <Button variant="contained" color={action === 'BUY' ? 'primary' : 'secondary'}>
                {action}
              </Button>
              {/* Date/Time Picker */}
              <TextField
                label="Date/Time"
                type="datetime-local"
                defaultValue="2024-03-28T01:04" // Replace with dynamic value
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {/* Quantity Input */}
              <TextField label="Quantity" type="number" defaultValue={0} />
              {/* Price Input */}
              <TextField label="Price" type="number" defaultValue={0} />
              {/* Fee Input */}
              <TextField label="Fee" type="number" defaultValue={0} />
            </Box>
            <Button onClick={handleClose}>Save</Button>
          </Box>
        </Modal>
      </div>
    );
  }