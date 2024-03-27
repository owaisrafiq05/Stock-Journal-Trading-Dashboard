
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

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
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
  color: "white", // Assuming you want white text color for the entire modal content
};

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
          <Typography
            id="trade-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "white" }}
          >
            New Trade
          </Typography>

          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab label="General" />
            <Tab label="Journal" />
          </Tabs>

          {tabValue === 1 && ( // This will only show the form when the 'Journal' tab is active
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
                      "& .MuiSvgIcon-root": { color: "white" },
                    }}
                  >
                    <MenuItem value="STOCK">Stock</MenuItem>
                    {/* Add other market options here */}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <FormLabel sx={{ color: "white" }}>Symbol</FormLabel>
                  <Input sx={{ color: "white" }} defaultValue="AAPL" />
                </FormControl>
                <FormControl fullWidth>
                  <FormLabel sx={{ color: "white" }}>Target</FormLabel>
                  <Input sx={{ color: "white" }} placeholder="Target Price" />
                </FormControl>
                <FormControl fullWidth>
                  <FormLabel sx={{ color: "white" }}>Stop-Loss</FormLabel>
                  <Input
                    sx={{ color: "white" }}
                    placeholder="Stop-Loss Price"
                  />
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Button
                  variant="contained"
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
                    input: { color: "white" },
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
                  sx={{ input: { color: "white" }, label: { color: "white" } }}
                />
                <TextField
                  label="Price"
                  type="number"
                  defaultValue={0}
                  sx={{ input: { color: "white" }, label: { color: "white" } }}
                />
                <TextField
                  label="Fee"
                  type="number"
                  defaultValue={0}
                  sx={{ input: { color: "white" }, label: { color: "white" } }}
                />
              </Box>
              <Button onClick={handleClose} sx={{ color: "white" }}>
                Save
              </Button>
              {/* ... (previous TextField components) */}
              <TextField
                label="Fee"
                type="number"
                defaultValue={0}
                sx={{ input: { color: "white" }, label: { color: "white" } }}
              />
              <Button onClick={handleClose} sx={{ color: "white", mt: 2 }}>
                Save
              </Button>
            </Box>
          )}

          {/* Add content for other tabs here if necessary */}
          {tabValue === 0 && (
            <Box>
              <div>
                <Button onClick={handleOpen}>New Trade</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="trade-modal-title"
                >
                  <Box sx={style}>
                    <Typography
                      id="trade-modal-title"
                      variant="h6"
                      component="h2"
                      sx={{ color: "white" }}
                    >
                      New Trade
                    </Typography>

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
                    {tabValue === 0 && (
                      <Box>
                        <TextField
                          fullWidth
                          placeholder="Tags"
                          margin="normal"
                          InputProps={{ style: { color: "white" } }}
                        />
                        <TextField
                          fullWidth
                          multiline
                          placeholder="Notes"
                          margin="normal"
                          minRows={3}
                          InputProps={{ style: { color: "white" } }}
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

                    <Button
                      onClick={handleClose}
                      sx={{ color: "white", mt: 2 }}
                    >
                      Save
                    </Button>
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
