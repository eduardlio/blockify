# bgs-cs-comm

This is an experimental project to see if i can figure out how extensions work in browsers, in this case firefox. BGS stands for Background Script and CS stands for Content Scripts. These two are components of the extension ecosystem and work together to form part of an extension.

## Context

James Clear talks about the 4 Laws of Behaviour Change: Cue, Craving, Response, and Reward [[0]]. This extension aims to tackle the inversion of the 3rd law: Response by making mindless browsing suck.

|**How to Create a Good Habit**||
|---|---|
|The 1st Law - Cue|Make it obvious|
|The 2nd Law - Craving|Make it attractive|
|The 3rd Law - Response|Make it easy|
|The 4th Law - Reward|Make it satisfying|

|**How to Break a Bad Habit**||
|---|---|
|Inversion of the 1st Law - Cue|Make it invisible|
|Inversion of the 2nd Law - Craving|Make it unattractive|
|Inversion of the 3rd Law - Response|Make it difficult|
|Inversion of the 4th Law - Reward|Make it unsatisfying|

Hopefully it's annoying enough to break a scrolling addiction. Here's what it does to do that:
- Blocks the site(s) of your choosing
- Requires that you actively un-pause the block
- Makes you wait 15 seconds after un-pausing
- Blocks you again after 5 minutes

## FAQs

**What sites have you blocked for yourself?**
- Hacker News
- Reddit
- YouTube
- Instagram
- Facebook

**When click to remove a site from the blocked list, it doesn't remove immediately**
This is deliberate; the extension waits 20s before removing the link. I have a feature in the backlog which will show you which links are in this "queue". You'll be able to cancel removal if you decide against removing it too.

# Installation

## Install as a Temporary Addon

1. Clone the repository
2. In Firefox, go to `about:debugging`
3. Select "This Firefox" in the sidebar
4. Select "Load Temporary Add-on..."
5. Go to where you cloned the repo
6. Open any file

## Install as an actual Addon

Coming soon

## Grant Permissions

This thing needs access to all websites

 1. Navigate to `about:addons`
 2. Select the extension (I think it's called `bg-test`)
 3. Select the Permissions tab
 4. Activate the toggle for "Access your data for all website"

# Configuring

Right now the only configuration available is deciding what websites you can block.

1. Click the extension icon
2. Type the URL of a website you want to block into the input field
  - be sure to use the full url like `www.instagram.com` not just `instagram.com`
3. Click the button next to it
4. Navigate to that URL
5. Voila


# Coming up

- Configurable times
- Add indicator to show items being removed from blocklist
- Reporting
  - how many times did you visit the site
  - how many times did you decide to unblock it
  - how many times you stuck around until after the site was unblocked


[0]: https://jamesclear.com/three-steps-habit-change
