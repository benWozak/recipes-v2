'use server'
import * as cheerio from 'cheerio';
import postgres from 'postgres';
 
export async function parseRecipeData(url: string) {
  const html = await fetch(url).then((x) => x.text())
  const $ = cheerio.load(html)

  //@ts-ignore
  const jsonRaw = $("script[type='application/ld+json']")[0].children[0].data
  const recipeData = JSON.parse(jsonRaw)
  // console.log(recipeData)

  let result = {}
  if (recipeData.hasOwnProperty('@graph')) {
    // console.log(recipeData['@graph'].find((item: any) => item['@type'] === 'Recipe'))
    result = recipeData['@graph'].find(
      (item: any) => item['@type'] === 'Recipe'
    )
      // console.log(result)
    // TODO: reform data for response
    if(!!result) {
      return result
    } else {
      // TODO: update error log 
      return {error: 'This recipe site is not currently supported. Please contact ya boi.'}
    }
  } else {
    // Display Error message and offer report request via email
    return { error: 'This website does not appear to have a recipe. If you dispute this, please contact ya boi.' }
  }
}

/**
 * testing DB function
 * 
 * @returns Database version info
 */
export async function testDatabaseConnection() {
  const DATABASE_URL = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}`
  const sql = postgres(DATABASE_URL, { ssl: 'require' });
  const response = await sql`SELECT version()`;
  console.log(response);
  return response;
}