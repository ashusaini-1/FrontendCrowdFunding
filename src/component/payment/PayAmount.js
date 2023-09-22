import React, { useState } from 'react';
import { Box, Stack,Input,Button ,Card,Center} from "@chakra-ui/react";
import axios from "axios";

const PayAmount = () => {
  const [amount, setAmount] = useState(""); // Initialize with an empty string

  const checkoutHandler = async (amount) => {
    const backendApi="https://crowdfunding-hii5.onrender.com"
    if (!amount || isNaN(amount)) {
      // Add input validation to ensure a valid amount is provided
      alert("Please enter a valid amount.");
      return;
    }

    const { data: { key } } = await axios.get(`${backendApi}/api/v1/getkey`);

    const { data: { order } } = await axios.post(`${backendApi}/api/v1/checkout`, {
      amount: parseInt(amount), // Ensure 'amount' is a number
    });

    console.log(key, order);

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Ashu Saini",
      description: "Tutorial of RazorPay",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHK0AEqu1aNdGGlQMdPFh9WMOwg58U1WK5w&usqp=CAU",
      order_id: order.id,
      callback_url: `${backendApi}/api/v1/paymentverification`,
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        "address": "Razorpay Corporate Office",
      },
      theme: {
        "color": "#121212",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  }

  return (
    <Center height="100vh">
    <Card
      p={4} // Add padding to the card
      boxShadow="md" // Add a box shadow for a card-like appearance
      borderRadius="md" // Add rounded corners to the card
      width={["90%", "70%", "50%"]} // Set the card's width based on screen size
    >
      <Box>
        <Stack
          alignItems="center"
          justifyContent="center"
          direction={["column", "row"]}
          spacing={4} // Adjust spacing between input and button
        >
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            size="lg" // Make the input larger for better visibility and usability
            borderRadius="md" // Add some rounded corners
          />
          <Button
            onClick={() => checkoutHandler(amount)}
            colorScheme="blue" // Use a color scheme to make the button stand out
            size="lg" // Make the button larger
            borderRadius="md" // Add rounded corners to the button
          >
            Pay
          </Button>
        </Stack>
      </Box>
    </Card>
    </Center>
  );
}

export default PayAmount;
