//Ryan Postma
//Chapter 3 RedBox Kiosk Application
//CMP344


//list object
function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.clear = clear	      
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
}

//eppend function
function append(element) {
	   this.dataStore[this.listSize++] = element;
}//end append

//find function
function find(element) {
	   for (var i = 0; i < this.dataStore.length; ++i) {
		         if (this.dataStore[i] == element) {
				          return i;
			}
	}
	return -1;
}//end find

//remove function
function remove(element) {
	   var foundAt = this.find(element);
	      if (foundAt > -1) {
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true;
		}
	return false;
}//end remove

//length function
function length() {
	return this.listSize;
}//end length

//toString function
function toString() {
	return this.dataStore;
}//end toString

//insert funtion
function insert(element, after) {
	var insertPos = this.find(after);
	if (insertPos > -1) {
		this.dataStore.splice(insertPos+1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}//end insert

//clear function
function clear() {
	delete this.dataStore;
	this.dataStore+ [];
	this.listSize = this.pos = 0;
}//end clear

//traversing list functions
function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize-1;
}

function prev() {
	if (this.pos > 0) {
		--this.pos;
	}
}

function next() {
	if (this.pos < this.listSize-1) {
		++this.pos;
	}
}

function currPos() {
	return this.pos;
}

function moveTo(position) {
	this.pos = position;
}

function getElement() {
	return this.dataStore[this.pos];
}
//end traversing functions


//read through and make an array of movies in txt doc
function createArr(file) {
	var arr = read(file).split("\n");
	for (var i = 0; i < arr.length; ++i) {
		arr[i].trim;
	}
	return arr;
}//end createArr

//creat list of movies
var movieList = new List();

for (var i = 0; i < movies.length; ++i) {
	movieList.append(movies[i]);
}//end for

//display movies available
function displayList(list) {
	for (list.front(); list.currPos() < list.length(); list.next()) {
		if (list.getElement() instanceof Customer) {
			print(list.getElement()["name"] + ", " +
				list.getElement()["movie"]);
		}
		else {
			print(list.getElement());
		}
	}
}//end displayList

//list of customers
var customers = new List();

//create object for customer
function Customer(name, movie) {
	this.name = name;
	this.movie = movie;
}//end customer

//checkout function
function checkOut(name, movie, filmList, customerList) {
	if (movieList.contains(movie)) {
		var c = new Customer(name, movie);
		customerList.append(c);
		filmList.remove(movie);
	}
	else {
		print(movie + " is not available.");
	}
}//end checkOut

//test checkOut() function
/*var movies = createArr("movielist.txt");
var movieList = new List();
var customers = new List();
for (var i = 0; i < movies.length; ++i) {
	movieList.append(movies[i]);
}
print("Available movies: \n");
displayList(movieList);
checkOut("Jane Doe", "The Godfather", movieList, customers);
print("\nCustomer Rentals: \n");
displayList(customrs);*/
//end test

//interactive output section
var movies = createArr("movielist.txt");
var movieList = new List();
var customers = new List();
for (var i = 0; i < movies.length; ++i) {
	   movieList.append(movies[i]);
}
print("Available movies: \n");
displayList(movieList);
putstr("\nEnter your name: ");
var name = readline();
putstr("What movie would you like? ");
var movie = readline();
checkOut(name, movie, movieList, customers);
print("\nCustomer Rentals: \n");
displayList(customers);
print("\nMovies Now Available\n");
displayList(movieList);

