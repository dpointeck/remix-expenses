import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import expensesstyles from "~/styles/expenses.css";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: "First Expense",
        amount: 12.99,
        date: new Date()
    },
    {
        id: 'e2',
        title: "First Expense",
        amount: 142.99,
        date: new Date('2022-02-21')
    },
    {
        id: 'e3',
        title: "First Expense",
        amount: 54.99,
        date: new Date('2022-05-21')
    },
]

export default function ExpensesLayout() {
    return (
        <>
            <Outlet />
            <main>
                <ExpensesList expenses={DUMMY_EXPENSES}/>
            </main>
        </>
    );
}

export function links() {
    return [{ rel: "stylesheet", href: expensesstyles }];
}
