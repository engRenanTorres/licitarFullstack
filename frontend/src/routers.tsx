import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SignupPage } from './pages/SignupPage';
import Home from './pages/Home';
import PrivateRoutes from './utils/PrivateRoutes';
import { DashboardPage } from './pages/DashboardPage';
import { AuthProvider } from './contexts/AuthContext';
import { QuestionsListPage } from './pages/QuestionsListPage';
import { CreateQuestionPage } from './pages/CreateQuestion';

export default function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes role={[1, 2]} />}>
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="questions">
            <Route path="" element={<QuestionsListPage />} />
            <Route path="create" element={<CreateQuestionPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
