---
path: /how-to-get-started-with-semantic-naming-of-colors
date: 2022-01-16T10:20:08.185Z
title: How to get started with semantic naming of colors
description: Design system
---
In this blog post I'll describe how to get started with semantic naming of colors and the benefits of working with it. Semantic naming of colors is using "foregroundPrimary" and not using "green", now let's dive into how you apply it.

![](https://www.jakobmagnusson.se/assets/semantic-1.png)

**Example design**

Here's our example design, as you can see its just a text with underline and a background.

![](https://www.jakobmagnusson.se/assets/semantic-2.png)

**Semantic naming of example design**

The text color is the first color in the foreground, so it's "foreground/primary". Underline color is the second color in the foreground it's "foreground/secondary. And the background color is "background/primary" since there's only one.

![](https://www.jakobmagnusson.se/assets/semantic-3.png)

**Visualise the color scheme**

Now that we have established a naming convention let's add the color scheme as cards in Figma. It gives everyone an easy way to overview the "one source of truth" for colors in the design system library.

![](https://www.jakobmagnusson.se/assets/semantic-4.png)

**Add a dark color scheme**

The dark mode of the color scheme is just an inverted version of the light color scheme. Add a second row of cards for the dark scheme and "/dark" and "/light" at the ending of the string for each color scheme.

![](https://www.jakobmagnusson.se/assets/semantic-5.png)

**Add as color styles in Figma**

Go ahead and add both of your new colors schemes as color styles in Figma. It should look something like this when finished. 

![](https://www.jakobmagnusson.se/assets/semantic-6.png)

**Install Design Tokens**

[Design Tokens](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) for Figma is a plugin that lets you export all kinds of tokens like colors, spacing and typography to code. It's a simple way to have Figma as your source of truth for a design system. So let's go ahead and install the plugin.

![](https://www.jakobmagnusson.se/assets/semantic-7.png)

**Make the tokens useable**

We need to use [Design Tokens Transformer](https://github.com/lukasoppermann/design-token-transformer) to transform our exported tokens into working variables for each programming language. There's a few steps in order to get it working, the documentation is pretty straight forward.

Our tokens are now formatted with the right syntax for CSS ready to be used.
<br />

That was the final step, I hope you found this blog post useful.