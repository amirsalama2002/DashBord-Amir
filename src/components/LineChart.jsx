// src/components/LineChart.js
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// بيانات الرسم البياني
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Website Visits',
      data: [500, 900, 300, 1200, 1100, 1400, 1600],
      fill: false,
      borderColor: '#3f51b5',
      tension: 0.3,
      pointBackgroundColor: '#3f51b5',
      pointRadius: 5,
    },
  ],
};

// إعدادات الرسم البياني
const options = {
  responsive: true,
  maintainAspectRatio: false, // مهم لجعل الرسم البياني يملأ الحاوية
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

export default function LineChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-4 h-120">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Website Visits
      </h2>
      <div className="h-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
