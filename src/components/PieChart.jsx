// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card, CardContent, Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Egypt', 'Asia', 'Europe', 'Africa'],
  datasets: [
    {
      label: 'Current Visits',
      data: [40, 30, 20, 10],
      backgroundColor: ['#3f51b5', '#e91e63', '#ffc107', '#4caf50'],
    },
  ],
};

export default function PieChart() {
  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Current Visits
        </Typography>
        <Pie data={data} />
      </CardContent>
    </Card>
  );
}
