function footToMeter(foot){
    let meter = 0.305 * foot;
    alert( foot + ' foot = ' + meter + 'meter');
}
function meterToFoot(meter){
    let  foot = 3.279 * meter;
    alert(foot);
}
let a = +prompt('nhập foot');
let b = +prompt('nhập feet');
footToMeter(a);
meterToFoot(b);