// js.jsx
//var React = require('react');
//var ReactDOM = require('react-dom');

//var Parse = require('parse');
//var ParseReact = require('parse-react');

var HelloComponent = React.createClass({
    displayName: 'HelloComponent',
    render: function () {
        return (
            <h1>
                Hello, world!react I am a component.
            </h1>
        );
    }
});

var FeedList = React.createClass({
    render: function () {
        var createItem = function (itemText) {
            return <li>{itemText}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});
var FeedApp = React.createClass({
    getInitialState: function () {
        return {items: [], text: ''};
    },
    onChange: function (e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var nextItems = this.state.items
        nextItems.unshift.apply(nextItems, [this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    render: function () {
        return (
            <div>
                <h3>News Feed</h3>


                <form onSubmit={this.handleSubmit}>
                    <div class="input-field">
                        <input class="validate" onChange={this.onChange} value={this.state.text}/>
                        <button>{'Add #' + (this.state.items.length + 1)}</button>
                    </div>
                </form>

                <FeedList items={this.state.items}/>
            </div>
        );
    }
});
ReactDOM.render(
    React.createElement(FeedApp, null),
    document.getElementById('example')
);
