# Fast Linkedin Connection Remover
A Javascript snippet that makes it faster to mass remove Linkedin connections. It's very painful to go through the full three click process to remove a single connection, so I made it so that it's one click. Not the sexiest JavaScript in the world but it does the job. This script makes removing connections on Linkedin one click with some simple JS. It adds a red "X" button next to your connections which makes it very easy to remove many folks at once.

**Steps**
1. Make sure that you are logged onto Linkedin and navigate [here]([url](https://www.linkedin.com/mynetwork/invite-connect/connections/)).
   
2. Once there, open your dev tools in whatever browser you are using (I tested this in Brave and Chrome).
**Note:** This page will show only a subset of your connections at once - you can sort by Recently Added, First Name, or Last Name. By default, the script will only add the red X to the subset that is shown (this is slightly annoying, I know). You can scroll all the way down to show all your connections (LI will keep loading new ones until you get to the end)

3. Once you are satisfied with the connections that show, copy / paste the script from the JS file in this repo in the "Console" tab and you'll see the X show up. Hit the X and boom!
<img width="744" alt="image" src="https://github.com/user-attachments/assets/428d359c-1c0c-4493-bf67-cbc33a17c132">

