import React, { useState, useEffect } from "react";
import axios from "axios";

const Tour = (props) => {
	const [ tour, setTour ] = useState();

	useEffect(() => {
		// const id = ;

		axios
			.get(`https://bw-wanderlust.herokuapp.com/api/trip/trips`)
			.then((response) => {
				console.log(response);
				// setTour(response);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	return (
		<div className="save-wrapper">
			{/* <div className="movie-card">
				<h2>{title}</h2>
				<div className="movie-director">
					Director: <em>{director}</em>
				</div>
				<div className="movie-metascore">
					Metascore: <strong>{metascore}</strong>
				</div>
				<h3>Actors</h3>

				{stars.map((star) => (
					<div key={star} className="movie-star">
						{star}
					</div>
				))}
			</div>
			<div className="save-button">Save</div> */}
		</div>
	);
};

export default Tour;
