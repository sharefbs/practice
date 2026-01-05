package main // Every Go program starts with a package declaration
import "fmt" /*

import (
	"fmt" // Import a package to use its functions
)

func main() {
	fmt.Println("Hello, World!") // Print "Hello, World!" to the console

}

*/

// It is the same as the compact version
// package main; import ("fmt"); func main() { fmt.Println("Hello World!");}

// The compact version is not recommended for larger programs, as it can
// make the code harder to read and understand. It is generally better
// to use the expanded version with proper formatting and comments.

// Variable types
// int, float64, string, bool, struct, slice, map, channel, interface, pointer

//Declaration of variables
//var variablename type = value
//variablename := value //short hand needs to be declared with a value

//package main //example of variable declaration

func main() {
	var student1 string = "John" // string is explicitly declared
	var student2 = "Jane"        // string is inferred
	x := 2                       // int is inferred

	var a string //no declared value is defaulted to empty string
	var b int    //no declared value is defaulted to 0
	var c bool   //no declared value is defaulted to false

	fmt.Println(a) //print empty string
	fmt.Println(b) //print 0
	fmt.Println(c) //print false

	fmt.Println(student1)
	fmt.Println(student2)
	fmt.Println(x)
}
