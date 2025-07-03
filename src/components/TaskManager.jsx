import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from "sonner"

const useLocalStorageTasks = () => {
  const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })
  const [error, setError] =  useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    try {
       if (typeof text === 'string' && text.trim()) {
      setTasks((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ])
    }
    toast.success(`Task added Successfully`)
    } catch (error) {
    toast.error('Type in your Task')
    }
   
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    try {
       setTasks((prev) => prev.filter((task) => task.id !== id))
        toast.success(`Task deleted Successfully`)
    } catch (error) {
      setError('Task not Deleted')
    }
  }

  const clearAll = () => setTasks([])

  return { tasks, addTask, toggleTask, deleteTask, clearAll }
}

const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask, clearAll } = useLocalStorageTasks()
  const [newTaskText, setNewTaskText] = useState('')
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(newTaskText)
    setNewTaskText('')
  }

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true)
      try {
        const res = await fetch(import.meta.env.VITE_API_URL)
        if (!res.ok) throw new Error('Failed to fetch tasks')
        const data = await res.json()
        const todos = data.slice(0, 10)

        const mapped = todos.map((task) => ({
          id: `api-${task.id}`,
          text: task.title || task.todo,
          completed: task.completed,
          createdAt: new Date().toISOString(),
        }))

        if (tasks.length === 0) {
          mapped.forEach((t) => addTask(t.text))
        }
      } catch (err) {
        console.error('Error fetching tasks:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-4 mt-14">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-3xl p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">📝 Task Manager</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={newTaskText}
              required
              
              onChange={(e) => setNewTaskText(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <Button type="submit" variant="default" size="sm">
              Add
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={() => {
                if (confirm("Are you sure you want to clear all tasks?")) {
                  clearAll()
                }
              }}
              className="mt-2 sm:mt-0"
            >
              Clear All
            </Button>
          </div>
        </form>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <Button variant={filter === 'all' ? 'default' : 'secondary'} size="sm" onClick={() => setFilter('all')}>
            All
          </Button>
          <Button variant={filter === 'active' ? 'default' : 'secondary'} size="sm" onClick={() => setFilter('active')}>
            Active
          </Button>
          <Button variant={filter === 'completed' ? 'default' : 'secondary'} size="sm" onClick={() => setFilter('completed')}>
            Completed
          </Button>
        </div>

        {/* Tasks */}
        {loading && <p className="text-center text-gray-500 dark:text-gray-400">Loading tasks...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <ul className="space-y-3">
          {!loading && filteredTasks.length === 0 ? (
            <li className="text-center text-gray-500 dark:text-gray-400">No tasks found</li>
          ) : (
            filteredTasks.map((task) => (
              <li
                key={task.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="mt-1 sm:mt-0 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span
                    className={`break-words ${
                      task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-white'
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <Button 
                variant="destructive" 
                size="sm" 
                onClick={() => deleteTask(task.id)} 
                className="mt-2 sm:mt-0"
              >
                  Delete
                </Button>
              </li>
            ))
          )}
        </ul>

        {/* Stats */}
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>{tasks.filter((t) => !t.completed).length} tasks remaining</p>
        </div>
      </div>
    </div>
  )
}

export default TaskManager
