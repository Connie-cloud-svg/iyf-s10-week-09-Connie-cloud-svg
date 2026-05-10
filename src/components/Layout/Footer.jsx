function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Privacy</a>
                <a href="#">Contact</a>
            </div>

            <p className="footer-copy">
                &copy; {currentYear} AlumniHub. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;