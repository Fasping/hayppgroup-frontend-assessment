# Haypp Group Frontend Assessment

- Task Description in Node js 18.

Your task is divided into two parts. You will have data accessible through our API for solving the problems. This is further described in the API Description section.

Sub-Task 1: Popular Size (5 points)
Find and return the most popular shoe size in the given list of shoe sizes and associated names. If there is no uniquely popular shoe size, return -1.

Sub-Task 2: Popular Name (5 points)
Find and return the most popular name for the most popular shoe size. If there is no uniquely common name, OR if there is no uniquely popular shoe size, return an empty string. Names are case sensitive.

- API Description

The following data is available for you to access through the provided API. Further details about the API functions and the data they provide can be found under the API tab.

Get number of people: Returns the total number of people who there are data for.
Get name: Returns the name of a person based on the persons index. The index starts at 0 and is incremented by 1 for each person.
Get size: Returns the shoe size of a person based on the persons index. The index starts at 0 and is incremented by 1 for each person.
Scoring
Focus on getting the correct output, as this is the major part of your score. You can see your points for each level in the bottom left of the screen when you press 'Run code'. Note that your code will be assessed using other test cases than the levels you see below, so please consider how your code would work for these unknown test cases.

A minor part of your score is calculated through time-complexity analysis of your solution, so if you have time try to consider how to make your solution as fast as possible.

A tip to get started is to press "Run code" to see what happens.

- NOTES

To get started, simply press Run code to see what happens

The Future Skill system will initialise and call your code
Note that you don't need to initialise the class, add any methods or call any functions
A lot of the code you get at the start must remain unchanged:

Method, parameter and class names
Note that you can press "Reset code" to get back to the initial state
What you should change:

What you return in the given methods (initially you might see default returns like -2, "foo" etc.)
Typically your solution code should be in the methods already provided (where you see the comment "Write your code here")
You can create your own methods and call them to calculate your answers.
Do not add your own test cases. Each time you press run code several test levels will be evaluated and you can see the result in the canvas and in the score tab.

this.api.getNumberOfPeople(): number
Returns the total number of people who there are data for.

this.api.getName(index: number): string
Returns the name of a person based on the persons index. The index starts at 0 and is incremented by 1 for each person.

this.api.getSize(index: number): number
Returns the shoe size of a person based on the persons index. The index starts at 0 and is incremented by 1 for each person.
