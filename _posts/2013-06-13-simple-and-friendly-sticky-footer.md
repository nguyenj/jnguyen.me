---
layout: post
title: Simple and friendly sticky footer
date: 2013-06-13
tags: web development, css, html, semantics
---

Coding is very similar to writing. To tell a story, one needs to craft a foundation to give context. Giving context can mean providing the big picture, like a map. In this case, an introduction, a body, and a conclusion; equivalently to coding, the header, the main content, and the footer blocks.

This foundation should be apparent when scanning the markup. Some may argue that markup may not matter and CSS is strictly responsible for the presentation. While this is also true, it is the utmost importance to maintain the flow of reading even if the CSS is disabled. Not to mention, this is great practice for accessibility reasons.

Nevertheless, onward to the Sticky Footer effect. When trying to get the footer to stick to the bottom of the screen, the structural integrity of the code still needs to stay intact; header, main content, and footer-nothing outside of those three containers; however, with one exception of a page or a wrap block containing those three blocks. The code structure should not be altered to achieve the appearance of how it’s rendered, leave that to the CSS.

```html
<div class="page">
  <header class="page-header" role="banner">...</header>
  <div class="page-main" role="main">...</div>
  <footer class="page-footer" role="contentinfo">...</footer>
</div>
```

```css
html,
body {
  min-height: 100%;
  height: 100%;
}
.page {
  min-height: 100%;
  position: relative;
}
.site-main {
  padding-bottom: 3em; /* must be equal to the overall height of the #footer */
}
.site-footer {
  height: 3em;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
```
