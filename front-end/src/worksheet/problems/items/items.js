var movie = {name: 'movie', plural: 'movies',
    quantity: {min: 2, max: 9999, decimal: false, fraction: false},
    buyQuantity: {min: 2, max: 20, decimal: false, fraction: false},
    price: {min: 2, max: 15, decimal: true},
    duration: {min: 55, max:200, decimal: true, fraction: false},
}
var book = {name: 'book', plural: 'books',
    quantity: {min: 2, max: 9999, decimal: false, fraction: false},
    buyQuantity: {min: 2, max: 20, decimal: false, fraction: false},
    price: {min: 2, max: 25, decimal: true},
    duration: {min: 55, max:200, decimal: true, fraction: false},
}
var pokemon = {name: 'Pokemon Card', plural: 'Pokemon Cards',
    quantity: {min: 2, max: 9999, decimal: false, fraction: false},
    buyQuantity: {min: 2, max: 300, decimal: false, fraction: false},
    price: {min: 2, max: 10, decimal: true},
    duration: {min: 0, max:0, decimal: true, fraction: false},
}
var baseballcard = {name: 'baseball card', plural: 'baseball cards',
    quantity: {min: 2, max: 9999, decimal: false, fraction: false},
    buyQuantity: {min: 2, max: 300, decimal: false, fraction: false},
    price: {min: 2, max: 10, decimal: true},
    duration: {min: 0, max:0, decimal: true, fraction: false},
}
var pencil = {name: 'pencil', plural: 'pencils',
    quantity: {min: 2, max: 9999, decimal: false, fraction: false},
    buyQuantity: {min: 2, max: 300, decimal: false, fraction: false},
    price: {min: 2, max: 10, decimal: true},
    duration: {min: 0, max:0, decimal: true, fraction: false},
}
itemList= [movie, book, cracker]

export var itemList = [ "pencils", "erasers", "books", "stickers", "pens", "jelly beans", "candies", "M&Ms", "cookies", "small toys",]


const filterList = (array, prop1, min1, max1, prop2, min2, max2) => {
    var newArray = array.filter(function(item){
      // return item[prop1].min === 2
      return  item[prop1].min > min1 && item[prop1].max < max1 && 
              item[prop2].min > min2 && item[prop2].max < max2
  })
    return newArray
  }
  // let newBook = array.filter(filterList(item))
const userSelectionFilter = (options, prop1, prop2) => {//quanitity / price / duration
    if (options.concept ==='mult-whole'){
        if (options.specify==='3by1') {
            let filteredArray = filterList(array, prop1, 105, 999, prop2, 2, 9)
    
        } else if (options.specify==='3by2'){
            let filteredArray = filterList(array, prop1, 105, 999, prop2, 10, 99)
    
        } 
    }else if (options.concept=''){
            
    }

return filteredArray
}