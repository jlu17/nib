import React from 'react';
import '../css/About.scss';

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome!</h1>
                <iframe className="airtable-embed" src="https://airtable.com/embed/shrJXcWnKC7T5KZnc?backgroundColor=orange" frameborder="0" onmousewheel="" width="100%" height="533" title="Airtable schedule"></iframe>
            </div>
        );
    }
}

export default About;
