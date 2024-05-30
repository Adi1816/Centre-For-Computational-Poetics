import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
import { assets } from '../../assets/assets';

const Navbar = ({ setShowLogin }) => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(LoginContext);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      if ((event.composedPath())[0].className === 'hamburger-menu') {
        setShowMenu(true);
      }
      else {
        setShowMenu(false);
      }
    })
  }, [])

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='navbar'>
      <div className='desktop-menu'>
        <ul className='desktop-menu-texts'>
          <Link to='/'>
            <Button text='Home' />
          </Link>
          <Link to='/about-us'>
            <Button text='About Us' />
          </Link>
          <Link to='/collaborations'>
            <Button text='Collaborations' />
          </Link>
          <Link to='/faculty-team'>
            <Button text='Faculty Team' />
          </Link>
          <Link to='/students-team'>
            <Button text='Students Team' />
          </Link>
          <Link to='/news'>
            <Button text='News' />
          </Link>
          <Link to='/events'>
            <Button text='Events' />
          </Link>
          <Link to='/publications'>
            <Button text='Publications' />
          </Link>
          <Link to='/home/RDL'>
            <Button text='Resources' />
          </Link>
          <Link to='/contact-us'>
            <Button text='Contact Us' />
          </Link>
          {!token ? (
            <Button text='Log In' onClick={setShowLogin} />
          ) : (
            <Button text='Log Out' onClick={logout} />
          )}
        </ul>
      </div>
      <div className='mobile-menu'>
        <div className={showMenu ? 'hamburger-menu' : 'cross'} onClick={handleMenuClick}>
          {!showMenu ? '☰' : 'X'}
        </div>
        {showMenu && (
          <ul className='mobile-nav'>
            <Link to='/'>
              <Button text='Home' />
            </Link>
            <Link to='/about-us'>
              <Button text='About Us' />
            </Link>
            <Link to='/collaborations'>
              <Button text='Collaborations' />
            </Link>
            <Link to='/faculty-team'>
              <Button text='Faculty Team' />
            </Link>
            <Link to='/students-team'>
              <Button text='Students Team' />
            </Link>
            <Link to='/news'>
              <Button text='News' />
            </Link>
            <Link to='/events'>
              <Button text='Events' />
            </Link>
            <Link to='/publications'>
              <Button text='Publications' />
            </Link>
            <Link to='/home/RDL'>
              <Button text='Resources' />
            </Link>
            <Link to='/contact-us'>
              <Button text='Contact Us' />
            </Link>
            {!token ? (
              <Button text='Log In' onClick={setShowLogin} />
            ) : (
              <Button text='Log Out' onClick={logout} />
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
