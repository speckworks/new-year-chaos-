// Complete the minimumBribes function below.
function minimumBribes(q) {
   let bribes = 0, i, j;
    for (i = 0; i < q.length; i++) {
        const pos = q[i], at = i + 1;
        if (pos - at > 2) { return "Too chaotic" } 
        for (j = Math.max(0, pos - 2); j < i; j++) {
            if (q[j] > pos) { bribes++ }
        }
    } 
return bribes;
}