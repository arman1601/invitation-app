import './styles/footer.css';

export const Footer = () => {
    return (
        <footer className='footer-container'> 
            <div className='footer-container-info'>
                <div>
                    <h1>Lorem ipsum lorem ipsum <br/> lorem ipsum</h1>
                </div>
                <div>
                    <h2>Social pages</h2>
                    <p>
                        The USA — <br />
                        785 15h Street, Office 478 <br />
                        Seattle, WA 81566</p>
                    <ul>
                        <li><img src='/img/social-media/instagram.svg' alt='instagram' /></li>
                        <li><img src='/img/social-media/telegram.svg' alt='telegram' /></li>
                        <li><img src='/img/social-media/whatsapp.svg' alt='whatsapp' /></li>
                    </ul>
                </div>
                <div className='contact-deatils'>
                    <h2>Contacts</h2>
                    <span>info: administration@inviteme.am</span>
                    <span>Phone number</span>
                </div>
            </div>
            <div className='footer-container-rules'>
                <p>ThemeRex c 2024.All rights reserved</p>
            </div>
        </footer>
    )
}