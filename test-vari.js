function getInitials(stringa){
    return  stringa
    .trim()
   .split(/\s+/)             
    .map(word => word[0])   
    .join('')               
    .toUpperCase();   
}
function createSlug(stringa){
    return stringa.toLowerCase()
}

const media = [1,2,3,4,5];

function average(media){
    const sum = media.reduce((acc, num)=> acc + num,0)
    return sum / media.length
}

module.exports = {
    getInitials,
    createSlug,
    average
}