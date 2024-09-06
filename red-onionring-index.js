// onionring.js is made up of four files - onionring-widget.js, onionring-index.js (this one!), onionring-variables.js, and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// --- red-onionring.js is an onionring.js fork with additional features ------------------------------
// --- https://github.com/cheesepak/red-onionring.js --------------------------------------------------

// === ONIONRING-INDEX ===
//this file builds the list of sites in the ring for displaying on your index page

var tag = document.getElementById('index');
regex = /^https:\/\/|\/$/g; //strips the https:// and trailing slash off the urls for aesthetic purposes

list = "";
for (i = 0; i < sites.length; i++) {
  list += `<li><a href='${sites[i]}'>${sites[i].replace(regex, "")}</a></li>`;
}

if(useRedOnionIndex) {
  if(useSort) {
    function compare( a, b ) {
      if ( a.site < b.site ){
        return -1;
      }
      if ( a.site > b.site ){
        return 1;
      }
      return 0;
    }
    sitesR.sort(compare);
  }

  list = "";
  for (i = 0; i < sites.length; i++) {
    //this is the code that displays the index widget - EDIT THIS if you want to change the structure
    list += `
      <div class="sites">
        <div class="icon"><img src="${sitesR[i].icon}"></div>
        <div class="title">${sitesR[i].title}</div>
        <div class="description">${sitesR[i].description}</div>
        <div class="site"><a href='${sitesR[i].site}'>${sitesR[i].site.replace(regex, "")}</a></div>
        <div class="owner">${sitesR[i].owner}</div>
      </div>
    `;
  }
  tag.insertAdjacentHTML('afterbegin', `
    <p>the ${ringName} webring includes ${sites.length} sites</p>
      ${list}
    `);  
}
else { 
  // red-onionring.js: if you've chosen to sort alphabetically, this sorts the sites
  if(useSort) {
    sites = sites.sort();
  }

  list = "";
  for (i = 0; i < sites.length; i++) {
    list += `<li><a href='${sites[i]}'>${sites[i].replace(regex, "")}</a></li>`;
  }
  
  tag.insertAdjacentHTML('afterbegin', `
  <p>the ${ringName} webring includes ${sites.length} sites</p>
  <ul>
    ${list}
  </ul>
  `);
}
