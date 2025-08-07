document.addEventListener("DOMContentLoaded", () => { 
  const todoForm = document.getElementById("todo-form"); 
  const todoInput = document.getElementById("todo-input"); 
  const todoDate = document.getElementById("todo-date"); 
  const todoList = document.getElementById("todo-list");
  const filterInput = document.getElementById("filter-input");

todoForm.addEventListener("submit", (e) => { e.preventDefault(); 
  const taskText = todoInput.value.trim();
  const taskDate = todoDate.value;

if (!taskText || !taskDate) return alert("Please enter both task and date.");

const li = document.createElement("li");
li.innerHTML = `<span class="task">${taskText} - ${taskDate}</span><button class="delete-btn">Delete</button>`;
todoList.appendChild(li);

todoInput.value = "";
todoDate.value = "";

});

todoList.addEventListener("click", (e) => { 
  if (e.target.classList.contains("delete-btn")) { 
    e.target.parentElement.remove(); 
    
  } 
  
});

filterInput.addEventListener("input", () => { const filter = filterInput.value.toLowerCase(); 
document.querySelectorAll("#todo-list li").forEach((li) => { 
  const text = li.querySelector(".task").innerText.toLowerCase(); 
  li.style.display = text.includes(filter) ? "flex" : "none"; 
  
}); 
  });
    });

