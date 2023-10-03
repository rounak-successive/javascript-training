# javascript-training

## 12 Factor App principle

The 12 Factor App is a set of best practices for building modern, scalable, and maintainable software applications. These principles are designed to help developers create applications that are easy to deploy, manage, and scale. The 12 principles are:

1.  **Codebase**: Use a single codebase for the application. This means that the app's source code should be stored in one place, like a version control system, so everyone on the team can work from the same code.

2.  **Dependencies**: Dependencies, such as libraries and frameworks, should be clearly defined. This ensures that the application specifies its external dependencies explicitly, making it easier to reproduce the development environment and avoid unexpected issues caused by changes in these dependencies.Also the application must be isolated from the existence of site(system-wide) packages.

3.  **Config**: These include everything that is likely to change between deployement enviroments and they should be stored outside the codebase. This separation of configuration from code allows for greater flexibility because settings can be changed without altering the code itself. Typically, this is achieved through environment variables.

4.  **Backing Services**: External applications and services, like databases or message queues, should be treated as attached resources. This means that the application should be designed to work with these services through well-defined interfaces. It becomes easier to switch or upgrade these services without major code changes.

5.  **Build, Release, Run**: The process of building the application, releasing it to a production environment, and running it should be distinct and separate. This separation ensures consistency and reliability, as each stage has its own set of responsibilities and can be automated.

6.  **Processes**: The application should be run as one or more stateless processes that share nothing.The data that must be available for future usage must be stored in a stateful backing service such as a database.

7.  **Port Binding**: The application must operate on its own without needing to be placed inside an external web server. It must handle web requests directly by setting up its own port and responding to web traffic, making it self-contained and independent. This independence simplifies deployment and management, as we don't have to worry about configuring and coordinating with external web servers to run the application.

8.  **Concurrency**: Scaling should be achieved by adding more processes (horizontal scaling) rather than by ugrading hardware(vertical scaling). This approach simplifies the scaling process and takes advantage of modern cloud and containerization platforms.

9.  **Disposability**: The application should be designed to start and stop easily. This disposability ensures that processes can be terminated without losing important data or causing disruptions, making it easier to manage and scale the application.

10. **Dev/Prod Parity**: The development, testing, and production environments should be as similar as possible. This minimizes surprises when deploying code to production and helps ensure that the application behaves consistently across different environments.

11. **Logs**: Logs should be treated as event streams and written to a standard output. This makes it easier to monitor the application's behavior, troubleshoot issues, and gather insights for debugging and analysis.

12. **Admin Processes**: Administrative tasks, such as database migrations, should be run as separate, one-off processes. This separation ensures that these tasks do not interfere with the normal operation of the application and can be executed independently when needed.

## Atomic Design

Atomic design is a method for creating websites and applications by breaking them down into smaller, reusable building blocks. These blocks are inspired by concepts like atoms,molecules that can be combined to build larger and more complex components.

At the core of atomic design are five levels of building blocks:

1. **Atoms**: These are the smallest elements like buttons, input fields, and icons.

2. **Molecules**: Molecules are combinations of atoms, like a search bar (which contains input fields and a button).

3. **Organisms**: These are even larger components that combine molecules together, like a header (which includes a logo, navigation menu, and search bar).

4. **Templates**: Templates are where we start structuring actual pages by arranging different organisms together, like creating a specific webpage layout.

5. **Pages**: Finally, pages are the specific instances of templates filled with real content.

So, atomic design helps designers and developers create consistent and flexible user interfaces by building and reusing these smaller building blocks, making it easier to maintain and scale websites and applications.
