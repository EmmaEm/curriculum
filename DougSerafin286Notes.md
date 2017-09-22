if you see this, yell at doug and serafin - we should have rebased it away before the pull request!

https://github.com/LearnersGuild/curriculum/issues/286


Notes for planning:
1. Go into digest/skills.js and add properties for links to markdown files
1. those markdown file names will be parsed in identifyable way - and don't neccesarily need to match id's
1. the view will load the markdown by using














You wanted to see our branch when we arrive at a pre-alpha stage - we have a working showcase just some bugs to fix involving comma parsing etc. - plus figuring out an automated way to pre-populate "useful" info in all those README.md files. (currently populated with dummy text)

https://github.com/hhhhhaaaa/curriculum/tree/286


12 replies
Serafin Wesnidge [16 minutes ago] 
Currently running into problems making a `webServer` test


Serafin Wesnidge [13 minutes ago] 
Struggling with making tests - for purposes of identifying which "skills" have odd uri encoded id's / names


Jared Grippe [13 minutes ago] 
what are you testing for?


Serafin Wesnidge [11 minutes ago] 
Looping over every folder we created (453 of them) for skills and testing that we can access the URL for each of those (because when we render markdown on the page, it will 302 us, because the markdown can't be found because it's looking for a folder which has %32 and commas etc. in them)


Jared Grippe [6 minutes ago] 
https://github.com/LearnersGuild/curriculum/issues/286


Jared Grippe
[6 minutes ago] 
i updated the spec with some more specifics


Serafin Wesnidge [4 minutes ago] 
Okay. That's a moderately different direction than our approach, we'll tackle that now.

I figured out where I was going wrong earlier, I thought `webServer` in the mocha chai was some sort of chai-http curl like tester, but I just traced it and found out it's our express app itself. No wonder we can't "get" our routes.

We'll abandon the TDD and just switch to matching those new speecs.


Jared Grippe
[3 minutes ago] 
woot!


Jared Grippe
[3 minutes ago] 
the tests you should add should be around the digest properly sucking in these data


Jared Grippe
[3 minutes ago] 
add the "markdownFilePath" property to each skill in the digest and then use that property to read and parse the proper markdown file and then display on the page


Jared Grippe [2 minutes ago] 
each skill markdown file you render should be readable on its own so make the title the skill name and not `#welcome`


Jared Grippe [2 minutes ago] 
there should be a test that asserts a skill markdown file exists for any skill references from a module, if it doesnt then throw an error