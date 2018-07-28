# WakeJS
A text-based adventure game engine in Javascript written for practice.
<br \>
I have built a simple browser terminal emulator for displaying a text-based game in the browser. Text is outputted to an HTML paragraph element which is followed by an input element that takes user's text, changes game states and calculates a response, then appends it to the previous HTML paragraph element.  (This may likely cause problems when this element becomes too large, so consider changing output to instead add additional text elements, or remove the oldest lines from the text element)

So far a player can move around with commands like "n" or "north", and can review the room description with the "look" or "l" command.
<p>
Todo:<p>
-make more object-oriented? (would reduce repeated code)<p>
-out() should create new elements instead of appending, or eliminate the oldest lines after a threshold<p>
-tokenize and parse multi-word commands<p>
-"look at x" should return description of x<p>
-inventory, get and drop commands<br \>
-doors, locks, keys.<br \>
-interactables (considering calling these machines; they are items with states and/or behaviors, e.g. lightswitch.)<br \>
-review formatting of room info output<br \>
-simplify code (a lot of unnecessary abstraction.  consolidate similar functions or break up into smaller?)<br \>
-import/export map data to a json file to separate game data, manage saving, and swap games.<br \>
-tutorial/help command<br \>
 <br \>
Commands so far:<br \>
l<br \>
look<br \>
n<br \>
north<br \>
s<br \>
south<br \>
e<br \>
east<br \>
w<br \>
west<br \>
reset<br \>

Future commands:<br \>
look at, get, take, drop, go, use, inv/inventory/i, 
