---
title: Writing a Flarum Extension Building a Custom Field
description: Flarum is incredibly fast, extensible, free and open-source forum software. It has been in development since 2014 and is nearing the end of its beta phase.
authors: ['danilo leal','Rolex']
date: Dec 18, 2024
image: 1686714420css-image-reveal2-300x170.jpg
tags: ['PHP']
---

# What Were Adding
<ul><li>
<p class="description">
<code>
We we’ll allow users to add their Web3 address into their profile. A Web3 address is a user’s cryptographic identity in the Web3 ecosystem – the public part of a public-private keypair (like SSH) representing one’s blockchain-compatible account.

<code>
Note ℹ: the Web3 ecosystem is a new internet of decentralized hosting, self-owned data, and censorship-resistant communication. For a primer on Web3, please see this 15 minute talk at FOSDEM.
</code>

Even if you’re not interested in Web3, this tutorial will be useful. This first part of the tutorial will show you how to build a custom field for a user, and the second part will add the actual Web3 address in a cryptographically secure way.
</p>



# Prerequisites

<p class="description">
We assume you have NodeJS installed and on a recent enough version (12.16+ is OK), and Composer available globally. For your sanity, we also recommend using Yarn instead of npm. PHP, MySQL, and other requirements for Flarum are assumed to be present and running properly.
In the examples below, we’re hosting the local Flarum copy at ubikforum.test, which some screenshots might reflect.
Please also make sure that your forum is in debug mode by setting the appropriate value in config.php:
</p>

# New Extension

```ts
<?php return array(
    'debug' => true,
    'database' => // ...
```

```ts
mkdir packages & cd packages
npx @friendsofflarum/create-flarum-extension web3address
```
<code>
Important ⚠: remember to follow best deployment practices and ignore the packages folder if you’re pushing this Flarum folder to a repo from which you’re deploying your live version.
</code>

- **Fill out the inputs provided by the wizard:**
 - **✔ Admin CSS & JS … no**
 - **✔ Forum CSS & JS … yes**
 - **✔ Locale … yes**
 - **✔ Javascript … yes**
 - **✔ CSS … yes**

<code>
Note ℹ: you’ll want to set Admin CSS & JS to yes if you have plans to work with settings and/or permissions, like letting only some people modify their web3address attribute or similar. In this case, we don’t need it.
</code>

We start a new extension by running the Friends of Flarum boilerplate wizard inside a newly created packages folder in our local Flarum installation’s root folder:

Keep in mind that, due to a bug, the generator doesn’t support numbers in the package name or namespace. As such, it’s best to rename those values after the generation is complete. (For example, you can’t use web3address as the name, but blockchain is fine.)
We also need to compile the JavaScript. It’s best to leave it running in watch mode, so that it’s automatically recompiled on file changes and you can quickly check changes while developing:


```diff
    cd packages/web3address
    cd js
    yarn && yarn dev
```


Note ℹ: you’ll want to leave this running in a terminal tab and execute the rest of the commands in another tab. The dev command activates an always-on task that will occupy the current terminal session.

We then install our newly created extension:

composer config repositories.0 path "packages/*"
composer require swader/blockchain @dev
The first line will tell Composer that it should look for packages we install in the packages subfolder, and, if it doesn’t find them, to default to Packagist.org.

The second line installs our newly created extension. Once it’s in, we can load our forum’s admin interface, activate the extension, and check the console on the forum’s front end for a “Hello world” message. If it’s there, the new extension works.

Adding an extension: add web3 address, Approval, BBCode
</p>
</code>
</ul>


