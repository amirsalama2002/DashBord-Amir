// src/components/LineChart.js
import "./LineChar.css";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Card, CardContent, Typography } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Website Visits',
      data: [500, 900, 300, 1200, 1100, 1400, 1600],
      fill: false,
      borderColor: '#3f51b5',
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

export default function LineChart() {
  return (
    <Card  sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Website Visits
        </Typography>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  );
}
