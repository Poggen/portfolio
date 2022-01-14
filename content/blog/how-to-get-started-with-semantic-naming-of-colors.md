---
path: /how-to-get-started-with-semantic-naming-of-colors
date: 2022-01-14T10:20:08.185Z
title: How to get started with semantic naming of colors
description: Design system
---
In this blog post I'll describe how to get started with semantic naming of colors and why it's a pretty sweet thing.  return

For this site I'm using a slight off-white as a text color, it's the primary color in the foreground. So instead of using "--color-white" or "#FFFFF5" I'm using "foreground/primary".

```
 --color-foreground-primary: #FFFFF5;
```  return
 

Now lets add all of the colors I'm using.

```
  --color-foreground-primary: #FFFFF5;
  --color-foreground-secondary: #1EB972;
  --color-foreground-tertiary: #35DF91;
  --color-background-primary: #000000;
```