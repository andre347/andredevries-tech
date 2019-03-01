---
sidebar: auto
sidebarDepth: 1
---

# Regular Expressions

Having Regex, short-hand for Regular Expressions, in your toolkit is a fundamental skill for every data analyst. At the [Dataschool](http://thedataschool.co.uk) we spend a large chunk of the training program studying this subject. Regex also comes back in many other topics that we teach, this ranges from doing text parsing, to web scraping and analysing text data in Tableau and Alteryx. Knowing Regex doesn't only help you be succesful with these two tools but you can use them in almost all of the main programming languages (JavaScript, Python, R etc.). It is therefore a great 'transferable' skill and knowing how to use it and when to use it gives you a competitive advantage.

In this _mini-study_ guide we're going to take a look at the most common syntax, when you want to use Regex and where you can practice learning it.

## Definition

```
A regular expression is a sequence of characters that describes or matches a given amount of text.
```

The regular expression `data` would match all occurances of the word 'data' insite a piece of text. If you, for example, only want to match the word 'data' at the beginning of a sentence you would use `^data` - the `^` is what we call a 'meta-character'. It indicates the start of a sentence. If a sentence doesn't start with the word `data` then it won't be matched.

This is not a complete list of its syntax but definitely should get you _started_.

## Syntax

```
.       - Any Character Except New Line
\d      - Digit (0-9)
\D      - Not a Digit (0-9)
\w      - Word Character (a-z, A-Z, 0-9, _)
\W      - Not a Word Character
\s      - Whitespace (space, tab, newline)
\S      - Not Whitespace (space, tab, newline)

\b      - Word Boundary
\B      - Not a Word Boundary
^       - Beginning of a String
$       - End of a String

[]      - Matches Characters in brackets
[^ ]    - Matches Characters NOT in brackets
|       - Either Or
( )     - Group

Quantifiers:
*       - 0 or More
+       - 1 or More
?       - 0 or One
{3}     - Exact Number
{3,4}   - Range of Numbers (Minimum, Maximum)
```

## What's the best place to learn it?

You've come to the right place! The main syntax is explained up here ☝️but another really good resource that I use when I teach Regex is [RegexOne](http://regexone.com). It has a good learning curve that goes from the basics and walks you through all of the syntax and becomes gradually more difficult. For testing your expressions I would use a website such as [Regex101](https://regex101.com/) - it has great documentation and syntax highlighting.
