import { Link } from "react-router-dom";

function Login() {
	const googleAuth = () => {
		window.open(
			`http://localhost:3000/auth/google/callback`,
			"_self"
		);
	};
	return (
		<div>
      <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>MailGO a bulk email service platform</h1>
      <h3 style={{ fontSize: '18px', marginBottom: '15px', alignItems:'center' }}>Sign in</h3>
      <h3 style={{ fontSize: '11px', marginBottom: '15px' }}>To allow login through Google account click below</h3>
      <button onClick={googleAuth} style={buttonStyles}>
        <img src="./images/google.png" alt="Google icon" style={imgStyles} />
        <span style={spanStyles}>Sign in with Google</span>
      </button>
    </div>
	);
}

const buttonStyles = {
	padding: '12px 24px',
	borderRadius: '25px',
	backgroundColor: '#4285f4',
	color: 'white',
	border: '2px solid transparent',
	position: 'relative',
	overflow: 'hidden',
	transition: 'color 0.3s, border-color 0.3s',
	boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
	cursor: 'pointer',
	backgroundImage: 'linear-gradient(45deg, #4285f4, #34a853, #fbbc05, #ea4335)',
	backgroundSize: '300% 300%',
	animation: 'gradientAnimation 4s ease infinite',
  };
  
  const imgStyles = {
	width: '24px',
	height: '24px',
	marginRight: '10px',
	verticalAlign: 'middle',
	filter: 'invert(1) brightness(1.5)',
	transition: 'filter 0.3s ease',
  };
  
  const spanStyles = {
	verticalAlign: 'middle',
  };
  
  const gradientAnimation = {
	'@keyframes gradientAnimation': {
	  '0%': {
		backgroundPosition: '0% 50%',
	  },
	  '50%': {
		backgroundPosition: '100% 50%',
	  },
	  '100%': {
		backgroundPosition: '0% 50%',
	  },
	},
  };
  
export default Login;

