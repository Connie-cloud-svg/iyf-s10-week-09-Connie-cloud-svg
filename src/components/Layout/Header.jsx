function Header ({ isLoggedIn = false, onLogin}) {
    return (
        <header className="header">
            <div className="header-brand">
                <h1>🌐 AlumniHub</h1>
            </div>

            <nav className="header-nav">
                <a href="#">Home</a>
                <a href="#">Posts</a>
                <a href="#">About</a>
            </nav>

            <div className="header-user">
                { isLoggedIn ? (
                    <span className="user-greeting">👤 Welcome back!</span>
                ) : (
                    <button className="btn btn-primary btn-small" onClick={onLogin}>
                        Login
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;