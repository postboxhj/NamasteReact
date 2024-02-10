# NamasteReact

# What is Emmet?
    -> When you type ! and then hit the Tab key, Emmet expands that abbreviation into a basic HTML boilerplate. This feature is part of Emmet's functionality, which allows developers to quickly scaffold common HTML structures without having to type out every element manually.

# What is the difference between a library and a framework?
    -> Library: A collection of utilities or functions that developers can selectively pick and choose from to use in their projects. Libraries offer more flexibility and control to developers, allowing them to integrate specific functionalities as needed without imposing strict conventions.

    Framework: A comprehensive software package that provides a structured environment and predefined patterns for building applications. Frameworks often come with specific conventions and guidelines that developers are expected to follow, providing a higher level of abstraction and imposing more structure on the development process.

# What is CDN, why do we use it?
    ->a CDN (Content Delivery Network) helps deliver the content users request from websites and applications by optimizing the process of fetching and serving that content from servers. When a user requests content, such as a web page, image, video, or script, the CDN acts as an intermediary between the user and the original server where the content is hosted.

# Why the React is known as React?
    ->The name "React" is indeed justified by the way the library responds to updates made by the user or changes in application state. React is designed to efficiently update the user interface in response to these changes, hence the name "React."

# What is Crossorigin in the script tag?
    ->The crossorigin attribute in a <script> tag is used to specify how the browser should handle requests made to load the script file from a different origin (domain, protocol, or port) than the one serving the current web page. It is a security feature that helps prevent certain types of attacks, such as Cross-Origin Resource Sharing (CORS) violations.

# What is the difference between the React and ReactDOM?
    ->In summary, React is the core library for building user interfaces, while ReactDOM provides the necessary tools and APIs for integrating React components with the browser environment and rendering them into the DOM. Both React and ReactDOM are essential parts of the React ecosystem and work together to enable the creation of dynamic, interactive, and performant web applications.

# What is the difference between react.development.js and react.production.js files via CDN?
    ->When including React via a CDN (Content Delivery Network), developers have the option to choose between the development and production versions based on their specific requirements. During development, developers typically use the development version for easier debugging and troubleshooting. However, when deploying the application to production, it's advisable to switch to the production version to optimize performance and reduce file size.

# What is async and defer?
    ->In summary:

Use async when you want the script to execute independently and as soon as possible, regardless of the order in which other resources load.
Use defer when you want the script to load in the background but wait until the HTML parsing is complete and the DOM is ready before executing, maintaining the order of execution with other scripts.