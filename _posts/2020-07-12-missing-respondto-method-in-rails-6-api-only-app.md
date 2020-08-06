---
layout: post
title: Missing respond_to method in Rails 6 API only app
date: '2020-07-12T15:48:06-04:00'
tags:
- rubyonrails
---
For Rails 6 API mode only, the `respond_to` method is missing. Say you wanted to use Devise for user authentication; you’ll need to have it respond to the `json` format.

      # config/routes.rb

      scope :api, defaults { format: :json } do
        devise_for :users
      end

There we have the routes scoped to the `/api` namespace and restricting the format to only `json` requests.

In the controller is there we’ll set the `respond_to :json`.

      # app/controllers/application_controller.rb

      class ApplicationController < ActionController::API
        respond_to :json
      end

This will complain about the missing `respond_to` method. Resolving this issue is by simply inlcuding the [MimeResponds class](https://api.rubyonrails.org/v6.0.0/classes/ActionController/MimeResponds.html).

      # app/controllers/application_controller.rb

      class ApplicationController < ActionController::API
        include ActionController::MimeResponds
        respond_to :json
      end

This was documentated in the [Rails API](https://api.rubyonrails.org/v6.0.0/classes/ActionController/API.html#class-ActionController::API-label-Adding+New+Behavior).
