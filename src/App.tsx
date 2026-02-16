import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import type { User } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

import { Loader } from './_components/loader/Loader';
import { auth } from './firebase/firebase';
import { OnboardingPage } from './pages/inside/onboarding/OnboardingPage';
import Profile from './pages/inside/profile/Profile';
import SignIn from './pages/outside/signin/SignIn';
import SignUp from './pages/outside/signup/SignUp';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {!user ? (
          <>
            <Route
              path='/signup'
              element={<SignUp />}
            />
            <Route
              path='/signin'
              element={<SignIn />}
            />
            <Route
              path='*'
              element={<Navigate to='/signin' />}
            />
          </>
        ) : (
          <>
            <Route
              path='/profile'
              element={<Profile />}
            />
            <Route
              path='/onboarding'
              element={<OnboardingPage />}
            />
            <Route
              path='*'
              element={<Navigate to='/profile' />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
