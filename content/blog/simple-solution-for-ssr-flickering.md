---
path: /simple-solution-for-ssr-flickering
date: 2022-02-08T09:49:41.794Z
title: Simple solution for SSR flickering
description: SSR
---
This is a simple solution for background that is flickering. For example you have a site with black background and when the site is loaded you get a white flash. That's because your browser doesn't know what background color is going to be loaded. 

So the problem is general and the solution is pretty specific. I use Gatsby and had this problem since I have a black background color. 

In order to solve this just add background color to your gatsby-ssr.js file like this:

```
exports.onRenderBody = ({setBodyAttributes,}) => {
    
    setBodyAttributes({
      style: {
        backgroundColor: '#000000',
      },
    });
  }
```