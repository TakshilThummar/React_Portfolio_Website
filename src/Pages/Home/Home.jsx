import { useState, useEffect, useMemo } from 'react';
import './Home.css';
import heroImage from '../../Assets/images/hero.png'
import { Link } from 'react-router-dom';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [professionIndex, setProfessionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const professions = useMemo(() => [
    'DevOps Engineer',
    'Web Designer',
    'Python Developer',
    'Django Developer',
    'Frontend Developer'
  ], []);

  useEffect(() => {
    const handleTyping = () => {
      const currentProfession = professions[professionIndex];

      if (!isDeleting && charIndex < currentProfession.length) {
        setText((prevText) => prevText + currentProfession[charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
        setTypingSpeed(150);
      } else if (isDeleting && charIndex > 0) {
        setText((prevText) => prevText.slice(0, prevText.length - 1));
        setCharIndex((prevCharIndex) => prevCharIndex - 1);
        setTypingSpeed(50);
      } else if (!isDeleting && charIndex === currentProfession.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setProfessionIndex((prevProfessionIndex) => (prevProfessionIndex + 1) % professions.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [text, charIndex, isDeleting, professionIndex, typingSpeed, professions]);

  return (
    <div className='container'>

      <div className="home">

        <div className="content">

          <h2>Heyy There!, <br /> I'm <span>Takshil</span></h2>
          <h2>I am a <span>{text}</span><span className="cursor">|</span></h2>

          <p>My name is Takshil Thummar and and I'm from Junagadh.</p>
          <p>Now, My 5th sem is pursuing in BCA (Bachelor's of Computer application) at Noble University - Junagadh.</p>

          <div className="buttons">
            <Link to="/about" className="btn">About Me<i className="fas fa-arrow-circle-right"></i></Link>
            <Link to="/about" className="btn">Resume</Link>
          </div>

          <div className="socials">
                <ul className="social-icons">
                    <li><a className="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/jigar-sable/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                    <li><a className="github" aria-label="GitHub" href="https://github.com/jigar-sable" target="_blank"><i className="fab fa-github"></i></a></li>
                    <li><a className="twitter" aria-label="Twitter" href="https://twitter.com/jigar_sable" target="_blank"><i className="fab fa-twitter"></i></a></li>
                    <li><a className="telegram" aria-label="Telegram" href="https://t.me/lifecode5" target="_blank"><i className="fab fa-telegram-plane"></i></a></li>
                    <li><a className="instagram" aria-label="Instagram" href="https://www.instagram.com/jigarsable.dev"><i className="fab fa-instagram" target="_blank"></i></a></li>
                </ul>
            </div>

        </div>


        <div className="image">
          <img draggable="false" className="tilt" src={heroImage} alt='' />
        </div>

      </div>

    </div>
  );
}

export default Home;
