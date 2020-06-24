# Attractor

Attractor is a new **geo-marketing** app.

**Advertisers** can employ virtual **Attractors** to make **announcements** in the streets of their cities
and advertise **local businesses** and **events**.

**Subscribers** will hear announcements from **nearby Attractors only**,
so you’ll always know when a new coffee shop opens close to you!

## Setup

You'll need a recent [LTS](https://nodejs.org/en/about/releases/) version of [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads).

[Clone](https://help.github.com/articles/cloning-a-repository/) this repository to your computer and run:

```
npm install          # to install the dependencies of this project
npm test             # to run the tests
npm test -- --watch  # to keep running the tests in the background
```

## Exercise

- Subscriber should receive announcements only when they're within range of an attractor
- Subscriber should receive each announcement exactly once while she's within range
- Announcements have a configurable max TTL

