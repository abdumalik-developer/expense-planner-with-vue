import Task from "./components/Task.js";
import TaskList from "./components/TaskList.js";

export default {
    components: {
        tasks: TaskList,
        Task
    },
    data() {
        return {
            tasks: [
                {
                    id: "task-001",
                    name: "Grocery Shopping",
                    description: "Buy fruits, vegetables, and dairy for the week.",
                    category: "Personal",
                    completed: false
                },
                {
                    id: "task-002",
                    name: "Team Meeting",
                    description: "Discuss sprint progress and blockers with the dev team.",
                    category: "Work",
                    completed: true
                },
                {
                    id: "task-003",
                    name: "Gym Workout",
                    description: "Complete a 1-hour strength training session.",
                    category: "Health",
                    completed: false
                },
                {
                    id: "task-004",
                    name: "Write Blog Post",
                    description: "Draft a blog post on productivity hacks.",
                    category: "Creative",
                    completed: true
                },
                {
                    id: "task-005",
                    name: "Car Maintenance",
                    description: "Change engine oil and check tire pressure.",
                    category: "Errands",
                    completed: false
                },
                {
                    id: "task-006",
                    name: "Read Book",
                    description: "Read 30 pages of the current novel.",
                    category: "Leisure",
                    completed: true
                },
                {
                    id: "task-007",
                    name: "Update Portfolio",
                    description: "Add recent projects to personal portfolio website.",
                    category: "Career",
                    completed: false
                },
                {
                    id: "task-008",
                    name: "Call Parents",
                    description: "Catch up with parents over the phone.",
                    category: "Personal",
                    completed: true
                },
                {
                    id: "task-009",
                    name: "Plan Vacation",
                    description: "Research destinations and book flights.",
                    category: "Planning",
                    completed: false
                },
                {
                    id: "task-010",
                    name: "Clean Apartment",
                    description: "Vacuum, dust, and organize living space.",
                    category: "Chores",
                    completed: true
                }
            ]

        }
    },
    computed: {
        inProgressTasks() {
            return this.tasks.filter(item => !item.completed)
        },
        completedTasks() {
            return this.tasks.filter(item => item.completed)
        }
    }
}