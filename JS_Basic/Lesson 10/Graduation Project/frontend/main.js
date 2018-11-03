$(document).ready(function () {

    $.ajax({
        url: 'http://localhost:9999/api/tasks',
        method: 'GET',
        success: function(response) {
            var tasks = response.tasks;

            tasks.forEach(function (task) {
                insertTask(task);
            });
        },
        error: function(error) {
            console.log(error);
        }
    });

});


$('.addTask').click(function () {

    var input = $('.addInput');

    $.ajax({
        url: 'http://localhost:9999/api/tasks',
        method: 'POST',
        data: {
            title: input.val(),

        },
        success: function(response) {
            var task = response.task;

            input.val('');
            $('.addTask').attr('disabled', true);

            insertTask(task);
        },
        error: function(error) {
            console.log(error);
        }
    });

});

$('.tasks').on('click', '.edit', function () {

    var editBtn    = $(this),
        doneBtn    = editBtn.siblings('.done'),
        titleBlock = editBtn.siblings('p'),
        title      = titleBlock.text();

    if(editBtn.text() === 'Edit') {
        titleBlock.html(
            '<input class="editInput" type="text" value ="' + title + '">'
        );

        editBtn.text('Save');
        doneBtn.prop('disabled', true);
    } else {

        var editInput  = titleBlock.find('.editInput'),
            inputValue = editInput.val(),
            id         = editBtn.parent()[0].id;

        $.ajax({
            url: 'http://localhost:9999/api/tasks/' + id,
            method: 'PUT',
            data: {
                title: inputValue
    },
        success: function() {
                titleBlock.text(inputValue);

                editBtn.text('Edit');
                doneBtn.prop('disabled', false);
        },
        error: function(error) {
            console.log(error);
        }
    });

    }


    editBtn.text('Save');
    doneBtn.prop('disabled', true);
});


$(document).keypress(function (event) {
    if (event.keyCode ===  13 && !$('.addTask').attr('disabled')) {
        $('.addTask').trigger('click');
    }
});

$('.addInput').keyup(function () {
        $('.addTask').attr('disabled', !$(this).val().trim());

});

function insertTask(task) {
    $('.tasks').prepend(
        '<div class="task" id="' + task.id + '">' +
        '<p>' + task.title + '</p>' +
        '<button class="edit">Edit</button>' +
        '<button class="done">Done</button>' +
        '<button class="remove">Remove</button>' +
        '</div>'
    );
}

