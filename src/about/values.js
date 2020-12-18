import React from 'react';
import Value from './value';
import valuesData from './data/values';

class Values extends React.Component {
    render() {
        return (
            <div>
                {valuesData.map((valueData) => {
                    return (
                        <Value 
                            title={valueData.title} 
                            description={valueData.description}
                            image={valueData.image}
                            alt={valueData.alt}
                            key={valueData.title}
                            />
                    );
                })}
            </div>
        );
        
        
    }
};

export default Values;