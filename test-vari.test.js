const { getInitials } = require('./test-vari.js')

test("La funzione getInitials restituisce le iniziali di un nome completo.", ()=>{
    const name = "Mario Rossi"
    expect(getInitials(name)).toBe("MR")
})