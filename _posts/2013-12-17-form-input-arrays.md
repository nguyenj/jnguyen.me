---
layout: post
title: Form input arrays
date: 2013-12-17
tags: web development, Ruby
---

With strong parameters, define the array instants as <code class="language-ruby">:instant_name = []</code> in the controller.

Then the data needs to [serialized](http://api.rubyonrails.org/classes/ActiveModel/Serialization.html) before the model saves the data–so in the model define <code class="language-ruby">serialize :instant_name</code>. However, ignoring empty arrays might be a good thing–so also include

```ruby
before_save { self.instant_name.reject! { |a| a.empty? } }
```

to make sure empty items aren't saved.

To create the array of inputs, in this case use the [text_field_tag](http://api.rubyonrails.org/classes/ActionView/Helpers/FormTagHelper.html#method-i-text_field_tag),

```ruby
text_field_tag(model_name[instant_name][])
```

Providing additional attributes is optional.
