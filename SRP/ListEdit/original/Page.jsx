import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <div>
                    <button type="button">新增</button>
                </div>
                <ul>
                    {this.state.list.map(item => (
                        <li>
                            <div className="name">{item.name}</div>
                            <div className="actions">
                                <button type="button">修改</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        );
    }
}

export default Page;