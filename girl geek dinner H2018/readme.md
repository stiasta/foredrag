# Make Your Own Chatbot!

This short tutorial will guide you through making your very own text based game inside a chat bot.
Google's Dialogflow is the chat bot technology of choice in this tutorial.

## Prerequisites:   
- Google Account

## Task
Add intents so that the chatbot user can exit the room.

## Setup
1. Go to [Dialogflow.com](https://dialogflow.com/)
2. Click *sign up for free*
3. Log into your Google Account
4. You should now see the welcome page to Dialogflow.
    - Click *create agent*
5. You should now see agent setup page
    - Give the agent a name
    - Use English as default langauge. (Note: Norwegian is also a selection, but since we have used English in the premade data this should be used)
    - Click *create*
6. Go to *agent settings* by clicking the cog just under the Dialogflow logo in the left menu.
7. Click *Export and *Import*
8. Download the premade data by clicking this link.
9. Click *import from zip* and upload the premade data.

## Guided tour around Dialogflow
0. Assumption: you have a new and clean agent.

##### Import prebuilt agent
1. Click *prebuild agents*
2. Import the *coffe shop* agent

##### Creating new intent
> An *intent* is a collection of phrases from the users mapped to responses.

3. Click the *intents* menu point
4. Click *create intent*
5. Add a the name "definition of affogato"

> A *training phrase* is an example of input that the user might want to write to hit this intent.
6. Add *training phrases*
    - what is the definition of affogato?
    - what is the definition of an affogato?
    - what is an affogato?
    - what is affogato?
    - affogato

> A response is the answer that the chat bot gives the user if he/she hits this intent.
7. Scroll down and add *responses*
    - An affogato (Italian for "drowned") is an Italian coffee-based dessert. It usually takes the form of a scoop of vanilla gelato or ice cream topped or "drowned" with a shot of hot espresso.

> Context is used to remember things from earlier in the dialog.
8. Scroll back up and add output context
    - text should be definition_of_coffe
    - click the number and set the timeout to 1
9. click *save* 
    - when you see the button turn green the intent should be saved and the test chat is ready.

##### Testing the new intent
10. To the far right of the site there is a *try it now* field.
    - click field and type in "affogato"
    - the output should then be the response added to the intent and a output context with a timeout of 1.

##### Adding a follow up intent
11. To follow up the previous affogato intent we can now create a new intent
    - click the *+* button next to the *intents* menu point.
12. Add the name "definition of karsk"
13. Add input context 
    - text should be "definition_of_coffee"
    - there should also be an output context with the same text.
14. Add training phrases
    - how about karsk?
    
15. Add response 
    - "Karsk is a Norwegian cocktail from the Trøndelag region containing coffee together with moonshine and sometimes a spoon of sugar."
16. click save and test it in the chat.

##### Adding a entities
> An entity is used to identify and pull out information from a phrase.
17. Click the *entities* menu point.
18. Click the *@drink* entity
19. Add a new row to the bottom
    - Name: Lemonade
    - Values: Lemonade, Lemon juice, citrus juice
20. save and try it out the chat by typing
    - can i have a citrus juice.
    
## Tasks
### Using pre built agents from Google
#### Collecting contact information
Purpose: Hand out t-shirts after collecting contact information.
1. Create an intent that starts the dialog
    - add training data with questions ex. "i want a free t-shirt!"
2. Create an intent that collects contact information after the previous intent has triggered the dialog.
3. create parameters for first and last name, e-mail and phone number (use system defined entities). All parameters are required.
4. Add norwegian names and email in the phrases. Connect them to entities if they are not defined. Norwegian first names can be connected to @sys.given-name
5. After the information have been collected, thank the user and say the t-shirt is sent.

#### Support
Setup: Go to the prebuilt agent section and find the agent called support and click import
1. Let the user report a bug
2. Ask if the bug is serious
3. ask if the user has a work around.
4. fill out the answers on the other intents.
    
#### Flights
Setup: Go to the prebuilt agent section and find the agent called flights and click import
Task:
Expand the features of this chatbot by:
1. adding a way to order parking
    - It should be possible to order parking inside or outside
    - if its inside there should be a way to order a car wash as well.
2. order a rental car
    - how many days?
    - what type of car? (large, medium, small, sport)
    - what color?
    - with or without childrens seat.
       
#### Jokes
Setup: Go to the prebuilt agent section and find the agent called jokes and click import
Purpose: Create knock knock jokes!
1. Create a knock knock joke where the bot asks knock knock
2. Flip it around! Create a dialog where the *user* asks, knock knock and the bot joins in answering whos there... etc. (hint: can this be done with 1 intent?)
3. Expand task 1. by adding a variation of knock knock jokes.

#### Tourism
Setup: Go to the prebuilt agent section and find the agent called Tourism and click import
1. Add answers on the intents that are added
2. Expand the bot to handle Norwegian places

#### FAQ
Setup: Go to the prebuilt agent section and find the agent called FAQ and click import
1. create your own FAQ bot! 
2. You can use the prebuild agent for referance

### Importing prebuilt game
This task is a bit tricky since a chatbot without a backend is not really designed to play games.

Setup: 
- create a new agent
- go to agent settings (cog next to agent name)
- go to import/export
- download the zip from this link (https://github.com/stiasta/foredrag/raw/master/girl%20geek%20dinner%20H2018/hr_sjefen.zip)[https://github.com/stiasta/foredrag/raw/master/girl%20geek%20dinner%20H2018/hr_sjefen.zip]
- click import from zip
- go to intents menu
- start the game dialog by saying start in the chat
- the game is incomplete and ends when when the user enters the elevator with the flash light

Task: Finish the story by having the user find the lost lunch box. Use your own imagination.

1. Finish the "click button" intent with response and context so that you dont suddenly fall back earlier in the story.
2. Create intents with input and output context that follows a story line. Perhaps you meet someone that you have to collect some information from?

