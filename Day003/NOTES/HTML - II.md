# HTML - II [ 01/07/2025 ]

---

## Attributes:

- Attributes are the properties of the element which adds extra information.
- All HTML elements can have attributes.
- All attributes should be given in the starting tag/opening tag.

![Untitled (2).png](Untitled_(2).png)

## Atribute Types

- Mostly, attributes will exist in pairs like → attribute = “ value “
    - here, value can be in double quotes ( “ “ ) or single quotes ( ‘ ‘ ).
- Some attributes will exist as single & won’t have value → boolean attributes

## LIST in HTML:

HTML Lists are used to specify list of items.

There are 3 types of Lists in HTML, they are:

- Ordered List
- Unordered List
- Description List

## Ordered List `<ol>` :

- The `<ol>` tag represents an ordered list of items.
- But to actually display the list of items, we need to use `<li>` tag → list item
- Content enclosed within `<li>` tag only are displayed as list.

```html
<ol type="I" reversed start="2">
        <li>ONE</li>
        <li>TWO</li>
        <li>THREE</li>
        <li>FOUR</li>
</ol>
```

There are several attributes that can be used within this `<ol>` tags

- type → describes the list numbering type. [1, a, A, i, I. There is no "none"]
- reversed → describes the list numbering in reverse manner
- start → used to predefine the start No. of list numbering. [It should always be in 1,2... NOT roman or alphabetical]
    - if we give both start & reversed attributes together, then the numbering will start from given start value & then decrease.
    - This is the same case with type = "A" (or) "I", after "0" they will display in -ve numbers

## UnOrdered List `<ul>` :

- The `<ul>` element represents an unordered list of items.

```html
<ul type="none">
        <li>Eat</li>
        <li>Code</li>
        <li>Sleep</li>
        <li>Repeat</li>
</ul>
```

- type -> describes the list numbering type. [square, circle, disc & none]

