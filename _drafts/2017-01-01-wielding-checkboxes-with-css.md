---
layout: post
title: Wielding checkboxes with CSS
date: 2017-01-01
tags: technology, CSS, front-end
---

Styling checkboxes is super simple. With the basic markup, CSS is all that is needed to pull off some awesome creative checkboxes without the use of JavaScript!

Normally, I start off with the basic markup:

```html
<fieldset>
  <input type="checkbox" id="check-me" />
  <label for="check-me">Check Me</label>
</fieldset>
```

Placing those elements inside of a <code class="language-html">fieldset</code> just helps organize the form markup just a bit. In order fully customize the checkboxes, this order cannot be compromised (<code class="language-html">input</code> then <code class="language-html">label</code>)–I'll explain why a little later. The <code class="language-html">for</code> attribute on the <code class="language-html">label</code> element allows the user to click on the <code class="language-html">label</code> which will trigger the <code class="language-html">checkbox</code> input with the same <code class="language-html">id</code> value of the <code class="language-html">for</code> attribute; in other words, this <code class="language-html">label</code> is <code class="language-html">for</code> the <code class="language-html">id</code> value of <code class="language-html">check-me</code>.

Okay, with all the basics out of the way, let's now dive into styling it with pure CSS.

First off, let's hide the actual <code class="language-html">checkbox</code>.
