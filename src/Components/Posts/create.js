import React from 'react'
import axios from 'axios'

class Create extends React.Component {
    render() {
      return (
        <div className="container is-widescreen" style={{ marginTop: 30 }}>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Title</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Description</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <textarea className="textarea" placeholder="Add post description"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Category</label>
                </div>
                <div className="field-body">
                    <div className="field is-narrow">
                    <div className="control">
                        <div className="select is-fullwidth">
                        <select>
                            <option>Business development</option>
                            <option>Marketing</option>
                            <option>Sales</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Meta</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input className="input" type="text" placeholder="e.g. Partnership opportunity" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Question</label>
                </div>
                <div className="field-body">
                    <div className="field">
                    <div className="control">
                        <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
                    </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label">
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary">
                                Send message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
   }
}

export default Create
