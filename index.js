// Complete the minimumBribes function below.
function minimumBribes(q) {
   let bribes;
   let bribeCheck = {};
   q.forEach(bribe=>{
     if(!bribeCheck[bribe]){
       let i;
    bribeCheck[bribe] = q[i];
        i++     
      }
   })
    console.log(bribeCheck);
    return bribes;
}

let a = [1,3,2,4,5,8,6,7]
minimumBribes(a);