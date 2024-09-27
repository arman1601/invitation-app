import './navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Inviteme</h1>
            <ul>
                <li>Pages</li>
                <li>Orders</li>
                <li>Create Page</li>
                <li>Manage page content</li>
            </ul>
            <h1>Role : admin or moderator</h1>
        </nav>
    )
}