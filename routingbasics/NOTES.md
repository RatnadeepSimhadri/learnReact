## This is a sample app to learn React V4 Routing 

React-Router does dynamic routing. Unlike Static routing from other frameworks such as Angular , Express and Ember   

React V4 is component based Routing. It also Provides several Routing Components according to the needs of application and platform 

React Router most of the times is used along with Redux   

React Router and Redux are basically HOF ( Higher Order Functions ) which are basically javascript functions that take in a Component and return an new one . So its common to find both of them composed to gether    

Main Parts of a Basic Client Side Routing are the BrowserRouter Module which is a HOF that takes 
in `<Routes/>` component and the `<Routes/>` component defines all the routes for the application 
using `<Switch /> and <Route />` components from react-router-dom

At the end we can have a  `<NavBar />` component which basically uses `<Link/>` from teh react-router-dom 
and defines / declares the Links to `/Home` and other routes defined as part of the `<Routes/>` Component
