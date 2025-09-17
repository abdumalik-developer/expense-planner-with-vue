export default {
    template: `<section class="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm">
                <h2 class="text-xl font-medium mb-4">Recent Expenses</h2>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="text-xs uppercase tracking-wide text-neutral-500 border-b border-neutral-200">
                                <th class="px-3 py-2 font-medium">Date</th>
                                <th class="px-3 py-2 font-medium">Description</th>
                                <th class="px-3 py-2 font-medium">Category</th>
                                <th class="px-3 py-2 font-medium text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody class="text-sm divide-y divide-neutral-200">
                            <tr v-for="expense in expenses" :key="expense.uniqueId">
                                <td class="px-3 py-2">{{expense.spentDate}}</td>
                                <td class="px-3 py-2">{{expense.description}}</td>
                                <td class="px-3 py-2">{{ getCategoryName( expense.category_id) }}</td>
                                <td class="px-3 py-2 text-right">{{expense.amount.toLocaleString("en-US")}}</td>
                            </tr>
                            <tr class="font-medium bg-neutral-100">
                                <td class="px-3 py-2" colspan="3">Total</td>
                                <td class="px-3 py-2 text-right">{{totalAmount.toLocaleString("en-US")}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>`,
    props:{
        expenses: {
            type: Array,
            default: []
        },
        categories:{
            type: Array,
            default: []
        }
    },
    computed:{
        totalAmount(){
            return this.expenses.reduce((accumulator,current)=>accumulator+current.amount, 0);
        }
    },
    methods:{
        getCategoryName( categoryId ){
            return this.categories.find( item=>item.id === categoryId ).name;

        }
    }
}