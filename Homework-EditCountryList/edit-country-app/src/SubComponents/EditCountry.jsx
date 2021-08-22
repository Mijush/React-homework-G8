import React, { Component } from 'react';

class EditCountry extends Component {
    constructor(props){
        super(props);
        this.state={
            newValue: ''
        }
    }

    changeCountryName = (e) => {
      this.setState({newValue:e.target.value})
    }

    render() { 

        const { editCountryName, countryName} = this.props;

        return ( 
            <div>
                <input className='our-edit' onChange={this.changeCountryName} value={this.state.newValue} />
                <br />
                <button onClick={() => editCountryName(countryName,this.state.newValue)}>Save</button>
            </div>
         );
    }
}
 
export default EditCountry;