# StudyBoost App

## Overview
StudyBoost is a student-centric educational app designed to enhance academic performance. It provides personalized study plans, interactive learning modules, and collaborative tools. The app is built using React and Vite for the frontend and Node Express for the backend.

## Introduction

Let's plunge into the depths of StudyBoost, the app that makes studying feel like a breeze.

Imagine your dashboard again. Now, you've got subjects and chapters at your fingertips. Click on a chapter, and there it is—your mission details, neatly laid out. Notes, quizzes, worksheets, and more, all in one place.

Now, let's talk functionality. Every resource in a chapter has a checkbox, except for those VIP notes—they stay right where you need them, at the top. You're the boss here, marking things as done or tracking your progress effortlessly.

But what if you want to add new subjects or chapters? That's where admin mode swoops in. Toggle it on, and you're in the backstage, adding subjects like a pro. Chapters? You got it. Resources? Piece of cake. Toggle it off, and you're back to your focused, daily study mode.

Picture this: you've got flexibility. No rigid, hardcoded lists. You can define your subjects and chapters as your learning journey unfolds. That's like having a study companion that adapts to your needs.

## Key Features
- **Dynamic Content Management:**
  - Users can add, edit, and manage subjects, chapters, and topics.
  - Each chapter can contain notes, quizzes, worksheets, extra practice questions, and other resources.
- **Personalized Study Plans:**
  - Tailored schedules based on user preferences.
- **Interactive Learning Modules:**
  - Engaging lessons covering diverse subjects.
- **Collaborative Tools:**
  - Virtual study groups and discussion forums.
- **Time Management:**
  - Personalized study planners with reminders.
- **Feedback Mechanism:**
  - Instant feedback on quizzes and assignments.
- **Educational Resources Library:**
  - Curated collection catering to various learning styles.
- **Admin Mode:**
  - Toggle between admin mode for content management and daily use mode for studying.

## User Flow

1. **User Registration and Login:**
   - Users sign up with their email and password.
   - Returning users log in to their accounts.

2. **Profile Setup:**
   - New users complete their profiles with relevant details.
   - Returning users can update their profiles as needed.

3. **Dashboard Exploration:**
   - Users land on a personalized dashboard.
   - Dashboard displays a study plan, progress indicators, and upcoming tasks.

4. **Content Management:**
   - In admin mode, users can add, edit, and manage subjects, chapters, and topics.
   - Each chapter can contain notes, quizzes, worksheets, extra practice questions, and other resources.

5. **Interactive Learning:**
   - Users access interactive learning modules from the dashboard.
   - Engage with quizzes, lessons, or interactive content.

6. **Time Management:**
   - Users set up and manage their study schedules using the planner.
   - Receive reminders for upcoming study sessions.

7. **Feedback and Progress Tracking:**
   - Users receive instant feedback on quizzes and assignments.
   - Dashboard displays progress indicators and achievements.

8. **Resource Exploration:**
   - Users explore the educational resources library for additional learning materials.
   - Save or bookmark useful resources for future reference.

9. **Logout:**
   - Users can securely log out of their accounts when finished.

## Technical Architecture

The frontend of the app will be built using React and Vite, which will handle the user interface and user interactions. The backend will be built using Node Express, which will manage the data storage, retrieval, and manipulation. The backend will also handle user authentication and authorization.

The app will have two main modes: admin mode and daily use mode. In admin mode, users can add, edit, and manage the content (subjects, chapters, topics, quizzes, etc.). In daily use mode, users can study, complete tasks, and track their progress.

The app will need a database to store all the user data and content. This app uses MongoDB.

We chose MongoDB for StudyBoost due to its flexible document-oriented data model, which allows us to easily handle dynamic content and scale our learning platform as it grows.

The app will also need to implement secure user authentication and authorization. This could be done using JWT (JSON Web Tokens).


## Some Extra Dev Related Details

### Data Models

#### User
- `id`: Unique identifier for the user.
- `name`: User's full name.
- `email`: User's email address.
- `password`: User's password for authentication.
- `profile`: Additional details about the user (e.g., age, school, interests).

