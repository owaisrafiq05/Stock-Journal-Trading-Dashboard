import React from 'react';
import { Modal, Box, Typography, Button, TextField, ToggleButtonGroup, ToggleButton, MenuItem, Select, FormControl } from '@mui/material';
import { useState } from 'react';
import Logo from "./logo3.svg";
import {
  Tabs,
  Tab,
  FormLabel,
  Input,
  Slider
} from "@mui/material";

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
    bgcolor: 'rgb(31 41 55)',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    color: 'white',
    maxWidth: '600px',
    width: '100%'
  };

  const style1 = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "align-center",
    marginBottom: "10px",
  }

  const style2 = {
    color: "white",
  }

  const stylebtn = {
    backgroundColor: "yellow",
    borderRadius: "50%",
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <div className="flex gap-x-3 justify-evenly items-center">
              <div>
                <label htmlFor="side">Side</label>
            <ToggleButtonGroup
              color="primary"
              value={side}
              exclusive
              onChange={handleSideChange}
              sx={{ marginBottom: 1, color: "white" }}
            >
              <ToggleButton value="LONG" sx={{color: "white"}}>LONG</ToggleButton>
              <ToggleButton value="SHORT" sx={{color: "white"}}>SHORT</ToggleButton>
            </ToggleButtonGroup>
            </div>

            <div>
                <label htmlFor="market">Market</label>
            <FormControl fullWidth>
              <Select
                value={market}
                onChange={handleMarketChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                  color: "white",
                  borderRadius:"50px", backgroundColor:"#3C3F4E",
                  "& .MuiSvgIcon-root": { color: "white" },
                }}
              >
                <MenuItem value="STOCK" sx={{backgroundColor:"#3C3F4E", color:"white"}}>STOCK</MenuItem>
                    <MenuItem value="OPTIONS" sx={{backgroundColor:"#3C3F4E", color:"white"}}>OPTIONS</MenuItem>
                    <MenuItem value="CRYPTO" sx={{backgroundColor:"#3C3F4E", color:"white"}}>CRYPTO</MenuItem>
                    <MenuItem value="FUTURE" sx={{backgroundColor:"#3C3F4E", color:"white"}}>FUTURE</MenuItem>
                    <MenuItem value="FOREX" sx={{backgroundColor:"#3C3F4E", color:"white"}}>FOREX</MenuItem>
                    <MenuItem value="INDEX" sx={{backgroundColor:"#3C3F4E", color:"white"}}>INDEX</MenuItem>
                {/* Add more menu items for other market types if necessary */}
              </Select>
            </FormControl>
            </div>
            <FormControl fullWidth>
                 <FormLabel sx={{ color: "white" }}>Symbol</FormLabel>
                <Input sx={{ color: "white", borderRadius:"30px", backgroundColor:"#3C3F4E", padding:"7px" }} />
            </FormControl>
            <FormControl fullWidth>
                 <FormLabel sx={{ color: "white" }}>Entry</FormLabel>
                <Input sx={{ color: "white", borderRadius:"30px", backgroundColor:"#3C3F4E", padding:"7px" }} />
            </FormControl>
            </div>
            <div className="flex justify-evenly items-center gap-x-3">
            <div className="flex flex-col gap-y-3">
            <FormControl fullWidth>
                 <FormLabel sx={{ color: "white" }}>Target</FormLabel>
                <Input sx={{ color: "white", borderRadius:"30px", backgroundColor:"#3C3F4E", padding:"7px" }} />
            </FormControl>
            <FormControl fullWidth>
                 <FormLabel sx={{ color: "white" }}>Stop-Loss</FormLabel>
                <Input sx={{ color: "white", borderRadius:"30px", backgroundColor:"#3C3F4E", padding:"7px" }} />
            </FormControl>
            </div>
            <div>
            <FormLabel sx={{ color: "white" }}>Note</FormLabel>
              <TextField fullWidth variant="filled" multiline rows={4} 
              sx={{ mb: 2, width: '100%',}}
              InputProps={{ style: { color: "white" } }}
              style={{borderRadius:"20px", backgroundColor:"#3C3F4E"}}
              />
            </div>
            </div>
            <div>
            <FormLabel sx={{ color: "white" }}>Tags</FormLabel>
              <TextField fullWidth variant="filled" multiline rows={2} 
              sx={{ mb: 2, width: '100%',}}
              InputProps={{ style: { color: "white" } }}
              style={{borderRadius:"20px", backgroundColor:"#3C3F4E"}}
              />
            </div>

            <Box sx={{display:"flex",justifyContent:"end"}}>
                  <Button onClick={handleClose} sx={{ color: "white", mt: 2, width:"20%", backgroundColor:"#3C9AEF", borderRadius: "30px"  }}>
                  Save
                  </Button>
                </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
