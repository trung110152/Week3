  // let a = prompt('nhập a');
function binhphuong(x){
    return x * x;
}
// alert(binhphuong(a))
 function circleP_S(r){
    let P = 2 * r * 3.14;
    let S = r * r * 3.14;
    document.write('chu vi la '+P+'<br>'+'diện tích là '+S);
 }
 // circleP_S(a)
 function giai_thua(z){
    if(z===1){
      return 1
    } else{
        return z * giai_thua(z-1);
    }

 }
  // document.write('giai thừa của ' + a+ ' là '+giai_thua(a))
  function check_number() {
      let input = prompt('Nhap ky tu can kiem tra')
      if (Number(input)) {
          console.log(true)
      } else {
          console.log(false)
      }
  }
  function tim_min(){
    alert('số nhỏ nhất là: ' + Math.min(a,b,c))
  }
  function doi_vi_tri() {
      let snt = [];
      let n = +prompt('nhập sô phân tử của mảng ');
      for (let i = 1; i <= n; i++) {
          snt[i] = +prompt('nhập phân tử ' + i);
      }
      snt.reverse().join();
      console.log(snt) ;
  }
  function tim_ky_tu() {
      let kytu = [];
      let n = +prompt('nhập sô phân tử của mảng ');
      for (let i = 1; i <= n; i++) {
          kytu[i] = +prompt('nhập phân tử ' + i);
      }