#### Task
- `id`: Unique identifier for the task.
- `name`: Name or title of the task.
- `type`: Type of the task (e.g., 'Notes', 'Quiz', 'Assignment').
- `completionStatus`: Completion status of the task (e.g., 'Completed', 'In Progress', 'Not Started').
- `dueDate`: Due date for the task.
- `details`: Additional details or content related to the task.

#### Subject
- `id`: Unique identifier for the subject.
- `name`: Name of the subject.
- `progress`: Progress of the subject based on the completion of tasks within the subject.

#### Chapter
- `id`: Unique identifier for the chapter.
- `name`: Name of the chapter.
- `subjectId`: Identifier of the subject to which the chapter belongs.
- `progress`: Progress of the chapter based on the completion of tasks within the chapter.

#### Quiz
- `id`: Unique identifier for the quiz.
- `name`: Name or title of the quiz.
- `questions`: Array of questions for the quiz.
- `answers`: Array of answers corresponding to the questions.
- `correctAnswers`: Array of correct answers for the quiz.

#### Assignment
- `id`: Unique identifier for the assignment.
- `name`: Name or title of the assignment.
- `description`: Description or instructions for the assignment.
- `dueDate`: Due date for the assignment.
- `attachments`: Array of attachments or files related to the assignment.


## MVP (Minimum Viable Product)

The MVP of the StudyBoost app will focus on the core functionality that allows students to manage their study materials and track their progress. The following features will be included in the MVP:

- **User Registration and Login:** Users can create an account and log in to the app.
- **Profile Setup:** Users can set up their profiles with relevant details.
- **Dynamic Content Management:** Users can add, edit, and manage subjects, chapters, and topics. Each chapter can contain notes, quizzes, worksheets, extra practice questions, and other resources.
- **Interactive Learning Modules:** Users can access and engage with the learning materials.
- **Feedback and Progress Tracking:** Users can receive feedback on their quizzes and assignments, and track their progress.
- **Resource Exploration:** Users can explore the educational resources library and save or bookmark useful resources.
- **Admin Mode:** Users can toggle between admin mode for content management and daily use mode for studying.

The following features will be added in later versions:

- **Collaborative Tools:** Virtual study groups and discussion forums.
- **Time Management:** Personalized study planners with reminders.
- **Personalized Study Plans:** Tailored schedules based on user preferences.

## Background Thoughts/ Idea Phase:
 - First Thought:I want to make a project idea that helps me practice and learn by doing my self I want to build a project that helps me as a student in class 11 in daily life by making that project be a web app made with react and vite with backend in node express so let's first not go into coding and syntax stuff let's just ideate on the topic.

 - Second Thought:Hmm task management could be but I also want it to help organise all my study materials also in one place my vision.

 - Third Thought: The problem is that I learn new stuff everyday in school as well as in tution classes so what I wanted it was the app helps me consolodate my work and what to do in single place So what it is that for example I have a subject that is Maths then in that right now we are doing the chapter sequence and series in tution andsame in school but are doing different topics and different work What I want is that this app let's me define the subjects and chapters and topics list somewhere and then it displays nicely That is the main screen after login is dashboard which has cards that display names of different subjects then when you choose the subject the list of cards of subjects is shown then I select which chpater we doing then a list of things related to that chpater is there so what type of things could be in a chapter could be Notes, quiz, worksheets, extra practice questions and other stuff.

 - All the things here when we are in the particular chapter are checkboxes so that I can tick them when done but the notes are not the checkboxes as they are pinned to the top for reference all the time Then for functionality to be nice I want that you can toggle between admin mode which adds adding more content like subjects, chapters and things and the other mode is the daily use mode which only allows completion and tracking and using the functionality already defined I want this app to very flexible to everyone as a students need so I don't want to hardcode a subject list of topics list of quiz list so the content the student can add by going into admin mode as a toggle and then come back to daily use mode for daily mode

## Screens:

### Dashbord:
The dashboard screen in the StudyBoost app will serve as the main hub for users to access and manage their study materials. It will provide an organized and structured view of subjects, chapters, and topics, allowing users to track their progress and navigate through their study materials efficiently.

Here is a detailed user flow for the dashboard screen:

