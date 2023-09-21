# Chapter 2
These are my thoughts on the code quality of the Colorize project, as related the book "Clean Code" by Robert Martin, chapter 2.

## Table of public identifiers and their explanations

| Identifier name and explanation | Reflection and rules from "Clean Code" |
| --- | --- |
| `ColorGenerator` <br /> Class name that is used to generate colors | **Use Intention-Revealing Names** <br /> The name of the class suggests its purpose, to generate colors. It is however not very specific, we do not know what kind of colors are generated,in which format or how we are to use them. In my opinion, it is still a name that is informative enough, because the methods in the class reveal its specificity (they add **meaningful context**). <br /> <br /> **Pick One Word per Concept** <br /> I have been using the word "generate" consistently throughout the project when a new color is created for the user. <br /> <br /> **Don’t Add Gratuitous Context** <br /> In a project that is about colors adding the word Color in front of every class and method may seem unnecessary. I justify this because of "Colorize" being a module, which will be used in other applications. In this case it is important for the user to get a visual pointer that they are using functionality related to colors in their application. |
| `FontColorHelper` <br /> Class that has functionality related to font colors | **Use Intention-Revealing Names** <br /> The concept of a helper if quite abstract, it is unclear in which way the class helps with fonts. We can only make assumptions until we read the documentation or instantiate an object in order to use the public methods. <br /> <br /> **Make Meaningful Distinctions** <br /> This is the only class in my public interface that introduces the word "font", in order to distinguish that its functionality is above the other 2 public classes. |
| `generateLightColor/generateDarkColor(color)` <br /> Method name used to generate light/dark colors | **Use Intention-Revealing Names** The methods specify their functionality through the name. However it is not specified in which format the color is generated or what a light/dark color is defined as. For this the user has to read the documentation. I found it quite difficult to insert all the information required in a method name. <br /> <br /> **Use Pronounceable Names** <br /> As related to the previous point I tried to keep the names succint while delivering information to the user. <br /> <br /> **Use Pronounceable Names** <br /> I did not use abbreviations, but tried to think about simple pronounceable words that the user might search for (**searchable names**). |
| `checkIfCompliantWithWCAGAA(color1, color2)` <br /> Method name that checks compliability with WCAG AA standards, between 2 colors | **Use Solution Domain Names** <br /> If a user (in this case familiar with web design/development) is looking for WCAG AA compatibility functionality, the method name offers just that. <br /> <br />  **Make Meaningful Distinctions** <br /> The method is very easily mistaken with another method which checks if the font is WCAG AAA compliant. The distinction is only one "A" and would lead to confusion and missuse of the 2 methods. <br /> <br /> **Use Intention-Revealing Names** <br /> It is also not specified what are we comparing in this method, or how many things we are comparing. The user would have to read the documentation. |
| `suggestWhiteOrBlackFont(color)` <br /> Method name that suggests white or black font | **Use Intention-Revealing Names** <br /> The functionality is self-explanatory. However, is it not obvious that the user has to enter a parameter for the method to suggest a white/black font. A better name would have been `suggestWhiteOrBlackFontFrom(color)` <br /> <br /> **Use Pronounceable Names** <br /> The method name is verbose and too paticular to solving a problem. All the words are fully spelled out so it is easy to understand what it does. |

## Overall reflection on Chapter 2 - Meaningful names

# Chapter 3
These are my thoughts on the code quality of the Colorize project, as related the book "Clean Code" by Robert Martin, chapter 3. 

## Table with longest method names in the project and their explanations

## Overall reflection on Chapter 3 - Functions

# Overall reflection on the project's code quality