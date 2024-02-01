import React, { useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Phone from "./Phone";
import Info from "./Info";
import Services from "./Services"; // Import the Services component

const Home = () => {
  const [step, setStep] = useState(1);
  const [isPhoneFilled, setIsPhoneFilled] = useState(false);
  const [infoData, setInfoData] = useState({
    name: "",
    email: "",
    birthday: "",
  });
  const [selectedServices, setSelectedServices] = useState([]); // State to store selected services
  const [showServices, setShowServices] = useState(false);
  const defaultTheme = createTheme();

  const handleNext = () => {
    if (step === 1) {
      // Validate phone input
      if (isPhoneFilled) {
        setStep(2);
      } else {
        // Optionally show an error message or take other actions
        console.log("Phone number is not filled");
      }
    } else if (step === 2) {
      // Move to the next step
      setStep(3);
      setShowServices(true); // Show Services component in the third step
    } else if (step === 3) {
      // Handle logic for moving to the next step (e.g., submit the form)
      console.log("Submit the form with data:", infoData);
    }
  };

  const handleBack = () => {
    if (step === 1) {
      // Handle logic for going back from the first step
    } else if (step === 2) {
      // Go back to the first step
      setStep(1);
      setShowServices(false); // Hide Services component when going back to step 1
    } else if (step === 3) {
      // Go back to the second step
      setStep(2);
      setShowServices(false); // Hide Services component when going back to step 2
    }
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  const handlePhoneChange = (phone) => {
    setIsPhoneFilled(phone.length >= 11);
  };

  const handleInfoChange = (info) => {
    setInfoData(info);
  };

  const handleServiceSelect = (selected) => {
    setSelectedServices(selected);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "98vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "70vh", // Adjust the height of this grid
            }}
          >
            {step === 1 && (
              <Phone
                onNext={handleNext}
                onBack={handleBack}
                onCancel={handleCancel}
                onPhoneChange={handlePhoneChange}
              />
            )}
            {step === 2 && <Info onInfoChange={handleInfoChange} />}
            {step === 3 && showServices && (
              <Services onSelect={handleServiceSelect} />
            )}
          </Box>
          <Grid
              item
              xs={12}
              container
              justifyContent="center"
              alignItems="center"
              sx={{
                height: "auto", // Adjust the height of this grid
              }}
            >
              {/* Move the Box for buttons here */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button variant="outlined" color="primary" onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  disabled={step === 1 ? !isPhoneFilled : false}
                >
                  {step === 1 ? "Next" : step === 2 ? "Next" : "Submit"}
                </Button>
              </Box>
            </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
