# Fast Linkedin Connection Remover
A Javascript snippet that makes it faster to mass remove Linkedin connections. It's very painful to go through the full three click process to remove a single connection, so I made it so that it's one click. Not the sexiest JavaScript in the world but it does the job. This script makes removing connections on Linkedin one click with some simple JS. It adds a red "X" button next to your connections which makes it very easy to remove many folks at once.

**Steps**
1. **Log in to LinkedIn** and navigate to the page where your connections are displayed ([here]([url](https://www.linkedin.com/mynetwork/invite-connect/connections/))).

2. **Open Developer Tools** in your browser. You can do this in most browsers (tested in Brave and Chrome) by right-clicking on the page and selecting "Inspect" or by pressing Ctrl+Shift+I (or Cmd+Opt+I on Mac).

3. **Understand LinkedIn's Display Behavior**: LinkedIn only loads a subset of your connections at a time. You can sort them by Recently Added, First Name, or Last Name. The script will add the functionality (a red X) to only the connections that are currently visible. To apply the script to more connections, you need to scroll down until all your connections are loaded.

4. Once you're satisfied with the list of connections displayed, **copy and paste the script from the JS file** (available in the repo) into the "Console" tab of Developer Tools.

5. After pasting the script, you'll see a **red X** appear next to each connection. Simply click the X next to any connection you want to take action on, and that's it—you're done!
<img width="744" alt="image" src="https://github.com/user-attachments/assets/428d359c-1c0c-4493-bf67-cbc33a17c132">

