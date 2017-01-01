---
layout: post
title: How Ruby Array#slice works
date: 2016-02-22
tags: technology
---

I've been slowly working through the [Ruby Koans](http://rubykoans.com) to sharpen my basic ruby fundamentals and came accross [Arrary#slice](http://ruby-doc.org/core-2.2.0/Array.html#method-i-slice).

What got me stumped for the first couple of minutes:

```ruby
array = [:peanut, :butter, :and, :jelly]
assert_equal [], array[4,0]   # = []
assert_equal nil, array[5,0]  # = nil
```

Initially, I thought both assertions should be <code class="language-ruby">nil</code>; however, re-reading the [Arrary#slice](http://ruby-doc.org/core-2.2.0/Array.html#method-i-slice) documentation, I've realized I've misunderstood how it worked (<code class="language-rubu">ri Array#slice</code> for the command line). The response given on [Stack Overflow](http://stackoverflow.com/questions/3568222/array-slicing-in-ruby-looking-for-explanation-for-illogical-behaviour-taken-fr), basically says:

> ...the first number when you slice does not identify the element, but places between elements, in order to be able to define spans (and not elements themselves)

```ruby
# [ :peanut, :butter, :and, :jelly ]
#  0        1        2     3      4
array[4,0]

# [ :peanut, :butter, :and, :jelly ]
#                                 4
# At index 4 with 0 lengths, hence array[4,0] = []
```

In other words, 4 is still within the array-just at the end of the array in the context of slicing. In the case of <code class="language-ruby">array[5,0]</code>, that's just out of range thus we get <code class="language-ruby">nil</code>.
