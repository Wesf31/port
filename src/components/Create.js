import React from 'react'
import Dropzone from 'react-dropzone'
import { withRouter } from 'react-router-dom'


function Create () {
    return (
        <div>
            <p>sup sup</p>
            {/* <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop}
                >
                <p>Drag and drop a picture of some of your past projects or click to select a file.</p>
            </Dropzone> */}
        </div>
    )
}

export default withRouter (Create)