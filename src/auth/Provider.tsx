import React, { useReducer } from "react";

type ACTIONTYPE =
  | { type: "LOGIN"; payload: string }
  | { type: "LOGOUT"; payload: string };

const initialState = {
  isAuthenticated: false,
  username: "Nastu",
  token: "",
};
export const AuthContext = React.createContext<{
  state: typeof initialState;
  dispatch: React.Dispatch<ACTIONTYPE>;
}>({
  state: initialState,
  dispatch: () => {},
});
const reducer = (
  state: typeof initialState,
  action: ACTIONTYPE
): typeof initialState => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("username", JSON.stringify(action.payload));
      // localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default function Provider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
