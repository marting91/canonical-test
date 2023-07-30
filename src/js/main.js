import '../scss/style.scss';

document.addEventListener( 'DOMContentLoaded', async () => {

  const blogPosts = await fetchPosts();
  loadBlogPosts( blogPosts );
} );

/**
 * Function to load and display blog posts on the page.
 * @param {Array} blogPosts - An array of blog posts data.
 */
const loadBlogPosts = ( blogPosts ) => {

  let html = '';
  blogPosts.forEach( post => {
    html += `
      <div class="col-4 col-medium-2 p-card">
      <header class="card-header">
        <h4 class="p-muted-heading u-no-margin--bottom">${getTaxonomy( post, 'topic' )}</h4> 
      </header>

        <div class="p-card__content">
          <a href="${post.link}">
            <img class="p-card__image" alt="" height="185" width="330" src="${post.featured_media}">
          </a>
          <h4>
              <a href="${post.link}">${post.title.rendered}</a>
          </h4>
          <p><em>By <a href="${post._embedded.author[ 0 ].link}">${post._embedded.author[ 0 ].name}</a> on ${formatDate( post.date )}</em></p>
        </div>
        <p class="card-footer">${getTaxonomy( post, 'category' )}</p>
      </div>
    `
  } );

  document.querySelector( 'section' ).innerHTML += html;
}

/**
 * Function to format a date string in the format "25 August 2020".
 * @param {string} dateString - The date string in the format "YYYY-MM-DDTHH:mm:ss".
 * @returns {string} The formatted date string.
 */
const formatDate = ( dateString ) => {
  return new Date( dateString ).toLocaleString( 'en-UK', { day: 'numeric', month: 'long', year: 'numeric' } )
}

/**
 * Function to get a specific taxonomy term from a blog post.
 * @param {Object} post - The blog post object containing taxonomy data.
 * @param {string} taxonomy - The name of the taxonomy (e.g., 'category' or 'topic').
 * @returns {string} The name of the corresponding taxonomy term, or a default value if not found.
 */
const getTaxonomy = ( post, taxonomy ) => {

  const flatTerms = post._embedded[ 'wp:term' ].flat();

  const termItem = flatTerms.find( term => term.taxonomy === taxonomy );
  return termItem?.name || 'Cloud and Server';
}

/**
 * Function to fetch blog posts data from the specified API URL.
 * @returns {Promise<Array>} A promise that resolves with an array of blog posts data.
 * @throws {Error} If fetching the data fails or the response status is not ok.
 */
const fetchPosts = async () => {
  const res = await fetch( import.meta.env.VITE_API_URL );
  if ( !res.ok ) throw Error( `Failed to fetch posts (${res.status})` );

  return await res.json();
}
