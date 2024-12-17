// Import Apollo Client libraries for connecting to the GraphQL server
import {
    createHttpLink,
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

// Import Outlet from React Router for nested routes
import { Outlet } from "react-router-dom";

// Import the Header and Footer components
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

// Create an HTTP link to connect to the GraphQL API endpoint
const httpLink = createHttpLink({
    uri: "/graphql",
});

// Create an Apollo client with the HTTP link and an in-memory cache
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

// The main App component that serves as the layout for the entire application
function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </ApolloProvider>
    );
}

export default App;