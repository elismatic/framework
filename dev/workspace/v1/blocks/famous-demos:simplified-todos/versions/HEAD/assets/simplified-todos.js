'use strict';

FamousFramework.scene('famous-demos:simplified-todos', {
    behaviors: {
        '#list': {
            'inner-html': function (todos) {
                return todos.map(function (todo) {
                    return '<li>' + todo + '</li>';
                }).join('');
            }
        }
    },
    events: {
        '#input': {
            'famous:events:change': function ($state, $event) {
                $state.set('todos', $state.get('todos').concat($event.value));
            }
        }
    },
    states: {
        todos: []
    },
    tree: '\n        <div id="todos">\n            <h1>todos</h1>\n            <input id="input" name="todo" placeholder="What needs to be done?">\n            <ol id="list"></ol>\n        </div>\n    '
}).config({
    includes: ['todos.css']
});