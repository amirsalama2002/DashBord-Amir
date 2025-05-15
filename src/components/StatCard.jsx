// src/components/StatCard.js
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function StatCard({ icon, title, value }) {
  return (
    <Card sx={{ minWidth: 220, p: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          {icon}
          <Box>
            <Typography variant="subtitle2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
