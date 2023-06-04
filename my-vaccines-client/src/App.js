import React from 'react';
import './App.css';
import DataGridCountries from './components/CountriesComponents/DataGridForCountries';
import MyProcedures from './components/MyProceduresComponents/MyProcedures';
import DoneProcedures from './components/DoneProceduresComponents/DoneProcedures';
import LogInPage from './components/LogInComponents/LogIn';
import LogInAdminPage from './components/LogInAdminComponents/LogInAdmin';
import Registration from './components/RegistrationComponents/Registration';
import ChooseTable from './components/ChooseTablesComponents/ChooseTables';
import AddCountry from './components/CountriesComponents/AddCountry';
import EditCountry from './components/CountriesComponents/EditCountry';
import AddProcedure from './components/MyProceduresComponents/AddProcedure';
import DataGridPatientsTypes from './components/PatientsTypesComponents/PatientsTypes';
import AddPatientType from './components/PatientsTypesComponents/AddPatientsTypes';
import EditPatientType from './components/PatientsTypesComponents/EditPatientsTypes';
import Vaccines from './components/VaccinesComponents/Vaccines';
import EditVaccine from './components/VaccinesComponents/EditVaccine';
import AddVaccine from './components/VaccinesComponents/AddVaccine';
import VaccinesMakers from './components/VaccinesMakersComponents/VaccinesMakers';
import EditVaccineMaker from './components/VaccinesMakersComponents/EditVaccineMaker';
import AddVaccineMaker from './components/VaccinesMakersComponents/AddVaccineMakers';
import VaccinesTypes from './components/VaccinesTypesComponents/VaccinesTypes';
import EditVaccineType from './components/VaccinesTypesComponents/EditVaccinesTypes';
import AddVaccineType from './components/VaccinesTypesComponents/AddVaccineType';
import EditProcedure from './components/MyProceduresComponents/EditProcedure';
import PopUp from './components/PopUp';


function App() {
  return (
    <div className='App'>
      <main>
        <h1>
          React popups
        </h1>
        <button>open popup</button>
        <PopUp trigger={true}>
          <div style={{ flexDirection: "column" }}>
            <h3 style={{fontWeight: 400}}>Информация о системе "Календарь прививок"</h3>
            <t style={{color: "red"}}>Данное приложение не заменяет консультацию врача! </t>
            <t>Для того, чтобы сделать отчет, нажмите на иконку Excel,
              для фильтрации процедур пользуйтесь полем фильтрации. </t>
          </div>
        </PopUp>
      </main>
    </div>
  );
}

export default App;
