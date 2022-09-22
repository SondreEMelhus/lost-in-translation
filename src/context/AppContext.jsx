import { UserProvider } from "./UserContext"

/**
 * @Component
 * 
 * @param {children} param : The children of this component
 * 
 * Component responsible for managing the binding together all the contexts in the 
 * application.
 * 
 * @returns Wraps the imported providers around all the child components (all components in
 *          the application)
 */
const AppContext = ({ children }) => {

    return (
        <UserProvider>
            { children }
        </UserProvider>
    )
}

export default AppContext