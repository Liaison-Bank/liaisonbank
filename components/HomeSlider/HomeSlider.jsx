import React, { Component } from 'react'

export default class HomeSlider extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="column">
                        <h2>Column One</h2>
                        <p>This is the first column.</p>
                    </div>
                    <div className="column">
                        <h2>Column Two</h2>
                        <p>This is the second column.</p>
                    </div>
                </div>
            </div>
        )
    }
}
