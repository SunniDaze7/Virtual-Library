// import the Media class:
const Media = require('./Media')
// create your Book class:
class Book extends Media{
    constructor(author,numPages,rating, title, year, genre){
        super(title,year,genre)
        this.author = author
        this.numPages = numPages
        this.rating = rating
    }
    summary(){
        return `Title ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    static highestRating(arr){
        arr.push(Book)
        let rate = this.rating
        let result = arr[0]
        for(let i = 0;i < arr.length;i++){
            if(arr[i].rate > result.rate){
                result.rate = arr[i].rate
            }
        }
        return result
    }
}
// don't change below
module.exports = { Book }
