var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function () {
        return (
            React.createElement('form', {className: 'contactForm'},
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Imię',
                    pattern: '[a-zA-Z]',
                    value: this.props.contact.firstName,
                }),
                React.createElement('input', {
                    type: 'text',
                    required: "required",
                    pattern: '[a-zA-Z]',
                    placeholder: 'Nazwisko',
                    value: this.props.contact.lastName,
                }),
                React.createElement('input', {
                    type: 'email',
                    required: "required",
                    placeholder: 'Email',
                    value: this.props.contact.email,
                }),
                React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
            )
        )
    },
})