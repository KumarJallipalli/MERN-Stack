# HTML - I

---

## What is HTML..?

- HTML describes the structure & format of the webpage
    - i.e., it tells the browser, what, where & how to display the content
    - Structure → Describes what & where the contents to be displayed
    - Format → Describes How the contents to be displayed.
- HTML is Case-Insensitive language [ ⇒ Tags are also Case-Insensitive ]

<aside>
💡

NOTE:

---

- HTML is used to build Web Pages,
- We CANNOT build Websites using HTML
- To Build Website, we require Front-End, Back-End & DB
</aside>

## Browser

- Purpose of browser [like chrome, edge..] is to read the HTML doc, render it & display it correctly.
- browser doesn't display the HTML tags, but it uses tags to determine what, where & how to display the content of webpage.

<aside>
💡 HTML Doc -> Rendered by Browser -> Displayed to User as Web-Page

</aside>

## What is Markup Language..?

- ML uses markup tools [ like HTML tags ] to annotate/mark-up the text. i.e., why called Mark-Up language
    - Annotate -> It is to format/style the text so that, it will stand out from the remaining text.

<aside>
💡

NOTE:

---

Hence, HTML is Not just any Language but a "Mark-Up Language".

It is not just a Mark-Up Language, but a "Hyper Text Mark-Up Language".

`Hypertext/Hyperlink` → text that links one webpage to another webpage, either within a single website or between websites.

</aside>

## What is a HTML TAG..?

- `HTML Tag` → A keyword that tells the browser how to render the content of HTML document.
    - WKT, HTML is the Structure of Web Page
    - Then, HTML Tag is the actual component which is used to design the structure of webpage.
- With the help of tags, a web browser can distinguish between an HTML content and a simple content.

## What is HTML Element..?

- [ Opening tag   +   Content   +   Closing tag ]
- All together is called an HTML element

![Untitled (1).png](Untitled_(1).png)

## Attributes:

- Attributes are the properties of the element which adds extra information.
- All HTML elements can have attributes.
- All attributes should be given in the starting tag/opening tag.

![Untitled (2).png](Untitled_(2).png)

## **HTML Boilerplate Code**:

- `boilerplate code` → sections of code that are repeated in multiple places with little to no variation
- This is the standard format or template of writing HTML code

```html
<!DOCTYPE html>
<!-- 
    [Case-InSensitive] 
    → It tells the browser that it is a HTML V5 document. [So that browser will render according to V5 rules]
-->

<html lang="en">    <!-- → here "lang" attribute describes the language in which this document is written -->
<!-- 
    - <html> tag is the root tag.
    - Everything we want to write, we have to write inside <html> tag.
-->

<head>
<!-- 
    <head> → which contains all the meta data of the html doc, which generally not shown to user.
        - meta data means “data about data” i.e., head contains data about html data.
            - meta data like → charset, title, viewport, style, fevicon etc…    
        - It will have the data which is imp from the developer point of view but not from users
-->

    <meta charset="UTF-8">
    <!-- 
        UTF-8 is a character encoding standard similar to ASCII [which stores only 192 char] but stores a large amount of char 
        across from hindi, telugu & other lang alphabets and symbols etc… 
    -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 
        - viewport → screen/display visible to us that actually displays the content
        - width = device-width → show the width of viewport as the device’s width [like mobile, desktop accordingly]
        - initial-scale = 1.0 → It is the zoom ratio at the time of 1st load. set this zoom level to 1 [i.e., 100%, means no zoom] 
    -->
    <title>HTML BASICS - I</title>
    <!-- 
        - This describes the title of the webpage itself & is shown on the tab area along with favicon
				- Google searches the google queries based on the title tag inside the head tag. i.e., why title tag is V.Imp for SEO
    -->
</head>

<body>
<!-- 
    <body> → It contains the actual html content or "data to be displayed to user".
        - It will have the data which is imp from end user point of view
-->
</body>
</html>
```

## H - tags

- h-tag → HTML section heading tag.
- Heading tags in HTML are used to give a title or subtitle to a section of the webpage.
- It consists of total 6 levels of section headings
    - `<h1>` - `<h6>` with `<h1>` being the highest section level & `<h6>` being the lowest section.
    - As `h1` is an important part of SEO & used to give the Main Keyword to the whole content.
        - i.e., why Use `<h1>` tag only once in entire document & it is a good practice
