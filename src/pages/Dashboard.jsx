// src/pages/Dashboard.js
import "./Dashboard.css";
import { Box, Toolbar, Typography, Grid } from '@mui/material';
import StatCard from '../components/StatCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BugReportIcon from '@mui/icons-material/BugReport';

import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';

export default function Dashboard() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography variant="h4" gutterBottom>
        Hi, Welcome Amir Salama Hassan 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid item>
          <StatCard
            icon={<ShoppingBagIcon color="primary" fontSize="large" />}
            title="Weekly Sales"
            value="714k"
          />
        </Grid>
        <Grid item>
          <StatCard
            icon={<PeopleIcon color="info" fontSize="large" />}
            title="New Users"
            value="1.35m"
          />
        </Grid>
        <Grid item>
          <StatCard
            icon={<ShoppingCartIcon color="warning" fontSize="large" />}
            title="Item Orders"
            value="1.72m"
          />
        </Grid>
        <Grid item>
          <StatCard
            icon={<BugReportIcon color="error" fontSize="large" />}
            title="Bug Reports"
            value="234"
          />
        </Grid>
      </Grid>
      <div className='Website'>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid className="mo" item xs={12} md={8}>
          <LineChart />
        </Grid>
        <Grid className="mo" item xs={12} md={4}>
          <PieChart />
        </Grid>
      </Grid>
      </div>
    </Box>
  );
}
