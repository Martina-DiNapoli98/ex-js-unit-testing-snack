const { getInitials, createSlug } = require('./test-vari.js')
/* snack 1 */
test("La funzione getInitials restituisce le iniziali di un nome completo.", ()=>{
    const name = "Mario Rossi"
    expect(getInitials(name)).toBe("MR")
});

/* snack 2 */

test("La funzione createSlug restituisce una stringa in lowercase.",()=>{
    const slug = "Hello World";
    expect(createSlug(slug)).toBe("hello world")
})

 