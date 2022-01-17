---
path: /how-to-get-started-with-semantic-naming-of-colors
date: 2022-01-14T10:20:08.185Z
title: How to get started with semantic naming of colors
description: Design system
---
In this blog post I'll describe how to get started with semantic naming of colors and why it's a pretty sweet thing.

Instead of writing background "black" you write "primary background". And when you have several color themes for your site like dark mode and light mode you just add the theme to the variable like "primary background lightmode". 

Using semantic naming of colors makes it easier to have a consistent design system that scales. It saves time when creating new components when colors explain their function.

Lets start off in Figma where I create a new color style and name it "foreground/primary".

![](https://jakobmagnusson.se/assets/semantic1a.png)

I use a couple more colors on this site so I added them as color styles as well.

![](https://jakobmagnusson.se/assets/semantic1b.png)

<br />\
We need to export the color styles in order to use them in code. For this I use the plugin [Design Tokens for Figma](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens). With this plugin I can export not only colors but spacing, text, shapes and much more.

![](https://jakobmagnusson.se/assets/semantic1c.png)

In order to get it working just follow [the documentation](https://github.com/lukasoppermann/design-token-transformer#usage), its pretty straight forward. When you have forked the Design Token Transformer repo and enabled Github Actions you'll end up with some sweet looking CSS to use.

![](https://jakobmagnusson.se/assets/semantic1d.png)