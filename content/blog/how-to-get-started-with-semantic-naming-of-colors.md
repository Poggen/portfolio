---
path: /how-to-get-started-with-semantic-naming-of-colors
date: 2022-01-16T10:20:08.185Z
title: How to get started with semantic naming of colors
description: Design system
---
In this blog post I'll describe how to get started with semantic naming of colors and the benefits of working with it.

![](https://www.jakobmagnusson.se/assets/semantic-1.png)

1/ Create an example design

Here's my example design, as you can see its just a text with underline and a background.

![](https://www.jakobmagnusson.se/assets/semantic-2.png)

2/ Example design with semantic naming

Text color is the first color in the foreground, so we name it "foreground/primary". Underline color is the second color in the foreground so we name it "foreground/secondary. And we name the background color "background/primary".

![](https://www.jakobmagnusson.se/assets/semantic-3.png)

3/ Visualise and add as color styles in Figma

Now that we have established our tokens let's add them as color styles in Figma. Presenting colors as cards with their token is an easy way to have them in a design systems library.

![](https://www.jakobmagnusson.se/assets/semantic-4.png)

4/ Add a dark color scheme

It's easy to add a dark color scheme. Just add "/dark" and "/light" at the ending of the string for each color scheme.

![](https://www.jakobmagnusson.se/assets/semantic-5.png)

5/ Inspect the color styles in Figma

And here's how it looks as color styles in Figma. We have established a convention of working with colors in Figma that is easy to maintain. This example design is with six colors but I've used it for professional projects with 30+ color using the same principles.

![](https://www.jakobmagnusson.se/assets/semantic-6.png)

6/ Install Design Tokens

[Design Tokens](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) for Figma is a plugin that lets you export all kinds of tokens like colors, spacing and typography to code. It's a simple way to have Figma as your source of truth for the design system. So let's go ahead and install the plugin.

![](https://www.jakobmagnusson.se/assets/semantic-7.png)

7/ Make the export useable

We need to use [Design Tokens Transformer](https://github.com/lukasoppermann/design-token-transformer) to transform our exported tokens into working variables for each programming language. There's many steps in order to get it working, the documentation is pretty straight forward though. 

Our tokens are now formatted with the right syntax for CSS. If you inspect this page you'll see I'm using these tokens, I just added the repo as a dependency to the repo of this site. Pretty neat!