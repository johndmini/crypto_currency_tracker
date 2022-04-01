import React from 'react';
import DefiData from '../DeFIData/DeFiData';

import { Box } from '@mui/material';

export default function DeFiPage() {
    return(
        <Box sx={{ textAlign: 'center' }}>
            <Box>
                <DefiData />
            </Box>
        </Box>
    )
}