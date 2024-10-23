import './styles/navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import { Modal } from '../components/modal/Modal';

export const Navbar = () => {
    // Храним ID активной секции
    const [activeSection, setActiveSection] = useState('');
    const [isOpen,setIsOpen] = useState(false);
    // Функция для установки активной секции при клике
    const handleSetActive = (sectionId) => {
        setActiveSection(sectionId);
    };

    // Используем IntersectionObserver для автоматического изменения активного элемента при скролле
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 });  // threshold означает, что 70% секции должно быть в видимости для активации

        sections.forEach(section => {
            observer.observe(section);
        });

        // Чистим наблюдатель при размонтировании компонента
        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <nav className='navbar'>
                <ul className='navbar-list'>
                    <li
                        className={`desktop-only navbar-item ${activeSection === 'main' ? 'active' : ''}`}
                        onClick={() => handleSetActive('main')}
                    >
                        <Link smooth to="#main">Գլխավոր</Link>
                    </li>
                    <li
                        className={`desktop-only navbar-item ${activeSection === 'about' ? 'active' : ''}`}
                        onClick={() => handleSetActive('about')}
                    >
                        <Link smooth to="#about">Ավելին</Link>
                    </li>
                    <li
                        className={`desktop-only navbar-item ${activeSection === 'catalog' ? 'active' : ''}`}
                        onClick={() => handleSetActive('catalog')}
                    >
                        <Link smooth to="#catalog">Ցանկ</Link>
                    </li>
                    <li
                        className={`desktop-only navbar-item ${activeSection === 'contacts' ? 'active' : ''}`}
                        onClick={() => handleSetActive('contacts')}
                    >
                        <Link smooth to="#contacts">Կոնտակտ</Link>
                    </li>
                    <li
                        className={`navbar-item-order`}
                        onClick={() => { handleSetActive('order'); return setIsOpen(true) } }
                    >
                        <Link smooth to="#order">Պատվիրել</Link>
                    </li>
                    <li 
                        className='navbar-item-top  mobile-only'
                        onClick={() => alert(1)}
                    >
                        top
                    </li>
                </ul>
            </nav>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}/>
        </>
    );
};
