// src/app/page.tsx
import Link from 'next/link';
import './styles.css';

export default function Home() {
    return (
        <div className="container">
            <header className="header">
                <h1>Welcome to Dog Adoption</h1>
            </header>
            <main className="main">
                <h2>Available Breeds</h2>
                <div className="card-container">
                    <div className="card">
                        <h3>Bulldog</h3>
                        <p>Bulldogs are gentle and affectionate companions.</p>
                        <Link href="/dogs/bulldog" className="card-link">Adopt a Bulldog</Link>
                    </div>
                    <div className="card">
                        <h3>Beagle</h3>
                        <p>Beagles are curious and friendly dogs.</p>
                        <Link href="/dogs/beagle" className="card-link">Adopt a Beagle</Link>
                    </div>
                    <div className="card">
                        <h3>Poodle</h3>
                        <p>Poodles are intelligent and highly trainable.</p>
                        <Link href="/dogs/poodle" className="card-link">Adopt a Poodle</Link>
                    </div>
                </div>
            </main>
        </div>
    );
}