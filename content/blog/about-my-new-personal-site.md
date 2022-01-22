---
path: /things-i-learned-building-my-new-site
date: 2022-01-03T09:51:43.230Z
title: Things I learned building my new site
description: Portfolio
---
Welcome to my new site. As a designer interested in code I decided to try and build a site on my own this time. I'd like to share a few useful resources I used. 

![](https://jakobmagnusson.se/assets/site1.png)

[Design+Code](https://designcode.io/)\
I've been interested in React for quite a while and started off by taking courses by Meng Too at Design+Code. I find his courses easy to follow since he has a design background and most of the chapters is about building things that actually work. 

![](https://jakobmagnusson.se/assets/site2.png)

[Gatsby](https://www.gatsbyjs.com/)\
Frontend framework that gives you a head start when building web. For this project I used a template that gave me a working start page and CMS, pretty convenient!

Then I just wrote all of the frontend in React. Since its mostly styled with CSS and I used components it went rather fast, using the simple principle of Atomic Design. What took the most time was configuring the components to display the different GraphQL fields I needed.

![](https://jakobmagnusson.se/assets/site3.png)

For building and deploying I used [Netlify](https://www.netlify.com/). Its super simple to hook up your Github repo and you can build both master and branches. As a last step I configured my DNS settings for the domain so it pointed towards Netlify.<br />

If you're interested [here's a link](https://github.com/jakobmagnus/portfolio) to the repo of this site. Thanks a lot [Oscar Hillestad](https://github.com/Poggen) and [Prakash](https://github.com/prakashdraws) whom helped me out when I got stuck :)