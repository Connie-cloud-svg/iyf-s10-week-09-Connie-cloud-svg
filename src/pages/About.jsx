import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="page about-page">
      <h1>About AlumniHub</h1>

      <section className="about-section">
        <h2>What is AlumniHub?</h2>
        <p>
          AlumniHub is an alumni platform for developers to share ideas, ask questions,
          and learn from each other. Built as a React project for IYF Weekend Academy Season 10.
        </p>
      </section>

      <section className="about-section">
        <h2>Technologies Used</h2>
        <ul className="about-tech-list">
          <li>⚛️ React 18</li>
          <li>⚡ Vite</li>
          <li>🔀 React Router DOM</li>
          <li>🪝 Custom Hooks (useFetch, useLocalStorage, useForm, useToggle)</li>
          <li>🌐 JSONPlaceholder API</li>
          <li>🎨 CSS Custom Properties</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>React Concepts Covered</h2>
        <ul className="about-tech-list">
          <li>✅ Components & Props</li>
          <li>✅ useState & useEffect</li>
          <li>✅ Data fetching with async/await</li>
          <li>✅ Custom hooks</li>
          <li>✅ React Router with dynamic routes</li>
          <li>✅ Loading & error states</li>
          <li>✅ Controlled forms with validation</li>
        </ul>
      </section>

      <Link to="/" className="btn btn-primary">← Back Home</Link>
    </div>
  );
}

export default About;