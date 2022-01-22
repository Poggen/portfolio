---
path: /how-to-get-started-with-semantic-naming-of-colors
date: 2022-01-16T10:20:08.185Z
title: How to get started with semantic naming of colors
description: Design system
---
In this blog post I'll describe how to get started with semantic naming of colors and the benefits of working with it.

![](https://www.jakobmagnusson.se/assets/semantic-1.png)

Here's my example design, as you can see its just a text with underline and a background.

![](https://www.jakobmagnusson.se/assets/semantic-2.png)

Text color is the first color in the foreground, so we name it "foreground/primary". Underline color is the second color in the foreground so we name it "foreground/secondary. And then we have a background color that we name "background/primary".

![](https://www.jakobmagnusson.se/assets/semantic-3.png)

Here we have our color scheme in Figma, let's add a dark color scheme while are at it.

![](https://www.jakobmagnusson.se/assets/semantic-4.png)

It's pretty simple to add a dark color scheme. Just add "/dark" and "/light" at the ending of each string for each color scheme.

![](https://www.jakobmagnusson.se/assets/semantic-5.png)

And here's how it looks as color styles in Figma. Now we have established tokens to be used when designing, this is our only source of truth for colors. Let's send these tokens to code so they can be used as variables.

![](https://www.jakobmagnusson.se/assets/semantic-6.png)

[Design Tokens](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) for Figma is a plugin that lets you export all kinds of tokens like colors, spacing and typography to code. It's a simple way to have Figma as your source of truth for the design system. 

![](https://www.jakobmagnusson.se/assets/semantic-7.png)

We need to use [Design Tokens Transformer](https://github.com/lukasoppermann/design-token-transformer) in order to have the variables useable for each programming language we want to use it for. My example with a light and dark color scheme is ready to be used.

And that's it, I hope you found the idea of using semantic naming of colors useful!