- Some of these h-tags are lesser in size compared to p-tag [ p-tag == h4-tag without bold ].

![Untitled (3).png](Untitled_(3).png)

### Why h-tags are only upto h6..?

- As 5 levels are mostly sufficient for heading purpose of a document but 6 levels being the standard defined by SGML.
- After h6, all the numbers will behave like a `<span>` tag

## P-tag:

`<p>` paragraph tag is used to display text content as paragraphs on a web page.

- `<p>` tag have same text size as `<h4>` tag [ without bold ]
- `<p>` tags can also be used for line breaks.

<aside>
💡

NOTE:

---

- HTML ignore all the extra spaces & lines.
- HTML only knows the tags & entities
    - i.e., why we need to specify those extra required spaces & lines in terms of tags & entities only.
</aside>

## br - tag:

- <br/> → is used to give a line break in a webpage

## b - tag**:**

- `<b>` describes the bold format of text enclosed within it.

## There are 2 ways of writing code in HTML

- **Syntax** → All about rules of writing code [Must follow]
- **Semantics** → All about proper way of writing code [ Must follow for SEO purpose only ]

<aside>
💡 Indentation → Proper Spacing.

Emmet → shortforms of code snippet.

</aside>

## Types of HTML Tags

- `Container tags` → An element which has both opening & closing tag AND can have some content within it, Hence called Container tags
- `Empty tags` → An element which has NO closing tag, so it cannot have content within it Hence called as Empty tags.

## What happens when we close an “empty tag”..?

- Empty tags can only  be defined as `<br>` (or) `<br />`
- So, if we write  ⇒ `<br> </br>`
- it will only consider 1st tag & omit 2nd tag ⇒  only get executed once
- But in some cases, it is executed twice
    - **<br> </br> -> executed TWICE
    - <hr> </hr> -> executed ONCE

## Practice Q-1

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice Qs - 1: Recreate the content using Tags</title>
</head>
<body>
    <h1>Avengers</h1>
    <hr>
    <h2>Iron Man</h2>
    <p>Also goes by name <b>Tony Stark</b></p>
    <h2>Captain America</h2>
    <p>Also goes by name <b>Steeve Rogers</b></p>
    <h2>Hulk</h2>
    <p>Also goes by name <b>Bruce Banner</b></p>
</body>
</html>
```

## Points to remember

1. Even if we don’t write html, body & head tags and directly write h1 or p tag with some content, it will display the data on browser. Since browser itself creates those tags internally.
2. If we write diff paragraphs or give more than 1 or 2 spaces inside p tag, it won’t consider those & always displays as a single paragraph by ignoring all those extra spaces & lines.
    1. We need to use diff p tags to display diff paragraphs or use a special tag called `<br>`
3. Google searches the google queries based on the `<title>` tag inside the `<head>` tag. i.e., why title tag is V.Imp for SEO purpose

## What is an Emmet..?

- Emmet is a plug-in for text editors which greatly improves HTML & CSS workflow
- Emmet Abbreviations are acronyms/shorthand to repetitive Code Snippets
- Emmet speeds up coding.

## What is a plug-in..?

- A plug-in is an additional software component that adds a specific feature to an existing computer program.

## Code

```html
<!-- 
    - Emmet is a plug-in for text editors which greatly improves HTML & CSS workflow
    - Emmet Abbreviations are acronyms/shorthands to repetitive Code Snippets

    - "!" -> is an Emmet which prints the HTML's boilerplate code
