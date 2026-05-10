import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Sidebar from "../Layout/Sidebar";
 
// Day 5 Challenge — PageLayout component
function PageLayout({
  children,
  sidebar = false,   
  posts = [],        
  isLoggedIn = false,
  onLogin,
}) {
  return (
    <div className="layout">
      <Header isLoggedIn={isLoggedIn} onLogin={onLogin} />
 
      <div className={`layout-body ${sidebar ? "layout-with-sidebar" : ""}`}>
        {/* Main content area — anything passed as children renders here */}
        <main className="main-content">{children}</main>
 
        {/* Conditional rendering: only show sidebar if prop is true */}
        {sidebar && <Sidebar posts={posts} />}
      </div>
 
      <Footer />
    </div>
  );
}
 
export default PageLayout;