
1. Viewing Prompts  
Given the User wants to explore different celebrities  
When the User navigates to the public prompts page  
Then the User sees a list of all prompts

Given the User wants to see the prompts they have authored  
When the User navigates to their profile page  
Then a list of prompts created by that user is displayed.

2. Viewing Prompts by Category  
Given the User is interested in prompts of a specific category like "few-shot", "zero-shot", or "chain of thought"  
When the User selects a category from a dropdown menu  
Then the User sees a list of all prompts in that category

3. Creating A New Prompt  
Given the User wants to add a new celebrity prompt  
When the User selects a category from the dropdown and fills out the prompt creation form  
Then a new prompt is created under their user ID and categorized accordingly

4. Editing An Existing Prompt  
Given the User wants to modify an existing prompt  
When the User edits the prompt and submits the changes  
Then the prompt is updated in the database under their user ID

5. Deleting a Prompt  
Given the User decides to remove a prompt they created  
When the User confirms the deletion of a prompt  
Then the prompt is deleted from the database.

6. Viewing Personal Prompt History  
Given the User wants to review the prompts they have created  
When the User navigates to view their profile  
Then they should see a list of prompts they have created

7. Editing User Profile  
Given the User wants to update their profile name  
When the User changes their username and submits the changes  
Then the username is updated across the user's profile in the system

8. Deleting User Profile  
Given the User decides to delete their profile  
When the User confirms the deletion of their profile  
Then the user's profile is deleted, and all prompts authored by the user are removed from public view but remain in the system for data integrity

9. Signing Up
Given the person is not a User
When they decide to register for an account on the registration page
Then a new User object is created in the database
