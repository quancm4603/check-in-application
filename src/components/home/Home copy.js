import React, { useState } from "react";
import { Grid, Box, Fab, TextField, Button } from "@mui/material";
import { Add, Margin } from "@mui/icons-material";
import Phone from "./Phone";

const Home = () => {
  const [step, setStep] = useState(1);
  const [isPhoneFilled, setIsPhoneFilled] = useState(false);

  const handleNext = () => {
    // Handle logic for the Next button click
    console.log("Next button clicked");
    setStep(step + 1);
  };

  const handleBack = () => {
    // Handle logic for the Back button click
    console.log("Back button clicked");
    setStep(step - 1);
  };

  const handleCancel = () => {
    // Handle logic for the Cancel button click
    console.log("Cancel button clicked");
  };

  const handlePhoneChange = (phone) => {
    // Validate the phone input and update the isPhoneFilled state
    setIsPhoneFilled(phone.length >= 11);
  };

  return (
    <Grid container spacing={2} sx={{ height: '99vh' }}>
      <Grid item xs={7}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }} />
      </Grid>

      <Grid item xs={5} container justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
        >
           <Phone onNext={handleNext} onBack={handleBack} onCancel={handleCancel} onPhoneChange={handlePhoneChange} />
        </Grid>
        <Grid item xs={12} container justifyContent="center" alignItems="center">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
            }}
          >
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="outlined" color="primary" onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={!isPhoneFilled}
            >
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
