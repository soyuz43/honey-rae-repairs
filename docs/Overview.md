# _Honey-Rae-Repairs_

## Contents

- **src/**
  - **App.jsx** - Root component that handles routing.
  - **index.js** - Entry point of the React application.
  - **components/**
    - **auth/**
      - **Login.jsx** - Manages user login functionality.
      - **Register.jsx** - Handles new user registration.
    - **customers/**
      - **CustomerList.jsx** - Displays a list of customers.
      - **CustomerDetails.jsx** - Shows detailed information about a customer.
    - **employees/**
      - **EmployeeList.jsx** - Lists all employees.
      - **EmployeeDetails.jsx** - Provides details about specific employees.
      - **EmployeeForm.jsx** - Form for updating employee profiles.
    - **navBar/**
      - **NavBar.jsx** - Navigation bar for the application.
    - **tickets/**
      - **TicketList.jsx** - Lists all tickets.
      - **Ticket.jsx** - Detailed view of a single ticket.
      - **TicketFilterBar.jsx** - Allows for filtering the ticket list.
    - **users/**
      - **User.jsx** - Displays user information.
    - **landingPage/**
      - **LandingPage.jsx** - The initial landing page of the application.
  - **views/**
    - **ApplicationViews.jsx** - Manages the routing of views based on user authorization.
    - **Authorized.jsx** - Redirects unauthorized users.
  - **services/**
    - **customerService.jsx** - Manages customer-related data fetching.
    - **employeeServices.jsx** - Handles employee-related operations.
    - **ticketService.jsx** - Manages ticket-related functionality.
    - **userService.jsx** - Manages user-related operations.

---

# API Services


- **Customer Services**:
  - `getCustomerByUserID` - Fetches detailed customer information by user ID.
- **Employee Services**:
  - `getAllEmployees` - Retrieves all employees from the database.
  - `getEmployeeByUserId` - Fetches detailed information of an employee by their user ID.
  - `updateEmployee` - Updates an employee's profile information.
- **Ticket Services**:
  - `getAllTickets` - Retrieves all tickets.
  - `assignTicket` - Assigns a ticket to an employee.
  - `updateClosedTicket` - Marks a ticket as closed and updates it.
- **User Services**:
  - `getNonStaffUsers` - Fetches all users who are not staff.
  - `getStaffUsers` - Retrieves all staff users.
  - `getUserByEmail` - Fetches a user by their email address.
  - `createUser` - Registers a new user in the system.

## Endpoints

### Customer Services

---

#### **getCustomerByUserID**

- _Purpose:_ Retrieves detailed customer information by user ID.
- _Description:_ This method takes a user ID as a parameter and returns the corresponding customer data. It is used in the `CustomerDetails` component to display customer information.
- _**Return Value:**_ A promise resolving to a customer object containing details such as name, email, and other relevant information.

### Employee Services
---
#### **getAllEmployees**

- _Purpose:_ Retrieves all employees from the database.
- _Description:_ This method fetches a list of all employees and is used in the `EmployeeList` component to display a list of employees.
- _**Return Value:**_ A promise resolving to an array of employee objects.

#### **getEmployeeByUserId**

- _Purpose:_ Fetches detailed information of an employee by their user ID.
- _Description:_ This method takes a user ID as a parameter and returns the corresponding employee data. It is used in the `EmployeeDetails` component to display employee information.
- _**Return Value:**_ A promise resolving to an employee object containing details such as name, email, specialty, and hourly rate.

#### **updateEmployee**

- _Purpose:_ Updates an employee's profile information.
- _Description:_ This method takes an employee object as a parameter and updates the corresponding employee data in the database. It is used in the EmployeeForm component to save changes to an employee's profile.
- _**Return Value:**_ A promise resolving to the updated employee object.

### Ticket Services
---
#### **getAllTickets**

- _Purpose:_ Retrieves all tickets.
- _Description:_ This method fetches a list of all tickets and is used in the `TicketList` component to display a list of tickets.
- _**Return Value:**_ A promise resolving to an array of ticket objects.

#### **assignTicket**

- _Purpose:_ Assigns a ticket to an employee.
- _Description:_ This method takes a ticket ID and an employee ID as parameters and updates the ticket assignment in the database. It is used in the `TicketList` component to assign tickets to employees.
- _**Return Value:**_ A promise resolving to the updated ticket object.

#### **updateClosedTicket**

- _Purpose:_ Marks a ticket as closed and updates it.
- _Description:_ This method takes a ticket ID as a parameter and updates the ticket status to closed in the database. It is used in the `TicketList` component to mark tickets as closed.
- _**Return Value:**_ A promise resolving to the updated ticket object.

### User Services
---
#### **getNonStaffUsers**

- _Purpose:_ Fetches all users who are not staff.
- _Description:_ This method fetches a list of all non-staff users and is used in the `CustomerList` component to display a list of customers.
- _**Return Value:**_ A promise resolving to an array of user objects.

#### **getStaffUsers**

- _Purpose:_ Retrieves all staff users.
- _Description:_ This method fetches a list of all staff users and is used in the `EmployeeList` component to display a list of employees.
- _**Return Value:**_ A promise resolving to an array of user objects.

#### **getUserByEmail**

- _Purpose:_ Fetches a user by their email address.
- _Description:_ This method takes an email address as a parameter and returns the corresponding user data. It is used in the `Login` and `Register` components to authenticate users.
- _**Return Value:**_ A promise resolving to a user object containing details such as name, email, and other relevant information.

#### **createUser**

- _Purpose:_ Registers a new user in the system.
- _Description:_ This method takes a user object as a parameter and creates a new user in the database. It is used in the `Register` component to register new users.
- _**Return Value:**_ A promise resolving to the created user object.

---

# Component and Service Interaction

### Components

- **NavBar**: Utilizes `useNavigate` for routing across the application.
- **Login and Register**: Interact with `getUserByEmail` and `createUser` to manage user authentication.
- **TicketList and Ticket**: Use `getAllTickets`, `getAllEmployees`, `assignTicket`, and `updateClosedTicket` to manage ticket assignments and updates.
- **EmployeeList and EmployeeDetails**: Interact with `getStaffUsers` and `getEmployeeByUserId` to fetch and display employee data.
- **CustomerList and CustomerDetails**: Utilize `getNonStaffUsers` and `getCustomerByUserID` to fetch and display customer information.
- **ApplicationViews and Authorized**: Handle routing and user authorization using components like `Routes`, `Route`, and `Navigate`.

#### \*\*NavBar

- Interaction: The `NavBar` component utilizes the useNavigate hook from react-router-dom to handle routing across the application.
- Description: The `NavBar` component is responsible for rendering the navigation menu and handling route changes. It uses the useNavigate hook to navigate between routes.

#### \*\*Login and Register

- Interaction: The `Login` and `Register` components interact with the getUserByEmail and createUser services to manage user authentication.
- Description: The `Login` component uses the getUserByEmail service to authenticate users, while the `Register` component uses the createUser service to register new users.

#### \*\*TicketList and Ticket

- Interaction: The `TicketList` and `Ticket` components use the getAllTickets, getAllEmployees, assignTicket, and updateClosedTicket services to manage - ticket assignments and updates.
- Description: The `TicketList` component fetches all tickets using the getAllTickets service and displays them. The `Ticket` component fetches ticket details and updates the ticket status using the updateClosedTicket service.

#### \*\*EmployeeList and EmployeeDetails

- Interaction: The `EmployeeList` and `EmployeeDetails` components interact with the getStaffUsers and getEmployeeByUserId services to fetch and display - employee data.
  Description: The `EmployeeList` component fetches all employees using the getStaffUsers service, while the EmployeeDetails component fetches detailed employee information using the getEmployeeByUserId service.

#### \*\*CustomerList and CustomerDetails

- Interaction: The `CustomerList` and `CustomerDetails` components utilize the getNonStaffUsers and getCustomerByUserID services to fetch and display - customer information.
  Description: The `CustomerList` component fetches all customers using the getNonStaffUsers service, while the CustomerDetails component fetches detailed customer information using the getCustomerByUserID service.

#### \*\*ApplicationViews and Authorized

- Interaction: The `ApplicationViews` and Authorized components handle routing and user authorization using components like Routes, Route, and Navigate.
- Description: The `ApplicationViews` component manages the routing of views based on user authorization, while the Authorized component redirects unauthorized users to the login page.
