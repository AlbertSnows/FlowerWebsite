/** @module recipies
  * Interface for interating with floral recipes
  * A recipe consists of:
  * - a name for the arrangement
  * - a base price for the arrangement
  * - an array of filepaths corresponding to images of the arrangement
  */
const recipeData = require('../data/recipes.json');

/** @function featured
  * Returns an array of [count] featured recipes.
  * @param {integer} count - the number of feaured recipes to return
  * @returns {Recipe[]}
  */
export default function featured(count) {
  return recipeData.slice(0, count);
}
