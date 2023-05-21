import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SignupPage } from './pages/SignupPage';
import Home from './pages/Home';
import PrivateRoutes from './utils/PrivateRoutes';
import { DashboardPage } from './pages/DashboardPage';
import { AuthProvider } from './contexts/AuthContext';
import { BiddingPage } from './pages/BiddingPage';
import { CreateBiddingPage } from './pages/CreateBidding';
import { UnderConstructionPage } from './pages/UnderConstructionPage copy';

export default function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes role={[1, 2]} />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="bidding">
              <Route path="" element={<BiddingPage />} />
              <Route path="create" element={<CreateBiddingPage />} />
            </Route>
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="underConstruction" element={<UnderConstructionPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
