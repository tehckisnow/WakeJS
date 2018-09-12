# WakeJS
A text-based adventure game engine in Javascript written for practice.
<br />
I have built a simple browser terminal emulator for displaying a text-based game in the browser. Text is outputted to an HTML paragraph element which is followed by an input element that takes user's text, changes game states and calculates a response, then appends it to the previous HTML paragraph element.  (This may likely cause problems when this element becomes too large, so consider changing output to instead add additional text elements, or remove the oldest lines from the text element)

So far a player can move around with commands like "n" or "north", and can review the room description with the "look" or "l" command.
<p>
Todo:<br />
-help should mentions "list" command which will list available commands
-fix get/drop system(it is acting strangely sometimes, not sure about the problem yet)
-up arrow command history<br />
-fix tp debug command (parser does not recognize numbers because they are not in approved keywords list)<br />
-make more object-oriented? (would reduce repeated code and allow for default settings)<br />
-ensure font is displaying correctly on other machines(works locally, but not when hosted)
-import/export map data to a json file to separate game data, manage saving, and swap games.<br />
-tokenize to parse multi-word commands<br />
-"look at x" should return description of x<br />
-inventory, get and drop commands<br />
-doors, locks, keys.<br />
-interactables (considering calling these machines; they are items with states and/or behaviors, e.g. lightswitch.)<br />
-review formatting of room info output<br />
-simplify code (a lot of unnecessary abstraction.  consolidate similar functions or break up into smaller?)<br />
-save<br />
-background image with scanlines<br />
-bootup animation<br />
-code for timers?<br />
-if command is not found in engine, check game's json "customCommands" (this would force using eval() and pose security problems)<br />
-organize items in their own global array and sort by itemID? (likely make sorting, finding, and managing inventory easier, may make map less readable)<br />
-command checker checks all exit names in map? (that's probably unecessary, maybe stratify exits to a master list, like with items)<br />

 <br />
Commands so far:<br />
l<br />
look<br />
n<br />
north<br />
s<br />
south<br />
e<br />
east<br />
w<br />
west<br />
reset<br />
help<br />
i<br />
inventory<br />
inv<br />
g<br />
get<br />
d<br />
drop<br />
test<br />
debug<br />
tp<br />
	

Future commands:<br />
look at, get, take, drop, go, use, inv/inventory/i, 

Updates:

sep 11, 2018
-added debug toggle
-return focus to prompt after "instructions" is clicked (by means of out().)
-exits can now be locked

sep 9, 2018-
-inventory; get and drop; still need to fix issue
-tokenized input; split user input into an array and save only recognized commands into array

older-
-created CSS theme
-instructions link

-help command displays instructions
-