/*! csv v0.0.1 | MIT | © Hannes Dröse https://github.com/hd-code/js-snippets */
export function serialize(e){const t=extractKeys(e);return stringifyRows([t,...makeRows(e,t)])};export function parse(e){const[t,...n]=extractRows(e);return parseObjects(t,n)};function extractKeys(e){const t={};for(let n=0,r=e.length;n<r;n++){const r=e[n];for(const e in r)t[e]||(t[e]=!0)}return Object.keys(t)}function makeRows(e,t){const n=[];for(let r=0,s=e.length;r<s;r++)n[r]=makeRow(e[r],t);return n}function makeRow(e,t){const n=[];for(let r=0,s=t.length;r<s;r++){const s=t[r];n[r]=e[s]}return n}function stringifyRows(e){return e.map(e=>stringifyRow(e)).join("\n")}function stringifyRow(e){return e.map(e=>stringifyEntry(e)).join(",")}function stringifyEntry(e){return void 0===e||"function"==typeof e?"":escape("object"==typeof e?JSON.stringify(e):""+e)}function escape(e){return hasToBeEscaped(e)?'"'+e.replace(/"/g,'""')+'"':e}function hasToBeEscaped(e){return e.includes(",")||e.includes('"')||e.includes("\n")}const regexRow=/(([^\n"])|("([^"]|"")*"))+/g,regexEntry=/(([^,"])|("([^"]|"")*"))+/g,regexEscaped=/("([^"]|"")*")/g,regex2Quotes=/""/g;function extractRows(e){const t=e.match(regexRow);if(!t)return[["invalid file"]];const n=[];for(let e=0,r=t.length;e<r;e++)n.push(extractRow(t[e]));return n}function extractRow(e){const t=e.match(regexEntry);return null===t?[]:t}function parseObjects(e,t){const n=[];for(let r=0,s=t.length;r<s;r++)n.push(parseObject(e,t[r]));return n}function parseObject(e,t){const n={};for(let r=0,s=e.length;r<s;r++)void 0!==t[r]&&(n[e[r]]=parseValue(t[r]));return n}function parseValue(e){switch(e){case"":return;case"null":return null;case"false":return!1;case"true":return!0}const t=+e;return isNaN(t)?isEscaped(e)?unescape(e):e:t}function isEscaped(e){return regexEscaped.test(e)}function unescape(e){return e.substring(1,e.length-1).replace(regex2Quotes,'"')}