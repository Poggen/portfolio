---
path: /system-fonts-for-speed-and-legibility
date: 2022-03-10T17:19:10.984Z
title: System fonts for speed and legibility
description: UI Design
---
I found this neat CSS trick for using system fonts. If you for example are reading this on a Mac with Monterrey then your reading this in San Francisco Pro and on a computer with Windows 10 then its Segoe UI.

<br />

Using the system font is great for several reasons:

1/ Fonts are not externally loaded, blazing fast.

2/ It looks styled to the OS, it just kind of fits.

3/ Always perfectly rendered, fonts never looking blurry.

<br />

```
body {
  font-family: system-ui, Helvetica, Arial, sans-serif;
}
```

The CSS as you can see above is easy to use. As a designer it would be sweet to use this in Figma as well, I'll share how to in an upcoming blog post. 

#### \-

Hope you found this CSS trick useful!