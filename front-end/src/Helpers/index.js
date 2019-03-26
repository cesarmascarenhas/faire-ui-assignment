export function fillRow(arr){
    let row_count  = arr.length % 5;  
    let fixed_row_in_arr = arr.slice(0);
  
    if(row_count > 0){
          for(let i=0; i < 5 - row_count; i++){
            fixed_row_in_arr.push({fix:true,name:'fixed'+i});
          }
    }
    return fixed_row_in_arr;
}