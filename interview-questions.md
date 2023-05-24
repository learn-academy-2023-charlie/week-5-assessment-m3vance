# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Using super in a sub class, allows the subclass to inherit the parameters from the parent class. We do not need to add the inhereted parameters to the subclass, but when adding new parameters to the subclass, we must also initialize and add them to our getter/setter methods if we have them. 

Researched answer: Super can only be called inside a method. A superclass can have many subclasses. We can also use super() if the parent class doesn't have the same number of parameters.

2. What is a gem?

Your answer: A ruby library of code snippets. There are many many different gems that allow us to easily use the codes provided. 

Researched answer: Ruby gems are basically software that we can install and use. They provide us premade custom methods to make life easier. Gems are open source, and anyone can create them. 

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a database system that stores data relative to its other data. For example PostgreSQL.

Researched answer: In relational databases, data is stored in tabs and columns. In non-relational databases, data is stored in individual files that are unrelated to eachother. 

4. What are primary keys? Why purpose does a primary key serve?

Your answer: Primary keys the ID keys of data in a database.

Researched answer: Primary keys are used in relational databases. They uniquely identify records in a table. 

5. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: get - read, put - create, patch - update, delete - destroy

Researched answer: POST is create, and PUT is another update.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: The process of confirming if the model actually serves its purpose

2. RESTful routes: The relation between the 5 http verbs and CRUD

3. ERB: Embedded ruby is a way to return a string in the same characters as the input

4. Params: params allow a variable number of parameters to be passed into a method

5. API: an API is a way for computer programs to communicate with eachother
