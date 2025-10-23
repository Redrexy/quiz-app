import { useNavigate } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { BiSolidLogIn } from 'react-icons/bi';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="homePage">
      <h1 className="homeTitle">React Quiz Application</h1>
      <h3 className="homeDetails">Take this test to test your knowledge!</h3>

      <button
        className="homePlayButton"
        style={{ backgroundColor: 'blue', marginBottom: 20 }}
        onClick={() => navigate('/quiz')}
      >
        <span className="homeButtonText">Play</span>
        <FaPlay size={20} color="white" />
      </button>
      <button
        className="homePlayButton"
        style={{ backgroundColor: 'red' }}
        // onClick={() => navigate('/login')}
      >
        <span className="homeButtonText">Login</span>
        <BiSolidLogIn size={24} color="white" />
      </button>
    </div>
  );
}

export default Home;
