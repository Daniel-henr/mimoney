import PropTypes from 'prop-types';
import {createContext, useContext, useState } from "react";


const TransactionsContext = createContext()

export const TransactionsProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([])

    const addTransaction = (transaction) => {
        setTransactions((prevTransactions) => [...prevTransactions, transaction])
    }

    const totalBalance = transactions.reduce((acc, transaction) => {
        return transaction.type === 'Entrada'
            ? acc + transaction.value
            : acc - transaction.value

    }, 0)

    const totalIncome = transactions
        .filter((transaction) => transaction.type === 'Entrada')
        .reduce((acc, transaction) => acc + transaction.value, 0)

    const totalCosts = transactions
        .filter((transaction) => transaction.type === 'Saída')
        .reduce((acc, transaction) => acc + transaction.value, 0)

    return (
        <TransactionsContext.Provider
            value={{transactions, addTransaction, totalBalance, totalIncome, totalCosts}}
        >
            {children}
        </TransactionsContext.Provider>
    )
}

TransactionsProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useTransactions = () => {
    return useContext(TransactionsContext)
}