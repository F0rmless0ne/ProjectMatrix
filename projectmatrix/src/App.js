import React, { useEffect, useReducer, createContext } from 'react';
import axios from 'axios';
import ".styles.css";
import "{ useState }" from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function App() {
  let auth =getAuth();
  let googleProvider = new GoogleAuthProvider ();

}

// Create the initial state for the reducer
const initialState = {
  articles: [],
  loading: true
};

// Create the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        ...state,
        articles: action.payload,
        loading: false
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

// Create the context
const FirebaseContext = createContext();

// Create the FirebaseProvider component
const FirebaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('database_url/collection_name.json');
        dispatch({ type: 'SET_ARTICLES', payload: response.data });
      } catch (error) {
        console.error(error);
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    fetchData();
  }, []);

  return (
    <FirebaseContext.Provider value={state}>
      {children}
    </FirebaseContext.Provider>
  );
};

// Example usage in a component
const ExampleComponent = () => {
  const { articles, loading } = useContext(FirebaseContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>{article.title}</div>
      ))}
    </div>
  );
};

// Wrap your App component with the FirebaseProvider
const App = () => (
  <FirebaseProvider>
    <ExampleComponent />
  </FirebaseProvider>
);

export default App;

