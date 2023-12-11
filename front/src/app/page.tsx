'use client'
// pages/index.tsx
import { Button, HStack, VStack, ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './components/Shiratama';


const Home = () => {
    const [cardCount, setCardCount] = useState(0);
  
    const handleButtonClick = () => {
        setCardCount(cardCount + 1);
    };
  
    const handleDeleteCard = () => {
        setCardCount(cardCount - 1);
    };
  
    return (
        <ChakraProvider>
            <VStack spacing={5} align="center">
                <HStack spacing={5} align="center">
                    <Button onClick={handleButtonClick}>Cardを生成</Button>
                    <Button onClick={handleDeleteCard}>Cardを削除</Button>
                </HStack>
                <HStack spacing={4} align="center">
                {[...Array(cardCount)].map((_, index: number) => (
                    <Card key={index} index={index} />
                ))}
                </HStack>
                <Button>計算!</Button>
            </VStack>
        </ChakraProvider>
    );
  };
  
  export default Home;
