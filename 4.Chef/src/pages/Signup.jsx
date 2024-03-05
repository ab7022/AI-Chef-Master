
import axios from 'axios';

const GoogleLoginButton = () => {
  const handleGoogleSignIn = async () => {
    try {
      const response = await axios.get('http://localhost:8000/auth/google-oauth2/');
      window.location.href = response.data.authorization_url;
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn}>
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;
