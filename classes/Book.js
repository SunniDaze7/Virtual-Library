// import the Media class:
const Media = require('./Media')
// create your Book class:
class Book{
    constructor(author,numPages,rating){
        this.author = author
        this.numPages = numPages
        this.rating = rating
    }
    summary(){
        return `Title ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static highestRating(arr){
        let result = arr[0]
        for(let i = 0;i < arr.length;i++){
            if(arr[i].rating > result.rating){
                result = arr[i]
            }
        }
        return result
    }
}
// don't change below
module.exports ={ Book }