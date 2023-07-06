# bgs-cs-comm

This is an experimental project to see if i can figure out how extensions work in browsers, in this case firefox. BGS stands for Background Script and CS stands for Content Scripts. These two are components of the extension ecosystem and work together to form part of an extension

## Background Scripts

[Mozilla Docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)
Background Scripts run in the background (wow). They keep track of what's happening in the browser. Activities such as viewing, tab opening/closing, bookmarks, etc.

There are two modles of background scripts: persistent and non-persistent.

- Persistent: Starts when the extension starts, stops when the extension is uninstalled/disabled
- Non-persistent: Starts when triggered. Less resource intensive

In the Manifest V3, only non-persistent scripts are supported.