1. Upon logging in, the user is directed to the dashboard screen.
2. The dashboard screen displays a list of subjects that the user has added.
3. Each subject is represented by a card, displaying the subject name and the user's progress in that subject.
4. The user can click on a subject card to view the chapters and topics within that subject.
5. The dashboard screen updates to display the chapters and topics of the selected subject.
6. Each chapter is represented by a card, displaying the chapter name and the user's progress in that chapter.
7. The user can click on a chapter card to view the details and resources related to that chapter.
8. The dashboard screen updates to display the details and resources of the selected chapter.
9. The user can view and interact with various resources such as notes, quizzes, worksheets, and extra practice questions within the chapter.
10. The user can mark resources as completed or track their progress using checkboxes or other indicators.
11. The user can navigate back to the subject or chapter level by using a back button or breadcrumb navigation.
12. The user can toggle between admin mode and daily use mode to manage content or focus on studying respectively.
13. In admin mode, the user can add, edit, or delete subjects, chapters, and resources.
14. In daily use mode, the user can only view and interact with the existing content without making any changes.
15. The user can switch between subjects, chapters, and resources as needed to access different study materials.

By following this user flow, the dashboard screen provides a structured and intuitive interface for users to organize and manage their study materials effectively.



#### TODO : Futher more screens to come...


## Development Progress: 

### Research and Planning
- [X] Conduct research on the app idea
- [X] Define Data Models
- [ ] Create User Stories for Frontend and Backend

### Frontend Development
#### Dashboard Component
- [ ] Display List of Subjects
  - [ ] Subject Cards with Progress Indicators
- [ ] Clicking on a Subject
  - [ ] Display Chapters and Topics
    - [ ] Chapter Cards with Progress Indicators
- [ ] Clicking on a Chapter
  - [ ] Display Details and Resources
    - [ ] Resource Cards (Notes, Quizzes, etc.)
    - [ ] Checkbox Functionality for Completed Resources
    - [ ] Pinning Notes to the Top

#### Admin Mode
- [ ] Toggle Functionality
- [ ] Add, Edit, Delete Subjects
- [ ] Add, Edit, Delete Chapters and Resources

#### User Interface Design
- [ ] Styling and Layout for Dashboard
- [ ] Responsive Design for Various Screen Sizes

### Backend Development
- [ ] Set Up MongoDB Database
- [ ] Define Schemas for User, Task, Subject, Chapter, Quiz, Assignment
- [ ] Implement User Registration and Login
- [ ] Profile Setup Functionality
- [ ] Dynamic Content Management
  - [ ] CRUD Operations for Subjects, Chapters, and Resources
- [ ] Interactive Learning Modules
- [ ] Feedback and Progress Tracking
- [ ] Resource Exploration
- [ ] Admin Mode Functionality

### Database Integration
- [ ] Connect Backend with MongoDB
- [ ] Test Database Operations

### Testing
- [ ] Unit Testing for Frontend Components
- [ ] Backend Testing for API Endpoints

### Deployment
- [ ] Deploy Frontend on Hosting Platform (e.g., Netlify)
- [ ] Deploy Backend on Server (e.g., Heroku)

### MVP Features
- [ ] User Registration and Login
- [ ] Profile Setup
- [ ] Dynamic Content Management
- [ ] Interactive Learning Modules
- [ ] Feedback and Progress Tracking
- [ ] Resource Exploration
- [ ] Admin Mode

### User Feedback and Iteration
- [ ] Collect User Feedback on MVP
- [ ] Iterate and Improve Based on User Suggestions

### Additional Features (Future Versions)
- [ ] Collaborative Tools
- [ ] Time Management
- [ ] Personalized Study Plans
- [ ] Streaks for Goals
  - **Description:** Introduce a streak system to encourage students to set and achieve study goals consistently.
  - **Implementation:**
    - Set personalized study goals (e.g., chapters read, problems solved) with a daily target.
    - Display a visible streak counter indicating consecutive days of goal achievement.
    - Reward users for reaching streak milestones, reinforcing positive study habits.
- [ ]  Passive-Aggressive Humor Reminders
  - **Description:** Infuse humor into study reminders to make the learning experience lighthearted and engaging.
  - **Implementation:**
    - Craft playful and motivational messages in reminder notifications.
    - Consider introducing a friendly mascot or avatar to deliver reminders with a touch of humor.
    - Experiment with creative and humorous content to encourage users to return to their study routine.


