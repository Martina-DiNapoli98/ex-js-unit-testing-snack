const { getInitials, createSlug, average, createSlugTwo } = require('./test-vari.js')
/* snack 1 */
test("La funzione getInitials restituisce le iniziali di un nome completo.", ()=>{
    const name = "Mario Rossi"
    expect(getInitials(name)).toBe("MR")
});

/* snack 2 */

test("La funzione createSlug restituisce una stringa in lowercase.", ()=>{
    let slug = "Hello World";
    expect(createSlug(slug)).toBe("hello world")
});

 /* snack 3 */

const media = [1,2,3,4,5];

 test("La funzione average calcola la media aritmetica di un array di numeri.", ()=>{ 
    expect(average(media)).toBe(3)
 });

/* snack 4 */

 test("La funzione createSlugTwo sostituisce gli spazi con -.", ()=>{
    let slug = "Hello World"
    expect(createSlugTwo(slug)).toBe("hello-world")
 })


