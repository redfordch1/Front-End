import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import SelectedTour from "./components/SelectedTours";

function App() {
	return (
		<div className="App">
			<Header />
			<SelectedTour />
		</div>
	);
}

export default App;
