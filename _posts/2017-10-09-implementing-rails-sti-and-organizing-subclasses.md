---
layout: post
title: Implementing Rails STI and organizing subclasses
date: '2017-10-09T10:20:12-04:00'
tags:
- ruby
- ruby and rails
- sti
---
I won’t be talking about why or when to use Single Table Inheritance–this article is about how to implement and organize your files.

Let’s start off by creating a base class:

    bin/rails genereate model Fruit name:string origin:string amount:integer type:string

For instance, a Gala apple–the name would be Gala and the type would be apple.

Let’s create the Apple subclass:

    bin/rails generate model Fruit::Apple --parent Fruit

By default rails will use the `type` column in Fruit to identify which subclass it should use; but since I’m namespacing our subclasses with `Fruit::` I’ll need to update the Fruit base class to know how to identify it’s subclasses.

    # app/models/fruit.rb
    ...
      def self.find_sti_class(type_name)
        type_name = if type_name =~ /fruit/i
                      "#{self}::#{self.name}"
                    else
                      self.name
                    end
        super
      end
    ...

Then in the subclasses, in this case the Apple class:

    # app/models/fruit/apple.rb

    class Fruit::Apple < Fruit
      def self.sti_name
        'Apple'
      end
    end

Now, define the scopes in the base model for ease of querying via the base model, Fruit:

    # app/models/fruit.rb
    ...
      scope :apples, -> { where(type: 'Apple') }
    ...

That’s pretty much it.
