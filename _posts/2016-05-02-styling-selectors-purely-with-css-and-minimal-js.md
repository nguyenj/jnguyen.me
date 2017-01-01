---
layout: post
title: Styling selectors purely with CSS and minimal JS
date: 2016-05-02
tags: technology
---

There are many jQuery Plugins in the wild to help stylized the <code class="language-markup">select</code> form tag including the dropdown UI. This example will provide a path to stylized the <code class="language-markup">select</code> form tag, not the dropdown. We will continue to support <code class="language-markup">select</code>'s native behavior and continue to use the <code class="language-markup">select</code>'s dropdown UI. This minimal approach will attempt to wrap the <code class="language-markup">select</code> element with a <code class="language-markup">div.select</code>.

By wrapping it, we'll be able to style <code class="language-css">.select</code>; but we'll need to remove all the native UI styling of <code class="language-markup">select</code>.

<script src="https://gist.github.com/nguyenj/3af389038c65e4ce985d90f1a5c00af3.js"></script>
