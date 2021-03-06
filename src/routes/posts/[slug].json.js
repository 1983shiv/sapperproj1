/* eslint-disable indent */
/* eslint-disable semi */
// routes/blog/[slug].json.js
// import db from './_database.js'; // the underscore tells Sapper this isn't a route
import { urls } from '../../../wp-settings.js';

export async function get(req, res, next) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = req.params;

	const article = await this.fetch(`${urls.POST}slug:${slug}`);

	if (article !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(article));
	} else {
		next();
	}
}