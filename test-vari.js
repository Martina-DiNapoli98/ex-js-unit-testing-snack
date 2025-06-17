function getInitials(stringa){
    return  stringa
    .trim()
   .split(/\s+/)             
    .map(word => word[0])   
    .join('')               
    .toUpperCase();   
}

module.exports = {
    getInitials
}