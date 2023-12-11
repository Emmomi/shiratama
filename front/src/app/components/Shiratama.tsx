// components/Card.tsx
import { Box, Text, Input} from '@chakra-ui/react';

interface CardProps {
    index: number;
}

export const Card: React.FC<CardProps> = ({ index }) => {

    return (
        <Box
            key={index}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            mt={4}
            boxShadow="md"
        >
            <Text fontSize="xl" fontWeight="bold">
                サンプルカード {index + 1}
            </Text>
            <Text mt={2}>カードの内容がここに入ります。</Text>
            <Input></Input>
        </Box>
    );
};
