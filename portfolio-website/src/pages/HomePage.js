import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>                
            <section>
                <p>Hi! I'm Katie</p>
            </section>
            <section>
                <p>Here are some of the projects I have worked on...</p>
                <Link to="/beaverhub">BeaverHub Redesign</Link>
            </section>
        </>
    );
};

export default HomePage;