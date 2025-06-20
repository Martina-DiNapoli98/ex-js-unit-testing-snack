const { getInitials, createSlug, average, createSlugTwo, isPalindrome, createSlugThree, findPostById} = require('./test-vari.js')

describe("manipolazione di stringhe", ()=>{

    test("La funzione getInitials restituisce le iniziali di un nome completo.", ()=>{
        const name = "Mario Rossi"
        expect(getInitials(name)).toBe("MR")
    });


  const str = "Otto"

 test("La funzione isPalindrome verifica se una stringa è un palindromo.", ()=>{
    expect(isPalindrome(str)).toBe(true)
 });

})

describe("operazioni su array", ()=>{

    const media = [1,2,3,4,5];
    
     test("La funzione average calcola la media aritmetica di un array di numeri.", ()=>{ 
        expect(average(media)).toBe(3)
     });

      const posts = [
  { id: 1, title: "Hello World", slug: "hello-world" },
  { id: 2, title: "Post JavaScript", slug: "post-javascript" },
  { id: 3, title: "React Rocks", slug: "react-rocks" }
];


 test( "la funziona findPostById restituisce il post corretto dato l'array di post e l'id.", ()=>{
    expect(findPostById(posts, 2)).toEqual({ 
        id: 2,
        title: "Post JavaScript",
        slug: "post-javascript"})
        expect(findPostById(posts, 4)).toBe(undefined)
        expect(()=> findPostById(posts, "ciao")).toThrow(' non è un id')
        expect(()=> findPostById([2,5,4,7], 2)).toThrow('Array non è un nel formato corretto')
 })
})


describe("generazione di slug", ()=>{

    test("La funzione createSlug restituisce una stringa in lowercase.", ()=>{
          let slug = "Hello World";
          expect(createSlug(slug)).toBe("hello world")
      });
    
      test("La funzione createSlugTwo sostituisce gli spazi con -.", ()=>{
      let slug = "Hello World"
      expect(createSlugTwo(slug)).toBe("hello-world")
    });

    
  const title = ""
 
 test("La funzione createSlugThree lancia un errore se il titolo è vuoto o non valido.", ()=>{
   
    expect(() => createSlugThree(title)).toThrow("il titolo non può essere vuoto")
    
    
 });

})
 


 
