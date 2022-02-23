---
path: /built-my-own-radio-player
date: 2022-02-05T17:53:59.018Z
title: Built my own radio player
description: React, Gatsby
---
![](https://jakobmagnusson.se/assets/radioplayer.png)

<br />

### Overview

As a learning project I wanted to build my own radio player. The goal was to build an easy to use player while learning more about React, design tokens and the open API at Sveriges Radio.

<br />

### Challenges

The biggest challenge was to make it as easy as possible for the user to get started. Another challenge was my limited skills in React and using using a public API was something that I've never done before.

<br />

### Solution

I choose to make the simples radio player possible, when you tap an icon of a channel the channel starts playing and when you tap again it stops playing. I wrote it in React, it runs on Netlify and Gatsby. I added a simple audio player as NPM package and created re-useable components for channel icons.

<br />

### Learnings

I learned to find and install NPM packages that I hadn't done before. I also learned to create an re-usable component in React which I used in a grid to create a button for each radio channel. And I also learned how to use the open API at Sveriges Radio in order to connect the audio streams to the re-usable components.

<br />

You can try the radio player by [clicking here.](https://enkelradio.netlify.app/)