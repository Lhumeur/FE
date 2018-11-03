$(document).ready(function () {
    $('.addTaskBtn').click(function () {
        $.ajax({
            url: 'http://localhost:9999/api/tasks',
            method: 'POST',
            data: {
                title: $('.addTaskTitle').val(),
                description: $('.addTaskDescription').val()
            },
            success: function (response) {
                var task = response.task;

                $('.tasks').append(
                    '<div class="task" data-id="' + task.id + '">' +
                    '<p class="title">' + task.title + '</p>' +
                    '<p class="description">' + task.description + '</p>' +
                    '<div class="buttons">' +
                    '<button class="editBtn">Edit</button>' +
                    '<button class="doneBtn">Done</button>' +
                    '<button class="deleteBtn">Delete</button>' +
                    '</div>' +
                    '</div>'
                );

                $('.addTaskTitle').val('');
                $('.addTaskDescription').val('');
            },
            error: function (error) {
                console.log(error);
            }
        });
    });

    $('.tasks').on('click', '.editBtn', function (evt) {
        var editMode = $(event.target).text(),
            id = $(evt.target).closest('.task').data('id'),
            title = $(event.target).closest('.task').children('.title').text(),
            titleBlock = $(event.target).closest('.task').children('.title'),
            description = $(event.target).closest('.task').children('.description').text(),
            descriptionBlock = $(event.target).closest('.task').children('.description');

        if (editMode === 'Edit') {
            $(titleBlock).html(
                '<input type="text" class="editTaskTitle" value="' + title + '">'
            );
            $(descriptionBlock).html(
                '<input type="text" class="editTaskDescription" value="' + description + '">'
            );
            $(evt.target).text('Save');
            $(evt.target).siblings('.doneBtn').prop('disabled', true);
            $(evt.target).siblings('.deleteBtn').prop('disabled', true);
        } else {
            $.ajax({
                url: 'http://localhost:9999/api/tasks/' + id,
                method: 'PUT',
                data: {
                    title: $(titleBlock).find('.editTaskTitle').val(),
                    description: $(descriptionBlock).find('.editTaskDescription').val(),
                },
                success: function () {
                    $(evt.target).text('Edit');
                    $(evt.target).siblings('.doneBtn').prop('disabled', false);
                    $(evt.target).siblings('.deleteBtn').prop('disabled', false);

                    title = $(titleBlock).find('.editTaskTitle').val();
                    description = $(descriptionBlock).find('.editTaskDescription').val();

                    $(titleBlock).find('.editTaskTitle').remove();
                    $(descriptionBlock).find('.editTaskDescription').remove();

                    $(titleBlock).html(title);
                    $(descriptionBlock).html(description);
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    });

    $('.tasks').on('click', '.doneBtn', function (evt) {
        var id = $(evt.target).closest('.task').data('id'),
            task = $(event.target).closest('.task');

        $.ajax({
            url: 'http://localhost:9999/api/tasks/' + id,
            method: 'PUT',
            data: {
                status: 'Done',
            },
            success: function () {
                $(task).addClass('done');
            },
            error: function (error) {
                console.log(error);
            }
        });
    });


    $('.tasks').on('click', '.deleteBtn', function (evt) {
        $.ajax({
            url: 'http://localhost:9999/api/tasks/' + $(evt.target).closest('.task').data('id'),
            method: 'DELETE',
            success: function () {
                $(evt.target).closest('.task').remove();
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});