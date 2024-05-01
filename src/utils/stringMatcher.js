const stringMatcher = (findString, targetString) => {
    const findArr = findString.split(' ')

    let res = true

    findArr.forEach(el => {
        if (!targetString.toLowerCase().includes(el.toLowerCase())) res = false
    });

    // const res = ["", ...findArr].reduce((acc, el) => {
    //     if (targetString.toLowerCase().includes(el.toLowerCase())) {
    //         return true
    //     }
    // })

    return res
}

export default stringMatcher

// console.log(stringMatcher('ww gf tt', 'wssfwwf ggttgwwggf hh'));
