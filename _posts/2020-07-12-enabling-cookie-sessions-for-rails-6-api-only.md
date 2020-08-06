---
layout: post
title: Enabling cookie sessions for Rails 6 api only
date: '2020-07-12T15:17:29-04:00'
tags:
- rubyonrails
---
As referenced in the [guide](https://guides.rubyonrails.org/api_app.html#other-middleware):

> 4.4 Other Middleware
> 
> Rails ships with a number of other middleware that you might want to use in an API application, especially if one of your API clients is the browser:
> 
> Rack::MethodOverride ActionDispatch::Cookies ActionDispatch::Flash For session management ActionDispatch::Session::CacheStore ActionDispatch::Session::CookieStore ActionDispatch::Session::MemCacheStore

We’ll need to add these back in manually.

    # config/application.rb

    ...
    module App
      class Application < Rails::Application
        config.load_defaults 6.0
        config.api_only = true

        config.middleware.use ActionDispatch::Cookies
        config.middleware.use ActionDispatch::Session::CookieStore,
          key: "custom_cookie_session_name",
          expires_after: 14.days

      end
    end

For more details regarding the [session cookie store, check out the API documentation](https://api.rubyonrails.org/v6.0.0/classes/ActionDispatch/Session/CookieStore.html). That will reference the [rack session abstract persisted class](https://www.rubydoc.info/gems/rack/2.2.3/Rack/Session/Abstract/Persisted) for the available options to use when instantiating the session cookie store.
