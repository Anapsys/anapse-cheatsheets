// the index.js should be related to handling REQUESTS.
// This routes functionality between your page/site and an application
console.log('test indexjs');

const dom_menu = document.getElementById('menu-container')
const sampleCSSStyle = `style="border: '1px solid #000'"`
//document.body.insertAdjacentElement()

// make a centered grid
const dataGrid = [[1,2,3],[4,5],[6,7,8]]
let row = 0;
for(let x of dataGrid) {
    const rowId = `row${row}`
    dom_menu.insertAdjacentHTML( 'afterbegin', `<div class="gridRow" id=${rowId}></div>`);
    const thisRow = document.getElementById(rowId)

    //const inner = x;
    for (let y of x) {
        let HTMLele = thisRow.insertAdjacentHTML( 'afterbegin', `<a ${sampleCSSStyle} id='squareTile${y}'> #${y} </a>`)
    }
    row++;
}