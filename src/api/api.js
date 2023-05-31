import axios from "axios";

<<<<<<< HEAD
const baseURL = 'https://api.thedogapi.com/v1/breeds';
=======
const baseURL = 'https://api.thecatapi.com/v1/images/';
>>>>>>> 9e54bb7b262fcd7685f3531e4dcddf0eb10b8422

const api = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
        'x-api-key' : 'live_j1OL2UCjF12qMealkshnQ0HApCyig8WkRJ3EJDvS9YYkTB6xKT1oAiVQebPtoWSu'
	}
 
});

export default api;