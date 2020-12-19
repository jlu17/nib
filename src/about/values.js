import React from 'react';
import Value from './value';
import valuesData from './data/values';

class Values extends React.Component {
    render() {
        return (
            <div>
                {valuesData.map((valueData) => {
                    return <Value {...valueData} />;
                })}
            </div>
        );
        
        
    }
};

export default Values;