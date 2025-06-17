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
function createSlugTwo(stringa){
    return stringa.toLowerCase().replace(/\s+/g, '-')

}

const media = [1,2,3,4,5];

function average(media){
    const sum = media.reduce((acc, num)=> acc + num,0)
    return sum / media.length
}

const str = "Otto"
 function isPalindrome(str){
      const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      const reversedStr = cleanStr.split('').reverse().join('');
       return cleanStr === reversedStr
 }


 const title = ""
 function createSlugThree(title){
    if(title === ""){
        throw new Error("il titolo non può essere vuoto")
    }
 }

 function findPostById(posts, id){
    if(isNaN(id)){
        throw new Error(`${id} non è un id`)
    }
    posts.forEach(p=>{
        if(p.id === undefined || p.title === undefined ||p.slug === undefined ){
            throw new Error("Array non è un nel formato corretto")
        }
    })
    return posts.find(p=>{
        return p.id === id || null;

    })
}



module.exports = {
    getInitials,
    createSlug,
    average,
    createSlugTwo,
    isPalindrome,
    createSlugThree,
    findPostById
}