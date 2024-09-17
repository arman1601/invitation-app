import './styles/navbar.css';
import { ItemButton } from '../components/item-button/ItemButton';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';
import { Modal } from '../components/modal/Modal';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  // const handleOpenModal = setIsOpen(true);
  // const handleCloseModal = setIsOpen(false);

    return (
        <>
          <nav className='navbar'>
              <ul className='navbar-list'>
                  <li className='navbar-item desktop-only'>
                      <Link smooth to="#welcome">Main</Link>
                  </li>
                  <li className='navbar-item desktop-only'>
                      <Link smooth to="#catalog">Catalog</Link>
                  </li>
                  <li className='navbar-item desktop-only'>
                      <Link smooth to="#about">Dev</Link>
                  </li>

                  <li className='navbar-item'>
                      <button className='item-button top-button' onClick={() => window.scrollTo({ top:0, behavior: 'smooth' })}>
                          Top
                      </button>
                  </li>
                  <li className='navbar-item'>
                      <Link smooth to="#order">
                          <ItemButton title={'Order'} onClick={() => setIsOpen(true)}/>
                      </Link>
                  </li>
              </ul>
          </nav>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      </>
    );
};
