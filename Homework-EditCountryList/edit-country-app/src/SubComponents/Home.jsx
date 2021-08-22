import React, { Component } from 'react';
import CustomInput from './CustomInput';
import CountryList from './CountryList';
import EditCountry from './EditCountry';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            countries: [],
            extraCountries: [],
            editMode: false,
            editableCountry: ''
        }

        setTimeout(() => {
            this.setState({
                'countries': ['Albania', 'Turkey'],
                'extraCountries': []
            })
        }, 6000)
    }

    changeCountryName = event => {
        this.setState({
            country: event.target.value
        })
    }

    addCountryName() {

        const { country, countries } = this.state;
        if (country.length > 0 && !countries.some(currentCountry => currentCountry.toLowerCase() === country.toLocaleLowerCase())) {
            this.setState({
                country: '',
                countries: [...countries, country]
            })
        } else {
            alert('YOU SHOULD INPUT A NOT EXISTING COUNTRY INSIDE THE INPUT FIELD');
        }

    }



    deleteCountry = countryName => {
        this.setState({
            countries: this.state.countries.filter(country => country !== countryName)
        })
    }

    editModeOn = (country) => {
        this.setState({ editMode: true , editableCountry: country});
    }

    editModeOff = () => {
        this.setState({ editMode: false , editableCountry: ""});
    }

    editCountryName = (countryName,updatedName) => {
        console.log(countryName,updatedName)
        const updatedCountries = this.state.countries.map(country => countryName === country? updatedName: country)
        this.setState({
            countries : updatedCountries
        })
        this.editModeOff()
      }

    
    



    render() {

        let { editMode } = this.state

        const editInput = () => {

            if (editMode) {
                return <EditCountry editCountryName={this.editCountryName} countryName={this.state.editableCountry} />
            } else {

            }

        }


        return (
            <div>

                <CustomInput
                    countryName={this.state.country}
                    onNameChange={this.changeCountryName}
                />
                <button onClick={this.addCountryName.bind(this)}>Add Country</button>
                <br />
                <CountryList countries={this.state.countries} onCountryDelete={this.deleteCountry} editModeOn={this.editModeOn} />
                <CountryList countries={this.state.extraCountries} onCountryDelete={this.deleteCountry} editModeOn={this.editModeOn} />
                <br />
                {editInput()}
            </div>
        )
    }
}

export default Home;