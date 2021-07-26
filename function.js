// Holiday API: https://holidayapi.com/docs
const key = "c26a6ed7-f28d-4cc8-9a61-fbc09690ec06";
let language = "en";
let country = "US"

/* API endpoint to get holiday data */
// const apiUrl = `https://holidayapi.com/v1/holidays?pretty&key=${key}&country=${country}&year=2020&language=${language}`
import { urls } from "./wp-settings.js"

export const getPosts = async () => {	
	try {
		const response = await this.fetch(urls.POST);
		if (response.ok) {
			const jsonResponse = await response.json();
			console.log(jsonResponse.posts)
			return jsonResponse.posts;
		}
		throw new Error('Request Failed');
	} catch(error) {
		console.log(`Oops! ${error}!`)
	};
}

export const getCategory = async () => {	
	try {
		const response = await fetch(urls.CATEGORIES);
		if (response.ok) {
			const jsonResponse = await response.json();
			console.log(jsonResponse.categories)
			return jsonResponse.categories;
		}
		throw new Error('Request Failed');
	} catch(error) {
		console.log(`Oops! ${error}!`)
	};
}