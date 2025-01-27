import { supabase } from '../services/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

const LoginSignUp = () => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (user) navigate('/');
    if (error) alert(error.message);
  };

  const handleGoogleLogin = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (user) navigate('/');
    if (error) alert(error.message);
  };

  return (
  <div>
      <h2>Login / Sign Up</h2>
      <TextField label="Email" type="email" fullWidth />
      <TextField label="Password" type="password" fullWidth />
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleGoogleLogin}>Login with Google</Button>
    </div>
  );
};

export default LoginSignUp;
