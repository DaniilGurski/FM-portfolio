# Frontend Mentor - Minimalist portfolio website solution

This is a solution to the [Minimalist portfolio website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/minimalist-portfolio-website-LMy-ZRyiE). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Click the "About Me" call-to-action on the homepage and have the screen scroll down to the next section
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Screenshot

![](/screenshots/home.jpg)
![](/screenshots/portfolio.jpg)
![](/screenshots/contact.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Gulp](https://gulpjs.com/) - Task runner, scss compiler

### What I learned
In this project, it was necessary to frequently load images in different resolutions. I did it with the help of the picture tag and special markings for the browser that let it know when to load a larger image. It was a bit new thing to do for me. I wonder if there's a way to make it faster and more afficient ?

```html
<!-- Loading different images for screens with different pixel density --> 
<picture>
    <!-- Tablet -->
    <source media="(min-width: 48em)" 
            srcset="/dist/img/homepage/tablet/image-homepage-hero.webp 688w,
                    /dist/img/homepage/tablet/image-homepage-hero@2x.webp 1376w">
    <source media="(min-width: 48em)" 
            srcset="/dist/img/homepage/tablet/image-homepage-hero.jpg 688w,
                    /dist/img/homepage/tablet/image-homepage-hero@2x.jpg 1376w">
</picture>
```

The most difficult thing was to do the overlap effect on the first page, in the hero section (_main.scss). I also used a different type of container for this project. Grid based container. I followed Kevin Powell's video to make it and I can see it being used in my future projects !

```css
/* grid based container */
.container-grid {
    display: grid;
    grid-template-columns: 
    [full-width-start] minmax($container-padding-inline, 1fr)
    [breakout-start]   minmax(0, $breakout-size) 
    [content-start]    min(100% - ($container-padding-inline * 2), $container-max-width) 
    [content-end]      minmax(0, $breakout-size) 
    [breakout-end]     minmax($container-padding-inline, 1fr)
    [full-width-end];
 
    > * {
        grid-column: content;
    }

    padding-top: clamp(rem(80), 8vw, rem(120));
}
```

I made up one more js task besides form validation. In order not to create a couple of pages with the same layout but with slightly different content, I decided to load the necessary information through a json file in just one html file. I'm probably most satisfied with this in terms of js. Im not sure if I did it the most clean way, so feel free to share some tips !


### Continued development
I still need more organization to my JS and use more of it's features before moving to any frameworks. 


### Useful resources

- [Kevin Powell](https://www.youtube.com/watch?v=2QYpkrX2N48) - About srcset, loading suitable images on different screen sizes. 
- [Kevin Powell](https://www.youtube.com/watch?v=c13gpBrnGEw) - About grid based container
- [Kevin Powell](https://www.youtube.com/watch?v=CVKbe4RaUZQ) - Overlapping grid


## Author
- Frontend Mentor - [@DaniilGurski](https://www.frontendmentor.io/profile/DaniilGurski)


