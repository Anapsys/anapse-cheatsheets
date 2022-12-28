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
    dom_menu.insertAdjacentHTML( 'beforeend', `<div class="gridRow" id=${rowId}></div>`);
    const thisRow = document.getElementById(rowId)

    //const inner = x;
    for (let y of x) {
        let HTMLele = thisRow.insertAdjacentHTML( 'beforeend', `<a ${sampleCSSStyle} id='squareTile${y}'> #${y} </a>`)
    }
    row++;
}

/**
 * @param {number[]} salary
 * @return {number}
 */
 var averageFailing = function(salary) {
    let salCopy = salary.sort();
    console.log(salCopy);
    let s = salary.length;
    let average = 0;
    for(let i = 0; i < s; i++) {
        average += salCopy[i];
    }
    average -= salCopy[0];
    average -= salCopy[-1];
    return average / (s-2);
};

var averageWorking = function(salary) {
    if(salary.length < 3) return 0
    let min = salary[0],max = salary[0],sum=0
    
    for(let ele of salary){
        if(ele > max) max = ele
        if(ele < min) min = ele
        sum += ele
    }
    return (sum - max - min)/(salary.length-2)
};

console.log(average([[4000,3000,1000,2000]]));
console.log(average([[21000,87000,12000,24000,56000]]));