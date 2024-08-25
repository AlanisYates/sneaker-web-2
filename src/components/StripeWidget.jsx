import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/system";

const RedDot = styled("span")({
  height: "10px",
  width: "10px",
  backgroundColor: "red",
  borderRadius: "50%",
  display: "inline-block",
  marginRight: "8px",
});

const WhiteDot = styled("span")({
  height: "15px",
  width: "15px",
  backgroundColor: "white",
  borderRadius: "50%",
  display: "inline-block",
  marginRight: "2px",
});

const CustomButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  color: "white",
});

function StripeWidget() {
  const dummyData = {
    nextPayout: {
      date: "2 days",
      amount: 1500,
    },
    growthPercentage: 20,
  };

  return (
    <Box
      sx={{
        border: "3px solid #ccc",
        borderRadius: "16px",
        height: "auto",
        width: "100%",
        maxWidth: "600px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 0px 10px #000",
        padding: "20px",
        marginBottom: "20px",
        marginTop: "10px",
        bgcolor: "black",
        color: "white",
      }}
    >
      <Stack spacing={2} sx={{ width: { xs: "100%", sm: "auto" } }}>
        <Box
          sx={{
            display: "flex",
            bgcolor: "green",
            borderRadius: "50px",
            justifyContent: "center",
            width: "150px",
            margin: "10px",
          }}
        >
          <Typography
            gutterBottom
            sx={{ mt: 1, fontSize: { xs: "14px", sm: "18px", md: "24px" } }}
          >
            +{dummyData.growthPercentage}%
          </Typography>
        </Box>

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            paddingTop: "15px",
            fontSize: { xs: "14px", sm: "18px", md: "24px" },
          }}
        >
          <WhiteDot /> Next Payout: {dummyData.nextPayout.date}
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontSize: { xs: "14px", sm: "18px", md: "24px" } }}
        >
          ${dummyData.nextPayout.amount}
        </Typography>
      </Stack>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: { xs: "100%", sm: "auto" },
          alignItems: { xs: "center", sm: "flex-start" },
          mt: { xs: 2, sm: 0 },
        }}
      >
        <Button
          variant="outlined"
          size="large"
          sx={{
            color: "white",
            textAlign: "center",
          }}
          onClick={() => console.log("Navigate to statements")}
        >
          Statements
        </Button>
        <CustomButton
          variant="outlined"
          sx={{ width: "129px" }}
          onClick={() => console.log("Navigate to Stripe Dashboard")}
        >
          <RedDot />
          Stripe
        </CustomButton>
      </Stack>
    </Box>
  );
}

export default StripeWidget;