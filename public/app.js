
$(document).ready(function() {
  $.getJSON('/api/todos')
  .then(addTodos);

  $('#todoInput').keypress(function(event) {
    if (event.which == 13) {
      createTodo();
    }
  });
  $('.list').on('click', 'span', function(event) {
    // EVENT DELEGATION
    if (!event.target.matches('span')) {
      return;
    }
    removeTodos($(this).parent());
  });
  $('.list').on('click', 'li', function(event) {
    $(this).toggleClass('done');
  });
});

function renderTodo(todo) {
  const newTodo = $(`<li class='task'
  data-id='${todo._id}'>${todo.name} <span>X</span></li>`);
  if (todo.completed) {
    newTodo.addClass('done');
  }
  $('.list').append(newTodo);
}

function addTodos(todos) {
  todos.forEach(function(todo) {
    renderTodo(todo);
  });
}

function createTodo() {
  const userInput = $('#todoInput').val();
  $.post('/api/todos/', {
    name: userInput
  })
  .then(done => {
    $('#todoInput').val('');
    renderTodo(done);
  })
  .catch(err => {
    console.log(err);
  });
}

function removeTodos(todo) {
  const taskID = todo.data('id');
  const deleteURL = '/api/todos/' + taskID;
  $.ajax({
    method: 'delete',
    url: deleteURL
  })
  .then(deleteDone => {
    console.log(deleteDone);
    todo.remove();
  })
  .catch(err => {
    console.log(err);
  });
}
