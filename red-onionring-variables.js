// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// --- red-onionring.js is an onionring.js fork with additional features ------------------------------
// --- https://github.com/cheesepak/red-onionring.js --------------------------------------------------

// === ONIONRING-VARIABLES ===
// this file contains the stuff you edit to set up your specific webring

// the full URLs of all the sites in the ring
var sites = [
'https://example.com/',
'https://example.com/',
'https://example.com/',
'https://example.com/'
];

// --- if you are using RedOnionIndex, populate this list as well -------------------------------------
/*      site: the full URL of the site
        title: site title
        owner: username of the webmaster
        description: site description
        icon: the full URL of an icon for the site, leave blank if no icon 
*/
var sitesR = [
    {
        site: 'https://example.com/', 
        title: `Site Example 1`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        owner: `Owner 1`,
        icon: 'https://example.com/img.jpg',
    },
    {
        site: 'https://example.com/',
        title: `Site Example 2`,
        description: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        owner: `Owner 2`,
        icon: 'https://example.com/img.jpg',
    },
    {
        site: 'https://example.com/',
        title: `Site Example 3`,
        description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        owner: `Owner 3`,
        icon: 'https://example.com/img.jpg',
    },
    {
        site: 'https://example.com/',
        title: `Site Example 4`,
        description: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        owner: `Owner 4`,
        icon: 'https://example.com/img.jpg',
    },
]

// the name of the ring
var ringName = 'My Ring';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'my-ring';

// should the widget include a link to an index page?
var useIndex = false;

// the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://example.com/index.html';

// should the widget include a random button?
var useRandom = true;

// red-onionring.js: should the ring be connected alphabetically? This also sorts the index alphabetically
var useSort = false;

// red onionring.js: do you want a more complex index? 
var useRedOnionIndex = true;
