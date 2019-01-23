import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider, AppContext } from './contexts/AppContext';


ReactDOM.render(
	<AppProvider>
		<AppContext.Consumer>
			{({ nome }) => <App nome={nome} />}
		</AppContext.Consumer>
	</AppProvider>,
	document.getElementById('root')
);

