import React from 'react';

class Class extends React.Component {
    render() {
        const brand = 'otto';
        const color = 'red';
        return(
            
            <div>
                <h1>Class Component</h1>
                <brand brand = {brand} color={color}/>
            </div>
        )
    }
}

export default Class;