function numberToWords(num) {
    const ones = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
    const teens = ['Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
    const tens = ['','Ten','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
    const thousands = ['','Thousand','Million','Billion'];

    if (num === '0') return 'zero';
    if (num === '') return '';

    let words = '';
    num = num.toString();

    function getChunk(num, chunkSize) {
        let chunkArray = [];
        for (let i = num.length; i > 0; i -= chunkSize) {
            chunkArray.unshift(num.substring(Math.max(0, i - chunkSize), i));
        }
        return chunkArray;
    }

    function chunkToWords(chunk) {
        let chunkWords = '';
        if (chunk.length === 3) {
            if (chunk[0] !== '0') {
                chunkWords += ones[chunk[0]] + ' hundred ';
            }
            chunk = chunk.substring(1);
        }
        if (chunk.length === 2) {
            if (chunk[0] === '1' && chunk[1] !== '0') {
                return chunkWords + teens[chunk[1] - 1] + ' ';
            } else {
                chunkWords += tens[chunk[0]] + ' ';
                chunk = chunk.substring(1);
            }
        }
        if (chunk.length === 1) {
            chunkWords += ones[chunk] + ' ';
        }
        return chunkWords;
    }

    let chunks = getChunk(num, 3);
    for (let i = 0; i < chunks.length; i++) {
        if (chunks[i] !== '000') {
            words += chunkToWords(chunks[i]) + thousands[chunks.length - 1 - i] + ' ';
        }
    }
    return words.trim();
}

generateItemFields();