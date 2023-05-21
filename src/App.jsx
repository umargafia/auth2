import SignInSide from './auth/SignInSide';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './user/Home';
import { useSelector } from 'react-redux';

function App() {
  const { isAuthenticated } = useSelector((state) => state);

  return (
    <Routes>
      {
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <SignInSide />
            ) : (
              <Navigate to="/user/home" />
            )
          }
        />
      }
      {isAuthenticated && (
        <Route path="user/home" element={<Home />} />
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