-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Content written inside the body tag is actually visible to End USer  -->

    <!-- 
    ## H - tags
        - h-tag → HTML section heading tag.
        - Heading tags in HTML are used to "give a title or subtitle to a section" of the webpage.
        - It consists of total 6 levels of section headings
            - "<h1>" - "<h6>" with "<h1>" being the highest section level & "<h6>" being the lowest section.
            - As "h1" is an important part of SEO & used to give the Main Keyword to the whole content.
                - i.e., why Use "<h1>" tag only once in entire document & it is a good practice
        - Some of these h-tags are lesser in size compared to p-tag [p-tag === h4-tag without bold].
    -->
    <h1>This is Heading 1..</h1>
    <h2>This is Heading 2..</h2>
    <h3>This is Heading 3..</h3>
    <h4>This is Heading 4..</h4>
    <h5>This is Heading 5..</h5>
    <h6>This is Heading 6..</h6>

    <h7>This is Heading 7..</h7>
    <h8>This is Heading 8..</h8>
    This is Just a normal text
    written in multiple paras but treated as a single para
    <!-- 
    ### Why h-tags are only upto h6..?
        - As 5 levels are mostly sufficient for heading purpose of a document but 6 levels being the standard defined by SGML.
        - After h6, all the numbers will behave like a directly written normal text
    
    NOTE:
        - We can directly write text content without any html tags too
        - This text behaves like a <p> tag
    -->

    <!-- 
    ## P-tag:
        "<p>" paragraph tag is used to "display text content as paragraphs" on a web page.
                * <p> tag have same text size as "<h4> tag [without bold]"
                * <p> tags can also be used for line breaks.
    -->
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, veritatis!</p>

    <!-- 
    NOTE:
    ———-
        - HTML ignore all the extra spaces & lines. 
        - HTML only knows the tags & entities
        - i.e., why we need to specify those extra required spaces & lines in terms of tags & entities only.
    -->

    <!-- 
    ## There are 2 ways of writing code in HTML

        - "Syntax"      → All about rules of writing code [Must follow]
        - "Semantics"   → All about proper way of writing code [Must follow for SEO purpose only]
    -->
    

    <!-- /
    ## Types of HTML Tags

        - Container tags:
                → An element which has both opening & closing tag AND can have some content within it
                - Hence called Container tags
        - Empty tags: 
                → An element which has NO closing tag, so it cannot have content within it 
                - Hence called as Empty tags. 
    -->

    <!-- Some more tags -->
    <br>       <!-- <br /> -> used to give line breaks in a webpage -->
    <hr />      <!-- <hr /> -> used to "prints horizantal rule/ divider" in a webpage -->
    This "b" tag <b>Bolds</b> the text       <!-- <b> -> used to bold format the text in a webpage -->
    This "i" tag <i>Italicise</i> the text       <!-- <b> -> used to Italicise format the text in a webpage -->
    This "u" tag <u>Underline</u> the text       <!-- <b> -> used to Underline format the text in a webpage -->

    
    <!-- PRACTICE QUESTIONS -->
    
    <!-- Q1: Recreate the text from given pic using HTML tags -->
    <h2>AVENGERS</h2>
    <h3>Ironman</h3>
    <p>Also goes by the name <b>Tony Startk</b></p>
    <h3>Captain America</h3>
    <p>Also goes by the name <b>Steeve Rogers</b></p>
    <h3>Hulk</h3>
    <p>Also goes by the name <b>Bruce Banner</b></p>

    <!-- Q2: What happens when we close an “empty tag”..? -->
    <!-- 
        NOTE:
        ----
        - we can define empty tags in 2 ways
                1. <br>
                2. <br />
        
        closing an empty tag means => <br> </br>

        Ans:
        ----
        - WKT, Empty tags can only be defined as `<br>` (or) `<br />`
        - So, if we write => <br> </br>
        - it will only consider 1st tag & omit 2nd tag => only get executed once for sure
        - But in some cases, it is executed twice
                - <br> </br> -> executed TWICE
                - <hr> </hr> -> exuted ONCE
    -->
    <hr> <br> </br> <hr />

    <!-- 
    ## Points to remember

        1. Even if we don’t write html, body & head tags and directly write h1 or p tag with some content, 
            it will display the data on browser. Since browser itself creates those tags internally.
        2. If we write diff paragraphs or give more than 1 or 2 spaces inside p tag, 
            it won’t consider those & always displays as a single paragraph by ignoring all those extra spaces & lines.
                1. We need to use diff p tags to display diff paragraphs or use a special tag called `<br>`
        3. Google searches the google queries based on the `<title>` tag inside the `<head>` tag. 
            i.e., why title tag is V.Imp for SEO purpose
    -->
</body>
</html>
```