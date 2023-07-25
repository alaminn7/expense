import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Header from "./components/header";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import TransactionList from "./components/TransactionList";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <nav className="navbar">
          <NavLink exact activeClassName="active" to="/">
            Income
          </NavLink>
          <NavLink activeClassName="active" to="/expenses">
            Expenses
          </NavLink>
        </nav>

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <IncomeForm /> <TransactionList type="income" />
              </>
            }
          />
          <Route
            path="/expenses"
            element={
              <>
                <ExpenseForm />
                <TransactionList type="expense" />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
