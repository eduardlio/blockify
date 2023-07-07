# bgs-cs-comm

This is an experimental project to see if i can figure out how extensions work in browsers, in this case firefox. BGS stands for Background Script and CS stands for Content Scripts. These two are components of the extension ecosystem and work together to form part of an extension.

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
