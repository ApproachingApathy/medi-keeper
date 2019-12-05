import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { Provider } from 'react-redux'

import { store } from './redux/store'
import Header from './components/header/Header'
import MedicationInput from './components/MedicationInput'

function App() {
	return (
		<Provider store={ store }>
			<Router>
					<Header />
				<Container maxWidth='md'>
					<MedicationInput />
				</Container>
			</Router>
		</Provider>
	);
}

export default App;
