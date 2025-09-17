import AddExpenseForm from "./AddExpenseForm.js";
import ExpensesTable from "./ExpensesTable.js";

export default {
    components: {
        AddExpenseForm,
        ExpensesTable
    },
    data() {
        return {
           
            totalBudget: 14_000_000,

            expenses: [],

            categories: [
                {
                    id: 1,
                    name: "Groceries"
                },
                {
                    id: 2,
                    name: "Transport"
                },
                {
                    id: 3,
                    name: "Dining"
                },
                {
                    id: 4,
                    name: "Utilities"
                },
                {
                    id: 5,
                    name: "Other"
                }
            ]

        }
    },
    computed: {
        totalAmount(){
            return this.expenses.reduce((accumulator,current)=>accumulator+current.amount, 0);
        },
        currentMonthExpenses(){

            const currentMonth = new Date().getMonth();

            const currentYear = new Date().getFullYear();

            return this.expenses.reduce((accumulator, current)=>{

                if( 
                    currentMonth === ( new Date( Date.parse(current.spentDate) ) ).getMonth() 
                    &&
                    currentYear === ( new Date( Date.parse(current.spentDate) ) ).getFullYear() 
                ){

                    return accumulator + current.amount;
                
                }

                return accumulator;

            }, 0);

        }
    },
    methods:{
        
        add(expense){

            this.expenses.push(expense);

        }
        
    }

}