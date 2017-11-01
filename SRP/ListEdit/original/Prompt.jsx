import React from 'react';

class Prompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: ''
        }
    }

    render() {
        return (
            <div className="popup">
                <form>
                    <input type="text" placeholder="名称" value={this.state.name}/>
                    <input type="text" placeholder="类型" value={this.state.type}/>
                    <button type="submit">提交</button>
                </form>
            </div>
        );
    }

    submit() {
        fetch('/add', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                type: this.state.type
            })
        })
    }
}

export default Prompt;