<aside>
💡 `<li>` tags can be used to directly to display the list of items
→ But by default, it displays content in un-ordered list
→ These behave as an individual elements, hence we cannot change the type of list items all together even with `<div>` tag
→ As these are NOT contained within `<ul>`, these will have the same indentation as rest of the elements [ If these are enclosed within `<ul>` these will have a tab of indentation

</aside>

## Description List:

- The `<dl>` element represents a description list.
    - Instead of `<li>`, it has 2 elements called `<dt>` & `<dd>`
    - The `<dt>` → "description term" element specifies a term in the list.
    - The `<dd>` → "description detail" element provides the description/definition/value for the preceding term (`<dt>`)
    - There is NO specific rule that `<dd>` should always come after `<dt>` , These can come in any of the combination
        - `<dt>` always have same indentation as the before element *[just like Normal elements but NOT like <ol> & <ul>]*
        - `<dd>` always will have a tab of indentation from `<dt>`

```html
     <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language</dd>

        <dt>HTML</dt>
        <dt>CSS</dt>
        <dt>JS</dt>
        <dd>All of the above 3 technologies together forms FrontEnd Development</dd>
        <dd>But to get a job we need to know atleast 1 JS framework like React (or) Angular</dd>
    </dl>
```

## Anchor Element `<a>` :

- `<a>` tag → used to add links in our webpage
    - `<a>` tag converts a normal text into “hypertext”
    - “href” → hypertext reference is REQUIRED attribute for `<a>` tag
        - This will have the destination/linked page URL
        - We can give “href” values using 2 ways
            - `Absolute` Add → giving full address of website
                - Mostly used while describing Websites/Webpages
            - `Relative` Add → giving address which is relative to absolute address
                - Mostly used while describing local files [ File System ]
    - “target” → it describes where to open the destination/linked page. [_blank, _self, _parent & _top]
    - “download” → used to download the file
- To create links that open in the user's email application so as to let them send a new mail
    - < a href = “ mailto: kumar.jallipalli@gmail.com “ > Mail to Kumar </a>
- To link Telephone numbers,
    - < a href = “ tel: +9988774455 “ > Call to Kumar </a>

<aside>
💡 Strong Text link → The content inside a link should indicate where the link goes [ even out of context ].
Weak Text link → It doesn’t indicate where the link goes & just says “click here” or “here”.

</aside>

## Image Element `<img/>` :

- `<img/>` element is used to embed/add images in web pages
- The ”src” attribute is ***REQUIRED***, and contains the URL which points out to the image to be embeded/added.
    - We can give the value for “src”
        - Locally → by downloading the img & giving it’s path in the “src”
        - Online → the whole image’s absolute address from internet as the URL
- The ”alt” attribute holds the textual replacement for the image, which is mandatory and **incredibly useful** for accessibility
    - screen readers read the attribute value out to their users so they know what the image means.
    - Alt text is also displayed on the page if the image can't be loaded for some reason
        - for example, network errors, content blocking, or linkrot.
    - Setting this attribute to an empty string (`alt=""`) indicates that this image is *not* a key part of the content & broken img symbol is not displayed as well
- “loading” → Indicates how the browser should load the image
    - eager → Loads the image immediately, even if image is currently NOT within the visible viewport (default value).
    - lazy → Defers loading the image until it reaches a calculated distance from the viewport, as defined by the browser.
        - The intent is to avoid the network and storage bandwidth needed to handle the image until it's reasonably certain that it will be needed.
        - This generally improves the performance of the content in most typical use cases.

## Practice Q-2:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice Q - 2</title>
</head>
<body>
    <h1>List of Fruits</h1>
    <ul>
        <li>Apple 
					<a href="https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg">
					see an apple</a> </li>
        <li>Orange 
				<a href="https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg">see an Orange</a> </li>
        <li>Mango 
				<a href="https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg">see an Mango</a> </li>
    </ul>
</body>
</html>
```

## More HML Tags:

`<br/>` tag → used to give line breaks

`<hr/>` tag → used to give Horizantal Rule [a line]

`<u>` tag → used to Underline the text content

`<b>` tag → used to Bold the text content

`<i>` tag → used to italicize the text [format] content

<aside>
💡

NOTE:

---

For semantic emphasis, 

- use `<strong>` instead of `<b>` and
- `<em>` instead of `<i>`

in HTML. `<strong>` indicates strong importance, while `<b>` is purely for visual bolding. 

Similarly, `<em>` adds semantic emphasis, whereas `<i>` is for presentational italics. 

</aside>

## Comments:

- Comments in HTML are ignored by browser & it won’t be displayed to End-User.
- Comments are generally used by developers for better documentation purpose, so that the other developer can understand it [code].
    - i.e., Comments are used to give some information about the code

## Practice Q - 3:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practice_Q3 - Portfolio Page</title>
</head>
<body>
    <h1>SIVA JALLIPALLI</h1>
    <p>I'm a Software Developer</p>
    <img src="" alt="Siva Jallipalli">

    <h2>Education</h2>
    <ul>
        <li>M.Tech [CIM] <b>CGPA: <i>7.3</i></b></li>
        <li>B.E [Mech] <b>CGPA: <i>6.6</i></b></li>
    </ul>

    <h2>SKILLS</h2>
    <ul>
        <li>Programming Languages: <b>JAVA, JS, Python</b></li>
        <li>DataBase: <b>MySQL, MongoDB</b></li>
        <li>FrontEnd Techlogies: <b>HTML, CSS, JS, React</b></li>
        <li>BackEnd Techlogies: <b>Node.js, Express.js, JAVA</b></li>
        <li>Cloud Computing: <b>AWS</b></li>
    </ul>

    <h2>HOBBIES</h2>
    <ul>
        <li>Playing AAA games</li>
        <li>Playing Cricket & Batminton</li>
        <li>Reading Manga</li>
    </ul>

    <h2>CONTACTS</h2>
    <ul>
        <li><a href="mailto:kumar.jallipalli@gmail.com">Email</a></li>
        <li><a href="https://www.linkedin.com/in/siva-jallipalli-753a06251/">LinkedIn</a></li>
        <li><a href="tel:+91 7306594940">Telephone</a></li>
    </ul>

    <h3>Made with &hearts; by SJ</h3>
</body>
</html>
```

## Assignment -1

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment_1 - HTML_II</title>
</head>
<body>

<!-- Qs1. Use the correct HTML tag to add a paragraph with the text "Hello World!". -->
<p>Hello World, This is the 1st Question from the 1st Assignment</p>

<!-- Qs2. Mark up the text with appropriate tags:
        "Delta” is the most important heading.
        "Full Stack Web Development" is the next most important heading.
        "MERN Stack" is the third most important heading.
        The last sentence is just a paragraph.
        Start with the most important heading (the largest) and end with the least 
                    important heading (the smallest).
                    __ Delta __
                    __ Full Stack Web Development __
                    __ MERN Stack __
                    __ Let's begin our learning journey! __
-->
<h1>Delta</h1>
<h2>Full Stack Web Development</h2>
<h3>MERN Stack</h3>
<p>Let's begin our journey..!</p>

<!-- Qs3.Create a clickable link that redirects to the url : https://www.apnacollege.in/  -->
<p>Wanna go to Apna College Website..! Click here..
<a href="https://www.apnacollege.in/">Apna College</a></p>

<!-- Qs4. You are given the rank list of few students, create an ordered HTML list to display 
the list given below :
        1. Deepak
        2. Epsita
        3. Lakshita
        4. Tanmay
        5. Agrim 
-->
<ol>
    <li>Deepak</li>
    <li>Epsita</li>
    <li>Lakshita</li>
    <li>Tanmay</li>
    <li>Agrim</li>
</ol>

<!-- Qs5. Reading about these topics on mdn:
        - Hr Tag in HTML
        - HTML Entities 
-->

</body>
</html>
```