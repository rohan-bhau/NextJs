import { revalidatePath } from "next/cache"
import { postNewTask, postTask } from "./tasks"
import { redirect } from "next/navigation"
// import { redirect } from "next/dist/server/api-utils"

export const createATask = async (formData) => {
    'use server'

    // const title = formData.get("title")
    const newTask = Object.fromEntries(formData.entries())
    console.log("form Details", newTask)

    const res = await postTask(newTask)
    if (res.ok) {
        revalidatePath("/tasks")
    }
    return res

}

export const addNewTask = async (formData) => {
    'use server'
    const newTask = Object.fromEntries(formData.entries())
    console.log("Task Details", newTask)

    const res = await postNewTask(newTask)
    if (res.ok) {
        revalidatePath("/tasks")
        // redirect("/tasks")
        redirect("/tasks")
    }
    return res
}