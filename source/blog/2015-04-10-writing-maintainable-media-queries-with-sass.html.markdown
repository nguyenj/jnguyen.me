---
title: Writing Maintainable Media Queries with SASS
date: 2015-04-10
tags: sass, media-query, responsive
layout: blog_post_layout
---

There are so many media query mixins in the wild, and I like to share the one that I've been using as of late. It's a compilation of all the ones that I've used evoled to fit my workflow needs. This will allow media queries to break depending on a predetermined content breakpoint or a predetermined feature breakpoint.

I typically start off with one breakpoint, `$desktop`. This allows me to start off with a mobile and a desktop layout.

```scss
$desktop: 820px;
```

Now onto the mixin definition. It's quite basic and easy to follow:

```scss
@mixin media($viewports...) {
  $media-query: 'screen';

  @each $view in $viewports {
    $media-query: $media-query + ' and (' + $view +')';
  }

  @media #{$media-query} {
    @content;
  }
}
```

The `media` takes a undetermined number of parameters. This allows for complex media queries if needed for unique situations.

The second part to this mixin are the media feature variables for the `media` mixin to consume. Let's define a few example media features:

```scss
$some_min_width: min-width 640px;
$some_max-width: max-width 980px;
$some_min_height: min-height 800px;
$some_max_height: max-height 1200px;
$orientation_landscape: orientation landscape;
$retina: min-device-pixel-ratio 2;
```

Each media feature varaible with combined with the mixin will outpout:

```css
@media screen and (min-width: 640px) { ... }
@media screen and (max-width: 980px) { ... }
@media screen and (min-height: 800px) { ... }
@media screen and (max-height: 1200px) { ... }
@media screen and (orientatioh: landscape) { ... }
@media screen and (min-device-pixel-ratio: 2) { ... }
```

Or we can define something complex and semi-crazy, this will porbably only be used in a very unique situation; however, it's able to produce the media queries in a maintable and readable fashion. I've broken up the parameters onto it's own line just so we can see how complex and the ability to handle an undefined number of parameters.

```scss
@include media(
    $some_min_width,
    $some_max-width,
    $some_min_height,
    $some_max_height,
    $orientation_landscape,
    $retina) { ...  }
```

This will output to:

```css
@media screen and (min-width: 640px) and (max-width: 980px) and (min-height: 800px) and (max-height: 1200px) and (orientation: landscape) and (min-device-pixel-ratio: 2) { ... }
```

So there you have it, the simplest yet power and maintainable media query mixin. There are many others out there in the wild; however, this has worked for me for various size projects without much effort. I hope you can use this in your next project and evolve it to your needs.

Cheers.
