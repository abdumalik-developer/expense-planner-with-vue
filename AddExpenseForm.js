export default {
    template:` <section class="bg-white border border-neutral-200 p-6 rounded-xl shadow-sm mb-10">
                <h2 class="text-xl font-medium mb-4">Add Expense</h2>
                <form class="grid grid-cols-1 sm:grid-cols-4 gap-4" @submit.prevent="add">
                    <div class="flex flex-col text-sm">
                        <label class="mb-1 text-neutral-600">Date</label>
                        <input type="date" name="date" v-model="newExpense.spentDate"
                            class="px-3 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400" />
                    </div>
                    <div class="flex flex-col text-sm sm:col-span-2">
                        <label class="mb-1 text-neutral-600">Description</label>
                        <input type="text" name="description" v-model="newExpense.description" placeholder="Coffee, groceries, taxi..."
                            class="px-3 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400" />
                    </div>
                    <div class="flex flex-col text-sm">
                        <label class="mb-1 text-neutral-600">Amount</label>
                        <input type="number" step="0.01" v-model="newExpense.amount" name="amount" placeholder="0.00"
                            class="px-3 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400" />
                    </div>
                    <div class="flex flex-col text-sm sm:col-span-2">
                        <label class="mb-1 text-neutral-600">Category</label>
                        <select name="category"
                            v-model="newExpense.category_id"
                            class="px-3 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400">
                            
                            <option v-for="category in categories" :key="category.id" :value="category.id">
                                {{category.name}}
                            </option>
                            
                        </select>
                    </div>
                    <div class="sm:col-span-2 flex items-end">
                        <button type="submit"
                            class="w-full py-2 rounded-md bg-neutral-900 text-white font-medium hover:bg-neutral-700">Add</button>
                    </div>
                    <div class="sm:col-span-2 flex items-end">
                        <button type="reset"
                            class="w-full py-2 rounded-md border border-neutral-300 hover:bg-neutral-50"
                            @click="resetForm"
                        >Reset</button>
                    </div>
                </form>
            </section>`,
    data(){
        return {
            newExpense:{

                spentDate: null,

                description: null,

                amount: null,

                category_id: null

            }
        }
    },
    props:{
        categories:{
            type: Array,
            default: []
        }
    },
    methods:{
         add(){

            this.$emit('add', {

                id: crypto.randomUUID(),

                spentDate: this.newExpense.spentDate,

                description: this.newExpense.description,

                amount: this.newExpense.amount,

                category_id: this.newExpense.category_id

            });

            this.resetForm();

        },
        resetForm(){
            
            this.newExpense.spentDate = null;
            this.newExpense.description = null;
            this.newExpense.amount = null;
            this.newExpense.category_id = null;

        }
    }

}