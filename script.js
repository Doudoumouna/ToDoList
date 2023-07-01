document.addEventListener('DOMContentLoaded', function () {
  var taskInput = document.getElementById('taskInput');
  var addButton = document.getElementById('addButton');
  var taskList = document.getElementById('taskList');

  addButton.addEventListener('click', function () {
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
      var row = document.createElement('tr');
      row.className = 'collection-item';

      var taskCell = document.createElement('td');
      taskCell.textContent = taskText;

      var buttonsCell = document.createElement('td');
      buttonsCell.className = 'buttons';

      var deleteButton = document.createElement('button');
      deleteButton.className = 'btn red waves-effect waves-light delete-button';
      deleteButton.textContent = 'Löschen';

      var saveButton = document.createElement('button');
      saveButton.className = 'btn green waves-effect waves-light save-button';
      saveButton.textContent = 'Speichern';

      var editButton = document.createElement('button');
      editButton.className = 'btn yellow waves-effect waves-light edit-button';
      editButton.textContent = 'Bearbeiten';

      buttonsCell.appendChild(deleteButton);
      buttonsCell.appendChild(saveButton);
      buttonsCell.appendChild(editButton);

      row.appendChild(taskCell);
      row.appendChild(buttonsCell);

      taskList.appendChild(row);
      taskInput.value = '';

      deleteButton.addEventListener('click', function () {
        row.remove();
        playAudio('deleteSound');
      });

      saveButton.addEventListener('click', function () {
        playAudio('saveSound');
      });

      editButton.addEventListener('click', function () {
        playAudio('editSound');
      });
    }
  });

  function playAudio(id) {
    var audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
  }
});
