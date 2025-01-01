import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <body>
                <section>
                    <p>Hi! I'm Katie</p>
                </section>
                <section>
                    <p>Here are some of the projects I have worked on...</p>
                    <Link to="/projects">Projects</Link>
                </section>
            </body>
        </>
    );
};

export default HomePage;