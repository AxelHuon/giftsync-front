export const generateId = (longueur: number = 8): string => {
    const caracteres =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''
    for (let i = 0; i < longueur; i++) {
        const indexAleatoire = Math.floor(Math.random() * caracteres.length)
        id += caracteres.charAt(indexAleatoire)
    }
    return id
}
