# Chapter 2
These are my thoughts on the code quality of the Colorize project, as related the book "Clean Code" by Robert Martin, chapter 2.

## Table of public identifiers and their explanations

| Identifier name and explanation | Reflection and rules from "Clean Code" |
| --- | --- |
| `ColorGenerator` <br /> Class name that is used to generate colors | **Use Intention-Revealing Names** <br /> The name of the class suggests its purpose, to generate colors. It is however not very specific, we do not know what kind of colors are generated,in which format or how we are to use them. In my opinion, it is still a name that is informative enough, because the methods in the class reveal its specificity. <br /> <br /> **Pick One Word per Concept** <br /> I have been using the word "generate" consistently throughout the project when a new color is given/created for the user. |
| `FontColorHelper` |  |
| `generateLightColor/generateDarkColor()` |  |
| `checkIfCompliantWithWCAGAA()` |  |
| `suggestWhiteOrBlackFont()` | |

## Overall reflection on Chapter 2 - Meaningful names

# Chapter 3
These are my thoughts on the code quality of the Colorize project, as related the book "Clean Code" by Robert Martin, chapter 3. 

## Table with longest method names in the project and their explanations

## Overall reflection on Chapter 3 - Functions

# Overall reflection on the project's code quality