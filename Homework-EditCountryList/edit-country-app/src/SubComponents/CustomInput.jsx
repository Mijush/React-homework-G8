import React from 'react';

class CustomInput extends React.Component  {
   
    // THIS IS NOT HOW REACT WORKS
    // PROPS AND THE STATE ARE IMMUTABLE
    // countryName = 'I WILL DECIDE';
    
    render () {

        const { onNameChange, countryName } = this.props;

    return (
        <div>
        <input className='our-input' onChange={onNameChange} value={countryName} />
        
        </div>
    )
    }
}

export default CustomInput;