import React, { createContext, useReducer } from "react";
import { IQuizState } from "./@types/state.type";
import quizReducer, { quizState } from "./quiz/quiz.reducer";

const AppContext = createContext<{
  state: IQuizState;
  dispatch: React.Dispatch<any>;
}>({
  state: quizState,
  dispatch: () => null,
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(quizReducer, quizState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
