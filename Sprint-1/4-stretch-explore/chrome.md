Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`

>alert("Hello World!")
the pop up box:chrome://new-tab-page says  Hello world!  i press ok button, return undefined.the pop up box pauses JS execution until press ok
<.undefined
>myName = prompt("What is your name")
<.'ping'
Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below and press Enter to allow pasting.
allow pasting
The value returned from prompt() is stored in the variable myName.
The pop-up box pauses JavaScript execution until the user responds by either:

typing a value and pressing OK → returns the input string, or

pressing Cancel → returns null.
This return value can then be used in the program, for example:

console.log("Your name is:", myName);


In some Chrome setups, I may need to grant permissions to allow pop-ups for prompt to work properly in DevTools.



