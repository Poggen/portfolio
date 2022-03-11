---
path: /simple-solution-for-ssr-flickering
date: 2022-02-08T09:49:41.794Z
title: Simple solution for SSR flickering
description: SSR
---
This is a simple solution if your background color is flickering on loading when using SSR. For example a site with a black background that flashes white on loading. That's because your browser doesn't know what the background color is before the site is loaded.

So the problem is general and the solution is pretty specific. I use Gatsby with Netlify and had this problem since I have a black background color. 

In gatsby-ssr.js I added:

```
exports.onRenderBody = ({setBodyAttributes}) => {
    
    setBodyAttributes({
      style: {
        backgroundColor: '#000000',
      },
    });
  }
```

By adding this code the background color is set before the site is built, so no more flickering.

#### \-

That's it, small hacks are easy :)
