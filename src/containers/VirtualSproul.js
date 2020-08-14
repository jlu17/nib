import React from 'react';
import '../css/About.scss';

class About extends React.Component {
    render() {
        return (
            <div class="container">
                <h1>Welcome!</h1>
                <iframe class="airtable-embed" src="https://airtable.com/embed/shrJXcWnKC7T5KZnc?backgroundColor=orange" frameborder="0" onmousewheel="" width="100%" height="533"></iframe>
            </div>
        );
    }
}

export default About;
