FROM ruby:2.5.3-alpine

RUN apk add --update tzdata \
  && cp /usr/share/zoneinfo/US/Eastern /etc/localtime \
  && echo "US/Eastern" > /etc/timezone

RUN apk add --update \
  build-base \
  nodejs \
  && rm -rf /var/cache/apk/*

WORKDIR /app
COPY Gemfile* ./
RUN bundle install --jobs 20 --retry 5

COPY . /app

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
