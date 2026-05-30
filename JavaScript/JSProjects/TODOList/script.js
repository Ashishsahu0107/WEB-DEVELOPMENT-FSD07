(() => {
  const STORAGE_KEY = 'todo_list_v1';

  const todoForm = document.getElementById('todoForm');
  const todoInput = document.getElementById('todoInput');
  const todoList = document.getElementById('todoList');
  const emptyState = document.getElementById('emptyState');

  const totalCountEl = document.getElementById('totalCount');
  const activeCountEl = document.getElementById('activeCount');
  const clearCompletedBtn = document.getElementById('clearCompletedBtn');

  const filterButtons = Array.from(document.querySelectorAll('.filter'));

  let todos = loadTodos();
  let currentFilter = 'all';

  function uid() {
    return crypto && crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
  }

  function loadTodos() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter(t => t && typeof t === 'object')
        .map(t => ({
          id: String(t.id ?? uid()),
          text: String(t.text ?? ''),
          completed: Boolean(t.completed),
          createdAt: Number(t.createdAt ?? Date.now())
        }))
        .filter(t => t.text.trim().length > 0);
    } catch {
      return [];
    }
  }

  function saveTodos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }

  function formatTime(ts) {
    const d = new Date(ts);
    return d.toLocaleString(undefined, { hour: '2-digit', minute: '2-digit' });
  }

  function getFilteredTodos() {
    if (currentFilter === 'active') return todos.filter(t => !t.completed);
    if (currentFilter === 'completed') return todos.filter(t => t.completed);
    return todos;
  }

  function syncStats() {
    const total = todos.length;
    const active = todos.filter(t => !t.completed).length;
    const completed = total - active;

    totalCountEl.textContent = total;
    activeCountEl.textContent = active;
    clearCompletedBtn.disabled = completed === 0;
  }

  function render() {
    const list = getFilteredTodos();

    todoList.innerHTML = '';

    if (list.length === 0) {
      emptyState.style.display = 'flex';
    } else {
      emptyState.style.display = 'none';

      const frag = document.createDocumentFragment();
      for (const t of list) {
        const li = document.createElement('li');
        li.className = `todo${t.completed ? ' is-completed' : ''}`;
        li.dataset.id = t.id;

        li.innerHTML = `
          <div class="todo__left">
            <input class="todo__check" type="checkbox" ${t.completed ? 'checked' : ''} aria-label="Mark complete" />
            <div class="todo__text" title="${escapeHtml(t.text)}">${escapeHtml(t.text)}</div>
          </div>
          <div class="todo__right">
            <div class="todo__meta">${formatTime(t.createdAt)}</div>
            <button class="todo__del" type="button" aria-label="Delete">Delete</button>
          </div>
        `;

        // Checkbox
        li.querySelector('.todo__check').addEventListener('change', (e) => {
          t.completed = Boolean(e.target.checked);
          saveTodos();
          syncStats();
          render();
        });

        // Delete
        li.querySelector('.todo__del').addEventListener('click', () => {
          todos = todos.filter(x => x.id !== t.id);
          saveTodos();
          syncStats();
          render();
        });

        frag.appendChild(li);
      }
      todoList.appendChild(frag);
    }

    syncStats();
  }

  function escapeHtml(str) {
    return str
      .replaceAll('&', '&amp;')
      .replaceAll('<', '<')
      .replaceAll('>', '>')
      .replaceAll('"', '"')
      .replaceAll("'", '&#039;');
  }

  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (!text) return;

    todos.unshift({
      id: uid(),
      text,
      completed: false,
      createdAt: Date.now()
    });

    todoInput.value = '';
    saveTodos();
    render();
    todoInput.focus();
  });

  clearCompletedBtn.addEventListener('click', () => {
    todos = todos.filter(t => !t.completed);
    saveTodos();
    render();
  });

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      currentFilter = btn.dataset.filter || 'all';
      render();
    });
  });

  // initial paint
  render();
})();

