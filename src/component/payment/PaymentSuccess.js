import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useParams } from "react-router-dom"
const PaymentSuccess = () => {

    const {reference} = useParams()

    const referenceNum = reference;
    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>

                <Heading textTransform={"uppercase"}> Order Successfull</Heading>

                <Text>
                    Reference No.{referenceNum}
                </Text>

            </VStack>
        </Box>
    )
}

export default PaymentSuccess