import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Image1 from "../../public/image1.png"
import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  Tabs,
  Tab,
  FormControl,
  FormLabel,
  Input,
  TextField,
  Select,
  MenuItem,
  Slider
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "rgb(31 41 55)", // This should be set to your dark theme color
  border: "none",
  borderRadius: "29px",
  boxShadow: 24,
  p: 4,
  color: "white", // Assuming you want white text color for the entire modal content
};

const style1 = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "align-center",
}

const style2 = {
  color: "white",
}

export default function TradeModal() {

  const [confidence, setConfidence] = useState(5);

 
  const handleSliderChange = (event, newValue) => {
    setConfidence(newValue);
  };

  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [action, setAction] = useState("BUY");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Button onClick={handleOpen}>New Trade</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="trade-modal-title"
      >
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
          <Box sx={style1}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab label="General" />
            <Tab label="Journal" />
          </Tabs>
            </Box>

          {tabValue === 0 && ( // This will only show the form when the 'Journal' tab is active
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, my: 2 }}
            >
              <Box sx={{ display: "flex", gap: 2, flexDirection: "row" }}>
                <FormControl fullWidth>
                  <FormLabel sx={{ color: "white" }}>Market</FormLabel>
                  <Select
                    value={action}
                    onChange={(event) => setAction(event.target.value)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      color: "white",
                      marginTop:"10px",
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
                    {/* Add other market options here */}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <FormLabel sx={{ color: "white" }}>Symbol</FormLabel>
                  <Input sx={{ color: "white", borderRadius:"30px", backgroundColor:"#3C3F4E", padding:"7px" }} />
                </FormControl>
                <FormControl fullWidth>
                  <FormLabel sx={{ color: "white" }}>Target</FormLabel>
                  <Input sx={{ color: "white", borderRadius:"30px", backgroundColor:"#3C3F4E", padding:"7px" }}  />
                </FormControl>
                <FormControl fullWidth>
                  <FormLabel sx={{ color: "white" }}>Stop-Loss</FormLabel>
                  <Input
                    sx={{ color: "white", borderRadius:"30px", backgroundColor:"#3C3F4E", padding:"7px" }}
                  />
                </FormControl>
              </Box>
              <img src={Image1} alt="" className='w-100 ml-4'/>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                
                <Button
                  variant="contained"
                  sx={{backgroundColor: "red", color:"white",borderRadius:"50%", fontSize:"13px"}}
                >
                  X
                </Button>
                <Button
                  variant="contained"
                  sx={{backgroundColor: "#52CA96", color:"white",borderRadius:"20px", paddingX:"13px"}}
                  color={action === "BUY" ? "primary" : "secondary"}
                >
                  {action}
                </Button>
                <TextField
                  label="Date/Time"
                  type="datetime-local"
                  defaultValue="2024-03-28T01:04"
                  sx={{
                    width: 220,
                    input: { color: "white" , borderRadius:"30px", backgroundColor:"#3C3F4E", paddingX:"7px" },
                    label: { color: "white" },
                    
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  label="Quantity"
                  type="number"
                  defaultValue={0}
                  sx={{ input: { color: "white", borderRadius:"30px", backgroundColor:"#3C3F4E", paddingX:"7px", }, label: { color: "white" } }}
                />
                <TextField
                  label="Price"
                  type="number"
                  defaultValue={0}
                  sx={{ input: { color: "white", borderRadius:"30px", backgroundColor:"#3C3F4E", paddingX:"7px", }, label: { color: "white" } }}
                />
                <TextField
                  label="Fee"
                  type="number"
                  defaultValue={0}
                  sx={{ input: { color: "white", borderRadius:"30px", backgroundColor:"#3C3F4E", paddingX:"7px", }, label: { color: "white" } }}
                />
              </Box>
              <Button onClick={handleClose} sx={{ color: "white", width:"10%", marginX:"auto", backgroundColor:"#3C9AEF",
                borderRadius:"70px" }}>
                +
              </Button>
              {/* ... (previous TextField components) */}
              {/* <TextField
                label="Fee"
                type="number"
                defaultValue={0}
                sx={{ input: { color: "white" }, label: { color: "white" } }}
              /> */}
              <Box sx={{display:"flex",justifyContent:"end"}}>
                <Button onClick={handleClose} sx={{ color: "white", mt: 2, width:"20%", backgroundColor:"#3C9AEF", borderRadius: "30px"  }}>
                  Save
                </Button>
              </Box>
            </Box>
          )}

          {/* Add content for other tabs here if necessary */}
          {tabValue === 1 && (
              <Box sx={{overflowY:"scroll", minHeight: "20vh"}}>
              <div>
                <Button onClick={handleOpen}>New Trade</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="trade-modal-title"
                >
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

                    <Tabs
                      value={tabValue}
                      onChange={handleTabChange}
                      textColor="inherit"
                      indicatorColor="primary"
                    >
                      <Tab label="General" />
                      <Tab label="Journal" />
                    </Tabs>

                    {/* Assuming this part of the UI is in the 'General' tab */}
                    {tabValue === 1 && (
                      <Box>
                        <label htmlFor="tags">Tags: </label>
                        <TextField
                          fullWidth
                          multiline
                          margin="normal"
                          minRows={2}
                          InputProps={{ style: { color: "white" } }}
                          style={{borderRadius:"30px", backgroundColor:"#3C3F4E"}}
                        />
                        <label htmlFor="notes">Notes: </label>
                        <TextField
                          fullWidth
                          multiline
                          placeholder="Notes"
                          margin="normal"
                          minRows={3}
                          InputProps={{ style: { color: "white" } }}
                          style={{borderRadius:"30px", backgroundColor:"#3C3F4E"}}
                        />
                        <Typography gutterBottom sx={{ color: "white" }}>
                          Confidence: {confidence}
                        </Typography>
                        <Slider
                          value={confidence}
                          onChange={handleSliderChange}
                          aria-labelledby="confidence-slider"
                          min={0}
                          max={10}
                          sx={{
                            color: "primary.main", // Use your primary color here
                            "& .MuiSlider-thumb": {
                              color: "primary.main", // Use your primary color here
                            },
                            "& .MuiSlider-track": {
                              color: "primary.light", // Lighten your primary color
                            },
                            "& .MuiSlider-rail": {
                              color: "grey.800", // Dark grey color
                            },
                          }}
                        />
                        <Button
                          variant="contained"
                          component="label"
                          startIcon={<AddPhotoAlternateIcon />}
                          sx={{ color: "white", mt: 2 }}
                        >
                          Upload screenshots
                          <input type="file" hidden />
                        </Button>
                      </Box>
                    )}

                <Box sx={{display:"flex",justifyContent:"end"}}>
                  <Button onClick={handleClose} sx={{ color: "white", mt: 2, width:"20%", backgroundColor:"#3C9AEF", borderRadius: "30px"  }}>
                  Save
                  </Button>
                </Box>
                  </Box>
                </Modal>
              </div>
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
}
