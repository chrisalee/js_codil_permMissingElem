const findMissingNum = (arr) => {
    const sortArr = arr.sort((a, b) => a - b);
    let next = 1;
    let i = 0;
    while(next === sortArr[i]) {
        next++;
        i++;
    }
    return next;
}
